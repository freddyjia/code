"use strict";
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