
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98660XUUQ1KZZVHK5s38O+J', 'Dialog');
// Scripts/Tools/Dialog.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCenter_1 = require("../MVCFramework/MessageCenter");
var MessageNames_1 = require("../Modules/MessageNames");
var Global_1 = require("../Global/Global");
var DialogData = /** @class */ (function () {
    function DialogData() {
        this.showYes = true;
        this.showNo = true;
        this.title = "";
        this.content = "";
        this.yesText = "确定";
        this.noText = "取消";
    }
    return DialogData;
}());
exports.DialogData = DialogData;
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.ShowOnlyYes = function (content, yesCallback) {
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowOnlyYes " + content);
        var data = new DialogData();
        data.showNo = false;
        data.content = content;
        data.yesCallback = yesCallback;
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowWithYesNo = function (content, yesCallBack, noCallback) {
        var data = new DialogData();
        data.showNo = true;
        data.content = content;
        data.yesCallback = yesCallBack;
        data.noCallback = noCallback;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowWithYesNo " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowWithYesNoContent = function (dialogType, title, content, yesText, noText, yesCallback, noCallback) {
        var data = new DialogData();
        data.title = title;
        data.showNo = true;
        data.content = content;
        data.yesText = yesText;
        data.noText = noText;
        data.yesCallback = yesCallback;
        data.noCallback = noCallback;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowWithYesNoContent " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowJustYesButton = function (dialogType, title, content, yesText, yesCallback) {
        var data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;
        Global_1.default;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowJustYesButton " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowYesNoItemButton = function (dialogType, title, content, yesText, noText, item, yesCallback, noCallback) {
        var data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.noText = noText;
        data.yesCallback = yesCallback;
        data.noCallback = noCallback;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowYesNoItemButton " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowNoItemButton = function (dialogType, title, content, yesText, itemList, yesCallback) {
        var data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowNoItemButton " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    Dialog.ShowYesCloseButton = function (dialogType, title, content, yesText, yesCallback) {
        var data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;
        if (Global_1.default.showLog == true)
            cc.error("Dialog ShowYesCloseButton " + content);
        MessageCenter_1.default.SendMessage(MessageNames_1.default.ShowDialog, data);
    };
    return Dialog;
}());
exports.default = Dialog;
var DialogType = /** @class */ (function () {
    function DialogType() {
    }
    DialogType.Normal = 1;
    return DialogType;
}());
exports.DialogType = DialogType;
var DialogStatus = /** @class */ (function () {
    function DialogStatus() {
    }
    DialogStatus.Title = "Title";
    DialogStatus.Content = "Content";
    DialogStatus.Yes = "Yes";
    DialogStatus.No = "No";
    DialogStatus.Close = "Close";
    DialogStatus.Item = "Item";
    return DialogStatus;
}());
exports.DialogStatus = DialogStatus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx3REFBbUQ7QUFDbkQsMkNBQXNDO0FBR3RDO0lBQUE7UUFFVyxZQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBR3BCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFBRCxpQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksZ0NBQVU7QUFZdkI7SUFBQTtJQWdHQSxDQUFDO0lBOUZpQixrQkFBVyxHQUF6QixVQUEwQixPQUFPLEVBQUMsV0FBVztRQUV6QyxJQUFHLGdCQUFNLENBQUMsT0FBTyxJQUFJLElBQUk7WUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLHVCQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFZLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFYSxvQkFBYSxHQUEzQixVQUE0QixPQUFPLEVBQUMsV0FBVyxFQUFDLFVBQVU7UUFFdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJ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QUMsQ0FBQztJQUU1RCxDQUFDO0lBQ0wsYUFBQztBQUFELENBaEdBLEFBZ0dDLElBQUE7O0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFEaUIsaUJBQU0sR0FBRyxDQUFDLENBQUM7SUFDN0IsaUJBQUM7Q0FIRCxBQUdDLElBQUE7QUFIWSxnQ0FBVTtBQUt2QjtJQUFBO0lBUUEsQ0FBQztJQU5pQixrQkFBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixvQkFBTyxHQUFHLFNBQVMsQ0FBQztJQUNwQixnQkFBRyxHQUFHLEtBQUssQ0FBQztJQUNaLGVBQUUsR0FBRyxJQUFJLENBQUM7SUFDVixrQkFBSyxHQUFHLE9BQU8sQ0FBQztJQUNoQixpQkFBSSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxtQkFBQztDQVJELEFBUUMsSUFBQTtBQVJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lc3NhZ2VDZW50ZXIgZnJvbSBcIi4uL01WQ0ZyYW1ld29yay9NZXNzYWdlQ2VudGVyXCI7XG5pbXBvcnQgTWVzc2FnZU5hbWVzIGZyb20gXCIuLi9Nb2R1bGVzL01lc3NhZ2VOYW1lc1wiO1xuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vR2xvYmFsL0dsb2JhbFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dEYXRhXG57XG4gICAgcHVibGljIHNob3dZZXM6Ym9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNob3dObzpib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgdGl0bGU6c3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgY29udGVudDpzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyB5ZXNDYWxsYmFjaztcbiAgICBwdWJsaWMgbm9DYWxsYmFjaztcbiAgICBwdWJsaWMgeWVzVGV4dCA9IFwi56Gu5a6aXCI7XG4gICAgcHVibGljIG5vVGV4dCA9IFwi5Y+W5raIXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ1xue1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvd09ubHlZZXMoY29udGVudCx5ZXNDYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy5lcnJvcihcIkRpYWxvZyBTaG93T25seVllcyBcIiArIGNvbnRlbnQpO1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBEaWFsb2dEYXRhKCk7XG4gICAgICAgIGRhdGEuc2hvd05vID0gZmFsc2U7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEueWVzQ2FsbGJhY2sgPSB5ZXNDYWxsYmFjaztcbiAgICAgICAgTWVzc2FnZUNlbnRlci5TZW5kTWVzc2FnZShNZXNzYWdlTmFtZXMuU2hvd0RpYWxvZyxkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNob3dXaXRoWWVzTm8oY29udGVudCx5ZXNDYWxsQmFjayxub0NhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSgpO1xuICAgICAgICBkYXRhLnNob3dObyA9IHRydWU7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEueWVzQ2FsbGJhY2sgPSB5ZXNDYWxsQmFjaztcbiAgICAgICAgZGF0YS5ub0NhbGxiYWNrID0gbm9DYWxsYmFjaztcbiAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgIGNjLmVycm9yKFwiRGlhbG9nIFNob3dXaXRoWWVzTm8gXCIgKyBjb250ZW50KTtcbiAgICAgICAgTWVzc2FnZUNlbnRlci5TZW5kTWVzc2FnZShNZXNzYWdlTmFtZXMuU2hvd0RpYWxvZyxkYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNob3dXaXRoWWVzTm9Db250ZW50KGRpYWxvZ1R5cGUsdGl0bGUsY29udGVudCx5ZXNUZXh0LG5vVGV4dCx5ZXNDYWxsYmFjayxub0NhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSgpO1xuICAgICAgICBkYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGRhdGEuc2hvd05vID0gdHJ1ZTtcbiAgICAgICAgZGF0YS5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgZGF0YS55ZXNUZXh0ID0geWVzVGV4dDtcbiAgICAgICAgZGF0YS5ub1RleHQgPSBub1RleHQ7XG4gICAgICAgIGRhdGEueWVzQ2FsbGJhY2sgPSB5ZXNDYWxsYmFjaztcbiAgICAgICAgZGF0YS5ub0NhbGxiYWNrID0gbm9DYWxsYmFjaztcbiAgICAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAgICAgICAgIGNjLmVycm9yKFwiRGlhbG9nIFNob3dXaXRoWWVzTm9Db250ZW50IFwiICsgY29udGVudCk7XG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLlNob3dEaWFsb2csZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTaG93SnVzdFllc0J1dHRvbihkaWFsb2dUeXBlLHRpdGxlLGNvbnRlbnQseWVzVGV4dCx5ZXNDYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IERpYWxvZ0RhdGEoKTtcbiAgICAgICAgZGF0YS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBkYXRhLnNob3dObyA9IGZhbHNlO1xuICAgICAgICBkYXRhLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBkYXRhLnllc1RleHQgPSB5ZXNUZXh0O1xuICAgICAgICBkYXRhLnllc0NhbGxiYWNrID0geWVzQ2FsbGJhY2s7R2xvYmFsXG4gICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy5lcnJvcihcIkRpYWxvZyBTaG93SnVzdFllc0J1dHRvbiBcIiArIGNvbnRlbnQpO1xuICAgICAgICBNZXNzYWdlQ2VudGVyLlNlbmRNZXNzYWdlKE1lc3NhZ2VOYW1lcy5TaG93RGlhbG9nLGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1llc05vSXRlbUJ1dHRvbihkaWFsb2dUeXBlLHRpdGxlLGNvbnRlbnQseWVzVGV4dCxub1RleHQsaXRlbSx5ZXNDYWxsYmFjayxub0NhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSgpO1xuICAgICAgICBkYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGRhdGEuc2hvd05vID0gZmFsc2U7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEueWVzVGV4dCA9IHllc1RleHQ7XG4gICAgICAgIGRhdGEubm9UZXh0ID0gbm9UZXh0O1xuICAgICAgICBkYXRhLnllc0NhbGxiYWNrID0geWVzQ2FsbGJhY2s7XG4gICAgICAgIGRhdGEubm9DYWxsYmFjayA9IG5vQ2FsbGJhY2s7XG4gICAgICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy5lcnJvcihcIkRpYWxvZyBTaG93WWVzTm9JdGVtQnV0dG9uIFwiICsgY29udGVudCk7XG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLlNob3dEaWFsb2csZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTaG93Tm9JdGVtQnV0dG9uKGRpYWxvZ1R5cGUsdGl0bGUsY29udGVudCx5ZXNUZXh0LGl0ZW1MaXN0LHllc0NhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSgpO1xuICAgICAgICBkYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGRhdGEuc2hvd05vID0gZmFsc2U7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEueWVzVGV4dCA9IHllc1RleHQ7XG4gICAgICAgIGRhdGEueWVzQ2FsbGJhY2sgPSB5ZXNDYWxsYmFjaztcblxuICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2MuZXJyb3IoXCJEaWFsb2cgU2hvd05vSXRlbUJ1dHRvbiBcIiArIGNvbnRlbnQpO1xuICAgICAgICBNZXNzYWdlQ2VudGVyLlNlbmRNZXNzYWdlKE1lc3NhZ2VOYW1lcy5TaG93RGlhbG9nLGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1llc0Nsb3NlQnV0dG9uKGRpYWxvZ1R5cGUsdGl0bGUsY29udGVudCx5ZXNUZXh0LHllc0NhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGlhbG9nRGF0YSgpO1xuICAgICAgICBkYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIGRhdGEuc2hvd05vID0gZmFsc2U7XG4gICAgICAgIGRhdGEuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGRhdGEueWVzVGV4dCA9IHllc1RleHQ7XG4gICAgICAgIGRhdGEueWVzQ2FsbGJhY2sgPSB5ZXNDYWxsYmFjaztcblxuICAgICAgICBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2MuZXJyb3IoXCJEaWFsb2cgU2hvd1llc0Nsb3NlQnV0dG9uIFwiICsgY29udGVudCk7XG4gICAgICAgIE1lc3NhZ2VDZW50ZXIuU2VuZE1lc3NhZ2UoTWVzc2FnZU5hbWVzLlNob3dEaWFsb2csZGF0YSk7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpYWxvZ1R5cGVcbntcbiAgICBwdWJsaWMgc3RhdGljIE5vcm1hbCA9IDE7XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dTdGF0dXNcbntcbiAgICBwdWJsaWMgc3RhdGljIFRpdGxlID0gXCJUaXRsZVwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ29udGVudCA9IFwiQ29udGVudFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgWWVzID0gXCJZZXNcIjtcbiAgICBwdWJsaWMgc3RhdGljIE5vID0gXCJOb1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ2xvc2UgPSBcIkNsb3NlXCI7XG4gICAgcHVibGljIHN0YXRpYyBJdGVtID0gXCJJdGVtXCI7XG59Il19