"use strict";
cc._RF.push(module, '2613aUtc3JBlaihWuTSnpra', 'TCPSession');
// Scripts/Network/Socket/TCPSession.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerManager_1 = require("../../Components/TimerManager");
var DataPacket_1 = require("./DataPacket");
var TCPSendTaskManager_1 = require("./TCPSendTaskManager");
var OpenNetworkingUI_1 = require("../../Tools/OpenNetworkingUI");
var Toast_1 = require("../../Tools/Toast");
var Global_1 = require("../../Global/Global");
var Handshake_1 = require("../../Protos/Handshake");
var Language_1 = require("../../Global/Language");
//对一次网络tcp对话的封装//
var TCPSession = /** @class */ (function () {
    function TCPSession() {
        //获取当前时间为。
        this.lastShowToastUI = Date.now();
        //序列号 1开始。
        this.seq = 1;
        //默认对话 没有绑定小游戏类型。
        // private gameType = GameTypeMgr.Config.None.gameType;
        //msgID对应(游戏类型和数据回调)。
        this.listenDatas = {};
        //握手成功标志。
        this.isHandShake = false;
        //8位无符号整型值 内容
        //A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
        //* requested number of bytes could not be allocated an exception is raised.
        this.uint8Buffer = new Uint8Array(0);
    }
    TCPSession.prototype.Init = function (sessionID) {
        this.sessionID = sessionID;
    };
    //链接服务器（ip&port）
    TCPSession.prototype.Connect = function (ip, port, funcSuccess, funcFail) {
        var _this = this;
        TCPSendTaskManager_1.default.GetInstance().InitSession(this.sessionID); //为sessionID配置一份数据结构
        this.ip = ip;
        this.port = port;
        this.funcConnectSuccess = funcSuccess;
        this.funcConnectFail = funcFail;
        OpenNetworkingUI_1.default.Show(); //加载界面//
        //绕过闭包this限制
        var outside = this;
        var protocol = document.location.protocol;
        var prefix = "";
        //SSL(Secure Socket Layer，安全套接层) 
        if (protocol == "https:") {
            prefix = "wss://"; //Layer。安全套接层（Secure Socket Layer）上面运行的websocket//
        }
        else {
            prefix = "ws://";
        }
        var host = prefix + ip + ":" + port + "/ws";
        this.webSocket = new WebSocket(host); //初始化绑定host地址的websoket//
        if (Global_1.default.showLog == true)
            cc.log("Connect socket host: " + host);
        TimerManager_1.default.GetInstance().DeleteTimer(this.connectTimeoutTimerID);
        var connectTimeout = 10;
        this.connectTimeoutTimerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            _this.Disconnect(); //10秒钟了还没反应,则关闭的一系列操作//
            funcFail("连接超时");
        }, connectTimeout, null, 0, 0, true);
        //套接字开启
        this.webSocket.onopen = function (event) {
            TimerManager_1.default.GetInstance().DeleteTimer(outside.connectTimeoutTimerID);
            OpenNetworkingUI_1.default.Hide();
            if (Global_1.default.showLog == true)
                cc.log("onopen " + event.type + " this.readyState " + this.readyState);
            if (outside.webSocket != null)
                outside.HandShake(funcSuccess, funcFail); //->握手
        };
        //接收服务器消息//
        this.webSocket.onmessage = function (event) {
            // cc.log("onmessage " + event.data + " typeof(event.data) " + typeof(event.data)); 解析数据
            var reader = new FileReader();
            //byte为blob对象 
            reader.readAsArrayBuffer(event.data); //blob对象转array//
            reader.onload = function (e) {
                var buf = new Uint8Array(reader.result);
                if (Global_1.default.showLog == true) {
                    // cc.error(event.data);
                    // cc.error("onreceive " + buf + " e.total " + e.total + " e.loaded " + e.loaded);
                }
                var tmpBuffer = new Uint8Array(outside.uint8Buffer.length + buf.length); //长度的 合并包//
                tmpBuffer.set(outside.uint8Buffer, 0); //
                tmpBuffer.set(buf, outside.uint8Buffer.length); //数据set 粘贴进tmpBuffer//
                outside.uint8Buffer = tmpBuffer; //换一下//
                var packageArray = new Array(); //解包一组 消息号+数据+消息序列号(这条协议的第几次数发送)//
                outside.uint8Buffer = DataPacket_1.default.UnPacket(outside.uint8Buffer, packageArray); //解包拆包 将数据凑一起。//
                //cc.error("outside.uint8Buffer.length " + outside.uint8Buffer.length);
                for (var i = 0; i < packageArray.length; i++) {
                    var packageGet = packageArray[i];
                    if (packageGet.msgID != 1001) {
                        //TODO:加入打印消息//yiba--//
                    }
                    if (packageGet.msgID != 1001) {
                        if (Global_1.default.showLog == true)
                            cc.log("receive: msgID " + packageGet.msgID + " data.length " + packageGet.data.length + " seq: " + packageGet.seq);
                    }
                    if (packageGet.seq != 0) {
                        var task = TCPSendTaskManager_1.default.GetInstance().GetTask(outside.sessionID, packageGet.seq); //获取到对应的task//
                        if (task != null) {
                            task.successCallback(packageGet.data);
                            TCPSendTaskManager_1.default.GetInstance().CancelTask(outside.sessionID, packageGet.seq);
                        }
                    }
                    else {
                        var listenData = outside.listenDatas[packageGet.msgID]; //
                        if (listenData != null) {
                            listenData.func(packageGet.data);
                        }
                    }
                }
            };
        };
        this.webSocket.onerror = function (event) {
            // TimerManager.GetInstance().DeleteTimer(timerID);
            //暂不依赖 onerror 回调
            OpenNetworkingUI_1.default.Hide();
            if (Global_1.default.showLog == true)
                cc.log("onerror " + event.returnValue + " event.type " + event.type);
        };
        this.webSocket.onclose = function (event) {
            // TimerManager.GetInstance().DeleteTimer(timerID);
            if (outside.webSocket != null) {
                //非主动断开
                outside.webSocket = null;
                TCPSendTaskManager_1.default.GetInstance().CleanSession(outside.sessionID);
            }
            if (Global_1.default.showLog == true)
                cc.log("onclose event.returnValue " + event.returnValue);
        };
    };
    TCPSession.prototype.HandShake = function (successCallback, failCallback) {
        var req = Handshake_1.HandshakeRequest.create();
        req.uid = window["selfId"];
        req.token = window["token"];
        var senddata = Handshake_1.HandshakeRequest.encode(req).finish();
        var outside = this;
        this.Send(1, senddata, function (data) {
            var res = Handshake_1.HandshakeResponse.decode(data);
            if (res.statusCode == 0) {
                if (Global_1.default.showLog == true)
                    cc.error("handshake success");
                outside.isHandShake = true;
                successCallback();
            }
            else {
                if (Global_1.default.showLog == true)
                    cc.error("handshake fail");
                outside.isHandShake = false;
                outside.Disconnect();
            }
        }, failCallback, true);
    };
    //关闭websoket 清除TCPSendTaskManager sessionID。
    //删除超时的计时器。
    TCPSession.prototype.Disconnect = function () {
        if (this.webSocket != null) {
            if (this.webSocket.readyState != WebSocket.CLOSED && this.webSocket.readyState != WebSocket.CLOSING)
                this.webSocket.close();
        }
        TCPSendTaskManager_1.default.GetInstance().CleanSession(this.sessionID);
        this.webSocket = null;
        TimerManager_1.default.GetInstance().DeleteTimer(this.connectTimeoutTimerID);
    };
    TCPSession.prototype.Send = function (msgID, data, successCallback, failCallback, hideNetworkingLoading) {
        var _this = this;
        if (this.webSocket == null) {
            //需要重连
            this.Connect(this.ip, this.port, function () {
                Toast_1.default.Show(Language_1.default.text6);
                //因为断网挂起的消息，只会挂起一个
                _this.hangOnSendFunc = function () {
                    _this.Send(msgID, data, successCallback, failCallback, hideNetworkingLoading);
                };
            }, function () {
                if (Date.now() - _this.lastShowToastUI > 1000 * 10) {
                    _this.lastShowToastUI = Date.now();
                    Toast_1.default.Show(Language_1.default.text7);
                }
                _this.Disconnect();
            });
            return;
        }
        if (this.webSocket.readyState != WebSocket.OPEN) {
            cc.error("非连接成功状态下的数据发送 msgID:" + msgID);
            return;
        }
        if (this.isHandShake == false && msgID != 1) {
            cc.error("未验证的连接，发送失败 isHandShake == false msgID:" + msgID);
            Toast_1.default.Show(Language_1.default.text8);
            return;
        }
        var dataSend = DataPacket_1.default.Packet(msgID, this.seq, data);
        TCPSendTaskManager_1.default.GetInstance().AddTask(this.sessionID, msgID, this.seq, data, function (dataRes) {
            if (successCallback != null) {
                if (hideNetworkingLoading == false)
                    OpenNetworkingUI_1.default.Hide();
                successCallback(dataRes);
            }
        }, function (errMsg) {
            OpenNetworkingUI_1.default.Hide();
            if (failCallback != null) {
                failCallback(errMsg);
            }
        });
        if (hideNetworkingLoading == false) {
            OpenNetworkingUI_1.default.Show();
        }
        // if(msgID != 1001){
        if (Global_1.default.showLog == true)
            cc.log("send msg: msgID " + msgID + " seq " + this.seq + " data.length " + data.length);
        // }
        // cc.error("dataSend  " + dataSend);
        this.webSocket.send(dataSend);
        this.seq++;
    };
    TCPSession.prototype.SendOneWay = function (msgID, data) {
        // this.SendOneWayWithGameType(GameTypeMgr.Config.None.gameType,msgID,data)
        if (this.webSocket == null)
            return;
        if (this.webSocket.readyState != WebSocket.OPEN)
            return;
        var dataSend = DataPacket_1.default.Packet(msgID, 0, data);
        this.webSocket.send(dataSend);
        if (Global_1.default.showLog == true)
            cc.log("send oneway msg: msgID " + msgID + " data.length " + data.length);
    };
    TCPSession.prototype.ListenMsg = function (msgID, func) {
        // this.ListenMsgWithGameType(GameTypeMgr.Config.None.gameType,msgID,func)
        var listenData = new ListenData();
        listenData.func = func;
        this.listenDatas[msgID] = listenData;
    };
    TCPSession.prototype.Clean = function () {
        this.Disconnect();
    };
    TCPSession.prototype.ResendHangOnMsg = function () {
        if (this.hangOnSendFunc != null) {
            this.hangOnSendFunc();
            this.hangOnSendFunc = null;
        }
    };
    TCPSession.prototype.RefreshIPAndPort = function (ip, port) {
        this.ip = ip;
        this.port = port;
    };
    TCPSession.prototype.ReConnectWhenHandShakeFail = function () {
        this.Connect(this.ip, this.port, this.funcConnectSuccess, this.funcConnectFail);
    };
    return TCPSession;
}());
exports.default = TCPSession;
var ListenData = /** @class */ (function () {
    function ListenData() {
    }
    return ListenData;
}());

cc._RF.pop();