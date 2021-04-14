
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/SliderListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e56fY7uMJNM51FZOnTmVnH', 'SliderListener');
// Scripts/Components/SliderListener.ts

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
var SliderListener = /** @class */ (function (_super) {
    __extends(SliderListener, _super);
    function SliderListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderListener.prototype.SetSliderValueChangeCallback = function (callback) {
        this.sliderEventAction = callback;
    };
    SliderListener.prototype.onLoad = function () {
        this.sliderEventHandler = new cc.Component.EventHandler();
        this.sliderEventHandler.target = this.node;
        this.sliderEventHandler.component = "SliderListener";
        this.sliderEventHandler.handler = "OnValueCallback";
        this.slider = this.node.getComponent(cc.Slider);
        this.slider.slideEvents.push(this.sliderEventHandler);
    };
    SliderListener.prototype.OnValueCallback = function (slider, customEventData) {
        this.sliderEventAction(slider, customEventData);
    };
    SliderListener = __decorate([
        ccclass
    ], SliderListener);
    return SliderListener;
}(cc.Component));
exports.default = SliderListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcU2xpZGVyTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUEwQkEsQ0FBQztJQXBCVSxxREFBNEIsR0FBbkMsVUFBb0MsUUFBMEM7UUFFMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUVwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsTUFBZ0IsRUFBRSxlQUFzQjtRQUVwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUF6QmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwQmxDO0lBQUQscUJBQUM7Q0ExQkQsQUEwQkMsQ0ExQjJDLEVBQUUsQ0FBQyxTQUFTLEdBMEJ2RDtrQkExQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckxpc3RlbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc2xpZGVyOmNjLlNsaWRlcjtcbiAgICBwcml2YXRlIHNsaWRlckV2ZW50SGFuZGxlcjpjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyO1xuICAgIHByaXZhdGUgc2xpZGVyRXZlbnRBY3Rpb246KHNsaWRlcjpjYy5TbGlkZXIsZGF0YTphbnkpPT52b2lkO1xuXG4gICAgcHVibGljIFNldFNsaWRlclZhbHVlQ2hhbmdlQ2FsbGJhY2soY2FsbGJhY2s6KHNsaWRlcjpjYy5TbGlkZXIsZGF0YTphbnkpPT52b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5zbGlkZXJFdmVudEFjdGlvbiA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIFxuICAgIHtcbiAgICAgICAgdGhpcy5zbGlkZXJFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICB0aGlzLnNsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMuc2xpZGVyRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiU2xpZGVyTGlzdGVuZXJcIjtcbiAgICAgICAgdGhpcy5zbGlkZXJFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiT25WYWx1ZUNhbGxiYWNrXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpZGVFdmVudHMucHVzaCh0aGlzLnNsaWRlckV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgT25WYWx1ZUNhbGxiYWNrKHNsaWRlcjpjYy5TbGlkZXIsIGN1c3RvbUV2ZW50RGF0YTpzdHJpbmcpIFxuICAgIHtcbiAgICAgICAgdGhpcy5zbGlkZXJFdmVudEFjdGlvbihzbGlkZXIsY3VzdG9tRXZlbnREYXRhKTtcbiAgICB9XG59XG4iXX0=