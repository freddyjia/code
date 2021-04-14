
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/PayEn/UIItemDay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFBheUVuXFxVSUl0ZW1EYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBdUM7QUFFdkM7SUFBQTtJQW1CQSxDQUFDO0lBWlUsd0JBQUksR0FBWCxVQUFZLElBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUF3QjtRQUFuRSxpQkFXQztRQVZHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLDJCQUEyQjtRQUMzQixjQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuRCxLQUFJLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi8uLi9Ub29scy9VdGlsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUl0ZW1EYXkge1xyXG4gICAgcHJpdmF0ZSBub2RlOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkYXk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY2I6IChpbmRleCwgZGF5KSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBsYkRheTogY2MuTGFiZWw7XHJcbiAgICBwcml2YXRlIHNwU2VsOiBjYy5TcHJpdGU7XHJcbiAgICBwdWJsaWMgSW5pdChub2RlOiBjYy5Ob2RlLCBpZGV4LCBkYXksIHNlbCwgY2I6IChpbmRleCwgZGF5KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaWRleDtcclxuICAgICAgICB0aGlzLmRheSA9IGRheTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgdGhpcy5sYkRheSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiRGF5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYkRheS5zdHJpbmcgPSBkYXk7XHJcbiAgICAgICAgLy90aGlzLnNwU2VsLmVuYWJsZWQgPSBzZWw7XHJcbiAgICAgICAgVXRpbC5TZXRDbGlja0FjdGlvbih0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYih0aGlzLmluZGV4LCB0aGlzLmRheSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19