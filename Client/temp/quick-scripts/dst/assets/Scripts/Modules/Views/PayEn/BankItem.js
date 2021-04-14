
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/PayEn/BankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFBheUVuXFxCYW5rSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUF1QztBQUV2QztJQUFBO0lBMkJBLENBQUM7SUF0QlUsdUJBQUksR0FBWCxVQUFZLElBQWEsRUFBRSxJQUFTLEVBQUUsZUFBMkM7UUFBakYsaUJBWUM7UUFYRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNyQyxjQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7WUFDcEMsZUFBZSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTyxnQ0FBYSxHQUFyQixVQUFzQixNQUFlLEVBQUUsVUFBa0I7UUFDckQsY0FBYztRQUNkLGtGQUFrRjtRQUNsRixPQUFPO1FBQ1Asa0ZBQWtGO0lBQ3RGLENBQUM7SUFDTSw2QkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZVV0aWwgZnJvbSBcIi4uLy4uLy4uL1Rvb2xzL05vZGVVdGlsXCI7XHJcbmltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi8uLi9Ub29scy9VdGlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5LSXRlbSB7XHJcbiAgICBwcml2YXRlIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGRhdGE6IGFueTtcclxuICAgIHByaXZhdGUgYnV0dG9uOiBjYy5CdXR0b247XHJcbiAgICBwcml2YXRlIGJhbmtTcHJpdGU6IGNjLlNwcml0ZTtcclxuICAgIHB1YmxpYyBJbml0KG5vZGU6IGNjLk5vZGUsIGRhdGE6IGFueSwgb25jbGlja0NhbGxiYWNrOiAoYmFua1R5cGU6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLmJhbmtTcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYW5rU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGxldCBzcGlydGVOYW1lID0gXCJcIlxyXG4gICAgICAgIHRoaXMuU2V0VGV4dFNwcml0ZShmYWxzZSwgc3BpcnRlTmFtZSlcclxuICAgICAgICBVdGlsLlNldENsaWNrQWN0aW9uKHRoaXMuYnV0dG9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuU2V0VGV4dFNwcml0ZSh0cnVlLCBzcGlydGVOYW1lKVxyXG4gICAgICAgICAgICBvbmNsaWNrQ2FsbGJhY2sodGhpcy5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgU2V0VGV4dFNwcml0ZShzZWxlY3Q6IGJvb2xlYW4sIHNwaXJ0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGlmIChzZWxlY3QpXHJcbiAgICAgICAgLy8gICAgIE5vZGVVdGlsLlNldFNwcml0ZUZyYW1lKHRoaXMuYmFua1Nwcml0ZSwgXCJNYWluR2FtZS9BdGxhcy9wYXlcIiwgc3BpcnRlTmFtZSk7XHJcbiAgICAgICAgLy8gZWxzZVxyXG4gICAgICAgIC8vICAgICBOb2RlVXRpbC5TZXRTcHJpdGVGcmFtZSh0aGlzLmJhbmtTcHJpdGUsIFwiTWFpbkdhbWUvQXRsYXMvcGF5XCIsIHNwaXJ0ZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbW92ZVNlbGYoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgfVxyXG59Il19