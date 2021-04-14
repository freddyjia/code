import Controller from "../../MVCFramework/Controller";
import ViewDialogNormal from "../Views/ViewDialogNormal";
import MessageNames from "../MessageNames";
import { ViewNames } from "../MVCRegister";
import { DialogData } from "../../Tools/Dialog";

export default class ControllerDialogNormal extends Controller 
{
    private view:ViewDialogNormal;

    public Init()
    {

    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.ShowDialog)
        {
            if(this.view == null)
            {
                this.view = this.GetView(ViewNames.ViewDialogNormal) as ViewDialogNormal;
            }
            this.view.Show(()=>{
                this.view.SetData(msgBody as DialogData);
            });
        }
        // else if(msg == MessageNames.TryToCloseDialogWithContent)
        // {
        //     if(this.view != null && this.view.isShow == true && this.view.LabelContent.string == msgBody)
        //     {
        //         this.view.Hide();
        //     }
        // }
    }

}
