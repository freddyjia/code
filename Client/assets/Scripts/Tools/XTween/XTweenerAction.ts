import XTweenerIF from "./Base/XTweenerIF";
import { XTweenerState } from "./Base/XTweenGlobal";

export default class XTweenerAction implements XTweenerIF 
{
    private data:any;
    private delay:number = 0;
    private state:XTweenerState = XTweenerState.BeforePlay;
    private controlByParent:boolean = false;
    private startCallback:()=>void;
    private finishCallback:()=>void;
    private speed = 1;
    private shouldCallback:boolean = true;
    private currentTime:number = 0;
    private action:()=>void;

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
        this.currentTime += deltaTime * this.speed;
        if(this.currentTime >= this.delay)
        {
            if(this.action != null)
            {
                this.action();
            }
            if(this.finishCallback != null && this.shouldCallback == true)
            {
                this.finishCallback();
            }

            this.state = XTweenerState.End;
        }
    }
    public GetTypeMark():string
    {
        return "XTweenerAction";
    }
    public GetControlByParent():boolean
    {
        return this.controlByParent;
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
    }
    public OnDestroy()
    {
        //终止整个tween
        this.state = XTweenerState.End;
    }

    public SetAction(action:()=>void)
    {
        this.action = action;
    }

}
