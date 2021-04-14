import XTweener from "./XTweener";
import XTweenerIF from "./XTweenerIF";
import Util from "../../Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class XTweenObserver extends cc.Component 
{
    private listTweeners:Array<XTweenerIF> = [];

    public GetListTweeners()
    {
        return this.listTweeners;
    }

    public AddXTweener(xTweener:XTweenerIF)
    {
        for(let i=0;i<this.listTweeners.length;i++)
        {
            let tweener = this.listTweeners[i];
            if(tweener.GetTypeMark() == xTweener.GetTypeMark() && xTweener.GetControlByParent())
            {
                tweener.BeReplaced();
                break;
            }
        }
        this.listTweeners.push(xTweener);
    }

    public RemoveTweener(xTweener:XTweenerIF)
    {
        // for(let i=0;i<this.listTweeners.length;i++)
        // {
        //     let tweener = this.listTweeners[i];
        //     if(tweener == xTweener)
        //     {
        //         Util.RemoveArray(this.listTweeners,)
        //     }
        // }
        Util.RemoveArray(this.listTweeners,xTweener);
    }

    onEnable()
    {
        for(let i=0;i<this.listTweeners.length;i++)
        {
            let tweener = this.listTweeners[i];
            tweener.OnEnable();
        }
    }

    onDisable()
    {
        for(let i=0;i<this.listTweeners.length;i++)
        {
            let tweener = this.listTweeners[i];
            tweener.OnDisable();
        }
    }

    onDestroy()
    {
        for(let i=0;i<this.listTweeners.length;i++)
        {
            let tweener = this.listTweeners[i];
            tweener.OnDestroy();
        }
    }

}
