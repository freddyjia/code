import TimerManager from "../../Components/TimerManager";
import DataPacket, { Package } from "./DataPacket";
import TCPSendTaskManager from "./TCPSendTaskManager";
import OpenNetworkingUI from "../../Tools/OpenNetworkingUI";
import Toast from "../../Tools/Toast";
import Global from "../../Global/Global";
import { HandshakeRequest, HandshakeResponse } from "../../Protos/Handshake";
import Language from "../../Global/Language";

//对一次网络tcp对话的封装//
export default class TCPSession
{
    //获取当前时间为。
    private lastShowToastUI = Date.now();
    //序列号 1开始。
    private seq:number = 1;
    //这里可以选择websoket 或者 tcpsoket --- 自己写tcpsoket(UNITY)  或者直接使用cocos自带的WebSocket。
    private webSocket:WebSocket
    //会话id
    private sessionID:number;
    //默认对话 没有绑定小游戏类型。
    // private gameType = GameTypeMgr.Config.None.gameType;
    //msgID对应(游戏类型和数据回调)。
    private listenDatas:{[msgID:number]:ListenData} = {};
    //握手成功标志。
    private isHandShake:boolean = false;
    //唯一id。
    // private uid:string;
    //许可令牌。
    // private token:string;
    //tcp的连接ip
    private ip:string;
    //tcp连接端口
    private port:string;
    //成功回调
    private funcConnectSuccess;
    //失败回调    
    private funcConnectFail;
    //挂起回调
    private hangOnSendFunc;
    //连接超时的timerID
    private connectTimeoutTimerID;
    //8位无符号整型值 内容
    //A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
    //* requested number of bytes could not be allocated an exception is raised.
    private uint8Buffer:Uint8Array = new Uint8Array(0);

    public Init(sessionID)
    {
        this.sessionID = sessionID;
    }

    //链接服务器（ip&port）
    public Connect(ip,port,funcSuccess,funcFail)
    {
        TCPSendTaskManager.GetInstance().InitSession(this.sessionID);//为sessionID配置一份数据结构

        this.ip = ip;
        this.port = port;
        this.funcConnectSuccess = funcSuccess;
        this.funcConnectFail = funcFail;

        OpenNetworkingUI.Show();//加载界面//
        //绕过闭包this限制
        let outside = this;

        let protocol = document.location.protocol;
        let prefix = "";
        //SSL(Secure Socket Layer，安全套接层) 
        if(protocol == "https:")
        {
            prefix = "wss://";//Layer。安全套接层（Secure Socket Layer）上面运行的websocket//
        }
        else
        {
            prefix = "ws://"
        }
        
        let host = prefix+ ip + ":" + port + "/ws";
        this.webSocket = new WebSocket(host);//初始化绑定host地址的websoket//
        
        if(Global.showLog == true)
            cc.log("Connect socket host: " + host);

        TimerManager.GetInstance().DeleteTimer(this.connectTimeoutTimerID);
        let connectTimeout = 10;
        this.connectTimeoutTimerID = TimerManager.GetInstance().CallActionDelay(()=>{
            this.Disconnect(); //10秒钟了还没反应,则关闭的一系列操作//
            funcFail("连接超时");
        },connectTimeout,null,0,0,true);

        //套接字开启
        this.webSocket.onopen = function (event) {
            TimerManager.GetInstance().DeleteTimer(outside.connectTimeoutTimerID);
            OpenNetworkingUI.Hide();
            if(Global.showLog == true)
                cc.log("onopen " + event.type + " this.readyState " + this.readyState);
            if(outside.webSocket != null)
                outside.HandShake(funcSuccess,funcFail);//->握手
        };

        //接收服务器消息//
        this.webSocket.onmessage = function (event) {
            // cc.log("onmessage " + event.data + " typeof(event.data) " + typeof(event.data)); 解析数据
            var reader = new FileReader();
            //byte为blob对象 
            reader.readAsArrayBuffer(event.data);//blob对象转array//
            reader.onload = (e)=>{
                var buf = new Uint8Array(reader.result as ArrayBuffer);

                if(Global.showLog == true)
                {
                    // cc.error(event.data);
                    // cc.error("onreceive " + buf + " e.total " + e.total + " e.loaded " + e.loaded);
                }
                

                let tmpBuffer = new Uint8Array(outside.uint8Buffer.length + buf.length);//长度的 合并包//
                tmpBuffer.set(outside.uint8Buffer,0);//
                tmpBuffer.set(buf,outside.uint8Buffer.length);//数据set 粘贴进tmpBuffer//
                
                outside.uint8Buffer = tmpBuffer;//换一下//
                let packageArray = new Array<Package>();//解包一组 消息号+数据+消息序列号(这条协议的第几次数发送)//


                outside.uint8Buffer = DataPacket.UnPacket(outside.uint8Buffer,packageArray);//解包拆包 将数据凑一起。//

                //cc.error("outside.uint8Buffer.length " + outside.uint8Buffer.length);
                
                for(let i = 0;i < packageArray.length;i++)
                {
                    let packageGet = packageArray[i];
                    if(packageGet.msgID != 1001)
                    {
                        //TODO:加入打印消息//yiba--//
                    }
                    if(packageGet.msgID!=1001){
                        if(Global.showLog == true)
                            cc.log("receive: msgID " + packageGet.msgID + " data.length " + packageGet.data.length + " seq: " + packageGet.seq);
                    }

                    if(packageGet.seq != 0)
                    {
                        let task = TCPSendTaskManager.GetInstance().GetTask(outside.sessionID,packageGet.seq);//获取到对应的task//
                        if(task != null)
                        {
                            task.successCallback(packageGet.data);
                            TCPSendTaskManager.GetInstance().CancelTask(outside.sessionID,packageGet.seq);
                        }
                    }
                    else
                    {
                        let listenData = outside.listenDatas[packageGet.msgID];//
                        if(listenData != null)
                        {
                            listenData.func(packageGet.data);
                        }
                    }
                }
            }
        };

        this.webSocket.onerror = function (event) {
            // TimerManager.GetInstance().DeleteTimer(timerID);
            //暂不依赖 onerror 回调
            OpenNetworkingUI.Hide();
            if(Global.showLog == true)
                cc.log("onerror " + event.returnValue + " event.type " + event.type);
                
        };
        this.webSocket.onclose = function (event) {
            // TimerManager.GetInstance().DeleteTimer(timerID);
            if(outside.webSocket != null)
            {
                //非主动断开
                outside.webSocket = null;
                TCPSendTaskManager.GetInstance().CleanSession(outside.sessionID);
            }
            if(Global.showLog == true)
                cc.log("onclose event.returnValue " + event.returnValue);
        };
    }

