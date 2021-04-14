"use strict";
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