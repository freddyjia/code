"use strict";
cc._RF.push(module, '21676ViAZxK/oPxOZEkCSpU', 'MVCRegister');
// Scripts/Modules/MVCRegister.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageNames_1 = require("./MessageNames");
var ControllerDialogNormal_1 = require("./Controllers/ControllerDialogNormal");
var ViewDialogNormal_1 = require("./Views/ViewDialogNormal");
var ViewToast_1 = require("./Views/ViewToast");
var ControllerToast_1 = require("./Controllers/ControllerToast");
var ViewOpenNetworking_1 = require("./Views/ViewOpenNetworking");
var ControllerOpenNetworking_1 = require("./Controllers/ControllerOpenNetworking");
var ViewApp_1 = require("./Views/ViewApp");
var ControllerApp_1 = require("./Controllers/ControllerApp");
var ModelApp_1 = require("./Models/ModelApp");
//---------->>>>> ModelNames
var ModelNames = /** @class */ (function () {
    function ModelNames() {
    }
    ModelNames.ModelApp = "ModelApp";
    return ModelNames;
}());
exports.ModelNames = ModelNames;
//---------->>>>> ViewNames
var ViewNames = /** @class */ (function () {
    function ViewNames() {
    }
    ViewNames.ViewDialogNormal = "ViewDialogNormal";
    ViewNames.ViewToast = "ViewToast";
    ViewNames.ViewOpenNetworking = "ViewOpenNetworking";
    ViewNames.ViewApp = "ViewApp";
    return ViewNames;
}());
exports.ViewNames = ViewNames;
//---------->>>>> ControllerNames
var ControllerNames = /** @class */ (function () {
    function ControllerNames() {
    }
    ControllerNames.ControllerToast = "ControllerToast";
    ControllerNames.ControllerDialogNormal = "ControllerDialogNormal";
    ControllerNames.ControllerOpenNetworking = "ControllerOpenNetworking";
    ControllerNames.ControllerApp = "ControllerApp";
    return ControllerNames;
}());
exports.ControllerNames = ControllerNames;
var MVCRegister = /** @class */ (function () {
    function MVCRegister() {
    }
    MVCRegister.AddModels = function () {
        this.dicModels = {};
        this.dicModels[ModelNames.ModelApp] = function () {
            return new ModelApp_1.default();
        };
    };
    MVCRegister.AddViews = function () {
        this.dicViews = {};
        //---------->>>>> Register Views HERE
        this.dicViews[ViewNames.ViewDialogNormal] = function () {
            return new ViewDialogNormal_1.default();
        };
        this.dicViews[ViewNames.ViewToast] = function () {
            return new ViewToast_1.default();
        };
        this.dicViews[ViewNames.ViewOpenNetworking] = function () {
            return new ViewOpenNetworking_1.default();
        };
        this.dicViews[ViewNames.ViewApp] = function () {
            return new ViewApp_1.default();
        };
    };
    MVCRegister.AddControllers = function () {
        this.dicControllers = {};
        //---------->>>>> Register Controllers HERE
        this.dicControllers[ControllerNames.ControllerDialogNormal] = function () {
            return new ControllerDialogNormal_1.default();
        };
        this.dicControllers[ControllerNames.ControllerToast] = function () {
            return new ControllerToast_1.default();
        };
        this.dicControllers[ControllerNames.ControllerOpenNetworking] = function () {
            return new ControllerOpenNetworking_1.default();
        };
        this.dicControllers[ControllerNames.ControllerApp] = function () {
            return new ControllerApp_1.default();
        };
    };
    MVCRegister.AddControllerMsgs = function () {
        this.dicControllerMsgListening = {};
        //---------->>>>> Register Listening Messages HERE
        this.dicControllerMsgListening[ControllerNames.ControllerDialogNormal] = [MessageNames_1.default.ShowDialog];
        this.dicControllerMsgListening[ControllerNames.ControllerToast] = [MessageNames_1.default.ShowToastUI];
        this.dicControllerMsgListening[ControllerNames.ControllerOpenNetworking] = [MessageNames_1.default.OpenNetworkLoading];
        this.dicControllerMsgListening[ControllerNames.ControllerApp] = [
            MessageNames_1.default.StartLogin,
        ];
    };
    MVCRegister.Init = function () {
        this.AddModels();
        this.AddViews();
        this.AddControllers();
        this.AddControllerMsgs();
    };
    //--------->  以下内容框架调用
    MVCRegister.dicModels = {};
    MVCRegister.dicViews = {};
    MVCRegister.dicControllers = {};
    MVCRegister.dicControllerMsgListening = {};
    return MVCRegister;
}());
exports.MVCRegister = MVCRegister;

cc._RF.pop();