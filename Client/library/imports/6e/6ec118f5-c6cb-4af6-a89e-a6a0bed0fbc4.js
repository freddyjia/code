"use strict";
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