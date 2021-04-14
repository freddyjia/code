import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";


export default class XTweenerColor extends XTweener 
{
    private startValue:Array<number>;
    private endValue:Array<number>;

    private colorTmp:cc.Color = new cc.Color();

    public Init(
        target:cc.Node,
        startValue:Array<number>,
        endValue:Array<number>,
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
        this.colorTmp.setR(this.startValue[0] + (this.endValue[0] - this.startValue[0]) * this.animationProgress);
        this.colorTmp.setG(this.startValue[1] + (this.endValue[1] - this.startValue[1]) * this.animationProgress);
        this.colorTmp.setB(this.startValue[2] + (this.endValue[2] - this.startValue[2]) * this.animationProgress);
        this.colorTmp.setA(this.startValue[3] + (this.endValue[3] - this.startValue[3]) * this.animationProgress);

        this.target.color = this.colorTmp;
        this.CheckFinish();
    }

    public OnPlay()
    {
        if(this.startValue == null)
        {
            this.startValue = [255,255,255,255];
        }
    }

    public GetTypeMark()
    {
        return "XTweenerColor";
    }
}
