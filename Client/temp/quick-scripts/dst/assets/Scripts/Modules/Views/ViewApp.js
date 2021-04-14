
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/Views/ViewApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld3NcXFZpZXdBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLHdEQUF1RDtBQUV2RCxnREFBMkM7QUFFM0MsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUU5Qyw2Q0FBd0M7QUFDeEMsK0NBQTBDO0FBSTFDO0lBQXFDLDJCQUFJO0lBQXpDO1FBQUEscUVBNlRDO1FBN1NXLFdBQUssR0FBWSxLQUFLLENBQUM7O1FBNk4vQiw0QkFBNEI7UUFDNUIsc0RBQXNEO1FBQ3RELDJDQUEyQztRQUMzQyx5Q0FBeUM7UUFDekMsc0NBQXNDO1FBQ3RDLDRCQUE0QjtRQUM1QixxQ0FBcUM7UUFDckMsa0RBQWtEO1FBQ2xELHFDQUFxQztRQUNyQyxzQ0FBc0M7UUFDdEMsUUFBUTtRQUNSLG9EQUFvRDtRQUNwRCxJQUFJO1FBQ0osc0NBQXNDO1FBQ3RDLDhDQUE4QztRQUM5QywyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLHNDQUFzQztRQUN0Qyx3REFBd0Q7UUFDeEQseURBQXlEO1FBQ3pELG9DQUFvQztRQUNwQywwREFBMEQ7UUFDMUQsbURBQW1EO1FBQ25ELFFBQVE7UUFFUix5QkFBeUI7UUFDekIsSUFBSTtRQUNKLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUix3Q0FBd0M7UUFDeEMsc0NBQXNDO1FBQ3RDLHlCQUF5QjtRQUN6QixJQUFJO1FBRUosMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsUUFBUTtRQUNSLHdDQUF3QztRQUN4QyxzQ0FBc0M7UUFDdEMseUJBQXlCO1FBQ3pCLElBQUk7UUFDSix5QkFBeUI7UUFDekIsc0ZBQXNGO1FBQ3RGLG1FQUFtRTtRQUNuRSxxREFBcUQ7UUFDckQsc0NBQXNDO1FBQ3RDLG9DQUFvQztRQUNwQyx5REFBeUQ7UUFDekQseUNBQXlDO1FBQ3pDLCtCQUErQjtRQUMvQixrREFBa0Q7UUFDbEQsa0NBQWtDO1FBQ2xDLHdDQUF3QztRQUN4QywrQ0FBK0M7UUFDL0MsbUNBQW1DO1FBQ25DLGtGQUFrRjtRQUNsRixvRkFBb0Y7UUFDcEYsc0NBQXNDO1FBQ3RDLDBEQUEwRDtRQUUxRCx5RkFBeUY7UUFDekYscUNBQXFDO1FBQ3JDLDRDQUE0QztRQUM1QyxxQ0FBcUM7UUFDckMsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFFBQVE7UUFDUixJQUFJO0lBRVIsQ0FBQztJQTVRVSxpQ0FBZSxHQUF0QixVQUF1QixRQUFRO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx5QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHL0YscUZBQXFGO1FBQ3JGLDBCQUEwQjtRQUMxQixLQUFLO1FBQ0wsc0ZBQXNGO1FBQ3RGLDJCQUEyQjtRQUMzQixLQUFLO1FBRUwsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw0QkFBVSxHQUFsQjtRQUNJLGFBQWE7UUFDYixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzlDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsUUFBUTtJQUNELGlDQUFlLEdBQXRCO1FBQUEsaUJBK0JDO1FBOUJHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3hCLHlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsZUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDeEIseUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxlQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUN4Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLGVBQUssQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3hCLHlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsZUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFDeEIseUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxlQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUN4Qix5QkFBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLGVBQUssQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3hCLHlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsZUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBR04sQ0FBQztJQUNELFFBQVE7SUFDRCwrQkFBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUNNLHFDQUFtQixHQUExQjtRQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBQ00sK0JBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxNQUFNO1NBQ2I7SUFFTCxDQUFDO0lBQ0QsTUFBTTtJQUNDLGlDQUFlLEdBQXRCLFVBQXVCLElBQVk7UUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLDRCQUFVLEdBQWpCLFVBQWtCLElBQWtCO1FBQ2hDLFFBQVE7UUFDUixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxVQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsVUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3pCO1NBQ0o7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQiwyQkFBMkI7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksUUFBUSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksU0FBUyxHQUFhLElBQUksa0JBQVEsRUFBRSxDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxVQUFDLFFBQWdCO2dCQUN6QyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUNELFdBQVc7UUFHWCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzNCO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQ0FBbUM7UUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLFNBQVMsR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4RCxJQUFJLFVBQVUsR0FBYyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztZQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsVUFBQyxRQUFnQjtnQkFDM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUE7WUFDRixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBQ00sZ0NBQWMsR0FBckIsVUFBc0IsSUFBc0I7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO0lBRUEsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO0lBRUEsQ0FBQztJQUVNLDJCQUFTLEdBQWhCO0lBR0EsQ0FBQztJQUVNLGlDQUFlLEdBQXRCLFVBQXVCLElBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNNLGlDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFtRkwsY0FBQztBQUFELENBN1RBLEFBNlRDLENBN1RvQyxjQUFJLEdBNlR4QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYW5ndWFnZSBmcm9tIFwiLi4vLi4vR2xvYmFsL0xhbmd1YWdlXCI7XHJcbmltcG9ydCB7IENsaXBib2FyZEpTIH0gZnJvbSBcIi4uLy4uL0pzVG9vbC9DbGlwYm9hcmRKU1wiO1xyXG5pbXBvcnQgeyBMYWJlbEZ1bmMgfSBmcm9tIFwiLi4vLi4vSnNUb29sL0xhYmVsRnVuY1wiO1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vLi4vTVZDRnJhbWV3b3JrL1ZpZXdcIjtcclxuaW1wb3J0IHsgQmFua1Byb3h5SW5mbywgQmFua1R5cGUsIFByb3h5SW5mb1JzcCwgU3VibWl0RGVwb3NpdFJzcCB9IGZyb20gXCIuLi8uLi9Qcm90b3MvQmFua1Byb3h5XCI7XHJcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi4vLi4vVG9vbHMvVG9hc3RcIjtcclxuaW1wb3J0IFVwbG9hZElNRyBmcm9tIFwiLi4vLi4vVG9vbHMvVXBsb2FkSU1HXCI7XHJcbmltcG9ydCBVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9VdGlsXCI7XHJcbmltcG9ydCBCYW5LSXRlbSBmcm9tIFwiLi9QYXlFbi9CYW5rSXRlbVwiO1xyXG5pbXBvcnQgQm91bnNJdGVtIGZyb20gXCIuL1BheUVuL0JvdW5zSXRlbVwiO1xyXG5pbXBvcnQgVUlJdGVtRGF5IGZyb20gXCIuL1BheUVuL1VJSXRlbURheVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdBcHAgZXh0ZW5kcyBWaWV3IHtcclxuICAgIENvbnRlbnRQYW5lbDogY2MuV2lkZ2V0O1xyXG5cclxuICAgIHNlbGZQbGF5ZXJJZDogc3RyaW5nO1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBSZWNoYXJnZUNvbTogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgUmVjaGFyZ2VJbmZvQ29tOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBSZWNoYXJnZUhpc3RvcnlDb206IGNjLk5vZGU7XHJcblxyXG4gICAgcHJpdmF0ZSBCYW5rTGlzdDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgQm9udXNMaXN0OiBjYy5Ob2RlO1xyXG4gICAgLy9idXR0b25cclxuICAgIHByaXZhdGUgQnRuVXBsb2FkOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBCdG5TdWJtaXRfaW5mbzogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgaXNDYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvL2VkaXRCb3hcclxuICAgIHByaXZhdGUgZWRpdGJveF9pbXB1dDogY2MuRWRpdEJveDtcclxuICAgIHByaXZhdGUgZWRpdGJveF9pbXB1dF9iZWl6aHU6IGNjLkVkaXRCb3g7XHJcblxyXG4gICAgLy90eHRfaW5mbzFcclxuICAgIHByaXZhdGUgdHh0X2luZm8xOiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm8yOiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm8zOiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm80OiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm81OiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm82OiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgdHh0X2luZm83OiBjYy5MYWJlbDtcclxuXHJcbiAgICAvL3ByZWZhYmVcclxuICAgIHByaXZhdGUgYmFua0l0ZW06IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIEJvbnVzSXRlbTogY2MuTm9kZTtcclxuICAgIC8vQXJyYXlcclxuICAgIHByaXZhdGUgQmFua0l0ZW1zOiBCYW5LSXRlbVtdO1xyXG4gICAgcHJpdmF0ZSBCb251c0l0ZW1zOiBCb3Vuc0l0ZW1bXTtcclxuXHJcbiAgICAvL2RhdGVcclxuICAgIHByaXZhdGUgZGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgeWVhcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtb250aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkYXk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcGZnTGlzdERheTogY2MuTm9kZVtdO1xyXG4gICAgcHJpdmF0ZSBuZERheXM6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIHBmYkRheTogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgbGJZZWFyTW9udGg6IGNjLkxhYmVsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0U2VsZlBsYXllcklEKHBsYXllcklkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxmUGxheWVySWQgPSBwbGF5ZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgT25Bd2FrZSgpIHtcclxuICAgICAgICB0aGlzLkNvbnRlbnRQYW5lbCA9IHRoaXMuRmluZFRyYW5zZm9ybShcIkNvbnRlbnRQYW5lbFwiKS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICB0aGlzLlJlY2hhcmdlQ29tID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiUmVjaGFyZ2VDb21cIik7XHJcbiAgICAgICAgdGhpcy5SZWNoYXJnZUluZm9Db20gPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJSZWNoYXJnZUluZm9Db21cIik7XHJcbiAgICAgICAgdGhpcy5SZWNoYXJnZUhpc3RvcnlDb20gPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJSZWNoYXJnZUhpc3RvcnlDb21cIik7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94X2ltcHV0ID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiZWRpdGJveF9pbXB1dFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgdGhpcy5lZGl0Ym94X2ltcHV0X2JlaXpodSA9IHRoaXMuRmluZFRyYW5zZm9ybShcImVkaXRib3hfaW1wdXRiZWl6aHVcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXHJcbiAgICAgICAgdGhpcy5iYW5rSXRlbSA9IHRoaXMuRmluZFRyYW5zZm9ybShcImJhbmtJdGVtXCIpO1xyXG4gICAgICAgIHRoaXMuQm9udXNJdGVtID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiQm91bnNcIilcclxuICAgICAgICB0aGlzLkJhbmtMaXN0ID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiQmFua0xpc3RcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcclxuICAgICAgICB0aGlzLkJvbnVzTGlzdCA9IHRoaXMuRmluZFRyYW5zZm9ybShcIkJvbnVzTGlzdFwiKS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xyXG5cclxuICAgICAgICB0aGlzLkJ0blVwbG9hZCA9IHRoaXMuRmluZFRyYW5zZm9ybShcIkJ0blVwbG9hZFwiKTtcclxuICAgICAgICB0aGlzLkJ0blN1Ym1pdF9pbmZvID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwiQnRuU3VibWl0X2luZm9cIik7XHJcbiAgICAgICAgdGhpcy5uZERheXMgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJuZERheXNcIik7XHJcbiAgICAgICAgdGhpcy5wZmJEYXkgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJVSUl0ZW1EYXlcIik7XHJcbiAgICAgICAgdGhpcy5sYlllYXJNb250aCA9IHRoaXMuRmluZFRyYW5zZm9ybShcImxiWWVhck1vbnRoXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMudHh0X2luZm8xID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm8xXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm8yID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm8yXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm8zID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm8zXCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm80ID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm80XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm81ID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm81XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm82ID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwidHh0X2luZm82XCIpLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gVXRpbC5TZXRDbGlja0FjdGlvbih0aGlzLkZpbmRUcmFuc2Zvcm0oXCJidG5MZWZ0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub25DbGlja0xlZnQoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIFV0aWwuU2V0Q2xpY2tBY3Rpb24odGhpcy5GaW5kVHJhbnNmb3JtKFwiYnRuUmlnaHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5vbkNsaWNrUmlnaHQoKTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICB0aGlzLkFkYXB0UGhvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEFkYXB0UGhvbmUoKSB7XHJcbiAgICAgICAgLy8gaVBob25l5YiY5rW36YCC6YWNXHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW4gPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuUmF0ZSA9IHNjcmVlbi5oZWlnaHQgLyBzY3JlZW4ud2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChzY3JlZW5SYXRlID49IDEuOTkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29udGVudFBhbmVsLnRvcCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/mt7vliqDlpI3liLbmjInpkq5cclxuICAgIHB1YmxpYyBhZGRCdG5Db3B5Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm8xLnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm8yLnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm8zLnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm80LnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm81LnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm82LnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5TZXRPbkNsaWNrKFwiYnRuY29weTdcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBDbGlwYm9hcmRKUy5Db3B5KHRoaXMudHh0X2luZm83LnN0cmluZyk7XHJcbiAgICAgICAgICAgIFRvYXN0LlNob3coTGFuZ3VhZ2UuQ29weVN1Y2Nlc3MpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuICAgIC8v5YWF5YC86YeR6aKd6I635Y+WXHJcbiAgICBwdWJsaWMgR2V0RWRpdEJveFN0cigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRib3hfaW1wdXQuc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldEVkaXRCb3hTdHJCZWlaaHUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0Ym94X2ltcHV0X2JlaXpodS5zdHJpbmc7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2hvd0NvbUJ5VHlwZSh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWNoYXJnZUNvbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWNoYXJnZUluZm9Db20uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2hhcmdlSGlzdG9yeUNvbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2hhcmdlQ29tLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWNoYXJnZUluZm9Db20uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVjaGFyZ2VIaXN0b3J5Q29tLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CdG5VcGxvYWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2hhcmdlQ29tLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWNoYXJnZUluZm9Db20uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2hhcmdlSGlzdG9yeUNvbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8v5pi+56S65Zu+54mHXHJcbiAgICBwdWJsaWMgU2hvd0ltYWdlVXBsb2FkKGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBJbWFnZVRlc3QgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJJbWdUZXN0XCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIFVwbG9hZElNRy5zaG93SW1hZ2UoZGF0YSwgSW1hZ2VUZXN0KTtcclxuICAgICAgICB0aGlzLkJ0blVwbG9hZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBVcGRhdGFQYWdlKGRhdGE6IFByb3h5SW5mb1JzcCkge1xyXG4gICAgICAgIC8v5pu05paw6ZO26KGM5YiX6KGoXHJcbiAgICAgICAgaWYgKHRoaXMuQmFua0l0ZW1zICYmIHRoaXMuQmFua0l0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJhbmtJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IEJhbktJdGVtID0gdGhpcy5CYW5rSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBCYW5LSXRlbS5SZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5CYW5rSXRlbXMgPSBbXTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuYmFua1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiYW5raXRlbTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFua0l0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgX0JhbmtJdGVtOiBCYW5LSXRlbSA9IG5ldyBCYW5LSXRlbSgpO1xyXG4gICAgICAgICAgICBfQmFua0l0ZW0uSW5pdChiYW5raXRlbSwgaSwgKGJhbmt0eXBlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImJuYWtUeXBlXCIgKyBiYW5rdHlwZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJhbmtpdGVtLnBhcmVudCA9IHRoaXMuQmFua0xpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuQmFua0l0ZW1zLnB1c2goX0JhbmtJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7TmlrBCb251c+WIl+ihqFxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuQm9udXNJdGVtcyAmJiB0aGlzLkJvbnVzSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQm9udXNJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9Cb251c0l0ZW0gPSB0aGlzLkJvbnVzSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBfQm9udXNJdGVtLlJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkJvbnVzSXRlbXMgPSBbXTtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9udXNpdGVtOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb251c0l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IF9Cb251c0l0ZW06IEJvdW5zSXRlbSA9IG5ldyBCb3Vuc0l0ZW0oKTtcclxuICAgICAgICAgICAgX0JvbnVzSXRlbS5Jbml0KGJvbnVzaXRlbSwgaSwgKGJvdW5zTnVtOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcImJvdW5zTnVtXCIgKyBib3Vuc051bSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJvbnVzaXRlbS5wYXJlbnQgPSB0aGlzLkJvbnVzTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5Cb251c0l0ZW1zLnB1c2goX0JvbnVzSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFNob3dTdWJtaXRJbmZvKGRhdGE6IFN1Ym1pdERlcG9zaXRSc3ApIHtcclxuICAgICAgICB0aGlzLnR4dF9pbmZvMS5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eHRfaW5mbzIuc3RyaW5nID0gZGF0YS5jYXJkTm87XHJcbiAgICAgICAgdGhpcy50eHRfaW5mbzMuc3RyaW5nID0gZGF0YS5iYW5rTmFtZTtcclxuICAgICAgICB0aGlzLnR4dF9pbmZvNC5zdHJpbmcgPSBkYXRhLmJhbmtCcmFuY2hOYW1lO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm81LnN0cmluZyA9IGRhdGEuZGVwb3NpdEFtb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudHh0X2luZm82LnN0cmluZyA9IGRhdGEub3JkZXJObztcclxuICAgIH1cclxuICAgIHB1YmxpYyBPblNob3dWaWV3KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgT25IaWRlVmlldygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE9uRGVzdHJveSgpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRFbmFibGVCdXR0b24oYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNDYW4gPSBib29sO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldEVuYWJsZUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0NhbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gcHVibGljIEluaXREYXRhUGlja2VyKCkge1xyXG4gICAgLy8gICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZSA/IHRoaXMuZGF0ZSA6IG5ldyBEYXRlKCk7XHJcbiAgICAvLyAgICAgdGhpcy55ZWFyID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyAgICAgdGhpcy5tb250aCA9IHRoaXMuZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgLy8gICAgIHRoaXMuZGF5ID0gdGhpcy5kYXRlLmdldERhdGUoKTtcclxuICAgIC8vICAgICB0aGlzLnBmZ0xpc3REYXkgPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMxOyArK2kpIHtcclxuICAgIC8vICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmYkRheSk7XHJcbiAgICAvLyAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5uZERheXM7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGZnTGlzdERheS5wdXNoKG5vZGUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnNldERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCB0aGlzLmRheSlcclxuICAgIC8vIH1cclxuICAgIC8vIHByaXZhdGUgc2V0RGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB7XHJcbiAgICAvLyAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XHJcbiAgICAvLyAgICAgdGhpcy55ZWFyID0gdGhpcy5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAvLyAgICAgdGhpcy5tb250aCA9IHRoaXMuZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgLy8gICAgIHRoaXMuZGF5ID0gdGhpcy5kYXRlLmdldERhdGUoKTtcclxuICAgIC8vICAgICBsZXQgd3RoID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwibmRXZWVrXCIpLndpZHRoIC8gNztcclxuICAgIC8vICAgICBsZXQgbGFiZWxXdGggPSB0aGlzLkZpbmRUcmFuc2Zvcm0oXCJsYkRheTBcIikud2lkdGg7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIC8vICAgICAgICAgbGV0IGRheWxhYmVsID0gdGhpcy5GaW5kVHJhbnNmb3JtKFwibGJEYXlcIiArIGkpO1xyXG4gICAgLy8gICAgICAgICBkYXlsYWJlbC54ID0gaSAqIHd0aCArIDUwIC0gNyAqIHd0aCAvIDI7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICB0aGlzLnVwZGF0ZURhdGUoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHByaXZhdGUgb25DbGlja0xlZnQoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubW9udGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9udGggLT0gMTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vbnRoID0gMTE7XHJcbiAgICAvLyAgICAgICAgIHRoaXMueWVhciAtPSAxO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIodGhpcy55ZWFyKTtcclxuICAgIC8vICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5tb250aCk7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVEYXRlKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBvbkNsaWNrUmlnaHQoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubW9udGggPCAxMSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vbnRoICs9IDE7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5tb250aCA9IDA7XHJcbiAgICAvLyAgICAgICAgIHRoaXMueWVhciArPSAxO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmRhdGUuc2V0RnVsbFllYXIodGhpcy55ZWFyKTtcclxuICAgIC8vICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5tb250aCk7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVEYXRlKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwcml2YXRlIHVwZGF0ZURhdGUoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5sYlllYXJNb250aC5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCIlc+W5tCVz5pyIXCIsIHRoaXMueWVhciwgdGhpcy5tb250aCArIDEpO1xyXG4gICAgLy8gICAgIGNjLmxvZyhjYy5qcy5mb3JtYXRTdHIoXCIlc+W5tCVz5pyIXCIsIHRoaXMueWVhciwgdGhpcy5tb250aCArIDEpKVxyXG4gICAgLy8gICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCAwKTtcclxuICAgIC8vICAgICBsZXQgdG90YWxEYXlzID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAvLyAgICAgbGV0IGZyb21XZWVrID0gZGF0ZS5nZXREYXkoKTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGZnTGlzdERheS5sZW5ndGg7ICsraSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgbm9kZSA9IHRoaXMucGZnTGlzdERheVtpXTtcclxuICAgIC8vICAgICAgICAgaWYgKGkgPCB0b3RhbERheXMpIHtcclxuICAgIC8vICAgICAgICAgICAgIG5vZGUud2lkdGggPSB0aGlzLm5kRGF5cy53aWR0aCAvIDc7XHJcbiAgICAvLyAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgaW5kZXggPSBmcm9tV2VlayArIGk7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDcpO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGNvbCA9IGluZGV4ICUgNztcclxuICAgIC8vICAgICAgICAgICAgIGxldCB4ID0gLSh0aGlzLm5kRGF5cy53aWR0aCAtIG5vZGUud2lkdGgpICogMC41ICsgY29sICogbm9kZS53aWR0aDtcclxuICAgIC8vICAgICAgICAgICAgIGxldCB5ID0gKHRoaXMubmREYXlzLmhlaWdodCAtIG5vZGUuaGVpZ2h0KSAqIDAuNSAtIHJvdyAqIG5vZGUuaGVpZ2h0O1xyXG4gICAgLy8gICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBkYXlTY3JpcHQ6IFVJSXRlbURheSA9IG5ldyBVSUl0ZW1EYXkoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBkYXlTY3JpcHQuSW5pdChub2RlLCBpLCBpICsgMSwgdGhpcy5kYXkgPT09IGkgKyAxLCAoc2VsSW5kZXgsIHNlbERheSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZGF5ID0gc2VsRGF5O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLmxvZyhcInNlbERheVwiLCBzZWxEYXkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufVxyXG4iXX0=