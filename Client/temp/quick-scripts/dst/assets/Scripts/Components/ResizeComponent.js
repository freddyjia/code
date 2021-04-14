
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/ResizeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcUmVzaXplQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBZ0NBLENBQUM7SUE5QlcsZ0NBQU0sR0FBZDtRQUVJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRWhELElBQUcsV0FBVyxHQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUMsQ0FBQyxFQUNoQztZQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO2FBRUQ7WUFDSSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQ2pDO1lBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDO0lBOUJnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBZ0NuQztJQUFELHNCQUFDO0NBaENELEFBZ0NDLENBaEM0QyxFQUFFLENBQUMsU0FBUyxHQWdDeEQ7a0JBaENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemVDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBSZXNpemUoKVxuICAgIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLkNhbnZhcy5pbnN0YW5jZTtcbiAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgIGxldCBmcmFtZVdpZHRoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aDtcbiAgICAgICAgbGV0IGZyYW1lSGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XG5cbiAgICAgICAgaWYoZnJhbWVIZWlnaHQvZnJhbWVXaWR0aCA+IDE2LzkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uID0gbmV3IGNjLlNpemUoNzIwLCBmcmFtZUhlaWdodCAvIChmcmFtZVdpZHRoIC8gNzIwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjYW52YXMuZGVzaWduUmVzb2x1dGlvbiA9IG5ldyBjYy5TaXplKGZyYW1lV2lkdGgvZnJhbWVIZWlnaHQgKiAxMjgwLCAxMjgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuUmVzaXplKCk7XG4gICAgICAgIFxuICAgICAgICBpZihjYy5zeXMub3MgIT0gY2Muc3lzLk9TX0FORFJPSUQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLlJlc2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG59XG4iXX0=