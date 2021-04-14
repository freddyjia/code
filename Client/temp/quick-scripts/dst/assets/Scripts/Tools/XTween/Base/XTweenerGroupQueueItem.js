
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenerGroupQueueItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18724U82YBDHI8z6fxyRfsy', 'XTweenerGroupQueueItem');
// Scripts/Tools/XTween/Base/XTweenerGroupQueueItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XTweenGlobal_1 = require("./XTweenGlobal");
var XTweenerGroupQueueItem = /** @class */ (function () {
    function XTweenerGroupQueueItem() {
        this.listTweeners = [];
    }
    XTweenerGroupQueueItem.prototype.AddTweener = function (tweener) {
        this.listTweeners.push(tweener);
    };
    XTweenerGroupQueueItem.prototype.Update = function (deltaTime) {
        for (var i = 0; i < this.listTweeners.length; i++) {
            var tweener = this.listTweeners[i];
            if (tweener.GetState() == XTweenGlobal_1.XTweenerState.BeforePlay) {
                tweener.Play();
            }
            if (tweener.GetState() == XTweenGlobal_1.XTweenerState.Playing) {
                tweener.Update(deltaTime);
            }
        }
    };
    XTweenerGroupQueueItem.prototype.CheckFinish = function () {
        var finish = true;
        for (var i = 0; i < this.listTweeners.length; i++) {
            if (this.listTweeners[i].GetState() != XTweenGlobal_1.XTweenerState.End) {
                finish = false;
                break;
            }
        }
        return finish;
    };
    return XTweenerGroupQueueItem;
}());
exports.default = XTweenerGroupQueueItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFhUd2VlblxcQmFzZVxcWFR3ZWVuZXJHcm91cFF1ZXVlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtDQUErQztBQUUvQztJQUFBO1FBRVksaUJBQVksR0FBcUIsRUFBRSxDQUFDO0lBbUNoRCxDQUFDO0lBbENVLDJDQUFVLEdBQWpCLFVBQWtCLE9BQWtCO1FBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSx1Q0FBTSxHQUFiLFVBQWMsU0FBUztRQUVuQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSw0QkFBYSxDQUFDLFVBQVUsRUFDakQ7Z0JBQ0ksT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCO1lBQ0QsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksNEJBQWEsQ0FBQyxPQUFPLEVBQzlDO2dCQUNJLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFFTSw0Q0FBVyxHQUFsQjtRQUVJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzFDO1lBQ0ksSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLDRCQUFhLENBQUMsR0FBRyxFQUN2RDtnQkFDSSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYVHdlZW5lcklGIGZyb20gXCIuL1hUd2VlbmVySUZcIjtcbmltcG9ydCB7IFhUd2VlbmVyU3RhdGUgfSBmcm9tIFwiLi9YVHdlZW5HbG9iYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWFR3ZWVuZXJHcm91cFF1ZXVlSXRlbVxue1xuICAgIHByaXZhdGUgbGlzdFR3ZWVuZXJzOkFycmF5PFhUd2VlbmVySUY+ID0gW107XG4gICAgcHVibGljIEFkZFR3ZWVuZXIodHdlZW5lcjpYVHdlZW5lcklGKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0VHdlZW5lcnMucHVzaCh0d2VlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlKGRlbHRhVGltZSlcbiAgICB7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saXN0VHdlZW5lcnMubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHR3ZWVuZXIgPSB0aGlzLmxpc3RUd2VlbmVyc1tpXTtcbiAgICAgICAgICAgIGlmKHR3ZWVuZXIuR2V0U3RhdGUoKSA9PSBYVHdlZW5lclN0YXRlLkJlZm9yZVBsYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW5lci5QbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0d2VlbmVyLkdldFN0YXRlKCkgPT0gWFR3ZWVuZXJTdGF0ZS5QbGF5aW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuZXIuVXBkYXRlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgQ2hlY2tGaW5pc2goKTpib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmxpc3RUd2VlbmVycy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3RUd2VlbmVyc1tpXS5HZXRTdGF0ZSgpICE9IFhUd2VlbmVyU3RhdGUuRW5kKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5pc2g7XG4gICAgfVxufVxuIl19