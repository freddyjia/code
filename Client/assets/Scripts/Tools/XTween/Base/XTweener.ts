import { XTweenCurvType, XTweenCurv } from "./XTweenCurv";
import XTweenerIF from "./XTweenerIF";
import { XTweenerState } from "./XTweenGlobal";
import XTweenUpdater from "./XTweenUpdater";
import XTweenObserver from "./XTweenObserver";


export default class XTweener implements XTweenerIF
{
    private data:any = null;
    private state:XTweenerState = XTweenerState.BeforePlay;
    private delay:number = 0;
    private startCallback:()=>void = null;
    private finishCallback:()=>void = null;
    private controlByParent:boolean = false;
    private speed:number = 1;
    public shouldCallback:boolean = true;
    public beReplaced:boolean = false;
    public target:cc.Node = null;
    private observer:XTweenObserver = null;
    private gameObjectDisable:boolean = false;
    protected duration:number = 0;
    private shouldFinishCallbackWhenDisable:boolean = false;
    private currentTime:number = 0;
    private timeProgress:number = 0;
    protected pingPong:boolean = false;
    private currentRepeatTimes:number = 0;
    protected repeatTimes:number = 1;
    protected animationProgress:number = 0;
    protected curvType:XTweenCurvType = XTweenCurvType.Liner;
    private tCustomCurv:Array<number> = null;
    private shouldNotFinishWhenDisable = false;

    protected InitTweenerData(
        playTimes:number,
        pingPong:boolean,
        curv=XTweenCurvType.Liner)
    {
        if(playTimes == null)
        {
            playTimes = 1;
        }

        if(pingPong == null)
        {
            pingPong = false;
        }

        if(curv == null)
        {
            curv = XTweenCurvType.Liner;
        }

        this.repeatTimes = playTimes;
        this.pingPong = pingPong;
        this.curvType = curv;

    }

    //interface
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
        if (this.controlByParent == false)
        {
            XTweenUpdater.GetInstance().AddTweener(this as XTweenerIF);
        }

        this.OnPlay();
    }

    protected OnPlay()
    {

    }


    public Finish(shouldCallback:boolean=true)
    {
        this.state = XTweenerState.End;
        this.shouldCallback = shouldCallback;
    }
    public Pause()
    {
        if (this.state == XTweenerState.Playing)
            this.state = XTweenerState.Pause;
    }
    public Resume()
    {
        if (this.state == XTweenerState.Pause)
            this.state = XTweenerState.Playing;
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
    
    public Update(deltaTime:number)
    {
        this.currentTime += deltaTime * this.speed;
        if(this.duration < 0.01)
        {
            if(this.currentTime > this.delay)
            {
                this.timeProgress = 1;
            }
            else
            {
                this.timeProgress = 0;
            }
        }
        else
        {
            if(this.pingPong == true && this.currentTime > this.duration)
            {
                this.timeProgress = (this.currentTime - this.delay - this.duration) / this.duration;
                this.timeProgress = 1 - this.timeProgress;
            }
            else
            {
                this.timeProgress = (this.currentTime - this.delay) / this.duration;
            }
        }
        if(this.timeProgress < 0)
        {
            this.timeProgress = 0;
        }
        else if(this.timeProgress > 1)
        {
            this.timeProgress = 1;
        }

        if(this.currentTime >= this.delay + this.duration * (this.pingPong == true ? 2 : 1))
        {
            this.currentRepeatTimes ++;
            if(this.currentRepeatTimes >= this.repeatTimes && this.repeatTimes != -1)
            {
                this.state = XTweenerState.End;
            }
            else
            {
                this.currentTime = this.delay;
            }
        }
        this.animationProgress = XTweenCurv.GetProgress(this.curvType, this.timeProgress, this.tCustomCurv);
    }

    public SetControlByParent()
    {
        this.controlByParent = true;
    }

    public GetControlByParent():boolean
    {
        return this.controlByParent;
    }

    public BeReplaced()
    {
        this.beReplaced = true;
    }

    public GetTypeMark()
    {
        return "XTweener";
    }

    public OnDestroy()
    {
        this.state = XTweenerState.End;
    }

    public OnEnable()
    {
        this.gameObjectDisable = false;
    }

    public OnDisable()
    {
        if(this.shouldNotFinishWhenDisable == true)
            return;
        this.state = XTweenerState.End;
        this.gameObjectDisable = true;
    }

    private AddObserver()
    {
        this.observer = this.target.getComponent(XTweenObserver);
        if(this.observer == null)
        {
            this.observer = this.target.addComponent(XTweenObserver);
        }
    }

    public SetTarget(target:cc.Node)
    {
        this.target = target;
        if(this.observer == null)
        {
            this.AddObserver();
        }
        this.observer.AddXTweener(this);
    }

    public SetCustomCurv(curv:Array<number>)
    {
        this.tCustomCurv = curv;
    }

    public SetTime(time:number)
    {
        this.duration = time;
    }

    public SetShouldNotFinishWhenDisable()
    {
        this.shouldNotFinishWhenDisable = true;
    }

    public SetShouldFinishCallbackWhenDisable()
    {
        this.shouldFinishCallbackWhenDisable = true;
    }

    public CheckFinish()
    {
        if(this.state == XTweenerState.End)
        {
            this.observer.RemoveTweener(this);

            if(this.finishCallback != null 
                && this.shouldCallback == true 
                && (this.gameObjectDisable == false || (this.gameObjectDisable == true && this.shouldFinishCallbackWhenDisable == true)))
            {
                this.finishCallback();
            }
        }
        
    }

}
