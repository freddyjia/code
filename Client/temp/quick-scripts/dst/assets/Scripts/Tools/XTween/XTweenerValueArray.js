
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerValueArray.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJWYWx1ZUFycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUN2QyxnREFBbUQ7QUFFbkQ7SUFBZ0Qsc0NBQVE7SUFBeEQ7O0lBbUVBLENBQUM7SUExRFUsaUNBQUksR0FBWCxVQUNJLE1BQWMsRUFDZCxtQkFBK0MsRUFDL0MsVUFBd0IsRUFDeEIsUUFBc0IsRUFDdEIsUUFBZSxFQUNmLFNBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLElBQXlCO1FBQXpCLHFCQUFBLEVBQUEsT0FBSywyQkFBYyxDQUFDLEtBQUs7UUFHekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsU0FBUztRQUVuQixpQkFBTSxNQUFNLFlBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTztTQUNWO1FBQ0QsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN0QztZQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUM1RztRQUVELElBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksRUFDbkM7WUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUVJLE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDTCx5QkFBQztBQUFELENBbkVBLEFBbUVDLENBbkUrQyxrQkFBUSxHQW1FdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWFR3ZWVuZXIgZnJvbSBcIi4vQmFzZS9YVHdlZW5lclwiO1xuaW1wb3J0IHsgWFR3ZWVuQ3VydlR5cGUgfSBmcm9tIFwiLi9CYXNlL1hUd2VlbkN1cnZcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFR3ZWVuZXJWYWx1ZUFycmF5IGV4dGVuZHMgWFR3ZWVuZXIgXG57XG4gICAgcHJpdmF0ZSBzdGFydFZhbHVlOkFycmF5PG51bWJlcj47XG4gICAgcHJpdmF0ZSBlbmRWYWx1ZTpBcnJheTxudW1iZXI+O1xuXG4gICAgcHJpdmF0ZSB0bXBWYWx1ZTpBcnJheTxudW1iZXI+O1xuXG4gICAgcHJpdmF0ZSB2YXVsZUNoYW5nZUNhbGxiYWNrOih2YWx1ZTpBcnJheTxudW1iZXI+KT0+dm9pZDtcblxuICAgIHB1YmxpYyBJbml0KFxuICAgICAgICB0YXJnZXQ6Y2MuTm9kZSxcbiAgICAgICAgdmF1bGVDaGFuZ2VDYWxsYmFjazoodmFsdWU6QXJyYXk8bnVtYmVyPik9PnZvaWQsXG4gICAgICAgIHN0YXJ0VmFsdWU6QXJyYXk8bnVtYmVyPixcbiAgICAgICAgZW5kVmFsdWU6QXJyYXk8bnVtYmVyPixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgIClcbiAgICB7XG4gICAgICAgIHRoaXMuU2V0VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRoaXMudmF1bGVDaGFuZ2VDYWxsYmFjayA9IHZhdWxlQ2hhbmdlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWU7XG4gICAgICAgIHRoaXMuZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAvLyB0aGlzLmN1cnZUeXBlID0gY3VydjtcbiAgICAgICAgLy8gdGhpcy5waW5nUG9uZyA9IHBpbmdQb25nO1xuICAgICAgICAvLyB0aGlzLnJlcGVhdFRpbWVzID0gcGxheVRpbWVzO1xuICAgICAgICB0aGlzLkluaXRUd2VlbmVyRGF0YShwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG5cbiAgICAgICAgdGhpcy50bXBWYWx1ZSA9IFt0aGlzLmVuZFZhbHVlLmxlbmd0aF07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlKGRlbHRhVGltZSlcbiAgICB7XG4gICAgICAgIHN1cGVyLlVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBpZih0aGlzLmJlUmVwbGFjZWQgPT0gdHJ1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5DaGVja0ZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5lbmRWYWx1ZS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRtcFZhbHVlW2ldID0gdGhpcy5zdGFydFZhbHVlW2ldICsgKHRoaXMuZW5kVmFsdWVbaV0gLSB0aGlzLnN0YXJ0VmFsdWVbaV0pICogdGhpcy5hbmltYXRpb25Qcm9ncmVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudmF1bGVDaGFuZ2VDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnZhdWxlQ2hhbmdlQ2FsbGJhY2sodGhpcy50bXBWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkNoZWNrRmluaXNoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uUGxheSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN0YXJ0VmFsdWUgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gW3RoaXMuZW5kVmFsdWUubGVuZ3RoXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRUeXBlTWFyaygpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJYVHdlZW5lclZhbHVlXCI7XG4gICAgfVxufVxuIl19