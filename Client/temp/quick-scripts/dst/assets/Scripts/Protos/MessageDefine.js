
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Protos/MessageDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '846632Y7OtOPpvKO92U5hJw', 'MessageDefine');
// Scripts/Protos/MessageDefine.js

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf"); // Common aliases


var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots.MessageDefine || ($protobuf.roots.MessageDefine = {});
/**
 * NetMsgDefine enum.
 * @exports NetMsgDefine
 * @enum {string}
 * @property {number} HANDSHAKE=1 HANDSHAKE value
 * @property {number} MSG_OVER_LAP=2 MSG_OVER_LAP value
 */

$root.NetMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[1] = "HANDSHAKE"] = 1;
  values[valuesById[2] = "MSG_OVER_LAP"] = 2;
  return values;
}();
/**
 * PingMsgDefine enum.
 * @exports PingMsgDefine
 * @enum {string}
 * @property {number} MSG_PING=1001 MSG_PING value
 */


$root.PingMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[1001] = "MSG_PING"] = 1001;
  return values;
}();
/**
 * LoginMsgDefine enum.
 * @exports LoginMsgDefine
 * @enum {string}
 * @property {number} MSG_LOGIN_HALL=1000 MSG_LOGIN_HALL value
 * @property {number} MSG_RECONNECT_STATUS=1002 MSG_RECONNECT_STATUS value
 * @property {number} MSG_RECONNECT_BATTLE=1003 MSG_RECONNECT_BATTLE value
 * @property {number} MSG_RECONNECT=1004 MSG_RECONNECT value
 * @property {number} MSG_MINI_GAME_RECONNECT_NOTIFY=1005 MSG_MINI_GAME_RECONNECT_NOTIFY value
 * @property {number} MSG_GAME_STATUS_RESPONSE=1006 MSG_GAME_STATUS_RESPONSE value
 */


$root.LoginMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[1000] = "MSG_LOGIN_HALL"] = 1000;
  values[valuesById[1002] = "MSG_RECONNECT_STATUS"] = 1002;
  values[valuesById[1003] = "MSG_RECONNECT_BATTLE"] = 1003;
  values[valuesById[1004] = "MSG_RECONNECT"] = 1004;
  values[valuesById[1005] = "MSG_MINI_GAME_RECONNECT_NOTIFY"] = 1005;
  values[valuesById[1006] = "MSG_GAME_STATUS_RESPONSE"] = 1006;
  return values;
}();
/**
 * CurrencyMsgDefine enum.
 * @exports CurrencyMsgDefine
 * @enum {string}
 * @property {number} SM_SYNC_CURRENCY=2001 SM_SYNC_CURRENCY value
 * @property {number} SM_SYNC_HALL_CURRENCY=2002 SM_SYNC_HALL_CURRENCY value
 */


$root.CurrencyMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[2001] = "SM_SYNC_CURRENCY"] = 2001;
  values[valuesById[2002] = "SM_SYNC_HALL_CURRENCY"] = 2002;
  return values;
}();
/**
 * RankMsgDefine enum.
 * @exports RankMsgDefine
 * @enum {string}
 * @property {number} CM_GET_RANK_INFO_DATA=3000 CM_GET_RANK_INFO_DATA value
 * @property {number} CM_GET_RANK_LIST_DATA=3001 CM_GET_RANK_LIST_DATA value
 */


$root.RankMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[3000] = "CM_GET_RANK_INFO_DATA"] = 3000;
  values[valuesById[3001] = "CM_GET_RANK_LIST_DATA"] = 3001;
  return values;
}();
/**
 * MailMsgDefine enum.
 * @exports MailMsgDefine
 * @enum {string}
 * @property {number} CM_PUSH_MAIL_DATA=4001 CM_PUSH_MAIL_DATA value
 * @property {number} SM_PUSH_MAIL_DATA=4002 SM_PUSH_MAIL_DATA value
 * @property {number} SM_UPDATE_MAIL_DATA=4003 SM_UPDATE_MAIL_DATA value
 * @property {number} CM_READ_MAIL=4004 CM_READ_MAIL value
 * @property {number} CM_GET_MAIL_ATTACHMENT=4005 CM_GET_MAIL_ATTACHMENT value
 * @property {number} CM_DELETE_MAIL=4006 CM_DELETE_MAIL value
 */


$root.MailMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[4001] = "CM_PUSH_MAIL_DATA"] = 4001;
  values[valuesById[4002] = "SM_PUSH_MAIL_DATA"] = 4002;
  values[valuesById[4003] = "SM_UPDATE_MAIL_DATA"] = 4003;
  values[valuesById[4004] = "CM_READ_MAIL"] = 4004;
  values[valuesById[4005] = "CM_GET_MAIL_ATTACHMENT"] = 4005;
  values[valuesById[4006] = "CM_DELETE_MAIL"] = 4006;
  return values;
}();
/**
 * ItemMsgDefine enum.
 * @exports ItemMsgDefine
 * @enum {string}
 * @property {number} SM_ITEM_LOGIN_PUSH=5001 SM_ITEM_LOGIN_PUSH value
 * @property {number} SM_UPDATE_ITEMS=5002 SM_UPDATE_ITEMS value
 * @property {number} MSG_USE_ITEM=5003 MSG_USE_ITEM value
 */


$root.ItemMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[5001] = "SM_ITEM_LOGIN_PUSH"] = 5001;
  values[valuesById[5002] = "SM_UPDATE_ITEMS"] = 5002;
  values[valuesById[5003] = "MSG_USE_ITEM"] = 5003;
  return values;
}();
/**
 * PlayerRoleMsgDefine enum.
 * @exports PlayerRoleMsgDefine
 * @enum {string}
 * @property {number} SM_PUSH_ROLE_DATA=6001 SM_PUSH_ROLE_DATA value
 * @property {number} MSG_MODIFY_NICKNAME=6002 MSG_MODIFY_NICKNAME value
 * @property {number} MSG_MODIFY_HEAD_INFO=6003 MSG_MODIFY_HEAD_INFO value
 * @property {number} MSG_BIND_SIGN=6004 MSG_BIND_SIGN value
 * @property {number} MSG_UPLOAD_HEAD_IMAGE=6005 MSG_UPLOAD_HEAD_IMAGE value
 * @property {number} MSG_CHANGE_HEAD_BOX=6006 MSG_CHANGE_HEAD_BOX value
 * @property {number} MSG_SAFE_BOX_GET_BOX_INFO=6007 MSG_SAFE_BOX_GET_BOX_INFO value
 * @property {number} MSG_SAFE_BOX_TAKE_OUT_BOX_MONEY=6008 MSG_SAFE_BOX_TAKE_OUT_BOX_MONEY value
 * @property {number} MSG_SAFE_BOX_SAVE_BOX_MONEY=6009 MSG_SAFE_BOX_SAVE_BOX_MONEY value
 * @property {number} MSG_ANNOUN_GET_INFO=6010 MSG_ANNOUN_GET_INFO value
 * @property {number} MSG_ANNOUN_READ=6011 MSG_ANNOUN_READ value
 * @property {number} MSG_PUSH_ANNOUN_RED_POINT=6012 MSG_PUSH_ANNOUN_RED_POINT value
 * @property {number} MSG_PUSH_Bankruptcy_info=6013 MSG_PUSH_Bankruptcy_info value
 * @property {number} MSG_REQ_Bankruptcy_Remain=6016 MSG_REQ_Bankruptcy_Remain value
 * @property {number} MSG_REQ_Bankruptcy=6014 MSG_REQ_Bankruptcy value
 * @property {number} MSG_Server_Game_RQE_Bankruptcy_INFO=6015 MSG_Server_Game_RQE_Bankruptcy_INFO value
 * @property {number} MSM_PUSH_ZhuCeSongJin=6017 MSM_PUSH_ZhuCeSongJin value
 * @property {number} MSG_REQ_ZhuCeSongJin=6018 MSG_REQ_ZhuCeSongJin value
 * @property {number} MSG_REQ_XinShouJin=6019 MSG_REQ_XinShouJin value
 * @property {number} MSG_REQ_UP_XinShouJin=6020 MSG_REQ_UP_XinShouJin value
 * @property {number} MSM_PUSH_XinShouJinAndStep=6021 MSM_PUSH_XinShouJinAndStep value
 * @property {number} MSG_BINDING_MOBILE_NUM=6022 MSG_BINDING_MOBILE_NUM value
 * @property {number} MSG_PUSH_HEAD_FRAME_LIST=6023 MSG_PUSH_HEAD_FRAME_LIST value
 * @property {number} MSG_PUSH_BATTERY_LIST=6024 MSG_PUSH_BATTERY_LIST value
 */


$root.PlayerRoleMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[6001] = "SM_PUSH_ROLE_DATA"] = 6001;
  values[valuesById[6002] = "MSG_MODIFY_NICKNAME"] = 6002;
  values[valuesById[6003] = "MSG_MODIFY_HEAD_INFO"] = 6003;
  values[valuesById[6004] = "MSG_BIND_SIGN"] = 6004;
  values[valuesById[6005] = "MSG_UPLOAD_HEAD_IMAGE"] = 6005;
  values[valuesById[6006] = "MSG_CHANGE_HEAD_BOX"] = 6006;
  values[valuesById[6007] = "MSG_SAFE_BOX_GET_BOX_INFO"] = 6007;
  values[valuesById[6008] = "MSG_SAFE_BOX_TAKE_OUT_BOX_MONEY"] = 6008;
  values[valuesById[6009] = "MSG_SAFE_BOX_SAVE_BOX_MONEY"] = 6009;
  values[valuesById[6010] = "MSG_ANNOUN_GET_INFO"] = 6010;
  values[valuesById[6011] = "MSG_ANNOUN_READ"] = 6011;
  values[valuesById[6012] = "MSG_PUSH_ANNOUN_RED_POINT"] = 6012;
  values[valuesById[6013] = "MSG_PUSH_Bankruptcy_info"] = 6013;
  values[valuesById[6016] = "MSG_REQ_Bankruptcy_Remain"] = 6016;
  values[valuesById[6014] = "MSG_REQ_Bankruptcy"] = 6014;
  values[valuesById[6015] = "MSG_Server_Game_RQE_Bankruptcy_INFO"] = 6015;
  values[valuesById[6017] = "MSM_PUSH_ZhuCeSongJin"] = 6017;
  values[valuesById[6018] = "MSG_REQ_ZhuCeSongJin"] = 6018;
  values[valuesById[6019] = "MSG_REQ_XinShouJin"] = 6019;
  values[valuesById[6020] = "MSG_REQ_UP_XinShouJin"] = 6020;
  values[valuesById[6021] = "MSM_PUSH_XinShouJinAndStep"] = 6021;
  values[valuesById[6022] = "MSG_BINDING_MOBILE_NUM"] = 6022;
  values[valuesById[6023] = "MSG_PUSH_HEAD_FRAME_LIST"] = 6023;
  values[valuesById[6024] = "MSG_PUSH_BATTERY_LIST"] = 6024;
  return values;
}();
/**
 * PayClientMsgDefine enum.
 * @exports PayClientMsgDefine
 * @enum {string}
 * @property {number} MSG_BEFORE_PAY_NORMAL=8001 MSG_BEFORE_PAY_NORMAL value
 * @property {number} MSG_BEFORE_PAY_FIRST=8002 MSG_BEFORE_PAY_FIRST value
 * @property {number} MSG_REQ_RECHARGE_LIST=8003 MSG_REQ_RECHARGE_LIST value
 * @property {number} MSG_REQ_RECHARGE=8004 MSG_REQ_RECHARGE value
 * @property {number} MSG_REQ_REFRESH_PROXY=8005 MSG_REQ_REFRESH_PROXY value
 * @property {number} MSG_RSP_ACCOUNTGETMONEY=8006 MSG_RSP_ACCOUNTGETMONEY value
 * @property {number} MSG_REQ_CONFIRMGETMONEY=8007 MSG_REQ_CONFIRMGETMONEY value
 * @property {number} MSG_REQ_CHARGE_CHAT_SERVER_INFO=8008 MSG_REQ_CHARGE_CHAT_SERVER_INFO value
 * @property {number} MSG_RES_CHARGE_RECORD=8009 MSG_RES_CHARGE_RECORD value
 * @property {number} MSG_REQ_Evaluation=8010 MSG_REQ_Evaluation value
 */


