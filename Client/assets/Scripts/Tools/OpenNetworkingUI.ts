import MessageCenter from "../MVCFramework/MessageCenter";
import MessageNames from "../Modules/MessageNames";

export default class OpenNetworkingUI 
{
    public static Show(msg="")
    {
        // cc.error("OpenNetworkingUI Show ");
        MessageCenter.SendMessage(MessageNames.OpenNetworkLoading, { status : true, content:msg })
    }

    public static Hide()
    {
        MessageCenter.SendMessage(MessageNames.OpenNetworkLoading, { status : false, content:"" })
    }

}
