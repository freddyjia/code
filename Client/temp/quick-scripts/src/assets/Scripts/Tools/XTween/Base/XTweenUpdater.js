"use strict";
cc._RF.push(module, '8bde3TPQgxHuYVxa6FOpoo3', 'XTweenUpdater');
// Scripts/Tools/XTween/Base/XTweenUpdater.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenGlobal_1 = require("./XTweenGlobal");
var Util_1 = require("../../Util");
var UpdateBeat_1 = require("../../../Manager/UpdateBeat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var XTweenUpdater = /** @class */ (function () {
    /**
     *
     */
    function XTweenUpdater() {
        var _this = this;
        this.tweeners = [];
        // super();
        UpdateBeat_1.default.GetInstance().Add(function (deltaTime) {
            _this.UpdateFunc(deltaTime);
        });
    }
    XTweenUpdater_1 = XTweenUpdater;
    XTweenUpdater.GetInstance = function () {
        if (this.m_Instance == null) {
            // let node:cc.Node = new cc.Node("XTweenUpdater");
            // node.setParent(cc.find("Main"));
            // this.m_Instance = node.addComponent(XTweenUpdater);
            this.m_Instance = new XTweenUpdater_1();
        }
        return this.m_Instance;
    };
    XTweenUpdater.prototype.AddTweener = function (tweener) {
        this.tweeners.push(tweener);
    };
    XTweenUpdater.prototype.Clear = function () {
        this.tweeners = [];
    };
    XTweenUpdater.prototype.UpdateFunc = function (deltaTime) {
        var tNeedRemove = [];
        for (var i = 0; i < this.tweeners.length; i++) {
            var tweener = this.tweeners[i];
            if (tweener.GetState() == XTweenGlobal_1.XTweenerState.Playing) {
                tweener.Update(deltaTime);
            }
            if (tweener.GetState() == XTweenGlobal_1.XTweenerState.End) {
                tNeedRemove.push(tweener);
            }
        }
        for (var i = 0; i < tNeedRemove.length; i++) {
            var needRemoveTweener = tNeedRemove[i];
            Util_1.default.RemoveArray(this.tweeners, needRemoveTweener);
        }
    };
    var XTweenUpdater_1;
    XTweenUpdater = XTweenUpdater_1 = __decorate([
        ccclass
    ], XTweenUpdater);
    return XTweenUpdater;
}());
exports.default = XTweenUpdater;

cc._RF.pop();