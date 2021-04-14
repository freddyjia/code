"use strict";
cc._RF.push(module, '41e5e4OSOFMO6vOusXfiupi', 'ButtonListener');
// Scripts/Components/ButtonListener.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonListener = /** @class */ (function (_super) {
    __extends(ButtonListener, _super);
    function ButtonListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonListener.prototype.Init = function () {
        this.clickEventHandler = new cc.Component.EventHandler();
        this.clickEventHandler.target = this.node;
        this.clickEventHandler.component = "ButtonListener";
        this.clickEventHandler.handler = "OnClickCallback";
        this.button = this.node.getComponent(cc.Button);
        this.button.clickEvents = [];
        this.button.clickEvents.push(this.clickEventHandler);
    };
    ButtonListener.prototype.SetData = function (data) {
        this.clickEventHandler.customEventData = data;
    };
    ButtonListener.prototype.SetAudioName = function (audioName) {
        this.audioName = audioName;
    };
    ButtonListener.prototype.SetOnClickCallback = function (callback) {
        this.onclickCallback = callback;
    };
    ButtonListener.prototype.onLoad = function () {
    };
    ButtonListener.prototype.OnClickCallback = function (event, customEventData) {
        if (this.onclickCallback != null) {
            this.onclickCallback(this.button, customEventData);
            // if(this.audioName == null)
            // {
            //     this.audioName = "MainGame/_Audio/_HallAudio/Click_btn";
            // }
            // AudioManager.GetInstance().SoundPlay(this.audioName);
            /* TODO:A
        if audioName == nil then
            local btnName = string.lower(button.name)

            local containClose = string.contains(btnName, "close")
            local containBack = string.contains(btnName, "back")
            local containExit = string.contains(btnName, "exit")

            if containBack or containClose or containExit then
                AudioManager:GetInstance():SoundPlay(Res.Audios.SoundClose)
            else
                AudioManager:GetInstance():SoundPlay(Res.Audios.SoundClick)
            end
        else
            if audioName~="" then
                AudioManager:GetInstance():SoundPlay(audioName)
            end
        end
        */
        }
    };
    ButtonListener = __decorate([
        ccclass
    ], ButtonListener);
    return ButtonListener;
}(cc.Component));
exports.default = ButtonListener;

cc._RF.pop();