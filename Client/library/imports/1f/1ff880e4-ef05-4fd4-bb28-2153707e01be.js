"use strict";
cc._RF.push(module, '1ff88Dk7wVP1LsoIVNwfgG+', 'BounsItem');
// Scripts/Modules/Views/PayEn/BounsItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../../Tools/Util");
var BounsItem = /** @class */ (function () {
    function BounsItem() {
    }
    BounsItem.prototype.Init = function (node, data, onclickCallback) {
        var _this = this;
        this.node = node;
        this.node.active = true;
        this.data = data;
        this.button = this.node.getComponent(cc.Button);
        this.Free_amount = this.node.getChildByName("Free_amount").getComponent(cc.Label);
        this.Free_amount.string = "100";
        Util_1.default.SetClickAction(this.button, function () {
            onclickCallback(Number(_this.Free_amount.string));
        });
    };
    BounsItem.prototype.RemoveSelf = function () {
        this.node.removeFromParent();
    };
    return BounsItem;
}());
exports.default = BounsItem;

cc._RF.pop();