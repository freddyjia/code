"use strict";
cc._RF.push(module, '0c740Nfe5RDfb2QjfraK/n8', 'UploadAnalytics');
// Scripts/Tools/UploadAnalytics.ts

"use strict";
// 游戏行为分析
Object.defineProperty(exports, "__esModule", { value: true });
var UploadAnalytics = /** @class */ (function () {
    function UploadAnalytics() {
    }
    UploadAnalytics.GetMillSecondTimestamp = function () {
        return new Date().getTime;
    };
    UploadAnalytics.GetPlatform = function () {
        var platform = "Editor";
        if (cc.sys.os == cc.sys.OS_ANDROID)
            platform = "Android";
        else if (cc.sys.os == cc.sys.OS_IOS)
            platform = "iOS";
        return platform;
    };
    UploadAnalytics.GetAppVersion = function () {
        return "";
    };
    UploadAnalytics.GetTid = function () {
        var tid = "UA-123753172-1";
        if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS)
            tid = "UA-123747518-1";
        return tid;
    };
    UploadAnalytics.UploadAnalyticsEvent = function (ec, ea, el, ev) {
        if (el === void 0) { el = null; }
        if (ev === void 0) { ev = null; }
    };
    UploadAnalytics.UploadAnalyticsScreen = function (screenName) {
    };
    UploadAnalytics.UploadAnalyticsCustomException = function (mess) {
    };
    UploadAnalytics.UploadFirstOpen = function () {
    };
    UploadAnalytics.UploadStartGame = function () {
    };
    UploadAnalytics.UploadUpdateStart = function () {
    };
    UploadAnalytics.UploadUpdateSuccess = function () {
    };
    UploadAnalytics.UploadLogin = function () {
    };
    UploadAnalytics.UploadEnterHall = function () {
    };
    UploadAnalytics.UploadClickEvent = function () {
    };
    UploadAnalytics.UploadTransaction = function () {
    };
    UploadAnalytics.QMAPPID = 100;
    UploadAnalytics.UploadUrl = "http://bigf.qhdgcdl.com:15145/log/behavior";
    UploadAnalytics.analyticsURL = "https://www.google-analytics.com/collect";
    return UploadAnalytics;
}());
exports.default = UploadAnalytics;

cc._RF.pop();