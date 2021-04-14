import { XTweenerState } from "./XTweenGlobal";

export default interface XTweenerIF
{
    SetTweenerData(data);
    GetTweenerData();
    SetDelay(delay:number);
    GetDelay();
    Play();
    Finish(shouldCallback:boolean);
    Pause();
    Resume();
    SetSpeed(speed:number);
    SetStartCallback(startCallback:()=>void);
    SetFinishCallback(finishCallback:()=>void);
    GetState():XTweenerState;
    SetControlByParent();
    Update(deltaTime:number);
    GetTypeMark():string;
    GetControlByParent():boolean;
    BeReplaced();
    OnEnable();
    OnDisable();
    OnDestroy();
}
