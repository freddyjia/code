"use strict";
cc._RF.push(module, '31697jcyR1P2YOh+P/7x5R2', 'XTweenerWorldPosition');
// Scripts/Tools/XTween/XTweenerWorldPosition.ts

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
var XTweenerWorldPosition = /** @class */ (function (_super) {
    __extends(XTweenerWorldPosition, _super);
    function XTweenerWorldPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vec2Tmp = cc.Vec2.ZERO;
        return _this;
    }
    XTweenerWorldPosition.prototype.Init = function (target, endPos, offset, duration, playTimes, pingPong, curv) {
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        this.SetTarget(target);
        if (endPos instanceof cc.Vec2) {
            this.endPos = endPos;
        }
        else {
            this.endPos = endPos.convertToWorldSpaceAR(cc.Vec2.ZERO);
        }
        this.endPos.x += offset.x;
        this.endPos.y += offset.y;
        this.startPos = target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.duration = duration;
        this.InitTweenerData(playTimes, pingPong, curv);
    };
    XTweenerWorldPosition.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        this.vec2Tmp.x = this.startPos.x + (this.endPos.x - this.startPos.x) * this.animationProgress;
        this.vec2Tmp.y = this.startPos.y + (this.endPos.y - this.startPos.y) * this.animationProgress;
        var localPos = this.target.parent.convertToNodeSpaceAR(this.vec2Tmp);
        this.target.position = localPos;
        // this.target.position = this.vec2Tmp;
        this.CheckFinish();
    };
    XTweenerWorldPosition.prototype.OnPlay = function () {
        // if(this.startValue == null)
        // {
        //     this.startValue = this.target.position;
        // }
    };
    XTweenerWorldPosition.prototype.GetTypeMark = function () {
        return "XTweenerWorldPosition";
    };
    return XTweenerWorldPosition;
}(XTweener_1.default));
exports.default = XTweenerWorldPosition;

cc._RF.pop();