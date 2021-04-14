"use strict";
cc._RF.push(module, '41898dzamJJ54cFWzjfpPvY', 'XTween');
// Scripts/Tools/XTween/XTween.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenerPosition_1 = require("./XTweenerPosition");
var XTweenerRotaion_1 = require("./XTweenerRotaion");
var XTweenCurv_1 = require("./Base/XTweenCurv");
var XTweenerScale_1 = require("./XTweenerScale");
var XTweenerGroup_1 = require("./Base/XTweenerGroup");
var XTweenerValue_1 = require("./XTweenerValue");
var XTweenerValueArray_1 = require("./XTweenerValueArray");
var XTweenerAction_1 = require("./XTweenerAction");
var XTweenerWorldPosition_1 = require("./XTweenerWorldPosition");
var XTween = /** @class */ (function () {
    function XTween() {
    }
    /**
     * 返回一个XTweener对象，可以放到group里或者手动调用play播放，不会自动播放
     * @param target node对象
     * @param startValue 可以传null
     * @param endValue 必须有值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoMove = function (target, startValue, endValue, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerPosition_1.default();
        tweener.Init(target, startValue, endValue, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    /**
     * 返回一个XTweener对象，可以放到group里或者手动调用play播放，不会自动播放
     * @param target node对象
     * @param endPos 终点位置的node
     * @param offset 终点位置的偏移值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoMoveWorldPos = function (target, endPos, offset, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerWorldPosition_1.default();
        tweener.Init(target, endPos, offset, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    /**
     * 返回一个XTweener对象，可以放到group里或者手动调用play播放，不会自动播放
     * @param target node对象
     * @param startValue 可以传null
     * @param endValue 必须有值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoScale = function (target, startValue, endValue, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerScale_1.default();
        tweener.Init(target, startValue, endValue, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    /**
     * 返回一个XTweener对象，可以放到group里或者手动调用play播放，不会自动播放
     * @param target node对象
     * @param startValue 可以传null
     * @param endValue 必须有值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoRotate = function (target, startValue, endValue, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerRotaion_1.default();
        tweener.Init(target, startValue, endValue, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    // public static DoColor(
    //     target:cc.Node,
    //     startValue:Array<number>,
    //     endValue:Array<number>,
    //     duration:number,
    //     playTimes:number=1,
    //     pingPong:boolean=false,
    //     curv=XTweenCurvType.Liner,
    //     finishCallBack=null,
    //     delay=0,
    //     ):XTweener
    // {
    //     let tweener = new XTweenerColor();
    //     tweener.Init(target,startValue,endValue,duration,playTimes,pingPong,curv);
    //     tweener.SetFinishCallback(finishCallBack);
    //     tweener.SetDelay(delay);
    //     return tweener;
    // }
    /**
     * 返回一个XTweener对象，可以放到group里或者手动调用play播放，不会自动播放
     * @param target 监测的node对象
     * @param vauleChangeCallback 当value改变时的回调
     * @param startValue 填null和0效果一样
     * @param endValue 必须有值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoValue = function (target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerValue_1.default();
        tweener.Init(target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    /**
     * 和DoValue不同的地方就是传入的参数是数组，一般用于颜色变化这种需要多个数值变化的时候
     * @param target 监测的node对象
     * @param vauleChangeCallback 当value改变时的回调
     * @param startValue 填null和0效果一样
     * @param endValue 必须有值
     * @param duration 持续时间
     * @param playTimes 播放次数，默认是1
     * @param pingPong 默认false
     * @param curv 默认Liner
     * @param finishCallBack 默认为空
     * @param delay 默认0
     */
    XTween.DoValueArray = function (target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv, finishCallBack, delay) {
        if (playTimes === void 0) { playTimes = 1; }
        if (pingPong === void 0) { pingPong = false; }
        if (curv === void 0) { curv = XTweenCurv_1.XTweenCurvType.Liner; }
        if (finishCallBack === void 0) { finishCallBack = null; }
        if (delay === void 0) { delay = 0; }
        var tweener = new XTweenerValueArray_1.default();
        tweener.Init(target, vauleChangeCallback, startValue, endValue, duration, playTimes, pingPong, curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    };
    /**
     * 创建一个XTweenerGroup，用来做动画组完成复杂的动画
     */
    XTween.CreateXTweenerGroup = function () {
        var group = new XTweenerGroup_1.default();
        return group;
    };
    /**
     * 创建一个XTweenerAction，用来在tweener过程中插入执行一些事件，带有xtweener的一些特性
     * @param delay 默认0
     * @param action 事件
     */
    XTween.GetTweenerAction = function (delay, action) {
        var xTweenerAction = new XTweenerAction_1.default();
        xTweenerAction.SetDelay(delay);
        xTweenerAction.SetAction(action);
        return xTweenerAction;
    };
    return XTween;
}());
exports.default = XTween;

cc._RF.pop();