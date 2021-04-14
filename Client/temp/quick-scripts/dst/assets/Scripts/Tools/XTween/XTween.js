
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/XTween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcWFR3ZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQWtEO0FBRWxELHFEQUFnRDtBQUdoRCxnREFBbUQ7QUFDbkQsaURBQTRDO0FBQzVDLHNEQUEyRTtBQUMzRSxpREFBNEM7QUFDNUMsMkRBQXNEO0FBQ3RELG1EQUE4QztBQUM5QyxpRUFBNEQ7QUFFNUQ7SUFBQTtJQXNPQSxDQUFDO0lBcE9HOzs7Ozs7Ozs7OztPQVdHO0lBQ1csYUFBTSxHQUFwQixVQUNJLE1BQWMsRUFDZCxVQUFrQixFQUNsQixRQUFnQixFQUNoQixRQUFlLEVBQ2YsU0FBa0IsRUFDbEIsUUFBc0IsRUFDdEIsSUFBeUIsRUFDekIsY0FBbUIsRUFDbkIsS0FBTztRQUpQLDBCQUFBLEVBQUEsYUFBa0I7UUFDbEIseUJBQUEsRUFBQSxnQkFBc0I7UUFDdEIscUJBQUEsRUFBQSxPQUFLLDJCQUFjLENBQUMsS0FBSztRQUN6QiwrQkFBQSxFQUFBLHFCQUFtQjtRQUNuQixzQkFBQSxFQUFBLFNBQU87UUFHUCxJQUFJLE9BQU8sR0FBRyxJQUFJLDBCQUFnQixFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDVyxxQkFBYyxHQUE1QixVQUNJLE1BQWMsRUFDZCxNQUFzQixFQUN0QixNQUFjLEVBQ2QsUUFBZSxFQUNmLFNBQWtCLEVBQ2xCLFFBQXNCLEVBQ3RCLElBQXlCLEVBQ3pCLGNBQW1C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QyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ1csMEJBQW1CLEdBQWpDO1FBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyx1QkFBZ0IsR0FBOUIsVUFBK0IsS0FBWSxFQUFDLE1BQWU7UUFFdkQsSUFBSSxjQUFjLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7UUFDMUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0F0T0EsQUFzT0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lciBmcm9tIFwiLi9CYXNlL1hUd2VlbmVyXCI7XG5pbXBvcnQgWFR3ZWVuZXJQb3NpdGlvbiBmcm9tIFwiLi9YVHdlZW5lclBvc2l0aW9uXCI7XG5cbmltcG9ydCBYVHdlZW5lclJvdGFpb24gZnJvbSBcIi4vWFR3ZWVuZXJSb3RhaW9uXCI7XG5pbXBvcnQgWFR3ZWVuZXJDb2xvciBmcm9tIFwiLi9YVHdlZW5lckNvbG9yXCI7XG5cbmltcG9ydCB7IFhUd2VlbkN1cnZUeXBlIH0gZnJvbSBcIi4vQmFzZS9YVHdlZW5DdXJ2XCI7XG5pbXBvcnQgWFR3ZWVuZXJTY2FsZSBmcm9tIFwiLi9YVHdlZW5lclNjYWxlXCI7XG5pbXBvcnQgWFR3ZWVuZXJHcm91cCwgeyBYVHdlZW5lckdyb3VwQWRkTW9kZSB9IGZyb20gXCIuL0Jhc2UvWFR3ZWVuZXJHcm91cFwiO1xuaW1wb3J0IFhUd2VlbmVyVmFsdWUgZnJvbSBcIi4vWFR3ZWVuZXJWYWx1ZVwiO1xuaW1wb3J0IFhUd2VlbmVyVmFsdWVBcnJheSBmcm9tIFwiLi9YVHdlZW5lclZhbHVlQXJyYXlcIjtcbmltcG9ydCBYVHdlZW5lckFjdGlvbiBmcm9tIFwiLi9YVHdlZW5lckFjdGlvblwiO1xuaW1wb3J0IFhUd2VlbmVyV29ybGRQb3NpdGlvbiBmcm9tIFwiLi9YVHdlZW5lcldvcmxkUG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFR3ZWVuIFxue1xuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4gOS4qlhUd2VlbmVy5a+56LGh77yM5Y+v5Lul5pS+5YiwZ3JvdXDph4zmiJbogIXmiYvliqjosIPnlKhwbGF55pKt5pS+77yM5LiN5Lya6Ieq5Yqo5pKt5pS+XG4gICAgICogQHBhcmFtIHRhcmdldCBub2Rl5a+56LGhXG4gICAgICogQHBhcmFtIHN0YXJ0VmFsdWUg5Y+v5Lul5LygbnVsbFxuICAgICAqIEBwYXJhbSBlbmRWYWx1ZSDlv4XpobvmnInlgLxcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g5oyB57ut5pe26Ze0XG4gICAgICogQHBhcmFtIHBsYXlUaW1lcyDmkq3mlL7mrKHmlbDvvIzpu5jorqTmmK8xXG4gICAgICogQHBhcmFtIHBpbmdQb25nIOm7mOiupGZhbHNlXG4gICAgICogQHBhcmFtIGN1cnYg6buY6K6kTGluZXJcbiAgICAgKiBAcGFyYW0gZmluaXNoQ2FsbEJhY2sg6buY6K6k5Li656m6XG4gICAgICogQHBhcmFtIGRlbGF5IOm7mOiupDBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIERvTW92ZShcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZW5kVmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyPTEsXG4gICAgICAgIHBpbmdQb25nOmJvb2xlYW49ZmFsc2UsXG4gICAgICAgIGN1cnY9WFR3ZWVuQ3VydlR5cGUuTGluZXIsXG4gICAgICAgIGZpbmlzaENhbGxCYWNrPW51bGwsXG4gICAgICAgIGRlbGF5PTAsXG4gICAgICAgICk6WFR3ZWVuZXJcbiAgICB7XG4gICAgICAgIGxldCB0d2VlbmVyID0gbmV3IFhUd2VlbmVyUG9zaXRpb24oKTtcbiAgICAgICAgdHdlZW5lci5Jbml0KHRhcmdldCxzdGFydFZhbHVlLGVuZFZhbHVlLGR1cmF0aW9uLHBsYXlUaW1lcyxwaW5nUG9uZyxjdXJ2KTtcbiAgICAgICAgdHdlZW5lci5TZXRGaW5pc2hDYWxsYmFjayhmaW5pc2hDYWxsQmFjayk7XG4gICAgICAgIHR3ZWVuZXIuU2V0RGVsYXkoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHdlZW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKpYVHdlZW5lcuWvueixoe+8jOWPr+S7peaUvuWIsGdyb3Vw6YeM5oiW6ICF5omL5Yqo6LCD55SocGxheeaSreaUvu+8jOS4jeS8muiHquWKqOaSreaUvlxuICAgICAqIEBwYXJhbSB0YXJnZXQgbm9kZeWvueixoVxuICAgICAqIEBwYXJhbSBlbmRQb3Mg57uI54K55L2N572u55qEbm9kZVxuICAgICAqIEBwYXJhbSBvZmZzZXQg57uI54K55L2N572u55qE5YGP56e75YC8XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSBwbGF5VGltZXMg5pKt5pS+5qyh5pWw77yM6buY6K6k5pivMVxuICAgICAqIEBwYXJhbSBwaW5nUG9uZyDpu5jorqRmYWxzZVxuICAgICAqIEBwYXJhbSBjdXJ2IOm7mOiupExpbmVyXG4gICAgICogQHBhcmFtIGZpbmlzaENhbGxCYWNrIOm7mOiupOS4uuepulxuICAgICAqIEBwYXJhbSBkZWxheSDpu5jorqQwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBEb01vdmVXb3JsZFBvcyhcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIGVuZFBvczpjYy5Ob2RlfGNjLlZlYzIsXG4gICAgICAgIG9mZnNldDpjYy5WZWMyLFxuICAgICAgICBkdXJhdGlvbjpudW1iZXIsXG4gICAgICAgIHBsYXlUaW1lczpudW1iZXI9MSxcbiAgICAgICAgcGluZ1Bvbmc6Ym9vbGVhbj1mYWxzZSxcbiAgICAgICAgY3Vydj1YVHdlZW5DdXJ2VHlwZS5MaW5lcixcbiAgICAgICAgZmluaXNoQ2FsbEJhY2s9bnVsbCxcbiAgICAgICAgZGVsYXk9MCxcbiAgICAgICAgKTpYVHdlZW5lclxuICAgIHtcbiAgICAgICAgbGV0IHR3ZWVuZXIgPSBuZXcgWFR3ZWVuZXJXb3JsZFBvc2l0aW9uKCk7XG4gICAgICAgIHR3ZWVuZXIuSW5pdCh0YXJnZXQsZW5kUG9zLG9mZnNldCxkdXJhdGlvbixwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgICAgIHR3ZWVuZXIuU2V0RmluaXNoQ2FsbGJhY2soZmluaXNoQ2FsbEJhY2spO1xuICAgICAgICB0d2VlbmVyLlNldERlbGF5KGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHR3ZWVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5LiqWFR3ZWVuZXLlr7nosaHvvIzlj6/ku6XmlL7liLBncm91cOmHjOaIluiAheaJi+WKqOiwg+eUqHBsYXnmkq3mlL7vvIzkuI3kvJroh6rliqjmkq3mlL5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IG5vZGXlr7nosaFcbiAgICAgKiBAcGFyYW0gc3RhcnRWYWx1ZSDlj6/ku6XkvKBudWxsXG4gICAgICogQHBhcmFtIGVuZFZhbHVlIOW/hemhu+acieWAvFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDmjIHnu63ml7bpl7RcbiAgICAgKiBAcGFyYW0gcGxheVRpbWVzIOaSreaUvuasoeaVsO+8jOm7mOiupOaYrzFcbiAgICAgKiBAcGFyYW0gcGluZ1Bvbmcg6buY6K6kZmFsc2VcbiAgICAgKiBAcGFyYW0gY3VydiDpu5jorqRMaW5lclxuICAgICAqIEBwYXJhbSBmaW5pc2hDYWxsQmFjayDpu5jorqTkuLrnqbpcbiAgICAgKiBAcGFyYW0gZGVsYXkg6buY6K6kMFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRG9TY2FsZShcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZW5kVmFsdWU6Y2MuVmVjMixcbiAgICAgICAgZHVyYXRpb246bnVtYmVyLFxuICAgICAgICBwbGF5VGltZXM6bnVtYmVyPTEsXG4gICAgICAgIHBpbmdQb25nOmJvb2xlYW49ZmFsc2UsXG4gICAgICAgIGN1cnY9WFR3ZWVuQ3VydlR5cGUuTGluZXIsXG4gICAgICAgIGZpbmlzaENhbGxCYWNrPW51bGwsXG4gICAgICAgIGRlbGF5PTAsXG4gICAgICAgICk6WFR3ZWVuZXJcbiAgICB7XG4gICAgICAgIGxldCB0d2VlbmVyID0gbmV3IFhUd2VlbmVyU2NhbGUoKTtcbiAgICAgICAgdHdlZW5lci5Jbml0KHRhcmdldCxzdGFydFZhbHVlLGVuZFZhbHVlLGR1cmF0aW9uLHBsYXlUaW1lcyxwaW5nUG9uZyxjdXJ2KTtcbiAgICAgICAgdHdlZW5lci5TZXRGaW5pc2hDYWxsYmFjayhmaW5pc2hDYWxsQmFjayk7XG4gICAgICAgIHR3ZWVuZXIuU2V0RGVsYXkoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHdlZW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuIDkuKpYVHdlZW5lcuWvueixoe+8jOWPr+S7peaUvuWIsGdyb3Vw6YeM5oiW6ICF5omL5Yqo6LCD55SocGxheeaSreaUvu+8jOS4jeS8muiHquWKqOaSreaUvlxuICAgICAqIEBwYXJhbSB0YXJnZXQgbm9kZeWvueixoVxuICAgICAqIEBwYXJhbSBzdGFydFZhbHVlIOWPr+S7peS8oG51bGxcbiAgICAgKiBAcGFyYW0gZW5kVmFsdWUg5b+F6aG75pyJ5YC8XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSBwbGF5VGltZXMg5pKt5pS+5qyh5pWw77yM6buY6K6k5pivMVxuICAgICAqIEBwYXJhbSBwaW5nUG9uZyDpu5jorqRmYWxzZVxuICAgICAqIEBwYXJhbSBjdXJ2IOm7mOiupExpbmVyXG4gICAgICogQHBhcmFtIGZpbmlzaENhbGxCYWNrIOm7mOiupOS4uuepulxuICAgICAqIEBwYXJhbSBkZWxheSDpu5jorqQwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBEb1JvdGF0ZShcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHN0YXJ0VmFsdWU6bnVtYmVyLFxuICAgICAgICBlbmRWYWx1ZTpudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOm51bWJlcixcbiAgICAgICAgcGxheVRpbWVzOm51bWJlcj0xLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuPWZhbHNlLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgICAgICBmaW5pc2hDYWxsQmFjaz1udWxsLFxuICAgICAgICBkZWxheT0wLFxuICAgICAgICApOlhUd2VlbmVyXG4gICAge1xuICAgICAgICBsZXQgdHdlZW5lciA9IG5ldyBYVHdlZW5lclJvdGFpb24oKTtcbiAgICAgICAgdHdlZW5lci5Jbml0KHRhcmdldCxzdGFydFZhbHVlLGVuZFZhbHVlLGR1cmF0aW9uLHBsYXlUaW1lcyxwaW5nUG9uZyxjdXJ2KTtcbiAgICAgICAgdHdlZW5lci5TZXRGaW5pc2hDYWxsYmFjayhmaW5pc2hDYWxsQmFjayk7XG4gICAgICAgIHR3ZWVuZXIuU2V0RGVsYXkoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHdlZW5lcjtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgc3RhdGljIERvQ29sb3IoXG4gICAgLy8gICAgIHRhcmdldDpjYy5Ob2RlLFxuICAgIC8vICAgICBzdGFydFZhbHVlOkFycmF5PG51bWJlcj4sXG4gICAgLy8gICAgIGVuZFZhbHVlOkFycmF5PG51bWJlcj4sXG4gICAgLy8gICAgIGR1cmF0aW9uOm51bWJlcixcbiAgICAvLyAgICAgcGxheVRpbWVzOm51bWJlcj0xLFxuICAgIC8vICAgICBwaW5nUG9uZzpib29sZWFuPWZhbHNlLFxuICAgIC8vICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgIC8vICAgICBmaW5pc2hDYWxsQmFjaz1udWxsLFxuICAgIC8vICAgICBkZWxheT0wLFxuICAgIC8vICAgICApOlhUd2VlbmVyXG4gICAgLy8ge1xuICAgIC8vICAgICBsZXQgdHdlZW5lciA9IG5ldyBYVHdlZW5lckNvbG9yKCk7XG4gICAgLy8gICAgIHR3ZWVuZXIuSW5pdCh0YXJnZXQsc3RhcnRWYWx1ZSxlbmRWYWx1ZSxkdXJhdGlvbixwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgLy8gICAgIHR3ZWVuZXIuU2V0RmluaXNoQ2FsbGJhY2soZmluaXNoQ2FsbEJhY2spO1xuICAgIC8vICAgICB0d2VlbmVyLlNldERlbGF5KGRlbGF5KTtcbiAgICAvLyAgICAgcmV0dXJuIHR3ZWVuZXI7XG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5LiqWFR3ZWVuZXLlr7nosaHvvIzlj6/ku6XmlL7liLBncm91cOmHjOaIluiAheaJi+WKqOiwg+eUqHBsYXnmkq3mlL7vvIzkuI3kvJroh6rliqjmkq3mlL5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebkea1i+eahG5vZGXlr7nosaFcbiAgICAgKiBAcGFyYW0gdmF1bGVDaGFuZ2VDYWxsYmFjayDlvZN2YWx1ZeaUueWPmOaXtueahOWbnuiwg1xuICAgICAqIEBwYXJhbSBzdGFydFZhbHVlIOWhq251bGzlkoww5pWI5p6c5LiA5qC3XG4gICAgICogQHBhcmFtIGVuZFZhbHVlIOW/hemhu+acieWAvFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiDmjIHnu63ml7bpl7RcbiAgICAgKiBAcGFyYW0gcGxheVRpbWVzIOaSreaUvuasoeaVsO+8jOm7mOiupOaYrzFcbiAgICAgKiBAcGFyYW0gcGluZ1Bvbmcg6buY6K6kZmFsc2VcbiAgICAgKiBAcGFyYW0gY3VydiDpu5jorqRMaW5lclxuICAgICAqIEBwYXJhbSBmaW5pc2hDYWxsQmFjayDpu5jorqTkuLrnqbpcbiAgICAgKiBAcGFyYW0gZGVsYXkg6buY6K6kMFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRG9WYWx1ZShcbiAgICAgICAgdGFyZ2V0OmNjLk5vZGUsXG4gICAgICAgIHZhdWxlQ2hhbmdlQ2FsbGJhY2s6KHZhbHVlOm51bWJlcik9PnZvaWQsXG4gICAgICAgIHN0YXJ0VmFsdWU6bnVtYmVyLFxuICAgICAgICBlbmRWYWx1ZTpudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOm51bWJlcixcbiAgICAgICAgcGxheVRpbWVzOm51bWJlcj0xLFxuICAgICAgICBwaW5nUG9uZzpib29sZWFuPWZhbHNlLFxuICAgICAgICBjdXJ2PVhUd2VlbkN1cnZUeXBlLkxpbmVyLFxuICAgICAgICBmaW5pc2hDYWxsQmFjaz1udWxsLFxuICAgICAgICBkZWxheT0wKVxuICAgIHtcbiAgICAgICAgbGV0IHR3ZWVuZXIgPSBuZXcgWFR3ZWVuZXJWYWx1ZSgpO1xuICAgICAgICB0d2VlbmVyLkluaXQodGFyZ2V0LHZhdWxlQ2hhbmdlQ2FsbGJhY2ssc3RhcnRWYWx1ZSxlbmRWYWx1ZSxkdXJhdGlvbixwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgICAgIHR3ZWVuZXIuU2V0RmluaXNoQ2FsbGJhY2soZmluaXNoQ2FsbEJhY2spO1xuICAgICAgICB0d2VlbmVyLlNldERlbGF5KGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHR3ZWVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZKMRG9WYWx1ZeS4jeWQjOeahOWcsOaWueWwseaYr+S8oOWFpeeahOWPguaVsOaYr+aVsOe7hO+8jOS4gOiIrOeUqOS6juminOiJsuWPmOWMlui/meenjemcgOimgeWkmuS4quaVsOWAvOWPmOWMlueahOaXtuWAmVxuICAgICAqIEBwYXJhbSB0YXJnZXQg55uR5rWL55qEbm9kZeWvueixoVxuICAgICAqIEBwYXJhbSB2YXVsZUNoYW5nZUNhbGxiYWNrIOW9k3ZhbHVl5pS55Y+Y5pe255qE5Zue6LCDXG4gICAgICogQHBhcmFtIHN0YXJ0VmFsdWUg5aGrbnVsbOWSjDDmlYjmnpzkuIDmoLdcbiAgICAgKiBAcGFyYW0gZW5kVmFsdWUg5b+F6aG75pyJ5YC8XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSBwbGF5VGltZXMg5pKt5pS+5qyh5pWw77yM6buY6K6k5pivMVxuICAgICAqIEBwYXJhbSBwaW5nUG9uZyDpu5jorqRmYWxzZVxuICAgICAqIEBwYXJhbSBjdXJ2IOm7mOiupExpbmVyXG4gICAgICogQHBhcmFtIGZpbmlzaENhbGxCYWNrIOm7mOiupOS4uuepulxuICAgICAqIEBwYXJhbSBkZWxheSDpu5jorqQwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBEb1ZhbHVlQXJyYXkoXG4gICAgICAgIHRhcmdldDpjYy5Ob2RlLFxuICAgICAgICB2YXVsZUNoYW5nZUNhbGxiYWNrOih2YWx1ZTpBcnJheTxudW1iZXI+KT0+dm9pZCxcbiAgICAgICAgc3RhcnRWYWx1ZTpBcnJheTxudW1iZXI+LFxuICAgICAgICBlbmRWYWx1ZTpBcnJheTxudW1iZXI+LFxuICAgICAgICBkdXJhdGlvbjpudW1iZXIsXG4gICAgICAgIHBsYXlUaW1lczpudW1iZXI9MSxcbiAgICAgICAgcGluZ1Bvbmc6Ym9vbGVhbj1mYWxzZSxcbiAgICAgICAgY3Vydj1YVHdlZW5DdXJ2VHlwZS5MaW5lcixcbiAgICAgICAgZmluaXNoQ2FsbEJhY2s9bnVsbCxcbiAgICAgICAgZGVsYXk9MClcbiAgICB7XG4gICAgICAgIGxldCB0d2VlbmVyID0gbmV3IFhUd2VlbmVyVmFsdWVBcnJheSgpO1xuICAgICAgICB0d2VlbmVyLkluaXQodGFyZ2V0LHZhdWxlQ2hhbmdlQ2FsbGJhY2ssc3RhcnRWYWx1ZSxlbmRWYWx1ZSxkdXJhdGlvbixwbGF5VGltZXMscGluZ1BvbmcsY3Vydik7XG4gICAgICAgIHR3ZWVuZXIuU2V0RmluaXNoQ2FsbGJhY2soZmluaXNoQ2FsbEJhY2spO1xuICAgICAgICB0d2VlbmVyLlNldERlbGF5KGRlbGF5KTtcbiAgICAgICAgcmV0dXJuIHR3ZWVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65LiA5LiqWFR3ZWVuZXJHcm91cO+8jOeUqOadpeWBmuWKqOeUu+e7hOWujOaIkOWkjeadgueahOWKqOeUu1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlWFR3ZWVuZXJHcm91cCgpOlhUd2VlbmVyR3JvdXBcbiAgICB7XG4gICAgICAgIGxldCBncm91cCA9IG5ldyBYVHdlZW5lckdyb3VwKCk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rkuIDkuKpYVHdlZW5lckFjdGlvbu+8jOeUqOadpeWcqHR3ZWVuZXLov4fnqIvkuK3mj5LlhaXmiafooYzkuIDkupvkuovku7bvvIzluKbmnIl4dHdlZW5lcueahOS4gOS6m+eJueaAp1xuICAgICAqIEBwYXJhbSBkZWxheSDpu5jorqQwXG4gICAgICogQHBhcmFtIGFjdGlvbiDkuovku7ZcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFR3ZWVuZXJBY3Rpb24oZGVsYXk6bnVtYmVyLGFjdGlvbjooKT0+dm9pZCk6WFR3ZWVuZXJBY3Rpb25cbiAgICB7XG4gICAgICAgIGxldCB4VHdlZW5lckFjdGlvbiA9IG5ldyBYVHdlZW5lckFjdGlvbigpO1xuICAgICAgICB4VHdlZW5lckFjdGlvbi5TZXREZWxheShkZWxheSk7XG4gICAgICAgIHhUd2VlbmVyQWN0aW9uLlNldEFjdGlvbihhY3Rpb24pO1xuICAgICAgICByZXR1cm4geFR3ZWVuZXJBY3Rpb247XG4gICAgfVxufVxuIl19