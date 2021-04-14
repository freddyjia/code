"use strict";
cc._RF.push(module, '2212eN9ALRHabcQegE2uXN4', 'XTweenerColor');
// Scripts/Tools/XTween/XTweenerColor.ts

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
var XTweener_1 = require("./Base/XTweener");
var XTweenCurv_1 = require("./Base/XTweenCurv");
var XTweenerColor = /** @class */ (function (_super) {
    __extends(XTweenerColor, _super);
    function XTweenerColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colorTmp = new cc.Color();
        return _this;
    }
    XTweenerColor.prototype.Init = function (target, startValue, endValue, duration, playTimes, pingPong, curv) {
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        this.SetTarget(target);
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        // this.curvType = curv;
        // this.pingPong = pingPong;
        // this.repeatTimes = playTimes;
        this.InitTweenerData(playTimes, pingPong, curv);
    };
    XTweenerColor.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        this.colorTmp.setR(this.startValue[0] + (this.endValue[0] - this.startValue[0]) * this.animationProgress);
        this.colorTmp.setG(this.startValue[1] + (this.endValue[1] - this.startValue[1]) * this.animationProgress);
        this.colorTmp.setB(this.startValue[2] + (this.endValue[2] - this.startValue[2]) * this.animationProgress);
        this.colorTmp.setA(this.startValue[3] + (this.endValue[3] - this.startValue[3]) * this.animationProgress);
        this.target.color = this.colorTmp;
        this.CheckFinish();
    };
    XTweenerColor.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = [255, 255, 255, 255];
        }
    };
    XTweenerColor.prototype.GetTypeMark = function () {
        return "XTweenerColor";
    };
    return XTweenerColor;
}(XTweener_1.default));
exports.default = XTweenerColor;

cc._RF.pop();