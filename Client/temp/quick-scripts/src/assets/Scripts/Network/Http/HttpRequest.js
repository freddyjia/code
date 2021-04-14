"use strict";
cc._RF.push(module, 'e03d8M6WVJHt6H2HYm4k7vF', 'HttpRequest');
// Scripts/Network/Http/HttpRequest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../../Global/Global");
var HttpRequest = /** @class */ (function () {
    function HttpRequest() {
    }
    HttpRequest.Get = function (url, successCallback, failCallback, timeout) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = timeout;
        xhr.onreadystatechange = function () {
            // cc.error("xhr.readyState  " + xhr.readyState);
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    successCallback(response);
                }
                else {
                    failCallback("err code: " + xhr.status + " err msg: " + xhr.statusText);
                }
            }
            // else if(xhr.readyState == 1)
            // {
            //     xhr.setRequestHeader("Access-Control-Allow-Origin","*");
            // }
        };
        xhr.open("GET", url, true);
        xhr.send();
    };
    HttpRequest.Post = function (url, postParm, successCallback, failCallback, timeout, contentType) {
        if (timeout === void 0) { timeout = 10000; }
        if (Global_1.default.showLog == true)
            cc.error("HttpRequest Post url " + url);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // cc.error("Post xhr.readyState  " + xhr.readyState);
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = xhr.responseText;
                    successCallback(response);
                }
                else {
                    cc.error("err code: " + xhr.status + " err msg: " + xhr.statusText + " xhr.responseText " + xhr.responseText);
                    failCallback("网络请求错误");
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.timeout = timeout;
        xhr.setRequestHeader("Content-Type", contentType == null ? "application/x-www-form-urlencoded" : contentType);
        var jsongStr = JSON.stringify(postParm);
        // cc.error("jsongStr " + jsongStr);
        // let bytes = new TextEncoder().encode(jsongStr);
        // xhr.send(bytes);
        xhr.send(jsongStr);
    };
    return HttpRequest;
}());
exports.default = HttpRequest;

cc._RF.pop();