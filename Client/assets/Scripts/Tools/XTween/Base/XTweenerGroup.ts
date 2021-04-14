import XTweenerIF from "./XTweenerIF";
import { XTweenerState } from "./XTweenGlobal";
import XTweenUpdater from "./XTweenUpdater";
import XTweenerGroupQueueItem from "./XTweenerGroupQueueItem";
import Util from "../../Util";
import XTweenObserver from "./XTweenObserver";

export default class XTweenerGroup implements XTweenerIF
{
    private data:any;
    private delay:number = 0;
    private state:XTweenerState = XTweenerState.BeforePlay;
    private controlByParent:boolean = false;
    private startCallback:()=>void;
    private finishCallback:()=>void;
    private listQueueItems:Array<XTweenerGroupQueueItem> = [];
    private observer:XTweenObserver;
    private speed = 1;
    private shouldCallback:boolean = true;

    public SetTweenerData(data)
    {
        this.data = data;
    }
    public GetTweenerData()
    {
        return this.data;
    }
    public SetDelay(delay:number)
    {
        this.delay = delay;
    }
    public GetDelay()
    {
        return this.delay;
    }
    public Play()
    {
        if(this.state == XTweenerState.BeforePlay)
        {
            if(this.startCallback != null)
            {
                this.startCallback();
            }
        }
        this.state = XTweenerState.Playing;
        if(this.controlByParent == false)
        {
            XTweenUpdater.GetInstance().AddTweener(this);
        }
    }
    
    public Finish(shouldCallback:boolean=true)
    {
        this.state = XTweenerState.End;
        this.shouldCallback = shouldCallback;
    }
    public Pause()
    {
        if(this.state == XTweenerState.Playing)
        {
            this.state = XTweenerState.Pause;
        }
    }
    public Resume()
    {
        if(this.state == XTweenerState.Pause)
        {
            this.state = XTweenerState.Playing;
        }
    }
    public SetSpeed(speed:number)
    {
        this.speed = speed;
    }
    public SetStartCallback(startCallback:()=>void)
    {
        this.startCallback = startCallback;
    }
    public SetFinishCallback(finishCallback:()=>void)
    {
        this.finishCallback = finishCallback;
    }
    public GetState():XTweenerState
    {
        return this.state;
    }
    public SetControlByParent()
    {
        this.controlByParent = true;
    }
    public Update(deltaTime:number)
    {
        if(this.state == XTweenerState.End)
            return;
        if(this.listQueueItems.length > 0)
        {
            this.listQueueItems[0].Update(deltaTime);
            if(this.listQueueItems[0].CheckFinish() == true)
            {
                Util.RemoveArray(this.listQueueItems,0);
            }
        }

        if(this.listQueueItems.length == 0)
        {
            this.state = XTweenerState.End;
        }
        if(this.state == XTweenerState.End)
        {
            if(this.observer != null)
            {
                this.observer.RemoveTweener(this);
            }

            if(this.finishCallback != null && this.shouldCallback == true)
            {
                this.finishCallback();
            }
        }
    }
    public GetTypeMark():string
    {
        return "XTweenerGroup";
    }
    public GetControlByParent():boolean
    {
        return this.controlByParent;
    }

    public AddTweener(tweener:XTweenerIF, addMode:XTweenerGroupAddMode)
    {
        tweener.SetControlByParent();
        let queueItem = null;
        if(addMode == XTweenerGroupAddMode.Queue || this.listQueueItems.length == 0)
        {
            queueItem = new XTweenerGroupQueueItem();
            this.listQueueItems.push(queueItem);
        }
        else
        {
            queueItem = this.listQueueItems[this.listQueueItems.length - 1];
        }
        queueItem.AddTweener(tweener);
    }

    public BeReplaced()
    {
        //do nothing
    }
    public OnEnable()
    {
        //do nothing
    }
    public OnDisable()
    {
        //终止整个tween
        this.state = XTweenerState.End;
        this.observer.RemoveTweener(this);
    }
    public OnDestroy()
    {
        //终止整个tween
        this.state = XTweenerState.End;
        this.observer.RemoveTweener(this);
    }

    /**
     * 增加ObserverObj后，如果ObserverObj active改变成false，就会停止后续的回调
     * @param target 
     */
    public AddObserverObj(target:cc.Node)
    {
        this.observer = target.getComponent(XTweenObserver);
        if(this.observer == null)
        {
            this.observer = target.addComponent(XTweenObserver);
        }
        this.observer.AddXTweener(this);
    }
}

export class XTweenerGroupAddMode
{
    public static Queue = 1;
    public static Parallel = 2;
}