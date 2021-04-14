"use strict";
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