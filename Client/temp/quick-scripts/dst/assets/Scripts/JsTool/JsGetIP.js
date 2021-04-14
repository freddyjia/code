
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/JsGetIP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxKc0dldElQLmpzIl0sIm5hbWVzIjpbIkpzR2V0SVAiLCJKc0dldCIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzcmMiLCJoYXZlY29tcGxldGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmV0dXJuQ2l0eVNOIiwib25sb2FkIiwic2V0VGltZW91dCIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsT0FBVCxHQUFtQixDQUV6Qjs7QUFDREEsT0FBTyxDQUFDQyxLQUFSLEdBQWdCLFVBQVNDLFFBQVQsRUFBa0I7QUFDOUJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNEQUFaO0FBRUEsTUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLElBQVAsR0FBYSxpQkFBYjtBQUNBSCxFQUFBQSxNQUFNLENBQUNJLEdBQVAsR0FBYSx1Q0FBYjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFuQjs7QUFDQUwsRUFBQUEsTUFBTSxDQUFDTSxrQkFBUCxHQUEyQixZQUFZO0FBQ25DLFFBQUksS0FBS0MsVUFBTCxJQUFtQixRQUFuQixJQUErQixLQUFLQSxVQUFMLElBQW1CLFVBQXRELEVBQ0E7QUFDSSxVQUFHRixZQUFZLElBQUksS0FBbkIsRUFBeUI7QUFDckJBLFFBQUFBLFlBQVksR0FBRyxJQUFmOztBQUNBLFlBQUcsT0FBT0csWUFBUCxJQUF3QixXQUEzQixFQUNBO0FBQ0lYLFVBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU1XLFlBQVksQ0FBQyxLQUFELENBQWxCLENBQVI7QUFDSCxTQUhELE1BS0E7QUFDSVgsVUFBQUEsUUFBUSxDQUFDLEtBQUQsRUFBTyxpQkFBUCxDQUFSO0FBQ0g7QUFFSjtBQUNKO0FBQ0osR0FoQkQ7O0FBaUJBRyxFQUFBQSxNQUFNLENBQUNTLE1BQVAsR0FBZSxZQUFVO0FBQ3JCLFFBQUdKLFlBQVksSUFBSSxLQUFuQixFQUF5QjtBQUNyQkEsTUFBQUEsWUFBWSxHQUFHLElBQWY7O0FBQ0EsVUFBRyxPQUFPRyxZQUFQLElBQXdCLFdBQTNCLEVBQ0E7QUFDSVgsUUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBTVcsWUFBWSxDQUFDLEtBQUQsQ0FBbEIsQ0FBUjtBQUNILE9BSEQsTUFLQTtBQUNJWCxRQUFBQSxRQUFRLENBQUMsS0FBRCxFQUFPLGlCQUFQLENBQVI7QUFDSDtBQUNKO0FBQ0osR0FaRDs7QUFhQWEsRUFBQUEsVUFBVSxDQUFDLFlBQUk7QUFDWCxRQUFHTCxZQUFZLElBQUksS0FBbkIsRUFDQTtBQUNJQSxNQUFBQSxZQUFZLEdBQUcsSUFBZjtBQUNBUixNQUFBQSxRQUFRLENBQUMsS0FBRCxFQUFPLFVBQVAsQ0FBUjtBQUNIO0FBQ0osR0FOUyxFQU1SLElBTlEsQ0FBVjtBQVFBSSxFQUFBQSxRQUFRLENBQUNVLElBQVQsQ0FBY0MsWUFBZCxDQUEyQlosTUFBM0IsRUFBbUNDLFFBQVEsQ0FBQ1UsSUFBVCxDQUFjRSxVQUFqRDtBQUNILENBOUNEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gSnNHZXRJUCgpIHsgXG5cbn1cbkpzR2V0SVAuSnNHZXQgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgSnNHZXRJUC5Kc0dldCBjYWxsXCIpXG5cbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBzY3JpcHQudHlwZT0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9wdi5zb2h1LmNvbS9jaXR5anNvbj9pZT11dGYtOFwiO1xuICAgIHZhciBoYXZlY29tcGxldGUgPSBmYWxzZTtcbiAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gJ2xvYWRlZCcgfHwgdGhpcy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGhhdmVjb21wbGV0ZSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgaGF2ZWNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YocmV0dXJuQ2l0eVNOKSAhPSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSxyZXR1cm5DaXR5U05bXCJjaXBcIl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSxcIm5vIHJldHVybkNpdHlTTlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNjcmlwdC5vbmxvYWQ9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGhhdmVjb21wbGV0ZSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBoYXZlY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYodHlwZW9mKHJldHVybkNpdHlTTikgIT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLHJldHVybkNpdHlTTltcImNpcFwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsXCJubyByZXR1cm5DaXR5U05cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgaWYoaGF2ZWNvbXBsZXRlID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBoYXZlY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsXCJ0aW1lIG91dFwiKTtcbiAgICAgICAgfVxuICAgIH0sNTAwMCk7XG4gICAgXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xufVxuXG5cbiJdfQ==