$root.PayClientMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8001] = "MSG_BEFORE_PAY_NORMAL"] = 8001;
  values[valuesById[8002] = "MSG_BEFORE_PAY_FIRST"] = 8002;
  values[valuesById[8003] = "MSG_REQ_RECHARGE_LIST"] = 8003;
  values[valuesById[8004] = "MSG_REQ_RECHARGE"] = 8004;
  values[valuesById[8005] = "MSG_REQ_REFRESH_PROXY"] = 8005;
  values[valuesById[8006] = "MSG_RSP_ACCOUNTGETMONEY"] = 8006;
  values[valuesById[8007] = "MSG_REQ_CONFIRMGETMONEY"] = 8007;
  values[valuesById[8008] = "MSG_REQ_CHARGE_CHAT_SERVER_INFO"] = 8008;
  values[valuesById[8009] = "MSG_RES_CHARGE_RECORD"] = 8009;
  values[valuesById[8010] = "MSG_REQ_Evaluation"] = 8010;
  return values;
}();
/**
 * PayServerMsgDefine enum.
 * @exports PayServerMsgDefine
 * @enum {string}
 * @property {number} MSG_PAY=8101 MSG_PAY value
 * @property {number} MSG_IAP_VERIFY=8102 MSG_IAP_VERIFY value
 * @property {number} MSG_NOTIFY_IAP_VERIFY_FINISH=8103 MSG_NOTIFY_IAP_VERIFY_FINISH value
 * @property {number} MSG_IAP_PAY_SERVER_VERIFY=8104 MSG_IAP_PAY_SERVER_VERIFY value
 * @property {number} MSG_IAP_PAY_SERVER_VERIFY_RESULT=8105 MSG_IAP_PAY_SERVER_VERIFY_RESULT value
 * @property {number} MSG_CREATE_ORDER=8106 MSG_CREATE_ORDER value
 */


$root.PayServerMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8101] = "MSG_PAY"] = 8101;
  values[valuesById[8102] = "MSG_IAP_VERIFY"] = 8102;
  values[valuesById[8103] = "MSG_NOTIFY_IAP_VERIFY_FINISH"] = 8103;
  values[valuesById[8104] = "MSG_IAP_PAY_SERVER_VERIFY"] = 8104;
  values[valuesById[8105] = "MSG_IAP_PAY_SERVER_VERIFY_RESULT"] = 8105;
  values[valuesById[8106] = "MSG_CREATE_ORDER"] = 8106;
  return values;
}();
/**
 * BiLogMsgDefine enum.
 * @exports BiLogMsgDefine
 * @enum {string}
 * @property {number} MSG_BILOG=8201 MSG_BILOG value
 */


$root.BiLogMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8201] = "MSG_BILOG"] = 8201;
  return values;
}();
/**
 * ShareDataMsgDefine enum.
 * @exports ShareDataMsgDefine
 * @enum {string}
 * @property {number} MSG_SHARE_BRAND_ROAD_DATA=8202 MSG_SHARE_BRAND_ROAD_DATA value
 * @property {number} MSG_SHARE_ROOM_STATUS=8203 MSG_SHARE_ROOM_STATUS value
 * @property {number} MSG_ARCADECATCHFISH_CHANGE_STOCK=8204 MSG_ARCADECATCHFISH_CHANGE_STOCK value
 * @property {number} MSG_REQ_ALL_ROAD=8205 MSG_REQ_ALL_ROAD value
 * @property {number} MSG_Rsp_ALL_ROAD=8206 MSG_Rsp_ALL_ROAD value
 */


$root.ShareDataMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8202] = "MSG_SHARE_BRAND_ROAD_DATA"] = 8202;
  values[valuesById[8203] = "MSG_SHARE_ROOM_STATUS"] = 8203;
  values[valuesById[8204] = "MSG_ARCADECATCHFISH_CHANGE_STOCK"] = 8204;
  values[valuesById[8205] = "MSG_REQ_ALL_ROAD"] = 8205;
  values[valuesById[8206] = "MSG_Rsp_ALL_ROAD"] = 8206;
  return values;
}();
/**
 * LegendMsgDefine enum.
 * @exports LegendMsgDefine
 * @enum {string}
 * @property {number} MSG_LEGEND=8205 MSG_LEGEND value
 */


$root.LegendMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8205] = "MSG_LEGEND"] = 8205;
  return values;
}();
/**
 * GMMsgDefine enum.
 * @exports GMMsgDefine
 * @enum {string}
 * @property {number} MSG_GM_BROADCAST=8301 MSG_GM_BROADCAST value
 * @property {number} MSG_GM_NOTIFY_ROLE_LOGIN=8302 MSG_GM_NOTIFY_ROLE_LOGIN value
 * @property {number} MSG_GM_SEND_GMEMAIL=8303 MSG_GM_SEND_GMEMAIL value
 * @property {number} MSG_GM_SEND_ANNOUN=8304 MSG_GM_SEND_ANNOUN value
 * @property {number} MSG_GM_MODIFY_CURRENCY=8305 MSG_GM_MODIFY_CURRENCY value
 * @property {number} MSG_GM_RELOAD_ANNOUNCEMENT=8306 MSG_GM_RELOAD_ANNOUNCEMENT value
 */


$root.GMMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8301] = "MSG_GM_BROADCAST"] = 8301;
  values[valuesById[8302] = "MSG_GM_NOTIFY_ROLE_LOGIN"] = 8302;
  values[valuesById[8303] = "MSG_GM_SEND_GMEMAIL"] = 8303;
  values[valuesById[8304] = "MSG_GM_SEND_ANNOUN"] = 8304;
  values[valuesById[8305] = "MSG_GM_MODIFY_CURRENCY"] = 8305;
  values[valuesById[8306] = "MSG_GM_RELOAD_ANNOUNCEMENT"] = 8306;
  return values;
}();
/**
 * ChatMsgDefine enum.
 * @exports ChatMsgDefine
 * @enum {string}
 * @property {number} MSG_SEND_BROADCAST=8400 MSG_SEND_BROADCAST value
 * @property {number} MSG_BROADCAST=8401 MSG_BROADCAST value
 * @property {number} MSG_CHAT=8402 MSG_CHAT value
 * @property {number} MSG_READ_CHAT=8403 MSG_READ_CHAT value
 * @property {number} MSG_MAKE_READ=8404 MSG_MAKE_READ value
 * @property {number} MSG_PUSH_CHAT=8405 MSG_PUSH_CHAT value
 */


$root.ChatMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8400] = "MSG_SEND_BROADCAST"] = 8400;
  values[valuesById[8401] = "MSG_BROADCAST"] = 8401;
  values[valuesById[8402] = "MSG_CHAT"] = 8402;
  values[valuesById[8403] = "MSG_READ_CHAT"] = 8403;
  values[valuesById[8404] = "MSG_MAKE_READ"] = 8404;
  values[valuesById[8405] = "MSG_PUSH_CHAT"] = 8405;
  return values;
}();
/**
 * ChatServerMsgDefine enum.
 * @exports ChatServerMsgDefine
 * @enum {string}
 * @property {number} MID_CHAT_MSG=8450 MID_CHAT_MSG value
 */


$root.ChatServerMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8450] = "MID_CHAT_MSG"] = 8450;
  return values;
}();
/**
 * HallMsgDefine enum.
 * @exports HallMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_HALL_DATA=8500 MSG_PUSH_HALL_DATA value
 * @property {number} MSG_OPEN_PLAY_LIST_REQ=8501 MSG_OPEN_PLAY_LIST_REQ value
 * @property {number} MSG_PLAY_GAME=8502 MSG_PLAY_GAME value
 * @property {number} MSG_PUSH_MATCH_RESULT=8503 MSG_PUSH_MATCH_RESULT value
 * @property {number} MSG_CANCEL_PLAY=8504 MSG_CANCEL_PLAY value
 * @property {number} MSG_LOGINHALL_POPMENU=8505 MSG_LOGINHALL_POPMENU value
 * @property {number} MSG_PUSH_MOUDULE_STATUS=8506 MSG_PUSH_MOUDULE_STATUS value
 * @property {number} MSG_PUSH_CHANNEL_ASSET=8507 MSG_PUSH_CHANNEL_ASSET value
 */


$root.HallMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8500] = "MSG_PUSH_HALL_DATA"] = 8500;
  values[valuesById[8501] = "MSG_OPEN_PLAY_LIST_REQ"] = 8501;
  values[valuesById[8502] = "MSG_PLAY_GAME"] = 8502;
  values[valuesById[8503] = "MSG_PUSH_MATCH_RESULT"] = 8503;
  values[valuesById[8504] = "MSG_CANCEL_PLAY"] = 8504;
  values[valuesById[8505] = "MSG_LOGINHALL_POPMENU"] = 8505;
  values[valuesById[8506] = "MSG_PUSH_MOUDULE_STATUS"] = 8506;
  values[valuesById[8507] = "MSG_PUSH_CHANNEL_ASSET"] = 8507;
  return values;
}();
/**
 * LoginPopupMsgDefine enum.
 * @exports LoginPopupMsgDefine
 * @enum {string}
 * @property {number} MSG_LOGIN_POP_UP=8800 MSG_LOGIN_POP_UP value
 * @property {number} MSG_CLOSE_POP_UP=8801 MSG_CLOSE_POP_UP value
 */


$root.LoginPopupMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[8800] = "MSG_LOGIN_POP_UP"] = 8800;
  values[valuesById[8801] = "MSG_CLOSE_POP_UP"] = 8801;
  return values;
}();
/**
 * MatchServerMsgDefine enum.
 * @exports MatchServerMsgDefine
 * @enum {string}
 * @property {number} MSG_MATCH_REQ=9000 MSG_MATCH_REQ value
 * @property {number} MSG_CANCEL_MATCH_REQ=9001 MSG_CANCEL_MATCH_REQ value
 * @property {number} MSG_GAME_TO_MATCH_RESULT_RESPONSE=9002 MSG_GAME_TO_MATCH_RESULT_RESPONSE value
 * @property {number} MSG_MATCH_TO_HALL_RESULT_RESPONSE=9003 MSG_MATCH_TO_HALL_RESULT_RESPONSE value
 * @property {number} MSG_MATCH_TO_GAME_START_REQUEST=9004 MSG_MATCH_TO_GAME_START_REQUEST value
 * @property {number} MSG_GAME_TO_MATCH_GAME_FINISH=9005 MSG_GAME_TO_MATCH_GAME_FINISH value
 * @property {number} MSG_GAME_TO_MATCH_GET_ROBOT=9006 MSG_GAME_TO_MATCH_GET_ROBOT value
 * @property {number} MSG_MATCH_TO_GAME_RETURN_ROBOT=9007 MSG_MATCH_TO_GAME_RETURN_ROBOT value
 * @property {number} MSG_GAME_TO_GAME_GIVEBACK_ROBOT=9008 MSG_GAME_TO_GAME_GIVEBACK_ROBOT value
 * @property {number} MSG_GAME_TO_HALL_BACK_HALL=9009 MSG_GAME_TO_HALL_BACK_HALL value
 * @property {number} MSG_LOGIN_GAME=9010 MSG_LOGIN_GAME value
 * @property {number} MSG_Config_Battle_Status=9011 MSG_Config_Battle_Status value
 * @property {number} MSG_SYNC_CURRENCY=9012 MSG_SYNC_CURRENCY value
 * @property {number} MSG_SYNC_SETTLEMENT=9013 MSG_SYNC_SETTLEMENT value
 */


