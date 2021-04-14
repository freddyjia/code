import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";


export default class XTweenerPosition extends XTweener 
{
    private startValue:cc.Vec2;
    private endValue:cc.Vec2;

    private vec2Tmp:cc.Vec2 = cc.Vec2.ZERO;

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
        this.InitTweenerData(playTimes,pingPong,curv);
        // this.curvType = curv;
        // this.pingPong = pingPong;
        // this.repeatTimes = playTimes;
    }

    public Update(deltaTime)
    {
        super.Update(deltaTime);
        if(this.beReplaced == true)
        {
            this.CheckFinish();
            return;
        }
        this.vec2Tmp.x = this.startValue.x + (this.endValue.x - this.startValue.x) * this.animationProgress;
        this.vec2Tmp.y = this.startValue.y + (this.endValue.y - this.startValue.y) * this.animationProgress;

        this.target.position = this.vec2Tmp;
        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = this.target.position;
        }
    }

    public GetTypeMark()
    {
        return "XTweenerPosition";
    }
}
