
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/JsGetUrlParms.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxKc0dldFVybFBhcm1zLmpzIl0sIm5hbWVzIjpbIkpzR2V0VXJsUGFybXMiLCJHZXRVcmxQYXJtcyIsInBhcm1kYXRhIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXQiLCJpbmRleE9mIiwic3RyIiwic3Vic3RyIiwic3RycyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInNwbGl0cyIsIlNldFVybFBhcm1zVG9XaW5kb3ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxTQUFTQSxhQUFULEdBQ1AsQ0FFQzs7QUFFREEsYUFBYSxDQUFDQyxXQUFkLEdBQTRCLFlBQzVCO0FBQ0ksTUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLE1BQXhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEVBQVYsQ0FGSixDQUdJOztBQUNBLE1BQUlILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQixHQUFqQixLQUF5QixDQUFDLENBQTlCLEVBQ0E7QUFDSSxRQUFJQyxHQUFHLEdBQUdMLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQixDQUFoQixDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLENBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLElBQUksQ0FBQ0csTUFBbkIsRUFBMEJELENBQUMsRUFBM0IsRUFDQTtBQUNJLFVBQUlFLE1BQU0sR0FBR0osSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUQsS0FBUixDQUFjLEdBQWQsQ0FBYjtBQUNBTCxNQUFBQSxHQUFHLENBQUNRLE1BQU0sQ0FBQyxDQUFELENBQVAsQ0FBSCxHQUFpQkEsTUFBTSxDQUFDLENBQUQsQ0FBdkI7QUFDSDtBQUNKOztBQUNELFNBQU9SLEdBQVA7QUFFSCxDQWpCRDs7QUFtQkFMLGFBQWEsQ0FBQ2MsbUJBQWQsR0FBb0MsWUFDcEM7QUFDSSxNQUFJWixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBeEI7O0FBRUEsTUFBSUYsUUFBUSxDQUFDSSxPQUFULENBQWlCLEdBQWpCLEtBQXlCLENBQUMsQ0FBOUIsRUFDQTtBQUNJLFFBQUlDLEdBQUcsR0FBR0wsUUFBUSxDQUFDTSxNQUFULENBQWdCLENBQWhCLENBQVY7QUFDQSxRQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVLEdBQVYsQ0FBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0YsSUFBSSxDQUFDRyxNQUFuQixFQUEwQkQsQ0FBQyxFQUEzQixFQUNBO0FBQ0ksVUFBSUUsTUFBTSxHQUFHSixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRCxLQUFSLENBQWMsR0FBZCxDQUFiO0FBQ0FLLE1BQUFBLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFOLEdBQW9CQSxNQUFNLENBQUMsQ0FBRCxDQUExQjtBQUNIO0FBQ0o7QUFFSixDQWZEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gSnNHZXRVcmxQYXJtcygpIFxueyBcblxufVxuXG5Kc0dldFVybFBhcm1zLkdldFVybFBhcm1zID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBwYXJtZGF0YSA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgLy8gY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMgdXJsICBcIiArIHBhcm1kYXRhKTtcbiAgICBpZiAocGFybWRhdGEuaW5kZXhPZihcIj9cIikgIT0gLTEpIFxuICAgIHtcbiAgICAgICAgdmFyIHN0ciA9IHBhcm1kYXRhLnN1YnN0cigxKTtcbiAgICAgICAgdmFyIHN0cnMgPSBzdHIuc3BsaXQoXCImXCIpO1xuICAgICAgICBmb3IodmFyIGk9MDtpPHN0cnMubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNwbGl0cyA9IHN0cnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgcmV0W3NwbGl0c1swXV0gPSBzcGxpdHNbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgICBcbn1cblxuSnNHZXRVcmxQYXJtcy5TZXRVcmxQYXJtc1RvV2luZG93ID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBwYXJtZGF0YSA9IGxvY2F0aW9uLnNlYXJjaDtcblxuICAgIGlmIChwYXJtZGF0YS5pbmRleE9mKFwiP1wiKSAhPSAtMSkgXG4gICAge1xuICAgICAgICB2YXIgc3RyID0gcGFybWRhdGEuc3Vic3RyKDEpO1xuICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdChcIiZcIik7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8c3Rycy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc3BsaXRzID0gc3Ryc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICB3aW5kb3dbc3BsaXRzWzBdXSA9IHNwbGl0c1sxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iXX0=