$root.MatchServerMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[9000] = "MSG_MATCH_REQ"] = 9000;
  values[valuesById[9001] = "MSG_CANCEL_MATCH_REQ"] = 9001;
  values[valuesById[9002] = "MSG_GAME_TO_MATCH_RESULT_RESPONSE"] = 9002;
  values[valuesById[9003] = "MSG_MATCH_TO_HALL_RESULT_RESPONSE"] = 9003;
  values[valuesById[9004] = "MSG_MATCH_TO_GAME_START_REQUEST"] = 9004;
  values[valuesById[9005] = "MSG_GAME_TO_MATCH_GAME_FINISH"] = 9005;
  values[valuesById[9006] = "MSG_GAME_TO_MATCH_GET_ROBOT"] = 9006;
  values[valuesById[9007] = "MSG_MATCH_TO_GAME_RETURN_ROBOT"] = 9007;
  values[valuesById[9008] = "MSG_GAME_TO_GAME_GIVEBACK_ROBOT"] = 9008;
  values[valuesById[9009] = "MSG_GAME_TO_HALL_BACK_HALL"] = 9009;
  values[valuesById[9010] = "MSG_LOGIN_GAME"] = 9010;
  values[valuesById[9011] = "MSG_Config_Battle_Status"] = 9011;
  values[valuesById[9012] = "MSG_SYNC_CURRENCY"] = 9012;
  values[valuesById[9013] = "MSG_SYNC_SETTLEMENT"] = 9013;
  return values;
}();
/**
 * WithdrawMsgDefine enum.
 * @exports WithdrawMsgDefine
 * @enum {string}
 * @property {number} MSG_REQ_TAKE_MONEY_Withdraw=9601 MSG_REQ_TAKE_MONEY_Withdraw value
 * @property {number} MSG_REQ_TAKE_MONEY_RECORD_Withdraw=9602 MSG_REQ_TAKE_MONEY_RECORD_Withdraw value
 * @property {number} MSG_REQ_BIND_ZHIFUBO_Withdraw=9603 MSG_REQ_BIND_ZHIFUBO_Withdraw value
 * @property {number} MSG_REQ_GET_ZHIFUBO_INFO_Withdraw=9604 MSG_REQ_GET_ZHIFUBO_INFO_Withdraw value
 * @property {number} MSG_REQ_BIND_BANKCA_Withdraw=9605 MSG_REQ_BIND_BANKCA_Withdraw value
 * @property {number} MSG_REQ_GET_BANKCA_INFO_Withdraw=9606 MSG_REQ_GET_BANKCA_INFO_Withdraw value
 * @property {number} MSG_REQ_GET_CAN_USE_BANK_INFOS_Withdraw=9607 MSG_REQ_GET_CAN_USE_BANK_INFOS_Withdraw value
 * @property {number} MSG_REQ_GET_WITHDRAW_PASSAGE=9608 MSG_REQ_GET_WITHDRAW_PASSAGE value
 */


$root.WithdrawMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[9601] = "MSG_REQ_TAKE_MONEY_Withdraw"] = 9601;
  values[valuesById[9602] = "MSG_REQ_TAKE_MONEY_RECORD_Withdraw"] = 9602;
  values[valuesById[9603] = "MSG_REQ_BIND_ZHIFUBO_Withdraw"] = 9603;
  values[valuesById[9604] = "MSG_REQ_GET_ZHIFUBO_INFO_Withdraw"] = 9604;
  values[valuesById[9605] = "MSG_REQ_BIND_BANKCA_Withdraw"] = 9605;
  values[valuesById[9606] = "MSG_REQ_GET_BANKCA_INFO_Withdraw"] = 9606;
  values[valuesById[9607] = "MSG_REQ_GET_CAN_USE_BANK_INFOS_Withdraw"] = 9607;
  values[valuesById[9608] = "MSG_REQ_GET_WITHDRAW_PASSAGE"] = 9608;
  return values;
}();
/**
 * BrocastMsgDefine enum.
 * @exports BrocastMsgDefine
 * @enum {string}
 * @property {number} MSG_PUSH_Brocast_INFO=9701 MSG_PUSH_Brocast_INFO value
 * @property {number} MSG_Game_Send_Brocast=9702 MSG_Game_Send_Brocast value
 * @property {number} MSG_Send_TEXT_Brocast=9703 MSG_Send_TEXT_Brocast value
 */


$root.BrocastMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[9701] = "MSG_PUSH_Brocast_INFO"] = 9701;
  values[valuesById[9702] = "MSG_Game_Send_Brocast"] = 9702;
  values[valuesById[9703] = "MSG_Send_TEXT_Brocast"] = 9703;
  return values;
}();
/**
 * GameCommonMsgDefine enum.
 * @exports GameCommonMsgDefine
 * @enum {string}
 * @property {number} MSG_KICK_OUT_GAME_ROOM=9401 MSG_KICK_OUT_GAME_ROOM value
 * @property {number} MSG_ALREADY_PLAY_GAME=9402 MSG_ALREADY_PLAY_GAME value
 * @property {number} MSG_KICK_OUT_TO_LOGIN=9403 MSG_KICK_OUT_TO_LOGIN value
 */


$root.GameCommonMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[9401] = "MSG_KICK_OUT_GAME_ROOM"] = 9401;
  values[valuesById[9402] = "MSG_ALREADY_PLAY_GAME"] = 9402;
  values[valuesById[9403] = "MSG_KICK_OUT_TO_LOGIN"] = 9403;
  return values;
}();
/**
 * WithDrawServerMsgDefine enum.
 * @exports WithDrawServerMsgDefine
 * @enum {string}
 * @property {number} MSG_WithDraw_CREATE_ORDER=11101 MSG_WithDraw_CREATE_ORDER value
 * @property {number} MSG_WithDraw_CREATE_RSP=11102 MSG_WithDraw_CREATE_RSP value
 */


$root.WithDrawServerMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[11101] = "MSG_WithDraw_CREATE_ORDER"] = 11101;
  values[valuesById[11102] = "MSG_WithDraw_CREATE_RSP"] = 11102;
  return values;
}();
/**
 * VipMsgDefine enum.
 * @exports VipMsgDefine
 * @enum {string}
 * @property {number} MSG_REQ_VIP_INFO=20001 MSG_REQ_VIP_INFO value
 * @property {number} MSG_PUSH_VIP_INFO_UPDATE=20002 MSG_PUSH_VIP_INFO_UPDATE value
 * @property {number} MSG_REQ_INTEGRAL_EXCHANGE_INFO=20003 MSG_REQ_INTEGRAL_EXCHANGE_INFO value
 * @property {number} MSG_REQ_INTEGRAL_DETAIL=20004 MSG_REQ_INTEGRAL_DETAIL value
 * @property {number} MSG_REQ_INTEGRAL_EXCHANGE=20005 MSG_REQ_INTEGRAL_EXCHANGE value
 * @property {number} MSG_PUSH_INTEGRAL_UPDATE=20006 MSG_PUSH_INTEGRAL_UPDATE value
 * @property {number} MSG_REQ_VIP_QQ_CUSTOMER_SERVER=20007 MSG_REQ_VIP_QQ_CUSTOMER_SERVER value
 * @property {number} MSG_REQ__REBATE_INFO=20008 MSG_REQ__REBATE_INFO value
 * @property {number} MSG_REQ_GET_REBATE_REWARD=20009 MSG_REQ_GET_REBATE_REWARD value
 * @property {number} MSG_REQ_RED_ENVELOPE=20010 MSG_REQ_RED_ENVELOPE value
 * @property {number} MSG_REQ_ON_RED_ENVELOPE=20011 MSG_REQ_ON_RED_ENVELOPE value
 * @property {number} MSG_REQ_TREASURE_INFO=20012 MSG_REQ_TREASURE_INFO value
 * @property {number} MSG_REQ_TREASURE=20013 MSG_REQ_TREASURE value
 * @property {number} MSG_REQ_MISSION_INFO=20014 MSG_REQ_MISSION_INFO value
 * @property {number} MSG_REQ_GET_ACTIVE_REWARD=20015 MSG_REQ_GET_ACTIVE_REWARD value
 * @property {number} MSG_REQ_VIPPRIVATE_LIST=20016 MSG_REQ_VIPPRIVATE_LIST value
 * @property {number} MSG_REQ_LUCK_BAY=20017 MSG_REQ_LUCK_BAY value
 * @property {number} MSG_REQ_OPEN_LUCK_BAY=20018 MSG_REQ_OPEN_LUCK_BAY value
 * @property {number} MSG_REQ_GET_OTHER_BAY=20019 MSG_REQ_GET_OTHER_BAY value
 */


$root.VipMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[20001] = "MSG_REQ_VIP_INFO"] = 20001;
  values[valuesById[20002] = "MSG_PUSH_VIP_INFO_UPDATE"] = 20002;
  values[valuesById[20003] = "MSG_REQ_INTEGRAL_EXCHANGE_INFO"] = 20003;
  values[valuesById[20004] = "MSG_REQ_INTEGRAL_DETAIL"] = 20004;
  values[valuesById[20005] = "MSG_REQ_INTEGRAL_EXCHANGE"] = 20005;
  values[valuesById[20006] = "MSG_PUSH_INTEGRAL_UPDATE"] = 20006;
  values[valuesById[20007] = "MSG_REQ_VIP_QQ_CUSTOMER_SERVER"] = 20007;
  values[valuesById[20008] = "MSG_REQ__REBATE_INFO"] = 20008;
  values[valuesById[20009] = "MSG_REQ_GET_REBATE_REWARD"] = 20009;
  values[valuesById[20010] = "MSG_REQ_RED_ENVELOPE"] = 20010;
  values[valuesById[20011] = "MSG_REQ_ON_RED_ENVELOPE"] = 20011;
  values[valuesById[20012] = "MSG_REQ_TREASURE_INFO"] = 20012;
  values[valuesById[20013] = "MSG_REQ_TREASURE"] = 20013;
  values[valuesById[20014] = "MSG_REQ_MISSION_INFO"] = 20014;
  values[valuesById[20015] = "MSG_REQ_GET_ACTIVE_REWARD"] = 20015;
  values[valuesById[20016] = "MSG_REQ_VIPPRIVATE_LIST"] = 20016;
  values[valuesById[20017] = "MSG_REQ_LUCK_BAY"] = 20017;
  values[valuesById[20018] = "MSG_REQ_OPEN_LUCK_BAY"] = 20018;
  values[valuesById[20019] = "MSG_REQ_GET_OTHER_BAY"] = 20019;
  return values;
}();
/**
 * PromoterMsgDefine enum.
 * @exports PromoterMsgDefine
 * @enum {string}
 * @property {number} MSG_REQ_LEVEL_INFO=21001 MSG_REQ_LEVEL_INFO value
 * @property {number} MSG_REQ_PLAYERS_INCOME_INFO=21002 MSG_REQ_PLAYERS_INCOME_INFO value
 * @property {number} MSG_REQ_INCOME_INFO=21003 MSG_REQ_INCOME_INFO value
 * @property {number} MSG_REQ_DAY_INCOME_INFO=21005 MSG_REQ_DAY_INCOME_INFO value
 * @property {number} MSG_REQ_MINE_TEAM_INFO=21006 MSG_REQ_MINE_TEAM_INFO value
 * @property {number} MSG_REQ_REWARDS_INFO=21007 MSG_REQ_REWARDS_INFO value
 * @property {number} MSG_REQ_APPLY_DEPOSIT_RECORD=21008 MSG_REQ_APPLY_DEPOSIT_RECORD value
 * @property {number} MSG_REQ_APPLY_DEPOSIT=21009 MSG_REQ_APPLY_DEPOSIT value
 * @property {number} MSG_REQ_UPLOAD_LEADER_ID=21010 MSG_REQ_UPLOAD_LEADER_ID value
 * @property {number} GM_TO_HALL_MSG_UPLOAD_LEADER_ID=21012 GM_TO_HALL_MSG_UPLOAD_LEADER_ID value
 * @property {number} MSG_Game_Send_Promoter_info=21011 MSG_Game_Send_Promoter_info value
 */


