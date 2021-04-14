"use strict";
cc._RF.push(module, '4c9d6Ji1alAIb/XJvvzaGZs', 'XTweenObserver');
// Scripts/Tools/XTween/Base/XTweenObserver.ts

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
var Util_1 = require("../../Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var XTweenObserver = /** @class */ (function (_super) {
    __extends(XTweenObserver, _super);
    function XTweenObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listTweeners = [];
        return _this;
    }
    XTweenObserver.prototype.GetListTweeners = function () {
        return this.listTweeners;
    };
    XTweenObserver.prototype.AddXTweener = function (xTweener) {
        for (var i = 0; i < this.listTweeners.length; i++) {
            var tweener = this.listTweeners[i];
            if (tweener.GetTypeMark() == xTweener.GetTypeMark() && xTweener.GetControlByParent()) {
                tweener.BeReplaced();
                break;
            }
        }
        this.listTweeners.push(xTweener);
    };
    XTweenObserver.prototype.RemoveTweener = function (xTweener) {
        // for(let i=0;i<this.listTweeners.length;i++)
        // {
        //     let tweener = this.listTweeners[i];
        //     if(tweener == xTweener)
        //     {
        //         Util.RemoveArray(this.listTweeners,)
        //     }
        // }
        Util_1.default.RemoveArray(this.listTweeners, xTweener);
    };
    XTweenObserver.prototype.onEnable = function () {
        for (var i = 0; i < this.listTweeners.length; i++) {
            var tweener = this.listTweeners[i];
            tweener.OnEnable();
        }
    };
    XTweenObserver.prototype.onDisable = function () {
        for (var i = 0; i < this.listTweeners.length; i++) {
            var tweener = this.listTweeners[i];
            tweener.OnDisable();
        }
    };
    XTweenObserver.prototype.onDestroy = function () {
        for (var i = 0; i < this.listTweeners.length; i++) {
            var tweener = this.listTweeners[i];
            tweener.OnDestroy();
        }
    };
    XTweenObserver = __decorate([
        ccclass
    ], XTweenObserver);
    return XTweenObserver;
}(cc.Component));
exports.default = XTweenObserver;

cc._RF.pop();