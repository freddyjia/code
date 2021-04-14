import Model from "../MVCFramework/Model";
import View from "../MVCFramework/View";
import Controller from "../MVCFramework/Controller";
import MessageNames from "./MessageNames";
import ControllerDialogNormal from "./Controllers/ControllerDialogNormal";
import ViewDialogNormal from "./Views/ViewDialogNormal";
import ViewToast from "./Views/ViewToast";
import ControllerToast from "./Controllers/ControllerToast";
import ViewOpenNetworking from "./Views/ViewOpenNetworking";
import ControllerOpenNetworking from "./Controllers/ControllerOpenNetworking";
import ViewApp from "./Views/ViewApp";
import ControllerApp from "./Controllers/ControllerApp";
import ModelApp from "./Models/ModelApp";


//---------->>>>> ModelNames
export class ModelNames {
    public static ModelApp = "ModelApp";
}

//---------->>>>> ViewNames
export class ViewNames {
    public static ViewDialogNormal = "ViewDialogNormal";
    public static ViewToast = "ViewToast";
    public static ViewOpenNetworking = "ViewOpenNetworking";
    public static ViewApp = "ViewApp";
}

//---------->>>>> ControllerNames
export class ControllerNames {
    public static ControllerToast = "ControllerToast";
    public static ControllerDialogNormal = "ControllerDialogNormal";
    public static ControllerOpenNetworking = "ControllerOpenNetworking";
    public static ControllerApp = "ControllerApp";
}

export class MVCRegister {
    public static AddModels() {
        this.dicModels = {};

        this.dicModels[ModelNames.ModelApp] = () => {
            return new ModelApp();
        };
    }

    public static AddViews() {
        this.dicViews = {};

        //---------->>>>> Register Views HERE
        this.dicViews[ViewNames.ViewDialogNormal] = () => {
            return new ViewDialogNormal();
        };
        this.dicViews[ViewNames.ViewToast] = () => {
            return new ViewToast();
        };
        this.dicViews[ViewNames.ViewOpenNetworking] = () => {
            return new ViewOpenNetworking();
        };
        this.dicViews[ViewNames.ViewApp] = () => {
            return new ViewApp();
        };
    }

    public static AddControllers() {
        this.dicControllers = {};
        //---------->>>>> Register Controllers HERE

        this.dicControllers[ControllerNames.ControllerDialogNormal] = () => {
            return new ControllerDialogNormal();
        };
        this.dicControllers[ControllerNames.ControllerToast] = () => {
            return new ControllerToast();
        };
        this.dicControllers[ControllerNames.ControllerOpenNetworking] = () => {
            return new ControllerOpenNetworking();
        };
        this.dicControllers[ControllerNames.ControllerApp] = () => {
            return new ControllerApp();
        };
    }

    public static AddControllerMsgs() {
        this.dicControllerMsgListening = {};

        //---------->>>>> Register Listening Messages HERE
        this.dicControllerMsgListening[ControllerNames.ControllerDialogNormal] = [MessageNames.ShowDialog];
        this.dicControllerMsgListening[ControllerNames.ControllerToast] = [MessageNames.ShowToastUI];
        this.dicControllerMsgListening[ControllerNames.ControllerOpenNetworking] = [MessageNames.OpenNetworkLoading];

        this.dicControllerMsgListening[ControllerNames.ControllerApp] = [
            MessageNames.StartLogin,
        ];
    }

    //--------->  以下内容框架调用
    public static dicModels: { [modeName: string]: () => Model } = {};
    public static dicViews: { [viewName: string]: () => View } = {};
    public static dicControllers: { [controllerName: string]: () => Controller } = {};
    public static dicControllerMsgListening: { [controllerName: string]: Array<string> } = {};

    public static Init() {
        this.AddModels();
        this.AddViews();
        this.AddControllers();
        this.AddControllerMsgs();
    }
}
