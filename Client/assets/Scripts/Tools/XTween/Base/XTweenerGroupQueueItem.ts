import XTweenerIF from "./XTweenerIF";
import { XTweenerState } from "./XTweenGlobal";

export default class XTweenerGroupQueueItem
{
    private listTweeners:Array<XTweenerIF> = [];
    public AddTweener(tweener:XTweenerIF)
    {
        this.listTweeners.push(tweener);
    }

    public Update(deltaTime)
    {
        for(let i=0;i<this.listTweeners.length;i++)
        {
            let tweener = this.listTweeners[i];
            if(tweener.GetState() == XTweenerState.BeforePlay)
            {
                tweener.Play();
            }
            if(tweener.GetState() == XTweenerState.Playing)
            {
                tweener.Update(deltaTime);
            }
        }
    }

    public CheckFinish():boolean
    {
        let finish = true;
        for(let i=0;i<this.listTweeners.length;i++)
        {
            if(this.listTweeners[i].GetState() != XTweenerState.End)
            {
                finish = false;
                break;
            }
        }
        return finish;
    }
}
