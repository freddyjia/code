"use strict";
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