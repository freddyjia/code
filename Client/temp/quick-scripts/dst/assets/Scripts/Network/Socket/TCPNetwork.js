
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Network/Socket/TCPNetwork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b221d8nw29BeIYwDPRT/9x5', 'TCPNetwork');
// Scripts/Network/Socket/TCPNetwork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TCPSession_1 = require("./TCPSession");
// import Global from "../../Global/Global";
/*tcp对话编号 用SessionID来区分*/
var TCPSessionID;
(function (TCPSessionID) {
    TCPSessionID[TCPSessionID["Hall"] = 1] = "Hall";
    // Battle = 2,
})(TCPSessionID = exports.TCPSessionID || (exports.TCPSessionID = {}));
//管理session集合字典的单例 向外提供访问session的接口哦
var TCPNetwork = /** @class */ (function () {
    function TCPNetwork() {
        //回话字典
        this.sessions = {};
        //监听id
        this.listenID = 0;
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
    //
    TCPNetwork.GetInstance = function () {
        if (this.m_Instance == null) {
            this.m_Instance = new TCPNetwork();
        }
        return this.m_Instance;
    };
    //退出或者重登时候清理（关闭）玩家的网络session对话//
    TCPNetwork.prototype.Clean = function () {
        for (var sessionID in this.sessions) {
            this.sessions[sessionID].Clean();
        }
        this.sessions = {};
        this.listenID = 0;
    };
    //实例化session对话
    TCPNetwork.prototype.Init = function (sessionID) {
        if (this.sessions[sessionID] != null) {
            cc.error("sessionID " + sessionID + " 已经初始化");
            return;
        }
        this.sessions[sessionID] = new TCPSession_1.default();
        this.sessions[sessionID].Init(sessionID);
    };
    //连接服务器-》成功 失败回调。
    TCPNetwork.prototype.Connect = function (sessionID, ip, port, funcSuccess, funcFail) {
        // if(Global.showLog == true)
        //     cc.log("$$IP=" + ip + "PORT="+port);
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].Connect(ip, port, funcSuccess, funcFail);
        }
    };
    //退出服务器->
    TCPNetwork.prototype.Disconnect = function (sessionID) {
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].Disconnect();
        }
    };
    //双向协议(发送接收)(协议9003成功发送则会收到协议9003返回的数据)
    TCPNetwork.prototype.Send = function (sessionID, msgID, data, successCallback, failCallback, hideNetworkingLoading) {
        if (hideNetworkingLoading === void 0) { hideNetworkingLoading = false; }
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].Send(msgID, data, successCallback, failCallback, hideNetworkingLoading);
        }
    };
    //根据小游戏类型==双向协议(发送接收)(协议9003成功发送则会收到协议9003返回的数据)
    // public SendWithGameType(gameType,sessionID,msgID,data,successCallback,failCallback = null,hideNetworkingLoading = false)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SendWithGameType(gameType,msgID,data,successCallback,failCallback,hideNetworkingLoading);
    //     }
    // }
    //单向协议(只发送 不管接收)
    TCPNetwork.prototype.SendOneWay = function (sessionID, msgID, data) {
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].SendOneWay(msgID, data);
        }
    };
    //根据小游戏类型==发送单向协议(只发送 不管接收)
    // public SendOneWayWithGameType(gameType,sessionID,msgID,data)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].SendOneWayWithGameType(gameType,msgID,data);
    //     }
    // }
    //某个session对话 监听某个协议id
    TCPNetwork.prototype.ListenMsg = function (sessionID, msgID, func) {
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].ListenMsg(msgID, func);
        }
    };
    //根据游戏类型划分消息id//
    // public ListenMsgWithGameType(gameType,sessionID,msgID,func)
    // {
    //     if(this.sessions[sessionID] != null)
    //     {
    //         this.sessions[sessionID].ListenMsgWithGameType(gameType,msgID,func);
    //     }
    // }
    ///重新发送挂起来的消息？//
    TCPNetwork.prototype.ResendHangOnMsg = function (sessionID) {
        if (this.sessions[sessionID] != null) {
            this.sessions[sessionID].ResendHangOnMsg();
        }
    };
    return TCPNetwork;
}());
exports.default = TCPNetwork;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmV0d29ya1xcU29ja2V0XFxUQ1BOZXR3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRXRDLDRDQUE0QztBQUU1Qyx5QkFBeUI7QUFDekIsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBRXBCLCtDQUFVLENBQUE7SUFDVixjQUFjO0FBQ2xCLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUVELG9DQUFvQztBQUNwQztJQUFBO1FBSUksTUFBTTtRQUNFLGFBQVEsR0FBbUMsRUFBRSxDQUFDO1FBQ3RELE1BQU07UUFDRSxhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBd0g1QiwyQkFBMkI7UUFDM0IsZ0RBQWdEO1FBQ2hELElBQUk7UUFDSiwyQ0FBMkM7UUFDM0MsUUFBUTtRQUNSLGlFQUFpRTtRQUNqRSxRQUFRO1FBQ1IsSUFBSTtRQUVKLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsSUFBSTtRQUNKLDJDQUEyQztRQUMzQyxRQUFRO1FBQ1IsK0RBQStEO1FBQy9ELFFBQVE7UUFDUixJQUFJO1FBRUosb0JBQW9CO1FBQ3BCLCtDQUErQztRQUMvQyxJQUFJO1FBQ0osMkNBQTJDO1FBQzNDLFFBQVE7UUFDUixpRUFBaUU7UUFDakUsUUFBUTtRQUNSLElBQUk7UUFFSixJQUFJO1FBQ0osMENBQTBDO1FBQzFDLElBQUk7UUFDSiwyQ0FBMkM7UUFDM0MsUUFBUTtRQUNSLDJEQUEyRDtRQUMzRCxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUF6SkcsRUFBRTtJQUNZLHNCQUFXLEdBQXpCO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUdELGdD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QUMsU0FBUyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsOERBQThEO0lBQzlELElBQUk7SUFDSiwyQ0FBMkM7SUFDM0MsUUFBUTtJQUNSLCtFQUErRTtJQUMvRSxRQUFRO0lBQ1IsSUFBSTtJQUVKLGdCQUFnQjtJQUNULG9DQUFlLEdBQXRCLFVBQXVCLFNBQVM7UUFFNUIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFDbkM7WUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQXFDTCxpQkFBQztBQUFELENBbEtBLEFBa0tDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVENQU2Vzc2lvbiBmcm9tIFwiLi9UQ1BTZXNzaW9uXCI7XG5pbXBvcnQgY2NDIGZyb20gXCIuLi8uLi9Ub29scy9jY0NcIjtcbi8vIGltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL0dsb2JhbC9HbG9iYWxcIjtcblxuLyp0Y3Dlr7nor53nvJblj7cg55SoU2Vzc2lvbklE5p2l5Yy65YiGKi9cbmV4cG9ydCBlbnVtIFRDUFNlc3Npb25JRFxue1xuICAgIEhhbGwgICA9IDEsXG4gICAgLy8gQmF0dGxlID0gMixcbn1cblxuLy/nrqHnkIZzZXNzaW9u6ZuG5ZCI5a2X5YW455qE5Y2V5L6LIOWQkeWkluaPkOS+m+iuv+mXrnNlc3Npb27nmoTmjqXlj6Plk6ZcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRDUE5ldHdvcmsgXG57XG4gICAgLy9cbiAgICBwcml2YXRlIHN0YXRpYyBtX0luc3RhbmNlOlRDUE5ldHdvcms7XG4gICAgLy/lm57or53lrZflhbhcbiAgICBwcml2YXRlIHNlc3Npb25zOntbc2Vzc2lvbklEOm51bWJlcl06VENQU2Vzc2lvbn0gPSB7fTtcbiAgICAvL+ebkeWQrGlkXG4gICAgcHJpdmF0ZSBsaXN0ZW5JRDpudW1iZXIgPSAwO1xuICAgIFxuICAgIC8vXG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpOlRDUE5ldHdvcmtcbiAgICB7XG4gICAgICAgIGlmKHRoaXMubV9JbnN0YW5jZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1fSW5zdGFuY2UgPSBuZXcgVENQTmV0d29yaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1fSW5zdGFuY2U7XG4gICAgfVxuXG5cbiAgICAvL+mAgOWHuuaIluiAhemHjeeZu+aXtuWAmea4heeQhu+8iOWFs+mXre+8ieeOqeWutueahOe9kee7nHNlc3Npb27lr7nor50vL1xuICAgIHB1YmxpYyBDbGVhbigpXG4gICAge1xuICAgICAgICBmb3IobGV0IHNlc3Npb25JRCBpbiB0aGlzLnNlc3Npb25zKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uQ2xlYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlc3Npb25zID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuSUQgPSAwO1xuICAgIH1cblxuICAgIC8v5a6e5L6L5YyWc2Vzc2lvbuWvueivnVxuICAgIHB1YmxpYyBJbml0KHNlc3Npb25JRDpUQ1BTZXNzaW9uSUQpXG4gICAge1xuICAgICAgICBpZih0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJzZXNzaW9uSUQgXCIgKyBzZXNzaW9uSUQgKyBcIiDlt7Lnu4/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdID0gbmV3IFRDUFNlc3Npb24oKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdLkluaXQoc2Vzc2lvbklEKTtcbiAgICB9XG5cbiAgICAvL+i/nuaOpeacjeWKoeWZqC3jgIvmiJDlip8g5aSx6LSl5Zue6LCD44CCXG4gICAgcHVibGljIENvbm5lY3Qoc2Vzc2lvbklELGlwLCBwb3J0LGZ1bmNTdWNjZXNzLGZ1bmNGYWlsKVxuICAgIHtcbiAgICAgICAgLy8gaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIiQkSVA9XCIgKyBpcCArIFwiUE9SVD1cIitwb3J0KTtcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXS5Db25uZWN0KGlwLCBwb3J0LGZ1bmNTdWNjZXNzLGZ1bmNGYWlsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6YCA5Ye65pyN5Yqh5ZmoLT5cbiAgICBwdWJsaWMgRGlzY29ubmVjdChzZXNzaW9uSUQpXG4gICAge1xuICAgICAgICBpZih0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdLkRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5Y+M5ZCR5Y2P6K6uKOWPkemAgeaOpeaUtiko5Y2P6K6uOTAwM+aIkOWKn+WPkemAgeWImeS8muaUtuWIsOWNj+iurjkwMDPov5Tlm57nmoTmlbDmja4pXG4gICAgcHVibGljIFNlbmQoc2Vzc2lvbklELG1zZ0lELGRhdGEsc3VjY2Vzc0NhbGxiYWNrOihkYXRhOlVpbnQ4QXJyYXkpPT52b2lkLGZhaWxDYWxsYmFjazooZXJyTXNnOnN0cmluZyk9PnZvaWQsaGlkZU5ldHdvcmtpbmdMb2FkaW5nPWZhbHNlKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXS5TZW5kKG1zZ0lELGRhdGEsc3VjY2Vzc0NhbGxiYWNrLGZhaWxDYWxsYmFjayxoaWRlTmV0d29ya2luZ0xvYWRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL+agueaNruWwj+a4uOaIj+exu+Weiz095Y+M5ZCR5Y2P6K6uKOWPkemAgeaOpeaUtiko5Y2P6K6uOTAwM+aIkOWKn+WPkemAgeWImeS8muaUtuWIsOWNj+iurjkwMDPov5Tlm57nmoTmlbDmja4pXG4gICAgLy8gcHVibGljIFNlbmRXaXRoR2FtZVR5cGUoZ2FtZVR5cGUsc2Vzc2lvbklELG1zZ0lELGRhdGEsc3VjY2Vzc0NhbGxiYWNrLGZhaWxDYWxsYmFjayA9IG51bGwsaGlkZU5ldHdvcmtpbmdMb2FkaW5nID0gZmFsc2UpXG4gICAgLy8ge1xuICAgIC8vICAgICBpZih0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0gIT0gbnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdLlNlbmRXaXRoR2FtZVR5cGUoZ2FtZVR5cGUsbXNnSUQsZGF0YSxzdWNjZXNzQ2FsbGJhY2ssZmFpbENhbGxiYWNrLGhpZGVOZXR3b3JraW5nTG9hZGluZyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvL+WNleWQkeWNj+iurijlj6rlj5HpgIEg5LiN566h5o6l5pS2KVxuICAgIHB1YmxpYyBTZW5kT25lV2F5KHNlc3Npb25JRCxtc2dJRCxkYXRhKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXS5TZW5kT25lV2F5KG1zZ0lELGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/moLnmja7lsI/muLjmiI/nsbvlnos9PeWPkemAgeWNleWQkeWNj+iurijlj6rlj5HpgIEg5LiN566h5o6l5pS2KVxuICAgIC8vIHB1YmxpYyBTZW5kT25lV2F5V2l0aEdhbWVUeXBlKGdhbWVUeXBlLHNlc3Npb25JRCxtc2dJRCxkYXRhKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdICE9IG51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXS5TZW5kT25lV2F5V2l0aEdhbWVUeXBlKGdhbWVUeXBlLG1zZ0lELGRhdGEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy/mn5DkuKpzZXNzaW9u5a+56K+dIOebkeWQrOafkOS4quWNj+iurmlkXG4gICAgcHVibGljIExpc3Rlbk1zZyhzZXNzaW9uSUQsbXNnSUQsZnVuYylcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uTGlzdGVuTXNnKG1zZ0lELGZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/moLnmja7muLjmiI/nsbvlnovliJLliIbmtojmga9pZC8vXG4gICAgLy8gcHVibGljIExpc3Rlbk1zZ1dpdGhHYW1lVHlwZShnYW1lVHlwZSxzZXNzaW9uSUQsbXNnSUQsZnVuYylcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSAhPSBudWxsKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uTGlzdGVuTXNnV2l0aEdhbWVUeXBlKGdhbWVUeXBlLG1zZ0lELGZ1bmMpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8v6YeN5paw5Y+R6YCB5oyC6LW35p2l55qE5raI5oGv77yfLy9cbiAgICBwdWJsaWMgUmVzZW5kSGFuZ09uTXNnKHNlc3Npb25JRClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uUmVzZW5kSGFuZ09uTXNnKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy/kuIDkuKrkvJror51zZXNzaW9u57uR5a6a5LuW55qE5pawZ2FtZVR5cGVcbiAgICAvLyBwdWJsaWMgU2V0Q3VycmVudEdhbWVUeXBlKHNlc3Npb25JRCxnYW1lVHlwZSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSAhPSBudWxsKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uU2V0Q3VycmVudEdhbWVUeXBlKGdhbWVUeXBlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vL+S4gOS4quS8muivnXNlc3Npb27liLfmlrDku5bnmoRpcOWSjHBvcnRcbiAgICAvLyBwdWJsaWMgUmVmcmVzaElQQW5kUG9ydChzZXNzaW9uSUQsaXAsIHBvcnQpXG4gICAgLy8ge1xuICAgIC8vICAgICBpZih0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0gIT0gbnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdLlJlZnJlc2hJUEFuZFBvcnQoaXAsIHBvcnQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8v5o+h5omL5aSx6LSl5LmL5ZCO55qE6YeN6L+e5pON5L2cKOavlOWmgueZu+mZhilcbiAgICAvLyBwdWJsaWMgUmVDb25uZWN0V2hlbkhhbmRTaGFrZUZhaWwoc2Vzc2lvbklEKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdICE9IG51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXS5SZUNvbm5lY3RXaGVuSGFuZFNoYWtlRmFpbCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy/orr7nva5cbiAgICAvLyBwdWJsaWMgU2V0VWlkVG9rZXIoc2Vzc2lvbklELHVpZCx0b2tlbilcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSAhPSBudWxsKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0uU2V0VWlkVG9rZXIodWlkLHRva2VuKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXX0=