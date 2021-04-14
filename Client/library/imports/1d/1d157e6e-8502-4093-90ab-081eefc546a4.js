"use strict";
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