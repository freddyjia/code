import * as $protobuf from "protobufjs";
/** NetMsgDefine enum. */
export enum NetMsgDefine {
    HANDSHAKE = 1,
    MSG_OVER_LAP = 2
}

/** PingMsgDefine enum. */
export enum PingMsgDefine {
    MSG_PING = 1001
}

/** LoginMsgDefine enum. */
export enum LoginMsgDefine {
    MSG_LOGIN_HALL = 1000,
    MSG_RECONNECT_STATUS = 1002,
    MSG_RECONNECT_BATTLE = 1003,
    MSG_RECONNECT = 1004,
    MSG_MINI_GAME_RECONNECT_NOTIFY = 1005,
    MSG_GAME_STATUS_RESPONSE = 1006
}

/** CurrencyMsgDefine enum. */
export enum CurrencyMsgDefine {
    SM_SYNC_CURRENCY = 2001,
    SM_SYNC_HALL_CURRENCY = 2002
}

/** RankMsgDefine enum. */
export enum RankMsgDefine {
    CM_GET_RANK_INFO_DATA = 3000,
    CM_GET_RANK_LIST_DATA = 3001
}

/** MailMsgDefine enum. */
export enum MailMsgDefine {
    CM_PUSH_MAIL_DATA = 4001,
    SM_PUSH_MAIL_DATA = 4002,
    SM_UPDATE_MAIL_DATA = 4003,
    CM_READ_MAIL = 4004,
    CM_GET_MAIL_ATTACHMENT = 4005,
    CM_DELETE_MAIL = 4006
}

/** ItemMsgDefine enum. */
export enum ItemMsgDefine {
    SM_ITEM_LOGIN_PUSH = 5001,
    SM_UPDATE_ITEMS = 5002,
    MSG_USE_ITEM = 5003
}

/** PlayerRoleMsgDefine enum. */
export enum PlayerRoleMsgDefine {
    SM_PUSH_ROLE_DATA = 6001,
    MSG_MODIFY_NICKNAME = 6002,
    MSG_MODIFY_HEAD_INFO = 6003,
    MSG_BIND_SIGN = 6004,
    MSG_UPLOAD_HEAD_IMAGE = 6005,
    MSG_CHANGE_HEAD_BOX = 6006,
    MSG_SAFE_BOX_GET_BOX_INFO = 6007,
    MSG_SAFE_BOX_TAKE_OUT_BOX_MONEY = 6008,
    MSG_SAFE_BOX_SAVE_BOX_MONEY = 6009,
    MSG_ANNOUN_GET_INFO = 6010,
    MSG_ANNOUN_READ = 6011,
    MSG_PUSH_ANNOUN_RED_POINT = 6012,
    MSG_PUSH_Bankruptcy_info = 6013,
    MSG_REQ_Bankruptcy_Remain = 6016,
    MSG_REQ_Bankruptcy = 6014,
    MSG_Server_Game_RQE_Bankruptcy_INFO = 6015,
    MSM_PUSH_ZhuCeSongJin = 6017,
    MSG_REQ_ZhuCeSongJin = 6018,
    MSG_REQ_XinShouJin = 6019,
    MSG_REQ_UP_XinShouJin = 6020,
    MSM_PUSH_XinShouJinAndStep = 6021,
    MSG_BINDING_MOBILE_NUM = 6022,
    MSG_PUSH_HEAD_FRAME_LIST = 6023,
    MSG_PUSH_BATTERY_LIST = 6024
}

/** PayClientMsgDefine enum. */
export enum PayClientMsgDefine {
    MSG_BEFORE_PAY_NORMAL = 8001,
    MSG_BEFORE_PAY_FIRST = 8002,
    MSG_REQ_RECHARGE_LIST = 8003,
    MSG_REQ_RECHARGE = 8004,
    MSG_REQ_REFRESH_PROXY = 8005,
    MSG_RSP_ACCOUNTGETMONEY = 8006,
    MSG_REQ_CONFIRMGETMONEY = 8007,
    MSG_REQ_CHARGE_CHAT_SERVER_INFO = 8008,
    MSG_RES_CHARGE_RECORD = 8009,
    MSG_REQ_Evaluation = 8010
}

