
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/LabelFunc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5a04vgyHxPuJCSAnSyflTe', 'LabelFunc');
// Scripts/JsTool/LabelFunc.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelFunc = LabelFunc;

function LabelFunc() {}

LabelFunc.UpdateRenderData = function (label) {
  //label._updateRenderData(true);
  label._forceUpdateRenderData();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxMYWJlbEZ1bmMuanMiXSwibmFtZXMiOlsiTGFiZWxGdW5jIiwiVXBkYXRlUmVuZGVyRGF0YSIsImxhYmVsIiwiX2ZvcmNlVXBkYXRlUmVuZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLFNBQVQsR0FBcUIsQ0FFM0I7O0FBQ0RBLFNBQVMsQ0FBQ0MsZ0JBQVYsR0FBNkIsVUFBU0MsS0FBVCxFQUFlO0FBQ3hDO0FBQ0FBLEVBQUFBLEtBQUssQ0FBQ0Msc0JBQU47QUFDSCxDQUhEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gTGFiZWxGdW5jKCkgeyBcblxufVxuTGFiZWxGdW5jLlVwZGF0ZVJlbmRlckRhdGEgPSBmdW5jdGlvbihsYWJlbCl7XG4gICAgLy9sYWJlbC5fdXBkYXRlUmVuZGVyRGF0YSh0cnVlKTtcbiAgICBsYWJlbC5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XG59XG5cblxuIl19