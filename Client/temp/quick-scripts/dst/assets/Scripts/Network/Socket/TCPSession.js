
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Network/Socket/TCPSession.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmV0d29ya1xcU29ja2V0XFxUQ1BTZXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDJDQUFtRDtBQUNuRCwyREFBc0Q7QUFDdEQsaUVBQTREO0FBQzVELDJDQUFzQztBQUN0Qyw4Q0FBeUM7QUFDekMsb0RBQTZFO0FBQzdFLGtEQUE2QztBQUU3QyxpQkFBaUI7QUFDakI7SUFBQTtRQUVJLFVBQVU7UUFDRixvQkFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxVQUFVO1FBQ0YsUUFBRyxHQUFVLENBQUMsQ0FBQztRQUt2QixpQkFBaUI7UUFDakIsdURBQXVEO1FBQ3ZELHFCQUFxQjtRQUNiLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztRQUNyRCxTQUFTO1FBQ0QsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFpQnBDLGFBQWE7UUFDYiwyRkFBMkY7UUFDM0YsNEVBQTRFO1FBQ3BFLGdCQUFXLEdBQWMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUErU3ZELENBQUM7SUE3U1UseUJBQUksR0FBWCxVQUFZLFNBQVM7UUFFakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQjtJQUNULDRCQUFPLEdBQWQsVUFBZSxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxRQUFRO1FBQTNDLGlCQWdJQztRQTlIRyw0QkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsb0JBQW9CO1FBRWpGLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLFFB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O1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFTSwwQkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxvQ0FBZSxHQUF0QjtRQUVJLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQzlCO1lBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVNLHFDQUFnQixHQUF2QixVQUF3QixFQUFFLEVBQUUsSUFBSTtRQUU1QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwrQ0FBMEIsR0FBakM7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDTCxpQkFBQztBQUFELENBbFZBLEFBa1ZDLElBQUE7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFBRCxpQkFBQztBQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVyTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UaW1lck1hbmFnZXJcIjtcbmltcG9ydCBEYXRhUGFja2V0LCB7IFBhY2thZ2UgfSBmcm9tIFwiLi9EYXRhUGFja2V0XCI7XG5pbXBvcnQgVENQU2VuZFRhc2tNYW5hZ2VyIGZyb20gXCIuL1RDUFNlbmRUYXNrTWFuYWdlclwiO1xuaW1wb3J0IE9wZW5OZXR3b3JraW5nVUkgZnJvbSBcIi4uLy4uL1Rvb2xzL09wZW5OZXR3b3JraW5nVUlcIjtcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi4vLi4vVG9vbHMvVG9hc3RcIjtcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL0dsb2JhbC9HbG9iYWxcIjtcbmltcG9ydCB7IEhhbmRzaGFrZVJlcXVlc3QsIEhhbmRzaGFrZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL1Byb3Rvcy9IYW5kc2hha2VcIjtcbmltcG9ydCBMYW5ndWFnZSBmcm9tIFwiLi4vLi4vR2xvYmFsL0xhbmd1YWdlXCI7XG5cbi8v5a+55LiA5qyh572R57ucdGNw5a+56K+d55qE5bCB6KOFLy9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRDUFNlc3Npb25cbntcbiAgICAvL+iOt+WPluW9k+WJjeaXtumXtOS4uuOAglxuICAgIHByaXZhdGUgbGFzdFNob3dUb2FzdFVJID0gRGF0ZS5ub3coKTtcbiAgICAvL+W6j+WIl+WPtyAx5byA5aeL44CCXG4gICAgcHJpdmF0ZSBzZXE6bnVtYmVyID0gMTtcbiAgICAvL+i/memHjOWPr+S7pemAieaLqXdlYnNva2V0IOaIluiAhSB0Y3Bzb2tldCAtLS0g6Ieq5bex5YaZdGNwc29rZXQoVU5JVFkpICDmiJbogIXnm7TmjqXkvb/nlKhjb2Nvc+iHquW4pueahFdlYlNvY2tldOOAglxuICAgIHByaXZhdGUgd2ViU29ja2V0OldlYlNvY2tldFxuICAgIC8v5Lya6K+daWRcbiAgICBwcml2YXRlIHNlc3Npb25JRDpudW1iZXI7XG4gICAgLy/pu5jorqTlr7nor50g5rKh5pyJ57uR5a6a5bCP5ri45oiP57G75Z6L44CCXG4gICAgLy8gcHJpdmF0ZSBnYW1lVHlwZSA9IEdhbWVUeXBlTWdyLkNvbmZpZy5Ob25lLmdhbWVUeXBlO1xuICAgIC8vbXNnSUTlr7nlupQo5ri45oiP57G75Z6L5ZKM5pWw5o2u5Zue6LCDKeOAglxuICAgIHByaXZhdGUgbGlzdGVuRGF0YXM6e1ttc2dJRDpudW1iZXJdOkxpc3RlbkRhdGF9ID0ge307XG4gICAgLy/mj6HmiYvmiJDlip/moIflv5fjgIJcbiAgICBwcml2YXRlIGlzSGFuZFNoYWtlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICAvL+WUr+S4gGlk44CCXG4gICAgLy8gcHJpdmF0ZSB1aWQ6c3RyaW5nO1xuICAgIC8v6K645Y+v5Luk54mM44CCXG4gICAgLy8gcHJpdmF0ZSB0b2tlbjpzdHJpbmc7XG4gICAgLy90Y3DnmoTov57mjqVpcFxuICAgIHByaXZhdGUgaXA6c3RyaW5nO1xuICAgIC8vdGNw6L+e5o6l56uv5Y+jXG4gICAgcHJpdmF0ZSBwb3J0OnN0cmluZztcbiAgICAvL+aIkOWKn+Wbnuiwg1xuICAgIHByaXZhdGUgZnVuY0Nvbm5lY3RTdWNjZXNzO1xuICAgIC8v5aSx6LSl5Zue6LCDICAgIFxuICAgIHByaXZhdGUgZnVuY0Nvbm5lY3RGYWlsO1xuICAgIC8v5oyC6LW35Zue6LCDXG4gICAgcHJpdmF0ZSBoYW5nT25TZW5kRnVuYztcbiAgICAvL+i/nuaOpei2heaXtueahHRpbWVySURcbiAgICBwcml2YXRlIGNvbm5lY3RUaW1lb3V0VGltZXJJRDtcbiAgICAvLzjkvY3ml6DnrKblj7fmlbTlnovlgLwg5YaF5a65XG4gICAgLy9BIHR5cGVkIGFycmF5IG9mIDgtYml0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiBUaGUgY29udGVudHMgYXJlIGluaXRpYWxpemVkIHRvIDAuIElmIHRoZVxuICAgIC8vKiByZXF1ZXN0ZWQgbnVtYmVyIG9mIGJ5dGVzIGNvdWxkIG5vdCBiZSBhbGxvY2F0ZWQgYW4gZXhjZXB0aW9uIGlzIHJhaXNlZC5cbiAgICBwcml2YXRlIHVpbnQ4QnVmZmVyOlVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgwKTtcblxuICAgIHB1YmxpYyBJbml0KHNlc3Npb25JRClcbiAgICB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuICAgIH1cblxuICAgIC8v6ZO+5o6l5pyN5Yqh5Zmo77yIaXAmcG9ydO+8iVxuICAgIHB1YmxpYyBDb25uZWN0KGlwLHBvcnQsZnVuY1N1Y2Nlc3MsZnVuY0ZhaWwpXG4gICAge1xuICAgICAgICBUQ1BTZW5kVGFza01hbmFnZXIuR2V0SW5zdGFuY2UoKS5Jbml0U2Vzc2lvbih0aGlzLnNlc3Npb25JRCk7Ly/kuLpzZXNzaW9uSUTphY3nva7kuIDku73mlbDmja7nu5PmnoRcblxuICAgICAgICB0aGlzLmlwID0gaXA7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMuZnVuY0Nvbm5lY3RTdWNjZXNzID0gZnVuY1N1Y2Nlc3M7XG4gICAgICAgIHRoaXMuZnVuY0Nvbm5lY3RGYWlsID0gZnVuY0ZhaWw7XG5cbiAgICAgICAgT3Blbk5ldHdvcmtpbmdVSS5TaG93KCk7Ly/liqDovb3nlYzpnaIvL1xuICAgICAgICAvL+e7lei/h+mXreWMhXRoaXPpmZDliLZcbiAgICAgICAgbGV0IG91dHNpZGUgPSB0aGlzO1xuXG4gICAgICAgIGxldCBwcm90b2NvbCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICBsZXQgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgLy9TU0woU2VjdXJlIFNvY2tldCBMYXllcu+8jOWuieWFqOWll+aOpeWxgikgXG4gICAgICAgIGlmKHByb3RvY29sID09IFwiaHR0cHM6XCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByZWZpeCA9IFwid3NzOi8vXCI7Ly9MYXllcuOAguWuieWFqOWll+aOpeWxgu+8iFNlY3VyZSBTb2NrZXQgTGF5ZXLvvInkuIrpnaLov5DooYznmoR3ZWJzb2NrZXQvL1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcHJlZml4ID0gXCJ3czovL1wiXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBob3N0ID0gcHJlZml4KyBpcCArIFwiOlwiICsgcG9ydCArIFwiL3dzXCI7XG4gICAgICAgIHRoaXMud2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChob3N0KTsvL+WIneWni+WMlue7keWummhvc3TlnLDlnYDnmoR3ZWJzb2tldC8vXG4gICAgICAgIFxuICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2MubG9nKFwiQ29ubmVjdCBzb2NrZXQgaG9zdDogXCIgKyBob3N0KTtcblxuICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcih0aGlzLmNvbm5lY3RUaW1lb3V0VGltZXJJRCk7XG4gICAgICAgIGxldCBjb25uZWN0VGltZW91dCA9IDEwO1xuICAgICAgICB0aGlzLmNvbm5lY3RUaW1lb3V0VGltZXJJRCA9IFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkNhbGxBY3Rpb25EZWxheSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5EaXNjb25uZWN0KCk7IC8vMTDnp5Lpkp/kuobov5jmsqHlj43lupQs5YiZ5YWz6Zet55qE5LiA57O75YiX5pON5L2cLy9cbiAgICAgICAgICAgIGZ1bmNGYWlsKFwi6L+e5o6l6LaF5pe2XCIpO1xuICAgICAgICB9LGNvbm5lY3RUaW1lb3V0LG51bGwsMCwwLHRydWUpO1xuXG4gICAgICAgIC8v5aWX5o6l5a2X5byA5ZCvXG4gICAgICAgIHRoaXMud2ViU29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuRGVsZXRlVGltZXIob3V0c2lkZS5jb25uZWN0VGltZW91dFRpbWVySUQpO1xuICAgICAgICAgICAgT3Blbk5ldHdvcmtpbmdVSS5IaWRlKCk7XG4gICAgICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIm9ub3BlbiBcIiArIGV2ZW50LnR5cGUgKyBcIiB0aGlzLnJlYWR5U3RhdGUgXCIgKyB0aGlzLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgaWYob3V0c2lkZS53ZWJTb2NrZXQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBvdXRzaWRlLkhhbmRTaGFrZShmdW5jU3VjY2VzcyxmdW5jRmFpbCk7Ly8tPuaPoeaJi1xuICAgICAgICB9O1xuXG4gICAgICAgIC8v5o6l5pS25pyN5Yqh5Zmo5raI5oGvLy9cbiAgICAgICAgdGhpcy53ZWJTb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJvbm1lc3NhZ2UgXCIgKyBldmVudC5kYXRhICsgXCIgdHlwZW9mKGV2ZW50LmRhdGEpIFwiICsgdHlwZW9mKGV2ZW50LmRhdGEpKTsg6Kej5p6Q5pWw5o2uXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIC8vYnl0ZeS4umJsb2Llr7nosaEgXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZXZlbnQuZGF0YSk7Ly9ibG9i5a+56LGh6L2sYXJyYXkvL1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKT0+e1xuICAgICAgICAgICAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcblxuICAgICAgICAgICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5lcnJvcihldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuZXJyb3IoXCJvbnJlY2VpdmUgXCIgKyBidWYgKyBcIiBlLnRvdGFsIFwiICsgZS50b3RhbCArIFwiIGUubG9hZGVkIFwiICsgZS5sb2FkZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGxldCB0bXBCdWZmZXIgPSBuZXcgVWludDhBcnJheShvdXRzaWRlLnVpbnQ4QnVmZmVyLmxlbmd0aCArIGJ1Zi5sZW5ndGgpOy8v6ZW/5bqm55qEIOWQiOW5tuWMhS8vXG4gICAgICAgICAgICAgICAgdG1wQnVmZmVyLnNldChvdXRzaWRlLnVpbnQ4QnVmZmVyLDApOy8vXG4gICAgICAgICAgICAgICAgdG1wQnVmZmVyLnNldChidWYsb3V0c2lkZS51aW50OEJ1ZmZlci5sZW5ndGgpOy8v5pWw5o2uc2V0IOeymOi0tOi/m3RtcEJ1ZmZlci8vXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgb3V0c2lkZS51aW50OEJ1ZmZlciA9IHRtcEJ1ZmZlcjsvL+aNouS4gOS4iy8vXG4gICAgICAgICAgICAgICAgbGV0IHBhY2thZ2VBcnJheSA9IG5ldyBBcnJheTxQYWNrYWdlPigpOy8v6Kej5YyF5LiA57uEIOa2iOaBr+WPtyvmlbDmja4r5raI5oGv5bqP5YiX5Y+3KOi/meadoeWNj+iurueahOesrOWHoOasoeaVsOWPkemAgSkvL1xuXG5cbiAgICAgICAgICAgICAgICBvdXRzaWRlLnVpbnQ4QnVmZmVyID0gRGF0YVBhY2tldC5VblBhY2tldChvdXRzaWRlLnVpbnQ4QnVmZmVyLHBhY2thZ2VBcnJheSk7Ly/op6PljIXmi4bljIUg5bCG5pWw5o2u5YeR5LiA6LW344CCLy9cblxuICAgICAgICAgICAgICAgIC8vY2MuZXJyb3IoXCJvdXRzaWRlLnVpbnQ4QnVmZmVyLmxlbmd0aCBcIiArIG91dHNpZGUudWludDhCdWZmZXIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBwYWNrYWdlQXJyYXkubGVuZ3RoO2krKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlR2V0ID0gcGFja2FnZUFycmF5W2ldO1xuICAgICAgICAgICAgICAgICAgICBpZihwYWNrYWdlR2V0Lm1zZ0lEICE9IDEwMDEpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzrliqDlhaXmiZPljbDmtojmga8vL3lpYmEtLS8vXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYocGFja2FnZUdldC5tc2dJRCE9MTAwMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlY2VpdmU6IG1zZ0lEIFwiICsgcGFja2FnZUdldC5tc2dJRCArIFwiIGRhdGEubGVuZ3RoIFwiICsgcGFja2FnZUdldC5kYXRhLmxlbmd0aCArIFwiIHNlcTogXCIgKyBwYWNrYWdlR2V0LnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihwYWNrYWdlR2V0LnNlcSAhPSAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IFRDUFNlbmRUYXNrTWFuYWdlci5HZXRJbnN0YW5jZSgpLkdldFRhc2sob3V0c2lkZS5zZXNzaW9uSUQscGFja2FnZUdldC5zZXEpOy8v6I635Y+W5Yiw5a+55bqU55qEdGFzay8vXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0YXNrICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdWNjZXNzQ2FsbGJhY2socGFja2FnZUdldC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQ1BTZW5kVGFza01hbmFnZXIuR2V0SW5zdGFuY2UoKS5DYW5jZWxUYXNrKG91dHNpZGUuc2Vzc2lvbklELHBhY2thZ2VHZXQuc2VxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5EYXRhID0gb3V0c2lkZS5saXN0ZW5EYXRhc1twYWNrYWdlR2V0Lm1zZ0lEXTsvL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlzdGVuRGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbkRhdGEuZnVuYyhwYWNrYWdlR2V0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMud2ViU29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkRlbGV0ZVRpbWVyKHRpbWVySUQpO1xuICAgICAgICAgICAgLy/mmoLkuI3kvp3otZYgb25lcnJvciDlm57osINcbiAgICAgICAgICAgIE9wZW5OZXR3b3JraW5nVUkuSGlkZSgpO1xuICAgICAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJvbmVycm9yIFwiICsgZXZlbnQucmV0dXJuVmFsdWUgKyBcIiBldmVudC50eXBlIFwiICsgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud2ViU29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkRlbGV0ZVRpbWVyKHRpbWVySUQpO1xuICAgICAgICAgICAgaWYob3V0c2lkZS53ZWJTb2NrZXQgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+mdnuS4u+WKqOaWreW8gFxuICAgICAgICAgICAgICAgIG91dHNpZGUud2ViU29ja2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBUQ1BTZW5kVGFza01hbmFnZXIuR2V0SW5zdGFuY2UoKS5DbGVhblNlc3Npb24ob3V0c2lkZS5zZXNzaW9uSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJvbmNsb3NlIGV2ZW50LnJldHVyblZhbHVlIFwiICsgZXZlbnQucmV0dXJuVmFsdWUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBIYW5kU2hha2Uoc3VjY2Vzc0NhbGxiYWNrLGZhaWxDYWxsYmFjaylcbiAgICB7XG5cbiAgICAgICAgbGV0IHJlcSA9IEhhbmRzaGFrZVJlcXVlc3QuY3JlYXRlKCk7XG4gICAgICAgIHJlcS51aWQgPSB3aW5kb3dbXCJzZWxmSWRcIl07XG4gICAgICAgIHJlcS50b2tlbiA9IHdpbmRvd1tcInRva2VuXCJdO1xuICAgICAgICBsZXQgc2VuZGRhdGEgPSBIYW5kc2hha2VSZXF1ZXN0LmVuY29kZShyZXEpLmZpbmlzaCgpO1xuICAgICAgICBsZXQgb3V0c2lkZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5TZW5kKDEsc2VuZGRhdGEsKGRhdGEpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCByZXMgPSBIYW5kc2hha2VSZXNwb25zZS5kZWNvZGUoZGF0YSk7XG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiaGFuZHNoYWtlIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgb3V0c2lkZS5pc0hhbmRTaGFrZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJoYW5kc2hha2UgZmFpbFwiKTtcbiAgICAgICAgICAgICAgICBvdXRzaWRlLmlzSGFuZFNoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgb3V0c2lkZS5EaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSxmYWlsQ2FsbGJhY2ssdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy/lhbPpl613ZWJzb2tldCDmuIXpmaRUQ1BTZW5kVGFza01hbmFnZXIgc2Vzc2lvbklE44CCXG4gICAgLy/liKDpmaTotoXml7bnmoTorqHml7blmajjgIJcbiAgICBwdWJsaWMgRGlzY29ubmVjdCgpXG4gICAge1xuICAgICAgICBpZih0aGlzLndlYlNvY2tldCAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLndlYlNvY2tldC5yZWFkeVN0YXRlICE9IFdlYlNvY2tldC5DTE9TRUQgJiYgdGhpcy53ZWJTb2NrZXQucmVhZHlTdGF0ZSAhPSBXZWJTb2NrZXQuQ0xPU0lORylcbiAgICAgICAgICAgICAgICB0aGlzLndlYlNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIFRDUFNlbmRUYXNrTWFuYWdlci5HZXRJbnN0YW5jZSgpLkNsZWFuU2Vzc2lvbih0aGlzLnNlc3Npb25JRCk7XG4gICAgICAgIHRoaXMud2ViU29ja2V0ID0gbnVsbDtcbiAgICAgICAgVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuRGVsZXRlVGltZXIodGhpcy5jb25uZWN0VGltZW91dFRpbWVySUQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZW5kKG1zZ0lELGRhdGEsc3VjY2Vzc0NhbGxiYWNrLGZhaWxDYWxsYmFjayxoaWRlTmV0d29ya2luZ0xvYWRpbmcpXG4gICAge1xuXG4gICAgICAgIGlmKHRoaXMud2ViU29ja2V0ID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6ZyA6KaB6YeN6L+eXG4gICAgICAgICAgICB0aGlzLkNvbm5lY3QodGhpcy5pcCx0aGlzLnBvcnQsKCk9PntcbiAgICAgICAgICAgICAgICBUb2FzdC5TaG93KExhbmd1YWdlLnRleHQ2KTtcblxuICAgICAgICAgICAgICAgIC8v5Zug5Li65pat572R5oyC6LW355qE5raI5oGv77yM5Y+q5Lya5oyC6LW35LiA5LiqXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5nT25TZW5kRnVuYyA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2VuZChtc2dJRCxkYXRhLHN1Y2Nlc3NDYWxsYmFjayxmYWlsQ2FsbGJhY2ssaGlkZU5ldHdvcmtpbmdMb2FkaW5nKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9LCgpPT57XG5cbiAgICAgICAgICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy5sYXN0U2hvd1RvYXN0VUkgPiAxMDAwICogMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTaG93VG9hc3RVSSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UudGV4dDcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLkRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLndlYlNvY2tldC5yZWFkeVN0YXRlICE9IFdlYlNvY2tldC5PUEVOKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIumdnui/nuaOpeaIkOWKn+eKtuaAgeS4i+eahOaVsOaNruWPkemAgSBtc2dJRDpcIiArIG1zZ0lEKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaXNIYW5kU2hha2UgPT0gZmFsc2UgJiYgbXNnSUQgIT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLmnKrpqozor4HnmoTov57mjqXvvIzlj5HpgIHlpLHotKUgaXNIYW5kU2hha2UgPT0gZmFsc2UgbXNnSUQ6XCIgKyBtc2dJRCk7XG4gICAgICAgICAgICBUb2FzdC5TaG93KExhbmd1YWdlLnRleHQ4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhU2VuZCA9IERhdGFQYWNrZXQuUGFja2V0KG1zZ0lELHRoaXMuc2VxLGRhdGEpO1xuICAgICAgICBUQ1BTZW5kVGFza01hbmFnZXIuR2V0SW5zdGFuY2UoKS5BZGRUYXNrKHRoaXMuc2Vzc2lvbklELG1zZ0lELHRoaXMuc2VxLGRhdGEsKGRhdGFSZXMpPT57XG5cbiAgICAgICAgICAgIGlmKHN1Y2Nlc3NDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGhpZGVOZXR3b3JraW5nTG9hZGluZyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgT3Blbk5ldHdvcmtpbmdVSS5IaWRlKCk7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGFSZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LChlcnJNc2cpPT57XG4gICAgICAgICAgICBPcGVuTmV0d29ya2luZ1VJLkhpZGUoKTtcbiAgICAgICAgICAgIGlmKGZhaWxDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZhaWxDYWxsYmFjayhlcnJNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoaGlkZU5ldHdvcmtpbmdMb2FkaW5nID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBPcGVuTmV0d29ya2luZ1VJLlNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKG1zZ0lEICE9IDEwMDEpe1xuICAgICAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJzZW5kIG1zZzogbXNnSUQgXCIgKyBtc2dJRCArIFwiIHNlcSBcIiArIHRoaXMuc2VxICsgXCIgZGF0YS5sZW5ndGggXCIgKyBkYXRhLmxlbmd0aCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjYy5lcnJvcihcImRhdGFTZW5kICBcIiArIGRhdGFTZW5kKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMud2ViU29ja2V0LnNlbmQoZGF0YVNlbmQpO1xuXG4gICAgICAgIHRoaXMuc2VxKys7XG4gICAgfVxuXG4gICAgcHVibGljIFNlbmRPbmVXYXkobXNnSUQsZGF0YSlcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuU2VuZE9uZVdheVdpdGhHYW1lVHlwZShHYW1lVHlwZU1nci5Db25maWcuTm9uZS5nYW1lVHlwZSxtc2dJRCxkYXRhKVxuICAgICAgICBpZih0aGlzLndlYlNvY2tldCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmKHRoaXMud2ViU29ja2V0LnJlYWR5U3RhdGUgIT0gV2ViU29ja2V0Lk9QRU4pXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGRhdGFTZW5kID0gRGF0YVBhY2tldC5QYWNrZXQobXNnSUQsMCxkYXRhKTtcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQuc2VuZChkYXRhU2VuZCk7XG5cbiAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgIGNjLmxvZyhcInNlbmQgb25ld2F5IG1zZzogbXNnSUQgXCIgKyBtc2dJRCArIFwiIGRhdGEubGVuZ3RoIFwiICsgZGF0YS5sZW5ndGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBMaXN0ZW5Nc2cobXNnSUQsZnVuYylcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuTGlzdGVuTXNnV2l0aEdhbWVUeXBlKEdhbWVUeXBlTWdyLkNvbmZpZy5Ob25lLmdhbWVUeXBlLG1zZ0lELGZ1bmMpXG4gICAgICAgIGxldCBsaXN0ZW5EYXRhID0gbmV3IExpc3RlbkRhdGEoKTtcbiAgICAgICAgbGlzdGVuRGF0YS5mdW5jID0gZnVuYztcbiAgICAgICAgdGhpcy5saXN0ZW5EYXRhc1ttc2dJRF0gPSBsaXN0ZW5EYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhbigpXG4gICAge1xuICAgICAgICB0aGlzLkRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVzZW5kSGFuZ09uTXNnKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaGFuZ09uU2VuZEZ1bmMgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5oYW5nT25TZW5kRnVuYygpO1xuICAgICAgICAgICAgdGhpcy5oYW5nT25TZW5kRnVuYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgUmVmcmVzaElQQW5kUG9ydChpcCwgcG9ydClcbiAgICB7XG4gICAgICAgIHRoaXMuaXAgPSBpcDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVDb25uZWN0V2hlbkhhbmRTaGFrZUZhaWwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5Db25uZWN0KHRoaXMuaXAsdGhpcy5wb3J0LHRoaXMuZnVuY0Nvbm5lY3RTdWNjZXNzLHRoaXMuZnVuY0Nvbm5lY3RGYWlsKTtcbiAgICB9XG59XG5cbmNsYXNzIExpc3RlbkRhdGFcbntcbiAgICBwdWJsaWMgZnVuYztcbiAgICBwdWJsaWMgZ2FtZVR5cGU7XG59Il19