$root.PromoterMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[21001] = "MSG_REQ_LEVEL_INFO"] = 21001;
  values[valuesById[21002] = "MSG_REQ_PLAYERS_INCOME_INFO"] = 21002;
  values[valuesById[21003] = "MSG_REQ_INCOME_INFO"] = 21003;
  values[valuesById[21005] = "MSG_REQ_DAY_INCOME_INFO"] = 21005;
  values[valuesById[21006] = "MSG_REQ_MINE_TEAM_INFO"] = 21006;
  values[valuesById[21007] = "MSG_REQ_REWARDS_INFO"] = 21007;
  values[valuesById[21008] = "MSG_REQ_APPLY_DEPOSIT_RECORD"] = 21008;
  values[valuesById[21009] = "MSG_REQ_APPLY_DEPOSIT"] = 21009;
  values[valuesById[21010] = "MSG_REQ_UPLOAD_LEADER_ID"] = 21010;
  values[valuesById[21012] = "GM_TO_HALL_MSG_UPLOAD_LEADER_ID"] = 21012;
  values[valuesById[21011] = "MSG_Game_Send_Promoter_info"] = 21011;
  return values;
}();
/**
 * GameToHallMsgDefine enum.
 * @exports GameToHallMsgDefine
 * @enum {string}
 * @property {number} MSG_REPORT_GAME_EVENT_TO_HALL=200001001 MSG_REPORT_GAME_EVENT_TO_HALL value
 * @property {number} MSG_REPORT_GAME_MISSION_EVENT_TO_HALL=200001002 MSG_REPORT_GAME_MISSION_EVENT_TO_HALL value
 */


$root.GameToHallMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[200001001] = "MSG_REPORT_GAME_EVENT_TO_HALL"] = 200001001;
  values[valuesById[200001002] = "MSG_REPORT_GAME_MISSION_EVENT_TO_HALL"] = 200001002;
  return values;
}();
/**
 * GMCmdMsgDefine enum.
 * @exports GMCmdMsgDefine
 * @enum {string}
 * @property {number} CLIENT_GM_COMMAND=100000000 CLIENT_GM_COMMAND value
 */


$root.GMCmdMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[100000000] = "CLIENT_GM_COMMAND"] = 100000000;
  return values;
}();
/**
 * CommonMsgDefine enum.
 * @exports CommonMsgDefine
 * @enum {string}
 * @property {number} SM_SEND_COMMON_TIPS=200000001 SM_SEND_COMMON_TIPS value
 * @property {number} CM_SEND_COMMON_BUTTON_SCRIPT=200000002 CM_SEND_COMMON_BUTTON_SCRIPT value
 * @property {number} SM_SEND_COMMON_UPPER_TIPS=200000003 SM_SEND_COMMON_UPPER_TIPS value
 * @property {number} SM_SEND_DEFAULT_RESULT_TIPS=200000004 SM_SEND_DEFAULT_RESULT_TIPS value
 */


