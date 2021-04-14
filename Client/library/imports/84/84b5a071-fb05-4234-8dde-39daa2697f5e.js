"use strict";
cc._RF.push(module, '84b5aBx+wVCNI3eOdqiaX9e', 'MessageCenter');
// Scripts/MVCFramework/MessageCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("./ControllerManager");
var MVCRegister_1 = require("../Modules/MVCRegister");
var MessageCenter = /** @class */ (function () {
    function MessageCenter() {
    }
    //从 controllername:msgs 转变为 msg:controllers
    MessageCenter.RegisterControllerMsgListening = function (controllerMsgsDic) {
        this.dicMsgToController = {};
        // let dicMsgToController :{[key: string]: string} = {};
        for (var controllerName in controllerMsgsDic) {
            var msgs = controllerMsgsDic[controllerName];
            for (var i = 0; i < msgs.length; i++) {
                var msg = msgs[i];
                if (this.dicMsgToController[msg] == null) {
                    this.dicMsgToController[msg] = new Array();
                }
                this.dicMsgToController[msg].push(controllerName);
            }
        }
    };
    MessageCenter.Clean = function () {
        this.dicMsgs = {};
        this.dicMessageName = {};
        this.dicMsgToController = {};
        this.eventid = 0;
    };
    MessageCenter.Init = function () {
        //todo
        this.RegisterControllerMsgListening(MVCRegister_1.MVCRegister.dicControllerMsgListening);
    };
    MessageCenter.SendMessage = function (message, msgBody) {
        if (this.dicMsgs[message] != null) {
            var funcs = this.dicMsgs[message];
            for (var eventid in funcs) {
                if (funcs[eventid] != null)
                    funcs[eventid](message, msgBody);
            }
        }
        if (this.dicMsgToController[message] != null) {
            var controllers = this.dicMsgToController[message];
            for (var i = 0; i < controllers.length; i++) {
                ControllerManager_1.default.OnReceiveMessage(controllers[i], message, msgBody);
            }
        }
    };
    MessageCenter.AddListener = function (message, func) {
        this.eventid++;
        if (this.dicMsgs[message] == null) {
            var funcs = {};
            this.dicMsgs[message] = funcs;
        }
        this.dicMsgs[message][this.eventid] = func;
        this.dicMessageName[this.eventid] = message;
        return this.eventid;
    };
    MessageCenter.RemoveListener = function (eventid) {
        var message = this.dicMessageName[eventid];
        if (this.dicMsgs[message] != null) {
            delete this.dicMsgs[message][eventid];
            delete this.dicMessageName[eventid];
        }
    };
    MessageCenter.dicMsgs = {};
    MessageCenter.dicMessageName = {};
    MessageCenter.dicMsgToController = {};
    MessageCenter.eventid = 0;
    return MessageCenter;
}());
exports.default = MessageCenter;

cc._RF.pop();