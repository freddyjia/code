"use strict";
cc._RF.push(module, 'fe620vFcAJFqprwIMpMEibK', 'XTweenerValueArray');
// Scripts/Tools/XTween/XTweenerValueArray.ts

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
var XTweenerValueArray = /** @class */ (function (_super) {
    __extends(XTweenerValueArray, _super);
    function XTweenerValueArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XTweenerValueArray.prototype.Init = function (target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv) {
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        this.SetTarget(target);
        this.vauleChangeCallback = vauleChangeCallback;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        // this.curvType = curv;
        // this.pingPong = pingPong;
        // this.repeatTimes = playTimes;
        this.InitTweenerData(playTimes, pingPong, curv);
        this.tmpValue = [this.endValue.length];
    };
    XTweenerValueArray.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        for (var i = 0; i < this.endValue.length; i++) {
            this.tmpValue[i] = this.startValue[i] + (this.endValue[i] - this.startValue[i]) * this.animationProgress;
        }
        if (this.vauleChangeCallback != null) {
            this.vauleChangeCallback(this.tmpValue);
        }
        this.CheckFinish();
    };
    XTweenerValueArray.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = [this.endValue.length];
        }
    };
    XTweenerValueArray.prototype.GetTypeMark = function () {
        return "XTweenerValue";
    };
    return XTweenerValueArray;
}(XTweener_1.default));
exports.default = XTweenerValueArray;

cc._RF.pop();