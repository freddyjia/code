
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62157IF3RBGSYvXCHtaiJS6', 'Main');
// Scripts/Main.ts

"use strict";
/***********************************************************************************
 * 银行充值App
 ***********************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsGetUrlParms_1 = require("./JsTool/JsGetUrlParms");
var MessageNames_1 = require("./Modules/MessageNames");
var MessageCenter_1 = require("./MVCFramework/MessageCenter");
var MVCFramework_1 = require("./MVCFramework/MVCFramework");
var AudioManager_1 = require("./Manager/AudioManager");
var OpenNetworkingUI_1 = require("./Tools/OpenNetworkingUI");
var ImageTool_1 = require("./JsTool/ImageTool");
var TCPNetwork_1 = require("./Network/Socket/TCPNetwork");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.onLoad = function () {
        JsGetUrlParms_1.JsGetUrlParms.SetUrlParmsToWindow();
        AudioManager_1.default.GetInstance().Init();
        MVCFramework_1.default.Init();
        TCPNetwork_1.default.GetInstance().Init(TCPNetwork_1.TCPSessionID.Hall);
        //会从app带过来这5个参数
        cc.log(window["ip"], window["port"], window["token"], window["selfId"], window["proxyId"]);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.StartLogin);
        OpenNetworkingUI_1.default.Show();
        ImageTool_1.ImageTool.Init();
    };
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O3FGQUVxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJGLHdEQUF1RDtBQUN2RCx1REFBa0Q7QUFDbEQsOERBQXlEO0FBQ3pELDREQUF1RDtBQUN2RCx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELGdEQUErQztBQUMvQywwREFBdUU7QUFFakUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5Qzs7SUFpQkEsQ0FBQztJQWZHLHFCQUFNLEdBQU47UUFFSSw2QkFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEMsc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxzQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsZUFBZTtRQUNmLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTNGLHVCQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsMEJBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIscUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBZmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpQnhCO0lBQUQsV0FBQztDQWpCRCxBQWlCQyxDQWpCaUMsRUFBRSxDQUFDLFNBQVMsR0FpQjdDO2tCQWpCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICog6ZO26KGM5YWF5YC8QXBwXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7IEpzR2V0VXJsUGFybXMgfSBmcm9tIFwiLi9Kc1Rvb2wvSnNHZXRVcmxQYXJtc1wiO1xuaW1wb3J0IE1lc3NhZ2VOYW1lcyBmcm9tIFwiLi9Nb2R1bGVzL01lc3NhZ2VOYW1lc1wiO1xuaW1wb3J0IE1lc3NhZ2VDZW50ZXIgZnJvbSBcIi4vTVZDRnJhbWV3b3JrL01lc3NhZ2VDZW50ZXJcIjtcbmltcG9ydCBNVkNGcmFtZXdvcmsgZnJvbSBcIi4vTVZDRnJhbWV3b3JrL01WQ0ZyYW1ld29ya1wiO1xuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IE9wZW5OZXR3b3JraW5nVUkgZnJvbSBcIi4vVG9vbHMvT3Blbk5ldHdvcmtpbmdVSVwiO1xuaW1wb3J0IHsgSW1hZ2VUb29sIH0gZnJvbSBcIi4vSnNUb29sL0ltYWdlVG9vbFwiO1xuaW1wb3J0IFRDUE5ldHdvcmssIHsgVENQU2Vzc2lvbklEIH0gZnJvbSBcIi4vTmV0d29yay9Tb2NrZXQvVENQTmV0d29ya1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgb25Mb2FkICgpIFxuICAgIHsgICBcbiAgICAgICAgSnNHZXRVcmxQYXJtcy5TZXRVcmxQYXJtc1RvV2luZG93KCk7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5HZXRJbnN0YW5jZSgpLkluaXQoKTtcbiAgICAgICAgTVZDRnJhbWV3b3JrLkluaXQoKTtcbiAgICAgICAgVENQTmV0d29yay5HZXRJbnN0YW5jZSgpLkluaXQoVENQU2Vzc2lvbklELkhhbGwpO1xuXG4gICAgICAgIC8v5Lya5LuOYXBw5bim6L+H5p2l6L+ZNeS4quWPguaVsFxuICAgICAgICBjYy5sb2cod2luZG93W1wiaXBcIl0sIHdpbmRvd1tcInBvcnRcIl0sIHdpbmRvd1tcInRva2VuXCJdLCB3aW5kb3dbXCJzZWxmSWRcIl0sIHdpbmRvd1tcInByb3h5SWRcIl0pO1xuXG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLlN0YXJ0TG9naW4pO1xuICAgICAgICBPcGVuTmV0d29ya2luZ1VJLlNob3coKTtcbiAgICAgICAgSW1hZ2VUb29sLkluaXQoKTsgICAgICAgIFxuICAgIH1cblxufVxuIl19