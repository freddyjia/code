"use strict";
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