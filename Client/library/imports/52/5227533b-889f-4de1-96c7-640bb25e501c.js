"use strict";
cc._RF.push(module, '52275M7iJ9N4ZbHZAuyXlAc', 'ViewApp');
// Scripts/Modules/Views/ViewApp.ts

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
var Language_1 = require("../../Global/Language");
var ClipboardJS_1 = require("../../JsTool/ClipboardJS");
var View_1 = require("../../MVCFramework/View");
var Toast_1 = require("../../Tools/Toast");
var UploadIMG_1 = require("../../Tools/UploadIMG");
var BankItem_1 = require("./PayEn/BankItem");
var BounsItem_1 = require("./PayEn/BounsItem");
var ViewApp = /** @class */ (function (_super) {
    __extends(ViewApp, _super);
    function ViewApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCan = false;
        return _this;
        // public InitDataPicker() {
        //     this.date = this.date ? this.date : new Date();
        //     this.year = this.date.getFullYear();
        //     this.month = this.date.getMonth();
        //     this.day = this.date.getDate();
        //     this.pfgListDay = [];
        //     for (let i = 0; i < 31; ++i) {
        //         let node = cc.instantiate(this.pfbDay);
        //         node.parent = this.ndDays;
        //         this.pfgListDay.push(node);
        //     }
        //     this.setDate(this.year, this.month, this.day)
        // }
        // private setDate(year, month, day) {
        //     this.date = new Date(year, month, day);
        //     this.year = this.date.getFullYear();
        //     this.month = this.date.getMonth();
        //     this.day = this.date.getDate();
        //     let wth = this.FindTransform("ndWeek").width / 7;
        //     let labelWth = this.FindTransform("lbDay0").width;
        //     for (let i = 0; i < 7; i++) {
        //         let daylabel = this.FindTransform("lbDay" + i);
        //         daylabel.x = i * wth + 50 - 7 * wth / 2;
        //     }
        //     this.updateDate();
        // }
        // private onClickLeft() {
        //     if (this.month > 0) {
        //         this.month -= 1;
        //     } else {
        //         this.month = 11;
        //         this.year -= 1;
        //     }
        //     this.date.setFullYear(this.year);
        //     this.date.setMonth(this.month);
        //     this.updateDate();
        // }
        // private onClickRight() {
        //     if (this.month < 11) {
        //         this.month += 1;
        //     } else {
        //         this.month = 0;
        //         this.year += 1;
        //     }
        //     this.date.setFullYear(this.year);
        //     this.date.setMonth(this.month);
        //     this.updateDate();
        // }
        // private updateDate() {
        //     this.lbYearMonth.string = cc.js.formatStr("%s年%s月", this.year, this.month + 1);
        //     cc.log(cc.js.formatStr("%s年%s月", this.year, this.month + 1))
        //     let date = new Date(this.year, this.month, 0);
        //     let totalDays = date.getDate();
        //     let fromWeek = date.getDay();
        //     for (let i = 0; i < this.pfgListDay.length; ++i) {
        //         let node = this.pfgListDay[i];
        //         if (i < totalDays) {
        //             node.width = this.ndDays.width / 7;
        //             node.active = true;
        //             let index = fromWeek + i;
        //             let row = Math.floor(index / 7);
        //             let col = index % 7;
        //             let x = -(this.ndDays.width - node.width) * 0.5 + col * node.width;
        //             let y = (this.ndDays.height - node.height) * 0.5 - row * node.height;
        //             node.setPosition(x, y);
        //             let dayScript: UIItemDay = new UIItemDay();
        //             dayScript.Init(node, i, i + 1, this.day === i + 1, (selIndex, selDay) => {
        //                 this.day = selDay;
        //                 cc.log("selDay", selDay);
        //                 this.updateDate();
        //             });
        //         } else {
        //             node.active = false;
        //         }
        //     }
        // }
    }
    ViewApp.prototype.SetSelfPlayerID = function (playerId) {
        this.selfPlayerId = playerId;
    };
    ViewApp.prototype.OnAwake = function () {
        this.ContentPanel = this.FindTransform("ContentPanel").getComponent(cc.Widget);
        this.RechargeCom = this.FindTransform("RechargeCom");
        this.RechargeInfoCom = this.FindTransform("RechargeInfoCom");
        this.RechargeHistoryCom = this.FindTransform("RechargeHistoryCom");
        this.editbox_imput = this.FindTransform("editbox_imput").getComponent(cc.EditBox);
        this.editbox_imput_beizhu = this.FindTransform("editbox_imputbeizhu").getComponent(cc.EditBox);
        this.bankItem = this.FindTransform("bankItem");
        this.BonusItem = this.FindTransform("Bouns");
        this.BankList = this.FindTransform("BankList").getChildByName("view").getChildByName("content");
        this.BonusList = this.FindTransform("BonusList").getChildByName("view").getChildByName("content");
        this.BtnUpload = this.FindTransform("BtnUpload");
        this.BtnSubmit_info = this.FindTransform("BtnSubmit_info");
        this.ndDays = this.FindTransform("ndDays");
        this.pfbDay = this.FindTransform("UIItemDay");
        this.lbYearMonth = this.FindTransform("lbYearMonth").getComponent(cc.Label);
        this.txt_info1 = this.FindTransform("txt_info1").getChildByName("text").getComponent(cc.Label);
        this.txt_info2 = this.FindTransform("txt_info2").getChildByName("text").getComponent(cc.Label);
        this.txt_info3 = this.FindTransform("txt_info3").getChildByName("text").getComponent(cc.Label);
        this.txt_info4 = this.FindTransform("txt_info4").getChildByName("text").getComponent(cc.Label);
        this.txt_info5 = this.FindTransform("txt_info5").getChildByName("text").getComponent(cc.Label);
        this.txt_info6 = this.FindTransform("txt_info6").getChildByName("text").getComponent(cc.Label);
        // Util.SetClickAction(this.FindTransform("btnLeft").getComponent(cc.Button), () => {
        //     this.onClickLeft();
        // })
        // Util.SetClickAction(this.FindTransform("btnRight").getComponent(cc.Button), () => {
        //     this.onClickRight();
        // })
        this.AdaptPhone();
    };
    ViewApp.prototype.AdaptPhone = function () {
        // iPhone刘海适配
        if (cc.sys.os == cc.sys.OS_IOS) {
            var screen = cc.view.getFrameSize();
            var screenRate = screen.height / screen.width;
            if (screenRate >= 1.99) {
                this.ContentPanel.top = 50;
            }
        }
    };
    //添加复制按钮
    ViewApp.prototype.addBtnCopyClick = function () {
        var _this = this;
        this.SetOnClick("btncopy1", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info1.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy2", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info2.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy3", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info3.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy4", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info4.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy5", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info5.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy6", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info6.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
        this.SetOnClick("btncopy7", function () {
            ClipboardJS_1.ClipboardJS.Copy(_this.txt_info7.string);
            Toast_1.default.Show(Language_1.default.CopySuccess);
        });
    };
    //充值金额获取
    ViewApp.prototype.GetEditBoxStr = function () {
        return this.editbox_imput.string;
    };
    ViewApp.prototype.GetEditBoxStrBeiZhu = function () {
        return this.editbox_imput_beizhu.string;
    };
    ViewApp.prototype.ShowComByType = function (type) {
        switch (type) {
            case 1:
                this.RechargeCom.active = true;
                this.RechargeInfoCom.active = false;
                this.RechargeHistoryCom.active = false;
                break;
            case 2:
                this.RechargeCom.active = false;
                this.RechargeInfoCom.active = true;
                this.RechargeHistoryCom.active = false;
                this.BtnUpload.active = true;
                break;
            case 3:
                this.RechargeCom.active = false;
                this.RechargeInfoCom.active = false;
                this.RechargeHistoryCom.active = true;
                break;
        }
    };
    //显示图片
    ViewApp.prototype.ShowImageUpload = function (data) {
        var ImageTest = this.FindTransform("ImgTest").getComponent(cc.Sprite);
        UploadIMG_1.default.showImage(data, ImageTest);
        this.BtnUpload.active = false;
    };
    ViewApp.prototype.UpdataPage = function (data) {
        //更新银行列表
        if (this.BankItems && this.BankItems.length > 0) {
            for (var i = 0; i < this.BankItems.length; i++) {
                var BanKItem_1 = this.BankItems[i];
                BanKItem_1.RemoveSelf();
            }
        }
        this.BankItems = [];
        //-------------------------
        for (var i = 0; i < data.bankTypes.length; i++) {
            var bankitem = cc.instantiate(this.bankItem);
            var _BankItem = new BankItem_1.default();
            _BankItem.Init(bankitem, i, function (banktype) {
                cc.log("bnakType" + banktype);
            });
            bankitem.parent = this.BankList;
            this.BankItems.push(_BankItem);
        }
        //更新Bonus列表
        if (this.BonusItems && this.BonusItems.length > 0) {
            for (var i = 0; i < this.BonusItems.length; i++) {
                var _BonusItem = this.BonusItems[i];
                _BonusItem.RemoveSelf();
            }
        }
        this.BonusItems = [];
        //---------------------------------
        for (var i = 0; i < 6; i++) {
            var bonusitem = cc.instantiate(this.BonusItem);
            var _BonusItem = new BounsItem_1.default();
            _BonusItem.Init(bonusitem, i, function (bounsNum) {
                cc.log("bounsNum" + bounsNum);
            });
            bonusitem.parent = this.BonusList;
            this.BonusItems.push(_BonusItem);
        }
    };
    ViewApp.prototype.ShowSubmitInfo = function (data) {
        this.txt_info1.string = data.name;
        this.txt_info2.string = data.cardNo;
        this.txt_info3.string = data.bankName;
        this.txt_info4.string = data.bankBranchName;
        this.txt_info5.string = data.depositAmount.toString();
        this.txt_info6.string = data.orderNo;
    };
    ViewApp.prototype.OnShowView = function () {
    };
    ViewApp.prototype.OnHideView = function () {
    };
    ViewApp.prototype.OnDestroy = function () {
    };
    ViewApp.prototype.SetEnableButton = function (bool) {
        this.isCan = bool;
    };
    ViewApp.prototype.GetEnableButton = function () {
        return this.isCan;
    };
    return ViewApp;
}(View_1.default));
exports.default = ViewApp;

cc._RF.pop();