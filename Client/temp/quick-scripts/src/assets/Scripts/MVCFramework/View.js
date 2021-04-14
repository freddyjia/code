"use strict";
cc._RF.push(module, '21d8fn7U5JPb5vS4rQpjoaJ', 'View');
// Scripts/MVCFramework/View.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../Tools/Util");
var ViewConfigs_1 = require("../Modules/ViewConfigs");
var View = /** @class */ (function () {
    function View() {
        this.removeMaskClick = false;
        this.isShow = false;
        this.isLoadingAsync = false;
        // public shouldShowLoading:boolean = false;
        this.clickFuncs = {};
        this.buttonCustomDatas = {};
        this.buttonAudios = {};
        this.showCallback = null;
        this.hideCallback = null;
        this.transformCache = {};
        this.name = "";
        this.layer = ViewConfigs_1.LayerOrderNum.UINormal;
        this.isFocus = false;
        this.onHideViewCallback = null;
        this.onShowViewCallback = null;
        this.dependentRes = [];
        //当show调用的时候，如果资源加载期间，调用了hide，应该在show成功后，把view hide掉。
        this.shouldShow = true;
    }
    View.prototype.Init = function () {
        this.removeMaskClick = false;
        this.isShow = false;
        this.clickFuncs = {};
        this.buttonAudios = {};
        this.buttonCustomDatas = {};
    };
    //框架调用，上层请勿调用
    View.prototype.SetButtonClicks = function () {
        for (var btnName in this.clickFuncs) {
            var tr = this.FindTransform(btnName);
            if (tr == null) {
                cc.error("SetButtonClicks 不存在 btnName " + btnName + " 按钮，添加按钮事件失败 ");
            }
            else {
                var button = tr.getComponent(cc.Button);
                if (button == null) {
                    cc.error("btnName " + btnName + " 没有附加Button组件，添加按钮事件失败 ");
                }
                else {
                    Util_1.default.SetClickAction(button, this.clickFuncs[btnName], this.buttonAudios[btnName], this.buttonCustomDatas[btnName]);
                }
            }
        }
    };
    ////以下是上层可调用的 customData和audioName是可选参数，可不填
    View.prototype.SetOnClick = function (buttonName, callback, audioName, customData) {
        this.clickFuncs[buttonName] = callback;
        this.buttonAudios[buttonName] = audioName;
        this.buttonCustomDatas[buttonName] = customData;
    };
    View.prototype.FindTransform = function (name) {
        if (this.transformCache[name] != null) {
            return this.transformCache[name];
        }
        else {
            cc.error("FindTransform 不存在transformName " + name);
            return null;
        }
    };
    View.prototype.RemoveMaskClick = function () {
        this.removeMaskClick = true;
    };
    //加载依赖资源，全部加载完才会回调show callback
    View.prototype.AddDependentRes = function (resPath) {
        this.dependentRes.push(resPath);
    };
    //Show是异步加载资源，需要callback机制
    View.prototype.Show = function (successCallback, failCallback) {
        var _this = this;
        if (successCallback === void 0) { successCallback = null; }
        if (failCallback === void 0) { failCallback = null; }
        this.shouldShow = true;
        if (this.isShow == true) {
            if (successCallback != null)
                successCallback();
            return;
        }
        if (this.isLoadingAsync == true) {
            cc.error("view " + name + " 资源异步请求中，请勿重复调用");
            return;
        }
        this.showCallback(function (success, errMsg) {
            if (success == true) {
                if (successCallback != null) {
                    successCallback();
                }
                if (_this.shouldShow == false) {
                    _this.Hide();
                }
            }
            else {
                if (failCallback != null) {
                    failCallback(errMsg);
                }
            }
        });
    };
    View.prototype.Hide = function () {
        this.shouldShow = false;
        if (this.isShow == false) {
            return;
        }
        this.hideCallback();
    };
    //以下是重写函数
    View.prototype.OnAwake = function () {
    };
    //显示的时候回调
    View.prototype.OnShowView = function () {
    };
    //隐藏的时候回调
    View.prototype.OnHideView = function () {
    };
    //当界面去到最前的时候回调
    View.prototype.OnFocus = function () {
    };
    //当界面从最前切换回非最前的时候回调
    View.prototype.OnDisFocus = function () {
    };
    //当界面销毁的时候回调
    View.prototype.OnDestroy = function () {
    };
    return View;
}());
exports.default = View;

cc._RF.pop();