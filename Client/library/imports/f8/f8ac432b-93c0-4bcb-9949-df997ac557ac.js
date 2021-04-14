"use strict";
cc._RF.push(module, 'f8ac4Mrk8BLy5lJ35l6xVes', 'Controller');
// Scripts/MVCFramework/Controller.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.SendMessage = function (msg, msgBody) {
        if (msgBody === void 0) { msgBody = null; }
        this.sendMsgCallBack(msg, msgBody);
    };
    Controller.prototype.GetView = function (viewName) {
        return this.getViewCallback(viewName);
    };
    Controller.prototype.GetModel = function (modelName) {
        return this.getModelCallback(modelName);
    };
    //以下是可以重写的函数
    Controller.prototype.Init = function () {
    };
    //重写函数
    Controller.prototype.Clean = function () {
    };
    //重写函数
    Controller.prototype.OnReceiveMessage = function (msg, msgBody) {
    };
    return Controller;
}());
exports.default = Controller;

cc._RF.pop();