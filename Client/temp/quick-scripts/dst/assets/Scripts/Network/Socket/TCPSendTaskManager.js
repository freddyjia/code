
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Network/Socket/TCPSendTaskManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTmV0d29ya1xcU29ja2V0XFxUQ1BTZW5kVGFza01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsa0RBQTZDO0FBQzdDLDJDQUFzQztBQUN0Qyw4REFBOEQ7QUFFOUQ7SUFBQTtRQWFZLGFBQVEsR0FBbUQsRUFBRSxDQUFDO0lBbUQxRSxDQUFDO0lBNURpQiw4QkFBVyxHQUF6QjtRQUVJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQzFCO1lBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUdNLHdDQUFXLEdBQWxCLFVBQW1CLFNBQVM7UUFFeEIseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsU0FBUyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLGVBQXVDLEVBQUMsWUFBa0M7UUFFbEgsK0RBQStEO1FBQy9ELElBQUksSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsU0FBUyxFQUFDLEdBQUc7UUFFeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixTQUFTLEVBQUMsR0FBRztRQUUzQixpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxrQ0FBSyxHQUFaO1FBRUksS0FBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUNsQztZQUNJLDJDQUEyQztZQUMzQyxJQUFJO1lBQ0osbURBQW1EO1lBQ25ELElBQUk7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHlDQUFZLEdBQW5CLFVBQW9CLFNBQVM7UUFFekIsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUN2QztZQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFTCx5QkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7O0FBRUQ7SUFBQTtJQW9DQSxDQUFDO0lBekJVLHlCQUFHLEdBQVYsVUFBVyxTQUFTLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsZUFBdUMsRUFBQyxZQUFrQztRQUFsSCxpQkFtQkM7UUFqQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUVqQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUN0RCxJQUFHLEtBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDakIsZUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUcsWUFBWSxJQUFJLElBQUksRUFDdkI7Z0JBQ0ksWUFBWSxDQUFDLGtCQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUNELHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxpQ0FBVyxHQUFsQjtRQUVJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVyTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9UaW1lck1hbmFnZXJcIjtcbmltcG9ydCBMYW5ndWFnZSBmcm9tIFwiLi4vLi4vR2xvYmFsL0xhbmd1YWdlXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4uLy4uL1Rvb2xzL1RvYXN0XCI7XG4vLyBpbXBvcnQgeyBQaW5nTXNnRGVmaW5lIH0gZnJvbSBcIi4uLy4uL1Byb3Rvcy9NZXNzYWdlRGVmaW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRDUFNlbmRUYXNrTWFuYWdlclxue1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9JbnN0YW5jZTpUQ1BTZW5kVGFza01hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpOlRDUFNlbmRUYXNrTWFuYWdlclxuICAgIHtcbiAgICAgICAgaWYodGhpcy5tX0luc3RhbmNlID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubV9JbnN0YW5jZSA9IG5ldyBUQ1BTZW5kVGFza01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tX0luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Vzc2lvbnM6e1tzZXNzaW9uSUQ6bnVtYmVyXTp7W3NlcTpudW1iZXJdOlRDUFNlbmRUYXNrfX0gPSB7fTtcbiAgICBwdWJsaWMgSW5pdFNlc3Npb24oc2Vzc2lvbklEKVxuICAgIHtcbiAgICAgICAgLy8gY2MuZXJyb3IoXCJJbml0U2Vzc2lvbiAgXCIgKyBzZXNzaW9uSUQpO1xuICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0gPSB7fTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQWRkVGFzayhzZXNzaW9uSUQsbXNnSUQsc2VxLGRhdGFTZW5kLHN1Y2Nlc3NDYWxsYmFjazooZGF0YTpVaW50OEFycmF5KT0+dm9pZCxmYWlsQ2FsbGJhY2s6KGVyck1zZzpzdHJpbmcpPT52b2lkKVxuICAgIHtcbiAgICAgICAgLy8gY2MuZXJyb3IoXCJBZGRUYXNrIHNlc3Npb25JRCAgXCIgKyBzZXNzaW9uSUQgKyBcIiBzZXEgXCIgKyBzZXEpO1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUQ1BTZW5kVGFzaygpO1xuICAgICAgICB0YXNrLlNldChzZXNzaW9uSUQsbXNnSUQsc2VxLGRhdGFTZW5kLHN1Y2Nlc3NDYWxsYmFjayxmYWlsQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF1bc2VxXSA9IHRhc2s7XG4gICAgfVxuXG4gICAgcHVibGljIEdldFRhc2soc2Vzc2lvbklELHNlcSlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF1bc2VxXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgQ2FuY2VsVGFzayhzZXNzaW9uSUQsc2VxKVxuICAgIHtcbiAgICAgICAgLy8gY2MuZXJyb3IoXCJDYW5jZWxUYXNrIFwiICsgc2VxKTtcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF1bc2VxXTtcbiAgICAgICAgdGFzay5DYW5jZWxUaW1lcigpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZXNzaW9uc1tzZXNzaW9uSURdW3NlcV07XG4gICAgfVxuXG4gICAgcHVibGljIENsZWFuKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQgc2Vzc2lvbklEIGluIHRoaXMuc2Vzc2lvbnMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGZvcihsZXQgc2VxIGluIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSlcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF1bc2VxXS5DYW5jZWxUaW1lcigpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5DbGVhblNlc3Npb24oc2Vzc2lvbklEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlc3Npb25zID0ge307XG4gICAgfVxuXG4gICAgcHVibGljIENsZWFuU2Vzc2lvbihzZXNzaW9uSUQpXG4gICAge1xuICAgICAgICBmb3IobGV0IHNlcSBpbiB0aGlzLnNlc3Npb25zW3Nlc3Npb25JRF0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXVtzZXFdLkNhbmNlbFRpbWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlKHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSk7XG4gICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklEXSA9IG51bGw7XG4gICAgfVxuXG59XG5cbmNsYXNzIFRDUFNlbmRUYXNrXG57XG4gICAgcHVibGljIHNlc3Npb25JRDpudW1iZXI7XG4gICAgcHVibGljIG1zZ0lEOm51bWJlcjtcbiAgICBwdWJsaWMgc2VxOm51bWJlcjtcbiAgICBwdWJsaWMgZGF0YVNlbmQ6YW55O1xuICAgIHB1YmxpYyBzdWNjZXNzQ2FsbGJhY2s6KGRhdGE6VWludDhBcnJheSk9PnZvaWQ7XG4gICAgcHVibGljIGZhaWxDYWxsYmFjazooZXJyTXNnOnN0cmluZyk9PnZvaWQ7XG5cbiAgICBwcml2YXRlIHRpbWVySUQ6c3RyaW5nO1xuXG4gICAgcHVibGljIFNldChzZXNzaW9uSUQsbXNnSUQsc2VxLGRhdGFTZW5kLHN1Y2Nlc3NDYWxsYmFjazooZGF0YTpVaW50OEFycmF5KT0+dm9pZCxmYWlsQ2FsbGJhY2s6KGVyck1zZzpzdHJpbmcpPT52b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBzZXNzaW9uSUQ7XG4gICAgICAgIHRoaXMubXNnSUQgPSBtc2dJRDtcbiAgICAgICAgdGhpcy5zZXEgPSBzZXE7XG4gICAgICAgIHRoaXMuZGF0YVNlbmQgPSBkYXRhU2VuZDtcbiAgICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuZmFpbENhbGxiYWNrID0gZmFpbENhbGxiYWNrO1xuXG4gICAgICAgIGxldCB0aW1lT3V0ID0gMjA7XG4gICAgICAgIHRoaXMudGltZXJJRCA9IFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkNhbGxBY3Rpb25EZWxheSgoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5tc2dJRCAhPSAxMDAwKVxuICAgICAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UudGV4dDUpO1xuICAgICAgICAgICAgaWYoZmFpbENhbGxiYWNrICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKExhbmd1YWdlLnRleHQ1ICsgXCIgbXNnSUQgXCIgKyBtc2dJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcih0aGlzLnRpbWVySUQpO1xuICAgICAgICB9LHRpbWVPdXQsbnVsbCwwLDAsdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIENhbmNlbFRpbWVyKClcbiAgICB7XG4gICAgICAgIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkRlbGV0ZVRpbWVyKHRoaXMudGltZXJJRCk7XG4gICAgfVxufVxuIl19