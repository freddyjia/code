
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/JSOpenUrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d8e6vNMHRMqJS3TwmWMUgj', 'JSOpenUrl');
// Scripts/JsTool/JSOpenUrl.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSOpenUrl = JSOpenUrl;

function JSOpenUrl() {} //directOpenUrl
//blankOpenUrl
//justOpenUrl


JSOpenUrl.JustOpen = function (url) {
  if (window["directOpenUrl"] == "1") {
    JSOpenUrl.DirectOpen(url);
    return;
  }

  if (window["blankOpenUrl"] == "1") {
    JSOpenUrl.BlankOpen(url);
    return;
  }

  window.open(url);
};

JSOpenUrl.DirectOpen = function (url) {
  if (window["blankOpenUrl"] == "1") {
    JSOpenUrl.BlankOpen(url);
    return;
  }

  if (window["justOpenUrl"] == "1") {
    JSOpenUrl.JustOpen(url);
    return;
  }

  document.location = url;
};

JSOpenUrl.BlankOpen = function (url) {
  if (window["directOpenUrl"] == "1") {
    JSOpenUrl.DirectOpen(url);
    return;
  }

  if (window["justOpenUrl"] == "1") {
    JSOpenUrl.JustOpen(url);
    return;
  }

  var tempwindow = window.open('_blank'); // 先打开页面

  if (tempwindow == null || typeof tempwindow == 'undefined') {
    document.location = url;
  } else {
    tempwindow.location = url; // 后更改页面地址
  }
}; // JSOpenUrl.Open = function(url)
// {
//     if(window["directOpenUrl"] == "1")
//     {
//         JSOpenUrl.DirectOpen(url);
//         return;
//     }
//     if(window["blankOpenUrl"] == "1")
//     {
//         JSOpenUrl.BlankOpen(url);
//         return;
//     }
//     if(window["justOpenUrl"] == "1")
//     {
//         JSOpenUrl.JustOpen(url);
//         return;
//     }
//     if(navigator.userAgent.indexOf("Android") != -1)
//     {
//         JSOpenUrl.BlankOpen(url);
//     }
//     else if(navigator.userAgent.indexOf("iPhone") != -1)
//     {
//         //苹果手机端
//         if(navigator.userAgent.indexOf("AppleWebKit") != -1 && navigator.userAgent.indexOf("Mobile") != -1)
//         {
//             var splits = navigator.userAgent.split(" ");
//             for(var i=0;i<splits.length;i++)
//             {
//                 var str = splits[i];
//                 if(str.indexOf("Mobile/") != -1)
//                 {
//                     if(i == splits.length - 1)
//                     {
//                         console.log("app内置webview");
//                         JSOpenUrl.JustOpen(url);
//                     }
//                     else
//                     {
//                         var str1 = splits[splits.length - 1];
//                         if(str1.indexOf("Safari") != -1)
//                         {
//                             console.log("手机端浏览器");
//                         }
//                         else
//                         {
//                             console.log("浏览器app");
//                         }
//                         JSOpenUrl.BlankOpen(url);
//                     }
//                     break;
//                 }
//             }
//         }
//         else
//         {
//             JSOpenUrl.BlankOpen(url);
//         }
//     }
//     else
//     {
//         JSOpenUrl.BlankOpen(url);
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxKU09wZW5VcmwuanMiXSwibmFtZXMiOlsiSlNPcGVuVXJsIiwiSnVzdE9wZW4iLCJ1cmwiLCJ3aW5kb3ciLCJEaXJlY3RPcGVuIiwiQmxhbmtPcGVuIiwib3BlbiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJ0ZW1wd2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsU0FBVCxHQUNQLENBRUMsRUFFRDtBQUNBO0FBQ0E7OztBQUVBQSxTQUFTLENBQUNDLFFBQVYsR0FBcUIsVUFBU0MsR0FBVCxFQUNyQjtBQUNJLE1BQUdDLE1BQU0sQ0FBQyxlQUFELENBQU4sSUFBMkIsR0FBOUIsRUFDQTtBQUNJSCxJQUFBQSxTQUFTLENBQUNJLFVBQVYsQ0FBcUJGLEdBQXJCO0FBQ0E7QUFDSDs7QUFDRCxNQUFHQyxNQUFNLENBQUMsY0FBRCxDQUFOLElBQTBCLEdBQTdCLEVBQ0E7QUFDSUgsSUFBQUEsU0FBUyxDQUFDSyxTQUFWLENBQW9CSCxHQUFwQjtBQUNBO0FBQ0g7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZSixHQUFaO0FBQ0gsQ0FkRDs7QUFnQkFGLFNBQVMsQ0FBQ0ksVUFBVixHQUF1QixVQUFTRixHQUFULEVBQ3ZCO0FBQ0ksTUFBR0MsTUFBTSxDQUFDLGNBQUQsQ0FBTixJQUEwQixHQUE3QixFQUNBO0FBQ0lILElBQUFBLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkgsR0FBcEI7QUFDQTtBQUNIOztBQUNELE1BQUdDLE1BQU0sQ0FBQyxhQUFELENBQU4sSUFBeUIsR0FBNUIsRUFDQTtBQUNJSCxJQUFBQSxTQUFTLENBQUNDLFFBQVYsQ0FBbUJDLEdBQW5CO0FBQ0E7QUFDSDs7QUFFREssRUFBQUEsUUFBUSxDQUFDQyxRQUFULEdBQW9CTixHQUFwQjtBQUNILENBZEQ7O0FBZ0JBRixTQUFTLENBQUNLLFNBQVYsR0FBc0IsVUFBU0gsR0FBVCxFQUN0QjtBQUNJLE1BQUdDLE1BQU0sQ0FBQyxlQUFELENBQU4sSUFBMkIsR0FBOUIsRUFDQTtBQUNJSCxJQUFBQSxTQUFTLENBQUNJLFVBQVYsQ0FBcUJGLEdBQXJCO0FBQ0E7QUFDSDs7QUFDRCxNQUFHQyxNQUFNLENBQUMsYUFBRCxDQUFOLElBQXlCLEdBQTVCLEVBQ0E7QUFDSUgsSUFBQUEsU0FBUyxDQUFDQyxRQUFWLENBQW1CQyxHQUFuQjtBQUNBO0FBQ0g7O0FBRUQsTUFBSU8sVUFBVSxHQUFDTixNQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaLENBQWYsQ0FaSixDQVkwQzs7QUFDdEMsTUFBR0csVUFBVSxJQUFJLElBQWQsSUFBc0IsT0FBT0EsVUFBUCxJQUFvQixXQUE3QyxFQUNBO0FBQ0lGLElBQUFBLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQk4sR0FBcEI7QUFDSCxHQUhELE1BS0E7QUFDSU8sSUFBQUEsVUFBVSxDQUFDRCxRQUFYLEdBQXNCTixHQUF0QixDQURKLENBQzhCO0FBQzdCO0FBQ0osQ0F0QkQsRUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBKU09wZW5VcmwoKSBcbnsgXG5cbn1cblxuLy9kaXJlY3RPcGVuVXJsXG4vL2JsYW5rT3BlblVybFxuLy9qdXN0T3BlblVybFxuXG5KU09wZW5VcmwuSnVzdE9wZW4gPSBmdW5jdGlvbih1cmwpXG57XG4gICAgaWYod2luZG93W1wiZGlyZWN0T3BlblVybFwiXSA9PSBcIjFcIilcbiAgICB7XG4gICAgICAgIEpTT3BlblVybC5EaXJlY3RPcGVuKHVybCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYod2luZG93W1wiYmxhbmtPcGVuVXJsXCJdID09IFwiMVwiKVxuICAgIHtcbiAgICAgICAgSlNPcGVuVXJsLkJsYW5rT3Blbih1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93Lm9wZW4odXJsKTtcbn1cblxuSlNPcGVuVXJsLkRpcmVjdE9wZW4gPSBmdW5jdGlvbih1cmwpXG57XG4gICAgaWYod2luZG93W1wiYmxhbmtPcGVuVXJsXCJdID09IFwiMVwiKVxuICAgIHtcbiAgICAgICAgSlNPcGVuVXJsLkJsYW5rT3Blbih1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHdpbmRvd1tcImp1c3RPcGVuVXJsXCJdID09IFwiMVwiKVxuICAgIHtcbiAgICAgICAgSlNPcGVuVXJsLkp1c3RPcGVuKHVybCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybFxufVxuXG5KU09wZW5VcmwuQmxhbmtPcGVuID0gZnVuY3Rpb24odXJsKVxue1xuICAgIGlmKHdpbmRvd1tcImRpcmVjdE9wZW5VcmxcIl0gPT0gXCIxXCIpXG4gICAge1xuICAgICAgICBKU09wZW5VcmwuRGlyZWN0T3Blbih1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHdpbmRvd1tcImp1c3RPcGVuVXJsXCJdID09IFwiMVwiKVxuICAgIHtcbiAgICAgICAgSlNPcGVuVXJsLkp1c3RPcGVuKHVybCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGVtcHdpbmRvdz13aW5kb3cub3BlbignX2JsYW5rJyk7IC8vIOWFiOaJk+W8gOmhtemdolxuICAgIGlmKHRlbXB3aW5kb3cgPT0gbnVsbCB8fCB0eXBlb2YodGVtcHdpbmRvdyk9PSd1bmRlZmluZWQnKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSB1cmxcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGVtcHdpbmRvdy5sb2NhdGlvbiA9IHVybCAvLyDlkI7mm7TmlLnpobXpnaLlnLDlnYBcbiAgICB9XG59XG5cbi8vIEpTT3BlblVybC5PcGVuID0gZnVuY3Rpb24odXJsKVxuLy8ge1xuLy8gICAgIGlmKHdpbmRvd1tcImRpcmVjdE9wZW5VcmxcIl0gPT0gXCIxXCIpXG4vLyAgICAge1xuLy8gICAgICAgICBKU09wZW5VcmwuRGlyZWN0T3Blbih1cmwpO1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy8gICAgIGlmKHdpbmRvd1tcImJsYW5rT3BlblVybFwiXSA9PSBcIjFcIilcbi8vICAgICB7XG4vLyAgICAgICAgIEpTT3BlblVybC5CbGFua09wZW4odXJsKTtcbi8vICAgICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICBpZih3aW5kb3dbXCJqdXN0T3BlblVybFwiXSA9PSBcIjFcIilcbi8vICAgICB7XG4vLyAgICAgICAgIEpTT3BlblVybC5KdXN0T3Blbih1cmwpO1xuLy8gICAgICAgICByZXR1cm47XG4vLyAgICAgfVxuXG4vLyAgICAgaWYobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSAhPSAtMSlcbi8vICAgICB7XG4vLyAgICAgICAgIEpTT3BlblVybC5CbGFua09wZW4odXJsKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJpUGhvbmVcIikgIT0gLTEpXG4vLyAgICAge1xuLy8gICAgICAgICAvL+iLueaenOaJi+acuuerr1xuLy8gICAgICAgICBpZihuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJBcHBsZVdlYktpdFwiKSAhPSAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNb2JpbGVcIikgIT0gLTEpXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIHZhciBzcGxpdHMgPSBuYXZpZ2F0b3IudXNlckFnZW50LnNwbGl0KFwiIFwiKTtcbi8vICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8c3BsaXRzLmxlbmd0aDtpKyspXG4vLyAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IHNwbGl0c1tpXTtcbi8vICAgICAgICAgICAgICAgICBpZihzdHIuaW5kZXhPZihcIk1vYmlsZS9cIikgIT0gLTEpXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZihpID09IHNwbGl0cy5sZW5ndGggLSAxKVxuLy8gICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFwcOWGhee9rndlYnZpZXdcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBKU09wZW5VcmwuSnVzdE9wZW4odXJsKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBlbHNlXG4vLyAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIxID0gc3BsaXRzW3NwbGl0cy5sZW5ndGggLSAxXTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0cjEuaW5kZXhPZihcIlNhZmFyaVwiKSAhPSAtMSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJi+acuuerr+a1j+iniOWZqFwiKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Vcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1j+iniOWZqGFwcFwiKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIEpTT3BlblVybC5CbGFua09wZW4odXJsKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZVxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBKU09wZW5VcmwuQmxhbmtPcGVuKHVybCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgZWxzZVxuLy8gICAgIHtcbi8vICAgICAgICAgSlNPcGVuVXJsLkJsYW5rT3Blbih1cmwpO1xuLy8gICAgIH1cbiAgIFxuXG4vLyB9XG4iXX0=