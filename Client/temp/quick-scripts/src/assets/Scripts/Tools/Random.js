"use strict";
cc._RF.push(module, '5d478uYGKhFMq9TK/yhlbMM', 'Random');
// Scripts/Tools/Random.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random() {
    }
    /**
     * 返回一个 [min,max) 的随机整数
     * @param min 最小整数
     * @param max 最大整数
     */
    Random.RangeInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    /**
     * 返回一个 [min,max) 的随机浮点数
     * @param min 最小值
     * @param max 最大值
     */
    Random.RangeFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * 返回一个 [0,1) 的随机数
     */
    Random.Range = function () {
        return Math.random();
    };
    return Random;
}());
exports.Random = Random;

cc._RF.pop();