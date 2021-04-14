"use strict";
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