"use strict";
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