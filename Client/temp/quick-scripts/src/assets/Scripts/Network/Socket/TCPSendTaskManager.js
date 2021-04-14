"use strict";
cc._RF.push(module, 'e9c96q6VTlIM5tMrFqoTs5n', 'TCPSendTaskManager');
// Scripts/Network/Socket/TCPSendTaskManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimerManager_1 = require("../../Components/TimerManager");
var Language_1 = require("../../Global/Language");
var Toast_1 = require("../../Tools/Toast");
// import { PingMsgDefine } from "../../Protos/MessageDefine";
var TCPSendTaskManager = /** @class */ (function () {
    function TCPSendTaskManager() {
        this.sessions = {};
    }
    TCPSendTaskManager.GetInstance = function () {
        if (this.m_Instance == null) {
            this.m_Instance = new TCPSendTaskManager();
        }
        return this.m_Instance;
    };
    TCPSendTaskManager.prototype.InitSession = function (sessionID) {
        // cc.error("InitSession  " + sessionID);
        this.sessions[sessionID] = {};
    };
    TCPSendTaskManager.prototype.AddTask = function (sessionID, msgID, seq, dataSend, successCallback, failCallback) {
        // cc.error("AddTask sessionID  " + sessionID + " seq " + seq);
        var task = new TCPSendTask();
        task.Set(sessionID, msgID, seq, dataSend, successCallback, failCallback);
        this.sessions[sessionID][seq] = task;
    };
    TCPSendTaskManager.prototype.GetTask = function (sessionID, seq) {
        return this.sessions[sessionID][seq];
    };
    TCPSendTaskManager.prototype.CancelTask = function (sessionID, seq) {
        // cc.error("CancelTask " + seq);
        var task = this.sessions[sessionID][seq];
        task.CancelTimer();
        delete this.sessions[sessionID][seq];
    };
    TCPSendTaskManager.prototype.Clean = function () {
        for (var sessionID in this.sessions) {
            // for(let seq in this.sessions[sessionID])
            // {
            //     this.sessions[sessionID][seq].CancelTimer();
            // }
            this.CleanSession(sessionID);
        }
        this.sessions = {};
    };
    TCPSendTaskManager.prototype.CleanSession = function (sessionID) {
        for (var seq in this.sessions[sessionID]) {
            this.sessions[sessionID][seq].CancelTimer();
        }
        delete (this.sessions[sessionID]);
        this.sessions[sessionID] = null;
    };
    return TCPSendTaskManager;
}());
exports.default = TCPSendTaskManager;
var TCPSendTask = /** @class */ (function () {
    function TCPSendTask() {
    }
    TCPSendTask.prototype.Set = function (sessionID, msgID, seq, dataSend, successCallback, failCallback) {
        var _this = this;
        this.sessionID = sessionID;
        this.msgID = msgID;
        this.seq = seq;
        this.dataSend = dataSend;
        this.successCallback = successCallback;
        this.failCallback = failCallback;
        var timeOut = 20;
        this.timerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            if (_this.msgID != 1000)
                Toast_1.default.Show(Language_1.default.text5);
            if (failCallback != null) {
                failCallback(Language_1.default.text5 + " msgID " + msgID);
            }
            TimerManager_1.default.GetInstance().DeleteTimer(_this.timerID);
        }, timeOut, null, 0, 0, true);
    };
    TCPSendTask.prototype.CancelTimer = function () {
        TimerManager_1.default.GetInstance().DeleteTimer(this.timerID);
    };
    return TCPSendTask;
}());

cc._RF.pop();