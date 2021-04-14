
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/ViewToast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d1575uhQJAk5CrCB7vxUak', 'ViewToast');
// Scripts/Modules/Views/ViewToast.ts

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
var ViewToast = /** @class */ (function (_super) {
    __extends(ViewToast, _super);
    function ViewToast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.unuseToastItem = [];
        _this.toastingObjCnt = 0;
        return _this;
    }
    ViewToast.prototype.OnAwake = function () {
        this.ToastItem = this.FindTransform("ToastItem");
        this.ToastObjs = this.FindTransform("ToastObjs");
    };
    ViewToast.prototype.OnShowView = function () {
    };
    ViewToast.prototype.OnHideView = function () {
    };
    ViewToast.prototype.OnFocus = function () {
    };
    ViewToast.prototype.OnDisFocus = function () {
    };
    ViewToast.prototype.OnDestroy = function () {
        this.unuseToastItem = [];
        this.toastingObjCnt = 0;
    };
    ViewToast.prototype.GetToastItem = function () {
        var ret = null;
        if (this.unuseToastItem.length > 0) {
            ret = this.unuseToastItem.pop();
        }
        if (ret == null) {
            ret = cc.instantiate(this.ToastItem);
            this.ToastObjs.addChild(ret);
            ret.position = cc.Vec2.ZERO;
        }
        ret.active = true;
        ret.opacity = 255;
        ret.position = cc.Vec2.ZERO;
        return ret;
    };
    ViewToast.prototype.AddToast = function (content) {
        // cc.error("content  "+ content);
        this.toastingObjCnt++;
        var toastItem = this.GetToastItem();
        cc.find("LabelContent1", toastItem).getComponent(cc.Label).string = content;
        cc.find("LabelContent1/LabelContent2", toastItem).getComponent(cc.Label).string = content;
        cc.find("LabelContent1/BG", toastItem).getComponent(cc.Widget).updateAlignment();
        var outside = this;
        var finished = cc.callFunc(function () {
            toastItem.active = false;
            outside.unuseToastItem.push(toastItem);
            outside.toastingObjCnt--;
            if (outside.toastingObjCnt <= 0) {
                outside.toastingObjCnt = 0;
                outside.Hide();
            }
        }, this, null);
        var spawn = cc.sequence(cc.moveBy(1, 0, 50), cc.spawn(cc.moveBy(2, 0, 100), cc.sequence(cc.fadeOut(2.0), finished)));
        toastItem.runAction(spawn);
    };
    return ViewToast;
}(View_1.default));
exports.default = ViewToast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFZpZXdUb2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0M7SUFBdUMsNkJBQUk7SUFBM0M7UUFBQSxxRUFzRkM7UUFqRlcsb0JBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLG9CQUFjLEdBQUcsQ0FBQyxDQUFDOztJQWdGL0IsQ0FBQztJQTlFVSwyQkFBTyxHQUFkO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sOEJBQVUsR0FBakI7SUFHQSxDQUFDO0lBRU0sOEJBQVUsR0FBakI7SUFHQSxDQUFDO0lBRU0sMkJBQU8sR0FBZDtJQUdBLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtJQUdBLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUVJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxnQ0FBWSxHQUFwQjtRQUVJLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQztRQUN2QixJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakM7WUFDSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNuQztRQUNELElBQUcsR0FBRyxJQUFJLElBQUksRUFDZDtZQUNJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSw0QkFBUSxHQUFmLFVBQWdCLE9BQWM7UUFFMUIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEVBQUcsQ0FBQztRQUN2QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzNFLEVBQUUsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3pGLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVoRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsY0FBYyxFQUFHLENBQUM7WUFDMUIsSUFBRyxPQUFPLENBQUMsY0FBYyxJQUFJLENBQUMsRUFDOUI7Z0JBQ0ksT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtRQUNMLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFZixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxILFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsQ0F0RnNDLGNBQUksR0FzRjFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uL01WQ0ZyYW1ld29yay9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdUb2FzdCBleHRlbmRzIFZpZXdcbntcbiAgICBwcml2YXRlIFRvYXN0SXRlbTpjYy5Ob2RlO1xuICAgIHByaXZhdGUgVG9hc3RPYmpzOmNjLk5vZGU7XG5cbiAgICBwcml2YXRlIHVudXNlVG9hc3RJdGVtOkFycmF5PGNjLk5vZGU+ID0gW107XG4gICAgcHJpdmF0ZSB0b2FzdGluZ09iakNudCA9IDA7XG5cbiAgICBwdWJsaWMgT25Bd2FrZSgpXG4gICAge1xuICAgICAgICB0aGlzLlRvYXN0SXRlbSA9IHRoaXMuRmluZFRyYW5zZm9ybShcIlRvYXN0SXRlbVwiKTtcbiAgICAgICAgdGhpcy5Ub2FzdE9ianMgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJUb2FzdE9ianNcIik7XG4gICAgfVxuXG4gICAgcHVibGljIE9uU2hvd1ZpZXcoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uSGlkZVZpZXcoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uRm9jdXMoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uRGlzRm9jdXMoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uRGVzdHJveSgpXG4gICAge1xuICAgICAgICB0aGlzLnVudXNlVG9hc3RJdGVtID0gW107XG4gICAgICAgIHRoaXMudG9hc3RpbmdPYmpDbnQgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgR2V0VG9hc3RJdGVtKCk6Y2MuTm9kZVxuICAgIHtcbiAgICAgICAgbGV0IHJldDpjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgaWYodGhpcy51bnVzZVRvYXN0SXRlbS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXQgPSB0aGlzLnVudXNlVG9hc3RJdGVtLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHJldCA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlRvYXN0SXRlbSk7XG4gICAgICAgICAgICB0aGlzLlRvYXN0T2Jqcy5hZGRDaGlsZChyZXQpO1xuICAgICAgICAgICAgcmV0LnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICB9XG4gICAgICAgIHJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgcmV0LnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRUb2FzdChjb250ZW50OnN0cmluZylcbiAgICB7XG4gICAgICAgIC8vIGNjLmVycm9yKFwiY29udGVudCAgXCIrIGNvbnRlbnQpO1xuICAgICAgICB0aGlzLnRvYXN0aW5nT2JqQ250ICsrO1xuICAgICAgICBsZXQgdG9hc3RJdGVtID0gdGhpcy5HZXRUb2FzdEl0ZW0oKTtcbiAgICAgICAgY2MuZmluZChcIkxhYmVsQ29udGVudDFcIix0b2FzdEl0ZW0pLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgY2MuZmluZChcIkxhYmVsQ29udGVudDEvTGFiZWxDb250ZW50MlwiLHRvYXN0SXRlbSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICBjYy5maW5kKFwiTGFiZWxDb250ZW50MS9CR1wiLHRvYXN0SXRlbSkuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG5cbiAgICAgICAgbGV0IG91dHNpZGUgPSB0aGlzO1xuICAgICAgICB2YXIgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2FzdEl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBvdXRzaWRlLnVudXNlVG9hc3RJdGVtLnB1c2godG9hc3RJdGVtKTtcbiAgICAgICAgICAgIG91dHNpZGUudG9hc3RpbmdPYmpDbnQgLS07XG4gICAgICAgICAgICBpZihvdXRzaWRlLnRvYXN0aW5nT2JqQ250IDw9IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0c2lkZS50b2FzdGluZ09iakNudCA9IDA7XG4gICAgICAgICAgICAgICAgb3V0c2lkZS5IaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMsIG51bGwpO1xuXG4gICAgICAgIGxldCBzcGF3biA9IGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgxLCAwLCA1MCksY2Muc3Bhd24oY2MubW92ZUJ5KDIsIDAsIDEwMCksY2Muc2VxdWVuY2UoY2MuZmFkZU91dCgyLjApLGZpbmlzaGVkKSkpO1xuXG4gICAgICAgIHRvYXN0SXRlbS5ydW5BY3Rpb24oc3Bhd24pO1xuICAgICAgICBcbiAgICB9XG5cbn1cbiJdfQ==