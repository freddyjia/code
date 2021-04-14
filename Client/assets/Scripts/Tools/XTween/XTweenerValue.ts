import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";

export default class XTweenerValue extends XTweener 
{
    private startValue:number;
    private endValue:number;
    private vauleChangeCallback:(value:number)=>void;

    public Init(
        target:cc.Node,
        vauleChangeCallback:(value:number)=>void,
        startValue:number,
        endValue:number,
        duration:number,
        playTimes:number,
        pingPong:boolean,
        curv=XTweenCurvType.Liner,
    )
    {
        this.SetTarget(target);
        this.vauleChangeCallback = vauleChangeCallback;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        // this.curvType = curv;
        // this.pingPong = pingPong;
        // this.repeatTimes = playTimes;
        this.InitTweenerData(playTimes,pingPong,curv);
    }

    public Update(deltaTime)
    {
        super.Update(deltaTime);
        if(this.beReplaced == true)
        {
            this.CheckFinish();
            return;
        }
        let value = this.startValue + (this.endValue - this.startValue) * this.animationProgress;
        if(this.vauleChangeCallback != null)
        {
            this.vauleChangeCallback(value);
        }

        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = 0;
        }
    }

    public GetTypeMark()
    {
        return "XTweenerValue";
    }
}
