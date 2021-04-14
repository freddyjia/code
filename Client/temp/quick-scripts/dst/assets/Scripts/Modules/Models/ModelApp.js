
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Models/ModelApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01b9f12GlVHx7LqvWYR07BS', 'ModelApp');
// Scripts/Modules/Models/ModelApp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../MVCFramework/Model");
var TCPNetwork_1 = require("../../Network/Socket/TCPNetwork");
var MessageNames_1 = require("../MessageNames");
var Toast_1 = require("../../Tools/Toast");
var TimerManager_1 = require("../../Components/TimerManager");
var Ping_1 = require("../../Protos/Ping");
var MessageDefine_1 = require("../../Protos/MessageDefine");
var Language_1 = require("../../Global/Language");
var BankProxy_1 = require("../../Protos/BankProxy");
var MessageDefine_BankProxy_1 = require("../../Protos/MessageDefine_BankProxy");
var ModelChat = /** @class */ (function (_super) {
    __extends(ModelChat, _super);
    function ModelChat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.date = new Date();
        return _this;
    }
    ModelChat.prototype.Init = function () {
    };
    ModelChat.prototype.Clean = function () {
    };
    ModelChat.prototype.SetSelfPlayerID = function (playerId) {
        this.selfPlayerId = playerId;
    };
    ModelChat.prototype.SetbankProxyId = function (proxyId) {
        this.ProxyId = proxyId;
    };
    ModelChat.prototype.SetBankType = function (banktype) {
        this.CurrentBanktype = banktype;
    };
    ModelChat.prototype.GetBankType = function () {
        return this.CurrentBanktype;
    };
    ModelChat.prototype.SetOrderNo = function (orderNo) {
        this.OrderNo = orderNo;
    };
    ModelChat.prototype.GetOrderNoe = function () {
        return this.OrderNo;
    };
    // 连接和登录
    ModelChat.prototype.StartLogin = function () {
        var _this = this;
        TCPNetwork_1.default.GetInstance().Connect(TCPNetwork_1.TCPSessionID.Hall, window["ip"], window["port"], function () {
            cc.log("连接服务器成功");
            _this.InitPing();
            // 链接成功，开始尝试登录
            var req = BankProxy_1.LoginReq.create();
            req.playerId = _this.selfPlayerId;
            var reqData = BankProxy_1.LoginReq.encode(req).finish();
            TCPNetwork_1.default.GetInstance().Send(TCPNetwork_1.TCPSessionID.Hall, MessageDefine_BankProxy_1.BankProxyMsgDefine.MSG_BankProxy_Login, reqData, function (data) {
                var resData = BankProxy_1.LoginRes.decode(data);
                if (resData.success) {
                    cc.log("登录服务器成功");
                    _this.SendMessage(MessageNames_1.default.ShowAppStartView);
                }
                else {
                    cc.log("连接服务器失败:", resData.tips);
                    Toast_1.default.Show(resData.tips);
                }
            }, function () {
            });
        }, function () {
            Toast_1.default.Show(Language_1.default.text4);
        });
    };
    ///请求代理信息
    ModelChat.prototype.ReqProxyInfo = function () {
        var _this = this;
        TCPNetwork_1.default.GetInstance().Connect(TCPNetwork_1.TCPSessionID.Hall, window["ip"], window["port"], function () {
            cc.log("连接服务器成功");
            _this.InitPing();
            // 链接成功，开始尝试登录
            var req = BankProxy_1.ProxyInfoReq.create();
            req.bankProxyId = _this.ProxyId;
            var reqData = BankProxy_1.ProxyInfoReq.encode(req).finish();
            TCPNetwork_1.default.GetInstance().Send(TCPNetwork_1.TCPSessionID.Hall, MessageDefine_BankProxy_1.BankProxyMsgDefine.MSG_BankProxy_ProxyInfoReq, reqData, function (data) {
                var resData = BankProxy_1.ProxyInfoRsp.decode(data);
                _this.SendMessage(MessageNames_1.default.ShowProxyInfo);
            }, function () {
            });
        }, function () {
            Toast_1.default.Show(Language_1.default.text4);
        });
    };
    //	MSG_BankProxy_SubmitDepositReq 	= 15103;		//提交存入数额
    ModelChat.prototype.ReqSubmitDeposit = function (banktype, amount) {
        var _this = this;
        cc.log("提交存入数额");
        TCPNetwork_1.default.GetInstance().Connect(TCPNetwork_1.TCPSessionID.Hall, window["ip"], window["port"], function () {
            cc.log("连接服务器成功");
            _this.InitPing();
            // 链接成功，开始尝试登录
            var req = BankProxy_1.SubmitDepositReq.create();
            req.bankProxyId = _this.ProxyId;
            req.playerId = _this.selfPlayerId;
            req.bankType = banktype;
            req.depositAmount = amount;
            var reqData = BankProxy_1.SubmitDepositReq.encode(req).finish();
            TCPNetwork_1.default.GetInstance().Send(TCPNetwork_1.TCPSessionID.Hall, MessageDefine_BankProxy_1.BankProxyMsgDefine.MSG_BankProxy_SubmitDepositReq, reqData, function (data) {
                var resData = BankProxy_1.SubmitDepositRsp.decode(data);
                _this.SendMessage(MessageNames_1.default.SubmitDeposit);
            }, function () {
            });
        }, function () {
            Toast_1.default.Show(Language_1.default.text4);
        });
    };
    //desc:备注信息
    ModelChat.prototype.ReqSubmitOrder = function (orderNo, imageData, desc) {
        var _this = this;
        TCPNetwork_1.default.GetInstance().Connect(TCPNetwork_1.TCPSessionID.Hall, window["ip"], window["port"], function () {
            cc.log("连接服务器成功");
            _this.InitPing();
            // 链接成功，开始尝试登录
            var req = BankProxy_1.SubmitOrderReq.create();
            req.orderNo = orderNo;
            req.imageData = imageData;
            req.desc = desc;
            var reqData = BankProxy_1.SubmitOrderReq.encode(req).finish();
            TCPNetwork_1.default.GetInstance().Send(TCPNetwork_1.TCPSessionID.Hall, MessageDefine_BankProxy_1.BankProxyMsgDefine.MSG_BankProxy_SubmitOrderReq, reqData, function (data) {
                var resData = BankProxy_1.SubmitOrderRsp.decode(data);
                if (resData.success) {
                    cc.log("提交成功");
                    _this.SendMessage(MessageNames_1.default.SubmitOrder);
                }
                else {
                    cc.log("提交失败:", resData.tips);
                    Toast_1.default.Show(resData.tips);
                }
            }, function () {
            });
        }, function () {
            Toast_1.default.Show(Language_1.default.text4);
        });
    };
    ModelChat.prototype.InitPing = function () {
        var _this = this;
        TimerManager_1.default.GetInstance().DeleteTimer(this.pingTimer);
        this.lastSendPingTime = Date.now();
        this.pingTimer = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            var timeNow = Date.now();
            if (timeNow - _this.lastSendPingTime > 3000) {
                _this.SendPing(function () {
                    // this.ResetPingChecker();
                });
                _this.lastSendPingTime = timeNow;
            }
        }, 5, null, -1, 5, true);
    };
    ModelChat.prototype.SendPing = function (funcSuccess) {
        var req = Ping_1.PingReq.create();
        req.timestamp = this.date.getDate();
        var senddata = Ping_1.PingReq.encode(req).finish();
        TCPNetwork_1.default.GetInstance().Send(TCPNetwork_1.TCPSessionID.Hall, MessageDefine_1.PingMsgDefine.MSG_PING, senddata, function (data) {
            funcSuccess();
        }, function (errmsg) {
        }, true);
    };
    return ModelChat;
}(Model_1.default));
exports.default = ModelChat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcTW9kZWxzXFxNb2RlbEFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBNkM7QUFDN0MsOERBQTJFO0FBQzNFLGdEQUEyQztBQUMzQywyQ0FBc0M7QUFDdEMsOERBQXlEO0FBQ3pELDBDQUE0QztBQUM1Qyw0REFBMkQ7QUFDM0Qsa0RBQTZDO0FBQzdDLG9EQUEySztBQUMzSyxnRkFBMEU7QUFFMUU7SUFBdUMsNkJBQUs7SUFBNUM7UUFBQSxxRUEwTUM7UUF6TVcsVUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7O0lBeU05QixDQUFDO0lBak1VLHdCQUFJLEdBQVg7SUFDQSxDQUFDO0lBRU0seUJBQUssR0FBWjtJQUNBLENBQUM7SUFFTSxtQ0FBZSxHQUF0QixVQUF1QixRQUFRO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFDTSxrQ0FBYyxHQUFyQixVQUFzQixPQUFPO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFDTSwrQkFBVyxHQUFsQixVQUFtQixRQUFRO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFDTSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sOEJBQVUsR0FBakIsVUFBa0IsT0FBTztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ00sK0JBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUdELFFBQVE7SUFDRCw4QkFBVSxHQUFqQjtRQUFBLGlCQW1DQztRQWxDRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyx5QkFBWSxDQUFD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SUFFYixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTFNQSxBQTBNQyxDQTFNc0MsZUFBSyxHQTBNM0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uLy4uL01WQ0ZyYW1ld29yay9Nb2RlbFwiO1xyXG5pbXBvcnQgVENQTmV0d29yaywgeyBUQ1BTZXNzaW9uSUQgfSBmcm9tIFwiLi4vLi4vTmV0d29yay9Tb2NrZXQvVENQTmV0d29ya1wiO1xyXG5pbXBvcnQgTWVzc2FnZU5hbWVzIGZyb20gXCIuLi9NZXNzYWdlTmFtZXNcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCIuLi8uLi9Ub29scy9Ub2FzdFwiO1xyXG5pbXBvcnQgVGltZXJNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RpbWVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQaW5nUmVxIH0gZnJvbSBcIi4uLy4uL1Byb3Rvcy9QaW5nXCI7XHJcbmltcG9ydCB7IFBpbmdNc2dEZWZpbmUgfSBmcm9tIFwiLi4vLi4vUHJvdG9zL01lc3NhZ2VEZWZpbmVcIjtcclxuaW1wb3J0IExhbmd1YWdlIGZyb20gXCIuLi8uLi9HbG9iYWwvTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHsgQmFua1Byb3h5SW5mbywgTG9naW5SZXEsIExvZ2luUmVzLCBQcm94eUluZm9SZXEsIFByb3h5SW5mb1JzcCwgU3VibWl0RGVwb3NpdFJlcSwgU3VibWl0RGVwb3NpdFJzcCwgU3VibWl0T3JkZXJSZXEsIFN1Ym1pdE9yZGVyUnNwIH0gZnJvbSBcIi4uLy4uL1Byb3Rvcy9CYW5rUHJveHlcIjtcclxuaW1wb3J0IHsgQmFua1Byb3h5TXNnRGVmaW5lIH0gZnJvbSBcIi4uLy4uL1Byb3Rvcy9NZXNzYWdlRGVmaW5lX0JhbmtQcm94eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWxDaGF0IGV4dGVuZHMgTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHByaXZhdGUgcGluZ1RpbWVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2VuZFBpbmdUaW1lO1xyXG4gICAgcHJpdmF0ZSBzZWxmUGxheWVySWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgUHJveHlJZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBDdXJyZW50QmFua3R5cGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgT3JkZXJObzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBJbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDbGVhbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0U2VsZlBsYXllcklEKHBsYXllcklkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxmUGxheWVySWQgPSBwbGF5ZXJJZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRiYW5rUHJveHlJZChwcm94eUlkKSB7XHJcbiAgICAgICAgdGhpcy5Qcm94eUlkID0gcHJveHlJZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRCYW5rVHlwZShiYW5rdHlwZSkge1xyXG4gICAgICAgIHRoaXMuQ3VycmVudEJhbmt0eXBlID0gYmFua3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0QmFua1R5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DdXJyZW50QmFua3R5cGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0T3JkZXJObyhvcmRlck5vKSB7XHJcbiAgICAgICAgdGhpcy5PcmRlck5vID0gb3JkZXJObztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPcmRlck5vZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk9yZGVyTm87XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOi/nuaOpeWSjOeZu+W9lVxyXG4gICAgcHVibGljIFN0YXJ0TG9naW4oKSB7XHJcbiAgICAgICAgVENQTmV0d29yay5HZXRJbnN0YW5jZSgpLkNvbm5lY3QoVENQU2Vzc2lvbklELkhhbGwsIHdpbmRvd1tcImlwXCJdLCB3aW5kb3dbXCJwb3J0XCJdLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLov57mjqXmnI3liqHlmajmiJDlip9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Jbml0UGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmTvuaOpeaIkOWKn++8jOW8gOWni+WwneivleeZu+W9lVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IExvZ2luUmVxLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxLnBsYXllcklkID0gdGhpcy5zZWxmUGxheWVySWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxRGF0YSA9IExvZ2luUmVxLmVuY29kZShyZXEpLmZpbmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgVENQTmV0d29yay5HZXRJbnN0YW5jZSgpLlNlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgVENQU2Vzc2lvbklELkhhbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgQmFua1Byb3h5TXNnRGVmaW5lLk1TR19CYW5rUHJveHlfTG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IExvZ2luUmVzLmRlY29kZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0RhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi55m75b2V5pyN5Yqh5Zmo5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZW5kTWVzc2FnZShNZXNzYWdlTmFtZXMuU2hvd0FwcFN0YXJ0Vmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLov57mjqXmnI3liqHlmajlpLHotKU6XCIsIHJlc0RhdGEudGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5TaG93KHJlc0RhdGEudGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuU2hvdyhMYW5ndWFnZS50ZXh0NCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8vL+ivt+axguS7o+eQhuS/oeaBr1xyXG4gICAgcHVibGljIFJlcVByb3h5SW5mbygpIHtcclxuICAgICAgICBUQ1BOZXR3b3JrLkdldEluc3RhbmNlKCkuQ29ubmVjdChUQ1BTZXNzaW9uSUQuSGFsbCwgd2luZG93W1wiaXBcIl0sIHdpbmRvd1tcInBvcnRcIl0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIui/nuaOpeacjeWKoeWZqOaIkOWKn1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkluaXRQaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6ZO+5o6l5oiQ5Yqf77yM5byA5aeL5bCd6K+V55m75b2VXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxID0gUHJveHlJbmZvUmVxLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxLmJhbmtQcm94eUlkID0gdGhpcy5Qcm94eUlkO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcURhdGEgPSBQcm94eUluZm9SZXEuZW5jb2RlKHJlcSkuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICBUQ1BOZXR3b3JrLkdldEluc3RhbmNlKCkuU2VuZChcclxuICAgICAgICAgICAgICAgICAgICBUQ1BTZXNzaW9uSUQuSGFsbCxcclxuICAgICAgICAgICAgICAgICAgICBCYW5rUHJveHlNc2dEZWZpbmUuTVNHX0JhbmtQcm94eV9Qcm94eUluZm9SZXEsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzRGF0YSA9IFByb3h5SW5mb1JzcC5kZWNvZGUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLlNob3dQcm94eUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5TaG93KExhbmd1YWdlLnRleHQ0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL1x0TVNHX0JhbmtQcm94eV9TdWJtaXREZXBvc2l0UmVxIFx0PSAxNTEwMztcdFx0Ly/mj5DkuqTlrZjlhaXmlbDpop1cclxuICAgIHB1YmxpYyBSZXFTdWJtaXREZXBvc2l0KGJhbmt0eXBlOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MubG9nKFwi5o+Q5Lqk5a2Y5YWl5pWw6aKdXCIpXHJcbiAgICAgICAgVENQTmV0d29yay5HZXRJbnN0YW5jZSgpLkNvbm5lY3QoVENQU2Vzc2lvbklELkhhbGwsIHdpbmRvd1tcImlwXCJdLCB3aW5kb3dbXCJwb3J0XCJdLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLov57mjqXmnI3liqHlmajmiJDlip9cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5Jbml0UGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmTvuaOpeaIkOWKn++8jOW8gOWni+WwneivleeZu+W9lVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IFN1Ym1pdERlcG9zaXRSZXEuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXEuYmFua1Byb3h5SWQgPSB0aGlzLlByb3h5SWQ7XHJcbiAgICAgICAgICAgICAgICByZXEucGxheWVySWQgPSB0aGlzLnNlbGZQbGF5ZXJJZDtcclxuICAgICAgICAgICAgICAgIHJlcS5iYW5rVHlwZSA9IGJhbmt0eXBlO1xyXG4gICAgICAgICAgICAgICAgcmVxLmRlcG9zaXRBbW91bnQgPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxRGF0YSA9IFN1Ym1pdERlcG9zaXRSZXEuZW5jb2RlKHJlcSkuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICBUQ1BOZXR3b3JrLkdldEluc3RhbmNlKCkuU2VuZChcclxuICAgICAgICAgICAgICAgICAgICBUQ1BTZXNzaW9uSUQuSGFsbCxcclxuICAgICAgICAgICAgICAgICAgICBCYW5rUHJveHlNc2dEZWZpbmUuTVNHX0JhbmtQcm94eV9TdWJtaXREZXBvc2l0UmVxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSBTdWJtaXREZXBvc2l0UnNwLmRlY29kZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZW5kTWVzc2FnZShNZXNzYWdlTmFtZXMuU3VibWl0RGVwb3NpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UudGV4dDQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vZGVzYzrlpIfms6jkv6Hmga9cclxuICAgIHB1YmxpYyBSZXFTdWJtaXRPcmRlcihvcmRlck5vOiBzdHJpbmcsIGltYWdlRGF0YTogc3RyaW5nLCBkZXNjOiBzdHJpbmcpIHtcclxuICAgICAgICBUQ1BOZXR3b3JrLkdldEluc3RhbmNlKCkuQ29ubmVjdChUQ1BTZXNzaW9uSUQuSGFsbCwgd2luZG93W1wiaXBcIl0sIHdpbmRvd1tcInBvcnRcIl0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIui/nuaOpeacjeWKoeWZqOaIkOWKn1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkluaXRQaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6ZO+5o6l5oiQ5Yqf77yM5byA5aeL5bCd6K+V55m75b2VXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxID0gU3VibWl0T3JkZXJSZXEuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXEub3JkZXJObyA9IG9yZGVyTm87XHJcbiAgICAgICAgICAgICAgICByZXEuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgcmVxLmRlc2MgPSBkZXNjO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXFEYXRhID0gU3VibWl0T3JkZXJSZXEuZW5jb2RlKHJlcSkuZmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICBUQ1BOZXR3b3JrLkdldEluc3RhbmNlKCkuU2VuZChcclxuICAgICAgICAgICAgICAgICAgICBUQ1BTZXNzaW9uSUQuSGFsbCxcclxuICAgICAgICAgICAgICAgICAgICBCYW5rUHJveHlNc2dEZWZpbmUuTVNHX0JhbmtQcm94eV9TdWJtaXRPcmRlclJlcSxcclxuICAgICAgICAgICAgICAgICAgICByZXFEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNEYXRhID0gU3VibWl0T3JkZXJSc3AuZGVjb2RlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzRGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmj5DkuqTmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNlbmRNZXNzYWdlKE1lc3NhZ2VOYW1lcy5TdWJtaXRPcmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLmj5DkuqTlpLHotKU6XCIsIHJlc0RhdGEudGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5TaG93KHJlc0RhdGEudGlwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuU2hvdyhMYW5ndWFnZS50ZXh0NCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJbml0UGluZygpIHtcclxuICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcih0aGlzLnBpbmdUaW1lcik7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFNlbmRQaW5nVGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGluZ1RpbWVyID0gVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuQ2FsbEFjdGlvbkRlbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIGlmICh0aW1lTm93IC0gdGhpcy5sYXN0U2VuZFBpbmdUaW1lID4gMzAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZW5kUGluZygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5SZXNldFBpbmdDaGVja2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlbmRQaW5nVGltZSA9IHRpbWVOb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgNSwgbnVsbCwgLTEsIDUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2VuZFBpbmcoZnVuY1N1Y2Nlc3MpIHtcclxuICAgICAgICBsZXQgcmVxID0gUGluZ1JlcS5jcmVhdGUoKTtcclxuICAgICAgICByZXEudGltZXN0YW1wID0gdGhpcy5kYXRlLmdldERhdGUoKTtcclxuICAgICAgICBsZXQgc2VuZGRhdGEgPSBQaW5nUmVxLmVuY29kZShyZXEpLmZpbmlzaCgpO1xyXG4gICAgICAgIFRDUE5ldHdvcmsuR2V0SW5zdGFuY2UoKS5TZW5kKFRDUFNlc3Npb25JRC5IYWxsLCBQaW5nTXNnRGVmaW5lLk1TR19QSU5HLCBzZW5kZGF0YSwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZnVuY1N1Y2Nlc3MoKTtcclxuICAgICAgICB9LCAoZXJybXNnKSA9PiB7XHJcblxyXG4gICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgIH1cclxufSJdfQ==