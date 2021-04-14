import XTweenerIF from "./XTweenerIF";
import { XTweenerState } from "./XTweenGlobal";
import Util from "../../Util";
import UpdateBeat from "../../../Manager/UpdateBeat";

const {ccclass, property} = cc._decorator;

@ccclass
export default class XTweenUpdater //extends cc.Component 
{
    private static m_Instance:XTweenUpdater;

    private tweeners:Array<XTweenerIF> = [];
    public static GetInstance():XTweenUpdater
    {
        if(this.m_Instance == null)
        {
            // let node:cc.Node = new cc.Node("XTweenUpdater");
            // node.setParent(cc.find("Main"));
            // this.m_Instance = node.addComponent(XTweenUpdater);
            this.m_Instance = new XTweenUpdater();
        }
        return this.m_Instance;
    }

    /**
     *
     */
    constructor() {
        // super();
        UpdateBeat.GetInstance().Add((deltaTime)=>{
            this.UpdateFunc(deltaTime);
        });
    }

    public AddTweener(tweener:XTweenerIF)
    {
        this.tweeners.push(tweener);
    }

    public Clear()
    {
        this.tweeners = [];
    }

    private UpdateFunc (deltaTime)
    {
        let tNeedRemove:Array<XTweenerIF> = [];
        for(let i = 0;i<this.tweeners.length;i++)
        {
            let tweener = this.tweeners[i];
            if(tweener.GetState() == XTweenerState.Playing)
            {
                tweener.Update(deltaTime);
            }
            if(tweener.GetState() == XTweenerState.End)
            {
                tNeedRemove.push(tweener);
            }
        }
        for(let i=0;i<tNeedRemove.length;i++)
        {
            let needRemoveTweener = tNeedRemove[i];
            Util.RemoveArray(this.tweeners,needRemoveTweener);
        }
    }
}
