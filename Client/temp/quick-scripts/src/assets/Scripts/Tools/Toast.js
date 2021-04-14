"use strict";
cc._RF.push(module, 'bac18GyNJZD25kvnrqUSwxx', 'Toast');
// Scripts/Tools/Toast.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCenter_1 = require("../MVCFramework/MessageCenter");
var MessageNames_1 = require("../Modules/MessageNames");
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.Show = function (content) {
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowToastUI, content);
    };
    return Toast;
}());
exports.default = Toast;

cc._RF.pop();