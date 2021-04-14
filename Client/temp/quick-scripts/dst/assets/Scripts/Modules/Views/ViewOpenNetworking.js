
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/ViewOpenNetworking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5243b4RpmlERYovIUbN307d', 'ViewOpenNetworking');
// Scripts/Modules/Views/ViewOpenNetworking.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../../MVCFramework/View");
var TimerManager_1 = require("../../Components/TimerManager");
var ViewOpenNetworking = /** @class */ (function (_super) {
    __extends(ViewOpenNetworking, _super);
    function ViewOpenNetworking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewOpenNetworking.prototype.OnAwake = function () {
        // this.LabelLoading = this.FindTransform("LabelLoading").getComponent(cc.Label);
        // this.LabelLoading.node.active = false;
        this.Content = this.FindTransform("Content");
        this.Content.active = false;
    };
    ViewOpenNetworking.prototype.Refresh = function (content) {
        var _this = this;
        this.timerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            // this.LabelLoading.node.active = true;
            _this.Content.active = true;
        }, 1);
        if (content != "")
            this.LabelLoading.string = content;
    };
    ViewOpenNetworking.prototype.OnShowView = function () {
    };
    ViewOpenNetworking.prototype.OnHideView = function () {
        TimerManager_1.default.GetInstance().DeleteTimer(this.timerID);
        // this.LabelLoading.node.active = false;
        this.Content.active = false;
    };
    return ViewOpenNetworking;
}(View_1.default));
exports.default = ViewOpenNetworking;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFZpZXdPcGVuTmV0d29ya2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0MsOERBQXlEO0FBRXpEO0lBQWdELHNDQUFJO0lBQXBEOztJQXNDQSxDQUFDO0lBL0JVLG9DQUFPLEdBQWQ7UUFFSSxpRkFBaUY7UUFDakYseUNBQXlDO1FBRXpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxPQUFjO1FBQTdCLGlCQVFDO1FBTkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUN0RCx3Q0FBd0M7WUFDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUcsT0FBTyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDM0MsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO0lBR0EsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBRUksc0JBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELHlDQUF5QztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsQ0F0QytDLGNBQUksR0FzQ25EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uL01WQ0ZyYW1ld29yay9WaWV3XCI7XG5pbXBvcnQgVGltZXJNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1RpbWVyTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3T3Blbk5ldHdvcmtpbmcgZXh0ZW5kcyBWaWV3IFxue1xuICAgIHByaXZhdGUgTGFiZWxMb2FkaW5nOmNjLkxhYmVsO1xuXG4gICAgcHJpdmF0ZSB0aW1lcklEO1xuICAgIHByaXZhdGUgQ29udGVudDpjYy5Ob2RlO1xuXG4gICAgcHVibGljIE9uQXdha2UoKVxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5MYWJlbExvYWRpbmcgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJMYWJlbExvYWRpbmdcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy8gdGhpcy5MYWJlbExvYWRpbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLkNvbnRlbnQgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJDb250ZW50XCIpO1xuICAgICAgICB0aGlzLkNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFJlZnJlc2goY29udGVudDpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLnRpbWVySUQgPSBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5DYWxsQWN0aW9uRGVsYXkoKCk9PntcbiAgICAgICAgICAgIC8vIHRoaXMuTGFiZWxMb2FkaW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuQ29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9LDEpO1xuICAgICAgICBpZihjb250ZW50ICE9IFwiXCIpXG4gICAgICAgICAgICB0aGlzLkxhYmVsTG9hZGluZy5zdHJpbmcgPSBjb250ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBPblNob3dWaWV3KClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBPbkhpZGVWaWV3KClcbiAgICB7XG4gICAgICAgIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkRlbGV0ZVRpbWVyKHRoaXMudGltZXJJRCk7XG4gICAgICAgIC8vIHRoaXMuTGFiZWxMb2FkaW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuQ29udGVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbn1cbiJdfQ==