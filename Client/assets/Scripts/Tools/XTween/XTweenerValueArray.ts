import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";

export default class XTweenerValueArray extends XTweener 
{
    private startValue:Array<number>;
    private endValue:Array<number>;

    private tmpValue:Array<number>;

    private vauleChangeCallback:(value:Array<number>)=>void;

    public Init(
        target:cc.Node,
        vauleChangeCallback:(value:Array<number>)=>void,
        startValue:Array<number>,
        endValue:Array<number>,
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

        this.tmpValue = [this.endValue.length];

    }

    public Update(deltaTime)
    {
        super.Update(deltaTime);
        if(this.beReplaced == true)
        {
            this.CheckFinish();
            return;
        }
        for(let i=0;i<this.endValue.length;i++)
        {
            this.tmpValue[i] = this.startValue[i] + (this.endValue[i] - this.startValue[i]) * this.animationProgress;
        }

        if(this.vauleChangeCallback != null)
        {
            this.vauleChangeCallback(this.tmpValue);
        }

        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = [this.endValue.length];
        }
    }

    public GetTypeMark()
    {
        return "XTweenerValue";
    }
}
