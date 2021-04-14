import UpdateBeat from "../Manager/UpdateBeat";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerManager
{
    private id:number = 0;
    private dicTimers:{[id:number]:TimerEvent} = {};
    private listIDWaitToRemove:Array<string> = [];

    private static m_Instance:TimerManager;

    public static GetInstance():TimerManager
    {
        if(this.m_Instance == null)
        {
            // let node:cc.Node = new cc.Node("TimerManager");
            // node.setParent(cc.find("Main"));
            // this.m_Instance = node.addComponent(TimerManager);
            this.m_Instance = new TimerManager();
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

    private DeleteTimerEvents()
    {
        if(this.listIDWaitToRemove.length == 0)
            return;
        for(let i = 0;i<this.listIDWaitToRemove.length;i++)
        {
            delete this.dicTimers[this.listIDWaitToRemove[i]];
        }
        this.listIDWaitToRemove = [];
    }

    private UpdateFunc(dt: number)
    {
        this.DeleteTimerEvents();
        
        for(let id in this.dicTimers)
        {
            let timerEvent = this.dicTimers[id];

            timerEvent.timeCal += dt;
            if(timerEvent.timeCal > timerEvent.delay && timerEvent.haveRunDelayAction == false)
            {
                timerEvent.haveRunDelayAction = true;
                timerEvent.action(timerEvent.parm);
            }

            if(timerEvent.repeatTimes != 1)
            {
                if(timerEvent.timeCal > timerEvent.delay + (timerEvent.currentTime + 1) * timerEvent.interval)
                {
                    timerEvent.action(timerEvent.parm);
                    timerEvent.currentTime ++;
                }
            }
            if(timerEvent.repeatTimes != -1)
            {
                if(timerEvent.haveRunDelayAction == true && timerEvent.currentTime >= timerEvent.repeatTimes - 1)
                {
                    this.listIDWaitToRemove.push(timerEvent.id);
                }
            }
        }

        this.DeleteTimerEvents();
    }

    /**
     * 创建定时器，返回定时器id，用于手动清除。如果不执行手动删除其会自动清除。
     * @param [action] 延时执行的方法
     * @param [delay] 单位是秒
     * @param [parm] action传入参数,默认null
     * @param [repeatTimes] 总过执行次数，0和1作用一样，大于1才会执行多次
     * @param [interval] 延时执行后重复的间隔,0为interval=delay，默认0
     * @param [keepAlive] true=保持计时器不被清除，必须调用指定的方法才能清除这个计时器，默认false
     */
    public CallActionDelay(action:(obj:any)=>void,delay:number,parm=null,repeatTimes:number=1,interval=0,keepAlive=false)
    {
        if(delay == 0)
        {
            delay = 0.01;
        }
        if(repeatTimes <= -1)
        {
            repeatTimes = -1;
        }

        if(repeatTimes == 0)
        {
            repeatTimes = 1;
        }

        if(interval <= 0 || interval == null)
        {
            interval = delay;
        }
        let timerEvent:TimerEvent = new TimerEvent();
        timerEvent.id = this.id.toString();
        timerEvent.action = action;
        timerEvent.delay = delay;
        timerEvent.parm = parm;
        timerEvent.repeatTimes = repeatTimes;
        timerEvent.interval = interval;
        timerEvent.keepAlive = keepAlive;
        this.dicTimers[timerEvent.id] = timerEvent;
        
        this.id++;

        return timerEvent.id;
    }

    /**
     * 手动删除定时器
     * @param [id] 定时器id
     */
    public DeleteTimer(id:string)
    {
        if(id == null)
        {
            return;
        }
        if(this.dicTimers[id] != null)
            this.listIDWaitToRemove.push(id);
    }

    
    public ClearAll()
    {
        for(let key in this.dicTimers)
        {
            this.DeleteTimer(key);
        }
    }

    public ClearAllButKeepLive()
    {
        for(let key in this.dicTimers)
        {
            if(this.dicTimers[key].keepAlive == false)
                this.DeleteTimer(key);
        }
    }
    
}

class TimerEvent
{
    public id:string;
    public delay:number = 0;
    public interval:number = 0;
    public action:(any)=>void = null;
    public parm:any = null;
    public repeatTimes:number = 0;
    //计时器
    public timeCal:number = 0;
    //当前repeate次数
    public currentTime:number = 0;
    public keepAlive:boolean = false;
    public haveRunDelayAction = false;
}
