"use strict";
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