
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerPosition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJQb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsZ0RBQW1EO0FBR25EO0lBQThDLG9DQUFRO0lBQXREO1FBQUEscUVBdURDO1FBbERXLGFBQU8sR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUFrRDNDLENBQUM7SUFoRFUsK0JBQUksR0FBWCxVQUNJLE1BQWMsRUFDZCxVQUFrQixFQUNsQixRQUFnQixFQUNoQixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBeUI7UUFBekIscUJBQUEsRUFBQSxPQUFLLDJCQUFjLENBQUMsS0FBSztRQUl6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5Qyx3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLGdDQUFnQztJQUNwQyxDQUFDO0lBRU0saUNBQU0sR0FBYixVQUFjLFNBQVM7UUFFbkIsaUJBQU0sTUFBTSxZQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUVwRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUVJLE9BQU8sa0JBQWtCLENBQUM7SUFDOUIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0F2REEsQUF1REMsQ0F2RDZDLGtCQUFRLEdBdURyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyUG9zaXRpb24gZXh0ZW5kcyBYVHdlZW5lciBcbntcbiAgICBwcml2YXRlIHN0YXJ0VmFsdWU6Y2MuVmVjMjtcbiAgICBwcml2YXRlIGVuZFZhbHVlOmNjLlZlYzI7XG5cbiAgICBwcml2YXRlIHZlYzJUbXA6Y2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcblxuICAgIHB1YmxpYyBJbml0KFxuICAgICAgICB0YXJnZXQ6Y2MuTm9kZSxcbiAgICAgICAgc3RhcnRWYWx1ZTpjYy5WZWMyLFxuICAgICAgICBlbmRWYWx1ZTpjYy5WZWMyLFxuICAgICAgICBkdXJhdGlvbjpudW1iZXIsXG4gICAgICAgIHBsYXlUaW1lczpudW1iZXIsXG4gICAgICAgIHBpbmdQb25nOmJvb2xlYW4sXG4gICAgICAgIGN1cnY9WFR3ZWVuQ3VydlR5cGUuTGluZXIsXG4gICAgKVxuICAgIHtcblxuICAgICAgICB0aGlzLlNldFRhcmdldCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlO1xuICAgICAgICB0aGlzLmVuZFZhbHVlID0gZW5kVmFsdWU7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5Jbml0VHdlZW5lckRhdGEocGxheVRpbWVzLHBpbmdQb25nLGN1cnYpO1xuICAgICAgICAvLyB0aGlzLmN1cnZUeXBlID0gY3VydjtcbiAgICAgICAgLy8gdGhpcy5waW5nUG9uZyA9IHBpbmdQb25nO1xuICAgICAgICAvLyB0aGlzLnJlcGVhdFRpbWVzID0gcGxheVRpbWVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUoZGVsdGFUaW1lKVxuICAgIHtcbiAgICAgICAgc3VwZXIuVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGlmKHRoaXMuYmVSZXBsYWNlZCA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWMyVG1wLnggPSB0aGlzLnN0YXJ0VmFsdWUueCArICh0aGlzLmVuZFZhbHVlLnggLSB0aGlzLnN0YXJ0VmFsdWUueCkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzO1xuICAgICAgICB0aGlzLnZlYzJUbXAueSA9IHRoaXMuc3RhcnRWYWx1ZS55ICsgKHRoaXMuZW5kVmFsdWUueSAtIHRoaXMuc3RhcnRWYWx1ZS55KSAqIHRoaXMuYW5pbWF0aW9uUHJvZ3Jlc3M7XG5cbiAgICAgICAgdGhpcy50YXJnZXQucG9zaXRpb24gPSB0aGlzLnZlYzJUbXA7XG4gICAgICAgIHRoaXMuQ2hlY2tGaW5pc2goKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgT25QbGF5KClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc3RhcnRWYWx1ZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB0aGlzLnRhcmdldC5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRUeXBlTWFyaygpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJYVHdlZW5lclBvc2l0aW9uXCI7XG4gICAgfVxufVxuIl19