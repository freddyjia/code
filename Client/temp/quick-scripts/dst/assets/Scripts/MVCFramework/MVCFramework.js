
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/MVCFramework.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxNVkNGcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEMseURBQW9EO0FBQ3BELCtDQUEwQztBQUMxQyxpREFBNEM7QUFDNUMsc0RBQWlEO0FBQ2pELHNEQUFxRDtBQUVyRDtJQUFBO0lBaUJBLENBQUM7SUFmaUIsaUJBQUksR0FBbEI7UUFFSSxxQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLHlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsdUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixxQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFYSxrQkFBSyxHQUFuQjtRQUVJLDJCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLHNCQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIscUJBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQix1QkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBakJBLEFBaUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tIFwiLi9Db250cm9sbGVyTWFuYWdlclwiO1xuaW1wb3J0IE1vZGVsTWFuYWdlciBmcm9tIFwiLi9Nb2RlbE1hbmFnZXJcIjtcbmltcG9ydCBNZXNzYWdlQ2VudGVyIGZyb20gXCIuL01lc3NhZ2VDZW50ZXJcIjtcbmltcG9ydCBWaWV3Q29uZmlncyBmcm9tIFwiLi4vTW9kdWxlcy9WaWV3Q29uZmlnc1wiO1xuaW1wb3J0IHsgTVZDUmVnaXN0ZXIgfSBmcm9tIFwiLi4vTW9kdWxlcy9NVkNSZWdpc3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNVkNGcmFtZXdvcmsgXG57XG4gICAgcHVibGljIHN0YXRpYyBJbml0KClcbiAgICB7XG4gICAgICAgIFZpZXdDb25maWdzLkluaXQoKTtcbiAgICAgICAgTVZDUmVnaXN0ZXIuSW5pdCgpO1xuICAgICAgICBNZXNzYWdlQ2VudGVyLkluaXQoKTtcbiAgICAgICAgVmlld01hbmFnZXIuSW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYW4oKVxuICAgIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuQ2xlYW4oKTtcbiAgICAgICAgTW9kZWxNYW5hZ2VyLkNsZWFuKCk7XG4gICAgICAgIFZpZXdNYW5hZ2VyLkNsZWFuKCk7XG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuQ2xlYW4oKTtcbiAgICB9XG59Il19