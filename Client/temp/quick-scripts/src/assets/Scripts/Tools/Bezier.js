"use strict";
cc._RF.push(module, '9872c45xCNB7a0ZfC9gQ8F5', 'Bezier');
// Scripts/Tools/Bezier.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bezier = /** @class */ (function (_super) {
    __extends(Bezier, _super);
    function Bezier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bezier.prototype.start = function () {
    };
    Bezier.prototype.update = function (dt) {
        if (!this.hasInitData) {
            return;
        }
        if (this.timer <= 1) {
            var finalPos = new cc.Vec2(this.startPos.x * (1 - this.timer) * (1 - this.timer) + this.centerPos.x * 2 * this.timer * (1 - this.timer) + this.tarPos.x * this.timer * this.timer, this.startPos.y * (1 - this.timer) * (1 - this.timer) + this.centerPos.y * 2 * this.timer * (1 - this.timer) + this.tarPos.y * this.timer * this.timer);
            this.node.position = finalPos;
            this.timer = this.timer + dt * this.timeScale;
        }
        else {
            this.node.position = this.tarPos;
            this.hasInitData = false;
            if (this.finishCallback != null) {
                this.finishCallback(this.finishCallbackParm, this.node);
            }
        }
    };
    Bezier.prototype.SetMoveTrail = function (startPosX, startPosY, centerPosX, centerPosY, tarPosX, tarPosY, timeScale, finishCallbackParm, finishCallback) {
        this.timeScale = timeScale;
        this.tarPos = new cc.Vec2(tarPosX, tarPosY);
        this.centerPos = new cc.Vec2(centerPosX, centerPosY);
        this.startPos = new cc.Vec2(startPosX, startPosY);
        this.finishCallback = finishCallback;
        this.finishCallbackParm = finishCallbackParm;
        this.hasInitData = true;
        this.node.position = this.startPos;
        this.timer = 0;
    };
    Bezier = __decorate([
        ccclass
    ], Bezier);
    return Bezier;
}(cc.Component));
exports.default = Bezier;

cc._RF.pop();