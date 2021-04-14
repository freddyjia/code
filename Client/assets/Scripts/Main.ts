/***********************************************************************************
 * 银行充值App
 ***********************************************************************************/

import { JsGetUrlParms } from "./JsTool/JsGetUrlParms";
import MessageNames from "./Modules/MessageNames";
import MessageCenter from "./MVCFramework/MessageCenter";
import MVCFramework from "./MVCFramework/MVCFramework";
import AudioManager from "./Manager/AudioManager";
import OpenNetworkingUI from "./Tools/OpenNetworkingUI";
import { ImageTool } from "./JsTool/ImageTool";
import TCPNetwork, { TCPSessionID } from "./Network/Socket/TCPNetwork";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    onLoad () 
    {   
        JsGetUrlParms.SetUrlParmsToWindow();
        AudioManager.GetInstance().Init();
        MVCFramework.Init();
        TCPNetwork.GetInstance().Init(TCPSessionID.Hall);

        //会从app带过来这5个参数
        cc.log(window["ip"], window["port"], window["token"], window["selfId"], window["proxyId"]);

        MessageCenter.SendMessage(MessageNames.StartLogin);
        OpenNetworkingUI.Show();
        ImageTool.Init();        
    }

}
