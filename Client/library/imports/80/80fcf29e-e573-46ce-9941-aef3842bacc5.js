"use strict";
cc._RF.push(module, '80fcfKe5XNGzplBrvOEK6zF', 'JsGetIP');
// Scripts/JsTool/JsGetIP.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsGetIP = JsGetIP;

function JsGetIP() {}

JsGetIP.JsGet = function (callback) {
  console.log("################################# JsGetIP.JsGet call");
  var script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = "https://pv.sohu.com/cityjson?ie=utf-8";
  var havecomplete = false;

  script.onreadystatechange = function () {
    if (this.readyState == 'loaded' || this.readyState == 'complete') {
      if (havecomplete == false) {
        havecomplete = true;

        if (typeof returnCitySN != "undefined") {
          callback(true, returnCitySN["cip"]);
        } else {
          callback(false, "no returnCitySN");
        }
      }
    }
  };

  script.onload = function () {
    if (havecomplete == false) {
      havecomplete = true;

      if (typeof returnCitySN != "undefined") {
        callback(true, returnCitySN["cip"]);
      } else {
        callback(false, "no returnCitySN");
      }
    }
  };

  setTimeout(function () {
    if (havecomplete == false) {
      havecomplete = true;
      callback(false, "time out");
    }
  }, 5000);
  document.body.insertBefore(script, document.body.firstChild);
};

cc._RF.pop();