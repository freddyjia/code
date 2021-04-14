"use strict";
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