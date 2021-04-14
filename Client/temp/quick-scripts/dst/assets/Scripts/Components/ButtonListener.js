
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/ButtonListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcQnV0dG9uTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUEyRUEsQ0FBQztJQXBFVSw2QkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO1FBRW5ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxJQUFXO1FBRXRCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFnQjtRQUdoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLFFBQTBDO1FBRWhFLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQkFBTSxHQUFOO0lBR0EsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsS0FBZ0IsRUFBQyxlQUFzQjtRQUVuRCxJQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxFQUMvQjtZQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQztZQUVsRCw2QkFBNkI7WUFDN0IsSUFBSTtZQUNKLCtEQUErRDtZQUMvRCxJQUFJO1lBQ0osd0RBQXdEO1lBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFrQkY7U0FDRDtJQUNMLENBQUM7SUF2RWdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EyRWxDO0lBQUQscUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRTJDLEVBQUUsQ0FBQyxTQUFTLEdBMkV2RDtrQkEzRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkxpc3RlbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIHByaXZhdGUgY2xpY2tFdmVudEhhbmRsZXI6Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcjtcbiAgICBwcml2YXRlIGJ1dHRvbjpjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBvbmNsaWNrQ2FsbGJhY2s6KGJ1dHRvbjpjYy5CdXR0b24sZGF0YTphbnkpPT52b2lkO1xuICAgIHByaXZhdGUgYXVkaW9OYW1lOnN0cmluZztcblxuICAgIHB1YmxpYyBJbml0KClcbiAgICB7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkJ1dHRvbkxpc3RlbmVyXCI7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiT25DbGlja0NhbGxiYWNrXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xpY2tFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5idXR0b24uY2xpY2tFdmVudHMucHVzaCh0aGlzLmNsaWNrRXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0RGF0YShkYXRhOnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0QXVkaW9OYW1lKGF1ZGlvTmFtZTpzdHJpbmcpXG4gICAge1xuICAgIFxuICAgICAgICB0aGlzLmF1ZGlvTmFtZSA9IGF1ZGlvTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0T25DbGlja0NhbGxiYWNrKGNhbGxiYWNrOihidXR0b246Y2MuQnV0dG9uLGRhdGE6YW55KT0+dm9pZClcbiAgICB7XG4gICAgICAgIHRoaXMub25jbGlja0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkgXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBPbkNsaWNrQ2FsbGJhY2soZXZlbnQ6VG91Y2hFdmVudCxjdXN0b21FdmVudERhdGE6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5vbmNsaWNrQ2FsbGJhY2sgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5vbmNsaWNrQ2FsbGJhY2sodGhpcy5idXR0b24sY3VzdG9tRXZlbnREYXRhKTtcblxuICAgICAgICAgICAgLy8gaWYodGhpcy5hdWRpb05hbWUgPT0gbnVsbClcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmF1ZGlvTmFtZSA9IFwiTWFpbkdhbWUvX0F1ZGlvL19IYWxsQXVkaW8vQ2xpY2tfYnRuXCI7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBBdWRpb01hbmFnZXIuR2V0SW5zdGFuY2UoKS5Tb3VuZFBsYXkodGhpcy5hdWRpb05hbWUpO1xuICAgICAgICAgICAgLyogVE9ETzpBXG4gICAgICAgIGlmIGF1ZGlvTmFtZSA9PSBuaWwgdGhlblxuICAgICAgICAgICAgbG9jYWwgYnRuTmFtZSA9IHN0cmluZy5sb3dlcihidXR0b24ubmFtZSlcblxuICAgICAgICAgICAgbG9jYWwgY29udGFpbkNsb3NlID0gc3RyaW5nLmNvbnRhaW5zKGJ0bk5hbWUsIFwiY2xvc2VcIilcbiAgICAgICAgICAgIGxvY2FsIGNvbnRhaW5CYWNrID0gc3RyaW5nLmNvbnRhaW5zKGJ0bk5hbWUsIFwiYmFja1wiKVxuICAgICAgICAgICAgbG9jYWwgY29udGFpbkV4aXQgPSBzdHJpbmcuY29udGFpbnMoYnRuTmFtZSwgXCJleGl0XCIpXG5cbiAgICAgICAgICAgIGlmIGNvbnRhaW5CYWNrIG9yIGNvbnRhaW5DbG9zZSBvciBjb250YWluRXhpdCB0aGVuXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyOkdldEluc3RhbmNlKCk6U291bmRQbGF5KFJlcy5BdWRpb3MuU291bmRDbG9zZSlcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXI6R2V0SW5zdGFuY2UoKTpTb3VuZFBsYXkoUmVzLkF1ZGlvcy5Tb3VuZENsaWNrKVxuICAgICAgICAgICAgZW5kXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlmIGF1ZGlvTmFtZX49XCJcIiB0aGVuXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyOkdldEluc3RhbmNlKCk6U291bmRQbGF5KGF1ZGlvTmFtZSlcbiAgICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgICAgKi9cbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuXG59XG4iXX0=