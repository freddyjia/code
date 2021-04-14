
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/MessageCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxNZXNzYWdlQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELHNEQUFxRDtBQUVyRDtJQUFBO0lBdUZBLENBQUM7SUFoRkcsMkNBQTJDO0lBQzdCLDRDQUE4QixHQUE1QyxVQUE2QyxpQkFBZ0Q7UUFFekYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUU3Qix3REFBd0Q7UUFDeEQsS0FBSSxJQUFJLGNBQWMsSUFBSSxpQkFBaUIsRUFDM0M7WUFDSSxJQUFJLElBQUksR0FBaUIsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDM0QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQy9CO2dCQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUN2QztvQkFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztpQkFDdEQ7Z0JBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNyRDtTQUNKO0lBQ0wsQ0FBQztJQUVhLG1CQUFLLEdBQW5CO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRWEsa0JBQUksR0FBbEI7UUFFSSxNQUFNO1FBQ04sSUFBSSxDQUFDLDhCQUE4QixDQUFDLHlCQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRWEseUJBQVcsR0FBekIsVUFBMEIsT0FBYyxFQUFDLE9BQVk7UUFFakQsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFDaEM7WUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksSUFBSSxPQUFPLElBQUksS0FBSyxFQUN4QjtnQkFDSSxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJO29CQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7UUFFRCxJQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQzNDO1lBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN0QztnQkFDSSwyQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ3JFO1NBQ0o7SUFDTCxDQUFDO0lBRWEseUJBQVcsR0FBekIsVUFBMEIsT0FBYyxFQUFDLElBQXlCO1FBRTlELElBQUksQ0FBQyxPQUFPLEVBQUcsQ0FBQztRQUVoQixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUNoQztZQUNJLElBQUksS0FBSyxHQUEyQyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRWEsNEJBQWMsR0FBNUIsVUFBNkIsT0FBYztRQUV2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQ2hDO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFwRmMscUJBQU8sR0FBaUYsRUFBRSxDQUFDO0lBQzNGLDRCQUFjLEdBQThCLEVBQUUsQ0FBQztJQUMvQyxnQ0FBa0IsR0FBbUMsRUFBRSxDQUFDO0lBQ3hELHFCQUFPLEdBQVUsQ0FBQyxDQUFDO0lBa0Z0QyxvQkFBQztDQXZGRCxBQXVGQyxJQUFBO2tCQXZGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tIFwiLi9Db250cm9sbGVyTWFuYWdlclwiO1xuaW1wb3J0IHsgTVZDUmVnaXN0ZXIgfSBmcm9tIFwiLi4vTW9kdWxlcy9NVkNSZWdpc3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQ2VudGVyIFxue1xuICAgIHByaXZhdGUgc3RhdGljIGRpY01zZ3M6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBudW1iZXJdOiAobWVzc2FnZTogc3RyaW5nLG1zZ0JvZHk6YW55KSA9PiB2b2lkIH0gIH0gPSB7fTtcbiAgICBwcml2YXRlIHN0YXRpYyBkaWNNZXNzYWdlTmFtZTogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSA9IHt9O1xuICAgIHByaXZhdGUgc3RhdGljIGRpY01zZ1RvQ29udHJvbGxlciA6e1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZz59ID0ge307XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXZlbnRpZDpudW1iZXIgPSAwO1xuXG4gICAgLy/ku44gY29udHJvbGxlcm5hbWU6bXNncyDovazlj5jkuLogbXNnOmNvbnRyb2xsZXJzXG4gICAgcHVibGljIHN0YXRpYyBSZWdpc3RlckNvbnRyb2xsZXJNc2dMaXN0ZW5pbmcoY29udHJvbGxlck1zZ3NEaWM6e1trZXk6IHN0cmluZ106IEFycmF5PHN0cmluZz59KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaWNNc2dUb0NvbnRyb2xsZXIgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBkaWNNc2dUb0NvbnRyb2xsZXIgOntba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgICAgIGZvcihsZXQgY29udHJvbGxlck5hbWUgaW4gY29udHJvbGxlck1zZ3NEaWMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBtc2dzOkFycmF5PHN0cmluZz4gPSBjb250cm9sbGVyTXNnc0RpY1tjb250cm9sbGVyTmFtZV07XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwO2k8bXNncy5sZW5ndGg7aSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBtc2cgPSBtc2dzW2ldO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGljTXNnVG9Db250cm9sbGVyW21zZ10gPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljTXNnVG9Db250cm9sbGVyW21zZ10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRpY01zZ1RvQ29udHJvbGxlclttc2ddLnB1c2goY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYW4oKVxuICAgIHtcbiAgICAgICAgdGhpcy5kaWNNc2dzID0ge307XG4gICAgICAgIHRoaXMuZGljTWVzc2FnZU5hbWUgPSB7fTtcbiAgICAgICAgdGhpcy5kaWNNc2dUb0NvbnRyb2xsZXIgPSB7fTtcbiAgICAgICAgdGhpcy5ldmVudGlkID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKVxuICAgIHtcbiAgICAgICAgLy90b2RvXG4gICAgICAgIHRoaXMuUmVnaXN0ZXJDb250cm9sbGVyTXNnTGlzdGVuaW5nKE1WQ1JlZ2lzdGVyLmRpY0NvbnRyb2xsZXJNc2dMaXN0ZW5pbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2VuZE1lc3NhZ2UobWVzc2FnZTpzdHJpbmcsbXNnQm9keT86YW55KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5kaWNNc2dzW21lc3NhZ2VdICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmdW5jcyA9IHRoaXMuZGljTXNnc1ttZXNzYWdlXTtcbiAgICAgICAgICAgIGZvcihsZXQgZXZlbnRpZCBpbiBmdW5jcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihmdW5jc1tldmVudGlkXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBmdW5jc1tldmVudGlkXShtZXNzYWdlLG1zZ0JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kaWNNc2dUb0NvbnRyb2xsZXJbbWVzc2FnZV0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNvbnRyb2xsZXJzID0gdGhpcy5kaWNNc2dUb0NvbnRyb2xsZXJbbWVzc2FnZV07XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwO2k8Y29udHJvbGxlcnMubGVuZ3RoO2krKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDb250cm9sbGVyTWFuYWdlci5PblJlY2VpdmVNZXNzYWdlKGNvbnRyb2xsZXJzW2ldLG1lc3NhZ2UsbXNnQm9keSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQWRkTGlzdGVuZXIobWVzc2FnZTpzdHJpbmcsZnVuYzooc3RyaW5nLGFueSkgPT4gdm9pZCk6bnVtYmVyXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50aWQgKys7XG5cbiAgICAgICAgaWYodGhpcy5kaWNNc2dzW21lc3NhZ2VdID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmdW5jczp7IFtrZXk6IG51bWJlcl06IChzdHJpbmcsYW55KSA9PiB2b2lkIH0gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZGljTXNnc1ttZXNzYWdlXSA9IGZ1bmNzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGljTXNnc1ttZXNzYWdlXVt0aGlzLmV2ZW50aWRdID0gZnVuYztcbiAgICAgICAgdGhpcy5kaWNNZXNzYWdlTmFtZVt0aGlzLmV2ZW50aWRdID0gbWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZUxpc3RlbmVyKGV2ZW50aWQ6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmRpY01lc3NhZ2VOYW1lW2V2ZW50aWRdO1xuICAgICAgICBpZih0aGlzLmRpY01zZ3NbbWVzc2FnZV0gIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGljTXNnc1ttZXNzYWdlXVtldmVudGlkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRpY01lc3NhZ2VOYW1lW2V2ZW50aWRdO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19