"use strict";
cc._RF.push(module, 'f68e9QZzNVKJ6qv0bcCVep9', 'ResizeComponent');
// Scripts/Components/ResizeComponent.ts

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
var ResizeComponent = /** @class */ (function (_super) {
    __extends(ResizeComponent, _super);
    function ResizeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResizeComponent.prototype.Resize = function () {
        var canvas = cc.Canvas.instance;
        canvas.fitWidth = true;
        canvas.fitHeight = true;
        var frameWidth = cc.view.getFrameSize().width;
        var frameHeight = cc.view.getFrameSize().height;
        if (frameHeight / frameWidth > 16 / 9) {
            canvas.designResolution = new cc.Size(720, frameHeight / (frameWidth / 720));
        }
        else {
            canvas.designResolution = new cc.Size(frameWidth / frameHeight * 1280, 1280);
        }
    };
    ResizeComponent.prototype.onLoad = function () {
        var _this = this;
        this.Resize();
        if (cc.sys.os != cc.sys.OS_ANDROID) {
            window.addEventListener("resize", function () {
                _this.Resize();
            });
        }
    };
    ResizeComponent = __decorate([
        ccclass
    ], ResizeComponent);
    return ResizeComponent;
}(cc.Component));
exports.default = ResizeComponent;

cc._RF.pop();