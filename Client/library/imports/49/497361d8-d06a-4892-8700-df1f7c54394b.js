"use strict";
cc._RF.push(module, '49736HY0GpIkocA3x98VDlL', 'Model');
// Scripts/MVCFramework/Model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
        this.sendMsgCallBack = null;
    }
    Model.prototype.SendMessage = function (msg, msgBody) {
        if (msgBody === void 0) { msgBody = null; }
        this.sendMsgCallBack(msg, msgBody);
    };
    //可以重写
    Model.prototype.Init = function () {
    };
    //可以重写
    Model.prototype.Clean = function () {
    };
    return Model;
}());
exports.default = Model;

cc._RF.pop();