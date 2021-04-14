"use strict";
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