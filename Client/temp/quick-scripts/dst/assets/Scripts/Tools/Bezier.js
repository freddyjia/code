
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Bezier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXEJlemllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQXdEQSxDQUFDO0lBM0NhLHNCQUFLLEdBQWY7SUFDQSxDQUFDO0lBR1MsdUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFNO1NBQ1Q7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUV0SixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMzSixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1NBQ2hEO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMxRDtTQUNKO0lBQ0wsQ0FBQztJQUVNLDZCQUFZLEdBQW5CLFVBQW9CLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxVQUFrQixFQUFFLFVBQWtCLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxTQUFpQixFQUFFLGtCQUF1QixFQUFFLGNBQW1EO1FBRS9OLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFFcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQTtRQUU1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBRWxDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBR2xCLENBQUM7SUF0RGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F3RDFCO0lBQUQsYUFBQztDQXhERCxBQXdEQyxDQXhEbUMsRUFBRSxDQUFDLFNBQVMsR0F3RC9DO2tCQXhEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmV6aWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgcHJpdmF0ZSB0aW1lU2NhbGU6IG51bWJlclxuICAgIHByaXZhdGUgdGFyUG9zOiBjYy5WZWMyXG4gICAgcHJpdmF0ZSBjZW50ZXJQb3M6IGNjLlZlYzJcbiAgICBwcml2YXRlIHN0YXJ0UG9zOiBjYy5WZWMyXG4gICAgcHJpdmF0ZSBmaW5pc2hDYWxsYmFja1xuICAgIHByaXZhdGUgZmluaXNoQ2FsbGJhY2tQYXJtXG4gICAgcHJpdmF0ZSBoYXNJbml0RGF0YVxuICAgIHByaXZhdGUgdGltZXJcblxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNJbml0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZXIgPD0gMSkge1xuICAgICAgICAgICAgbGV0IGZpbmFsUG9zID0gbmV3IGNjLlZlYzIoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBvcy54ICogKDEgLSB0aGlzLnRpbWVyKSAqICgxIC0gdGhpcy50aW1lcikgKyB0aGlzLmNlbnRlclBvcy54ICogMiAqIHRoaXMudGltZXIgKiAoMSAtIHRoaXMudGltZXIpICsgdGhpcy50YXJQb3MueCAqIHRoaXMudGltZXIgKiB0aGlzLnRpbWVyXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQb3MueSAqICgxIC0gdGhpcy50aW1lcikgKiAoMSAtIHRoaXMudGltZXIpICsgdGhpcy5jZW50ZXJQb3MueSAqIDIgKiB0aGlzLnRpbWVyICogKDEgLSB0aGlzLnRpbWVyKSArIHRoaXMudGFyUG9zLnkgKiB0aGlzLnRpbWVyICogdGhpcy50aW1lcilcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGZpbmFsUG9zXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy50aW1lciArIGR0ICogdGhpcy50aW1lU2NhbGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMudGFyUG9zXG4gICAgICAgICAgICB0aGlzLmhhc0luaXREYXRhID0gZmFsc2VcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbmlzaENhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENhbGxiYWNrKHRoaXMuZmluaXNoQ2FsbGJhY2tQYXJtLCB0aGlzLm5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0TW92ZVRyYWlsKHN0YXJ0UG9zWDogbnVtYmVyLCBzdGFydFBvc1k6IG51bWJlciwgY2VudGVyUG9zWDogbnVtYmVyLCBjZW50ZXJQb3NZOiBudW1iZXIsIHRhclBvc1g6IG51bWJlciwgdGFyUG9zWTogbnVtYmVyLCB0aW1lU2NhbGU6IG51bWJlciwgZmluaXNoQ2FsbGJhY2tQYXJtOiBhbnksIGZpbmlzaENhbGxiYWNrOiAocGFybTogYW55LCB0cmFuczogY2MuTm9kZSkgPT4gdm9pZCkge1xuXG4gICAgICAgIHRoaXMudGltZVNjYWxlID0gdGltZVNjYWxlXG4gICAgICAgIHRoaXMudGFyUG9zID0gbmV3IGNjLlZlYzIodGFyUG9zWCwgdGFyUG9zWSlcbiAgICAgICAgdGhpcy5jZW50ZXJQb3MgPSBuZXcgY2MuVmVjMihjZW50ZXJQb3NYLCBjZW50ZXJQb3NZKVxuXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSBuZXcgY2MuVmVjMihzdGFydFBvc1gsIHN0YXJ0UG9zWSlcbiAgICAgICAgdGhpcy5maW5pc2hDYWxsYmFjayA9IGZpbmlzaENhbGxiYWNrXG4gICAgICAgIHRoaXMuZmluaXNoQ2FsbGJhY2tQYXJtID0gZmluaXNoQ2FsbGJhY2tQYXJtXG5cbiAgICAgICAgdGhpcy5oYXNJbml0RGF0YSA9IHRydWVcblxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zXG5cbiAgICAgICAgdGhpcy50aW1lciA9IDBcblxuXG4gICAgfVxuXG59Il19