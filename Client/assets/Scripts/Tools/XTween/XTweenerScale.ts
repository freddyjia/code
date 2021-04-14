import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";


export default class XTweenerScale extends XTweener 
{
    private startValue:cc.Vec2;
    private endValue:cc.Vec2;

    public Init(
        target:cc.Node,
        startValue:cc.Vec2,
        endValue:cc.Vec2,
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
        this.target.scaleX = this.startValue.x + (this.endValue.x - this.startValue.x) * this.animationProgress;
        this.target.scaleY = this.startValue.y + (this.endValue.y - this.startValue.y) * this.animationProgress;

        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = cc.Vec2.ONE;
            this.startValue.x = this.target.scaleX;
            this.startValue.y = this.target.scaleY;
        }
    }

    public GetTypeMark()
    {
        return "XTweenerScale";
    }
}
