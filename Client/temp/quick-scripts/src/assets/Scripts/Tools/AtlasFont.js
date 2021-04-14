"use strict";
cc._RF.push(module, '01841t/U1FJwp0nMWhDCd/d', 'AtlasFont');
// Scripts/Tools/AtlasFont.ts

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
var Extension_1 = require("./Extension");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AtlasFont = /** @class */ (function (_super) {
    __extends(AtlasFont, _super);
    function AtlasFont() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtlasFont.prototype.Init = function (atlas, getSpriteNameFunc) {
        this.tarNode = this.node;
        this.firstNode = this.node.children[0];
        this.atlas = atlas;
        this.getSpriteNameFunc = getSpriteNameFunc;
        for (var _i = 0, _a = this.tarNode.children; _i < _a.length; _i++) {
            var val = _a[_i];
            val.active = false;
        }
    };
    //需要一个布局组件 设置好自动布局
    AtlasFont.prototype.SetContent = function (content, okCallback) {
        // var node = cc.instantiate(prefabAsset);
        if (okCallback === void 0) { okCallback = null; }
        //先全部隐藏
        for (var _i = 0, _a = this.tarNode.children; _i < _a.length; _i++) {
            var val = _a[_i];
            val.active = false;
        }
        //创建不足够
        for (var i = this.tarNode.childrenCount; i < content.length; i++) {
            var node = cc.instantiate(this.firstNode);
            node.parent = this.firstNode.parent;
        }
        var okCnt = 0;
        var fAllOk = function () {
            ++okCnt;
            if (okCnt == content.length && okCallback != null) {
                okCallback();
            }
        };
        //设置各个sprite
        for (var i = 0; i < content.length; i++) {
            var node = this.tarNode.children[i];
            node.active = true;
            var finalSpriteName = this.getSpriteNameFunc(content.substr(i, 1));
            Extension_1.default.DirGetAbSprite(node.getComponent(cc.Sprite), this.atlas, finalSpriteName, fAllOk);
        }
    };
    AtlasFont.prototype.Clear = function () {
        for (var _i = 0, _a = this.tarNode.children; _i < _a.length; _i++) {
            var val = _a[_i];
            val.active = false;
        }
    };
    AtlasFont = __decorate([
        ccclass
    ], AtlasFont);
    return AtlasFont;
}(cc.Component));
exports.default = AtlasFont;

cc._RF.pop();