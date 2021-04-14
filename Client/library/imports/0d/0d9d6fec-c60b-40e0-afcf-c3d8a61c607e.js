"use strict";
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