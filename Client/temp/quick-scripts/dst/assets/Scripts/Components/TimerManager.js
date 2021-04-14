
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/TimerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcVGltZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBRXpDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFvQkk7O09BRUc7SUFDSDtRQUFBLGlCQUtDO1FBMUJPLE9BQUUsR0FBVSxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQTRCLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBaUIsRUFBRSxDQUFDO1FBb0IxQyxXQUFXO1FBQ1gsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTO1lBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3FCQTVCZ0IsWUFBWTtJQVFmLHdCQUFXLEdBQXpCO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxrREFBa0Q7WUFDbEQsbUNBQW1DO1lBQ25DLHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksY0FBWSxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQVlPLHdDQUFpQixHQUF6QjtRQUVJLElBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2xDLE9BQU87UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDbEQ7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdB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QUFELENBZEEsQUFjQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVwZGF0ZUJlYXQgZnJvbSBcIi4uL01hbmFnZXIvVXBkYXRlQmVhdFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyTWFuYWdlclxue1xuICAgIHByaXZhdGUgaWQ6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGRpY1RpbWVyczp7W2lkOm51bWJlcl06VGltZXJFdmVudH0gPSB7fTtcbiAgICBwcml2YXRlIGxpc3RJRFdhaXRUb1JlbW92ZTpBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBwcml2YXRlIHN0YXRpYyBtX0luc3RhbmNlOlRpbWVyTWFuYWdlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0SW5zdGFuY2UoKTpUaW1lck1hbmFnZXJcbiAgICB7XG4gICAgICAgIGlmKHRoaXMubV9JbnN0YW5jZSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBsZXQgbm9kZTpjYy5Ob2RlID0gbmV3IGNjLk5vZGUoXCJUaW1lck1hbmFnZXJcIik7XG4gICAgICAgICAgICAvLyBub2RlLnNldFBhcmVudChjYy5maW5kKFwiTWFpblwiKSk7XG4gICAgICAgICAgICAvLyB0aGlzLm1fSW5zdGFuY2UgPSBub2RlLmFkZENvbXBvbmVudChUaW1lck1hbmFnZXIpO1xuICAgICAgICAgICAgdGhpcy5tX0luc3RhbmNlID0gbmV3IFRpbWVyTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1fSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gc3VwZXIoKTtcbiAgICAgICAgVXBkYXRlQmVhdC5HZXRJbnN0YW5jZSgpLkFkZCgoZGVsdGFUaW1lKT0+e1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVGdW5jKGRlbHRhVGltZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgRGVsZXRlVGltZXJFdmVudHMoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5saXN0SURXYWl0VG9SZW1vdmUubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTx0aGlzLmxpc3RJRFdhaXRUb1JlbW92ZS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kaWNUaW1lcnNbdGhpcy5saXN0SURXYWl0VG9SZW1vdmVbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdElEV2FpdFRvUmVtb3ZlID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBVcGRhdGVGdW5jKGR0OiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLkRlbGV0ZVRpbWVyRXZlbnRzKCk7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGlkIGluIHRoaXMuZGljVGltZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdGltZXJFdmVudCA9IHRoaXMuZGljVGltZXJzW2lkXTtcblxuICAgICAgICAgICAgdGltZXJFdmVudC50aW1lQ2FsICs9IGR0O1xuICAgICAgICAgICAgaWYodGltZXJFdmVudC50aW1lQ2FsID4gdGltZXJFdmVudC5kZWxheSAmJiB0aW1lckV2ZW50LmhhdmVSdW5EZWxheUFjdGlvbiA9PSBmYWxzZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aW1lckV2ZW50LmhhdmVSdW5EZWxheUFjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGltZXJFdmVudC5hY3Rpb24odGltZXJFdmVudC5wYXJtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGltZXJFdmVudC5yZXBlYXRUaW1lcyAhPSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRpbWVyRXZlbnQudGltZUNhbCA+IHRpbWVyRXZlbnQuZGVsYXkgKyAodGltZXJFdmVudC5jdXJyZW50VGltZSArIDEpICogdGltZXJFdmVudC5pbnRlcnZhbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyRXZlbnQuYWN0aW9uKHRpbWVyRXZlbnQucGFybSk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyRXZlbnQuY3VycmVudFRpbWUgKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGltZXJFdmVudC5yZXBlYXRUaW1lcyAhPSAtMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aW1lckV2ZW50LmhhdmVSdW5EZWxheUFjdGlvbiA9PSB0cnVlICYmIHRpbWVyRXZlbnQuY3VycmVudFRpbWUgPj0gdGltZXJFdmVudC5yZXBlYXRUaW1lcyAtIDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RJRFdhaXRUb1JlbW92ZS5wdXNoKHRpbWVyRXZlbnQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuRGVsZXRlVGltZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rlrprml7blmajvvIzov5Tlm57lrprml7blmahpZO+8jOeUqOS6juaJi+WKqOa4hemZpOOAguWmguaenOS4jeaJp+ihjOaJi+WKqOWIoOmZpOWFtuS8muiHquWKqOa4hemZpOOAglxuICAgICAqIEBwYXJhbSBbYWN0aW9uXSDlu7bml7bmiafooYznmoTmlrnms5VcbiAgICAgKiBAcGFyYW0gW2RlbGF5XSDljZXkvY3mmK/np5JcbiAgICAgKiBAcGFyYW0gW3Bhcm1dIGFjdGlvbuS8oOWFpeWPguaVsCzpu5jorqRudWxsXG4gICAgICogQHBhcmFtIFtyZXBlYXRUaW1lc10g5oC76L+H5omn6KGM5qyh5pWw77yMMOWSjDHkvZznlKjkuIDmoLfvvIzlpKfkuo4x5omN5Lya5omn6KGM5aSa5qyhXG4gICAgICogQHBhcmFtIFtpbnRlcnZhbF0g5bu25pe25omn6KGM5ZCO6YeN5aSN55qE6Ze06ZqULDDkuLppbnRlcnZhbD1kZWxhee+8jOm7mOiupDBcbiAgICAgKiBAcGFyYW0gW2tlZXBBbGl2ZV0gdHJ1ZT3kv53mjIHorqHml7blmajkuI3ooqvmuIXpmaTvvIzlv4XpobvosIPnlKjmjIflrprnmoTmlrnms5XmiY3og73muIXpmaTov5nkuKrorqHml7blmajvvIzpu5jorqRmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBDYWxsQWN0aW9uRGVsYXkoYWN0aW9uOihvYmo6YW55KT0+dm9pZCxkZWxheTpudW1iZXIscGFybT1udWxsLHJlcGVhdFRpbWVzOm51bWJlcj0xLGludGVydmFsPTAsa2VlcEFsaXZlPWZhbHNlKVxuICAgIHtcbiAgICAgICAgaWYoZGVsYXkgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsYXkgPSAwLjAxO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJlcGVhdFRpbWVzIDw9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXBlYXRUaW1lcyA9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVwZWF0VGltZXMgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgcmVwZWF0VGltZXMgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaW50ZXJ2YWwgPD0gMCB8fCBpbnRlcnZhbCA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IGRlbGF5O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lckV2ZW50OlRpbWVyRXZlbnQgPSBuZXcgVGltZXJFdmVudCgpO1xuICAgICAgICB0aW1lckV2ZW50LmlkID0gdGhpcy5pZC50b1N0cmluZygpO1xuICAgICAgICB0aW1lckV2ZW50LmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGltZXJFdmVudC5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aW1lckV2ZW50LnBhcm0gPSBwYXJtO1xuICAgICAgICB0aW1lckV2ZW50LnJlcGVhdFRpbWVzID0gcmVwZWF0VGltZXM7XG4gICAgICAgIHRpbWVyRXZlbnQuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGltZXJFdmVudC5rZWVwQWxpdmUgPSBrZWVwQWxpdmU7XG4gICAgICAgIHRoaXMuZGljVGltZXJzW3RpbWVyRXZlbnQuaWRdID0gdGltZXJFdmVudDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaWQrKztcblxuICAgICAgICByZXR1cm4gdGltZXJFdmVudC5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmiYvliqjliKDpmaTlrprml7blmahcbiAgICAgKiBAcGFyYW0gW2lkXSDlrprml7blmahpZFxuICAgICAqL1xuICAgIHB1YmxpYyBEZWxldGVUaW1lcihpZDpzdHJpbmcpXG4gICAge1xuICAgICAgICBpZihpZCA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kaWNUaW1lcnNbaWRdICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLmxpc3RJRFdhaXRUb1JlbW92ZS5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgQ2xlYXJBbGwoKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5kaWNUaW1lcnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuRGVsZXRlVGltZXIoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhckFsbEJ1dEtlZXBMaXZlKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuZGljVGltZXJzKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmRpY1RpbWVyc1trZXldLmtlZXBBbGl2ZSA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZVRpbWVyKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbmNsYXNzIFRpbWVyRXZlbnRcbntcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuICAgIHB1YmxpYyBkZWxheTpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpbnRlcnZhbDpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBhY3Rpb246KGFueSk9PnZvaWQgPSBudWxsO1xuICAgIHB1YmxpYyBwYXJtOmFueSA9IG51bGw7XG4gICAgcHVibGljIHJlcGVhdFRpbWVzOm51bWJlciA9IDA7XG4gICAgLy/orqHml7blmahcbiAgICBwdWJsaWMgdGltZUNhbDpudW1iZXIgPSAwO1xuICAgIC8v5b2T5YmNcmVwZWF0ZeasoeaVsFxuICAgIHB1YmxpYyBjdXJyZW50VGltZTpudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBrZWVwQWxpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBoYXZlUnVuRGVsYXlBY3Rpb24gPSBmYWxzZTtcbn1cbiJdfQ==