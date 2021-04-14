
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '762c5kLGJpJMKFVl2UGYsY0', 'XTweenerValue');
// Scripts/Tools/XTween/XTweenerValue.ts

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
var XTweenerValue = /** @class */ (function (_super) {
    __extends(XTweenerValue, _super);
    function XTweenerValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XTweenerValue.prototype.Init = function (target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv) {
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
    };
    XTweenerValue.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.beReplaced == true) {
            this.CheckFinish();
            return;
        }
        var value = this.startValue + (this.endValue - this.startValue) * this.animationProgress;
        if (this.vauleChangeCallback != null) {
            this.vauleChangeCallback(value);
        }
        this.CheckFinish();
    };
    XTweenerValue.prototype.OnPlay = function () {
        if (this.startValue == null) {
            this.startValue = 0;
        }
    };
    XTweenerValue.prototype.GetTypeMark = function () {
        return "XTweenerValue";
    };
    return XTweenerValue;
}(XTweener_1.default));
exports.default = XTweenerValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsZ0RBQW1EO0FBRW5EO0lBQTJDLGlDQUFRO0lBQW5EOztJQXlEQSxDQUFDO0lBbkRVLDRCQUFJLEdBQVgsVUFDSSxNQUFjLEVBQ2QsbUJBQXdDLEVBQ3hDLFVBQWlCLEVBQ2pCLFFBQWUsRUFDZixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBeUI7UUFBekIscUJBQUEsRUFBQSxPQUFLLDJCQUFjLENBQUMsS0FBSztRQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxTQUFTO1FBRW5CLGlCQUFNLE1BQU0sWUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUMxQjtZQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pGLElBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksRUFDbkM7WUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFFSSxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUMxQjtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBRUksT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F6REEsQUF5REMsQ0F6RDBDLGtCQUFRLEdBeURsRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYVHdlZW5lclZhbHVlIGV4dGVuZHMgWFR3ZWVuZXIgXG57XG4gICAgcHJpdmF0ZSBzdGFydFZhbHVlOm51bWJlcjtcbiAgICBwcml2YXRlIGVuZFZhbHVlOm51bWJlcjtcbiAgICBwcml2YXRlIHZhdWxlQ2hhbmdlQ2FsbGJhY2s6KHZhbHVlOm51bWJlcik9PnZvaWQ7XG5cbiAgICBwdWJsaWMgSW5pdChcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHZhdWxlQ2hhbmdlQ2FsbGJhY2s6KHZhbHVlOm51bWJlcik9PnZvaWQsXG4gICAgICAgIHN0YXJ0VmFsdWU6bnVtYmVyLFxuICAgICAgICBlbmRWYWx1ZTpudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOm51bWJlcixcbiAgICAgICAgcGxheVRpbWVzOm51bWJlcixcbiAgICAgICAgcGluZ1Bvbmc6Ym9vbGVhbixcbiAgICAgICAgY3Vydj1YVHdlZW5DdXJ2VHlwZS5MaW5lcixcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLlNldFRhcmdldCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnZhdWxlQ2hhbmdlQ2FsbGJhY2sgPSB2YXVsZUNoYW5nZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlO1xuICAgICAgICB0aGlzLmVuZFZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgLy8gdGhpcy5jdXJ2VHlwZSA9IGN1cnY7XG4gICAgICAgIC8vIHRoaXMucGluZ1BvbmcgPSBwaW5nUG9uZztcbiAgICAgICAgLy8gdGhpcy5yZXBlYXRUaW1lcyA9IHBsYXlUaW1lcztcbiAgICAgICAgdGhpcy5Jbml0VHdlZW5lckRhdGEocGxheVRpbWVzLHBpbmdQb25nLGN1cnYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUoZGVsdGFUaW1lKVxuICAgIHtcbiAgICAgICAgc3VwZXIuVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGlmKHRoaXMuYmVSZXBsYWNlZCA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5zdGFydFZhbHVlICsgKHRoaXMuZW5kVmFsdWUgLSB0aGlzLnN0YXJ0VmFsdWUpICogdGhpcy5hbmltYXRpb25Qcm9ncmVzcztcbiAgICAgICAgaWYodGhpcy52YXVsZUNoYW5nZUNhbGxiYWNrICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudmF1bGVDaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uUGxheSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN0YXJ0VmFsdWUgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRUeXBlTWFyaygpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJYVHdlZW5lclZhbHVlXCI7XG4gICAgfVxufVxuIl19