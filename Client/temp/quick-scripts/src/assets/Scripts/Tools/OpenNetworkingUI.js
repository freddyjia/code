"use strict";
cc._RF.push(module, 'e0db5zXQodFCIS0KSrvzflK', 'OpenNetworkingUI');
// Scripts/Tools/OpenNetworkingUI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCenter_1 = require("../MVCFramework/MessageCenter");
var MessageNames_1 = require("../Modules/MessageNames");
var OpenNetworkingUI = /** @class */ (function () {
    function OpenNetworkingUI() {
    }
    OpenNetworkingUI.Show = function (msg) {
        if (msg === void 0) { msg = ""; }
        // cc.error("OpenNetworkingUI Show ");
        MessageCenter_1.default.SendMessage(MessageNames_1.default.OpenNetworkLoading, { status: true, content: msg });
    };
    OpenNetworkingUI.Hide = function () {
        MessageCenter_1.default.SendMessage(MessageNames_1.default.OpenNetworkLoading, { status: false, content: "" });
    };
    return OpenNetworkingUI;
}());
exports.default = OpenNetworkingUI;

cc._RF.pop();