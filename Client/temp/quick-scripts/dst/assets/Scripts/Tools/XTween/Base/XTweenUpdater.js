
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenUpdater.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcQmFzZVxcWFR3ZWVuVXBkYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUErQztBQUMvQyxtQ0FBOEI7QUFDOUIsMERBQXFEO0FBRS9DLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFpQkk7O09BRUc7SUFDSDtRQUFBLGlCQUtDO1FBckJPLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBaUJwQyxXQUFXO1FBQ1gsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTO1lBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3NCQXpCZ0IsYUFBYTtJQUtoQix5QkFBVyxHQUF6QjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksbURBQW1EO1lBQ25ELG1DQUFtQztZQUNuQyxzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQWEsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFZTSxrQ0FBVSxHQUFqQixVQUFrQixPQUFrQjtRQUVoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxrQ0FBVSxHQUFsQixVQUFvQixTQUFTO1FBRXpCLElBQUksV0FBVyxHQUFxQixFQUFFLENBQUM7UUFDdkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN4QztZQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksNEJBQWEsQ0FBQyxPQUFPLEVBQzlDO2dCQUNJLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSw0QkFBYSxDQUFDLEdBQUcsRUFDMUM7Z0JBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QjtTQUNKO1FBQ0QsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ3BDO1lBQ0ksSUFBSSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDOztJQXpEZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBEakM7SUFBRCxvQkFBQztDQTFERCxBQTBEQyxJQUFBO2tCQTFEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lcklGIGZyb20gXCIuL1hUd2VlbmVySUZcIjtcbmltcG9ydCB7IFhUd2VlbmVyU3RhdGUgfSBmcm9tIFwiLi9YVHdlZW5HbG9iYWxcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi9VdGlsXCI7XG5pbXBvcnQgVXBkYXRlQmVhdCBmcm9tIFwiLi4vLi4vLi4vTWFuYWdlci9VcGRhdGVCZWF0XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFR3ZWVuVXBkYXRlciAvL2V4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIHByaXZhdGUgc3RhdGljIG1fSW5zdGFuY2U6WFR3ZWVuVXBkYXRlcjtcblxuICAgIHByaXZhdGUgdHdlZW5lcnM6QXJyYXk8WFR3ZWVuZXJJRj4gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEdldEluc3RhbmNlKCk6WFR3ZWVuVXBkYXRlclxuICAgIHtcbiAgICAgICAgaWYodGhpcy5tX0luc3RhbmNlID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGxldCBub2RlOmNjLk5vZGUgPSBuZXcgY2MuTm9kZShcIlhUd2VlblVwZGF0ZXJcIik7XG4gICAgICAgICAgICAvLyBub2RlLnNldFBhcmVudChjYy5maW5kKFwiTWFpblwiKSk7XG4gICAgICAgICAgICAvLyB0aGlzLm1fSW5zdGFuY2UgPSBub2RlLmFkZENvbXBvbmVudChYVHdlZW5VcGRhdGVyKTtcbiAgICAgICAgICAgIHRoaXMubV9JbnN0YW5jZSA9IG5ldyBYVHdlZW5VcGRhdGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubV9JbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzdXBlcigpO1xuICAgICAgICBVcGRhdGVCZWF0LkdldEluc3RhbmNlKCkuQWRkKChkZWx0YVRpbWUpPT57XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUZ1bmMoZGVsdGFUaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZFR3ZWVuZXIodHdlZW5lcjpYVHdlZW5lcklGKVxuICAgIHtcbiAgICAgICAgdGhpcy50d2VlbmVycy5wdXNoKHR3ZWVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBDbGVhcigpXG4gICAge1xuICAgICAgICB0aGlzLnR3ZWVuZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBVcGRhdGVGdW5jIChkZWx0YVRpbWUpXG4gICAge1xuICAgICAgICBsZXQgdE5lZWRSZW1vdmU6QXJyYXk8WFR3ZWVuZXJJRj4gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMudHdlZW5lcnMubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHR3ZWVuZXIgPSB0aGlzLnR3ZWVuZXJzW2ldO1xuICAgICAgICAgICAgaWYodHdlZW5lci5HZXRTdGF0ZSgpID09IFhUd2VlbmVyU3RhdGUuUGxheWluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbmVyLlVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodHdlZW5lci5HZXRTdGF0ZSgpID09IFhUd2VlbmVyU3RhdGUuRW5kKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHROZWVkUmVtb3ZlLnB1c2godHdlZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpPTA7aTx0TmVlZFJlbW92ZS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbmVlZFJlbW92ZVR3ZWVuZXIgPSB0TmVlZFJlbW92ZVtpXTtcbiAgICAgICAgICAgIFV0aWwuUmVtb3ZlQXJyYXkodGhpcy50d2VlbmVycyxuZWVkUmVtb3ZlVHdlZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=