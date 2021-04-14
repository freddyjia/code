"use strict";
cc._RF.push(module, '48e38f0L39IDb3VfGNl0s6b', 'XTweenerScale');
// Scripts/Tools/XTween/XTweenerScale.ts

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
var XTweenerScale = /** @class */ (function (_super) {
    __extends(XTweenerScale, _super);
    function XTweenerScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XTweenerScale.prototype.Init = function (target, startValue, endValue, duration, playTimes, pingPong, curv) {
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
    XTweenerScale.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        this.target.scaleX = this.startValue.x + (this.endValue.x - this.startValue.x) * this.animationProgress;
        this.target.scaleY = this.startValue.y + (this.endValue.y - this.startValue.y) * this.animationProgress;
        this.CheckFinish();
    };
    XTweenerScale.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = cc.Vec2.ONE;
            this.startValue.x = this.target.scaleX;
            this.startValue.y = this.target.scaleY;
        }
    };
    XTweenerScale.prototype.GetTypeMark = function () {
        return "XTweenerScale";
    };
    return XTweenerScale;
}(XTweener_1.default));
exports.default = XTweenerScale;

cc._RF.pop();