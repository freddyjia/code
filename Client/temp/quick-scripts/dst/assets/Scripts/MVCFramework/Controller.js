
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFPSTtJQUVBLENBQUM7SUFFTSxnQ0FBVyxHQUFsQixVQUFtQixHQUFVLEVBQUMsT0FBZ0I7UUFBaEIsd0JBQUEsRUFBQSxjQUFnQjtRQUUxQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLFFBQWU7UUFFMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSw2QkFBUSxHQUFmLFVBQWdCLFNBQWdCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxZQUFZO0lBQ0wseUJBQUksR0FBWDtJQUdBLENBQUM7SUFFRCxNQUFNO0lBQ0MsMEJBQUssR0FBWjtJQUdBLENBQUM7SUFFRCxNQUFNO0lBQ0MscUNBQWdCLEdBQXZCLFVBQXdCLEdBQVUsRUFBQyxPQUFXO0lBRzlDLENBQUM7SUFFTCxpQkFBQztBQUFELENBNUNBLEFBNENDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBcbntcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG4gICAgcHVibGljIHNlbmRNc2dDYWxsQmFjazooc3RyaW5nLGFueSk9PnZvaWQ7XG4gICAgcHVibGljIGdldFZpZXdDYWxsYmFjazooc3RyaW5nKT0+VmlldztcbiAgICBwdWJsaWMgZ2V0TW9kZWxDYWxsYmFjazooc3RyaW5nKT0+TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgcHVibGljIFNlbmRNZXNzYWdlKG1zZzpzdHJpbmcsbXNnQm9keTphbnk9bnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMuc2VuZE1zZ0NhbGxCYWNrKG1zZyxtc2dCb2R5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0Vmlldyh2aWV3TmFtZTpzdHJpbmcpOlZpZXdcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZpZXdDYWxsYmFjayh2aWV3TmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIEdldE1vZGVsKG1vZGVsTmFtZTpzdHJpbmcpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRNb2RlbENhbGxiYWNrKG1vZGVsTmFtZSk7XG4gICAgfVxuXG4gICAgLy/ku6XkuIvmmK/lj6/ku6Xph43lhpnnmoTlh73mlbBcbiAgICBwdWJsaWMgSW5pdCgpXG4gICAge1xuXG4gICAgfVxuXG4gICAgLy/ph43lhpnlh73mlbBcbiAgICBwdWJsaWMgQ2xlYW4oKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy/ph43lhpnlh73mlbBcbiAgICBwdWJsaWMgT25SZWNlaXZlTWVzc2FnZShtc2c6c3RyaW5nLG1zZ0JvZHk6YW55KVxuICAgIHtcblxuICAgIH1cblxufVxuIl19