
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Extension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82f4dAh9nhF+7gQ/N0jME1B', 'Extension');
// Scripts/Tools/Extension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerManager_1 = require("../Components/TimerManager");
var NodeUtil_1 = require("./NodeUtil");
var XTweenObserver_1 = require("./XTween/Base/XTweenObserver");
var Vec2 = cc.Vec2;
var ccC_1 = require("./ccC");
var Extension = /** @class */ (function () {
    function Extension() {
    }
    Extension.SearchNode = function (transform, childname) {
        for (var i = 0; i < transform.childrenCount; i++) {
            var child = transform.children[i];
            if (child.name == childname) {
                return child;
            }
            var result = Extension.SearchNode(child, childname);
            if (result != null) {
                return result;
            }
        }
        return null;
    };
    Extension.DirGetAbTrans = function (path, callback, transParent) {
        Extension.DirGetAbObj(path, function (err, prefab) {
            if (transParent != null) {
                prefab.parent = (transParent);
                prefab.scale = 1;
                prefab.position = Vec2.ZERO;
                if (callback != null) {
                    callback(err, prefab);
                }
            }
        });
    };
    Extension.SearchSprite = function (transform, childname) {
        var node = Extension.SearchNode(transform, childname);
        if (node != null) {
            return node.getComponent(cc.Sprite);
        }
        return null;
    };
    Extension.SearchBtn = function (transform, childname) {
        var node = Extension.SearchNode(transform, childname);
        if (node != null) {
            return node.getComponent(cc.Button);
        }
        return null;
    };
    Extension.SearchTxt = function (transform, childname) {
        var node = Extension.SearchNode(transform, childname);
        if (node != null) {
            return node.getComponent(cc.Label);
        }
        return null;
    };
    Extension.GetGenderByName = function (headName) {
        if (headName == null) {
            return true;
        }
        if (headName.length == null) {
            return true;
        }
        return headName.indexOf("_M_") != -1;
    };
    Extension.DirGetAbObj = function (path, callback) {
        ccC_1.default.loadRes(path, cc.Prefab, function (newError, node) {
            if (newError == null) {
                callback(newError, cc.instantiate(node));
            }
            else {
                callback(newError, null);
            }
        });
    };
    Extension.ClearArr = function (arr) {
        if (arr == null) {
            return;
        }
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            arr.shift();
        }
    };
    Extension.SetAsLastSibling = function (trans) {
        var total = trans.parent.childrenCount - 1;
        trans.setSiblingIndex(total);
    };
    Extension.JSObjectLength = function (obj) {
        var cnt = 0;
        for (var key in obj) {
            cnt = cnt + 1;
        }
        return cnt;
    };
    Extension.DelayCall = function (func, delay, parm, repeatCnt, interval, keepAlive) {
        if (parm === void 0) { parm = null; }
        if (repeatCnt === void 0) { repeatCnt = 0; }
        if (interval === void 0) { interval = null; }
        if (keepAlive === void 0) { keepAlive = false; }
        var _interval = interval;
        if (_interval == null) {
            _interval = delay;
        }
        return TimerManager_1.default.GetInstance().CallActionDelay(func, delay, parm, repeatCnt, _interval, keepAlive);
    };
    Extension.CancelDelayCall = function (id) {
        TimerManager_1.default.GetInstance().DeleteTimer(id);
    };
    Extension.DirGetAbSprite = function (img, atlasPath, spriteName, finishCallback) {
        if (finishCallback === void 0) { finishCallback = null; }
        NodeUtil_1.default.SetSpriteFrame(img, atlasPath, spriteName, finishCallback);
    };
    Extension.ClearXTween = function (node) {
        var ob = node.getComponent(XTweenObserver_1.default);
        if (ob != null) {
            node.removeComponent(ob);
        }
    };
    Extension.GetTimeString = function (time) {
        var Day = 24 * 3600 * 1000;
        var date = new Date();
        date.setTime(Date.now());
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        var msgTime = Number(time);
        if (today.getTime() <= msgTime) {
            date = new Date();
            date.setTime(msgTime);
            var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            return hour + ":" + min;
        }
        else {
            var diff = today.getTime() - msgTime;
            if (diff <= Day) {
                return "昨天";
            }
            else if (diff <= 2 * Day) {
                return "前天";
            }
            else {
                return "3天前";
            }
        }
    };
    return Extension;
}());
exports.default = Extension;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXEV4dGVuc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCx1Q0FBa0M7QUFDbEMsK0RBQTBEO0FBQzFELElBQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7QUFDdEIsNkJBQXdCO0FBRXhCO0lBQUE7SUF3SkEsQ0FBQztJQXZKaUIsb0JBQVUsR0FBeEIsVUFBeUIsU0FBa0IsRUFBRSxTQUFpQjtRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUU7Z0JBQ3pCLE9BQU8sS0FBSyxDQUFBO2FBQ2Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUNuRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2hCLE9BQU8sTUFBTSxDQUFBO2FBQ2hCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFYSx1QkFBYSxHQUEzQixVQUE0QixJQUFJLEVBQUUsUUFBK0MsRUFBRSxXQUFXO1FBQzFGLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBVSxFQUFFLE1BQWU7WUFDcEQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQzdCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7Z0JBQzNCLElB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LEdBQUcsRUFDdEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFFRDtnQkFDSSxPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F4SkEsQUF3SkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lck1hbmFnZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvVGltZXJNYW5hZ2VyXCI7XG5pbXBvcnQgTm9kZVV0aWwgZnJvbSBcIi4vTm9kZVV0aWxcIjtcbmltcG9ydCBYVHdlZW5PYnNlcnZlciBmcm9tIFwiLi9YVHdlZW4vQmFzZS9YVHdlZW5PYnNlcnZlclwiO1xuaW1wb3J0IFZlYzIgPSBjYy5WZWMyO1xuaW1wb3J0IGNjQyBmcm9tIFwiLi9jY0NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIFNlYXJjaE5vZGUodHJhbnNmb3JtOiBjYy5Ob2RlLCBjaGlsZG5hbWU6IHN0cmluZyk6IGNjLk5vZGUgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFuc2Zvcm0uY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSB0cmFuc2Zvcm0uY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IGNoaWxkbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEV4dGVuc2lvbi5TZWFyY2hOb2RlKGNoaWxkLCBjaGlsZG5hbWUpXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIERpckdldEFiVHJhbnMocGF0aCwgY2FsbGJhY2s6IChlcnI6IEVycm9yLCBwcmVmYWI6IGNjLk5vZGUpID0+IHZvaWQsIHRyYW5zUGFyZW50KSB7XG4gICAgICAgIEV4dGVuc2lvbi5EaXJHZXRBYk9iaihwYXRoLCAoZXJyOiBFcnJvciwgcHJlZmFiOiBjYy5Ob2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHJhbnNQYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHByZWZhYi5wYXJlbnQgPSAodHJhbnNQYXJlbnQpXG4gICAgICAgICAgICAgICAgcHJlZmFiLnNjYWxlID0gMVxuICAgICAgICAgICAgICAgIHByZWZhYi5wb3NpdGlvbiA9IFZlYzIuWkVST1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcHJlZmFiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoU3ByaXRlKHRyYW5zZm9ybTogY2MuTm9kZSwgY2hpbGRuYW1lOiBzdHJpbmcpOiBjYy5TcHJpdGUgfCBudWxsIHtcbiAgICAgICAgbGV0IG5vZGUgPSBFeHRlbnNpb24uU2VhcmNoTm9kZSh0cmFuc2Zvcm0sIGNoaWxkbmFtZSlcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoQnRuKHRyYW5zZm9ybTogY2MuTm9kZSwgY2hpbGRuYW1lOiBzdHJpbmcpOiBjYy5CdXR0b24gfCBudWxsIHtcbiAgICAgICAgbGV0IG5vZGUgPSBFeHRlbnNpb24uU2VhcmNoTm9kZSh0cmFuc2Zvcm0sIGNoaWxkbmFtZSlcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2VhcmNoVHh0KHRyYW5zZm9ybTogY2MuTm9kZSwgY2hpbGRuYW1lOiBzdHJpbmcpOiBjYy5MYWJlbCB8IG51bGwge1xuICAgICAgICBsZXQgbm9kZSA9IEV4dGVuc2lvbi5TZWFyY2hOb2RlKHRyYW5zZm9ybSwgY2hpbGRuYW1lKVxuICAgICAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldEdlbmRlckJ5TmFtZShoZWFkTmFtZTogc3RyaW5nIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoaGVhZE5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZE5hbWUubGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWROYW1lLmluZGV4T2YoXCJfTV9cIikgIT0gLTFcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgRGlyR2V0QWJPYmoocGF0aDogc3RyaW5nLCBjYWxsYmFjazogKGVycjogRXJyb3IsIHByZWZhYjogY2MuTm9kZSkgPT4gdm9pZCkge1xuICAgICAgICBjY0MubG9hZFJlcyhwYXRoLCBjYy5QcmVmYWIsIChuZXdFcnJvcjogRXJyb3IsIG5vZGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0Vycm9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXdFcnJvciwgY2MuaW5zdGFudGlhdGUobm9kZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ld0Vycm9yLCBudWxsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDbGVhckFycihhcnIpIHtcbiAgICAgICAgaWYgKGFyciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgbGVuID0gYXJyLmxlbmd0aFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIuc2hpZnQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTZXRBc0xhc3RTaWJsaW5nKHRyYW5zOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCB0b3RhbCA9IHRyYW5zLnBhcmVudC5jaGlsZHJlbkNvdW50IC0gMVxuICAgICAgICB0cmFucy5zZXRTaWJsaW5nSW5kZXgodG90YWwpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBKU09iamVjdExlbmd0aChvYmopOiBudW1iZXIge1xuICAgICAgICBsZXQgY250ID0gMFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBjbnQgPSBjbnQgKyAxXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNudFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgRGVsYXlDYWxsKGZ1bmMsIGRlbGF5LCBwYXJtID0gbnVsbCwgcmVwZWF0Q250ID0gMCwgaW50ZXJ2YWwgPSBudWxsLCBrZWVwQWxpdmUgPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBfaW50ZXJ2YWwgPSBpbnRlcnZhbFxuICAgICAgICBpZiAoX2ludGVydmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIF9pbnRlcnZhbCA9IGRlbGF5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkNhbGxBY3Rpb25EZWxheShmdW5jLCBkZWxheSwgcGFybSwgcmVwZWF0Q250LCBfaW50ZXJ2YWwsIGtlZXBBbGl2ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENhbmNlbERlbGF5Q2FsbChpZCkge1xuICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcihpZClcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIERpckdldEFiU3ByaXRlKGltZzogY2MuU3ByaXRlLCBhdGxhc1BhdGg6IHN0cmluZywgc3ByaXRlTmFtZTogc3RyaW5nLCBmaW5pc2hDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICAgICAgTm9kZVV0aWwuU2V0U3ByaXRlRnJhbWUoaW1nLCBhdGxhc1BhdGgsIHNwcml0ZU5hbWUsIGZpbmlzaENhbGxiYWNrKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYXJYVHdlZW4obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgb2IgPSBub2RlLmdldENvbXBvbmVudChYVHdlZW5PYnNlcnZlcilcbiAgICAgICAgaWYgKG9iICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ29tcG9uZW50KG9iKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBHZXRUaW1lU3RyaW5nKHRpbWUpIHtcbiAgICAgICAgbGV0IERheSA9IDI0ICogMzYwMCAqIDEwMDA7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKERhdGUubm93KCkpO1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICBsZXQgbXNnVGltZSA9IE51bWJlcih0aW1lKTtcbiAgICAgICAgaWYgKHRvZGF5LmdldFRpbWUoKSA8PSBtc2dUaW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShtc2dUaW1lKTtcbiAgICAgICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpPDEwID8gXCIwXCIrZGF0ZS5nZXRIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgbGV0IG1pbiA9IGRhdGUuZ2V0TWludXRlcygpPDEwID8gXCIwXCIrZGF0ZS5nZXRNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgZGlmZiA9IHRvZGF5LmdldFRpbWUoKSAtIG1zZ1RpbWU7XG4gICAgICAgICAgICBpZiAoZGlmZiA8PSBEYXkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwi5pio5aSpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmIDw9IDIqRGF5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIuWJjeWkqVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjPlpKnliY1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=