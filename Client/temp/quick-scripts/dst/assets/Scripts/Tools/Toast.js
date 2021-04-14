
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHdEQUFtRDtBQUVuRDtJQUFBO0lBT0EsQ0FBQztJQUxpQixVQUFJLEdBQWxCLFVBQW1CLE9BQU87UUFFdEIsdUJBQWEsQ0FBQyxXQUFXLENBQUMsc0JBQVksQ0FBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlQ2VudGVyIGZyb20gXCIuLi9NVkNGcmFtZXdvcmsvTWVzc2FnZUNlbnRlclwiO1xuaW1wb3J0IE1lc3NhZ2VOYW1lcyBmcm9tIFwiLi4vTW9kdWxlcy9NZXNzYWdlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgXG57XG4gICAgcHVibGljIHN0YXRpYyBTaG93KGNvbnRlbnQpXG4gICAge1xuICAgICAgICBNZXNzYWdlQ2VudGVyLlNlbmRNZXNzYWdlKE1lc3NhZ2VOYW1lcy5TaG93VG9hc3RVSSxjb250ZW50KVxuICAgIH1cblxufVxuIl19