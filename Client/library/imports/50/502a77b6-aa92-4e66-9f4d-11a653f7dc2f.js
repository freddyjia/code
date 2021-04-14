"use strict";
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