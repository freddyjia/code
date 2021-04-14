import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";


export default class XTweenerRotaion extends XTweener 
{
    private startValue:number;
    private endValue:number;

    public Init(
        target:cc.Node,
        startValue:number,
        endValue:number,
        duration:number,
        playTimes:number,
        pingPong:boolean,
        curv=XTweenCurvType.Liner,
    )
    {
        this.SetTarget(target);
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
        this.target.rotation = this.startValue + (this.endValue - this.startValue) * this.animationProgress;

        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = this.target.rotation;
        }
    }

    public GetTypeMark()
    {
        return "XTweenerRotaion";
    }
}
