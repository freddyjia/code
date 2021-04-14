import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewOpenNetworking from "../Views/ViewOpenNetworking";
import { ViewNames } from "../MVCRegister";

export default class ControllerOpenNetworking extends Controller 
{
    private view:ViewOpenNetworking;
    public Init()
    {

    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.OpenNetworkLoading)
        {
            if(this.view == null)
            {
                this.view = this.GetView(ViewNames.ViewOpenNetworking) as ViewOpenNetworking;
            }
            if(msgBody["status"] == true)
            {
                this.view.Show(()=>{
                    this.view.Refresh(msgBody["content"]);
                });
            }
            else
            {
                this.view.Hide();
            }
            
        }
    }

}
