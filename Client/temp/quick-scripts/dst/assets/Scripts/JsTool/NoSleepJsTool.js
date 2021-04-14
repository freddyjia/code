
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/NoSleepJsTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90bc7dpvQJDgpstSHtHLuQg', 'NoSleepJsTool');
// Scripts/JsTool/NoSleepJsTool.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSleepJsTool = NoSleepJsTool;

function NoSleepJsTool() {}

NoSleepJsTool.Run = function () {
  var NoSleep = require("./NoSleep.js");

  var noSleep = new NoSleep();
  noSleep.enable();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxOb1NsZWVwSnNUb29sLmpzIl0sIm5hbWVzIjpbIk5vU2xlZXBKc1Rvb2wiLCJSdW4iLCJOb1NsZWVwIiwicmVxdWlyZSIsIm5vU2xlZXAiLCJlbmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxhQUFULEdBQ1AsQ0FFQzs7QUFFREEsYUFBYSxDQUFDQyxHQUFkLEdBQW9CLFlBQ3BCO0FBQ0ksTUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUFyQjs7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBSUYsT0FBSixFQUFkO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsTUFBUjtBQUdILENBUEQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBOb1NsZWVwSnNUb29sKCkgXG57IFxuXG59XG5cbk5vU2xlZXBKc1Rvb2wuUnVuID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBOb1NsZWVwID0gcmVxdWlyZShcIi4vTm9TbGVlcC5qc1wiKTtcbiAgICB2YXIgbm9TbGVlcCA9IG5ldyBOb1NsZWVwKCk7XG4gICAgbm9TbGVlcC5lbmFibGUoKTtcbiAgICBcbiAgIFxufVxuIl19