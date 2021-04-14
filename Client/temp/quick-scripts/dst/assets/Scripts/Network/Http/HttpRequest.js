
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Network/Http/HttpRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmV0d29ya1xcSHR0cFxcSHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBeUM7QUFFekM7SUFBQTtJQStEQSxDQUFDO0lBN0RpQixlQUFHLEdBQWpCLFVBQWtCLEdBQVUsRUFBQyxlQUE4QixFQUFDLFlBQTJCLEVBQUMsT0FBYztRQUVsRyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXRCLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixpREFBaUQ7WUFDakQsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsRUFDdkI7Z0JBQ0ksSUFBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDeEM7b0JBQ0ksSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDaEMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM3QjtxQkFFRDtvQkFDSSxZQUFZLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDMUU7YUFDSjtZQUNELCtCQUErQjtZQUMvQixJQUFJO1lBQ0osK0RBQStEO1lBQy9ELElBQUk7UUFDUixDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVhLGdCQUFJLEdBQWxCLFVBQW1CLEdBQVUsRUFBQyxRQUE0QixFQUFDLGVBQThCLEVBQUMsWUFBMkIsRUFBQyxPQUFvQixFQUFDLFdBQW1CO1FBQXhDLHdCQUFBLEVBQUEsZUFBb0I7UUFFdEksSUFBRyxnQkFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUUvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsc0RBQXNEO1lBQ3RELElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQ3ZCO2dCQUNJLElBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQ3hDO29CQUNJLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7b0JBQ2hDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0I7cUJBRUQ7b0JBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDMUI7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN0QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3RyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLG9DQUFvQztRQUVwQyxrREFBa0Q7UUFDbEQsbUJBQW1CO1FBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY0MgZnJvbSBcIi4uLy4uL1Rvb2xzL2NjQ1wiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vR2xvYmFsL0dsb2JhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdFxue1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0KHVybDpzdHJpbmcsc3VjY2Vzc0NhbGxiYWNrOihzdHJpbmcpPT52b2lkLGZhaWxDYWxsYmFjazooc3RyaW5nKT0+dm9pZCx0aW1lb3V0Om51bWJlcilcbiAgICB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICBcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNjLmVycm9yKFwieGhyLnJlYWR5U3RhdGUgIFwiICsgeGhyLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmYWlsQ2FsbGJhY2soXCJlcnIgY29kZTogXCIrIHhoci5zdGF0dXMgKyBcIiBlcnIgbXNnOiBcIiArIHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIGlmKHhoci5yZWFkeVN0YXRlID09IDEpXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIixcIipcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBQb3N0KHVybDpzdHJpbmcscG9zdFBhcm06e1tuYW1lOnN0cmluZ106YW55fSxzdWNjZXNzQ2FsbGJhY2s6KHN0cmluZyk9PnZvaWQsZmFpbENhbGxiYWNrOihzdHJpbmcpPT52b2lkLHRpbWVvdXQ6bnVtYmVyPTEwMDAwLGNvbnRlbnRUeXBlPzpzdHJpbmcpXG4gICAge1xuICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2MuZXJyb3IoXCJIdHRwUmVxdWVzdCBQb3N0IHVybCBcIiArIHVybCk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjYy5lcnJvcihcIlBvc3QgeGhyLnJlYWR5U3RhdGUgIFwiICsgeGhyLnJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciBjb2RlOiBcIisgeGhyLnN0YXR1cyArIFwiIGVyciBtc2c6IFwiICsgeGhyLnN0YXR1c1RleHQgKyBcIiB4aHIucmVzcG9uc2VUZXh0IFwiICsgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGZhaWxDYWxsYmFjayhcIue9kee7nOivt+axgumUmeivr1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsY29udGVudFR5cGUgPT0gbnVsbCA/IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgOiBjb250ZW50VHlwZSk7XG4gICAgICAgIFxuICAgICAgICBsZXQganNvbmdTdHIgPSBKU09OLnN0cmluZ2lmeShwb3N0UGFybSk7XG4gICAgICAgIC8vIGNjLmVycm9yKFwianNvbmdTdHIgXCIgKyBqc29uZ1N0cik7XG5cbiAgICAgICAgLy8gbGV0IGJ5dGVzID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGpzb25nU3RyKTtcbiAgICAgICAgLy8geGhyLnNlbmQoYnl0ZXMpO1xuICAgICAgICB4aHIuc2VuZChqc29uZ1N0cik7XG4gICAgfVxufVxuIl19