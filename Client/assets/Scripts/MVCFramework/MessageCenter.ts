import ControllerManager from "./ControllerManager";
import { MVCRegister } from "../Modules/MVCRegister";

export default class MessageCenter 
{
    private static dicMsgs: { [key: string]: { [key: number]: (message: string,msgBody:any) => void }  } = {};
    private static dicMessageName: { [key: number]: string } = {};
    private static dicMsgToController :{[key: string]: Array<string>} = {};
    private static eventid:number = 0;

    //从 controllername:msgs 转变为 msg:controllers
    public static RegisterControllerMsgListening(controllerMsgsDic:{[key: string]: Array<string>})
    {
        this.dicMsgToController = {};
        
        // let dicMsgToController :{[key: string]: string} = {};
        for(let controllerName in controllerMsgsDic)
        {
            let msgs:Array<string> = controllerMsgsDic[controllerName];
            for(let i = 0;i<msgs.length;i++)
            {
                let msg = msgs[i];
                if(this.dicMsgToController[msg] == null)
                {
                    this.dicMsgToController[msg] = new Array<string>();
                }
                this.dicMsgToController[msg].push(controllerName);
            }
        }
    }
    
    public static Clean()
    {
        this.dicMsgs = {};
        this.dicMessageName = {};
        this.dicMsgToController = {};
        this.eventid = 0;
    }

    public static Init()
    {
        //todo
        this.RegisterControllerMsgListening(MVCRegister.dicControllerMsgListening);
    }

    public static SendMessage(message:string,msgBody?:any)
    {
        if(this.dicMsgs[message] != null)
        {
            let funcs = this.dicMsgs[message];
            for(let eventid in funcs)
            {
                if(funcs[eventid] != null)
                    funcs[eventid](message,msgBody);
            }
        }

        if(this.dicMsgToController[message] != null)
        {
            let controllers = this.dicMsgToController[message];
            for(let i = 0;i<controllers.length;i++)
            {
                ControllerManager.OnReceiveMessage(controllers[i],message,msgBody)
            }
        }
    }

    public static AddListener(message:string,func:(string,any) => void):number
    {
        this.eventid ++;

        if(this.dicMsgs[message] == null)
        {
            let funcs:{ [key: number]: (string,any) => void } = {};
            this.dicMsgs[message] = funcs;
        }
        this.dicMsgs[message][this.eventid] = func;
        this.dicMessageName[this.eventid] = message;
        return this.eventid;
    }

    public static RemoveListener(eventid:number)
    {
        let message = this.dicMessageName[eventid];
        if(this.dicMsgs[message] != null)
        {
            delete this.dicMsgs[message][eventid];
            delete this.dicMessageName[eventid];
        }
    }
}
