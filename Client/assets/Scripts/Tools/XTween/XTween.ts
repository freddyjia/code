import XTweener from "./Base/XTweener";
import XTweenerPosition from "./XTweenerPosition";

import XTweenerRotaion from "./XTweenerRotaion";
import XTweenerColor from "./XTweenerColor";

import { XTweenCurvType } from "./Base/XTweenCurv";
import XTweenerScale from "./XTweenerScale";
import XTweenerGroup, { XTweenerGroupAddMode } from "./Base/XTweenerGroup";
import XTweenerValue from "./XTweenerValue";
import XTweenerValueArray from "./XTweenerValueArray";
import XTweenerAction from "./XTweenerAction";
import XTweenerWorldPosition from "./XTweenerWorldPosition";

export default class XTween 
{
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
    public static DoMove(
        target:cc.Node,
        startValue:cc.Vec2,
        endValue:cc.Vec2,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0,
        ):XTweener
    {
        let tweener = new XTweenerPosition();
        tweener.Init(target,startValue,endValue,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    }

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
    public static DoMoveWorldPos(
        target:cc.Node,
        endPos:cc.Node|cc.Vec2,
        offset:cc.Vec2,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0,
        ):XTweener
    {
        let tweener = new XTweenerWorldPosition();
        tweener.Init(target,endPos,offset,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
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
    public static DoScale(
        target:cc.Node,
        startValue:cc.Vec2,
        endValue:cc.Vec2,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0,
        ):XTweener
    {
        let tweener = new XTweenerScale();
        tweener.Init(target,startValue,endValue,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
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
    public static DoRotate(
        target:cc.Node,
        startValue:number,
        endValue:number,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0,
        ):XTweener
    {
        let tweener = new XTweenerRotaion();
        tweener.Init(target,startValue,endValue,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    }

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
    public static DoValue(
        target:cc.Node,
        vauleChangeCallback:(value:number)=>void,
        startValue:number,
        endValue:number,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0)
    {
        let tweener = new XTweenerValue();
        tweener.Init(target,vauleChangeCallback,startValue,endValue,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    }

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
    public static DoValueArray(
        target:cc.Node,
        vauleChangeCallback:(value:Array<number>)=>void,
        startValue:Array<number>,
        endValue:Array<number>,
        duration:number,
        playTimes:number=1,
        pingPong:boolean=false,
        curv=XTweenCurvType.Liner,
        finishCallBack=null,
        delay=0)
    {
        let tweener = new XTweenerValueArray();
        tweener.Init(target,vauleChangeCallback,startValue,endValue,duration,playTimes,pingPong,curv);
        tweener.SetFinishCallback(finishCallBack);
        tweener.SetDelay(delay);
        return tweener;
    }

    /**
     * 创建一个XTweenerGroup，用来做动画组完成复杂的动画
     */
    public static CreateXTweenerGroup():XTweenerGroup
    {
        let group = new XTweenerGroup();
        return group;
    }

    /**
     * 创建一个XTweenerAction，用来在tweener过程中插入执行一些事件，带有xtweener的一些特性
     * @param delay 默认0
     * @param action 事件
     */
    public static GetTweenerAction(delay:number,action:()=>void):XTweenerAction
    {
        let xTweenerAction = new XTweenerAction();
        xTweenerAction.SetDelay(delay);
        xTweenerAction.SetAction(action);
        return xTweenerAction;
    }
}
