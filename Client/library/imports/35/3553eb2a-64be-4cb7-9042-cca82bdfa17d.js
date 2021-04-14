"use strict";
cc._RF.push(module, '3553esqZL5Mt5BCzKgr36F9', 'ModelManager');
// Scripts/MVCFramework/ModelManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVCRegister_1 = require("../Modules/MVCRegister");
var MessageCenter_1 = require("./MessageCenter");
var ModelManager = /** @class */ (function () {
    function ModelManager() {
    }
    ModelManager.GetModel = function (modelName) {
        if (this.dicModels[modelName] == null) {
            var model = MVCRegister_1.MVCRegister.dicModels[modelName]();
            model.sendMsgCallBack = function (msg, msgBody) {
                MessageCenter_1.default.SendMessage(msg, msgBody);
            };
            model.Init();
            this.dicModels[modelName] = model;
        }
        return this.dicModels[modelName];
    };
    ModelManager.Clean = function () {
        for (var modelName in this.dicModels) {
            this.dicModels[modelName].Clean();
        }
        this.dicModels = {};
    };
    ModelManager.dicModels = {};
    return ModelManager;
}());
exports.default = ModelManager;

cc._RF.pop();