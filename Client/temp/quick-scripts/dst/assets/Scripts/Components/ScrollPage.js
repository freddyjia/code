
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/ScrollPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51615YbSVdHbZxdrPvz8tL+', 'ScrollPage');
// Scripts/Components/ScrollPage.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../Tools/Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollPage = /** @class */ (function (_super) {
    __extends(ScrollPage, _super);
    function ScrollPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BtnLeft = null;
        _this.BtnRight = null;
        _this.parentWidth = 0;
        _this.initOffset = 0;
        _this.MoveOffset = 260 * 4;
        return _this;
    }
    ScrollPage.prototype.onLoad = function () {
        var _this = this;
        this.scrollView = this.getComponent(cc.ScrollView);
        this.parentWidth = this.scrollView.content.parent.getContentSize().width;
        this.initOffset = this.parentWidth * 0.5;
        /*
        Util.SetScrollViewScrollEvent(
            this.getComponent(cc.ScrollView),
            (scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, data:any)=>{
                if (eventType == cc.ScrollView.EventType.SCROLL_ENDED)
                {
                    this.OnEndDrag();
                }
            }
        );
        */
        this.BtnRight.node.active = false;
        this.BtnLeft.node.active = false;
        Util_1.default.SetClickAction(this.BtnLeft, function (btn, data) {
            _this.MoveLeft();
        });
        Util_1.default.SetClickAction(this.BtnRight, function (btn, data) {
            _this.MoveRight();
        });
        this.lastOffsetX = -999;
        this.lastMaxOffsetX = -999;
    };
    ScrollPage.prototype.update = function (dt) {
        if (this.scrollView.isScrolling())
            return;
        this.ShowButtons();
    };
    // private OnEndDrag()
    // {
    //     this.ShowButtons();
    // }
    ScrollPage.prototype.ShowButtons = function () {
        if (this.scrollView.getMaxScrollOffset().x < 100) {
            if (Math.abs(this.lastMaxOffsetX - this.scrollView.getMaxScrollOffset().x) < 50)
                return;
            this.lastMaxOffsetX = this.scrollView.getMaxScrollOffset().x;
            this.BtnLeft.node.active = false;
            this.BtnRight.node.active = false;
        }
        else {
            if (Math.abs(this.lastOffsetX - this.scrollView.getScrollOffset().x) < 50)
                return;
            this.lastOffsetX = this.scrollView.getScrollOffset().x;
            var scrollOffset = -this.scrollView.getScrollOffset().x / this.scrollView.getMaxScrollOffset().x;
            if (scrollOffset > 0.2) {
                this.BtnLeft.node.active = true;
            }
            else {
                this.BtnLeft.node.active = false;
            }
            if (scrollOffset < 0.8) {
                this.BtnRight.node.active = true;
            }
            else {
                this.BtnRight.node.active = false;
            }
        }
    };
    ScrollPage.prototype.MoveLeft = function () {
        var totalWidth = this.scrollView.content.width - this.parentWidth;
        if (totalWidth <= 0)
            return;
        var oldx = this.scrollView.content.position.x;
        var newx = oldx + this.MoveOffset;
        if (newx > -this.initOffset) {
            newx = -this.initOffset;
            this.BtnLeft.node.active = false;
            this.BtnRight.node.active = true;
        }
        newx += this.initOffset;
        var percent = Math.abs(newx / totalWidth);
        this.scrollView.scrollToPercentHorizontal(percent, 0.1);
    };
    ScrollPage.prototype.MoveRight = function () {
        var totalWidth = this.scrollView.content.width - this.parentWidth;
        if (totalWidth <= 0)
            return;
        var oldx = this.scrollView.content.position.x;
        var newx = oldx - this.MoveOffset;
        if (newx < -totalWidth) {
            newx = -totalWidth;
            this.BtnLeft.node.active = true;
            this.BtnRight.node.active = false;
        }
        newx -= this.initOffset;
        var percent = Math.abs(newx / totalWidth);
        this.scrollView.scrollToPercentHorizontal(percent, 0.1);
    };
    __decorate([
        property(cc.Button)
    ], ScrollPage.prototype, "BtnLeft", void 0);
    __decorate([
        property(cc.Button)
    ], ScrollPage.prototype, "BtnRight", void 0);
    ScrollPage = __decorate([
        ccclass
    ], ScrollPage);
    return ScrollPage;
}(cc.Component));
exports.default = ScrollPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcU2Nyb2xsUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUM7QUFFM0IsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQTZJQztRQXpJVSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFakMsaUJBQVcsR0FBVSxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBVSxDQUFDLENBQUM7UUFFdEIsZ0JBQVUsR0FBVSxHQUFHLEdBQUMsQ0FBQyxDQUFDOztJQWlJOUIsQ0FBQztJQTVIRywyQkFBTSxHQUFOO1FBQUEsaUJBK0JDO1FBN0JHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBQyxHQUFHLENBQUM7UUFFdkM7Ozs7Ozs7Ozs7VUFVRTtRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVqQyxjQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFhLEVBQUUsSUFBUTtZQUN0RCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxjQUFJLENBQUMsY0FBYyxDQUFD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LENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDYTtJQU5oQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNEk5QjtJQUFELGlCQUFDO0NBNUlELEFBNElDLENBNUl1QyxFQUFFLENBQUMsU0FBUyxHQTRJbkQ7a0JBNUlvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL1Rvb2xzL1V0aWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsUGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHB1YmxpYyBCdG5MZWZ0OmNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHB1YmxpYyBCdG5SaWdodDpjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHBhcmVudFdpZHRoOm51bWJlciA9IDA7XHJcbiAgICBpbml0T2Zmc2V0Om51bWJlciA9IDA7XHJcbiAgICBzY3JvbGxWaWV3OmNjLlNjcm9sbFZpZXc7XHJcbiAgICBNb3ZlT2Zmc2V0Om51bWJlciA9IDI2MCo0O1xyXG5cclxuICAgIHByaXZhdGUgbGFzdE9mZnNldFg6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0TWF4T2Zmc2V0WDpudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRXaWR0aCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBhcmVudC5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaW5pdE9mZnNldCA9IHRoaXMucGFyZW50V2lkdGgqMC41O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIFV0aWwuU2V0U2Nyb2xsVmlld1Njcm9sbEV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KSxcclxuICAgICAgICAgICAgKHNjcm9sbFZpZXc6Y2MuU2Nyb2xsVmlldywgZXZlbnRUeXBlOmNjLlNjcm9sbFZpZXcuRXZlbnRUeXBlLCBkYXRhOmFueSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGUgPT0gY2MuU2Nyb2xsVmlldy5FdmVudFR5cGUuU0NST0xMX0VOREVEKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25FbmREcmFnKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIHRoaXMuQnRuUmlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJ0bkxlZnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBVdGlsLlNldENsaWNrQWN0aW9uKHRoaXMuQnRuTGVmdCwgKGJ0bjpjYy5CdXR0b24sIGRhdGE6YW55KT0+e1xyXG4gICAgICAgICAgICB0aGlzLk1vdmVMZWZ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFV0aWwuU2V0Q2xpY2tBY3Rpb24odGhpcy5CdG5SaWdodCwgKGJ0bjpjYy5CdXR0b24sIGRhdGE6YW55KT0+e1xyXG4gICAgICAgICAgICB0aGlzLk1vdmVSaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RPZmZzZXRYID0gLTk5OTtcclxuICAgICAgICB0aGlzLmxhc3RNYXhPZmZzZXRYID0gLTk5OTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuU2hvd0J1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIE9uRW5kRHJhZygpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgdGhpcy5TaG93QnV0dG9ucygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgU2hvd0J1dHRvbnMoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVmlldy5nZXRNYXhTY3JvbGxPZmZzZXQoKS54IDwgMTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5sYXN0TWF4T2Zmc2V0WCAtIHRoaXMuc2Nyb2xsVmlldy5nZXRNYXhTY3JvbGxPZmZzZXQoKS54KSA8IDUwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RNYXhPZmZzZXRYID0gdGhpcy5zY3JvbGxWaWV3LmdldE1heFNjcm9sbE9mZnNldCgpLng7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuTGVmdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkJ0blJpZ2h0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMubGFzdE9mZnNldFggLSB0aGlzLnNjcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCkueCkgPCA1MClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldFggPSB0aGlzLnNjcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCkueDtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IC10aGlzLnNjcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCkueCAvIHRoaXMuc2Nyb2xsVmlldy5nZXRNYXhTY3JvbGxPZmZzZXQoKS54O1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsT2Zmc2V0ID4gMC4yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0bkxlZnQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5MZWZ0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZihzY3JvbGxPZmZzZXQgPCAwLjgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuUmlnaHQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5SaWdodC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlTGVmdCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC53aWR0aCAtIHRoaXMucGFyZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKHRvdGFsV2lkdGggPD0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgb2xkeCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBvc2l0aW9uLng7XHJcbiAgICAgICAgbGV0IG5ld3ggPSBvbGR4ICsgdGhpcy5Nb3ZlT2Zmc2V0O1xyXG4gICAgICAgIGlmIChuZXd4ID4gLXRoaXMuaW5pdE9mZnNldClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld3ggPSAtdGhpcy5pbml0T2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLkJ0bkxlZnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5CdG5SaWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBuZXd4ICs9IHRoaXMuaW5pdE9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGVyY2VudCA9IE1hdGguYWJzKG5ld3gvdG90YWxXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUGVyY2VudEhvcml6b250YWwocGVyY2VudCwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZVJpZ2h0KClcclxuICAgIHtcclxuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoIC0gdGhpcy5wYXJlbnRXaWR0aDtcclxuICAgICAgICBpZiAodG90YWxXaWR0aCA8PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBvbGR4ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucG9zaXRpb24ueDtcclxuICAgICAgICBsZXQgbmV3eCA9IG9sZHggLSB0aGlzLk1vdmVPZmZzZXQ7XHJcbiAgICAgICAgaWYgKG5ld3ggPCAtdG90YWxXaWR0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ld3ggPSAtdG90YWxXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5CdG5MZWZ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5CdG5SaWdodC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICBuZXd4IC09IHRoaXMuaW5pdE9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGVyY2VudCA9IE1hdGguYWJzKG5ld3gvdG90YWxXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUGVyY2VudEhvcml6b250YWwocGVyY2VudCwgMC4xKTtcclxuICAgIH1cclxufVxyXG4iXX0=