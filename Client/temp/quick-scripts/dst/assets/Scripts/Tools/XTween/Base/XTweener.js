
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/Base/XTweener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6651egCMMpPV5ycwMXKqoCC', 'XTweener');
// Scripts/Tools/XTween/Base/XTweener.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenCurv_1 = require("./XTweenCurv");
var XTweenGlobal_1 = require("./XTweenGlobal");
var XTweenUpdater_1 = require("./XTweenUpdater");
var XTweenObserver_1 = require("./XTweenObserver");
var XTweener = /** @class */ (function () {
    function XTweener() {
        this.data = null;
        this.state = XTweenGlobal_1.XTweenerState.BeforePlay;
        this.delay = 0;
        this.startCallback = null;
        this.finishCallback = null;
        this.controlByParent = false;
        this.speed = 1;
        this.shouldCallback = true;
        this.beReplaced = false;
        this.target = null;
        this.observer = null;
        this.gameObjectDisable = false;
        this.duration = 0;
        this.shouldFinishCallbackWhenDisable = false;
        this.currentTime = 0;
        this.timeProgress = 0;
        this.pingPong = false;
        this.currentRepeatTimes = 0;
        this.repeatTimes = 1;
        this.animationProgress = 0;
        this.curvType = XTweenCurv_1.XTweenCurvType.Liner;
        this.tCustomCurv = null;
        this.shouldNotFinishWhenDisable = false;
    }
    XTweener.prototype.InitTweenerData = function (playTimes, pingPong, curv) {
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (playTimes == null) {
            playTimes = 1;
        }
        if (pingPong == null) {
            pingPong = false;
        }
        if (curv == null) {
            curv = XTweenCurv_1.XTweenCurvType.Liner;
        }
        this.repeatTimes = playTimes;
        this.pingPong = pingPong;
        this.curvType = curv;
    };
    //interface
    XTweener.prototype.SetTweenerData = function (data) {
        this.data = data;
    };
    XTweener.prototype.GetTweenerData = function () {
        return this.data;
    };
    XTweener.prototype.SetDelay = function (delay) {
        this.delay = delay;
    };
    XTweener.prototype.GetDelay = function () {
        return this.delay;
    };
    XTweener.prototype.Play = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.BeforePlay) {
            if (this.startCallback != null) {
                this.startCallback();
            }
        }
        this.state = XTweenGlobal_1.XTweenerState.Playing;
        if (this.controlByParent == false) {
            XTweenUpdater_1.default.GetInstance().AddTweener(this);
        }
        this.OnPlay();
    };
    XTweener.prototype.OnPlay = function () {
    };
    XTweener.prototype.Finish = function (shouldCallback) {
        if (shouldCallback === void 0) { shouldCallback = true; }
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.shouldCallback = shouldCallback;
    };
    XTweener.prototype.Pause = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Playing)
            this.state = XTweenGlobal_1.XTweenerState.Pause;
    };
    XTweener.prototype.Resume = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Pause)
            this.state = XTweenGlobal_1.XTweenerState.Playing;
    };
    XTweener.prototype.SetSpeed = function (speed) {
        this.speed = speed;
    };
    XTweener.prototype.SetStartCallback = function (startCallback) {
        this.startCallback = startCallback;
    };
    XTweener.prototype.SetFinishCallback = function (finishCallback) {
        this.finishCallback = finishCallback;
    };
    XTweener.prototype.GetState = function () {
        return this.state;
    };
    XTweener.prototype.Update = function (deltaTime) {
        this.currentTime += deltaTime * this.speed;
        if (this.duration < 0.01) {
            if (this.currentTime > this.delay) {
                this.timeProgress = 1;
            }
            else {
                this.timeProgress = 0;
            }
        }
        else {
            if (this.pingPong == true && this.currentTime > this.duration) {
                this.timeProgress = (this.currentTime - this.delay - this.duration) / this.duration;
                this.timeProgress = 1 - this.timeProgress;
            }
            else {
                this.timeProgress = (this.currentTime - this.delay) / this.duration;
            }
        }
        if (this.timeProgress < 0) {
            this.timeProgress = 0;
        }
        else if (this.timeProgress > 1) {
            this.timeProgress = 1;
        }
        if (this.currentTime >= this.delay + this.duration * (this.pingPong == true ? 2 : 1)) {
            this.currentRepeatTimes++;
            if (this.currentRepeatTimes >= this.repeatTimes && this.repeatTimes != -1) {
                this.state = XTweenGlobal_1.XTweenerState.End;
            }
            else {
                this.currentTime = this.delay;
            }
        }
        this.animationProgress = XTweenCurv_1.XTweenCurv.GetProgress(this.curvType, this.timeProgress, this.tCustomCurv);
    };
    XTweener.prototype.SetControlByParent = function () {
        this.controlByParent = true;
    };
    XTweener.prototype.GetControlByParent = function () {
        return this.controlByParent;
    };
    XTweener.prototype.BeReplaced = function () {
        this.beReplaced = true;
    };
    XTweener.prototype.GetTypeMark = function () {
        return "XTweener";
    };
    XTweener.prototype.OnDestroy = function () {
        this.state = XTweenGlobal_1.XTweenerState.End;
    };
    XTweener.prototype.OnEnable = function () {
        this.gameObjectDisable = false;
    };
    XTweener.prototype.OnDisable = function () {
        if (this.shouldNotFinishWhenDisable == true)
            return;
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.gameObjectDisable = true;
    };
    XTweener.prototype.AddObserver = function () {
        this.observer = this.target.getComponent(XTweenObserver_1.default);
        if (this.observer == null) {
            this.observer = this.target.addComponent(XTweenObserver_1.default);
        }
    };
    XTweener.prototype.SetTarget = function (target) {
        this.target = target;
        if (this.observer == null) {
            this.AddObserver();
        }
        this.observer.AddXTweener(this);
    };
    XTweener.prototype.SetCustomCurv = function (curv) {
        this.tCustomCurv = curv;
    };
    XTweener.prototype.SetTime = function (time) {
        this.duration = time;
    };
    XTweener.prototype.SetShouldNotFinishWhenDisable = function () {
        this.shouldNotFinishWhenDisable = true;
    };
    XTweener.prototype.SetShouldFinishCallbackWhenDisable = function () {
        this.shouldFinishCallbackWhenDisable = true;
    };
    XTweener.prototype.CheckFinish = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.End) {
            this.observer.RemoveTweener(this);
            if (this.finishCallback != null
                && this.shouldCallback == true
                && (this.gameObjectDisable == false || (this.gameObjectDisable == true && this.shouldFinishCallbackWhenDisable == true))) {
                this.finishCallback();
            }
        }
    };
    return XTweener;
}());
exports.default = XTweener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcQmFzZVxcWFR3ZWVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEQ7QUFFMUQsK0NBQStDO0FBQy9DLGlEQUE0QztBQUM1QyxtREFBOEM7QUFHOUM7SUFBQTtRQUVZLFNBQUksR0FBTyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFpQiw0QkFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDbEIsbUJBQWMsR0FBVyxJQUFJLENBQUM7UUFDOUIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3JCLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLHNCQUFpQixHQUFXLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLG9DQUErQixHQUFXLEtBQUssQ0FBQztRQUNoRCxnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixpQkFBWSxHQUFVLENBQUMsQ0FBQztRQUN0QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQzNCLHVCQUFrQixHQUFVLENBQUMsQ0FBQztRQUM1QixnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUN2QixzQkFBaUIsR0FBVSxDQUFDLENBQUM7UUFDN0IsYUFBUSxHQUFrQiwyQkFBYyxDQUFDLEtBQUssQ0FBQztRQUNqRCxnQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO0lBc1AvQyxDQUFDO0lBcFBhLGtDQUFlLEdBQXpCLFVBQ0ksU0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBeUI7UUFBekIscUJBQUEsRUFB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SUFBSSxDQUFDLENBQUMsRUFDNUg7Z0JBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3pCO1NBQ0o7SUFFTCxDQUFDO0lBRUwsZUFBQztBQUFELENBOVFBLEFBOFFDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSwgWFR3ZWVuQ3VydiB9IGZyb20gXCIuL1hUd2VlbkN1cnZcIjtcbmltcG9ydCBYVHdlZW5lcklGIGZyb20gXCIuL1hUd2VlbmVySUZcIjtcbmltcG9ydCB7IFhUd2VlbmVyU3RhdGUgfSBmcm9tIFwiLi9YVHdlZW5HbG9iYWxcIjtcbmltcG9ydCBYVHdlZW5VcGRhdGVyIGZyb20gXCIuL1hUd2VlblVwZGF0ZXJcIjtcbmltcG9ydCBYVHdlZW5PYnNlcnZlciBmcm9tIFwiLi9YVHdlZW5PYnNlcnZlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhUd2VlbmVyIGltcGxlbWVudHMgWFR3ZWVuZXJJRlxue1xuICAgIHByaXZhdGUgZGF0YTphbnkgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGU6WFR3ZWVuZXJTdGF0ZSA9IFhUd2VlbmVyU3RhdGUuQmVmb3JlUGxheTtcbiAgICBwcml2YXRlIGRlbGF5Om51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdGFydENhbGxiYWNrOigpPT52b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIGZpbmlzaENhbGxiYWNrOigpPT52b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbnRyb2xCeVBhcmVudDpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzcGVlZDpudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBzaG91bGRDYWxsYmFjazpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgYmVSZXBsYWNlZDpib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHRhcmdldDpjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIG9ic2VydmVyOlhUd2Vlbk9ic2VydmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGdhbWVPYmplY3REaXNhYmxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgZHVyYXRpb246bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNob3VsZEZpbmlzaENhbGxiYWNrV2hlbkRpc2FibGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY3VycmVudFRpbWU6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRpbWVQcm9ncmVzczpudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBwaW5nUG9uZzpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJyZW50UmVwZWF0VGltZXM6bnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgcmVwZWF0VGltZXM6bnVtYmVyID0gMTtcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uUHJvZ3Jlc3M6bnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgY3VydlR5cGU6WFR3ZWVuQ3VydlR5cGUgPSBYVHdlZW5DdXJ2VHlwZS5MaW5lcjtcbiAgICBwcml2YXRlIHRDdXN0b21DdXJ2OkFycmF5PG51bWJlcj4gPSBudWxsO1xuICAgIHByaXZhdGUgc2hvdWxkTm90RmluaXNoV2hlbkRpc2FibGUgPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBJbml0VHdlZW5lckRhdGEoXG4gICAgICAgIHBsYXlUaW1lczpudW1iZXIsXG4gICAgICAgIHBpbmdQb25nOmJvb2xlYW4sXG4gICAgICAgIGN1cnY9WFR3ZWVuQ3VydlR5cGUuTGluZXIpXG4gICAge1xuICAgICAgICBpZihwbGF5VGltZXMgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgcGxheVRpbWVzID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBpbmdQb25nID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpbmdQb25nID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJ2ID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGN1cnYgPSBYVHdlZW5DdXJ2VHlwZS5MaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVwZWF0VGltZXMgPSBwbGF5VGltZXM7XG4gICAgICAgIHRoaXMucGluZ1BvbmcgPSBwaW5nUG9uZztcbiAgICAgICAgdGhpcy5jdXJ2VHlwZSA9IGN1cnY7XG5cbiAgICB9XG5cbiAgICAvL2ludGVyZmFjZVxuICAgIHB1YmxpYyBTZXRUd2VlbmVyRGF0YShkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcHVibGljIEdldFR3ZWVuZXJEYXRhKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBTZXREZWxheShkZWxheTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXREZWxheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxheTtcbiAgICB9XG4gICAgcHVibGljIFBsYXkoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLkJlZm9yZVBsYXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuUGxheWluZztcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbEJ5UGFyZW50ID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBYVHdlZW5VcGRhdGVyLkdldEluc3RhbmNlKCkuQWRkVHdlZW5lcih0aGlzIGFzIFhUd2VlbmVySUYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5PblBsYXkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgT25QbGF5KClcbiAgICB7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBGaW5pc2goc2hvdWxkQ2FsbGJhY2s6Ym9vbGVhbj10cnVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICB0aGlzLnNob3VsZENhbGxiYWNrID0gc2hvdWxkQ2FsbGJhY2s7XG4gICAgfVxuICAgIHB1YmxpYyBQYXVzZSgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLlBsYXlpbmcpXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gWFR3ZWVuZXJTdGF0ZS5QYXVzZTtcbiAgICB9XG4gICAgcHVibGljIFJlc3VtZSgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLlBhdXNlKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuUGxheWluZztcbiAgICB9XG4gICAgcHVibGljIFNldFNwZWVkKHNwZWVkOm51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0U3RhcnRDYWxsYmFjayhzdGFydENhbGxiYWNrOigpPT52b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGFydENhbGxiYWNrID0gc3RhcnRDYWxsYmFjazsgICBcbiAgICB9XG4gICAgcHVibGljIFNldEZpbmlzaENhbGxiYWNrKGZpbmlzaENhbGxiYWNrOigpPT52b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5maW5pc2hDYWxsYmFjayA9IGZpbmlzaENhbGxiYWNrO1xuICAgIH1cbiAgICBwdWJsaWMgR2V0U3RhdGUoKTpYVHdlZW5lclN0YXRlXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIFVwZGF0ZShkZWx0YVRpbWU6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVRpbWUgKiB0aGlzLnNwZWVkO1xuICAgICAgICBpZih0aGlzLmR1cmF0aW9uIDwgMC4wMSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50VGltZSA+IHRoaXMuZGVsYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lUHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVByb2dyZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGluZ1BvbmcgPT0gdHJ1ZSAmJiB0aGlzLmN1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQcm9ncmVzcyA9ICh0aGlzLmN1cnJlbnRUaW1lIC0gdGhpcy5kZWxheSAtIHRoaXMuZHVyYXRpb24pIC8gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQcm9ncmVzcyA9IDEgLSB0aGlzLnRpbWVQcm9ncmVzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVQcm9ncmVzcyA9ICh0aGlzLmN1cnJlbnRUaW1lIC0gdGhpcy5kZWxheSkgLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMudGltZVByb2dyZXNzIDwgMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy50aW1lUHJvZ3Jlc3MgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy50aW1lUHJvZ3Jlc3MgPiAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQcm9ncmVzcyA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmN1cnJlbnRUaW1lID49IHRoaXMuZGVsYXkgKyB0aGlzLmR1cmF0aW9uICogKHRoaXMucGluZ1BvbmcgPT0gdHJ1ZSA/IDIgOiAxKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UmVwZWF0VGltZXMgKys7XG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRSZXBlYXRUaW1lcyA+PSB0aGlzLnJlcGVhdFRpbWVzICYmIHRoaXMucmVwZWF0VGltZXMgIT0gLTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmRlbGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uUHJvZ3Jlc3MgPSBYVHdlZW5DdXJ2LkdldFByb2dyZXNzKHRoaXMuY3VydlR5cGUsIHRoaXMudGltZVByb2dyZXNzLCB0aGlzLnRDdXN0b21DdXJ2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0Q29udHJvbEJ5UGFyZW50KClcbiAgICB7XG4gICAgICAgIHRoaXMuY29udHJvbEJ5UGFyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0Q29udHJvbEJ5UGFyZW50KCk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbEJ5UGFyZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBCZVJlcGxhY2VkKClcbiAgICB7XG4gICAgICAgIHRoaXMuYmVSZXBsYWNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFR5cGVNYXJrKClcbiAgICB7XG4gICAgICAgIHJldHVybiBcIlhUd2VlbmVyXCI7XG4gICAgfVxuXG4gICAgcHVibGljIE9uRGVzdHJveSgpXG4gICAge1xuICAgICAgICB0aGlzLnN0YXRlID0gWFR3ZWVuZXJTdGF0ZS5FbmQ7XG4gICAgfVxuXG4gICAgcHVibGljIE9uRW5hYmxlKClcbiAgICB7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdERpc2FibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgT25EaXNhYmxlKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc2hvdWxkTm90RmluaXNoV2hlbkRpc2FibGUgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3REaXNhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEFkZE9ic2VydmVyKClcbiAgICB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoWFR3ZWVuT2JzZXJ2ZXIpO1xuICAgICAgICBpZih0aGlzLm9ic2VydmVyID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSB0aGlzLnRhcmdldC5hZGRDb21wb25lbnQoWFR3ZWVuT2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFNldFRhcmdldCh0YXJnZXQ6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICBpZih0aGlzLm9ic2VydmVyID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQWRkT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVyLkFkZFhUd2VlbmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRDdXN0b21DdXJ2KGN1cnY6QXJyYXk8bnVtYmVyPilcbiAgICB7XG4gICAgICAgIHRoaXMudEN1c3RvbUN1cnYgPSBjdXJ2O1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRUaW1lKHRpbWU6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFNob3VsZE5vdEZpbmlzaFdoZW5EaXNhYmxlKClcbiAgICB7XG4gICAgICAgIHRoaXMuc2hvdWxkTm90RmluaXNoV2hlbkRpc2FibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRTaG91bGRGaW5pc2hDYWxsYmFja1doZW5EaXNhYmxlKClcbiAgICB7XG4gICAgICAgIHRoaXMuc2hvdWxkRmluaXNoQ2FsbGJhY2tXaGVuRGlzYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIENoZWNrRmluaXNoKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gWFR3ZWVuZXJTdGF0ZS5FbmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuUmVtb3ZlVHdlZW5lcih0aGlzKTtcblxuICAgICAgICAgICAgaWYodGhpcy5maW5pc2hDYWxsYmFjayAhPSBudWxsIFxuICAgICAgICAgICAgICAgICYmIHRoaXMuc2hvdWxkQ2FsbGJhY2sgPT0gdHJ1ZSBcbiAgICAgICAgICAgICAgICAmJiAodGhpcy5nYW1lT2JqZWN0RGlzYWJsZSA9PSBmYWxzZSB8fCAodGhpcy5nYW1lT2JqZWN0RGlzYWJsZSA9PSB0cnVlICYmIHRoaXMuc2hvdWxkRmluaXNoQ2FsbGJhY2tXaGVuRGlzYWJsZSA9PSB0cnVlKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxufVxuIl19