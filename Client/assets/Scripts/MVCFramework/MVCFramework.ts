import ViewManager from "./ViewManager";
import ControllerManager from "./ControllerManager";
import ModelManager from "./ModelManager";
import MessageCenter from "./MessageCenter";
import ViewConfigs from "../Modules/ViewConfigs";
import { MVCRegister } from "../Modules/MVCRegister";

export default class MVCFramework 
{
    public static Init()
    {
        ViewConfigs.Init();
        MVCRegister.Init();
        MessageCenter.Init();
        ViewManager.Init();
    }

    public static Clean()
    {
        ControllerManager.Clean();
        ModelManager.Clean();
        ViewManager.Clean();
        MessageCenter.Clean();
    }
}