"use strict";
cc._RF.push(module, 'b0fa9y91ANMNo+KE4+xW0PV', 'MVCFramework');
// Scripts/MVCFramework/MVCFramework.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("./ViewManager");
var ControllerManager_1 = require("./ControllerManager");
var ModelManager_1 = require("./ModelManager");
var MessageCenter_1 = require("./MessageCenter");
var ViewConfigs_1 = require("../Modules/ViewConfigs");
var MVCRegister_1 = require("../Modules/MVCRegister");
var MVCFramework = /** @class */ (function () {
    function MVCFramework() {
    }
    MVCFramework.Init = function () {
        ViewConfigs_1.default.Init();
        MVCRegister_1.MVCRegister.Init();
        MessageCenter_1.default.Init();
        ViewManager_1.default.Init();
    };
    MVCFramework.Clean = function () {
        ControllerManager_1.default.Clean();
        ModelManager_1.default.Clean();
        ViewManager_1.default.Clean();
        MessageCenter_1.default.Clean();
    };
    return MVCFramework;
}());
exports.default = MVCFramework;

cc._RF.pop();