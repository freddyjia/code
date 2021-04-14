
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/QRCodeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17ab5zAab5MEa0BzemXboEb', 'QRCodeComponent');
// Scripts/Components/QRCodeComponent.ts

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
var JSGenQrcode_1 = require("../JsTool/JSGenQrcode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QRCodeComponent = /** @class */ (function (_super) {
    __extends(QRCodeComponent, _super);
    function QRCodeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRCodeComponent.prototype.Gen = function (url) {
        var graphic = this.node.getComponent(cc.Graphics);
        if (graphic == null) {
            graphic = this.node.addComponent(cc.Graphics);
        }
        graphic.clear();
        graphic.fillColor = cc.Color.BLACK;
        var size = this.node.width;
        var data = JSGenQrcode_1.JSGenQrcode.Gen(url);
        var num = data.length;
        var tileW = size / num;
        var tileH = size / num;
        for (var row = 0; row < num; row++) {
            for (var col = 0; col < num; col++) {
                if (data[row][col]) {
                    var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    graphic.rect(Math.round(col * tileW) - size / 2, size - tileH - Math.round(row * tileH) - size / 2, w, h);
                    graphic.fill();
                }
                else {
                    // graphic.fillColor = cc.Color.WHITE;
                    // var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    // var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    // graphic.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
                    // graphic.fill();
                }
            }
        }
    };
    QRCodeComponent = __decorate([
        ccclass
    ], QRCodeComponent);
    return QRCodeComponent;
}(cc.Component));
exports.default = QRCodeComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcUVJDb2RlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUU5QyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBSTFDO0lBQTZDLG1DQUFZO0lBQXpEOztJQXdDQSxDQUFDO0lBckNVLDZCQUFHLEdBQVYsVUFBVyxHQUFVO1FBRWpCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFHLE9BQU8sSUFBSSxJQUFJLEVBQ2xCO1lBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFHLHlCQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLEtBQUksSUFBSSxHQUFHLEdBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFFLEVBQzNCO1lBQ0ksS0FBSSxJQUFJLEdBQUcsR0FBQyxDQUFDLEVBQUMsR0FBRyxHQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsRUFDM0I7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ2pCO29CQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEI7cUJBRUQ7b0JBQ0ksc0NBQXNDO29CQUN0QyxvRUFBb0U7b0JBQ3BFLG9FQUFvRTtvQkFDcEUsdUZBQXVGO29CQUN2RixrQkFBa0I7aUJBQ3JCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUF0Q2dCLGVBQWU7UUFGbkMsT0FBTztPQUVhLGVBQWUsQ0F3Q25DO0lBQUQsc0JBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzRDLEVBQUUsQ0FBQyxTQUFTLEdBd0N4RDtrQkF4Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKU0dlblFyY29kZSB9IGZyb20gXCIuLi9Kc1Rvb2wvSlNHZW5RcmNvZGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFFSQ29kZUNvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCBcbntcblxuICAgIHB1YmxpYyBHZW4odXJsOnN0cmluZylcbiAgICB7XG4gICAgICAgIGxldCBncmFwaGljID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgIGlmKGdyYXBoaWMgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZ3JhcGhpYyA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWMuY2xlYXIoKTtcbiAgICAgICAgZ3JhcGhpYy5maWxsQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGxldCBkYXRhID0gSlNHZW5RcmNvZGUuR2VuKHVybCk7XG4gICAgICAgIGxldCBudW0gPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgdmFyIHRpbGVXID0gc2l6ZSAvIG51bTtcblx0XHR2YXIgdGlsZUggPSBzaXplIC8gbnVtO1xuICAgICAgICBmb3IobGV0IHJvdz0wO3JvdzxudW07cm93KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgY29sPTA7Y29sPG51bTtjb2wrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihkYXRhW3Jvd11bY29sXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gKE1hdGguY2VpbCgoY29sICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKGNvbCAqIHRpbGVXKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gKE1hdGguY2VpbCgocm93ICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKHJvdyAqIHRpbGVXKSk7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWMucmVjdChNYXRoLnJvdW5kKGNvbCAqIHRpbGVXKSAtIHNpemUgLyAyLCBzaXplIC0gdGlsZUggLSBNYXRoLnJvdW5kKHJvdyAqIHRpbGVIKSAtIHNpemUgLyAyLCB3LCBoKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpYy5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYXBoaWMuZmlsbENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciB3ID0gKE1hdGguY2VpbCgoY29sICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKGNvbCAqIHRpbGVXKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBoID0gKE1hdGguY2VpbCgocm93ICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKHJvdyAqIHRpbGVXKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdyYXBoaWMucmVjdChNYXRoLnJvdW5kKGNvbCAqIHRpbGVXKSwgc2l6ZSAtIHRpbGVIIC0gTWF0aC5yb3VuZChyb3cgKiB0aWxlSCksIHcsIGgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBncmFwaGljLmZpbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==