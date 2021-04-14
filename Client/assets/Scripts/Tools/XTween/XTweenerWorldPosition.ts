import XTweener from "./Base/XTweener";
import { XTweenCurvType } from "./Base/XTweenCurv";


export default class XTweenerWorldPosition extends XTweener 
{
    // private endPosNode:cc.Node;
    private endPos:cc.Vec2;
    private startPos:cc.Vec2;
    private vec2Tmp:cc.Vec2 = cc.Vec2.ZERO;

    public Init(
        target:cc.Node,
        endPos:cc.Node|cc.Vec2,
        offset:cc.Vec2,
        duration:number,
        playTimes:number,
        pingPong:boolean,
        curv=XTweenCurvType.Liner,
    )
    {
        this.SetTarget(target);

        if(endPos instanceof cc.Vec2)
        {
            this.endPos = endPos;
        }
        else
        {
            this.endPos = endPos.convertToWorldSpaceAR(cc.Vec2.ZERO);
        }
        
        this.endPos.x += offset.x;
        this.endPos.y += offset.y;

        this.startPos = target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.duration = duration;

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
        this.vec2Tmp.x = this.startPos.x + (this.endPos.x - this.startPos.x) * this.animationProgress;
        this.vec2Tmp.y = this.startPos.y + (this.endPos.y - this.startPos.y) * this.animationProgress;

        let localPos = this.target.parent.convertToNodeSpaceAR(this.vec2Tmp);
        this.target.position = localPos;
        // this.target.position = this.vec2Tmp;
        this.CheckFinish();
    }

    public OnPlay()
    {
        // if(this.startValue == null)
        // {
        //     this.startValue = this.target.position;
        // }
    }

    public GetTypeMark()
    {
        return "XTweenerWorldPosition";
    }
}
