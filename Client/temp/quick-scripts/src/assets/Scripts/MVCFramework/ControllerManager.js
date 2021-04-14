"use strict";
cc._RF.push(module, '044a1053J1NVo1klT+6U9dS', 'ControllerManager');
// Scripts/MVCFramework/ControllerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVCRegister_1 = require("../Modules/MVCRegister");
var MessageCenter_1 = require("./MessageCenter");
var ViewManager_1 = require("./ViewManager");
var ModelManager_1 = require("./ModelManager");
var ControllerManager = /** @class */ (function () {
    function ControllerManager() {
    }
    ControllerManager.OnReceiveMessage = function (controllerName, msg, msgBody) {
        if (this.dicControllers[controllerName] == null) {
            var controller = MVCRegister_1.MVCRegister.dicControllers[controllerName]();
            controller.name = controllerName;
            controller.sendMsgCallBack = function (msg, msgBody) {
                MessageCenter_1.default.SendMessage(msg, msgBody);
            };
            controller.getViewCallback = function (viewName) {
                return ViewManager_1.default.GetView(viewName);
            };
            controller.getModelCallback = function (modelName) {
                return ModelManager_1.default.GetModel(modelName);
            };
            controller.Init();
            this.dicControllers[controllerName] = controller;
        }
        this.dicControllers[controllerName].OnReceiveMessage(msg, msgBody);
    };
    ControllerManager.Clean = function () {
        for (var controllerName in this.dicControllers) {
            if (this.unClearControllers[controllerName] == null) {
                this.dicControllers[controllerName].Clean();
            }
        }
        var controllerCache = {};
        for (var controllerName in this.dicControllers) {
            if (this.unClearControllers[controllerName] != null) {
                controllerCache[controllerName] = this.dicControllers[controllerName];
            }
        }
        this.dicControllers = null;
        this.dicControllers = controllerCache;
    };
    ControllerManager.unClearControllers = ["ControllerToast", "ControllerDialog", "ControllerDialogTip", "ControllerScreenMask"];
    ControllerManager.dicControllers = {};
    return ControllerManager;
}());
exports.default = ControllerManager;

cc._RF.pop();