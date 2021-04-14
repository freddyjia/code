
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Controllers/ControllerDialogNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '502a7e2qpJOZp9NEaZT99wv', 'ControllerDialogNormal');
// Scripts/Modules/Controllers/ControllerDialogNormal.ts

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
var ControllerDialogNormal = /** @class */ (function (_super) {
    __extends(ControllerDialogNormal, _super);
    function ControllerDialogNormal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerDialogNormal.prototype.Init = function () {
    };
    ControllerDialogNormal.prototype.Clean = function () {
    };
    ControllerDialogNormal.prototype.OnReceiveMessage = function (msg, msgBody) {
        var _this = this;
        if (msg == MessageNames_1.default.ShowDialog) {
            if (this.view == null) {
                this.view = this.GetView(MVCRegister_1.ViewNames.ViewDialogNormal);
            }
            this.view.Show(function () {
                _this.view.SetData(msgBody);
            });
        }
        // else if(msg == MessageNames.TryToCloseDialogWithContent)
        // {
        //     if(this.view != null && this.view.isShow == true && this.view.LabelContent.string == msgBody)
        //     {
        //         this.view.Hide();
        //     }
        // }
    };
    return ControllerDialogNormal;
}(Controller_1.default));
exports.default = ControllerDialogNormal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcQ29udHJvbGxlcnNcXENvbnRyb2xsZXJEaWFsb2dOb3JtYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBRXZELGdEQUEyQztBQUMzQyw4Q0FBMkM7QUFHM0M7SUFBb0QsMENBQVU7SUFBOUQ7O0lBbUNBLENBQUM7SUEvQlUscUNBQUksR0FBWDtJQUdBLENBQUM7SUFFTSxzQ0FBSyxHQUFaO0lBR0EsQ0FBQztJQUVNLGlEQUFnQixHQUF2QixVQUF3QixHQUFVLEVBQUMsT0FBVztRQUE5QyxpQkFtQkM7UUFqQkcsSUFBRyxHQUFHLElBQUksc0JBQVksQ0FBQyxVQUFVLEVBQ2pDO1lBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFDcEI7Z0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUMsZ0JBQWdCLENBQXFCLENBQUM7YUFDNUU7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDWCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFxQixDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELDJEQUEyRDtRQUMzRCxJQUFJO1FBQ0osb0dBQW9HO1FBQ3BHLFFBQVE7UUFDUiw0QkFBNEI7UUFDNUIsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQW5DQSxBQW1DQyxDQW5DbUQsb0JBQVUsR0FtQzdEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL01WQ0ZyYW1ld29yay9Db250cm9sbGVyXCI7XG5pbXBvcnQgVmlld0RpYWxvZ05vcm1hbCBmcm9tIFwiLi4vVmlld3MvVmlld0RpYWxvZ05vcm1hbFwiO1xuaW1wb3J0IE1lc3NhZ2VOYW1lcyBmcm9tIFwiLi4vTWVzc2FnZU5hbWVzXCI7XG5pbXBvcnQgeyBWaWV3TmFtZXMgfSBmcm9tIFwiLi4vTVZDUmVnaXN0ZXJcIjtcbmltcG9ydCB7IERpYWxvZ0RhdGEgfSBmcm9tIFwiLi4vLi4vVG9vbHMvRGlhbG9nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJEaWFsb2dOb3JtYWwgZXh0ZW5kcyBDb250cm9sbGVyIFxue1xuICAgIHByaXZhdGUgdmlldzpWaWV3RGlhbG9nTm9ybWFsO1xuXG4gICAgcHVibGljIEluaXQoKVxuICAgIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhbigpXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgT25SZWNlaXZlTWVzc2FnZShtc2c6c3RyaW5nLG1zZ0JvZHk6YW55KVxuICAgIHtcbiAgICAgICAgaWYobXNnID09IE1lc3NhZ2VOYW1lcy5TaG93RGlhbG9nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLnZpZXcgPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLkdldFZpZXcoVmlld05hbWVzLlZpZXdEaWFsb2dOb3JtYWwpIGFzIFZpZXdEaWFsb2dOb3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcuU2hvdygoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5TZXREYXRhKG1zZ0JvZHkgYXMgRGlhbG9nRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGlmKG1zZyA9PSBNZXNzYWdlTmFtZXMuVHJ5VG9DbG9zZURpYWxvZ1dpdGhDb250ZW50KVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZih0aGlzLnZpZXcgIT0gbnVsbCAmJiB0aGlzLnZpZXcuaXNTaG93ID09IHRydWUgJiYgdGhpcy52aWV3LkxhYmVsQ29udGVudC5zdHJpbmcgPT0gbXNnQm9keSlcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZpZXcuSGlkZSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG59XG4iXX0=