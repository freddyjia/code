"use strict";
cc._RF.push(module, 'f47c6gB7TdCB6FhBMEYzWzh', 'JsGetUrlParms');
// Scripts/JsTool/JsGetUrlParms.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsGetUrlParms = JsGetUrlParms;

function JsGetUrlParms() {}

JsGetUrlParms.GetUrlParms = function () {
  var parmdata = location.search;
  var ret = {}; // console.log("##################### url  " + parmdata);

  if (parmdata.indexOf("?") != -1) {
    var str = parmdata.substr(1);
    var strs = str.split("&");

    for (var i = 0; i < strs.length; i++) {
      var splits = strs[i].split("=");
      ret[splits[0]] = splits[1];
    }
  }

  return ret;
};

JsGetUrlParms.SetUrlParmsToWindow = function () {
  var parmdata = location.search;

  if (parmdata.indexOf("?") != -1) {
    var str = parmdata.substr(1);
    var strs = str.split("&");

    for (var i = 0; i < strs.length; i++) {
      var splits = strs[i].split("=");
      window[splits[0]] = splits[1];
    }
  }
};

cc._RF.pop();