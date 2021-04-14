import Model from "../../MVCFramework/Model";
import TCPNetwork, { TCPSessionID } from "../../Network/Socket/TCPNetwork";
import MessageNames from "../MessageNames";
import Toast from "../../Tools/Toast";
import TimerManager from "../../Components/TimerManager";
import { PingReq } from "../../Protos/Ping";
import { PingMsgDefine } from "../../Protos/MessageDefine";
import Language from "../../Global/Language";
import { LoginReq, LoginRes } from "../../Protos/BankProxy";
import { BankProxyMsgDefine } from "../../Protos/MessageDefine_BankProxy";

export default class ModelChat extends Model 
{
    private date = new Date();
    private pingTimer;
    private lastSendPingTime;
    private selfPlayerId:string;

    public Init()
    {
    }

    public Clean()
    {
    }

    public SetSelfPlayerID(playerId)
    {
        this.selfPlayerId = playerId;
    }

    // 连接和登录
    public StartLogin()
    {
        TCPNetwork.GetInstance().Connect(TCPSessionID.Hall, window["ip"], window["port"], 
        ()=>{
            cc.log("连接服务器成功");

            this.InitPing();

            // 链接成功，开始尝试登录
            let req = LoginReq.create();
            req.playerId = this.selfPlayerId;
            let reqData = LoginReq.encode(req).finish();
            TCPNetwork.GetInstance().Send(
                TCPSessionID.Hall, 
                BankProxyMsgDefine.MSG_BankProxy_Login,
                reqData,
                (data)=>{
                    let resData = LoginRes.decode(data);
                    if (resData.success)
                    {
                        cc.log("登录服务器成功");
                        this.SendMessage(MessageNames.ShowAppStartView);
                    }
                    else
                    {
                        cc.log("连接服务器失败:",resData.tips);
                        Toast.Show(resData.tips);
                    }
                },
                ()=>{

                }
            );
        },
        ()=>{
            Toast.Show(Language.text4);
        });
    }

    public InitPing()
    {
        TimerManager.GetInstance().DeleteTimer(this.pingTimer);

        this.lastSendPingTime = Date.now();

        this.pingTimer = TimerManager.GetInstance().CallActionDelay(()=>{
            let timeNow = Date.now()
            if(timeNow - this.lastSendPingTime > 3000)
            {
                this.SendPing(()=>{
                    // this.ResetPingChecker();
                });
                this.lastSendPingTime = timeNow;
            }
            
        },5,null,-1,5,true);
    }

    private SendPing(funcSuccess)
    {
        let req = PingReq.create();
        req.timestamp = this.date.getDate();
        let senddata = PingReq.encode(req).finish();
        TCPNetwork.GetInstance().Send(TCPSessionID.Hall,PingMsgDefine.MSG_PING,senddata,(data)=>{
            funcSuccess();
        },(errmsg)=>{

        },true);

    }
}