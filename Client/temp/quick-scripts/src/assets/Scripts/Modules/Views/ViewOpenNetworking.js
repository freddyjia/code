"use strict";
cc._RF.push(module, '5243b4RpmlERYovIUbN307d', 'ViewOpenNetworking');
// Scripts/Modules/Views/ViewOpenNetworking.ts

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
var TimerManager_1 = require("../../Components/TimerManager");
var ViewOpenNetworking = /** @class */ (function (_super) {
    __extends(ViewOpenNetworking, _super);
    function ViewOpenNetworking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewOpenNetworking.prototype.OnAwake = function () {
        // this.LabelLoading = this.FindTransform("LabelLoading").getComponent(cc.Label);
        // this.LabelLoading.node.active = false;
        this.Content = this.FindTransform("Content");
        this.Content.active = false;
    };
    ViewOpenNetworking.prototype.Refresh = function (content) {
        var _this = this;
        this.timerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            // this.LabelLoading.node.active = true;
            _this.Content.active = true;
        }, 1);
        if (content != "")
            this.LabelLoading.string = content;
    };
    ViewOpenNetworking.prototype.OnShowView = function () {
    };
    ViewOpenNetworking.prototype.OnHideView = function () {
        TimerManager_1.default.GetInstance().DeleteTimer(this.timerID);
        // this.LabelLoading.node.active = false;
        this.Content.active = false;
    };
    return ViewOpenNetworking;
}(View_1.default));
exports.default = ViewOpenNetworking;

cc._RF.pop();