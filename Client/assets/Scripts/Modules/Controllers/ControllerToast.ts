import Controller from "../../MVCFramework/Controller";
import ViewToast from "../Views/ViewToast";
import MessageNames from "../MessageNames";
import { ViewNames } from "../MVCRegister";

export default class ControllerToast extends Controller
{
    private view:ViewToast;
    public Init()
    {

    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.ShowToastUI)
        {
            if(this.view == null)
            {
                this.view = this.GetView(ViewNames.ViewToast) as ViewToast;
            }
            this.view.Show(()=>{
                this.view.AddToast(msgBody as string);
            });
        }
    }
}
