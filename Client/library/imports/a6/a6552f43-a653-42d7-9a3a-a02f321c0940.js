"use strict";
cc._RF.push(module, 'a65529DplNC15o6oC8yHAlA', 'Util');
// Scripts/Tools/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonListener_1 = require("../Components/ButtonListener");
var PageViewListener_1 = require("../Components/PageViewListener");
var ScrollViewListener_1 = require("../Components/ScrollViewListener");
var SliderListener_1 = require("../Components/SliderListener");
var EditBoxListener_1 = require("../Components/EditBoxListener");
var TimerManager_1 = require("../Components/TimerManager");
var JSOpenUrl_1 = require("../JsTool/JSOpenUrl");
var ccC_1 = require("./ccC");
var NodeUtil_1 = require("./NodeUtil");
// import Global from "../Global/Global";
var Util = /** @class */ (function () {
    function Util() {
    }
    //customData,audioName 是可选参数，可不填.   customData只能填string类型
    Util.SetClickAction = function (button, callback, audioName, customData) {
        var buttonListener = button.getComponent(ButtonListener_1.default);
        if (buttonListener == null) {
            buttonListener = button.addComponent(ButtonListener_1.default);
        }
        //TODO:设置音效相关 audioName
        buttonListener.Init();
        buttonListener.SetData(customData);
        buttonListener.SetAudioName(audioName);
        buttonListener.SetOnClickCallback(callback);
    };
    Util.SetPageViewScrollEvent = function (pageView, callback) {
        var pageViewListener = pageView.getComponent(PageViewListener_1.default);
        if (pageViewListener == null)
            pageViewListener = pageView.addComponent(PageViewListener_1.default);
        pageViewListener.SetScrollEventAction(callback);
    };
    Util.SetSliderValueChangeEvent = function (slider, callback) {
        var sliderListener = slider.getComponent(SliderListener_1.default);
        if (sliderListener == null) {
            sliderListener = slider.addComponent(SliderListener_1.default);
        }
        sliderListener.SetSliderValueChangeCallback(callback);
    };
    Util.SetScrollViewScrollEvent = function (scrollView, callback) {
        var scrollViewListener = scrollView.getComponent(ScrollViewListener_1.default);
        if (scrollViewListener == null)
            scrollViewListener = scrollView.addComponent(ScrollViewListener_1.default);
        scrollViewListener.SetScrollEventAction(callback);
    };
    /**
     * 输入框聚焦事件
     * @param editBox
     * @param callback
     * @param customData
     */
    Util.AddEditDidBeganEvent = function (editBox, callback, customData) {
        if (customData === void 0) { customData = ""; }
        var editBoxListener = editBox.getComponent(EditBoxListener_1.default);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener_1.default);
        editBoxListener.AddEditDidBeganHandler(callback, customData);
    };
    /**
     * 输入框内容改变事件
     * @param editBox
     * @param callback
     * @param customData
     */
    Util.AddEditTextChangedEvent = function (editBox, callback, customData) {
        if (customData === void 0) { customData = ""; }
        var editBoxListener = editBox.getComponent(EditBoxListener_1.default);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener_1.default);
        editBoxListener.AddTextChangedHandler(callback, customData);
    };
    /**
     * 输入框失焦事件
     * @param editBox
     * @param callback
     * @param customData
     */
    Util.AddEditDidEndedHandler = function (editBox, callback, customData) {
        if (customData === void 0) { customData = ""; }
        var editBoxListener = editBox.getComponent(EditBoxListener_1.default);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener_1.default);
        editBoxListener.AddEditDidEndedHandler(callback, customData);
    };
    /**
     * 按下return
     * @param editBox
     * @param callback
     * @param customData
     */
    Util.AddEditingReturnHandler = function (editBox, callback, customData) {
        if (customData === void 0) { customData = ""; }
        var editBoxListener = editBox.getComponent(EditBoxListener_1.default);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener_1.default);
        editBoxListener.AddEditingReturnHandler(callback, customData);
    };
    /**
     * 格式化字符串 例子 Util.StringFormat("aaa %s1 bbb %s2 ccc %s3","111","222","333");
     * @param [stringOrigin] 原字符串
     * @param [stringReplaces] 替换的字符串
     */
    Util.StringFormat = function (stringOrigin) {
        var stringReplaces = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            stringReplaces[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < stringReplaces.length; i++) {
            stringOrigin = stringOrigin.replace("%s" + (i + 1), stringReplaces[i]);
        }
        return stringOrigin;
    };
    /**
     * 把单位分输出为元，如 1000 返回 10.
     * @param [count] 多少分
     * @param [showDot00] 如果末尾是.00，true 是保留，false是去掉
     */
    Util.formatGoldText = function (count, showDot00) {
        if (showDot00 === void 0) { showDot00 = true; }
        if (count == null) {
            return count = "0";
        }
        var tmp = 0;
        if (typeof (count) == "string") {
            tmp = parseFloat(count);
        }
        else {
            tmp = count;
        }
        tmp /= 100;
        var ret = tmp.toFixed(2);
        if (showDot00 == false) {
            if (ret.length > 3 && (ret.substring(ret.length - 3, ret.length) == ".00")) {
                ret = ret.substring(0, ret.length - 3);
            }
        }
        return ret;
    };
    /**
     * 设置图集
     * @param sprite
     * @param atlas
     * @param spriteName
     * @param finishCallback
     */
    Util.SetSpriteFrame = function (sprite, atlasPath, spriteName, finishCallback) {
        // cc.error("atlasPath  " + atlasPath);
        // ccC.loadResDir(atlasPath, cc.SpriteFrame, (err, assets:cc.SpriteFrame[])=>{
        //     if (err) {
        //         cc.error("err  " + err.message || err);
        //         return;
        //     }
        //     for (let i = 0; i < assets.length; i++)
        //     {
        //         if (assets[i].name == spriteName)
        //         {
        //             sprite.spriteFrame = assets[i];
        //             if (finishCallback != null)
        //                 finishCallback();
        //             break;
        //         }
        //     }
        // });
        ccC_1.default.loadRes(atlasPath, cc.SpriteAtlas, function (err, res) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            sprite.spriteFrame = res.getSpriteFrame(spriteName);
        });
    };
    /**
     * 设置网络头像
     * @param imgHeadObj 显示头像的GameObject
     * @param headUrl 头像地址
     * @param isSetNativeSize 是否设置原始尺寸
     */
    Util.SetHeadNetIcon = function (imgHeadObj, headUrl, successCallback) {
        var _this = this;
        if (successCallback === void 0) { successCallback = null; }
        if (headUrl == undefined || headUrl == null || headUrl.length == 0)
            headUrl = "GYZY_TX_M_1";
        var spHeadImage = imgHeadObj;
        var spriteFrame = headUrl;
        var posIndex = headUrl.lastIndexOf(".");
        if (posIndex > 0) {
            spriteFrame = headUrl.substring(0, posIndex - 1);
        }
        var assetPath = "MainGame/Atlas/Head";
        if (this.netImageCache[spriteFrame] == null) {
            ccC_1.default.loadRes(assetPath, cc.SpriteAtlas, function (err, atlas) {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                var atlass = atlas;
                imgHeadObj.spriteFrame = atlass.getSpriteFrame(spriteFrame);
                _this.netImageCache[spriteFrame] = atlass.getSpriteFrame(spriteFrame);
                if (successCallback != null) {
                    successCallback();
                }
            });
        }
        else {
            imgHeadObj.spriteFrame = this.netImageCache[spriteFrame];
        }
    };
    /**
     * 设置头像框
     * @param image
     * @param spritName
     */
    Util.SetHeadBox = function (image, spritName) {
        var _this = this;
        if (spritName == null || spritName.length == 0 || spritName == "default")
            spritName = "GYZY_TXK";
        var assetPath = "MainGame/Atlas/Head";
        if (this.netImageCache[spritName] == null) {
            ccC_1.default.loadRes(assetPath, cc.SpriteAtlas, function (err, atlas) {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                var atlass = atlas;
                image.spriteFrame = atlass.getSpriteFrame(spritName);
                ;
                _this.netImageCache[spritName] = atlass.getSpriteFrame(spritName);
            });
        }
        else {
            image.spriteFrame = this.netImageCache[spritName];
        }
    };
    Util.SetHeadIcon = function (sprite, headUrl) {
        if (headUrl == undefined || headUrl == null || headUrl.length == 0)
            headUrl = "GYZY_TX_M_1";
        var path = "Textures/Head/" + headUrl;
        NodeUtil_1.default.SetSpriteFrame(sprite, path);
    };
    //播放spine动画回调接口
    Util.PlaySpineEffect = function (spine, listener, name, loop, hideOnComplete) {
        if (listener === void 0) { listener = null; }
        if (name === void 0) { name = "1"; }
        if (loop === void 0) { loop = false; }
        if (hideOnComplete === void 0) { hideOnComplete = true; }
        if (spine == null) {
            // if(Global.showLog == true)
            cc.error("spine 动画为空");
            return;
        }
        spine.node.active = false;
        spine.node.active = true;
        spine.setAnimation(0, name, loop);
        spine.setCompleteListener(function () {
            if (hideOnComplete) {
                spine.node.active = false;
            }
            if (listener != null) {
                listener();
            }
        });
    };
    /**
     * 删除指定数组中指定下标或者元素数据,
     # 不支持删除纯数字组成的数组，
     ## 因为第二个参数如果传入的是 number 类型，默认会将其认为是数组下标。
     * @param array 需要修改的数组
     * @param obj 指定下标或者元素
     */
    Util.RemoveArray = function (array, obj) {
        var temp;
        if (typeof (obj) == 'number') {
            return array.splice(obj, 1);
        }
        else {
            temp = array.indexOf(obj);
            if (temp > -1) {
                return array.splice(temp, 1);
            }
        }
        return null;
    };
    /**
     * 根据用户头像判定是否为男性
     * @param headName 用户头像文件名
     */
    Util.GetGenderByName = function (headName) {
        if (headName == null)
            return true;
        return headName.indexOf('_M_') !== -1;
    };
    /**
     * 判断字符串是否是合法的邮箱
     */
    Util.IsRightEmail = function (str) {
        var reg = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        if (reg.test(str))
            return true;
        return false;
    };
    /**
     * 判断是否是合法的手机号
     */
    Util.IsRightMobile = function (str) {
        var reg = new RegExp(/^1[0123456789]\d{9}$/);
        if (reg.test(str))
            return true;
        return false;
    };
    /**
     * 根据音效路径获取声音名称，不包括后缀
     */
    //  public static GetAudioNameByPath(audioPath:string){
    //      if(audioPath==null||audioPath==""){
    //          return "";
    //      }
    //      let pathList=audioPath.split("/",5)
    //  }
    /**
     * 返回一个函数
     */
    Util.handler2 = function (selfTable, method, buttonCustom) {
        return function () {
            return method(selfTable, buttonCustom);
        };
    };
    Util.handle = function (obj, method) {
        return function () {
            return method(obj);
        };
    };
    Util.PerformWithDelay = function (time, callBack, timerArray, autoDel) {
        if (timerArray === void 0) { timerArray = null; }
        if (autoDel === void 0) { autoDel = true; }
        var timerID = "";
        timerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
            if (callBack != null) {
                callBack();
            }
            if (autoDel && timerArray != null) {
                TimerManager_1.default.GetInstance().DeleteTimer(timerID);
                Util.RemoveArray(timerArray, timerID);
            }
        }, time);
        if (timerArray != null) {
            timerArray.push(timerID);
        }
        return timerID;
    };
    Util.GetOrCreateItem = function (parentContainer, index) {
        var childNode = null;
        if (index < parentContainer.childrenCount) {
            //cc.error( parentContainer.children[index]);
            childNode = parentContainer.children[index];
        }
        else {
            //cc.error( parentContainer.children[0]);
            childNode = cc.instantiate(parentContainer.children[0]);
            childNode.parent = parentContainer;
        }
        childNode.active = true;
        return childNode;
    };
    Util.GetDicLength = function (dic) {
        var count = 0;
        for (var key in dic) {
            if (dic.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    };
    Util.OpenUrl = function (url) {
        if (cc.sys.isBrowser == false) {
            JSOpenUrl_1.JSOpenUrl.DirectOpen(url);
        }
        else {
            if (cc.sys.isMobile == false) {
                JSOpenUrl_1.JSOpenUrl.BlankOpen(url);
            }
            else {
                if (cc.sys.os == cc.sys.OS_IOS) {
                    //内嵌webview
                    // if(cc.sys.browserType == cc.sys.BROWSER_TYPE_UNKNOWN)
                    // {
                    //     JSOpenUrl.JustOpen(url);
                    // }
                    // else
                    // {
                    //     //ios各种浏览器
                    //     JSOpenUrl.BlankOpen(url);
                    // }
                    JSOpenUrl_1.JSOpenUrl.BlankOpen(url);
                }
                else if (cc.sys.os == cc.sys.OS_ANDROID) {
                    //安卓
                    JSOpenUrl_1.JSOpenUrl.BlankOpen(url);
                }
                else {
                    JSOpenUrl_1.JSOpenUrl.DirectOpen(url);
                }
            }
        }
    };
    /**
     * 格式化日期，
     * @param date Date对象
     * @param formatStr 可以是-，也可以是/
     * @param hasHMS 是否包含时分秒
     */
    Util.FormatDate = function (date, formatStr, hasHMS) {
        if (formatStr === void 0) { formatStr = "-"; }
        if (hasHMS === void 0) { hasHMS = false; }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var monthStr = month >= 10 ? month : "0" + month;
        var day = date.getDate();
        var dayStr = day >= 10 ? day : "0" + day;
        var dateStr = year + formatStr + monthStr + formatStr + dayStr;
        if (hasHMS) {
            dateStr += (" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        }
        return dateStr;
    };
    Util.netImageCache = {};
    return Util;
}());
exports.default = Util;

cc._RF.pop();