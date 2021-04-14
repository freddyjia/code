
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Protos/MessageDefine_BankProxy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a4f6ATZUtNXLtrQKZGUXZN', 'MessageDefine_BankProxy');
// Scripts/Protos/MessageDefine_BankProxy.js

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf"); // Common aliases


var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots.MessageDefine_BankProxy || ($protobuf.roots.MessageDefine_BankProxy = {});
/**
 * BankProxyMsgDefine enum.
 * @exports BankProxyMsgDefine
 * @enum {string}
 * @property {number} MSG_BankProxy_Login=15101 MSG_BankProxy_Login value
 * @property {number} MSG_BankProxy_ProxyInfoReq=15102 MSG_BankProxy_ProxyInfoReq value
 * @property {number} MSG_BankProxy_SubmitDepositReq=15103 MSG_BankProxy_SubmitDepositReq value
 * @property {number} MSG_BankProxy_SubmitOrderReq=15104 MSG_BankProxy_SubmitOrderReq value
 */

$root.BankProxyMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[15101] = "MSG_BankProxy_Login"] = 15101;
  values[valuesById[15102] = "MSG_BankProxy_ProxyInfoReq"] = 15102;
  values[valuesById[15103] = "MSG_BankProxy_SubmitDepositReq"] = 15103;
  values[valuesById[15104] = "MSG_BankProxy_SubmitOrderReq"] = 15104;
  return values;
}();

module.exports = $root;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHJvdG9zXFxNZXNzYWdlRGVmaW5lX0JhbmtQcm94eS5qcyJdLCJuYW1lcyI6WyIkcHJvdG9idWYiLCJyZXF1aXJlIiwiJFJlYWRlciIsIlJlYWRlciIsIiRXcml0ZXIiLCJXcml0ZXIiLCIkdXRpbCIsInV0aWwiLCIkcm9vdCIsInJvb3RzIiwiTWVzc2FnZURlZmluZV9CYW5rUHJveHkiLCJCYW5rUHJveHlNc2dEZWZpbmUiLCJ2YWx1ZXNCeUlkIiwidmFsdWVzIiwiT2JqZWN0IiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCLEVBRUE7OztBQUNBLElBQUlDLE9BQU8sR0FBR0YsU0FBUyxDQUFDRyxNQUF4QjtBQUFBLElBQWdDQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssTUFBcEQ7QUFBQSxJQUE0REMsS0FBSyxHQUFHTixTQUFTLENBQUNPLElBQTlFLEVBRUE7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHUixTQUFTLENBQUNTLEtBQVYsQ0FBZ0JDLHVCQUFoQixLQUE0Q1YsU0FBUyxDQUFDUyxLQUFWLENBQWdCQyx1QkFBaEIsR0FBMEMsRUFBdEYsQ0FBWjtBQUVBOzs7Ozs7Ozs7O0FBU0FGLEtBQUssQ0FBQ0csa0JBQU4sR0FBNEIsWUFBVztBQUNuQyxNQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFBQSxNQUFxQkMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsVUFBZCxDQUE5QjtBQUNBQyxFQUFBQSxNQUFNLENBQUNELFVBQVUsQ0FBQyxLQUFELENBQVYsR0FBb0IscUJBQXJCLENBQU4sR0FBb0QsS0FBcEQ7QUFDQUMsRUFBQUEsTUFBTSxDQUFDRCxVQUFVLENBQUMsS0FBRCxDQUFWLEdBQW9CLDRCQUFyQixDQUFOLEdBQTJELEtBQTNEO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0QsVUFBVSxDQUFDLEtBQUQsQ0FBVixHQUFvQixnQ0FBckIsQ0FBTixHQUErRCxLQUEvRDtBQUNBQyxFQUFBQSxNQUFNLENBQUNELFVBQVUsQ0FBQyxLQUFELENBQVYsR0FBb0IsOEJBQXJCLENBQU4sR0FBNkQsS0FBN0Q7QUFDQSxTQUFPQyxNQUFQO0FBQ0gsQ0FQMEIsRUFBM0I7O0FBU0FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsS0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUsYmxvY2stc2NvcGVkLXZhcixpZC1sZW5ndGgsbm8tY29udHJvbC1yZWdleCxuby1tYWdpYy1udW1iZXJzLG5vLXByb3RvdHlwZS1idWlsdGlucyxuby1yZWRlY2xhcmUsbm8tc2hhZG93LG5vLXZhcixzb3J0LXZhcnMqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkcHJvdG9idWYgPSByZXF1aXJlKFwiLi9wcm90b2J1ZlwiKTtcblxuLy8gQ29tbW9uIGFsaWFzZXNcbnZhciAkUmVhZGVyID0gJHByb3RvYnVmLlJlYWRlciwgJFdyaXRlciA9ICRwcm90b2J1Zi5Xcml0ZXIsICR1dGlsID0gJHByb3RvYnVmLnV0aWw7XG5cbi8vIEV4cG9ydGVkIHJvb3QgbmFtZXNwYWNlXG52YXIgJHJvb3QgPSAkcHJvdG9idWYucm9vdHMuTWVzc2FnZURlZmluZV9CYW5rUHJveHkgfHwgKCRwcm90b2J1Zi5yb290cy5NZXNzYWdlRGVmaW5lX0JhbmtQcm94eSA9IHt9KTtcblxuLyoqXG4gKiBCYW5rUHJveHlNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIEJhbmtQcm94eU1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQmFua1Byb3h5X0xvZ2luPTE1MTAxIE1TR19CYW5rUHJveHlfTG9naW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQmFua1Byb3h5X1Byb3h5SW5mb1JlcT0xNTEwMiBNU0dfQmFua1Byb3h5X1Byb3h5SW5mb1JlcSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19CYW5rUHJveHlfU3VibWl0RGVwb3NpdFJlcT0xNTEwMyBNU0dfQmFua1Byb3h5X1N1Ym1pdERlcG9zaXRSZXEgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQmFua1Byb3h5X1N1Ym1pdE9yZGVyUmVxPTE1MTA0IE1TR19CYW5rUHJveHlfU3VibWl0T3JkZXJSZXEgdmFsdWVcbiAqL1xuJHJvb3QuQmFua1Byb3h5TXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTUxMDFdID0gXCJNU0dfQmFua1Byb3h5X0xvZ2luXCJdID0gMTUxMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTUxMDJdID0gXCJNU0dfQmFua1Byb3h5X1Byb3h5SW5mb1JlcVwiXSA9IDE1MTAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzE1MTAzXSA9IFwiTVNHX0JhbmtQcm94eV9TdWJtaXREZXBvc2l0UmVxXCJdID0gMTUxMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTUxMDRdID0gXCJNU0dfQmFua1Byb3h5X1N1Ym1pdE9yZGVyUmVxXCJdID0gMTUxMDQ7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gJHJvb3Q7XG4iXX0=