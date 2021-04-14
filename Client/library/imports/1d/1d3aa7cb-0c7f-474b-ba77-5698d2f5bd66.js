"use strict";
cc._RF.push(module, '1d3aafLDH9HS7p3VpjS9b1m', 'XTweenerRotaion');
// Scripts/Tools/XTween/XTweenerRotaion.ts

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
var XTweenerRotaion = /** @class */ (function (_super) {
    __extends(XTweenerRotaion, _super);
    function XTweenerRotaion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XTweenerRotaion.prototype.Init = function (target, startValue, endValue, duration, playTimes, pingPong, curv) {
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
    XTweenerRotaion.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        this.target.rotation = this.startValue + (this.endValue - this.startValue) * this.animationProgress;
        this.CheckFinish();
    };
    XTweenerRotaion.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = this.target.rotation;
        }
    };
    XTweenerRotaion.prototype.GetTypeMark = function () {
        return "XTweenerRotaion";
    };
    return XTweenerRotaion;
}(XTweener_1.default));
exports.default = XTweenerRotaion;

cc._RF.pop();