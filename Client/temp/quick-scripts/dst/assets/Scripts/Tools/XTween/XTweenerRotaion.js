
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerRotaion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJSb3RhaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QyxnREFBbUQ7QUFHbkQ7SUFBNkMsbUNBQVE7SUFBckQ7O0lBa0RBLENBQUM7SUE3Q1UsOEJBQUksR0FBWCxVQUNJLE1BQWMsRUFDZCxVQUFpQixFQUNqQixRQUFlLEVBQ2YsUUFBZSxFQUNmLFNBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLElBQXlCO1FBQXpCLHFCQUFBLEVBQUEsT0FBSywyQkFBYyxDQUFDLEtBQUs7UUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxTQUFTO1FBRW5CLGlCQUFNLE1BQU0sWUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUMxQjtZQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBRXBHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUVJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRDRDLGtCQUFRLEdBa0RwRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyUm90YWlvbiBleHRlbmRzIFhUd2VlbmVyIFxue1xuICAgIHByaXZhdGUgc3RhcnRWYWx1ZTpudW1iZXI7XG4gICAgcHJpdmF0ZSBlbmRWYWx1ZTpudW1iZXI7XG5cbiAgICBwdWJsaWMgSW5pdChcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6bnVtYmVyLFxuICAgICAgICBlbmRWYWx1ZTpudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOm51bWJlcixcbiAgICAgICAgcGxheVRpbWVzOm51bWJlcixcbiAgICAgICAgcGluZ1Bvbmc6Ym9vbGVhbixcbiAgICAgICAgY3Vydj1YVHdlZW5DdXJ2VHlwZS5MaW5lcixcbiAgICApXG4gICAge1xuICAgICAgICB0aGlzLlNldFRhcmdldCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlO1xuICAgICAgICB0aGlzLmVuZFZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgLy8gdGhpcy5jdXJ2VHlwZSA9IGN1cnY7XG4gICAgICAgIC8vIHRoaXMucGluZ1BvbmcgPSBwaW5nUG9uZztcbiAgICAgICAgLy8gdGhpcy5yZXBlYXRUaW1lcyA9IHBsYXlUaW1lcztcbiAgICAgICAgdGhpcy5Jbml0VHdlZW5lckRhdGEocGxheVRpbWVzLHBpbmdQb25nLGN1cnYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUoZGVsdGFUaW1lKVxuICAgIHtcbiAgICAgICAgc3VwZXIuVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGlmKHRoaXMuYmVSZXBsYWNlZCA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQucm90YXRpb24gPSB0aGlzLnN0YXJ0VmFsdWUgKyAodGhpcy5lbmRWYWx1ZSAtIHRoaXMuc3RhcnRWYWx1ZSkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzO1xuXG4gICAgICAgIHRoaXMuQ2hlY2tGaW5pc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgT25QbGF5KClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc3RhcnRWYWx1ZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0aGlzLnRhcmdldC5yb3RhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRUeXBlTWFyaygpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJYVHdlZW5lclJvdGFpb25cIjtcbiAgICB9XG59XG4iXX0=