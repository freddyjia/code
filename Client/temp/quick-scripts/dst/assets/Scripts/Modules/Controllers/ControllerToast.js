
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Controllers/ControllerToast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4655dWcZLtBoK6ydM/0sqSD', 'ControllerToast');
// Scripts/Modules/Controllers/ControllerToast.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("../../MVCFramework/Controller");
var MessageNames_1 = require("../MessageNames");
var MVCRegister_1 = require("../MVCRegister");
var ControllerToast = /** @class */ (function (_super) {
    __extends(ControllerToast, _super);
    function ControllerToast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerToast.prototype.Init = function () {
    };
    ControllerToast.prototype.Clean = function () {
    };
    ControllerToast.prototype.OnReceiveMessage = function (msg, msgBody) {
        var _this = this;
        if (msg == MessageNames_1.default.ShowToastUI) {
            if (this.view == null) {
                this.view = this.GetView(MVCRegister_1.ViewNames.ViewToast);
            }
            this.view.Show(function () {
                _this.view.AddToast(msgBody);
            });
        }
    };
    return ControllerToast;
}(Controller_1.default));
exports.default = ControllerToast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcQ29udHJvbGxlcnNcXENvbnRyb2xsZXJUb2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFFdkQsZ0RBQTJDO0FBQzNDLDhDQUEyQztBQUUzQztJQUE2QyxtQ0FBVTtJQUF2RDs7SUEwQkEsQ0FBQztJQXZCVSw4QkFBSSxHQUFYO0lBR0EsQ0FBQztJQUVNLCtCQUFLLEdBQVo7SUFHQSxDQUFDO0lBRU0sMENBQWdCLEdBQXZCLFVBQXdCLEdBQVUsRUFBQyxPQUFXO1FBQTlDLGlCQVlDO1FBVkcsSUFBRyxHQUFHLElBQUksc0JBQVksQ0FBQyxXQUFXLEVBQ2xDO1lBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFDcEI7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUMsU0FBUyxDQUFjLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFpQixDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBMUJBLEFBMEJDLENBMUI0QyxvQkFBVSxHQTBCdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vTVZDRnJhbWV3b3JrL0NvbnRyb2xsZXJcIjtcbmltcG9ydCBWaWV3VG9hc3QgZnJvbSBcIi4uL1ZpZXdzL1ZpZXdUb2FzdFwiO1xuaW1wb3J0IE1lc3NhZ2VOYW1lcyBmcm9tIFwiLi4vTWVzc2FnZU5hbWVzXCI7XG5pbXBvcnQgeyBWaWV3TmFtZXMgfSBmcm9tIFwiLi4vTVZDUmVnaXN0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclRvYXN0IGV4dGVuZHMgQ29udHJvbGxlclxue1xuICAgIHByaXZhdGUgdmlldzpWaWV3VG9hc3Q7XG4gICAgcHVibGljIEluaXQoKVxuICAgIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhbigpXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgT25SZWNlaXZlTWVzc2FnZShtc2c6c3RyaW5nLG1zZ0JvZHk6YW55KVxuICAgIHtcbiAgICAgICAgaWYobXNnID09IE1lc3NhZ2VOYW1lcy5TaG93VG9hc3RVSSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy52aWV3ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5HZXRWaWV3KFZpZXdOYW1lcy5WaWV3VG9hc3QpIGFzIFZpZXdUb2FzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5TaG93KCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LkFkZFRvYXN0KG1zZ0JvZHkgYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19