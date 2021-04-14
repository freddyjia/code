
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerWorldPosition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJXb3JsZFBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QyxnREFBbUQ7QUFHbkQ7SUFBbUQseUNBQVE7SUFBM0Q7UUFBQSxxRUFrRUM7UUE3RFcsYUFBTyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztJQTZEM0MsQ0FBQztJQTNEVSxvQ0FBSSxHQUFYLFVBQ0ksTUFBYyxFQUNkLE1BQXNCLEVBQ3RCLE1BQWMsRUFDZCxRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBeUI7UUFBekIscUJBQUEsRUFBQSxPQUFLLDJCQUFjLENBQUMsS0FBSztRQUd6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZCLElBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQzVCO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDeEI7YUFFRDtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLHNDQUFNLEdBQWIsVUFBYyxTQUFTO1FBRW5CLGlCQUFNLE1BQU0sWUFBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUMxQjtZQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzlGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFOUYsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNoQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBRUksOEJBQThCO1FBQzlCLElBQUk7UUFDSiw4Q0FBOEM7UUFDOUMsSUFBSTtJQUNSLENBQUM7SUFFTSwyQ0FBVyxHQUFsQjtRQUVJLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsQ0FsRWtELGtCQUFRLEdBa0UxRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuQ3VydlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyV29ybGRQb3NpdGlvbiBleHRlbmRzIFhUd2VlbmVyIFxue1xuICAgIC8vIHByaXZhdGUgZW5kUG9zTm9kZTpjYy5Ob2RlO1xuICAgIHByaXZhdGUgZW5kUG9zOmNjLlZlYzI7XG4gICAgcHJpdmF0ZSBzdGFydFBvczpjYy5WZWMyO1xuICAgIHByaXZhdGUgdmVjMlRtcDpjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xuXG4gICAgcHVibGljIEluaXQoXG4gICAgICAgIHRhcmdldDpjYy5Ob2RlLFxuICAgICAgICBlbmRQb3M6Y2MuTm9kZXxjYy5WZWMyLFxuICAgICAgICBvZmZzZXQ6Y2MuVmVjMixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuU2V0VGFyZ2V0KHRhcmdldCk7XG5cbiAgICAgICAgaWYoZW5kUG9zIGluc3RhbmNlb2YgY2MuVmVjMilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmVuZFBvcyA9IGVuZFBvcy5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5lbmRQb3MueCArPSBvZmZzZXQueDtcbiAgICAgICAgdGhpcy5lbmRQb3MueSArPSBvZmZzZXQueTtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG5cbiAgICAgICAgdGhpcy5Jbml0VHdlZW5lckRhdGEocGxheVRpbWVzLHBpbmdQb25nLGN1cnYpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGUoZGVsdGFUaW1lKVxuICAgIHtcbiAgICAgICAgc3VwZXIuVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgIGlmKHRoaXMuYmVSZXBsYWNlZCA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWMyVG1wLnggPSB0aGlzLnN0YXJ0UG9zLnggKyAodGhpcy5lbmRQb3MueCAtIHRoaXMuc3RhcnRQb3MueCkgKiB0aGlzLmFuaW1hdGlvblByb2dyZXNzO1xuICAgICAgICB0aGlzLnZlYzJUbXAueSA9IHRoaXMuc3RhcnRQb3MueSArICh0aGlzLmVuZFBvcy55IC0gdGhpcy5zdGFydFBvcy55KSAqIHRoaXMuYW5pbWF0aW9uUHJvZ3Jlc3M7XG5cbiAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy50YXJnZXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMudmVjMlRtcCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnBvc2l0aW9uID0gbG9jYWxQb3M7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0LnBvc2l0aW9uID0gdGhpcy52ZWMyVG1wO1xuICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uUGxheSgpXG4gICAge1xuICAgICAgICAvLyBpZih0aGlzLnN0YXJ0VmFsdWUgPT0gbnVsbClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy50YXJnZXQucG9zaXRpb247XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0VHlwZU1hcmsoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFwiWFR3ZWVuZXJXb3JsZFBvc2l0aW9uXCI7XG4gICAgfVxufVxuIl19