    public HandShake(successCallback,failCallback)
    {

        let req = HandshakeRequest.create();
        req.uid = window["selfId"];
        req.token = window["token"];
        let senddata = HandshakeRequest.encode(req).finish();
        let outside = this;

        this.Send(1,senddata,(data)=>{
            
            let res = HandshakeResponse.decode(data);
            if(res.statusCode == 0)
            {
                if(Global.showLog == true)
                    cc.error("handshake success");
                outside.isHandShake = true;
                successCallback();
            }
            else
            {
                if(Global.showLog == true)
                    cc.error("handshake fail");
                outside.isHandShake = false;
                outside.Disconnect();
            }
            
        },failCallback,true);
    }

    //关闭websoket 清除TCPSendTaskManager sessionID。
    //删除超时的计时器。
    public Disconnect()
    {
        if(this.webSocket != null)
        {
            if(this.webSocket.readyState != WebSocket.CLOSED && this.webSocket.readyState != WebSocket.CLOSING)
                this.webSocket.close();
        }
        TCPSendTaskManager.GetInstance().CleanSession(this.sessionID);
        this.webSocket = null;
        TimerManager.GetInstance().DeleteTimer(this.connectTimeoutTimerID);
    }

    public Send(msgID,data,successCallback,failCallback,hideNetworkingLoading)
    {

        if(this.webSocket == null)
        {
            //需要重连
            this.Connect(this.ip,this.port,()=>{
                Toast.Show(Language.text6);

                //因为断网挂起的消息，只会挂起一个
                this.hangOnSendFunc = ()=>{
                    this.Send(msgID,data,successCallback,failCallback,hideNetworkingLoading);
                };

            },()=>{

                if(Date.now() - this.lastShowToastUI > 1000 * 10)
                {
                    this.lastShowToastUI = Date.now();
                    Toast.Show(Language.text7);
                }
                this.Disconnect();

            });
            return;
        }

        if(this.webSocket.readyState != WebSocket.OPEN)
        {
            cc.error("非连接成功状态下的数据发送 msgID:" + msgID);
            return;
        }

        if(this.isHandShake == false && msgID != 1)
        {
            cc.error("未验证的连接，发送失败 isHandShake == false msgID:" + msgID);
            Toast.Show(Language.text8);
            return;
        }

        let dataSend = DataPacket.Packet(msgID,this.seq,data);
        TCPSendTaskManager.GetInstance().AddTask(this.sessionID,msgID,this.seq,data,(dataRes)=>{

            if(successCallback != null)
            {
                if(hideNetworkingLoading == false)
                    OpenNetworkingUI.Hide();
                successCallback(dataRes);
            }
        },(errMsg)=>{
            OpenNetworkingUI.Hide();
            if(failCallback != null)
            {
                failCallback(errMsg);
            }
        });
        if(hideNetworkingLoading == false)
        {
            OpenNetworkingUI.Show();
        }

        // if(msgID != 1001){
            if(Global.showLog == true)
                cc.log("send msg: msgID " + msgID + " seq " + this.seq + " data.length " + data.length);
        // }

        // cc.error("dataSend  " + dataSend);
        
        this.webSocket.send(dataSend);

        this.seq++;
    }

    public SendOneWay(msgID,data)
    {
        // this.SendOneWayWithGameType(GameTypeMgr.Config.None.gameType,msgID,data)
        if(this.webSocket == null)
            return;

        if(this.webSocket.readyState != WebSocket.OPEN)
            return;

        let dataSend = DataPacket.Packet(msgID,0,data);
        this.webSocket.send(dataSend);

        if(Global.showLog == true)
            cc.log("send oneway msg: msgID " + msgID + " data.length " + data.length);
    }

    public ListenMsg(msgID,func)
    {
        // this.ListenMsgWithGameType(GameTypeMgr.Config.None.gameType,msgID,func)
        let listenData = new ListenData();
        listenData.func = func;
        this.listenDatas[msgID] = listenData;
    }

    public Clean()
    {
        this.Disconnect();
    }

    public ResendHangOnMsg()
    {
        if(this.hangOnSendFunc != null)
        {
            this.hangOnSendFunc();
            this.hangOnSendFunc = null;
        }
    }

    public RefreshIPAndPort(ip, port)
    {
        this.ip = ip;
        this.port = port;
    }

    public ReConnectWhenHandShakeFail()
    {
        this.Connect(this.ip,this.port,this.funcConnectSuccess,this.funcConnectFail);
    }
}

class ListenData
{
    public func;
    public gameType;
}