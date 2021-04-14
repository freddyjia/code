"use strict";
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