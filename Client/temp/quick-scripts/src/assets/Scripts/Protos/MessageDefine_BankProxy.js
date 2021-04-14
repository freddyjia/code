"use strict";
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