
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJTY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsZ0RBQW1EO0FBR25EO0lBQTJDLGlDQUFRO0lBQW5EOztJQXFEQSxDQUFDO0lBaERVLDRCQUFJLEdBQVgsVUFDSSxNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsUUFBZ0IsRUFDaEIsUUFBZSxFQUNmLFNBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLElBQXlCO1FBQXpCLHFCQUFBLEVBQUEsT0FBSywyQkFBYyxDQUFDLEtBQUs7UUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxTQUFTO1FBRW5CLGlCQUFNLE1BQU0sWUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUMxQjtZQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3hHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFeEcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBRUksT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FyREEsQUFxREMsQ0FyRDBDLGtCQUFRLEdBcURsRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyU2NhbGUgZXh0ZW5kcyBYVHdlZW5lciBcbntcbiAgICBwcml2YXRlIHN0YXJ0VmFsdWU6Y2MuVmVjMjtcbiAgICBwcml2YXRlIGVuZFZhbHVlOmNjLlZlYzI7XG5cbiAgICBwdWJsaWMgSW5pdChcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZW5kVmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuU2V0VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAvLyB0aGlzLmN1cnZUeXBlID0gY3VydjtcbiAgICAgICAgLy8gdGhpcy5waW5nUG9uZyA9IHBpbmdQb25nO1xuICAgICAgICAvLyB0aGlzLnJlcGVhdFRpbWVzID0gcGxheVRpbWVzO1xuICAgICAgICB0aGlzLkluaXRUd2VlbmVyRGF0YShwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZShkZWx0YVRpbWUpXG4gICAge1xuICAgICAgICBzdXBlci5VcGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgaWYodGhpcy5iZVJlcGxhY2VkID09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQ2hlY2tGaW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldC5zY2FsZVggPSB0aGlzLnN0YXJ0VmFsdWUueCArICh0aGlzLmVuZFZhbHVlLnggLSB0aGlzLnN0YXJ0VmFsdWUueCkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzO1xuICAgICAgICB0aGlzLnRhcmdldC5zY2FsZVkgPSB0aGlzLnN0YXJ0VmFsdWUueSArICh0aGlzLmVuZFZhbHVlLnkgLSB0aGlzLnN0YXJ0VmFsdWUueSkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzO1xuXG4gICAgICAgIHRoaXMuQ2hlY2tGaW5pc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgT25QbGF5KClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc3RhcnRWYWx1ZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBjYy5WZWMyLk9ORTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWYWx1ZS54ID0gdGhpcy50YXJnZXQuc2NhbGVYO1xuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlLnkgPSB0aGlzLnRhcmdldC5zY2FsZVk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0VHlwZU1hcmsoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFwiWFR3ZWVuZXJTY2FsZVwiO1xuICAgIH1cbn1cbiJdfQ==