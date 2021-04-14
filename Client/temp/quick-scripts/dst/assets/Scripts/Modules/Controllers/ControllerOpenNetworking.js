
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Controllers/ControllerOpenNetworking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '525c8rUmCFE3q41GjjtS8gs', 'ControllerOpenNetworking');
// Scripts/Modules/Controllers/ControllerOpenNetworking.ts

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
var ControllerOpenNetworking = /** @class */ (function (_super) {
    __extends(ControllerOpenNetworking, _super);
    function ControllerOpenNetworking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerOpenNetworking.prototype.Init = function () {
    };
    ControllerOpenNetworking.prototype.OnReceiveMessage = function (msg, msgBody) {
        var _this = this;
        if (msg == MessageNames_1.default.OpenNetworkLoading) {
            if (this.view == null) {
                this.view = this.GetView(MVCRegister_1.ViewNames.ViewOpenNetworking);
            }
            if (msgBody["status"] == true) {
                this.view.Show(function () {
                    _this.view.Refresh(msgBody["content"]);
                });
            }
            else {
                this.view.Hide();
            }
        }
    };
    return ControllerOpenNetworking;
}(Controller_1.default));
exports.default = ControllerOpenNetworking;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcQ29udHJvbGxlcnNcXENvbnRyb2xsZXJPcGVuTmV0d29ya2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsZ0RBQTJDO0FBRTNDLDhDQUEyQztBQUUzQztJQUFzRCw0Q0FBVTtJQUFoRTs7SUE4QkEsQ0FBQztJQTNCVSx1Q0FBSSxHQUFYO0lBR0EsQ0FBQztJQUVNLG1EQUFnQixHQUF2QixVQUF3QixHQUFVLEVBQUMsT0FBVztRQUE5QyxpQkFvQkM7UUFsQkcsSUFBRyxHQUFHLElBQUksc0JBQVksQ0FBQyxrQkFBa0IsRUFDekM7WUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQjtnQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQVMsQ0FBQyxrQkFBa0IsQ0FBdUIsQ0FBQzthQUNoRjtZQUNELElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFDNUI7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ1gsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtTQUVKO0lBQ0wsQ0FBQztJQUVMLCtCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsQ0E5QnFELG9CQUFVLEdBOEIvRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuLi8uLi9NVkNGcmFtZXdvcmsvQ29udHJvbGxlclwiO1xuaW1wb3J0IE1lc3NhZ2VOYW1lcyBmcm9tIFwiLi4vTWVzc2FnZU5hbWVzXCI7XG5pbXBvcnQgVmlld09wZW5OZXR3b3JraW5nIGZyb20gXCIuLi9WaWV3cy9WaWV3T3Blbk5ldHdvcmtpbmdcIjtcbmltcG9ydCB7IFZpZXdOYW1lcyB9IGZyb20gXCIuLi9NVkNSZWdpc3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyT3Blbk5ldHdvcmtpbmcgZXh0ZW5kcyBDb250cm9sbGVyIFxue1xuICAgIHByaXZhdGUgdmlldzpWaWV3T3Blbk5ldHdvcmtpbmc7XG4gICAgcHVibGljIEluaXQoKVxuICAgIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBPblJlY2VpdmVNZXNzYWdlKG1zZzpzdHJpbmcsbXNnQm9keTphbnkpXG4gICAge1xuICAgICAgICBpZihtc2cgPT0gTWVzc2FnZU5hbWVzLk9wZW5OZXR3b3JrTG9hZGluZylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy52aWV3ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5HZXRWaWV3KFZpZXdOYW1lcy5WaWV3T3Blbk5ldHdvcmtpbmcpIGFzIFZpZXdPcGVuTmV0d29ya2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG1zZ0JvZHlbXCJzdGF0dXNcIl0gPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuU2hvdygoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuUmVmcmVzaChtc2dCb2R5W1wiY29udGVudFwiXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LkhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=