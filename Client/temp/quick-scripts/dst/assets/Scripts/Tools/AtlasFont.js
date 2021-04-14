
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/AtlasFont.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXEF0bGFzRm9udC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUEyREEsQ0FBQztJQW5EVSx3QkFBSSxHQUFYLFVBQVksS0FBYSxFQUFFLGlCQUEwQztRQUNqRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUE7UUFFMUMsS0FBZ0IsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFsQyxJQUFJLEdBQUcsU0FBQTtZQUNSLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtJQUNYLDhCQUFVLEdBQWpCLFVBQWtCLE9BQWUsRUFBRSxVQUE2QjtRQUM1RCwwQ0FBMEM7UUFEWCwyQkFBQSxFQUFBLGlCQUE2QjtRQUc1RCxPQUFPO1FBQ1AsS0FBZ0IsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFsQyxJQUFJLEdBQUcsU0FBQTtZQUNSLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3JCO1FBRUQsT0FBTztRQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQTtTQUN0QztRQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNiLElBQUksTUFBTSxHQUFHO1lBQ1QsRUFBRSxLQUFLLENBQUE7WUFDUCxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQy9DLFVBQVUsRUFBRSxDQUFBO2FBQ2Y7UUFDTCxDQUFDLENBQUE7UUFFRCxZQUFZO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEUsbUJBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FDOUY7SUFFTCxDQUFDO0lBRU0seUJBQUssR0FBWjtRQUNJLEtBQWdCLFVBQXFCLEVBQXJCLEtBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7WUFBbEMsSUFBSSxHQUFHLFNBQUE7WUFDUixHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUNyQjtJQUNMLENBQUM7SUF4RGdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0EyRDdCO0lBQUQsZ0JBQUM7Q0EzREQsQUEyREMsQ0EzRHNDLEVBQUUsQ0FBQyxTQUFTLEdBMkRsRDtrQkEzRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0ZW5zaW9uIGZyb20gXCIuL0V4dGVuc2lvblwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0bGFzRm9udCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHRhck5vZGU6IGNjLk5vZGVcbiAgICBwcml2YXRlIGF0bGFzOiBzdHJpbmdcbiAgICBwcml2YXRlIGdldFNwcml0ZU5hbWVGdW5jOiAodmFsOiBzdHJpbmcpID0+IHN0cmluZ1xuICAgIHByaXZhdGUgZmlyc3ROb2RlXG5cblxuICAgIHB1YmxpYyBJbml0KGF0bGFzOiBzdHJpbmcsIGdldFNwcml0ZU5hbWVGdW5jOiAodmFsOiBzdHJpbmcpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLnRhck5vZGUgPSB0aGlzLm5vZGVcbiAgICAgICAgdGhpcy5maXJzdE5vZGUgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF1cbiAgICAgICAgdGhpcy5hdGxhcyA9IGF0bGFzXG4gICAgICAgIHRoaXMuZ2V0U3ByaXRlTmFtZUZ1bmMgPSBnZXRTcHJpdGVOYW1lRnVuY1xuXG4gICAgICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLnRhck5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhbC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/pnIDopoHkuIDkuKrluIPlsYDnu4Tku7Yg6K6+572u5aW96Ieq5Yqo5biD5bGAXG4gICAgcHVibGljIFNldENvbnRlbnQoY29udGVudDogc3RyaW5nLCBva0NhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbCkge1xuICAgICAgICAvLyB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYkFzc2V0KTtcblxuICAgICAgICAvL+WFiOWFqOmDqOmakOiXj1xuICAgICAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy50YXJOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YWwuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Yib5bu65LiN6Laz5aSfXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRhck5vZGUuY2hpbGRyZW5Db3VudDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5maXJzdE5vZGUpXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuZmlyc3ROb2RlLnBhcmVudFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9rQ250ID0gMFxuICAgICAgICBsZXQgZkFsbE9rID0gKCkgPT4ge1xuICAgICAgICAgICAgKytva0NudFxuICAgICAgICAgICAgaWYgKG9rQ250ID09IGNvbnRlbnQubGVuZ3RoICYmIG9rQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9rQ2FsbGJhY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/orr7nva7lkITkuKpzcHJpdGVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMudGFyTm9kZS5jaGlsZHJlbltpXVxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICBsZXQgZmluYWxTcHJpdGVOYW1lID0gdGhpcy5nZXRTcHJpdGVOYW1lRnVuYyhjb250ZW50LnN1YnN0cihpLCAxKSlcbiAgICAgICAgICAgIEV4dGVuc2lvbi5EaXJHZXRBYlNwcml0ZShub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCB0aGlzLmF0bGFzLCBmaW5hbFNwcml0ZU5hbWUsIGZBbGxPaylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIENsZWFyKCl7XG4gICAgICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLnRhck5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhbC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0=