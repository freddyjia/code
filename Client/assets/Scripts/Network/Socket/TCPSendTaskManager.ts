import TimerManager from "../../Components/TimerManager";
import Language from "../../Global/Language";
import Toast from "../../Tools/Toast";
// import { PingMsgDefine } from "../../Protos/MessageDefine";

export default class TCPSendTaskManager
{

    private static m_Instance:TCPSendTaskManager;
    public static GetInstance():TCPSendTaskManager
    {
        if(this.m_Instance == null)
        {
            this.m_Instance = new TCPSendTaskManager();
        }
        return this.m_Instance;
    }

    private sessions:{[sessionID:number]:{[seq:number]:TCPSendTask}} = {};
    public InitSession(sessionID)
    {
        // cc.error("InitSession  " + sessionID);
        this.sessions[sessionID] = {};
    }

    public AddTask(sessionID,msgID,seq,dataSend,successCallback:(data:Uint8Array)=>void,failCallback:(errMsg:string)=>void)
    {
        // cc.error("AddTask sessionID  " + sessionID + " seq " + seq);
        let task = new TCPSendTask();
        task.Set(sessionID,msgID,seq,dataSend,successCallback,failCallback);
        this.sessions[sessionID][seq] = task;
    }

    public GetTask(sessionID,seq)
    {
        return this.sessions[sessionID][seq];
    }

    public CancelTask(sessionID,seq)
    {
        // cc.error("CancelTask " + seq);
        let task = this.sessions[sessionID][seq];
        task.CancelTimer();
        delete this.sessions[sessionID][seq];
    }

    public Clean()
    {
        for(let sessionID in this.sessions)
        {
            // for(let seq in this.sessions[sessionID])
            // {
            //     this.sessions[sessionID][seq].CancelTimer();
            // }
            this.CleanSession(sessionID);
        }
        this.sessions = {};
    }

    public CleanSession(sessionID)
    {
        for(let seq in this.sessions[sessionID])
        {
            this.sessions[sessionID][seq].CancelTimer();
        }
        delete(this.sessions[sessionID]);
        this.sessions[sessionID] = null;
    }

}

class TCPSendTask
{
    public sessionID:number;
    public msgID:number;
    public seq:number;
    public dataSend:any;
    public successCallback:(data:Uint8Array)=>void;
    public failCallback:(errMsg:string)=>void;

    private timerID:string;

    public Set(sessionID,msgID,seq,dataSend,successCallback:(data:Uint8Array)=>void,failCallback:(errMsg:string)=>void)
    {
        this.sessionID = sessionID;
        this.msgID = msgID;
        this.seq = seq;
        this.dataSend = dataSend;
        this.successCallback = successCallback;
        this.failCallback = failCallback;

        let timeOut = 20;
        this.timerID = TimerManager.GetInstance().CallActionDelay(()=>{
            if(this.msgID != 1000)
                Toast.Show(Language.text5);
            if(failCallback != null)
            {
                failCallback(Language.text5 + " msgID " + msgID);
            }
            TimerManager.GetInstance().DeleteTimer(this.timerID);
        },timeOut,null,0,0,true);
    }

    public CancelTimer()
    {
        TimerManager.GetInstance().DeleteTimer(this.timerID);
    }
}
