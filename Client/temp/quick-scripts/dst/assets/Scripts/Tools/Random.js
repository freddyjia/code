
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Random.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFJhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUF5QkEsQ0FBQztJQXhCQzs7OztPQUlHO0lBQ0ksZUFBUSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxHQUFXO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVztRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBSyxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUmFuZG9tIHtcbiAgLyoqXG4gICAqIOi/lOWbnuS4gOS4qiBbbWluLG1heCkg55qE6ZqP5py65pW05pWwXG4gICAqIEBwYXJhbSBtaW4g5pyA5bCP5pW05pWwXG4gICAqIEBwYXJhbSBtYXgg5pyA5aSn5pW05pWwXG4gICAqL1xuICBzdGF0aWMgUmFuZ2VJbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/lOWbnuS4gOS4qiBbbWluLG1heCkg55qE6ZqP5py65rWu54K55pWwXG4gICAqIEBwYXJhbSBtaW4g5pyA5bCP5YC8XG4gICAqIEBwYXJhbSBtYXgg5pyA5aSn5YC8XG4gICAqL1xuICBzdGF0aWMgUmFuZ2VGbG9hdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gIH1cblxuICAvKipcbiAgICog6L+U5Zue5LiA5LiqIFswLDEpIOeahOmaj+acuuaVsFxuICAgKi9cbiAgc3RhdGljIFJhbmdlKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xuICB9XG59Il19