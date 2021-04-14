"use strict";
cc._RF.push(module, 'f4760tHsLRJ4ZcJ5ghN1QKx', 'TimerManager');
// Scripts/Components/TimerManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateBeat_1 = require("../Manager/UpdateBeat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimerManager = /** @class */ (function () {
    /**
     *
     */
    function TimerManager() {
        var _this = this;
        this.id = 0;
        this.dicTimers = {};
        this.listIDWaitToRemove = [];
        // super();
        UpdateBeat_1.default.GetInstance().Add(function (deltaTime) {
            _this.UpdateFunc(deltaTime);
        });
    }
    TimerManager_1 = TimerManager;
    TimerManager.GetInstance = function () {
        if (this.m_Instance == null) {
            // let node:cc.Node = new cc.Node("TimerManager");
            // node.setParent(cc.find("Main"));
            // this.m_Instance = node.addComponent(TimerManager);
            this.m_Instance = new TimerManager_1();
        }
        return this.m_Instance;
    };
    TimerManager.prototype.DeleteTimerEvents = function () {
        if (this.listIDWaitToRemove.length == 0)
            return;
        for (var i = 0; i < this.listIDWaitToRemove.length; i++) {
            delete this.dicTimers[this.listIDWaitToRemove[i]];
        }
        this.listIDWaitToRemove = [];
    };
    TimerManager.prototype.UpdateFunc = function (dt) {
        this.DeleteTimerEvents();
        for (var id in this.dicTimers) {
            var timerEvent = this.dicTimers[id];
            timerEvent.timeCal += dt;
            if (timerEvent.timeCal > timerEvent.delay && timerEvent.haveRunDelayAction == false) {
                timerEvent.haveRunDelayAction = true;
                timerEvent.action(timerEvent.parm);
            }
            if (timerEvent.repeatTimes != 1) {
                if (timerEvent.timeCal > timerEvent.delay + (timerEvent.currentTime + 1) * timerEvent.interval) {
                    timerEvent.action(timerEvent.parm);
                    timerEvent.currentTime++;
                }
            }
            if (timerEvent.repeatTimes != -1) {
                if (timerEvent.haveRunDelayAction == true && timerEvent.currentTime >= timerEvent.repeatTimes - 1) {
                    this.listIDWaitToRemove.push(timerEvent.id);
                }
            }
        }
        this.DeleteTimerEvents();
    };
    /**
     * 创建定时器，返回定时器id，用于手动清除。如果不执行手动删除其会自动清除。
     * @param [action] 延时执行的方法
     * @param [delay] 单位是秒
     * @param [parm] action传入参数,默认null
     * @param [repeatTimes] 总过执行次数，0和1作用一样，大于1才会执行多次
     * @param [interval] 延时执行后重复的间隔,0为interval=delay，默认0
     * @param [keepAlive] true=保持计时器不被清除，必须调用指定的方法才能清除这个计时器，默认false
     */
    TimerManager.prototype.CallActionDelay = function (action, delay, parm, repeatTimes, interval, keepAlive) {
        if (parm === void 0) { parm = null; }
        if (repeatTimes === void 0) { repeatTimes = 1; }
        if (interval === void 0) { interval = 0; }
        if (keepAlive === void 0) { keepAlive = false; }
        if (delay == 0) {
            delay = 0.01;
        }
        if (repeatTimes <= -1) {
            repeatTimes = -1;
        }
        if (repeatTimes == 0) {
            repeatTimes = 1;
        }
        if (interval <= 0 || interval == null) {
            interval = delay;
        }
        var timerEvent = new TimerEvent();
        timerEvent.id = this.id.toString();
        timerEvent.action = action;
        timerEvent.delay = delay;
        timerEvent.parm = parm;
        timerEvent.repeatTimes = repeatTimes;
        timerEvent.interval = interval;
        timerEvent.keepAlive = keepAlive;
        this.dicTimers[timerEvent.id] = timerEvent;
        this.id++;
        return timerEvent.id;
    };
    /**
     * 手动删除定时器
     * @param [id] 定时器id
     */
    TimerManager.prototype.DeleteTimer = function (id) {
        if (id == null) {
            return;
        }
        if (this.dicTimers[id] != null)
            this.listIDWaitToRemove.push(id);
    };
    TimerManager.prototype.ClearAll = function () {
        for (var key in this.dicTimers) {
            this.DeleteTimer(key);
        }
    };
    TimerManager.prototype.ClearAllButKeepLive = function () {
        for (var key in this.dicTimers) {
            if (this.dicTimers[key].keepAlive == false)
                this.DeleteTimer(key);
        }
    };
    var TimerManager_1;
    TimerManager = TimerManager_1 = __decorate([
        ccclass
    ], TimerManager);
    return TimerManager;
}());
exports.default = TimerManager;
var TimerEvent = /** @class */ (function () {
    function TimerEvent() {
        this.delay = 0;
        this.interval = 0;
        this.action = null;
        this.parm = null;
        this.repeatTimes = 0;
        //计时器
        this.timeCal = 0;
        //当前repeate次数
        this.currentTime = 0;
        this.keepAlive = false;
        this.haveRunDelayAction = false;
    }
    return TimerEvent;
}());

cc._RF.pop();