$root.CommonMsgDefine = function () {
  var valuesById = {},
      values = Object.create(valuesById);
  values[valuesById[200000001] = "SM_SEND_COMMON_TIPS"] = 200000001;
  values[valuesById[200000002] = "CM_SEND_COMMON_BUTTON_SCRIPT"] = 200000002;
  values[valuesById[200000003] = "SM_SEND_COMMON_UPPER_TIPS"] = 200000003;
  values[valuesById[200000004] = "SM_SEND_DEFAULT_RESULT_TIPS"] = 200000004;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHJvdG9zXFxNZXNzYWdlRGVmaW5lLmpzIl0sIm5hbWVzIjpbIiRwcm90b2J1ZiIsInJlcXVpcmUiLCIkUmVhZGVyIiwiUmVhZGVyIiwiJFdyaXRlciIsIldyaXRlciIsIiR1dGlsIiwidXRpbCIsIiRyb290Iiwicm9vdHMiLCJNZXNzYWdlRGVmaW5lIiwiTmV0TXNnRGVmaW5lIiwidmFsdWVzQnlJZCIsInZhbHVlcyIsIk9iamVjdCIsImNyZWF0ZSIsIlBpbmdNc2dEZWZpbmUiLCJMb2dpbk1zZ0RlZmluZSIsIkN1cnJlbmN5TXNnRGVmaW5lIiwiUmFua01zZ0RlZmluZSIsIk1haWxNc2dEZWZpbmUiLCJJdGVtTXNnRGVmaW5lIiwiUGxheWVyUm9sZU1zZ0RlZmluZSIsIlBheUNsaWVudE1zZ0RlZmluZSIsIlBheVNlcnZlck1zZ0RlZmluZSIsIkJpTG9nTXNnRGVmaW5lIiwiU2hhcmVEYXRhTXNnRGVmaW5lIiwiTGVnZW5kTXNnRGVmaW5lIiwiR01Nc2dEZWZpbmUiLCJDaGF0TXNnRGVmaW5lIiwiQ2hhdFNlcnZlck1zZ0RlZmluZSIsIkhhbGxNc2dEZWZpbmUiLCJMb2dpblBvcHVwTXNnRGVmaW5lIiwiTWF0Y2hTZXJ2ZXJNc2dEZWZpbmUiLCJXaXRoZHJhd01zZ0RlZmluZSIsIkJyb2Nhc3RNc2dEZWZpbmUiLCJHYW1lQ29tbW9uTXNnRGVmaW5lIiwiV2l0aERyYXdTZXJ2ZXJNc2dEZWZpbmUiLCJWaXBNc2dEZWZpbmUiLCJQcm9tb3Rlck1zZ0RlZmluZSIsIkdhbWVUb0hhbGxNc2dEZWZpbmUiLCJHTUNtZE1zZ0RlZmluZSIsIkNvbW1vbk1zZ0RlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2QixFQUVBOzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0csTUFBeEI7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RCxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCLHFCQUF6QixDQUFOLEdBQXdELFNBQXhEO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0QsVUFBVSxDQUFDLFNBQUQsQ0FBVixHQUF3Qiw4QkFBekIsQ0FBTixHQUFpRSxTQUFqRTtBQUNBQyxFQUFBQSxNQUFNLENBQUNELFVBQVUsQ0FBQyxTQUFELENBQVYsR0FBd0IsMkJBQXpCLENBQU4sR0FBOEQsU0FBOUQ7QUFDQUMsRUFBQUEsTUFBTSxDQUFDRCxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCLDZCQUF6QixDQUFOLEdBQWdFLFNBQWhFO0FBQ0EsU0FBT0MsTUFBUDtBQUNILENBUHVCLEVBQXhCOztBQVNBOEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEMsS0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUsYmxvY2stc2NvcGVkLXZhcixpZC1sZW5ndGgsbm8tY29udHJvbC1yZWdleCxuby1tYWdpYy1udW1iZXJzLG5vLXByb3RvdHlwZS1idWlsdGlucyxuby1yZWRlY2xhcmUsbm8tc2hhZG93LG5vLXZhcixzb3J0LXZhcnMqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkcHJvdG9idWYgPSByZXF1aXJlKFwiLi9wcm90b2J1ZlwiKTtcblxuLy8gQ29tbW9uIGFsaWFzZXNcbnZhciAkUmVhZGVyID0gJHByb3RvYnVmLlJlYWRlciwgJFdyaXRlciA9ICRwcm90b2J1Zi5Xcml0ZXIsICR1dGlsID0gJHByb3RvYnVmLnV0aWw7XG5cbi8vIEV4cG9ydGVkIHJvb3QgbmFtZXNwYWNlXG52YXIgJHJvb3QgPSAkcHJvdG9idWYucm9vdHMuTWVzc2FnZURlZmluZSB8fCAoJHByb3RvYnVmLnJvb3RzLk1lc3NhZ2VEZWZpbmUgPSB7fSk7XG5cbi8qKlxuICogTmV0TXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBOZXRNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gSEFORFNIQUtFPTEgSEFORFNIQUtFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX09WRVJfTEFQPTIgTVNHX09WRVJfTEFQIHZhbHVlXG4gKi9cbiRyb290Lk5ldE1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzFdID0gXCJIQU5EU0hBS0VcIl0gPSAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzJdID0gXCJNU0dfT1ZFUl9MQVBcIl0gPSAyO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIFBpbmdNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFBpbmdNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1BJTkc9MTAwMSBNU0dfUElORyB2YWx1ZVxuICovXG4kcm9vdC5QaW5nTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTAwMV0gPSBcIk1TR19QSU5HXCJdID0gMTAwMTtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBMb2dpbk1zZ0RlZmluZSBlbnVtLlxuICogQGV4cG9ydHMgTG9naW5Nc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0xPR0lOX0hBTEw9MTAwMCBNU0dfTE9HSU5fSEFMTCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRUNPTk5FQ1RfU1RBVFVTPTEwMDIgTVNHX1JFQ09OTkVDVF9TVEFUVVMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVDT05ORUNUX0JBVFRMRT0xMDAzIE1TR19SRUNPTk5FQ1RfQkFUVExFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFQ09OTkVDVD0xMDA0IE1TR19SRUNPTk5FQ1QgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfTUlOSV9HQU1FX1JFQ09OTkVDVF9OT1RJRlk9MTAwNSBNU0dfTUlOSV9HQU1FX1JFQ09OTkVDVF9OT1RJRlkgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfR0FNRV9TVEFUVVNfUkVTUE9OU0U9MTAwNiBNU0dfR0FNRV9TVEFUVVNfUkVTUE9OU0UgdmFsdWVcbiAqL1xuJHJvb3QuTG9naW5Nc2dEZWZpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxMDAwXSA9IFwiTVNHX0xPR0lOX0hBTExcIl0gPSAxMDAwO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzEwMDJdID0gXCJNU0dfUkVDT05ORUNUX1NUQVRVU1wiXSA9IDEwMDI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTAwM10gPSBcIk1TR19SRUNPTk5FQ1RfQkFUVExFXCJdID0gMTAwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsxMDA0XSA9IFwiTVNHX1JFQ09OTkVDVFwiXSA9IDEwMDQ7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTAwNV0gPSBcIk1TR19NSU5JX0dBTUVfUkVDT05ORUNUX05PVElGWVwiXSA9IDEwMDU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTAwNl0gPSBcIk1TR19HQU1FX1NUQVRVU19SRVNQT05TRVwiXSA9IDEwMDY7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogQ3VycmVuY3lNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIEN1cnJlbmN5TXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNNX1NZTkNfQ1VSUkVOQ1k9MjAwMSBTTV9TWU5DX0NVUlJFTkNZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gU01fU1lOQ19IQUxMX0NVUlJFTkNZPTIwMDIgU01fU1lOQ19IQUxMX0NVUlJFTkNZIHZhbHVlXG4gKi9cbiRyb290LkN1cnJlbmN5TXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMV0gPSBcIlNNX1NZTkNfQ1VSUkVOQ1lcIl0gPSAyMDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDJdID0gXCJTTV9TWU5DX0hBTExfQ1VSUkVOQ1lcIl0gPSAyMDAyO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIFJhbmtNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFJhbmtNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gQ01fR0VUX1JBTktfSU5GT19EQVRBPTMwMDAgQ01fR0VUX1JBTktfSU5GT19EQVRBIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ01fR0VUX1JBTktfTElTVF9EQVRBPTMwMDEgQ01fR0VUX1JBTktfTElTVF9EQVRBIHZhbHVlXG4gKi9cbiRyb290LlJhbmtNc2dEZWZpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFszMDAwXSA9IFwiQ01fR0VUX1JBTktfSU5GT19EQVRBXCJdID0gMzAwMDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFszMDAxXSA9IFwiQ01fR0VUX1JBTktfTElTVF9EQVRBXCJdID0gMzAwMTtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBNYWlsTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBNYWlsTXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IENNX1BVU0hfTUFJTF9EQVRBPTQwMDEgQ01fUFVTSF9NQUlMX0RBVEEgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTTV9QVVNIX01BSUxfREFUQT00MDAyIFNNX1BVU0hfTUFJTF9EQVRBIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gU01fVVBEQVRFX01BSUxfREFUQT00MDAzIFNNX1VQREFURV9NQUlMX0RBVEEgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTV9SRUFEX01BSUw9NDAwNCBDTV9SRUFEX01BSUwgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTV9HRVRfTUFJTF9BVFRBQ0hNRU5UPTQwMDUgQ01fR0VUX01BSUxfQVRUQUNITUVOVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IENNX0RFTEVURV9NQUlMPTQwMDYgQ01fREVMRVRFX01BSUwgdmFsdWVcbiAqL1xuJHJvb3QuTWFpbE1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzQwMDFdID0gXCJDTV9QVVNIX01BSUxfREFUQVwiXSA9IDQwMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNDAwMl0gPSBcIlNNX1BVU0hfTUFJTF9EQVRBXCJdID0gNDAwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs0MDAzXSA9IFwiU01fVVBEQVRFX01BSUxfREFUQVwiXSA9IDQwMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNDAwNF0gPSBcIkNNX1JFQURfTUFJTFwiXSA9IDQwMDQ7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNDAwNV0gPSBcIkNNX0dFVF9NQUlMX0FUVEFDSE1FTlRcIl0gPSA0MDA1O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzQwMDZdID0gXCJDTV9ERUxFVEVfTUFJTFwiXSA9IDQwMDY7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogSXRlbU1zZ0RlZmluZSBlbnVtLlxuICogQGV4cG9ydHMgSXRlbU1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTTV9JVEVNX0xPR0lOX1BVU0g9NTAwMSBTTV9JVEVNX0xPR0lOX1BVU0ggdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTTV9VUERBVEVfSVRFTVM9NTAwMiBTTV9VUERBVEVfSVRFTVMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfVVNFX0lURU09NTAwMyBNU0dfVVNFX0lURU0gdmFsdWVcbiAqL1xuJHJvb3QuSXRlbU1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzUwMDFdID0gXCJTTV9JVEVNX0xPR0lOX1BVU0hcIl0gPSA1MDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzUwMDJdID0gXCJTTV9VUERBVEVfSVRFTVNcIl0gPSA1MDAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzUwMDNdID0gXCJNU0dfVVNFX0lURU1cIl0gPSA1MDAzO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIFBsYXllclJvbGVNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFBsYXllclJvbGVNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gU01fUFVTSF9ST0xFX0RBVEE9NjAwMSBTTV9QVVNIX1JPTEVfREFUQSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19NT0RJRllfTklDS05BTUU9NjAwMiBNU0dfTU9ESUZZX05JQ0tOQU1FIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX01PRElGWV9IRUFEX0lORk89NjAwMyBNU0dfTU9ESUZZX0hFQURfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19CSU5EX1NJR049NjAwNCBNU0dfQklORF9TSUdOIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1VQTE9BRF9IRUFEX0lNQUdFPTYwMDUgTVNHX1VQTE9BRF9IRUFEX0lNQUdFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0NIQU5HRV9IRUFEX0JPWD02MDA2IE1TR19DSEFOR0VfSEVBRF9CT1ggdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfU0FGRV9CT1hfR0VUX0JPWF9JTkZPPTYwMDcgTVNHX1NBRkVfQk9YX0dFVF9CT1hfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19TQUZFX0JPWF9UQUtFX09VVF9CT1hfTU9ORVk9NjAwOCBNU0dfU0FGRV9CT1hfVEFLRV9PVVRfQk9YX01PTkVZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1NBRkVfQk9YX1NBVkVfQk9YX01PTkVZPTYwMDkgTVNHX1NBRkVfQk9YX1NBVkVfQk9YX01PTkVZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0FOTk9VTl9HRVRfSU5GTz02MDEwIE1TR19BTk5PVU5fR0VUX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQU5OT1VOX1JFQUQ9NjAxMSBNU0dfQU5OT1VOX1JFQUQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9BTk5PVU5fUkVEX1BPSU5UPTYwMTIgTVNHX1BVU0hfQU5OT1VOX1JFRF9QT0lOVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19QVVNIX0JhbmtydXB0Y3lfaW5mbz02MDEzIE1TR19QVVNIX0JhbmtydXB0Y3lfaW5mbyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfQmFua3J1cHRjeV9SZW1haW49NjAxNiBNU0dfUkVRX0JhbmtydXB0Y3lfUmVtYWluIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9CYW5rcnVwdGN5PTYwMTQgTVNHX1JFUV9CYW5rcnVwdGN5IHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1NlcnZlcl9HYW1lX1JRRV9CYW5rcnVwdGN5X0lORk89NjAxNSBNU0dfU2VydmVyX0dhbWVfUlFFX0JhbmtydXB0Y3lfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TTV9QVVNIX1podUNlU29uZ0ppbj02MDE3IE1TTV9QVVNIX1podUNlU29uZ0ppbiB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfWmh1Q2VTb25nSmluPTYwMTggTVNHX1JFUV9aaHVDZVNvbmdKaW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1hpblNob3VKaW49NjAxOSBNU0dfUkVRX1hpblNob3VKaW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1VQX1hpblNob3VKaW49NjAyMCBNU0dfUkVRX1VQX1hpblNob3VKaW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU01fUFVTSF9YaW5TaG91SmluQW5kU3RlcD02MDIxIE1TTV9QVVNIX1hpblNob3VKaW5BbmRTdGVwIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0JJTkRJTkdfTU9CSUxFX05VTT02MDIyIE1TR19CSU5ESU5HX01PQklMRV9OVU0gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9IRUFEX0ZSQU1FX0xJU1Q9NjAyMyBNU0dfUFVTSF9IRUFEX0ZSQU1FX0xJU1QgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9CQVRURVJZX0xJU1Q9NjAyNCBNU0dfUFVTSF9CQVRURVJZX0xJU1QgdmFsdWVcbiAqL1xuJHJvb3QuUGxheWVyUm9sZU1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMDFdID0gXCJTTV9QVVNIX1JPTEVfREFUQVwiXSA9IDYwMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAwMl0gPSBcIk1TR19NT0RJRllfTklDS05BTUVcIl0gPSA2MDAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMDNdID0gXCJNU0dfTU9ESUZZX0hFQURfSU5GT1wiXSA9IDYwMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAwNF0gPSBcIk1TR19CSU5EX1NJR05cIl0gPSA2MDA0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMDVdID0gXCJNU0dfVVBMT0FEX0hFQURfSU1BR0VcIl0gPSA2MDA1O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMDZdID0gXCJNU0dfQ0hBTkdFX0hFQURfQk9YXCJdID0gNjAwNjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDA3XSA9IFwiTVNHX1NBRkVfQk9YX0dFVF9CT1hfSU5GT1wiXSA9IDYwMDc7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAwOF0gPSBcIk1TR19TQUZFX0JPWF9UQUtFX09VVF9CT1hfTU9ORVlcIl0gPSA2MDA4O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMDldID0gXCJNU0dfU0FGRV9CT1hfU0FWRV9CT1hfTU9ORVlcIl0gPSA2MDA5O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMTBdID0gXCJNU0dfQU5OT1VOX0dFVF9JTkZPXCJdID0gNjAxMDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDExXSA9IFwiTVNHX0FOTk9VTl9SRUFEXCJdID0gNjAxMTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDEyXSA9IFwiTVNHX1BVU0hfQU5OT1VOX1JFRF9QT0lOVFwiXSA9IDYwMTI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAxM10gPSBcIk1TR19QVVNIX0JhbmtydXB0Y3lfaW5mb1wiXSA9IDYwMTM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAxNl0gPSBcIk1TR19SRVFfQmFua3J1cHRjeV9SZW1haW5cIl0gPSA2MDE2O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMTRdID0gXCJNU0dfUkVRX0JhbmtydXB0Y3lcIl0gPSA2MDE0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMTVdID0gXCJNU0dfU2VydmVyX0dhbWVfUlFFX0JhbmtydXB0Y3lfSU5GT1wiXSA9IDYwMTU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAxN10gPSBcIk1TTV9QVVNIX1podUNlU29uZ0ppblwiXSA9IDYwMTc7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbNjAxOF0gPSBcIk1TR19SRVFfWmh1Q2VTb25nSmluXCJdID0gNjAxODtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDE5XSA9IFwiTVNHX1JFUV9YaW5TaG91SmluXCJdID0gNjAxOTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDIwXSA9IFwiTVNHX1JFUV9VUF9YaW5TaG91SmluXCJdID0gNjAyMDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDIxXSA9IFwiTVNNX1BVU0hfWGluU2hvdUppbkFuZFN0ZXBcIl0gPSA2MDIxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzYwMjJdID0gXCJNU0dfQklORElOR19NT0JJTEVfTlVNXCJdID0gNjAyMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDIzXSA9IFwiTVNHX1BVU0hfSEVBRF9GUkFNRV9MSVNUXCJdID0gNjAyMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs2MDI0XSA9IFwiTVNHX1BVU0hfQkFUVEVSWV9MSVNUXCJdID0gNjAyNDtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBQYXlDbGllbnRNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFBheUNsaWVudE1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQkVGT1JFX1BBWV9OT1JNQUw9ODAwMSBNU0dfQkVGT1JFX1BBWV9OT1JNQUwgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQkVGT1JFX1BBWV9GSVJTVD04MDAyIE1TR19CRUZPUkVfUEFZX0ZJUlNUIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9SRUNIQVJHRV9MSVNUPTgwMDMgTVNHX1JFUV9SRUNIQVJHRV9MSVNUIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9SRUNIQVJHRT04MDA0IE1TR19SRVFfUkVDSEFSR0UgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1JFRlJFU0hfUFJPWFk9ODAwNSBNU0dfUkVRX1JFRlJFU0hfUFJPWFkgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUlNQX0FDQ09VTlRHRVRNT05FWT04MDA2IE1TR19SU1BfQUNDT1VOVEdFVE1PTkVZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9DT05GSVJNR0VUTU9ORVk9ODAwNyBNU0dfUkVRX0NPTkZJUk1HRVRNT05FWSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfQ0hBUkdFX0NIQVRfU0VSVkVSX0lORk89ODAwOCBNU0dfUkVRX0NIQVJHRV9DSEFUX1NFUlZFUl9JTkZPIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFU19DSEFSR0VfUkVDT1JEPTgwMDkgTVNHX1JFU19DSEFSR0VfUkVDT1JEIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9FdmFsdWF0aW9uPTgwMTAgTVNHX1JFUV9FdmFsdWF0aW9uIHZhbHVlXG4gKi9cbiRyb290LlBheUNsaWVudE1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgwMDFdID0gXCJNU0dfQkVGT1JFX1BBWV9OT1JNQUxcIl0gPSA4MDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgwMDJdID0gXCJNU0dfQkVGT1JFX1BBWV9GSVJTVFwiXSA9IDgwMDI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODAwM10gPSBcIk1TR19SRVFfUkVDSEFSR0VfTElTVFwiXSA9IDgwMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODAwNF0gPSBcIk1TR19SRVFfUkVDSEFSR0VcIl0gPSA4MDA0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgwMDVdID0gXCJNU0dfUkVRX1JFRlJFU0hfUFJPWFlcIl0gPSA4MDA1O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgwMDZdID0gXCJNU0dfUlNQX0FDQ09VTlRHRVRNT05FWVwiXSA9IDgwMDY7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODAwN10gPSBcIk1TR19SRVFfQ09ORklSTUdFVE1PTkVZXCJdID0gODAwNztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MDA4XSA9IFwiTVNHX1JFUV9DSEFSR0VfQ0hBVF9TRVJWRVJfSU5GT1wiXSA9IDgwMDg7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODAwOV0gPSBcIk1TR19SRVNfQ0hBUkdFX1JFQ09SRFwiXSA9IDgwMDk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODAxMF0gPSBcIk1TR19SRVFfRXZhbHVhdGlvblwiXSA9IDgwMTA7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogUGF5U2VydmVyTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBQYXlTZXJ2ZXJNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1BBWT04MTAxIE1TR19QQVkgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfSUFQX1ZFUklGWT04MTAyIE1TR19JQVBfVkVSSUZZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX05PVElGWV9JQVBfVkVSSUZZX0ZJTklTSD04MTAzIE1TR19OT1RJRllfSUFQX1ZFUklGWV9GSU5JU0ggdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfSUFQX1BBWV9TRVJWRVJfVkVSSUZZPTgxMDQgTVNHX0lBUF9QQVlfU0VSVkVSX1ZFUklGWSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19JQVBfUEFZX1NFUlZFUl9WRVJJRllfUkVTVUxUPTgxMDUgTVNHX0lBUF9QQVlfU0VSVkVSX1ZFUklGWV9SRVNVTFQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQ1JFQVRFX09SREVSPTgxMDYgTVNHX0NSRUFURV9PUkRFUiB2YWx1ZVxuICovXG4kcm9vdC5QYXlTZXJ2ZXJNc2dEZWZpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MTAxXSA9IFwiTVNHX1BBWVwiXSA9IDgxMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODEwMl0gPSBcIk1TR19JQVBfVkVSSUZZXCJdID0gODEwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MTAzXSA9IFwiTVNHX05PVElGWV9JQVBfVkVSSUZZX0ZJTklTSFwiXSA9IDgxMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODEwNF0gPSBcIk1TR19JQVBfUEFZX1NFUlZFUl9WRVJJRllcIl0gPSA4MTA0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgxMDVdID0gXCJNU0dfSUFQX1BBWV9TRVJWRVJfVkVSSUZZX1JFU1VMVFwiXSA9IDgxMDU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODEwNl0gPSBcIk1TR19DUkVBVEVfT1JERVJcIl0gPSA4MTA2O1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIEJpTG9nTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBCaUxvZ01zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQklMT0c9ODIwMSBNU0dfQklMT0cgdmFsdWVcbiAqL1xuJHJvb3QuQmlMb2dNc2dEZWZpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MjAxXSA9IFwiTVNHX0JJTE9HXCJdID0gODIwMTtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBTaGFyZURhdGFNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFNoYXJlRGF0YU1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfU0hBUkVfQlJBTkRfUk9BRF9EQVRBPTgyMDIgTVNHX1NIQVJFX0JSQU5EX1JPQURfREFUQSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19TSEFSRV9ST09NX1NUQVRVUz04MjAzIE1TR19TSEFSRV9ST09NX1NUQVRVUyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19BUkNBREVDQVRDSEZJU0hfQ0hBTkdFX1NUT0NLPTgyMDQgTVNHX0FSQ0FERUNBVENIRklTSF9DSEFOR0VfU1RPQ0sgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0FMTF9ST0FEPTgyMDUgTVNHX1JFUV9BTExfUk9BRCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19Sc3BfQUxMX1JPQUQ9ODIwNiBNU0dfUnNwX0FMTF9ST0FEIHZhbHVlXG4gKi9cbiRyb290LlNoYXJlRGF0YU1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgyMDJdID0gXCJNU0dfU0hBUkVfQlJBTkRfUk9BRF9EQVRBXCJdID0gODIwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MjAzXSA9IFwiTVNHX1NIQVJFX1JPT01fU1RBVFVTXCJdID0gODIwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MjA0XSA9IFwiTVNHX0FSQ0FERUNBVENIRklTSF9DSEFOR0VfU1RPQ0tcIl0gPSA4MjA0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgyMDVdID0gXCJNU0dfUkVRX0FMTF9ST0FEXCJdID0gODIwNTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MjA2XSA9IFwiTVNHX1JzcF9BTExfUk9BRFwiXSA9IDgyMDY7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogTGVnZW5kTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBMZWdlbmRNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0xFR0VORD04MjA1IE1TR19MRUdFTkQgdmFsdWVcbiAqL1xuJHJvb3QuTGVnZW5kTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODIwNV0gPSBcIk1TR19MRUdFTkRcIl0gPSA4MjA1O1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIEdNTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBHTU1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfR01fQlJPQURDQVNUPTgzMDEgTVNHX0dNX0JST0FEQ0FTVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HTV9OT1RJRllfUk9MRV9MT0dJTj04MzAyIE1TR19HTV9OT1RJRllfUk9MRV9MT0dJTiB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HTV9TRU5EX0dNRU1BSUw9ODMwMyBNU0dfR01fU0VORF9HTUVNQUlMIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0dNX1NFTkRfQU5OT1VOPTgzMDQgTVNHX0dNX1NFTkRfQU5OT1VOIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0dNX01PRElGWV9DVVJSRU5DWT04MzA1IE1TR19HTV9NT0RJRllfQ1VSUkVOQ1kgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfR01fUkVMT0FEX0FOTk9VTkNFTUVOVD04MzA2IE1TR19HTV9SRUxPQURfQU5OT1VOQ0VNRU5UIHZhbHVlXG4gKi9cbiRyb290LkdNTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODMwMV0gPSBcIk1TR19HTV9CUk9BRENBU1RcIl0gPSA4MzAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgzMDJdID0gXCJNU0dfR01fTk9USUZZX1JPTEVfTE9HSU5cIl0gPSA4MzAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzgzMDNdID0gXCJNU0dfR01fU0VORF9HTUVNQUlMXCJdID0gODMwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MzA0XSA9IFwiTVNHX0dNX1NFTkRfQU5OT1VOXCJdID0gODMwNDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4MzA1XSA9IFwiTVNHX0dNX01PRElGWV9DVVJSRU5DWVwiXSA9IDgzMDU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODMwNl0gPSBcIk1TR19HTV9SRUxPQURfQU5OT1VOQ0VNRU5UXCJdID0gODMwNjtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBDaGF0TXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBDaGF0TXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19TRU5EX0JST0FEQ0FTVD04NDAwIE1TR19TRU5EX0JST0FEQ0FTVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19CUk9BRENBU1Q9ODQwMSBNU0dfQlJPQURDQVNUIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0NIQVQ9ODQwMiBNU0dfQ0hBVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRUFEX0NIQVQ9ODQwMyBNU0dfUkVBRF9DSEFUIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX01BS0VfUkVBRD04NDA0IE1TR19NQUtFX1JFQUQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9DSEFUPTg0MDUgTVNHX1BVU0hfQ0hBVCB2YWx1ZVxuICovXG4kcm9vdC5DaGF0TXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODQwMF0gPSBcIk1TR19TRU5EX0JST0FEQ0FTVFwiXSA9IDg0MDA7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODQwMV0gPSBcIk1TR19CUk9BRENBU1RcIl0gPSA4NDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg0MDJdID0gXCJNU0dfQ0hBVFwiXSA9IDg0MDI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODQwM10gPSBcIk1TR19SRUFEX0NIQVRcIl0gPSA4NDAzO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg0MDRdID0gXCJNU0dfTUFLRV9SRUFEXCJdID0gODQwNDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4NDA1XSA9IFwiTVNHX1BVU0hfQ0hBVFwiXSA9IDg0MDU7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogQ2hhdFNlcnZlck1zZ0RlZmluZSBlbnVtLlxuICogQGV4cG9ydHMgQ2hhdFNlcnZlck1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSURfQ0hBVF9NU0c9ODQ1MCBNSURfQ0hBVF9NU0cgdmFsdWVcbiAqL1xuJHJvb3QuQ2hhdFNlcnZlck1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg0NTBdID0gXCJNSURfQ0hBVF9NU0dcIl0gPSA4NDUwO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIEhhbGxNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIEhhbGxNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1BVU0hfSEFMTF9EQVRBPTg1MDAgTVNHX1BVU0hfSEFMTF9EQVRBIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX09QRU5fUExBWV9MSVNUX1JFUT04NTAxIE1TR19PUEVOX1BMQVlfTElTVF9SRVEgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUExBWV9HQU1FPTg1MDIgTVNHX1BMQVlfR0FNRSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19QVVNIX01BVENIX1JFU1VMVD04NTAzIE1TR19QVVNIX01BVENIX1JFU1VMVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19DQU5DRUxfUExBWT04NTA0IE1TR19DQU5DRUxfUExBWSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19MT0dJTkhBTExfUE9QTUVOVT04NTA1IE1TR19MT0dJTkhBTExfUE9QTUVOVSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19QVVNIX01PVURVTEVfU1RBVFVTPTg1MDYgTVNHX1BVU0hfTU9VRFVMRV9TVEFUVVMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9DSEFOTkVMX0FTU0VUPTg1MDcgTVNHX1BVU0hfQ0hBTk5FTF9BU1NFVCB2YWx1ZVxuICovXG4kcm9vdC5IYWxsTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODUwMF0gPSBcIk1TR19QVVNIX0hBTExfREFUQVwiXSA9IDg1MDA7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbODUwMV0gPSBcIk1TR19PUEVOX1BMQVlfTElTVF9SRVFcIl0gPSA4NTAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg1MDJdID0gXCJNU0dfUExBWV9HQU1FXCJdID0gODUwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4NTAzXSA9IFwiTVNHX1BVU0hfTUFUQ0hfUkVTVUxUXCJdID0gODUwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4NTA0XSA9IFwiTVNHX0NBTkNFTF9QTEFZXCJdID0gODUwNDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4NTA1XSA9IFwiTVNHX0xPR0lOSEFMTF9QT1BNRU5VXCJdID0gODUwNTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4NTA2XSA9IFwiTVNHX1BVU0hfTU9VRFVMRV9TVEFUVVNcIl0gPSA4NTA2O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg1MDddID0gXCJNU0dfUFVTSF9DSEFOTkVMX0FTU0VUXCJdID0gODUwNztcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBMb2dpblBvcHVwTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBMb2dpblBvcHVwTXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19MT0dJTl9QT1BfVVA9ODgwMCBNU0dfTE9HSU5fUE9QX1VQIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0NMT1NFX1BPUF9VUD04ODAxIE1TR19DTE9TRV9QT1BfVVAgdmFsdWVcbiAqL1xuJHJvb3QuTG9naW5Qb3B1cE1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzg4MDBdID0gXCJNU0dfTE9HSU5fUE9QX1VQXCJdID0gODgwMDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs4ODAxXSA9IFwiTVNHX0NMT1NFX1BPUF9VUFwiXSA9IDg4MDE7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogTWF0Y2hTZXJ2ZXJNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIE1hdGNoU2VydmVyTXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19NQVRDSF9SRVE9OTAwMCBNU0dfTUFUQ0hfUkVRIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0NBTkNFTF9NQVRDSF9SRVE9OTAwMSBNU0dfQ0FOQ0VMX01BVENIX1JFUSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HQU1FX1RPX01BVENIX1JFU1VMVF9SRVNQT05TRT05MDAyIE1TR19HQU1FX1RPX01BVENIX1JFU1VMVF9SRVNQT05TRSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19NQVRDSF9UT19IQUxMX1JFU1VMVF9SRVNQT05TRT05MDAzIE1TR19NQVRDSF9UT19IQUxMX1JFU1VMVF9SRVNQT05TRSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19NQVRDSF9UT19HQU1FX1NUQVJUX1JFUVVFU1Q9OTAwNCBNU0dfTUFUQ0hfVE9fR0FNRV9TVEFSVF9SRVFVRVNUIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0dBTUVfVE9fTUFUQ0hfR0FNRV9GSU5JU0g9OTAwNSBNU0dfR0FNRV9UT19NQVRDSF9HQU1FX0ZJTklTSCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HQU1FX1RPX01BVENIX0dFVF9ST0JPVD05MDA2IE1TR19HQU1FX1RPX01BVENIX0dFVF9ST0JPVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19NQVRDSF9UT19HQU1FX1JFVFVSTl9ST0JPVD05MDA3IE1TR19NQVRDSF9UT19HQU1FX1JFVFVSTl9ST0JPVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HQU1FX1RPX0dBTUVfR0lWRUJBQ0tfUk9CT1Q9OTAwOCBNU0dfR0FNRV9UT19HQU1FX0dJVkVCQUNLX1JPQk9UIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0dBTUVfVE9fSEFMTF9CQUNLX0hBTEw9OTAwOSBNU0dfR0FNRV9UT19IQUxMX0JBQ0tfSEFMTCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19MT0dJTl9HQU1FPTkwMTAgTVNHX0xPR0lOX0dBTUUgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfQ29uZmlnX0JhdHRsZV9TdGF0dXM9OTAxMSBNU0dfQ29uZmlnX0JhdHRsZV9TdGF0dXMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfU1lOQ19DVVJSRU5DWT05MDEyIE1TR19TWU5DX0NVUlJFTkNZIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1NZTkNfU0VUVExFTUVOVD05MDEzIE1TR19TWU5DX1NFVFRMRU1FTlQgdmFsdWVcbiAqL1xuJHJvb3QuTWF0Y2hTZXJ2ZXJNc2dEZWZpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlc0J5SWQgPSB7fSwgdmFsdWVzID0gT2JqZWN0LmNyZWF0ZSh2YWx1ZXNCeUlkKTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDAwXSA9IFwiTVNHX01BVENIX1JFUVwiXSA9IDkwMDA7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTAwMV0gPSBcIk1TR19DQU5DRUxfTUFUQ0hfUkVRXCJdID0gOTAwMTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDAyXSA9IFwiTVNHX0dBTUVfVE9fTUFUQ0hfUkVTVUxUX1JFU1BPTlNFXCJdID0gOTAwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDAzXSA9IFwiTVNHX01BVENIX1RPX0hBTExfUkVTVUxUX1JFU1BPTlNFXCJdID0gOTAwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDA0XSA9IFwiTVNHX01BVENIX1RPX0dBTUVfU1RBUlRfUkVRVUVTVFwiXSA9IDkwMDQ7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTAwNV0gPSBcIk1TR19HQU1FX1RPX01BVENIX0dBTUVfRklOSVNIXCJdID0gOTAwNTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDA2XSA9IFwiTVNHX0dBTUVfVE9fTUFUQ0hfR0VUX1JPQk9UXCJdID0gOTAwNjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDA3XSA9IFwiTVNHX01BVENIX1RPX0dBTUVfUkVUVVJOX1JPQk9UXCJdID0gOTAwNztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDA4XSA9IFwiTVNHX0dBTUVfVE9fR0FNRV9HSVZFQkFDS19ST0JPVFwiXSA9IDkwMDg7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTAwOV0gPSBcIk1TR19HQU1FX1RPX0hBTExfQkFDS19IQUxMXCJdID0gOTAwOTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5MDEwXSA9IFwiTVNHX0xPR0lOX0dBTUVcIl0gPSA5MDEwO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzkwMTFdID0gXCJNU0dfQ29uZmlnX0JhdHRsZV9TdGF0dXNcIl0gPSA5MDExO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzkwMTJdID0gXCJNU0dfU1lOQ19DVVJSRU5DWVwiXSA9IDkwMTI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTAxM10gPSBcIk1TR19TWU5DX1NFVFRMRU1FTlRcIl0gPSA5MDEzO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIFdpdGhkcmF3TXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBXaXRoZHJhd01zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1RBS0VfTU9ORVlfV2l0aGRyYXc9OTYwMSBNU0dfUkVRX1RBS0VfTU9ORVlfV2l0aGRyYXcgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1RBS0VfTU9ORVlfUkVDT1JEX1dpdGhkcmF3PTk2MDIgTVNHX1JFUV9UQUtFX01PTkVZX1JFQ09SRF9XaXRoZHJhdyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfQklORF9aSElGVUJPX1dpdGhkcmF3PTk2MDMgTVNHX1JFUV9CSU5EX1pISUZVQk9fV2l0aGRyYXcgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0dFVF9aSElGVUJPX0lORk9fV2l0aGRyYXc9OTYwNCBNU0dfUkVRX0dFVF9aSElGVUJPX0lORk9fV2l0aGRyYXcgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0JJTkRfQkFOS0NBX1dpdGhkcmF3PTk2MDUgTVNHX1JFUV9CSU5EX0JBTktDQV9XaXRoZHJhdyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfR0VUX0JBTktDQV9JTkZPX1dpdGhkcmF3PTk2MDYgTVNHX1JFUV9HRVRfQkFOS0NBX0lORk9fV2l0aGRyYXcgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0dFVF9DQU5fVVNFX0JBTktfSU5GT1NfV2l0aGRyYXc9OTYwNyBNU0dfUkVRX0dFVF9DQU5fVVNFX0JBTktfSU5GT1NfV2l0aGRyYXcgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0dFVF9XSVRIRFJBV19QQVNTQUdFPTk2MDggTVNHX1JFUV9HRVRfV0lUSERSQVdfUEFTU0FHRSB2YWx1ZVxuICovXG4kcm9vdC5XaXRoZHJhd01zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDFdID0gXCJNU0dfUkVRX1RBS0VfTU9ORVlfV2l0aGRyYXdcIl0gPSA5NjAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDJdID0gXCJNU0dfUkVRX1RBS0VfTU9ORVlfUkVDT1JEX1dpdGhkcmF3XCJdID0gOTYwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5NjAzXSA9IFwiTVNHX1JFUV9CSU5EX1pISUZVQk9fV2l0aGRyYXdcIl0gPSA5NjAzO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDRdID0gXCJNU0dfUkVRX0dFVF9aSElGVUJPX0lORk9fV2l0aGRyYXdcIl0gPSA5NjA0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDVdID0gXCJNU0dfUkVRX0JJTkRfQkFOS0NBX1dpdGhkcmF3XCJdID0gOTYwNTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFs5NjA2XSA9IFwiTVNHX1JFUV9HRVRfQkFOS0NBX0lORk9fV2l0aGRyYXdcIl0gPSA5NjA2O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDddID0gXCJNU0dfUkVRX0dFVF9DQU5fVVNFX0JBTktfSU5GT1NfV2l0aGRyYXdcIl0gPSA5NjA3O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk2MDhdID0gXCJNU0dfUkVRX0dFVF9XSVRIRFJBV19QQVNTQUdFXCJdID0gOTYwODtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBCcm9jYXN0TXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBCcm9jYXN0TXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19QVVNIX0Jyb2Nhc3RfSU5GTz05NzAxIE1TR19QVVNIX0Jyb2Nhc3RfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19HYW1lX1NlbmRfQnJvY2FzdD05NzAyIE1TR19HYW1lX1NlbmRfQnJvY2FzdCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19TZW5kX1RFWFRfQnJvY2FzdD05NzAzIE1TR19TZW5kX1RFWFRfQnJvY2FzdCB2YWx1ZVxuICovXG4kcm9vdC5Ccm9jYXN0TXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTcwMV0gPSBcIk1TR19QVVNIX0Jyb2Nhc3RfSU5GT1wiXSA9IDk3MDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTcwMl0gPSBcIk1TR19HYW1lX1NlbmRfQnJvY2FzdFwiXSA9IDk3MDI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTcwM10gPSBcIk1TR19TZW5kX1RFWFRfQnJvY2FzdFwiXSA9IDk3MDM7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogR2FtZUNvbW1vbk1zZ0RlZmluZSBlbnVtLlxuICogQGV4cG9ydHMgR2FtZUNvbW1vbk1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfS0lDS19PVVRfR0FNRV9ST09NPTk0MDEgTVNHX0tJQ0tfT1VUX0dBTUVfUk9PTSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19BTFJFQURZX1BMQVlfR0FNRT05NDAyIE1TR19BTFJFQURZX1BMQVlfR0FNRSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19LSUNLX09VVF9UT19MT0dJTj05NDAzIE1TR19LSUNLX09VVF9UT19MT0dJTiB2YWx1ZVxuICovXG4kcm9vdC5HYW1lQ29tbW9uTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbOTQwMV0gPSBcIk1TR19LSUNLX09VVF9HQU1FX1JPT01cIl0gPSA5NDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk0MDJdID0gXCJNU0dfQUxSRUFEWV9QTEFZX0dBTUVcIl0gPSA5NDAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzk0MDNdID0gXCJNU0dfS0lDS19PVVRfVE9fTE9HSU5cIl0gPSA5NDAzO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIFdpdGhEcmF3U2VydmVyTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBXaXRoRHJhd1NlcnZlck1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfV2l0aERyYXdfQ1JFQVRFX09SREVSPTExMTAxIE1TR19XaXRoRHJhd19DUkVBVEVfT1JERVIgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfV2l0aERyYXdfQ1JFQVRFX1JTUD0xMTEwMiBNU0dfV2l0aERyYXdfQ1JFQVRFX1JTUCB2YWx1ZVxuICovXG4kcm9vdC5XaXRoRHJhd1NlcnZlck1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzExMTAxXSA9IFwiTVNHX1dpdGhEcmF3X0NSRUFURV9PUkRFUlwiXSA9IDExMTAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzExMTAyXSA9IFwiTVNHX1dpdGhEcmF3X0NSRUFURV9SU1BcIl0gPSAxMTEwMjtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBWaXBNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFZpcE1zZ0RlZmluZVxuICogQGVudW0ge3N0cmluZ31cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1ZJUF9JTkZPPTIwMDAxIE1TR19SRVFfVklQX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUFVTSF9WSVBfSU5GT19VUERBVEU9MjAwMDIgTVNHX1BVU0hfVklQX0lORk9fVVBEQVRFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9JTlRFR1JBTF9FWENIQU5HRV9JTkZPPTIwMDAzIE1TR19SRVFfSU5URUdSQUxfRVhDSEFOR0VfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfSU5URUdSQUxfREVUQUlMPTIwMDA0IE1TR19SRVFfSU5URUdSQUxfREVUQUlMIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9JTlRFR1JBTF9FWENIQU5HRT0yMDAwNSBNU0dfUkVRX0lOVEVHUkFMX0VYQ0hBTkdFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1BVU0hfSU5URUdSQUxfVVBEQVRFPTIwMDA2IE1TR19QVVNIX0lOVEVHUkFMX1VQREFURSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfVklQX1FRX0NVU1RPTUVSX1NFUlZFUj0yMDAwNyBNU0dfUkVRX1ZJUF9RUV9DVVNUT01FUl9TRVJWRVIgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX19SRUJBVEVfSU5GTz0yMDAwOCBNU0dfUkVRX19SRUJBVEVfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfR0VUX1JFQkFURV9SRVdBUkQ9MjAwMDkgTVNHX1JFUV9HRVRfUkVCQVRFX1JFV0FSRCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfUkVEX0VOVkVMT1BFPTIwMDEwIE1TR19SRVFfUkVEX0VOVkVMT1BFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9PTl9SRURfRU5WRUxPUEU9MjAwMTEgTVNHX1JFUV9PTl9SRURfRU5WRUxPUEUgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1RSRUFTVVJFX0lORk89MjAwMTIgTVNHX1JFUV9UUkVBU1VSRV9JTkZPIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9UUkVBU1VSRT0yMDAxMyBNU0dfUkVRX1RSRUFTVVJFIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9NSVNTSU9OX0lORk89MjAwMTQgTVNHX1JFUV9NSVNTSU9OX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0dFVF9BQ1RJVkVfUkVXQVJEPTIwMDE1IE1TR19SRVFfR0VUX0FDVElWRV9SRVdBUkQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1ZJUFBSSVZBVEVfTElTVD0yMDAxNiBNU0dfUkVRX1ZJUFBSSVZBVEVfTElTVCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfTFVDS19CQVk9MjAwMTcgTVNHX1JFUV9MVUNLX0JBWSB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfT1BFTl9MVUNLX0JBWT0yMDAxOCBNU0dfUkVRX09QRU5fTFVDS19CQVkgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX0dFVF9PVEhFUl9CQVk9MjAwMTkgTVNHX1JFUV9HRVRfT1RIRVJfQkFZIHZhbHVlXG4gKi9cbiRyb290LlZpcE1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDAxXSA9IFwiTVNHX1JFUV9WSVBfSU5GT1wiXSA9IDIwMDAxO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDAyXSA9IFwiTVNHX1BVU0hfVklQX0lORk9fVVBEQVRFXCJdID0gMjAwMDI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDNdID0gXCJNU0dfUkVRX0lOVEVHUkFMX0VYQ0hBTkdFX0lORk9cIl0gPSAyMDAwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAwNF0gPSBcIk1TR19SRVFfSU5URUdSQUxfREVUQUlMXCJdID0gMjAwMDQ7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDVdID0gXCJNU0dfUkVRX0lOVEVHUkFMX0VYQ0hBTkdFXCJdID0gMjAwMDU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDZdID0gXCJNU0dfUFVTSF9JTlRFR1JBTF9VUERBVEVcIl0gPSAyMDAwNjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAwN10gPSBcIk1TR19SRVFfVklQX1FRX0NVU1RPTUVSX1NFUlZFUlwiXSA9IDIwMDA3O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDA4XSA9IFwiTVNHX1JFUV9fUkVCQVRFX0lORk9cIl0gPSAyMDAwODtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAwOV0gPSBcIk1TR19SRVFfR0VUX1JFQkFURV9SRVdBUkRcIl0gPSAyMDAwOTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAxMF0gPSBcIk1TR19SRVFfUkVEX0VOVkVMT1BFXCJdID0gMjAwMTA7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMTFdID0gXCJNU0dfUkVRX09OX1JFRF9FTlZFTE9QRVwiXSA9IDIwMDExO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDEyXSA9IFwiTVNHX1JFUV9UUkVBU1VSRV9JTkZPXCJdID0gMjAwMTI7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMTNdID0gXCJNU0dfUkVRX1RSRUFTVVJFXCJdID0gMjAwMTM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMTRdID0gXCJNU0dfUkVRX01JU1NJT05fSU5GT1wiXSA9IDIwMDE0O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDE1XSA9IFwiTVNHX1JFUV9HRVRfQUNUSVZFX1JFV0FSRFwiXSA9IDIwMDE1O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDE2XSA9IFwiTVNHX1JFUV9WSVBQUklWQVRFX0xJU1RcIl0gPSAyMDAxNjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAxN10gPSBcIk1TR19SRVFfTFVDS19CQVlcIl0gPSAyMDAxNztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAxOF0gPSBcIk1TR19SRVFfT1BFTl9MVUNLX0JBWVwiXSA9IDIwMDE4O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDE5XSA9IFwiTVNHX1JFUV9HRVRfT1RIRVJfQkFZXCJdID0gMjAwMTk7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogUHJvbW90ZXJNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIFByb21vdGVyTXNnRGVmaW5lXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfTEVWRUxfSU5GTz0yMTAwMSBNU0dfUkVRX0xFVkVMX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1BMQVlFUlNfSU5DT01FX0lORk89MjEwMDIgTVNHX1JFUV9QTEFZRVJTX0lOQ09NRV9JTkZPIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9JTkNPTUVfSU5GTz0yMTAwMyBNU0dfUkVRX0lOQ09NRV9JTkZPIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUV9EQVlfSU5DT01FX0lORk89MjEwMDUgTVNHX1JFUV9EQVlfSU5DT01FX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX01JTkVfVEVBTV9JTkZPPTIxMDA2IE1TR19SRVFfTUlORV9URUFNX0lORk8gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1JFV0FSRFNfSU5GTz0yMTAwNyBNU0dfUkVRX1JFV0FSRFNfSU5GTyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfQVBQTFlfREVQT1NJVF9SRUNPUkQ9MjEwMDggTVNHX1JFUV9BUFBMWV9ERVBPU0lUX1JFQ09SRCB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE1TR19SRVFfQVBQTFlfREVQT1NJVD0yMTAwOSBNU0dfUkVRX0FQUExZX0RFUE9TSVQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNU0dfUkVRX1VQTE9BRF9MRUFERVJfSUQ9MjEwMTAgTVNHX1JFUV9VUExPQURfTEVBREVSX0lEIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gR01fVE9fSEFMTF9NU0dfVVBMT0FEX0xFQURFUl9JRD0yMTAxMiBHTV9UT19IQUxMX01TR19VUExPQURfTEVBREVSX0lEIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX0dhbWVfU2VuZF9Qcm9tb3Rlcl9pbmZvPTIxMDExIE1TR19HYW1lX1NlbmRfUHJvbW90ZXJfaW5mbyB2YWx1ZVxuICovXG4kcm9vdC5Qcm9tb3Rlck1zZ0RlZmluZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWVzQnlJZCA9IHt9LCB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKHZhbHVlc0J5SWQpO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIxMDAxXSA9IFwiTVNHX1JFUV9MRVZFTF9JTkZPXCJdID0gMjEwMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjEwMDJdID0gXCJNU0dfUkVRX1BMQVlFUlNfSU5DT01FX0lORk9cIl0gPSAyMTAwMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMTAwM10gPSBcIk1TR19SRVFfSU5DT01FX0lORk9cIl0gPSAyMTAwMztcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMTAwNV0gPSBcIk1TR19SRVFfREFZX0lOQ09NRV9JTkZPXCJdID0gMjEwMDU7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjEwMDZdID0gXCJNU0dfUkVRX01JTkVfVEVBTV9JTkZPXCJdID0gMjEwMDY7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjEwMDddID0gXCJNU0dfUkVRX1JFV0FSRFNfSU5GT1wiXSA9IDIxMDA3O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIxMDA4XSA9IFwiTVNHX1JFUV9BUFBMWV9ERVBPU0lUX1JFQ09SRFwiXSA9IDIxMDA4O1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIxMDA5XSA9IFwiTVNHX1JFUV9BUFBMWV9ERVBPU0lUXCJdID0gMjEwMDk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjEwMTBdID0gXCJNU0dfUkVRX1VQTE9BRF9MRUFERVJfSURcIl0gPSAyMTAxMDtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMTAxMl0gPSBcIkdNX1RPX0hBTExfTVNHX1VQTE9BRF9MRUFERVJfSURcIl0gPSAyMTAxMjtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMTAxMV0gPSBcIk1TR19HYW1lX1NlbmRfUHJvbW90ZXJfaW5mb1wiXSA9IDIxMDExO1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG4vKipcbiAqIEdhbWVUb0hhbGxNc2dEZWZpbmUgZW51bS5cbiAqIEBleHBvcnRzIEdhbWVUb0hhbGxNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUE9SVF9HQU1FX0VWRU5UX1RPX0hBTEw9MjAwMDAxMDAxIE1TR19SRVBPUlRfR0FNRV9FVkVOVF9UT19IQUxMIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVNHX1JFUE9SVF9HQU1FX01JU1NJT05fRVZFTlRfVE9fSEFMTD0yMDAwMDEwMDIgTVNHX1JFUE9SVF9HQU1FX01JU1NJT05fRVZFTlRfVE9fSEFMTCB2YWx1ZVxuICovXG4kcm9vdC5HYW1lVG9IYWxsTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDAxMDAxXSA9IFwiTVNHX1JFUE9SVF9HQU1FX0VWRU5UX1RPX0hBTExcIl0gPSAyMDAwMDEwMDE7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDAxMDAyXSA9IFwiTVNHX1JFUE9SVF9HQU1FX01JU1NJT05fRVZFTlRfVE9fSEFMTFwiXSA9IDIwMDAwMTAwMjtcbiAgICByZXR1cm4gdmFsdWVzO1xufSkoKTtcblxuLyoqXG4gKiBHTUNtZE1zZ0RlZmluZSBlbnVtLlxuICogQGV4cG9ydHMgR01DbWRNc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gQ0xJRU5UX0dNX0NPTU1BTkQ9MTAwMDAwMDAwIENMSUVOVF9HTV9DT01NQU5EIHZhbHVlXG4gKi9cbiRyb290LkdNQ21kTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMTAwMDAwMDAwXSA9IFwiQ0xJRU5UX0dNX0NPTU1BTkRcIl0gPSAxMDAwMDAwMDA7XG4gICAgcmV0dXJuIHZhbHVlcztcbn0pKCk7XG5cbi8qKlxuICogQ29tbW9uTXNnRGVmaW5lIGVudW0uXG4gKiBAZXhwb3J0cyBDb21tb25Nc2dEZWZpbmVcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAcHJvcGVydHkge251bWJlcn0gU01fU0VORF9DT01NT05fVElQUz0yMDAwMDAwMDEgU01fU0VORF9DT01NT05fVElQUyB2YWx1ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IENNX1NFTkRfQ09NTU9OX0JVVFRPTl9TQ1JJUFQ9MjAwMDAwMDAyIENNX1NFTkRfQ09NTU9OX0JVVFRPTl9TQ1JJUFQgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTTV9TRU5EX0NPTU1PTl9VUFBFUl9USVBTPTIwMDAwMDAwMyBTTV9TRU5EX0NPTU1PTl9VUFBFUl9USVBTIHZhbHVlXG4gKiBAcHJvcGVydHkge251bWJlcn0gU01fU0VORF9ERUZBVUxUX1JFU1VMVF9USVBTPTIwMDAwMDAwNCBTTV9TRU5EX0RFRkFVTFRfUkVTVUxUX1RJUFMgdmFsdWVcbiAqL1xuJHJvb3QuQ29tbW9uTXNnRGVmaW5lID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZXNCeUlkID0ge30sIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUodmFsdWVzQnlJZCk7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDAwMDAxXSA9IFwiU01fU0VORF9DT01NT05fVElQU1wiXSA9IDIwMDAwMDAwMTtcbiAgICB2YWx1ZXNbdmFsdWVzQnlJZFsyMDAwMDAwMDJdID0gXCJDTV9TRU5EX0NPTU1PTl9CVVRUT05fU0NSSVBUXCJdID0gMjAwMDAwMDAyO1xuICAgIHZhbHVlc1t2YWx1ZXNCeUlkWzIwMDAwMDAwM10gPSBcIlNNX1NFTkRfQ09NTU9OX1VQUEVSX1RJUFNcIl0gPSAyMDAwMDAwMDM7XG4gICAgdmFsdWVzW3ZhbHVlc0J5SWRbMjAwMDAwMDA0XSA9IFwiU01fU0VORF9ERUZBVUxUX1JFU1VMVF9USVBTXCJdID0gMjAwMDAwMDA0O1xuICAgIHJldHVybiB2YWx1ZXM7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRyb290O1xuIl19