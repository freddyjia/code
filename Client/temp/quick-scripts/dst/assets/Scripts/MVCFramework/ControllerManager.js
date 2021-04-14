
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/ControllerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxDb250cm9sbGVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFxRDtBQUNyRCxpREFBNEM7QUFDNUMsNkNBQXdDO0FBQ3hDLCtDQUEwQztBQUUxQztJQUFBO0lBcURBLENBQUM7SUFoRGlCLGtDQUFnQixHQUE5QixVQUErQixjQUFxQixFQUFDLEdBQVUsRUFBQyxPQUFXO1FBRXZFLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQzlDO1lBQ0ksSUFBSSxVQUFVLEdBQWMseUJBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztZQUN6RSxVQUFVLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztZQUNqQyxVQUFVLENBQUMsZUFBZSxHQUFHLFVBQUMsR0FBRyxFQUFDLE9BQU87Z0JBQ3JDLHVCQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUM7WUFFRixVQUFVLENBQUMsZUFBZSxHQUFHLFVBQUMsUUFBUTtnQkFDbEMsT0FBTyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUM7WUFFRixVQUFVLENBQUMsZ0JBQWdCLEdBQUcsVUFBQyxTQUFTO2dCQUNwQyxPQUFPLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQztZQUVGLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVsQixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFYSx1QkFBSyxHQUFuQjtRQUVJLEtBQUksSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDN0M7WUFDSSxJQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQ2xEO2dCQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDL0M7U0FDSjtRQUVELElBQUksZUFBZSxHQUF3QyxFQUFFLENBQUM7UUFDOUQsS0FBSSxJQUFJLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUM3QztZQUNJLElBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFDbEQ7Z0JBQ0ksZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDekU7U0FDSjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO0lBQzFDLENBQUM7SUFsRGMsb0NBQWtCLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxxQkFBcUIsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pHLGdDQUFjLEdBQXdDLEVBQUUsQ0FBQztJQWtENUUsd0JBQUM7Q0FyREQsQUFxREMsSUFBQTtrQkFyRG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IE1WQ1JlZ2lzdGVyIH0gZnJvbSBcIi4uL01vZHVsZXMvTVZDUmVnaXN0ZXJcIjtcbmltcG9ydCBNZXNzYWdlQ2VudGVyIGZyb20gXCIuL01lc3NhZ2VDZW50ZXJcIjtcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xuaW1wb3J0IE1vZGVsTWFuYWdlciBmcm9tIFwiLi9Nb2RlbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlck1hbmFnZXJcbntcbiAgICBwcml2YXRlIHN0YXRpYyB1bkNsZWFyQ29udHJvbGxlcnMgPSBbXCJDb250cm9sbGVyVG9hc3RcIixcIkNvbnRyb2xsZXJEaWFsb2dcIixcIkNvbnRyb2xsZXJEaWFsb2dUaXBcIixcIkNvbnRyb2xsZXJTY3JlZW5NYXNrXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIGRpY0NvbnRyb2xsZXJzOntbY29udHJvbGxlck5hbWU6c3RyaW5nXTpDb250cm9sbGVyfSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBPblJlY2VpdmVNZXNzYWdlKGNvbnRyb2xsZXJOYW1lOnN0cmluZyxtc2c6c3RyaW5nLG1zZ0JvZHk6YW55KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5kaWNDb250cm9sbGVyc1tjb250cm9sbGVyTmFtZV0gPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNvbnRyb2xsZXI6Q29udHJvbGxlciA9IE1WQ1JlZ2lzdGVyLmRpY0NvbnRyb2xsZXJzW2NvbnRyb2xsZXJOYW1lXSgpO1xuICAgICAgICAgICAgY29udHJvbGxlci5uYW1lID0gY29udHJvbGxlck5hbWU7XG4gICAgICAgICAgICBjb250cm9sbGVyLnNlbmRNc2dDYWxsQmFjayA9IChtc2csbXNnQm9keSk9PntcbiAgICAgICAgICAgICAgICBNZXNzYWdlQ2VudGVyLlNlbmRNZXNzYWdlKG1zZyxtc2dCb2R5KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0Vmlld0NhbGxiYWNrID0gKHZpZXdOYW1lKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBWaWV3TWFuYWdlci5HZXRWaWV3KHZpZXdOYW1lKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0TW9kZWxDYWxsYmFjayA9IChtb2RlbE5hbWUpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vZGVsTWFuYWdlci5HZXRNb2RlbChtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29udHJvbGxlci5Jbml0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuZGljQ29udHJvbGxlcnNbY29udHJvbGxlck5hbWVdID0gY29udHJvbGxlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpY0NvbnRyb2xsZXJzW2NvbnRyb2xsZXJOYW1lXS5PblJlY2VpdmVNZXNzYWdlKG1zZyxtc2dCb2R5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENsZWFuKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQgY29udHJvbGxlck5hbWUgaW4gdGhpcy5kaWNDb250cm9sbGVycylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy51bkNsZWFyQ29udHJvbGxlcnNbY29udHJvbGxlck5hbWVdID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWNDb250cm9sbGVyc1tjb250cm9sbGVyTmFtZV0uQ2xlYW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250cm9sbGVyQ2FjaGU6e1tjb250cm9sbGVyTmFtZTpzdHJpbmddOkNvbnRyb2xsZXJ9ID0ge307XG4gICAgICAgIGZvcihsZXQgY29udHJvbGxlck5hbWUgaW4gdGhpcy5kaWNDb250cm9sbGVycylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy51bkNsZWFyQ29udHJvbGxlcnNbY29udHJvbGxlck5hbWVdICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlckNhY2hlW2NvbnRyb2xsZXJOYW1lXSA9IHRoaXMuZGljQ29udHJvbGxlcnNbY29udHJvbGxlck5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVycyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVycyA9IGNvbnRyb2xsZXJDYWNoZTtcbiAgICB9XG59XG4iXX0=