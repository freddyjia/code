
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/PayEn/BounsItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFBheUVuXFxCb3Vuc0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFFdkM7SUFBQTtJQW1CQSxDQUFDO0lBZFUsd0JBQUksR0FBWCxVQUFZLElBQWEsRUFBRSxJQUFTLEVBQUUsZUFBMkM7UUFBakYsaUJBVUM7UUFURyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxjQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDN0IsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sOEJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi8uLi9Ub29scy9VdGlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3Vuc0l0ZW0ge1xyXG4gICAgcHJpdmF0ZSBub2RlOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIGJ1dHRvbjogY2MuQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBGcmVlX2Ftb3VudDogY2MuTGFiZWw7XHJcbiAgICBwdWJsaWMgSW5pdChub2RlOiBjYy5Ob2RlLCBkYXRhOiBhbnksIG9uY2xpY2tDYWxsYmFjazogKGJhbmtUeXBlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5GcmVlX2Ftb3VudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZyZWVfYW1vdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5GcmVlX2Ftb3VudC5zdHJpbmcgPSBcIjEwMFwiO1xyXG4gICAgICAgIFV0aWwuU2V0Q2xpY2tBY3Rpb24odGhpcy5idXR0b24sICgpID0+IHtcclxuICAgICAgICAgICAgb25jbGlja0NhbGxiYWNrKE51bWJlcih0aGlzLkZyZWVfYW1vdW50LnN0cmluZykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbW92ZVNlbGYoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgIH1cclxufSJdfQ==