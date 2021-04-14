
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Controllers/ControllerApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcQ29udHJvbGxlcnNcXENvbnRyb2xsZXJBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELGdEQUEyQztBQUUzQyw4Q0FBdUQ7QUFFdkQsMkNBQXNDO0FBQ3RDLG9EQUFtRDtBQUVuRCxrREFBNkM7QUFHN0M7SUFBNEMsa0NBQVU7SUFBdEQ7UUFBQSxxRUE0SEM7UUExSEcsZUFBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O0lBMEg1QixDQUFDO0lBckhVLDZCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsd0JBQVUsQ0FBQyxRQUFRLENBQWEsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ00sOEJBQUssR0FBWjtJQUVBLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLE9BQVk7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDdkIsSUFBSSxHQUFHLElBQUksc0JBQVksQ0FBQyxVQUFVLEVBQUU7WUFDaEMsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1NBQzFCO2FBQ0ksSUFBSSxHQUFHLElBQUksc0JBQVksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUksR0FBRyxJQUFJLHNCQUFZLENBQUMsYUFBYSxFQUFFO1lBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENB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LENBQUMsQ0FBQTtnQkFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTztZQUNQLDJCQUEyQjtZQUUzQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBSVAsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0E1SEEsQUE0SEMsQ0E1SDJDLG9CQUFVLEdBNEhyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuLi8uLi9NVkNGcmFtZXdvcmsvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgTWVzc2FnZU5hbWVzIGZyb20gXCIuLi9NZXNzYWdlTmFtZXNcIjtcclxuaW1wb3J0IFZpZXdBcHAgZnJvbSBcIi4uL1ZpZXdzL1ZpZXdBcHBcIjtcclxuaW1wb3J0IHsgVmlld05hbWVzLCBNb2RlbE5hbWVzIH0gZnJvbSBcIi4uL01WQ1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBNb2RlbEFwcCBmcm9tIFwiLi4vTW9kZWxzL01vZGVsQXBwXCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi4vLi4vVG9vbHMvVG9hc3RcIjtcclxuaW1wb3J0IHsgSW1hZ2VUb29sIH0gZnJvbSBcIi4uLy4uL0pzVG9vbC9JbWFnZVRvb2xcIjtcclxuaW1wb3J0IE9wZW5OZXR3b3JraW5nVUkgZnJvbSBcIi4uLy4uL1Rvb2xzL09wZW5OZXR3b3JraW5nVUlcIjtcclxuaW1wb3J0IExhbmd1YWdlIGZyb20gXCIuLi8uLi9HbG9iYWwvTGFuZ3VhZ2VcIjtcclxuaW1wb3J0IHsgUHJveHlJbmZvUnNwLCBTdWJtaXREZXBvc2l0UnNwLCBTdWJtaXRPcmRlclJzcCB9IGZyb20gXCIuLi8uLi9Qcm90b3MvQmFua1Byb3h5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyQ2hhdCBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgdmlld0FwcFN0YXJ0OiBWaWV3QXBwO1xyXG4gICAgdGVzdEltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgbW9kZWxBcHA6IE1vZGVsQXBwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsQXBwID0gdGhpcy5HZXRNb2RlbChNb2RlbE5hbWVzLk1vZGVsQXBwKSBhcyBNb2RlbEFwcDtcclxuICAgICAgICB0aGlzLm1vZGVsQXBwLlNldFNlbGZQbGF5ZXJJRCh3aW5kb3dbXCJzZWxmSWRcIl0pO1xyXG4gICAgICAgIHRoaXMubW9kZWxBcHAuU2V0YmFua1Byb3h5SWQod2luZG93W1wicHJveHlJZFwiXSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgQ2xlYW4oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPblJlY2VpdmVNZXNzYWdlKG1zZzogc3RyaW5nLCBtc2dCb2R5OiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1zZ1wiLCBtc2cpXHJcbiAgICAgICAgaWYgKG1zZyA9PSBNZXNzYWdlTmFtZXMuU3RhcnRMb2dpbikge1xyXG4gICAgICAgICAgICAvLyAgIHRoaXMubW9kZWxBcHAuU3RhcnRMb2dpbigpO1xyXG4gICAgICAgICAgICB0aGlzLlNob3dBcHBTdGFydFZpZXcoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtc2cgPT0gTWVzc2FnZU5hbWVzLlNob3dBcHBTdGFydFZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5TaG93QXBwU3RhcnRWaWV3KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT0gTWVzc2FnZU5hbWVzLlNob3dQcm94eUluZm8pIHtcclxuICAgICAgICAgICAgdGhpcy5VcERhdGVQcm94eUluZm8obXNnQm9keSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT0gTWVzc2FnZU5hbWVzLlN1Ym1pdERlcG9zaXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuU2hvd1N1Ym1pdERlcG9zaXQobXNnQm9keSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT0gTWVzc2FnZU5hbWVzLlN1Ym1pdE9yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRG9uZVN1Ym1pdE9yZGVyKG1zZ0JvZHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVXBEYXRlUHJveHlJbmZvKGRhdGE6IFByb3h5SW5mb1JzcCkge1xyXG4gICAgICAgIGlmICghZGF0YS5iYW5rVHlwZXMgfHwgZGF0YS5iYW5rVHlwZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlld0FwcFN0YXJ0LlNob3dDb21CeVR5cGUoMSk7XHJcbiAgICAgICAgLy9mb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuYmFua1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuVXBkYXRhUGFnZShkYXRhKVxyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNob3dTdWJtaXREZXBvc2l0KGRhdGE6IFN1Ym1pdERlcG9zaXRSc3ApIHtcclxuICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TaG93Q29tQnlUeXBlKDIpO1xyXG4gICAgICAgIHRoaXMudmlld0FwcFN0YXJ0LlNob3dTdWJtaXRJbmZvKGRhdGEpXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgRG9uZVN1Ym1pdE9yZGVyKGRhdGE6IFN1Ym1pdE9yZGVyUnNwKSB7XHJcbiAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuU2V0RW5hYmxlQnV0dG9uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvd0FwcFN0YXJ0VmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3QXBwU3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdBcHBTdGFydCA9IHRoaXMuR2V0VmlldyhWaWV3TmFtZXMuVmlld0FwcCkgYXMgVmlld0FwcDtcclxuICAgICAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuU2V0T25DbGljayhcIkJ0bkJhY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi6YCA5Ye6XCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TZXRPbkNsaWNrKFwiQnRuU3VibWl0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdBcHBTdGFydC5HZXRFZGl0Qm94U3RyKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ2hhcmdldGlwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih0aGlzLnZpZXdBcHBTdGFydC5HZXRFZGl0Qm94U3RyKCkpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5TaG93KExhbmd1YWdlLkNoYXJnZXRpcDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuehruiupOWFheWAvFwiLCB0aGlzLm1vZGVsQXBwLkdldEJhbmtUeXBlKCkpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW9kZWxBcHAuR2V0QmFua1R5cGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ2hhcmdldGlwMyk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TaG93Q29tQnlUeXBlKDIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYmFua1R5cGUgPSB0aGlzLm1vZGVsQXBwLkdldEJhbmtUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTnVtYmVyKHRoaXMudmlld0FwcFN0YXJ0LkdldEVkaXRCb3hTdHIoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsQXBwLlJlcVN1Ym1pdERlcG9zaXQoYmFua1R5cGUsIGFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAvL+WFheWAvOaVsOaNrlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v55WM6Z2iMumAu+i+keaMiemSrlxyXG4gICAgICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TZXRPbkNsaWNrKFwiQnRuVXBsb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuS4iuS8oFwiKVxyXG4gICAgICAgICAgICAgICAgSW1hZ2VUb29sLkdldCgoaW1hZ2VEYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5TaG93KExhbmd1YWdlLkNoYXJnZXRpcDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0FwcFN0YXJ0LlNob3dJbWFnZVVwbG9hZChpbWFnZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TZXRFbmFibGVCdXR0b24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RJbWFnZS5zcmMgPSBpbWFnZURhdGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudmlld0FwcFN0YXJ0LlNldE9uQ2xpY2soXCJCdG5TdWJtaXRfaW5mb1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLnoa7orqTorqLljZVcIilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdBcHBTdGFydC5HZXRFbmFibGVCdXR0b24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IHRoaXMubW9kZWxBcHAuR2V0T3JkZXJOb2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMudmlld0FwcFN0YXJ0LkdldEVkaXRCb3hTdHJCZWlaaHUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gdGhpcy50ZXN0SW1hZ2Uuc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWxBcHAuUmVxU3VibWl0T3JkZXIob3JkZXIsIGltYWdlRGF0YSwgZGVzYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMudmlld0FwcFN0YXJ0LlNldE9uQ2xpY2soXCJCdG5CYWNrX2luZm9cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi56a75byAaW5mb+eVjOmdolwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuU2hvd0NvbUJ5VHlwZSgxKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuYWRkQnRuQ29weUNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TZXRTZWxmUGxheWVySUQod2luZG93W1wic2VsZklkXCJdKTtcclxuICAgICAgICB0aGlzLnZpZXdBcHBTdGFydC5TaG93KCgpID0+IHtcclxuICAgICAgICAgICAgLy8g6K+35rGC5Y2P6K6uXHJcbiAgICAgICAgICAgIC8vIE9wZW5OZXR3b3JraW5nVUkuSGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWV3QXBwU3RhcnQuU2hvd0NvbUJ5VHlwZSgxKVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsQXBwLlJlcVByb3h5SW5mbygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==