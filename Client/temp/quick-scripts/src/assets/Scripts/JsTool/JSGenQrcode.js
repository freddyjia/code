"use strict";
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