
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenerGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ec11j1xstK9qiepqC+0PvE', 'XTweenerGroup');
// Scripts/Tools/XTween/Base/XTweenerGroup.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenGlobal_1 = require("./XTweenGlobal");
var XTweenUpdater_1 = require("./XTweenUpdater");
var XTweenerGroupQueueItem_1 = require("./XTweenerGroupQueueItem");
var Util_1 = require("../../Util");
var XTweenObserver_1 = require("./XTweenObserver");
var XTweenerGroup = /** @class */ (function () {
    function XTweenerGroup() {
        this.delay = 0;
        this.state = XTweenGlobal_1.XTweenerState.BeforePlay;
        this.controlByParent = false;
        this.listQueueItems = [];
        this.speed = 1;
        this.shouldCallback = true;
    }
    XTweenerGroup.prototype.SetTweenerData = function (data) {
        this.data = data;
    };
    XTweenerGroup.prototype.GetTweenerData = function () {
        return this.data;
    };
    XTweenerGroup.prototype.SetDelay = function (delay) {
        this.delay = delay;
    };
    XTweenerGroup.prototype.GetDelay = function () {
        return this.delay;
    };
    XTweenerGroup.prototype.Play = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.BeforePlay) {
            if (this.startCallback != null) {
                this.startCallback();
            }
        }
        this.state = XTweenGlobal_1.XTweenerState.Playing;
        if (this.controlByParent == false) {
            XTweenUpdater_1.default.GetInstance().AddTweener(this);
        }
    };
    XTweenerGroup.prototype.Finish = function (shouldCallback) {
        if (shouldCallback === void 0) { shouldCallback = true; }
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.shouldCallback = shouldCallback;
    };
    XTweenerGroup.prototype.Pause = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Playing) {
            this.state = XTweenGlobal_1.XTweenerState.Pause;
        }
    };
    XTweenerGroup.prototype.Resume = function () {
        if (this.state == XTweenGlobal_1.XTweenerState.Pause) {
            this.state = XTweenGlobal_1.XTweenerState.Playing;
        }
    };
    XTweenerGroup.prototype.SetSpeed = function (speed) {
        this.speed = speed;
    };
    XTweenerGroup.prototype.SetStartCallback = function (startCallback) {
        this.startCallback = startCallback;
    };
    XTweenerGroup.prototype.SetFinishCallback = function (finishCallback) {
        this.finishCallback = finishCallback;
    };
    XTweenerGroup.prototype.GetState = function () {
        return this.state;
    };
    XTweenerGroup.prototype.SetControlByParent = function () {
        this.controlByParent = true;
    };
    XTweenerGroup.prototype.Update = function (deltaTime) {
        if (this.state == XTweenGlobal_1.XTweenerState.End)
            return;
        if (this.listQueueItems.length > 0) {
            this.listQueueItems[0].Update(deltaTime);
            if (this.listQueueItems[0].CheckFinish() == true) {
                Util_1.default.RemoveArray(this.listQueueItems, 0);
            }
        }
        if (this.listQueueItems.length == 0) {
            this.state = XTweenGlobal_1.XTweenerState.End;
        }
        if (this.state == XTweenGlobal_1.XTweenerState.End) {
            if (this.observer != null) {
                this.observer.RemoveTweener(this);
            }
            if (this.finishCallback != null && this.shouldCallback == true) {
                this.finishCallback();
            }
        }
    };
    XTweenerGroup.prototype.GetTypeMark = function () {
        return "XTweenerGroup";
    };
    XTweenerGroup.prototype.GetControlByParent = function () {
        return this.controlByParent;
    };
    XTweenerGroup.prototype.AddTweener = function (tweener, addMode) {
        tweener.SetControlByParent();
        var queueItem = null;
        if (addMode == XTweenerGroupAddMode.Queue || this.listQueueItems.length == 0) {
            queueItem = new XTweenerGroupQueueItem_1.default();
            this.listQueueItems.push(queueItem);
        }
        else {
            queueItem = this.listQueueItems[this.listQueueItems.length - 1];
        }
        queueItem.AddTweener(tweener);
    };
    XTweenerGroup.prototype.BeReplaced = function () {
        //do nothing
    };
    XTweenerGroup.prototype.OnEnable = function () {
        //do nothing
    };
    XTweenerGroup.prototype.OnDisable = function () {
        //终止整个tween
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.observer.RemoveTweener(this);
    };
    XTweenerGroup.prototype.OnDestroy = function () {
        //终止整个tween
        this.state = XTweenGlobal_1.XTweenerState.End;
        this.observer.RemoveTweener(this);
    };
    /**
     * 增加ObserverObj后，如果ObserverObj active改变成false，就会停止后续的回调
     * @param target
     */
    XTweenerGroup.prototype.AddObserverObj = function (target) {
        this.observer = target.getComponent(XTweenObserver_1.default);
        if (this.observer == null) {
            this.observer = target.addComponent(XTweenObserver_1.default);
        }
        this.observer.AddXTweener(this);
    };
    return XTweenerGroup;
}());
exports.default = XTweenerGroup;
var XTweenerGroupAddMode = /** @class */ (function () {
    function XTweenerGroupAddMode() {
    }
    XTweenerGroupAddMode.Queue = 1;
    XTweenerGroupAddMode.Parallel = 2;
    return XTweenerGroupAddMode;
}());
exports.XTweenerGroupAddMode = XTweenerGroupAddMode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcQmFzZVxcWFR3ZWVuZXJHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUErQztBQUMvQyxpREFBNEM7QUFDNUMsbUVBQThEO0FBQzlELG1DQUE4QjtBQUM5QixtREFBOEM7QUFFOUM7SUFBQTtRQUdZLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFpQiw0QkFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxvQkFBZSxHQUFXLEtBQUssQ0FBQztRQUdoQyxtQkFBYyxHQUFpQyxFQUFFLENBQUM7UUFFbEQsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLG1CQUFjLEdBQVcsSUFBSSxDQUFDO0lBa0sxQyxDQUFDO0lBaEtVLHNDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNNLHNDQUFjLEdBQXJCO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSxnQ0FBUSxHQUFmLFVBQWdCLEtBQVk7UUFFeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNNLGdDQUFRLEdBQWY7UUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNNLDRCQUFJLEdBQVg7UUFFSSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksNEJBQWEsQ0FBQyxVQUFVLEVBQ3pDO1lBQ0ksSUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFDN0I7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUFhLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxLQUFLLEVBQ2hDO1lBQ0ksdUJBQWEsQ0FBQyxX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QUE2S0MsSUFBQTs7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUZpQiwwQkFBSyxHQUFHLENBQUMsQ0FBQztJQUNWLDZCQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLDJCQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFhUd2VlbmVySUYgZnJvbSBcIi4vWFR3ZWVuZXJJRlwiO1xuaW1wb3J0IHsgWFR3ZWVuZXJTdGF0ZSB9IGZyb20gXCIuL1hUd2Vlbkdsb2JhbFwiO1xuaW1wb3J0IFhUd2VlblVwZGF0ZXIgZnJvbSBcIi4vWFR3ZWVuVXBkYXRlclwiO1xuaW1wb3J0IFhUd2VlbmVyR3JvdXBRdWV1ZUl0ZW0gZnJvbSBcIi4vWFR3ZWVuZXJHcm91cFF1ZXVlSXRlbVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4uLy4uL1V0aWxcIjtcbmltcG9ydCBYVHdlZW5PYnNlcnZlciBmcm9tIFwiLi9YVHdlZW5PYnNlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYVHdlZW5lckdyb3VwIGltcGxlbWVudHMgWFR3ZWVuZXJJRlxue1xuICAgIHByaXZhdGUgZGF0YTphbnk7XG4gICAgcHJpdmF0ZSBkZWxheTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3RhdGU6WFR3ZWVuZXJTdGF0ZSA9IFhUd2VlbmVyU3RhdGUuQmVmb3JlUGxheTtcbiAgICBwcml2YXRlIGNvbnRyb2xCeVBhcmVudDpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdGFydENhbGxiYWNrOigpPT52b2lkO1xuICAgIHByaXZhdGUgZmluaXNoQ2FsbGJhY2s6KCk9PnZvaWQ7XG4gICAgcHJpdmF0ZSBsaXN0UXVldWVJdGVtczpBcnJheTxYVHdlZW5lckdyb3VwUXVldWVJdGVtPiA9IFtdO1xuICAgIHByaXZhdGUgb2JzZXJ2ZXI6WFR3ZWVuT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBzcGVlZCA9IDE7XG4gICAgcHJpdmF0ZSBzaG91bGRDYWxsYmFjazpib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBTZXRUd2VlbmVyRGF0YShkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcHVibGljIEdldFR3ZWVuZXJEYXRhKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIHB1YmxpYyBTZXREZWxheShkZWxheTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgfVxuICAgIHB1YmxpYyBHZXREZWxheSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxheTtcbiAgICB9XG4gICAgcHVibGljIFBsYXkoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLkJlZm9yZVBsYXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhcnRDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLlBsYXlpbmc7XG4gICAgICAgIGlmKHRoaXMuY29udHJvbEJ5UGFyZW50ID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBYVHdlZW5VcGRhdGVyLkdldEluc3RhbmNlKCkuQWRkVHdlZW5lcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgRmluaXNoKHNob3VsZENhbGxiYWNrOmJvb2xlYW49dHJ1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLkVuZDtcbiAgICAgICAgdGhpcy5zaG91bGRDYWxsYmFjayA9IHNob3VsZENhbGxiYWNrO1xuICAgIH1cbiAgICBwdWJsaWMgUGF1c2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLlBsYXlpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBYVHdlZW5lclN0YXRlLlBhdXNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBSZXN1bWUoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLlBhdXNlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gWFR3ZWVuZXJTdGF0ZS5QbGF5aW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTZXRTcGVlZChzcGVlZDpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRTdGFydENhbGxiYWNrKHN0YXJ0Q2FsbGJhY2s6KCk9PnZvaWQpXG4gICAge1xuICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgPSBzdGFydENhbGxiYWNrO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0RmluaXNoQ2FsbGJhY2soZmluaXNoQ2FsbGJhY2s6KCk9PnZvaWQpXG4gICAge1xuICAgICAgICB0aGlzLmZpbmlzaENhbGxiYWNrID0gZmluaXNoQ2FsbGJhY2s7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOlhUd2VlbmVyU3RhdGVcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBwdWJsaWMgU2V0Q29udHJvbEJ5UGFyZW50KClcbiAgICB7XG4gICAgICAgIHRoaXMuY29udHJvbEJ5UGFyZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZShkZWx0YVRpbWU6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBYVHdlZW5lclN0YXRlLkVuZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYodGhpcy5saXN0UXVldWVJdGVtcy5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmxpc3RRdWV1ZUl0ZW1zWzBdLlVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgaWYodGhpcy5saXN0UXVldWVJdGVtc1swXS5DaGVja0ZpbmlzaCgpID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXRpbC5SZW1vdmVBcnJheSh0aGlzLmxpc3RRdWV1ZUl0ZW1zLDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5saXN0UXVldWVJdGVtcy5sZW5ndGggPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUgPT0gWFR3ZWVuZXJTdGF0ZS5FbmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMub2JzZXJ2ZXIgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLlJlbW92ZVR3ZWVuZXIodGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZmluaXNoQ2FsbGJhY2sgIT0gbnVsbCAmJiB0aGlzLnNob3VsZENhbGxiYWNrID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBHZXRUeXBlTWFyaygpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIFwiWFR3ZWVuZXJHcm91cFwiO1xuICAgIH1cbiAgICBwdWJsaWMgR2V0Q29udHJvbEJ5UGFyZW50KCk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbEJ5UGFyZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRUd2VlbmVyKHR3ZWVuZXI6WFR3ZWVuZXJJRiwgYWRkTW9kZTpYVHdlZW5lckdyb3VwQWRkTW9kZSlcbiAgICB7XG4gICAgICAgIHR3ZWVuZXIuU2V0Q29udHJvbEJ5UGFyZW50KCk7XG4gICAgICAgIGxldCBxdWV1ZUl0ZW0gPSBudWxsO1xuICAgICAgICBpZihhZGRNb2RlID09IFhUd2VlbmVyR3JvdXBBZGRNb2RlLlF1ZXVlIHx8IHRoaXMubGlzdFF1ZXVlSXRlbXMubGVuZ3RoID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXVlSXRlbSA9IG5ldyBYVHdlZW5lckdyb3VwUXVldWVJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RRdWV1ZUl0ZW1zLnB1c2gocXVldWVJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXVlSXRlbSA9IHRoaXMubGlzdFF1ZXVlSXRlbXNbdGhpcy5saXN0UXVldWVJdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUl0ZW0uQWRkVHdlZW5lcih0d2VlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQmVSZXBsYWNlZCgpXG4gICAge1xuICAgICAgICAvL2RvIG5vdGhpbmdcbiAgICB9XG4gICAgcHVibGljIE9uRW5hYmxlKClcbiAgICB7XG4gICAgICAgIC8vZG8gbm90aGluZ1xuICAgIH1cbiAgICBwdWJsaWMgT25EaXNhYmxlKClcbiAgICB7XG4gICAgICAgIC8v57uI5q2i5pW05LiqdHdlZW5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFhUd2VlbmVyU3RhdGUuRW5kO1xuICAgICAgICB0aGlzLm9ic2VydmVyLlJlbW92ZVR3ZWVuZXIodGhpcyk7XG4gICAgfVxuICAgIHB1YmxpYyBPbkRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgLy/nu4jmraLmlbTkuKp0d2VlblxuICAgICAgICB0aGlzLnN0YXRlID0gWFR3ZWVuZXJTdGF0ZS5FbmQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuUmVtb3ZlVHdlZW5lcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlop7liqBPYnNlcnZlck9iauWQju+8jOWmguaenE9ic2VydmVyT2JqIGFjdGl2ZeaUueWPmOaIkGZhbHNl77yM5bCx5Lya5YGc5q2i5ZCO57ut55qE5Zue6LCDXG4gICAgICogQHBhcmFtIHRhcmdldCBcbiAgICAgKi9cbiAgICBwdWJsaWMgQWRkT2JzZXJ2ZXJPYmoodGFyZ2V0OmNjLk5vZGUpXG4gICAge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gdGFyZ2V0LmdldENvbXBvbmVudChYVHdlZW5PYnNlcnZlcik7XG4gICAgICAgIGlmKHRoaXMub2JzZXJ2ZXIgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IHRhcmdldC5hZGRDb21wb25lbnQoWFR3ZWVuT2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuQWRkWFR3ZWVuZXIodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgWFR3ZWVuZXJHcm91cEFkZE1vZGVcbntcbiAgICBwdWJsaWMgc3RhdGljIFF1ZXVlID0gMTtcbiAgICBwdWJsaWMgc3RhdGljIFBhcmFsbGVsID0gMjtcbn0iXX0=