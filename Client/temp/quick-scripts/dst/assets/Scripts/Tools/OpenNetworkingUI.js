
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/OpenNetworkingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0db5zXQodFCIS0KSrvzflK', 'OpenNetworkingUI');
// Scripts/Tools/OpenNetworkingUI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCenter_1 = require("../MVCFramework/MessageCenter");
var MessageNames_1 = require("../Modules/MessageNames");
var OpenNetworkingUI = /** @class */ (function () {
    function OpenNetworkingUI() {
    }
    OpenNetworkingUI.Show = function (msg) {
        if (msg === void 0) { msg = ""; }
        // cc.error("OpenNetworkingUI Show ");
        MessageCenter_1.default.SendMessage(MessageNames_1.default.OpenNetworkLoading, { status: true, content: msg });
    };
    OpenNetworkingUI.Hide = function () {
        MessageCenter_1.default.SendMessage(MessageNames_1.default.OpenNetworkLoading, { status: false, content: "" });
    };
    return OpenNetworkingUI;
}());
exports.default = OpenNetworkingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXE9wZW5OZXR3b3JraW5nVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsd0RBQW1EO0FBRW5EO0lBQUE7SUFhQSxDQUFDO0lBWGlCLHFCQUFJLEdBQWxCLFVBQW1CLEdBQU07UUFBTixvQkFBQSxFQUFBLFFBQU07UUFFckIsc0NBQXNDO1FBQ3RDLHVCQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFZLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUcsSUFBSSxFQUFFLE9BQU8sRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFFYSxxQkFBSSxHQUFsQjtRQUVJLHVCQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFZLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFFTCx1QkFBQztBQUFELENBYkEsQUFhQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lc3NhZ2VDZW50ZXIgZnJvbSBcIi4uL01WQ0ZyYW1ld29yay9NZXNzYWdlQ2VudGVyXCI7XG5pbXBvcnQgTWVzc2FnZU5hbWVzIGZyb20gXCIuLi9Nb2R1bGVzL01lc3NhZ2VOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuTmV0d29ya2luZ1VJIFxue1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvdyhtc2c9XCJcIilcbiAgICB7XG4gICAgICAgIC8vIGNjLmVycm9yKFwiT3Blbk5ldHdvcmtpbmdVSSBTaG93IFwiKTtcbiAgICAgICAgTWVzc2FnZUNlbnRlci5TZW5kTWVzc2FnZShNZXNzYWdlTmFtZXMuT3Blbk5ldHdvcmtMb2FkaW5nLCB7IHN0YXR1cyA6IHRydWUsIGNvbnRlbnQ6bXNnIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBIaWRlKClcbiAgICB7XG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLk9wZW5OZXR3b3JrTG9hZGluZywgeyBzdGF0dXMgOiBmYWxzZSwgY29udGVudDpcIlwiIH0pXG4gICAgfVxuXG59XG4iXX0=