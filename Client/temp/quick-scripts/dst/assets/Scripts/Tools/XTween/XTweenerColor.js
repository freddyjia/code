
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFDdkMsZ0RBQW1EO0FBR25EO0lBQTJDLGlDQUFRO0lBQW5EO1FBQUEscUVBd0RDO1FBbkRXLGNBQVEsR0FBWSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFtRC9DLENBQUM7SUFqRFUsNEJBQUksR0FBWCxVQUNJLE1BQWMsRUFDZCxVQUF3QixFQUN4QixRQUFzQixFQUN0QixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBeUI7UUFBekIscUJBQUEsRUFBQSxPQUFLLDJCQUFjLENBQUMsS0FBSztRQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFjLFNBQVM7UUFFbkIsaUJBQU0sTUFBTSxZQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUxRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBRUksT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RDBDLGtCQUFRLEdBd0RsRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyQ29sb3IgZXh0ZW5kcyBYVHdlZW5lciBcbntcbiAgICBwcml2YXRlIHN0YXJ0VmFsdWU6QXJyYXk8bnVtYmVyPjtcbiAgICBwcml2YXRlIGVuZFZhbHVlOkFycmF5PG51bWJlcj47XG5cbiAgICBwcml2YXRlIGNvbG9yVG1wOmNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKCk7XG5cbiAgICBwdWJsaWMgSW5pdChcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6QXJyYXk8bnVtYmVyPixcbiAgICAgICAgZW5kVmFsdWU6QXJyYXk8bnVtYmVyPixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuU2V0VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAvLyB0aGlzLmN1cnZUeXBlID0gY3VydjtcbiAgICAgICAgLy8gdGhpcy5waW5nUG9uZyA9IHBpbmdQb25nO1xuICAgICAgICAvLyB0aGlzLnJlcGVhdFRpbWVzID0gcGxheVRpbWVzO1xuICAgICAgICB0aGlzLkluaXRUd2VlbmVyRGF0YShwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZShkZWx0YVRpbWUpXG4gICAge1xuICAgICAgICBzdXBlci5VcGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgaWYodGhpcy5iZVJlcGxhY2VkID09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQ2hlY2tGaW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yVG1wLnNldFIodGhpcy5zdGFydFZhbHVlWzBdICsgKHRoaXMuZW5kVmFsdWVbMF0gLSB0aGlzLnN0YXJ0VmFsdWVbMF0pICogdGhpcy5hbmltYXRpb25Qcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuY29sb3JUbXAuc2V0Ryh0aGlzLnN0YXJ0VmFsdWVbMV0gKyAodGhpcy5lbmRWYWx1ZVsxXSAtIHRoaXMuc3RhcnRWYWx1ZVsxXSkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5jb2xvclRtcC5zZXRCKHRoaXMuc3RhcnRWYWx1ZVsyXSArICh0aGlzLmVuZFZhbHVlWzJdIC0gdGhpcy5zdGFydFZhbHVlWzJdKSAqIHRoaXMuYW5pbWF0aW9uUHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLmNvbG9yVG1wLnNldEEodGhpcy5zdGFydFZhbHVlWzNdICsgKHRoaXMuZW5kVmFsdWVbM10gLSB0aGlzLnN0YXJ0VmFsdWVbM10pICogdGhpcy5hbmltYXRpb25Qcm9ncmVzcyk7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuY29sb3IgPSB0aGlzLmNvbG9yVG1wO1xuICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uUGxheSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN0YXJ0VmFsdWUgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gWzI1NSwyNTUsMjU1LDI1NV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0VHlwZU1hcmsoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFwiWFR3ZWVuZXJDb2xvclwiO1xuICAgIH1cbn1cbiJdfQ==