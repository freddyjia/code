import MessageCenter from "../MVCFramework/MessageCenter";
import MessageNames from "../Modules/MessageNames";

export default class Toast 
{
    public static Show(content)
    {
        MessageCenter.SendMessage(MessageNames.ShowToastUI,content)
    }

}
