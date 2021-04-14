"use strict";
cc._RF.push(module, '7f355OFIeRJnqYKAql53eFX', 'UIItemDay');
// Scripts/Modules/Views/PayEn/UIItemDay.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../../Tools/Util");
var UIItemDay = /** @class */ (function () {
    function UIItemDay() {
    }
    UIItemDay.prototype.Init = function (node, idex, day, sel, cb) {
        var _this = this;
        this.node = node;
        this.index = idex;
        this.day = day;
        this.cb = cb;
        this.lbDay = this.node.getChildByName("lbDay").getComponent(cc.Label);
        this.lbDay.string = day;
        //this.spSel.enabled = sel;
        Util_1.default.SetClickAction(this.node.getComponent(cc.Button), function () {
            _this.cb(_this.index, _this.day);
        });
    };
    return UIItemDay;
}());
exports.default = UIItemDay;

cc._RF.pop();