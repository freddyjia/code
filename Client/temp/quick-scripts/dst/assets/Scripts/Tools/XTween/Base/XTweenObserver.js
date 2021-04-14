
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcQmFzZVxcWFR3ZWVuT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbUNBQThCO0FBRXhCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUFnRUM7UUE3RFcsa0JBQVksR0FBcUIsRUFBRSxDQUFDOztJQTZEaEQsQ0FBQztJQTNEVSx3Q0FBZSxHQUF0QjtRQUVJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sb0NBQVcsR0FBbEIsVUFBbUIsUUFBbUI7UUFFbEMsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMxQztZQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBRyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxFQUNuRjtnQkFDSSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLFFBQW1CO1FBRXBDLDhDQUE4QztRQUM5QyxJQUFJO1FBQ0osMENBQTBDO1FBQzFDLDhCQUE4QjtRQUM5QixRQUFRO1FBQ1IsK0NBQStDO1FBQy9DLFFBQVE7UUFDUixJQUFJO1FBQ0osY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBRUksS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMxQztZQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFFSSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUVJLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDMUM7WUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUE3RGdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErRGxDO0lBQUQscUJBQUM7Q0EvREQsQUErREMsQ0EvRDJDLEVBQUUsQ0FBQyxTQUFTLEdBK0R2RDtrQkEvRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWFR3ZWVuZXIgZnJvbSBcIi4vWFR3ZWVuZXJcIjtcbmltcG9ydCBYVHdlZW5lcklGIGZyb20gXCIuL1hUd2VlbmVySUZcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi9VdGlsXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFR3ZWVuT2JzZXJ2ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQgXG57XG4gICAgcHJpdmF0ZSBsaXN0VHdlZW5lcnM6QXJyYXk8WFR3ZWVuZXJJRj4gPSBbXTtcblxuICAgIHB1YmxpYyBHZXRMaXN0VHdlZW5lcnMoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFR3ZWVuZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGRYVHdlZW5lcih4VHdlZW5lcjpYVHdlZW5lcklGKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpc3RUd2VlbmVycy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHdlZW5lciA9IHRoaXMubGlzdFR3ZWVuZXJzW2ldO1xuICAgICAgICAgICAgaWYodHdlZW5lci5HZXRUeXBlTWFyaygpID09IHhUd2VlbmVyLkdldFR5cGVNYXJrKCkgJiYgeFR3ZWVuZXIuR2V0Q29udHJvbEJ5UGFyZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW5lci5CZVJlcGxhY2VkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0VHdlZW5lcnMucHVzaCh4VHdlZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIFJlbW92ZVR3ZWVuZXIoeFR3ZWVuZXI6WFR3ZWVuZXJJRilcbiAgICB7XG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8dGhpcy5saXN0VHdlZW5lcnMubGVuZ3RoO2krKylcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgbGV0IHR3ZWVuZXIgPSB0aGlzLmxpc3RUd2VlbmVyc1tpXTtcbiAgICAgICAgLy8gICAgIGlmKHR3ZWVuZXIgPT0geFR3ZWVuZXIpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgVXRpbC5SZW1vdmVBcnJheSh0aGlzLmxpc3RUd2VlbmVycywpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgVXRpbC5SZW1vdmVBcnJheSh0aGlzLmxpc3RUd2VlbmVycyx4VHdlZW5lcik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpc3RUd2VlbmVycy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHdlZW5lciA9IHRoaXMubGlzdFR3ZWVuZXJzW2ldO1xuICAgICAgICAgICAgdHdlZW5lci5PbkVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saXN0VHdlZW5lcnMubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHR3ZWVuZXIgPSB0aGlzLmxpc3RUd2VlbmVyc1tpXTtcbiAgICAgICAgICAgIHR3ZWVuZXIuT25EaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpc3RUd2VlbmVycy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHdlZW5lciA9IHRoaXMubGlzdFR3ZWVuZXJzW2ldO1xuICAgICAgICAgICAgdHdlZW5lci5PbkRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19