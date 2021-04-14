import TCPSession from "./TCPSession";
import ccC from "../../Tools/ccC";
// import Global from "../../Global/Global";

/*tcp对话编号 用SessionID来区分*/
export enum TCPSessionID
{
    Hall   = 1,
    // Battle = 2,
}

//管理session集合字典的单例 向外提供访问session的接口哦
export default class TCPNetwork 
{
    //
    private static m_Instance:TCPNetwork;
    //回话字典
    private sessions:{[sessionID:number]:TCPSession} = {};
    //监听id
    private listenID:number = 0;
    
    //
    public static GetInstance():TCPNetwork
    {
        if(this.m_Instance == null)
        {
            this.m_Instance = new TCPNetwork();
        }
        return this.m_Instance;
    }


    //退出或者重登时候清理（关闭）玩家的网络session对话//
    public Clean()
    {
        for(let sessionID in this.sessions)
        {
            this.sessions[sessionID].Clean();
        }
        this.sessions = {};
        this.listenID = 0;
    }

    //实例化session对话
    public Init(sessionID:TCPSessionID)
    {
        if(this.sessions[sessionID] != null)
        {
            cc.error("sessionID " + sessionID + " 已经初始化");
            return;
        }
        this.sessions[sessionID] = new TCPSession();
        this.sessions[sessionID].Init(sessionID);
    }

    //连接服务器-》成功 失败回调。
    public Connect(sessionID,ip, port,funcSuccess,funcFail)
    {
        // if(Global.showLog == true)
        //     cc.log("$$IP=" + ip + "PORT="+port);
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].Connect(ip, port,funcSuccess,funcFail);
        }
    }

    //退出服务器->
    public Disconnect(sessionID)
    {
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].Disconnect();
        }
    }

    //双向协议(发送接收)(协议9003成功发送则会收到协议9003返回的数据)
    public Send(sessionID,msgID,data,successCallback:(data:Uint8Array)=>void,failCallback:(errMsg:string)=>void,hideNetworkingLoading=false)
    {
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].Send(msgID,data,successCallback,failCallback,hideNetworkingLoading);
        }
    }


    //根据小游戏类型==双向协议(发送接收)(协议9003成功发送则会收到协议9003返回的数据)
    // public SendWithGameType(gameType,sessionID,msgID,data,successCallback,failCallback = null,hideNetworkingLoading = false)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SendWithGameType(gameType,msgID,data,successCallback,failCallback,hideNetworkingLoading);
    //     }
    // }

    //单向协议(只发送 不管接收)
    public SendOneWay(sessionID,msgID,data)
    {
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].SendOneWay(msgID,data);
        }
    }

    //根据小游戏类型==发送单向协议(只发送 不管接收)
    // public SendOneWayWithGameType(gameType,sessionID,msgID,data)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SendOneWayWithGameType(gameType,msgID,data);
    //     }
    // }

    //某个session对话 监听某个协议id
    public ListenMsg(sessionID,msgID,func)
    {
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].ListenMsg(msgID,func);
        }
    }

    //根据游戏类型划分消息id//
    // public ListenMsgWithGameType(gameType,sessionID,msgID,func)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].ListenMsgWithGameType(gameType,msgID,func);
    //     }
    // }

    ///重新发送挂起来的消息？//
    public ResendHangOnMsg(sessionID)
    {
        if(this.sessions[sessionID] != null)
        {
            this.sessions[sessionID].ResendHangOnMsg();
        }
    }

    ///一个会话session绑定他的新gameType
    // public SetCurrentGameType(sessionID,gameType)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SetCurrentGameType(gameType);
    //     }
    // }

    ///一个会话session刷新他的ip和port
    // public RefreshIPAndPort(sessionID,ip, port)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].RefreshIPAndPort(ip, port);
    //     }
    // }

    ///握手失败之后的重连操作(比如登陆)
    // public ReConnectWhenHandShakeFail(sessionID)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].ReConnectWhenHandShakeFail();
    //     }
    // }

    //设置
    // public SetUidToker(sessionID,uid,token)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SetUidToker(uid,token);
    //     }
    // }
}