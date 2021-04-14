
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/SpriteUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d9d6/sxgtA4K/Pw9imHGB+', 'SpriteUtil');
// Scripts/Tools/SpriteUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccC_1 = require("./ccC");
var SpriteUtil = /** @class */ (function () {
    function SpriteUtil() {
    }
    SpriteUtil.LoadSpriteByPath = function (s, c) {
        if (s == null) {
            return;
        }
        ccC_1.default.loadRes(c, cc.SpriteFrame, function (err, resource) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            s.spriteFrame = resource;
        });
    };
    SpriteUtil.LoadSpriteByAtlas = function (Sprite, atlasPath, spriteName, callBack) {
        if (callBack === void 0) { callBack = null; }
        if (Sprite == null) {
            return;
        }
        ccC_1.default.loadRes(atlasPath, cc.SpriteAtlas, function (err, atlas) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            var atlass = atlas;
            Sprite.spriteFrame = atlass.getSpriteFrame(spriteName);
            if (callBack != null) {
                callBack();
            }
        });
    };
    return SpriteUtil;
}());
exports.default = SpriteUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFNwcml0ZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBd0I7QUFFeEI7SUFBQTtJQXVDQSxDQUFDO0lBckNpQiwyQkFBZ0IsR0FBOUIsVUFBK0IsQ0FBWSxFQUFFLENBQVE7UUFFakQsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBRVYsT0FBTztTQUNWO1FBQ0QsYUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxVQUFDLEdBQVUsRUFBRSxRQUFhO1lBQ25ELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDVjtZQUNELENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBMEIsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFYSw0QkFBaUIsR0FBL0IsVUFBZ0MsTUFBaUIsRUFBQyxTQUFnQixFQUFDLFVBQWlCLEVBQUMsUUFBbUI7UUFBbkIseUJBQUEsRUFBQSxlQUFtQjtRQUVwRyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUM7WUFFZixPQUFPO1NBQ1Y7UUFFRCxhQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLFVBQUMsR0FBVSxFQUFFLEtBQVU7WUFDeEQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNWO1lBQ0QsSUFBSSxNQUFNLEdBQWtCLEtBQXVCLENBQUM7WUFDcEQsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELElBQUcsUUFBUSxJQUFFLElBQUksRUFDakI7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7YUFDZDtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY0MgZnJvbSBcIi4vY2NDXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGVVdGlsXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFNwcml0ZUJ5UGF0aChzOiBjYy5TcHJpdGUsIGM6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChzID09IG51bGwpe1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjY0MubG9hZFJlcyhjLGNjLlNwcml0ZUZyYW1lLChlcnI6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiZXJyICBcIiArIGVyci5tZXNzYWdlIHx8IGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcy5zcHJpdGVGcmFtZSA9IHJlc291cmNlIGFzIGNjLlNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0pO1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkU3ByaXRlQnlBdGxhcyhTcHJpdGU6IGNjLlNwcml0ZSxhdGxhc1BhdGg6c3RyaW5nLHNwcml0ZU5hbWU6c3RyaW5nLGNhbGxCYWNrOmFueSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFNwcml0ZSA9PSBudWxsKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjQy5sb2FkUmVzKGF0bGFzUGF0aCxjYy5TcHJpdGVBdGxhcywoZXJyOiBFcnJvciwgYXRsYXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciAgXCIgKyBlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhdGxhc3M6Y2MuU3ByaXRlQXRsYXMgPSBhdGxhcyBhcyBjYy5TcHJpdGVBdGxhcztcclxuICAgICAgICAgICAgU3ByaXRlLnNwcml0ZUZyYW1lID0gYXRsYXNzLmdldFNwcml0ZUZyYW1lKHNwcml0ZU5hbWUpO1xyXG4gICAgICAgICAgICBpZihjYWxsQmFjayE9bnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==