
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTweenerAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56e31n9Ng9OI5FIb8EkS3lR', 'XTweenerAction');
// Scripts/Tools/XTween/XTweenerAction.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenGlobal_1 = require("./Base/XTweenGlobal");
var XTweenerAction = /** @class */ (function () {
    function XTweenerAction() {
        this.delay = 0;
        this.state = XTweenGlobal_1.XTweenerState.BeforePlay;
        this.controlByParent = false;
        this.speed = 1;
        this.shouldCallback = true;
        this.currentTime = 0;
    }
    XTweenerAction.prototype.SetTweenerData = function (data) {
        this.data = data;
    };
    XTweenerAction.prototype.GetTweenerData = function () {
        return this.data;
    };
    XTweenerAction.prototype.SetDelay = function (delay) {
        this.delay = delay;
    };
    XTweenerAction.prototype.GetDelay = function () {
        return this.delay;
    };
    XTweenerAction.prototype.Play = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.BeforePlay) {
            if (this.startCallback != null) {
                this.startCallback();
            }
        }
        this.state = XTweenGlobal_1.XTweenerState.Playing;
    };
    XTweenerAction.prototype.Finish = function (shouldCallback) {
        if (shouldCallback === void 0) { shouldCallback = true; }
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.shouldCallback = shouldCallback;
    };
    XTweenerAction.prototype.Pause = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Playing) {
            this.state = XTweenGlobal_1.XTweenerState.Pause;
        }
    };
    XTweenerAction.prototype.Resume = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Pause) {
            this.state = XTweenGlobal_1.XTweenerState.Playing;
        }
    };
    XTweenerAction.prototype.SetSpeed = function (speed) {
        this.speed = speed;
    };
    XTweenerAction.prototype.SetStartCallback = function (startCallback) {
        this.startCallback = startCallback;
    };
    XTweenerAction.prototype.SetFinishCallback = function (finishCallback) {
        this.finishCallback = finishCallback;
    };
    XTweenerAction.prototype.GetState = function () {
        return this.state;
    };
    XTweenerAction.prototype.SetControlByParent = function () {
        this.controlByParent = true;
    };
    XTweenerAction.prototype.Update = function (deltaTime) {
        this.currentTime += deltaTime * this.speed;
        if (this.currentTime >= this.delay) {
            if (this.action != null) {
                this.action();
            }
            if (this.finishCallback != null && this.shouldCallback == true) {
                this.finishCallback();
            }
            this.state = XTweenGlobal_1.XTweenerState.End;
        }
    };
    XTweenerAction.prototype.GetTypeMark = function () {
        return "XTweenerAction";
    };
    XTweenerAction.prototype.GetControlByParent = function () {
        return this.controlByParent;
    };
    XTweenerAction.prototype.BeReplaced = function () {
        //do nothing
    };
    XTweenerAction.prototype.OnEnable = function () {
        //do nothing
    };
    XTweenerAction.prototype.OnDisable = function () {
        //终止整个tween
        this.state = XTweenGlobal_1.XTweenerState.End;
    };
    XTweenerAction.prototype.OnDestroy = function () {
        //终止整个tween
        this.state = XTweenGlobal_1.XTweenerState.End;
    };
    XTweenerAction.prototype.SetAction = function (action) {
        this.action = action;
    };
    return XTweenerAction;
}());
exports.default = XTweenerAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuZXJBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvREFBb0Q7QUFFcEQ7SUFBQTtRQUdZLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFpQiw0QkFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUdoQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsbUJBQWMsR0FBVyxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7SUF3SG5DLENBQUM7SUFySFUsdUNBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUV0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00sdUNBQWMsR0FBckI7UUFFSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNNLGlDQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00saUNBQVEsR0FBZjtRQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sNkJBQUksR0FBWDtRQUVJLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSw0QkFBYSxDQUFDLFVBQVUsRUFDekM7WUFDSSxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUM3QjtnQkFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEI7U0FDSjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQWEsQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxjQUEyQjtRQUEzQiwrQkFBQSxFQUFBLHFCQUEyQjtRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsR0FBRyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFDTSw4QkFBSyxHQUFaO1FBRUksSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLDRCQUFhLENBQUMsT0FBTyxFQUN0QztZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsNEJBQWEsQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBQ00sK0JBQU0sR0FBYjtRQUVJLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSw0QkFBYSxDQUFDLEtBQUssRUFDcEM7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsT0FBTyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUNNLGlDQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00seUNBQWdCLEdBQXZCLFVBQXdCLGFBQXNCO1FBRTFDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwwQ0FBaUIsR0FBeEIsVUFBeUIsY0FBdUI7UUFFNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUNNLGlDQUFRLEdBQWY7UUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNNLDJDQUFrQixHQUF6QjtRQUVJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFDTSwrQkFBTSxHQUFiLFVBQWMsU0FBZ0I7UUFFMUIsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssRUFDakM7WUFDSSxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUN0QjtnQkFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakI7WUFDRCxJQUFHLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUM3RDtnQkFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsR0FBRyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUNNLG9DQUFXLEdBQWxCO1FBRUksT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBQ00sMkNBQWtCLEdBQXpCO1FBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxtQ0FBVSxHQUFqQjtRQUVJLFlBQVk7SUFDaEIsQ0FBQztJQUNNLGlDQUFRLEdBQWY7UUFFSSxZQUFZO0lBQ2hCLENBQUM7SUFDTSxrQ0FBUyxHQUFoQjtRQUVJLFdBQVc7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFDTSxrQ0FBUyxHQUFoQjtRQUVJLFdBQVc7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixNQUFlO1FBRTVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxxQkFBQztBQUFELENBbElBLEFBa0lDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWFR3ZWVuZXJJRiBmcm9tIFwiLi9CYXNlL1hUd2VlbmVySUZcIjtcbmltcG9ydCB7IFhUd2VlbmVyU3RhdGUgfSBmcm9tIFwiLi9CYXNlL1hUd2Vlbkdsb2JhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYVHdlZW5lckFjdGlvbiBpbXBsZW1lbnRzIFhUd2VlbmVySUYgXG57XG4gICAgcHJpdmF0ZSBkYXRhOmFueTtcbiAgICBwcml2YXRlIGRlbGF5Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdGF0ZTpYVHdlZW5lclN0YXRlID0gWFR3ZWVuZXJTdGF0ZS5CZWZvcmVQbGF5O1xuICAgIHByaXZhdGUgY29udHJvbEJ5UGFyZW50OmJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHN0YXJ0Q2FsbGJhY2s6KCk9PnZvaWQ7XG4gICAgcHJpdmF0ZSBmaW5pc2hDYWxsYmFjazooKT0+dm9pZDtcbiAgICBwcml2YXRlIHNwZWVkID0gMTtcbiAgICBwcml2YXRlIHNob3VsZENhbGxiYWNrOmJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgY3VycmVudFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGFjdGlvbjooKT0+dm9pZDtcblxuICAgIHB1YmxpYyBTZXRUd2VlbmVyRGF0YShkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcHVibGljIEdldFR3ZWVuZXJEYXRhKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBTZXREZWxheShkZWxheTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXREZWxheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxheTtcbiAgICB9XG4gICAgcHVibGljIFBsYXkoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLkJlZm9yZVBsYXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLlBsYXlpbmc7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBGaW5pc2goc2hvdWxkQ2FsbGJhY2s6Ym9vbGVhbj10cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICB0aGlzLnNob3VsZENhbGxiYWNrID0gc2hvdWxkQ2FsbGJhY2s7XG4gICAgfVxuICAgIHB1YmxpYyBQYXVzZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN0YXRlID09IFhUd2VlbmVyU3RhdGUuUGxheWluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuUGF1c2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFJlc3VtZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLnN0YXRlID09IFhUd2VlbmVyU3RhdGUuUGF1c2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLlBsYXlpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFNldFNwZWVkKHNwZWVkOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG4gICAgcHVibGljIFNldFN0YXJ0Q2FsbGJhY2soc3RhcnRDYWxsYmFjazooKT0+dm9pZClcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhcnRDYWxsYmFjayA9IHN0YXJ0Q2FsbGJhY2s7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRGaW5pc2hDYWxsYmFjayhmaW5pc2hDYWxsYmFjazooKT0+dm9pZClcbiAgICB7XG4gICAgICAgIHRoaXMuZmluaXNoQ2FsbGJhY2sgPSBmaW5pc2hDYWxsYmFjaztcbiAgICB9XG4gICAgcHVibGljIEdldFN0YXRlKCk6WFR3ZWVuZXJTdGF0ZVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRDb250cm9sQnlQYXJlbnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250cm9sQnlQYXJlbnQgPSB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgVXBkYXRlKGRlbHRhVGltZTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhVGltZSAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy5kZWxheSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5hY3Rpb24gIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5maW5pc2hDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuc2hvdWxkQ2FsbGJhY2sgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLkVuZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgR2V0VHlwZU1hcmsoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIHJldHVybiBcIlhUd2VlbmVyQWN0aW9uXCI7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRDb250cm9sQnlQYXJlbnQoKTpib29sZWFuXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sQnlQYXJlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIEJlUmVwbGFjZWQoKVxuICAgIHtcbiAgICAgICAgLy9kbyBub3RoaW5nXG4gICAgfVxuICAgIHB1YmxpYyBPbkVuYWJsZSgpXG4gICAge1xuICAgICAgICAvL2RvIG5vdGhpbmdcbiAgICB9XG4gICAgcHVibGljIE9uRGlzYWJsZSgpXG4gICAge1xuICAgICAgICAvL+e7iOatouaVtOS4qnR3ZWVuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLkVuZDtcbiAgICB9XG4gICAgcHVibGljIE9uRGVzdHJveSgpXG4gICAge1xuICAgICAgICAvL+e7iOatouaVtOS4qnR3ZWVuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLkVuZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0QWN0aW9uKGFjdGlvbjooKT0+dm9pZClcbiAgICB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIH1cblxufVxuIl19