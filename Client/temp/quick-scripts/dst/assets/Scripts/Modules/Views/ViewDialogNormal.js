
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/ViewDialogNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27684+suVpMLbDqcj0tzavZ', 'ViewDialogNormal');
// Scripts/Modules/Views/ViewDialogNormal.ts

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
var Util_1 = require("../../Tools/Util");
var Global_1 = require("../../Global/Global");
var ViewDialogNormal = /** @class */ (function (_super) {
    __extends(ViewDialogNormal, _super);
    function ViewDialogNormal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDialogNormal.prototype.OnAwake = function () {
        var _this = this;
        if (Global_1.default.showLog == true)
            cc.log("ViewTest1 OnAwake");
        this.ButtonYes = this.FindTransform("ButtonYes").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonYes, function (button, data) {
            _this.Hide();
            if (_this.data.yesCallback != null) {
                _this.data.yesCallback();
            }
        });
        this.ButtonNo = this.FindTransform("ButtonNo").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonNo, function (button, data) {
            _this.Hide();
            if (_this.data.noCallback != null) {
                _this.data.noCallback();
            }
        });
        this.ButtonClose = this.FindTransform("ButtonClose").getComponent(cc.Button);
        Util_1.default.SetClickAction(this.ButtonClose, function (button, data) {
            _this.Hide();
        });
        this.LabelTitle = this.FindTransform("LabelTitle").getComponent(cc.Label);
        this.LabelContent = this.FindTransform("LabelContent").getComponent(cc.Label);
        this.LabelYes = this.FindTransform("LabelYes").getComponent(cc.Label);
        this.LabelNo = this.FindTransform("LabelNo").getComponent(cc.Label);
    };
    ViewDialogNormal.prototype.OnShowView = function () {
    };
    ViewDialogNormal.prototype.OnHideView = function () {
    };
    ViewDialogNormal.prototype.OnFocus = function () {
    };
    ViewDialogNormal.prototype.OnDisFocus = function () {
    };
    ViewDialogNormal.prototype.OnDestroy = function () {
    };
    ViewDialogNormal.prototype.SetData = function (data) {
        this.data = data;
        this.LabelContent.string = this.data.content;
        this.LabelTitle.string = this.data.title;
        this.ButtonYes.node.active = this.data.showYes;
        this.ButtonNo.node.active = this.data.showNo;
        this.LabelYes.string = this.data.yesText;
        this.LabelNo.string = this.data.noText;
    };
    return ViewDialogNormal;
}(View_1.default));
exports.default = ViewDialogNormal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFZpZXdEaWFsb2dOb3JtYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDLHlDQUFvQztBQUVwQyw4Q0FBeUM7QUFHekM7SUFBOEMsb0NBQUk7SUFBbEQ7O0lBaUZBLENBQUM7SUFyRVUsa0NBQU8sR0FBZDtRQUFBLGlCQStCQztRQTdCRyxJQUFHLGdCQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pFLGNBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxVQUFDLE1BQU0sRUFBQyxJQUFJO1lBRTNDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUNoQztnQkFDSSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxjQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsVUFBQyxNQUFNLEVBQUMsSUFBSTtZQUUxQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDL0I7Z0JBQ0ksS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsY0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLFVBQUMsTUFBTSxFQUFDLElBQUk7WUFDN0MsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO0lBR0EsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO0lBR0EsQ0FBQztJQUVNLGtDQUFPLEdBQWQ7SUFHQSxDQUFDO0lBRU0scUNBQVUsR0FBakI7SUFHQSxDQUFDO0lBRU0sb0NBQVMsR0FBaEI7SUFHQSxDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLElBQWU7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxDQWpGNkMsY0FBSSxHQWlGakQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi4vLi4vTVZDRnJhbWV3b3JrL1ZpZXdcIjtcbmltcG9ydCB7IERpYWxvZ0RhdGEgfSBmcm9tIFwiLi4vLi4vVG9vbHMvRGlhbG9nXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvVXRpbFwiO1xuaW1wb3J0IGNjQyBmcm9tIFwiLi4vLi4vVG9vbHMvY2NDXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9HbG9iYWwvR2xvYmFsXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0RpYWxvZ05vcm1hbCBleHRlbmRzIFZpZXdcbntcbiAgICBwcml2YXRlIEJ1dHRvblllczpjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBCdXR0b25ObzpjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBCdXR0b25DbG9zZTpjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBMYWJlbFRpdGxlOmNjLkxhYmVsO1xuICAgIHB1YmxpYyBMYWJlbENvbnRlbnQ6Y2MuTGFiZWw7XG4gICAgcHJpdmF0ZSBMYWJlbFllczpjYy5MYWJlbDtcbiAgICBwcml2YXRlIExhYmVsTm86Y2MuTGFiZWw7XG5cbiAgICBwcml2YXRlIGRhdGE6RGlhbG9nRGF0YTtcblxuICAgIHB1YmxpYyBPbkF3YWtlKClcbiAgICB7XG4gICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy5sb2coXCJWaWV3VGVzdDEgT25Bd2FrZVwiKTtcbiAgICAgICAgdGhpcy5CdXR0b25ZZXMgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJCdXR0b25ZZXNcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIFV0aWwuU2V0Q2xpY2tBY3Rpb24odGhpcy5CdXR0b25ZZXMsKGJ1dHRvbixkYXRhKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS55ZXNDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS55ZXNDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5CdXR0b25ObyA9IHRoaXMuRmluZFRyYW5zZm9ybShcIkJ1dHRvbk5vXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBVdGlsLlNldENsaWNrQWN0aW9uKHRoaXMuQnV0dG9uTm8sKGJ1dHRvbixkYXRhKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5ub0NhbGxiYWNrICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm5vQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuQnV0dG9uQ2xvc2UgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJCdXR0b25DbG9zZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgVXRpbC5TZXRDbGlja0FjdGlvbih0aGlzLkJ1dHRvbkNsb3NlLChidXR0b24sZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5MYWJlbFRpdGxlID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiTGFiZWxUaXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLkxhYmVsQ29udGVudCA9IHRoaXMuRmluZFRyYW5zZm9ybShcIkxhYmVsQ29udGVudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuTGFiZWxZZXMgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJMYWJlbFllc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLkxhYmVsTm8gPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJMYWJlbE5vXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgfVxuXG4gICAgcHVibGljIE9uU2hvd1ZpZXcoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uSGlkZVZpZXcoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIE9uRm9jdXMoKVxuICAgIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBPbkRpc0ZvY3VzKClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBPbkRlc3Ryb3koKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIFNldERhdGEoZGF0YTpEaWFsb2dEYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5MYWJlbENvbnRlbnQuc3RyaW5nID0gdGhpcy5kYXRhLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuTGFiZWxUaXRsZS5zdHJpbmcgPSB0aGlzLmRhdGEudGl0bGU7XG4gICAgICAgIHRoaXMuQnV0dG9uWWVzLm5vZGUuYWN0aXZlID0gdGhpcy5kYXRhLnNob3dZZXM7XG4gICAgICAgIHRoaXMuQnV0dG9uTm8ubm9kZS5hY3RpdmUgPSB0aGlzLmRhdGEuc2hvd05vO1xuICAgICAgICB0aGlzLkxhYmVsWWVzLnN0cmluZyA9IHRoaXMuZGF0YS55ZXNUZXh0O1xuICAgICAgICB0aGlzLkxhYmVsTm8uc3RyaW5nID0gdGhpcy5kYXRhLm5vVGV4dDtcbiAgICB9XG5cbn1cbiJdfQ==