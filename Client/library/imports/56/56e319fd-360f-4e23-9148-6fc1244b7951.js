"use strict";
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