
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/UIAnimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fdf56r8AhF5rCLiCi2J2z1', 'UIAnimation');
// Scripts/Components/UIAnimation.ts

"use strict";
/*
序列帧动画控件
*/
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
var UIAnimation = /** @class */ (function (_super) {
    __extends(UIAnimation, _super);
    function UIAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 当前帧的图片
        _this.sprite = null;
        /** 播放动画所需要的图集 */
        _this.spriteFrameList = [];
        /** 播放动画所需要的间隔时间 */
        _this.duration = 0.2;
        /** 是否循环播放 */
        _this.is_loop = false;
        /** 是否加载的时候播放 */
        _this.is_play_onload = false;
        /** 播放完成后是否消耗 */
        _this.is_destroy = false;
        /** 延迟多少秒播放动画 */
        _this.timeDelay = 0;
        /** 如果是重复播放动画多少秒后在播放 */
        _this.playTimeEndDelay = 0;
        _this.played_time = 0;
        _this.is_playing = false;
        _this._currentDelay = false;
        _this._currentPlayDelay = false;
        return _this;
    }
    UIAnimation.prototype.start = function () {
        if (this.is_play_onload) {
            this.play();
        }
    };
    UIAnimation.prototype.play = function () {
        if (this.is_loop) {
            this.play_loop();
        }
        else {
            this.play_once();
        }
    };
    UIAnimation.prototype.play_once = function () {
        if (this.spriteFrameList.length <= 1) {
            return;
        }
        if (this.timeDelay > 0) {
            this._currentDelay = true;
            this.scheduleOnce(this._updateTimeDelayState.bind(this), this.timeDelay);
        }
        this.played_time = 0;
        this.is_playing = true;
        this.is_loop = false;
    };
    UIAnimation.prototype.play_loop = function () {
        if (this.spriteFrameList.length <= 1) {
            return;
        }
        if (this.timeDelay > 0) {
            this._currentDelay = true;
            this.scheduleOnce(this._updateTimeDelayState.bind(this), this.timeDelay);
        }
        this.played_time = 0;
        this.is_playing = true;
        this.is_loop = true;
    };
    UIAnimation.prototype.stop = function () {
        this.is_playing = false;
        this.played_time = 0;
    };
    UIAnimation.prototype._updateTimeDelayState = function () {
        this._currentDelay = false;
    };
    UIAnimation.prototype._updatePlayTimeDelayState = function () {
        this._currentPlayDelay = false;
    };
    UIAnimation.prototype.update = function (dt) {
        if (!this.is_playing) {
            return;
        }
        if (this._currentDelay || this._currentPlayDelay) {
            return;
        }
        this.played_time += dt;
        var index = Math.floor(this.played_time / this.duration);
        if (!this.is_loop) {
            if (index >= this.spriteFrameList.length) {
                this.is_playing = false;
                this.played_time = 0;
                if (this.is_destroy) {
                    this.node.destroy();
                }
                return;
            }
            this.sprite.spriteFrame = this.spriteFrameList[index];
        }
        else {
            if (index >= this.spriteFrameList.length) {
                this.played_time -= (this.duration * this.spriteFrameList.length);
                index -= this.spriteFrameList.length;
                this._currentPlayDelay = (this.timeDelay > 0);
                this.scheduleOnce(this._updatePlayTimeDelayState.bind(this), this.playTimeEndDelay);
            }
            this.sprite.spriteFrame = this.spriteFrameList[index];
        }
    };
    __decorate([
        property(cc.Sprite)
    ], UIAnimation.prototype, "sprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], UIAnimation.prototype, "spriteFrameList", void 0);
    __decorate([
        property(cc.Integer)
    ], UIAnimation.prototype, "duration", void 0);
    __decorate([
        property(cc.Boolean)
    ], UIAnimation.prototype, "is_loop", void 0);
    __decorate([
        property(cc.Boolean)
    ], UIAnimation.prototype, "is_play_onload", void 0);
    __decorate([
        property(cc.Boolean)
    ], UIAnimation.prototype, "is_destroy", void 0);
    __decorate([
        property(cc.Integer)
    ], UIAnimation.prototype, "timeDelay", void 0);
    __decorate([
        property(cc.Integer)
    ], UIAnimation.prototype, "playTimeEndDelay", void 0);
    UIAnimation = __decorate([
        ccclass
    ], UIAnimation);
    return UIAnimation;
}(cc.Component));
exports.default = UIAnimation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcVUlBbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztFQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRTFDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBeUdDO1FBdkdHLFNBQVM7UUFFVCxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLGlCQUFpQjtRQUVqQixxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFDdkMsbUJBQW1CO1FBRW5CLGNBQVEsR0FBVyxHQUFHLENBQUM7UUFDdkIsYUFBYTtRQUViLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZ0JBQWdCO1FBRWhCLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGdCQUFnQjtRQUVoQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBZ0I7UUFFaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0Qix1QkFBdUI7UUFFdkIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFpQixHQUFHLEtBQUssQ0FBQTs7SUE0RTdCLENBQUM7SUEzRUcsMkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFDRCwwQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBQ0QsK0JBQVMsR0FBVDtR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QUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDdkY7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQXBHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dEQUNZO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ0U7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDSTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3VEQUNXO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ087SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztrREFDQztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNRO0lBeEJaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3Ry9CO0lBQUQsa0JBQUM7Q0F4R0QsQUF3R0MsQ0F4R3dDLEVBQUUsQ0FBQyxTQUFTLEdBd0dwRDtrQkF4R29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7luo/liJfluKfliqjnlLvmjqfku7ZcclxuKi9cclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUFuaW1hdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvLyDlvZPliY3luKfnmoTlm77niYdcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvKiog5pKt5pS+5Yqo55S75omA6ZyA6KaB55qE5Zu+6ZuGICovXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHNwcml0ZUZyYW1lTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgLyoqIOaSreaUvuWKqOeUu+aJgOmcgOimgeeahOmXtOmalOaXtumXtCAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBkdXJhdGlvbjogbnVtYmVyID0gMC4yO1xyXG4gICAgLyoqIOaYr+WQpuW+queOr+aSreaUviAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBpc19sb29wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiog5piv5ZCm5Yqg6L2955qE5pe25YCZ5pKt5pS+ICovXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGlzX3BsYXlfb25sb2FkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiog5pKt5pS+5a6M5oiQ5ZCO5piv5ZCm5raI6ICXICovXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGlzX2Rlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiDlu7bov5/lpJrlsJHnp5Lmkq3mlL7liqjnlLsgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgdGltZURlbGF5OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOWmguaenOaYr+mHjeWkjeaSreaUvuWKqOeUu+WkmuWwkeenkuWQjuWcqOaSreaUviAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwbGF5VGltZUVuZERlbGF5OiBudW1iZXIgPSAwO1xyXG4gICAgcGxheWVkX3RpbWUgPSAwO1xyXG4gICAgaXNfcGxheWluZyA9IGZhbHNlO1xyXG4gICAgX2N1cnJlbnREZWxheSA9IGZhbHNlO1xyXG4gICAgX2N1cnJlbnRQbGF5RGVsYXkgPSBmYWxzZVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX3BsYXlfb25sb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNfbG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlfbG9vcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheV9vbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcGxheV9vbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lTGlzdC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVEZWxheSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudERlbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fdXBkYXRlVGltZURlbGF5U3RhdGUuYmluZCh0aGlzKSwgdGhpcy50aW1lRGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllZF90aW1lID0gMDtcclxuICAgICAgICB0aGlzLmlzX3BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfbG9vcCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcGxheV9sb29wKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lTGlzdC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVEZWxheSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudERlbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fdXBkYXRlVGltZURlbGF5U3RhdGUuYmluZCh0aGlzKSwgdGhpcy50aW1lRGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllZF90aW1lID0gMDtcclxuICAgICAgICB0aGlzLmlzX3BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNfbG9vcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuaXNfcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVkX3RpbWUgPSAwO1xyXG4gICAgfVxyXG4gICAgX3VwZGF0ZVRpbWVEZWxheVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnREZWxheSAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIF91cGRhdGVQbGF5VGltZURlbGF5U3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBsYXlEZWxheSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc19wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnREZWxheSB8fCB0aGlzLl9jdXJyZW50UGxheURlbGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZWRfdGltZSArPSBkdDtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKHRoaXMucGxheWVkX3RpbWUgLyB0aGlzLmR1cmF0aW9uKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNfbG9vcCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5zcHJpdGVGcmFtZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX3BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVkX3RpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lTGlzdFtpbmRleF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoaW5kZXggPj0gdGhpcy5zcHJpdGVGcmFtZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllZF90aW1lIC09ICh0aGlzLmR1cmF0aW9uICogdGhpcy5zcHJpdGVGcmFtZUxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGluZGV4IC09IHRoaXMuc3ByaXRlRnJhbWVMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQbGF5RGVsYXkgPSAodGhpcy50aW1lRGVsYXkgPiAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuX3VwZGF0ZVBsYXlUaW1lRGVsYXlTdGF0ZS5iaW5kKHRoaXMpLCB0aGlzLnBsYXlUaW1lRW5kRGVsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUxpc3RbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==