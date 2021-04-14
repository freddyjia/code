"use strict";
cc._RF.push(module, 'da267A9TBxGrKJ3lMELQqeQ', 'BankItem');
// Scripts/Modules/Views/PayEn/BankItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../../Tools/Util");
var BanKItem = /** @class */ (function () {
    function BanKItem() {
    }
    BanKItem.prototype.Init = function (node, data, onclickCallback) {
        var _this = this;
        this.node = node;
        this.node.active = true;
        this.data = data;
        this.button = this.node.getComponent(cc.Button);
        this.bankSprite = this.node.getChildByName("bankSprite").getComponent(cc.Sprite);
        var spirteName = "";
        this.SetTextSprite(false, spirteName);
        Util_1.default.SetClickAction(this.button, function () {
            _this.SetTextSprite(true, spirteName);
            onclickCallback(_this.data);
        });
    };
    BanKItem.prototype.SetTextSprite = function (select, spirteName) {
        // if (select)
        //     NodeUtil.SetSpriteFrame(this.bankSprite, "MainGame/Atlas/pay", spirteName);
        // else
        //     NodeUtil.SetSpriteFrame(this.bankSprite, "MainGame/Atlas/pay", spirteName);
    };
    BanKItem.prototype.RemoveSelf = function () {
        this.node.removeFromParent();
    };
    return BanKItem;
}());
exports.default = BanKItem;

cc._RF.pop();