/** PayServerMsgDefine enum. */
export enum PayServerMsgDefine {
    MSG_PAY = 8101,
    MSG_IAP_VERIFY = 8102,
    MSG_NOTIFY_IAP_VERIFY_FINISH = 8103,
    MSG_IAP_PAY_SERVER_VERIFY = 8104,
    MSG_IAP_PAY_SERVER_VERIFY_RESULT = 8105,
    MSG_CREATE_ORDER = 8106
}

/** BiLogMsgDefine enum. */
export enum BiLogMsgDefine {
    MSG_BILOG = 8201
}

/** ShareDataMsgDefine enum. */
export enum ShareDataMsgDefine {
    MSG_SHARE_BRAND_ROAD_DATA = 8202,
    MSG_SHARE_ROOM_STATUS = 8203,
    MSG_ARCADECATCHFISH_CHANGE_STOCK = 8204,
    MSG_REQ_ALL_ROAD = 8205,
    MSG_Rsp_ALL_ROAD = 8206
}

/** LegendMsgDefine enum. */
export enum LegendMsgDefine {
    MSG_LEGEND = 8205
}

/** GMMsgDefine enum. */
export enum GMMsgDefine {
    MSG_GM_BROADCAST = 8301,
    MSG_GM_NOTIFY_ROLE_LOGIN = 8302,
    MSG_GM_SEND_GMEMAIL = 8303,
    MSG_GM_SEND_ANNOUN = 8304,
    MSG_GM_MODIFY_CURRENCY = 8305,
    MSG_GM_RELOAD_ANNOUNCEMENT = 8306
}

/** ChatMsgDefine enum. */
export enum ChatMsgDefine {
    MSG_SEND_BROADCAST = 8400,
    MSG_BROADCAST = 8401,
    MSG_CHAT = 8402,
    MSG_READ_CHAT = 8403,
    MSG_MAKE_READ = 8404,
    MSG_PUSH_CHAT = 8405
}

/** ChatServerMsgDefine enum. */
export enum ChatServerMsgDefine {
    MID_CHAT_MSG = 8450
}

/** HallMsgDefine enum. */
export enum HallMsgDefine {
    MSG_PUSH_HALL_DATA = 8500,
    MSG_OPEN_PLAY_LIST_REQ = 8501,
    MSG_PLAY_GAME = 8502,
    MSG_PUSH_MATCH_RESULT = 8503,
    MSG_CANCEL_PLAY = 8504,
    MSG_LOGINHALL_POPMENU = 8505,
    MSG_PUSH_MOUDULE_STATUS = 8506,
    MSG_PUSH_CHANNEL_ASSET = 8507
}

/** LoginPopupMsgDefine enum. */
export enum LoginPopupMsgDefine {
    MSG_LOGIN_POP_UP = 8800,
    MSG_CLOSE_POP_UP = 8801
}

/** MatchServerMsgDefine enum. */
export enum MatchServerMsgDefine {
    MSG_MATCH_REQ = 9000,
    MSG_CANCEL_MATCH_REQ = 9001,
    MSG_GAME_TO_MATCH_RESULT_RESPONSE = 9002,
    MSG_MATCH_TO_HALL_RESULT_RESPONSE = 9003,
    MSG_MATCH_TO_GAME_START_REQUEST = 9004,
    MSG_GAME_TO_MATCH_GAME_FINISH = 9005,
    MSG_GAME_TO_MATCH_GET_ROBOT = 9006,
    MSG_MATCH_TO_GAME_RETURN_ROBOT = 9007,
    MSG_GAME_TO_GAME_GIVEBACK_ROBOT = 9008,
    MSG_GAME_TO_HALL_BACK_HALL = 9009,
    MSG_LOGIN_GAME = 9010,
    MSG_Config_Battle_Status = 9011,
    MSG_SYNC_CURRENCY = 9012,
    MSG_SYNC_SETTLEMENT = 9013
}

