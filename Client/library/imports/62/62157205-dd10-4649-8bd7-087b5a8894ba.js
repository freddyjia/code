"use strict";
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