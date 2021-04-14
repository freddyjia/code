
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/Model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49736HY0GpIkocA3x98VDlL', 'Model');
// Scripts/MVCFramework/Model.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
        this.sendMsgCallBack = null;
    }
    Model.prototype.SendMessage = function (msg, msgBody) {
        if (msgBody === void 0) { msgBody = null; }
        this.sendMsgCallBack(msg, msgBody);
    };
    //可以重写
    Model.prototype.Init = function () {
    };
    //可以重写
    Model.prototype.Clean = function () {
    };
    return Model;
}());
exports.default = Model;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUk7UUFGTyxvQkFBZSxHQUFzQixJQUFJLENBQUM7SUFLakQsQ0FBQztJQUVNLDJCQUFXLEdBQWxCLFVBQW1CLEdBQVUsRUFBQyxPQUFnQjtRQUFoQix3QkFBQSxFQUFBLGNBQWdCO1FBRTFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNO0lBQ0Msb0JBQUksR0FBWDtJQUdBLENBQUM7SUFFRCxNQUFNO0lBQ0MscUJBQUssR0FBWjtJQUdBLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIFxue1xuICAgIHB1YmxpYyBzZW5kTXNnQ2FsbEJhY2s6KHN0cmluZyxhbnkpPT52b2lkID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgU2VuZE1lc3NhZ2UobXNnOnN0cmluZyxtc2dCb2R5OmFueT1udWxsKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZW5kTXNnQ2FsbEJhY2sobXNnLG1zZ0JvZHkpO1xuICAgIH1cblxuICAgIC8v5Y+v5Lul6YeN5YaZXG4gICAgcHVibGljIEluaXQoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy/lj6/ku6Xph43lhplcbiAgICBwdWJsaWMgQ2xlYW4oKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxufVxuIl19