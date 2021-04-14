"use strict";
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