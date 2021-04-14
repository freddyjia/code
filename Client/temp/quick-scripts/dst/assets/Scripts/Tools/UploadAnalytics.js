
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/UploadAnalytics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFVwbG9hZEFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUzs7QUFFVDtJQUFBO0lBeUZBLENBQUM7SUFuRmlCLHNDQUFzQixHQUFwQztRQUVJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVhLDJCQUFXLEdBQXpCO1FBRUksSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQzlCLFFBQVEsR0FBRyxTQUFTLENBQUM7YUFDcEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU07WUFDL0IsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUVyQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRWEsNkJBQWEsR0FBM0I7UUFFSSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFYSxzQkFBTSxHQUFwQjtRQUVJLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQzVELEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFYSxvQ0FBb0IsR0FBbEMsVUFBbUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFPLEVBQUUsRUFBTztRQUFoQixtQkFBQSxFQUFBLFNBQU87UUFBRSxtQkFBQSxFQUFBLFNBQU87SUFHM0QsQ0FBQztJQUVhLHFDQUFxQixHQUFuQyxVQUFvQyxVQUFVO0lBRzlDLENBQUM7SUFFYSw4Q0FBOEIsR0FBNUMsVUFBNkMsSUFBSTtJQUdqRCxDQUFDO0lBRWEsK0JBQWUsR0FBN0I7SUFHQSxDQUFDO0lBRWEsK0JBQWUsR0FBN0I7SUFHQSxDQUFDO0lBRWEsaUNBQWlCLEdBQS9CO0lBR0EsQ0FBQztJQUVhLG1DQUFtQixHQUFqQztJQUdBLENBQUM7SUFFYSwyQkFBVyxHQUF6QjtJQUdBLENBQUM7SUFFYSwrQkFBZSxHQUE3QjtJQUdBLENBQUM7SUFFYSxnQ0FBZ0IsR0FBOUI7SUFHQSxDQUFDO0lBRWEsaUNBQWlCLEdBQS9CO0lBR0EsQ0FBQztJQXRGTSx1QkFBTyxHQUFHLEdBQUcsQ0FBQztJQUNkLHlCQUFTLEdBQUcsNENBQTRDLENBQUM7SUFDekQsNEJBQVksR0FBRywwQ0FBMEMsQ0FBQztJQXFGckUsc0JBQUM7Q0F6RkQsQUF5RkMsSUFBQTtrQkF6Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmuLjmiI/ooYzkuLrliIbmnpBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEFuYWx5dGljcyBcclxue1xyXG4gICAgc3RhdGljIFFNQVBQSUQgPSAxMDA7XHJcbiAgICBzdGF0aWMgVXBsb2FkVXJsID0gXCJodHRwOi8vYmlnZi5xaGRnY2RsLmNvbToxNTE0NS9sb2cvYmVoYXZpb3JcIjtcclxuICAgIHN0YXRpYyBhbmFseXRpY3NVUkwgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2NvbGxlY3RcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldE1pbGxTZWNvbmRUaW1lc3RhbXAoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRQbGF0Zm9ybSgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHBsYXRmb3JtID0gXCJFZGl0b3JcIjtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSAgXHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gXCJBbmRyb2lkXCI7IFxyXG4gICAgICAgIGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSAgXHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gXCJpT1NcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QXBwVmVyc2lvbigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRUaWQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0aWQgPSBcIlVBLTEyMzc1MzE3Mi0xXCI7IFxyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpICBcclxuICAgICAgICAgICAgdGlkID0gXCJVQS0xMjM3NDc1MTgtMVwiO1xyXG4gICAgICAgIHJldHVybiB0aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRBbmFseXRpY3NFdmVudChlYywgZWEsIGVsPW51bGwsIGV2PW51bGwpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBsb2FkQW5hbHl0aWNzU2NyZWVuKHNjcmVlbk5hbWUpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBsb2FkQW5hbHl0aWNzQ3VzdG9tRXhjZXB0aW9uKG1lc3MpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBsb2FkRmlyc3RPcGVuKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRTdGFydEdhbWUoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFVwbG9hZFVwZGF0ZVN0YXJ0KClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRVcGRhdGVTdWNjZXNzKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRMb2dpbigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgVXBsb2FkRW50ZXJIYWxsKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRDbGlja0V2ZW50KClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBVcGxvYWRUcmFuc2FjdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19