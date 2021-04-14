
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/JSGenQrcode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f927Fa2RBE3JZ+XRuZCCW8', 'JSGenQrcode');
// Scripts/JsTool/JSGenQrcode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSGenQrcode = JSGenQrcode;

function JSGenQrcode() {}

JSGenQrcode.Gen = function (url) {
  var QRCode = require("./qrcode");

  var qrcode = new QRCode(-1, 2);
  qrcode.addData(url);
  qrcode.make();
  var num = qrcode.getModuleCount(); // console.log(" num " + num);

  var array = new Array();

  for (var i = 0; i < num; i++) {
    var tmpArray = new Array();

    for (var j = 0; j < num; j++) {
      tmpArray.push(qrcode.isDark(i, j));
    }

    array.push(tmpArray);
  }

  return array;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxKU0dlblFyY29kZS5qcyJdLCJuYW1lcyI6WyJKU0dlblFyY29kZSIsIkdlbiIsInVybCIsIlFSQ29kZSIsInJlcXVpcmUiLCJxcmNvZGUiLCJhZGREYXRhIiwibWFrZSIsIm51bSIsImdldE1vZHVsZUNvdW50IiwiYXJyYXkiLCJBcnJheSIsImkiLCJ0bXBBcnJheSIsImoiLCJwdXNoIiwiaXNEYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsV0FBVCxHQUNQLENBRUM7O0FBRURBLFdBQVcsQ0FBQ0MsR0FBWixHQUFrQixVQUFTQyxHQUFULEVBQ2xCO0FBQ0ksTUFBSUMsTUFBTSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUFwQjs7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXLENBQUMsQ0FBWixFQUFlLENBQWYsQ0FBYjtBQUNBRSxFQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUosR0FBZjtBQUNBRyxFQUFBQSxNQUFNLENBQUNFLElBQVA7QUFFQSxNQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksY0FBUCxFQUFWLENBTkosQ0FPSTs7QUFFQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFaOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDSixHQUFkLEVBQWtCSSxDQUFDLEVBQW5CLEVBQ0E7QUFDSSxRQUFJQyxRQUFRLEdBQUcsSUFBSUYsS0FBSixFQUFmOztBQUNBLFNBQUksSUFBSUcsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDTixHQUFkLEVBQWtCTSxDQUFDLEVBQW5CLEVBQ0E7QUFDSUQsTUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNWLE1BQU0sQ0FBQ1csTUFBUCxDQUFjSixDQUFkLEVBQWlCRSxDQUFqQixDQUFkO0FBQ0g7O0FBQ0RKLElBQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXRixRQUFYO0FBQ0g7O0FBRUQsU0FBT0gsS0FBUDtBQUNILENBdEJEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gSlNHZW5RcmNvZGUoKSBcbnsgXG5cbn1cblxuSlNHZW5RcmNvZGUuR2VuID0gZnVuY3Rpb24odXJsKVxue1xuICAgIGxldCBRUkNvZGUgPSByZXF1aXJlKFwiLi9xcmNvZGVcIik7XG4gICAgdmFyIHFyY29kZSA9IG5ldyBRUkNvZGUoLTEsIDIpO1xuICAgIHFyY29kZS5hZGREYXRhKHVybCk7XG4gICAgcXJjb2RlLm1ha2UoKTtcblxuICAgIGxldCBudW0gPSBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIiBudW0gXCIgKyBudW0pO1xuXG4gICAgbGV0IGFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgZm9yKHZhciBpPTA7aTxudW07aSsrKVxuICAgIHtcbiAgICAgICAgbGV0IHRtcEFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvcih2YXIgaj0wO2o8bnVtO2orKylcbiAgICAgICAge1xuICAgICAgICAgICAgdG1wQXJyYXkucHVzaChxcmNvZGUuaXNEYXJrKGksIGopKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheS5wdXNoKHRtcEFycmF5KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFycmF5O1xufVxuIl19