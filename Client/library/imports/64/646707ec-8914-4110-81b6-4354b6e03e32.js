"use strict";
cc._RF.push(module, '64670fsiRRBEIG2Q1S24D4y', 'XTweenerPosition');
// Scripts/Tools/XTween/XTweenerPosition.ts

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
var XTweenerPosition = /** @class */ (function (_super) {
    __extends(XTweenerPosition, _super);
    function XTweenerPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vec2Tmp = cc.Vec2.ZERO;
        return _this;
    }
    XTweenerPosition.prototype.Init = function (target, startValue, endValue, duration, playTimes, pingPong, curv) {
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        this.SetTarget(target);
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.InitTweenerData(playTimes, pingPong, curv);
        // this.curvType = curv;
        // this.pingPong = pingPong;
        // this.repeatTimes = playTimes;
    };
    XTweenerPosition.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        this.vec2Tmp.x = this.startValue.x + (this.endValue.x - this.startValue.x) * this.animationProgress;
        this.vec2Tmp.y = this.startValue.y + (this.endValue.y - this.startValue.y) * this.animationProgress;
        this.target.position = this.vec2Tmp;
        this.CheckFinish();
    };
    XTweenerPosition.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = this.target.position;
        }
    };
    XTweenerPosition.prototype.GetTypeMark = function () {
        return "XTweenerPosition";
    };
    return XTweenerPosition;
}(XTweener_1.default));
exports.default = XTweenerPosition;

cc._RF.pop();