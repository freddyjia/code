"use strict";
cc._RF.push(module, '27684+suVpMLbDqcj0tzavZ', 'ViewDialogNormal');
// Scripts/Modules/Views/ViewDialogNormal.ts

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
var View_1 = require("../../MVCFramework/View");
var Util_1 = require("../../Tools/Util");
var Global_1 = require("../../Global/Global");
var ViewDialogNormal = /** @class */ (function (_super) {
    __extends(ViewDialogNormal, _super);
    function ViewDialogNormal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDialogNormal.prototype.OnAwake = function () {
        var _this = this;
        if (Global_1.default.showLog == true)
            cc.log("ViewTest1 OnAwake");
        this.ButtonYes = this.FindTransform("ButtonYes").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonYes, function (button, data) {
            _this.Hide();
            if (_this.data.yesCallback != null) {
                _this.data.yesCallback();
            }
        });
        this.ButtonNo = this.FindTransform("ButtonNo").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonNo, function (button, data) {
            _this.Hide();
            if (_this.data.noCallback != null) {
                _this.data.noCallback();
            }
        });
        this.ButtonClose = this.FindTransform("ButtonClose").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonClose, function (button, data) {
            _this.Hide();
        });
        this.LabelTitle = this.FindTransform("LabelTitle").getComponent(cc.Label);
        this.LabelContent = this.FindTransform("LabelContent").getComponent(cc.Label);
        this.LabelYes = this.FindTransform("LabelYes").getComponent(cc.Label);
        this.LabelNo = this.FindTransform("LabelNo").getComponent(cc.Label);
    };
    ViewDialogNormal.prototype.OnShowView = function () {
    };
    ViewDialogNormal.prototype.OnHideView = function () {
    };
    ViewDialogNormal.prototype.OnFocus = function () {
    };
    ViewDialogNormal.prototype.OnDisFocus = function () {
    };
    ViewDialogNormal.prototype.OnDestroy = function () {
    };
    ViewDialogNormal.prototype.SetData = function (data) {
        this.data = data;
        this.LabelContent.string = this.data.content;
        this.LabelTitle.string = this.data.title;
        this.ButtonYes.node.active = this.data.showYes;
        this.ButtonNo.node.active = this.data.showNo;
        this.LabelYes.string = this.data.yesText;
        this.LabelNo.string = this.data.noText;
    };
    return ViewDialogNormal;
}(View_1.default));
exports.default = ViewDialogNormal;

cc._RF.pop();