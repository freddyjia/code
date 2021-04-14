import Controller from "./Controller";
import { MVCRegister } from "../Modules/MVCRegister";
import MessageCenter from "./MessageCenter";
import ViewManager from "./ViewManager";
import ModelManager from "./ModelManager";

export default class ControllerManager
{
    private static unClearControllers = ["ControllerToast","ControllerDialog","ControllerDialogTip","ControllerScreenMask"];
    private static dicControllers:{[controllerName:string]:Controller} = {};

    public static OnReceiveMessage(controllerName:string,msg:string,msgBody:any)
    {
        if(this.dicControllers[controllerName] == null)
        {
            let controller:Controller = MVCRegister.dicControllers[controllerName]();
            controller.name = controllerName;
            controller.sendMsgCallBack = (msg,msgBody)=>{
                MessageCenter.SendMessage(msg,msgBody);
            };

            controller.getViewCallback = (viewName)=>{
                return ViewManager.GetView(viewName);
            };

            controller.getModelCallback = (modelName)=>{
                return ModelManager.GetModel(modelName);
            };

            controller.Init();

            this.dicControllers[controllerName] = controller;
        }
        this.dicControllers[controllerName].OnReceiveMessage(msg,msgBody);
    }

    public static Clean()
    {
        for(let controllerName in this.dicControllers)
        {
            if(this.unClearControllers[controllerName] == null)
            {
                this.dicControllers[controllerName].Clean();
            }
        }

        let controllerCache:{[controllerName:string]:Controller} = {};
        for(let controllerName in this.dicControllers)
        {
            if(this.unClearControllers[controllerName] != null)
            {
                controllerCache[controllerName] = this.dicControllers[controllerName];
            }
        }

        this.dicControllers = null;

        this.dicControllers = controllerCache;
    }
}