/** WithdrawMsgDefine enum. */
export enum WithdrawMsgDefine {
    MSG_REQ_TAKE_MONEY_Withdraw = 9601,
    MSG_REQ_TAKE_MONEY_RECORD_Withdraw = 9602,
    MSG_REQ_BIND_ZHIFUBO_Withdraw = 9603,
    MSG_REQ_GET_ZHIFUBO_INFO_Withdraw = 9604,
    MSG_REQ_BIND_BANKCA_Withdraw = 9605,
    MSG_REQ_GET_BANKCA_INFO_Withdraw = 9606,
    MSG_REQ_GET_CAN_USE_BANK_INFOS_Withdraw = 9607,
    MSG_REQ_GET_WITHDRAW_PASSAGE = 9608
}

/** BrocastMsgDefine enum. */
export enum BrocastMsgDefine {
    MSG_PUSH_Brocast_INFO = 9701,
    MSG_Game_Send_Brocast = 9702,
    MSG_Send_TEXT_Brocast = 9703
}

/** GameCommonMsgDefine enum. */
export enum GameCommonMsgDefine {
    MSG_KICK_OUT_GAME_ROOM = 9401,
    MSG_ALREADY_PLAY_GAME = 9402,
    MSG_KICK_OUT_TO_LOGIN = 9403
}

/** WithDrawServerMsgDefine enum. */
export enum WithDrawServerMsgDefine {
    MSG_WithDraw_CREATE_ORDER = 11101,
    MSG_WithDraw_CREATE_RSP = 11102
}

/** VipMsgDefine enum. */
export enum VipMsgDefine {
    MSG_REQ_VIP_INFO = 20001,
    MSG_PUSH_VIP_INFO_UPDATE = 20002,
    MSG_REQ_INTEGRAL_EXCHANGE_INFO = 20003,
    MSG_REQ_INTEGRAL_DETAIL = 20004,
    MSG_REQ_INTEGRAL_EXCHANGE = 20005,
    MSG_PUSH_INTEGRAL_UPDATE = 20006,
    MSG_REQ_VIP_QQ_CUSTOMER_SERVER = 20007,
    MSG_REQ__REBATE_INFO = 20008,
    MSG_REQ_GET_REBATE_REWARD = 20009,
    MSG_REQ_RED_ENVELOPE = 20010,
    MSG_REQ_ON_RED_ENVELOPE = 20011,
    MSG_REQ_TREASURE_INFO = 20012,
    MSG_REQ_TREASURE = 20013,
    MSG_REQ_MISSION_INFO = 20014,
    MSG_REQ_GET_ACTIVE_REWARD = 20015,
    MSG_REQ_VIPPRIVATE_LIST = 20016,
    MSG_REQ_LUCK_BAY = 20017,
    MSG_REQ_OPEN_LUCK_BAY = 20018,
    MSG_REQ_GET_OTHER_BAY = 20019
}

/** PromoterMsgDefine enum. */
export enum PromoterMsgDefine {
    MSG_REQ_LEVEL_INFO = 21001,
    MSG_REQ_PLAYERS_INCOME_INFO = 21002,
    MSG_REQ_INCOME_INFO = 21003,
    MSG_REQ_DAY_INCOME_INFO = 21005,
    MSG_REQ_MINE_TEAM_INFO = 21006,
    MSG_REQ_REWARDS_INFO = 21007,
    MSG_REQ_APPLY_DEPOSIT_RECORD = 21008,
    MSG_REQ_APPLY_DEPOSIT = 21009,
    MSG_REQ_UPLOAD_LEADER_ID = 21010,
    GM_TO_HALL_MSG_UPLOAD_LEADER_ID = 21012,
    MSG_Game_Send_Promoter_info = 21011
}

/** GameToHallMsgDefine enum. */
export enum GameToHallMsgDefine {
    MSG_REPORT_GAME_EVENT_TO_HALL = 200001001,
    MSG_REPORT_GAME_MISSION_EVENT_TO_HALL = 200001002
}

/** GMCmdMsgDefine enum. */
export enum GMCmdMsgDefine {
    CLIENT_GM_COMMAND = 100000000
}

/** CommonMsgDefine enum. */
export enum CommonMsgDefine {
    SM_SEND_COMMON_TIPS = 200000001,
    CM_SEND_COMMON_BUTTON_SCRIPT = 200000002,
    SM_SEND_COMMON_UPPER_TIPS = 200000003,
    SM_SEND_DEFAULT_RESULT_TIPS = 200000004
}
