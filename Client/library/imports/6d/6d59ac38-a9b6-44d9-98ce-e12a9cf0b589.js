"use strict";
cc._RF.push(module, '6d59aw4qbZE2ZjO4Sqc8LWJ', 'ControllerApp');
// Scripts/Modules/Controllers/ControllerApp.ts

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
var Controller_1 = require("../../MVCFramework/Controller");
var MessageNames_1 = require("../MessageNames");
var MVCRegister_1 = require("../MVCRegister");
var Toast_1 = require("../../Tools/Toast");
var ImageTool_1 = require("../../JsTool/ImageTool");
var Language_1 = require("../../Global/Language");
var ControllerChat = /** @class */ (function (_super) {
    __extends(ControllerChat, _super);
    function ControllerChat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testImage = new Image();
        return _this;
    }
    ControllerChat.prototype.Init = function () {
        this.modelApp = this.GetModel(MVCRegister_1.ModelNames.ModelApp);
        this.modelApp.SetSelfPlayerID(window["selfId"]);
        this.modelApp.SetbankProxyId(window["proxyId"]);
    };
    ControllerChat.prototype.Clean = function () {
    };
    ControllerChat.prototype.OnReceiveMessage = function (msg, msgBody) {
        console.log("msg", msg);
        if (msg == MessageNames_1.default.StartLogin) {
            //   this.modelApp.StartLogin();
            this.ShowAppStartView();
        }
        else if (msg == MessageNames_1.default.ShowAppStartView) {
            this.ShowAppStartView();
        }
        else if (msg == MessageNames_1.default.ShowProxyInfo) {
            this.UpDateProxyInfo(msgBody);
        }
        else if (msg == MessageNames_1.default.SubmitDeposit) {
            this.ShowSubmitDeposit(msgBody);
        }
        else if (msg == MessageNames_1.default.SubmitOrder) {
            this.DoneSubmitOrder(msgBody);
        }
    };
    ControllerChat.prototype.UpDateProxyInfo = function (data) {
        if (!data.bankTypes || data.bankTypes.length < 1) {
            return;
        }
        this.viewAppStart.ShowComByType(1);
        //for (let i = 0; i < data.bankTypes.length; i++) {
        this.viewAppStart.UpdataPage(data);
        //}
    };
    ControllerChat.prototype.ShowSubmitDeposit = function (data) {
        this.viewAppStart.ShowComByType(2);
        this.viewAppStart.ShowSubmitInfo(data);
    };
    ControllerChat.prototype.DoneSubmitOrder = function (data) {
        this.viewAppStart.SetEnableButton(false);
    };
    ControllerChat.prototype.ShowAppStartView = function () {
        var _this = this;
        if (this.viewAppStart == null) {
            this.viewAppStart = this.GetView(MVCRegister_1.ViewNames.ViewApp);
            this.viewAppStart.SetOnClick("BtnBack", function () {
                cc.log("退出");
            });
            this.viewAppStart.SetOnClick("BtnSubmit", function () {
                if (_this.viewAppStart.GetEditBoxStr() == null) {
                    Toast_1.default.Show(Language_1.default.Chargetip1);
                    return;
                }
                if (Number(_this.viewAppStart.GetEditBoxStr()) <= 0) {
                    Toast_1.default.Show(Language_1.default.Chargetip2);
                    return;
                }
                cc.log("确认充值", _this.modelApp.GetBankType());
                if (!_this.modelApp.GetBankType()) {
                    Toast_1.default.Show(Language_1.default.Chargetip3);
                    // return;
                }
                _this.viewAppStart.ShowComByType(2);
                var bankType = _this.modelApp.GetBankType();
                var amount = Number(_this.viewAppStart.GetEditBoxStr());
                _this.modelApp.ReqSubmitDeposit(bankType, amount);
                //充值数据
            });
            //界面2逻辑按钮
            this.viewAppStart.SetOnClick("BtnUpload", function () {
                cc.log("上传");
                ImageTool_1.ImageTool.Get(function (imageData) {
                    _this.testImage.onload = function () {
                        if (imageData.length == 0) {
                            Toast_1.default.Show(Language_1.default.Chargetip1);
                            return;
                        }
                        _this.viewAppStart.ShowImageUpload(imageData);
                        _this.viewAppStart.SetEnableButton(true);
                    };
                    _this.testImage.src = imageData;
                });
            });
            this.viewAppStart.SetOnClick("BtnSubmit_info", function () {
                cc.log("确认订单");
                if (_this.viewAppStart.GetEnableButton()) {
                    var order = _this.modelApp.GetOrderNoe();
                    var desc = _this.viewAppStart.GetEditBoxStrBeiZhu();
                    var imageData = _this.testImage.src;
                    _this.modelApp.ReqSubmitOrder(order, imageData, desc);
                }
            });
            this.viewAppStart.SetOnClick("BtnBack_info", function () {
                cc.log("离开info界面");
                _this.viewAppStart.ShowComByType(1);
            });
            this.viewAppStart.addBtnCopyClick();
        }
        this.viewAppStart.SetSelfPlayerID(window["selfId"]);
        this.viewAppStart.Show(function () {
            // 请求协议
            // OpenNetworkingUI.Hide();
            _this.viewAppStart.ShowComByType(1);
            _this.modelApp.ReqProxyInfo();
        });
    };
    return ControllerChat;
}(Controller_1.default));
exports.default = ControllerChat;

cc._RF.pop();