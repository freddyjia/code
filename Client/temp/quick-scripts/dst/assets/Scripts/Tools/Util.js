
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsbUVBQThEO0FBQzlELHVFQUFrRTtBQUNsRSwrREFBMEQ7QUFDMUQsaUVBQTREO0FBQzVELDJEQUFzRDtBQUN0RCxpREFBZ0Q7QUFDaEQsNkJBQXdCO0FBQ3hCLHVDQUFrQztBQUNsQyx5Q0FBeUM7QUFFekM7SUFBQTtJQW9mQSxDQUFDO0lBbGZHLHlEQUF5RDtJQUMzQyxtQkFBYyxHQUE1QixVQUE2QixNQUFnQixFQUFDLFFBQTBDLEVBQUMsU0FBaUIsRUFBQyxVQUFrQjtRQUd6SCxJQUFJLGNBQWMsR0FBa0IsTUFBTSxDQUFDLFlBQVksQ0FBQyx3QkFBYyxDQUFDLENBQUM7UUFDeEUsSUFBRyxjQUFjLElBQUksSUFBSSxFQUN6QjtZQUNJLGNBQWMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztTQUN4RDtRQUVELHVCQUF1QjtRQUN2QixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBRWEsMkJBQXNCLEdBQXBDLFVBQXFDLFFBQW9CLEVBQUUsUUFBZ0Y7UUFFdkksSUFBSSxnQkFBZ0IsR0FBb0IsUUFBUSxDQUFDLFlBQVksQ0FBQywwQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hGLElBQUksZ0JBQWdCLElBQUksSUFBSTtZQUN4QixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUM7UUFFL0QsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVhLDhCQUF5QixHQUF2QyxVQUF3QyxNQUFnQixFQUFDLFFBQTBDO1FBRS9GLElBQUksY0FBYyxHQUFrQixNQUFNLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztRQUN4RSxJQUFHLGNBQWMsSUFBSSxJQUFJLEVBQ3pCO1lBQ0ksY0FBYyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsY0FBYyxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFYSw2QkFBd0IsR0FBdEMsVUFBdUMsVUFBd0IsRUFBRSxRQUFzRjtRQUVuSixJQUFJLGtCQUFrQixHQUFzQixVQUFVLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLENBQUM7UUFDeEYsSUFBSSxrQkFBa0IsSUFBSSxJQUFJO1lBQzFCLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsNEJBQWtCLENBQUMsQ0FBQztRQUVyRSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyx5QkFBb0IsR0FBbEMsVUFBbUMsT0FBa0IsRUFBRSxRQUFzRCxFQUFFLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFFL0gsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxlQUFlLElBQUksSUFBSTtZQUN2QixlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFFNUQsZUFBZSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyw0QkFBdUIsR0FBckMsVUFBc0MsT0FBa0IsRUFBRSxRQUFtRSxFQUFFLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFFL0ksSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxlQUFlLElBQUksSUFBSTtZQUN2QixlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFFNUQsZUFBZSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVywyQkFBc0IsR0FBcEMsVUFBcUMsT0FBa0IsRUFBRSxRQUFzRCxFQUFFLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFFakksSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxlQUFlLElBQUksSUFBSTtZQUN2QixlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFFNUQsZUFBZSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyw0QkFBdUIsR0FBckMsVUFBc0MsT0FBa0IsRUFBRSxRQUFzRCxFQUFFLFVBQW9CO1FBQXBCLDJCQUFBLEVBQUEsZUFBb0I7UUFFbEksSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxlQUFlLElBQUksSUFBSTtZQUN2QixlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFFNUQsZUFBZSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLGlCQUFZLEdBQTFCLFVBQTJCLFlBQW1CO1FBQUMsd0JBQTJCO2FBQTNCLFVBQTJCLEVBQTNCLHFCQUEyQixFQUEzQixJQUEyQjtZQUEzQix1Q0FBMkI7O1FBRXRFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN6QztZQUNJLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ1csbUJBQWMsR0FBNUIsVUFBNkIsS0FBbUIsRUFBQyxTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGdCQUFzQjtRQUVuRSxJQUFHLEtBQUssSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBRyxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUM1QjtZQUNJLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7YUFFRDtZQUNJLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDZjtRQUNELEdBQUcsSUFBSSxHQUFHLENBQUM7UUFFWCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUcsU0FBUyxJQUFJLEtBQUssRUFDckI7WUFDSSxJQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQ3hFO2dCQUNJLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxtQkFBYyxHQUE1QixVQUE2QixNQUFnQixFQUFFLFNBQWdCLEVBQUUsVUFBaUIsRUFBRSxjQUF1QjtRQUV2Ryx1Q0FBdUM7UUFDdkMsOEVBQThFO1FBQzlFLGlCQUFpQjtRQUNqQixrREFBa0Q7UUFDbEQsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUiw4Q0FBOEM7UUFDOUMsUUFBUTtRQUNSLDRDQUE0QztRQUM1QyxZQUFZO1FBQ1osOENBQThDO1FBQzlDLDBDQUEwQztRQUMxQyxvQ0FBb0M7UUFDcEMscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixRQUFRO1FBQ1IsTUFBTTtRQUNOLGFBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsVUFBQyxHQUFHLEVBQUMsR0FBa0I7WUFDeEQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNWO1lBQ0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1EOzs7OztPQUtHO0lBQ1csbUJBQWMsR0FBNUIsVUFBNkIsVUFBb0IsRUFBRSxPQUFjLEVBQUMsZUFBNkI7UUFBL0YsaUJBa0NDO1FBbENpRSxnQ0FBQSxFQUFBLHNCQUE2QjtRQUUzRixJQUFJLE9BQU8sSUFBRSxTQUFTLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDNUQsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUU1QixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUNoQjtZQUNJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxFQUMzQztZQUNJLGFBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFVLEVBQUUsS0FBVTtnQkFFMUQsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDdkMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLE1BQU0sR0FBa0IsS0FBdUIsQ0FBQztnQkFDcEQsVUFBVSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLElBQUcsZUFBZSxJQUFJLElBQUksRUFDMUI7b0JBQ0ksZUFBZSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUVEO1lBQ0ksVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxlQUFVLEdBQXhCLFVBQXlCLEtBQWUsRUFBRSxTQUFnQjtRQUExRCxpQkF1QkM7UUFyQkcsSUFBSSxTQUFTLElBQUUsSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxTQUFTO1lBQ2hFLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFFM0IsSUFBSSxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFDekM7WUFDSSxhQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsR0FBVSxFQUFFLEtBQVU7Z0JBRTFELElBQUksR0FBRyxFQUFFO29CQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ3ZDLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxNQUFNLEdBQWtCLEtBQXVCLENBQUM7Z0JBQ3BELEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFBQSxDQUFDO2dCQUN0RCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUVEO1lBQ0ksS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQUVhLGdCQUFXLEdBQXpCLFVBQTBCLE1BQWdCLEVBQUUsT0FBYztRQUV0RCxJQUFJLE9BQU8sSUFBRSxTQUFTLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDNUQsT0FBTyxHQUFHLGFBQWEsQ0FBQztRQUU1QixJQUFJLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDdEMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO0lBQ0Qsb0JBQWUsR0FBN0IsVUFBOEIsS0FBaUIsRUFBQyxRQUFrQixFQUFDLElBQWlCLEVBQUMsSUFBb0IsRUFBQyxjQUE2QjtRQUF2Rix5QkFBQSxFQUFBLGVBQWtCO1FBQUMscUJBQUEsRUFBQSxVQUFpQjtRQUFDLHFCQUFBLEVBQUEsWUFBb0I7UUFBQywrQkFBQSxFQUFBLHFCQUE2QjtRQUVuSSxJQUFHLEtBQUssSUFBSSxJQUFJLEVBQ2hCO1lBQ0ksNkJBQTZCO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RCLElBQUksY0FBYyxFQUNsQjtnQkFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDN0I7WUFFRCxJQUFHLFFBQVEsSUFBRyxJQUFJLEVBQ2xCO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxnQkFBVyxHQUF6QixVQUEwQixLQUFnQixFQUFFLEdBQU87UUFDL0MsSUFBSSxJQUFJLENBQUE7UUFDUixJQUFHLE9BQU0sQ0FBQyxHQUFHLENBQUMsSUFBRSxRQUFRLEVBQUM7WUFDckIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUM3QjthQUFJO1lBQ0QsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekIsSUFBRyxJQUFJLEdBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ1AsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTthQUM5QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ1csb0JBQWUsR0FBN0IsVUFBOEIsUUFBZTtRQUN6QyxJQUFHLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFDaEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNXLGlCQUFZLEdBQTFCLFVBQTJCLEdBQVU7UUFFakMsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMseUVBQXlFLENBQUMsQ0FBQztRQUNoRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0JBQWEsR0FBM0IsVUFBNEIsR0FBVTtRQUVsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDYixPQUFPLElBQUksQ0FBQztRQUVoQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFFSCx1REFBdUQ7SUFDdkQsMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsMkNBQTJDO0lBRTNDLEtBQUs7SUFFTDs7T0FFRztJQUNZLGFBQVEsR0FBdEIsVUFBdUIsU0FBUyxFQUFDLE1BQU0sRUFBQyxZQUFZO1FBQ2hELE9BQU87WUFDSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVhLFdBQU0sR0FBcEIsVUFBcUIsR0FBRyxFQUFDLE1BQU07UUFDM0IsT0FBTztZQUNILE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFWSxxQkFBZ0IsR0FBOUIsVUFBK0IsSUFBVyxFQUFDLFFBQVksRUFBQyxVQUErQixFQUFDLE9BQXNCO1FBQXRELDJCQUFBLEVBQUEsaUJBQStCO1FBQUMsd0JBQUEsRUFBQSxjQUFzQjtRQUUxRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxHQUFHLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBRWpELElBQUcsUUFBUSxJQUFFLElBQUksRUFDakI7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNELElBQUcsT0FBTyxJQUFFLFVBQVUsSUFBRSxJQUFJLEVBQzVCO2dCQUNJLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNSLElBQUcsVUFBVSxJQUFFLElBQUksRUFDbkI7WUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUdhLG9CQUFlLEdBQTdCLFVBQThCLGVBQXVCLEVBQUMsS0FBWTtRQUU5RCxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUM7UUFHN0IsSUFBRyxLQUFLLEdBQUMsZUFBZSxDQUFDLGFBQWEsRUFDdEM7WUFDSSw2Q0FBNkM7WUFDN0MsU0FBUyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0M7YUFFRDtZQUNJLHlDQUF5QztZQUN6QyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7U0FDdEM7UUFFRCxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRWEsaUJBQVksR0FBMUIsVUFBMkIsR0FBTTtRQUM3QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDYixLQUFLLElBQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUNuQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLEtBQUssRUFBRyxDQUFBO2FBQ1g7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFFYSxZQUFPLEdBQXJCLFVBQXNCLEdBQUc7UUFFckIsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQzVCO1lBQ0kscUJBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFFRDtZQUNJLElBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxFQUMzQjtnQkFDSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFFRDtnQkFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUM3QjtvQkFDSSxXQUFXO29CQUNYLHdEQUF3RDtvQkFDeEQsSUFBSTtvQkFDSiwrQkFBK0I7b0JBQy9CLElBQUk7b0JBQ0osT0FBTztvQkFDUCxJQUFJO29CQUNKLGlCQUFpQjtvQkFDakIsZ0NBQWdDO29CQUNoQyxJQUFJO29CQUVKLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QjtxQkFDSSxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUN0QztvQkFDSSxJQUFJO29CQUNKLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QjtxQkFFRDtvQkFDSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csZUFBVSxHQUF4QixVQUF5QixJQUFTLEVBQUUsU0FBYSxFQUFFLE1BQVk7UUFBM0IsMEJBQUEsRUFBQSxlQUFhO1FBQUUsdUJBQUEsRUFBQSxjQUFZO1FBRTNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsUUFBUSxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFL0QsSUFBSSxNQUFNLEVBQ1Y7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzFGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWpUYSxrQkFBYSxHQUF1QyxFQUFFLENBQUM7SUFtVHpFLFdBQUM7Q0FwZkQsQUFvZkMsSUFBQTtrQkFwZm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uTGlzdGVuZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvQnV0dG9uTGlzdGVuZXJcIjtcbmltcG9ydCBQYWdlVmlld0xpc3RlbmVyIGZyb20gXCIuLi9Db21wb25lbnRzL1BhZ2VWaWV3TGlzdGVuZXJcIjtcbmltcG9ydCBTY3JvbGxWaWV3TGlzdGVuZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvU2Nyb2xsVmlld0xpc3RlbmVyXCI7XG5pbXBvcnQgU2xpZGVyTGlzdGVuZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvU2xpZGVyTGlzdGVuZXJcIjtcbmltcG9ydCBFZGl0Qm94TGlzdGVuZXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvRWRpdEJveExpc3RlbmVyXCI7XG5pbXBvcnQgVGltZXJNYW5hZ2VyIGZyb20gXCIuLi9Db21wb25lbnRzL1RpbWVyTWFuYWdlclwiO1xuaW1wb3J0IHsgSlNPcGVuVXJsIH0gZnJvbSBcIi4uL0pzVG9vbC9KU09wZW5VcmxcIjtcbmltcG9ydCBjY0MgZnJvbSBcIi4vY2NDXCI7XG5pbXBvcnQgTm9kZVV0aWwgZnJvbSBcIi4vTm9kZVV0aWxcIjtcbi8vIGltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0dsb2JhbC9HbG9iYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbFxue1xuICAgIC8vY3VzdG9tRGF0YSxhdWRpb05hbWUg5piv5Y+v6YCJ5Y+C5pWw77yM5Y+v5LiN5aGrLiAgIGN1c3RvbURhdGHlj6rog73loatzdHJpbmfnsbvlnotcbiAgICBwdWJsaWMgc3RhdGljIFNldENsaWNrQWN0aW9uKGJ1dHRvbjpjYy5CdXR0b24sY2FsbGJhY2s6KGJ1dHRvbjpjYy5CdXR0b24sZGF0YTphbnkpPT52b2lkLGF1ZGlvTmFtZT86c3RyaW5nLGN1c3RvbURhdGE/OnN0cmluZylcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnV0dG9uTGlzdGVuZXI6QnV0dG9uTGlzdGVuZXIgPSBidXR0b24uZ2V0Q29tcG9uZW50KEJ1dHRvbkxpc3RlbmVyKTtcbiAgICAgICAgaWYoYnV0dG9uTGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgYnV0dG9uTGlzdGVuZXIgPSBidXR0b24uYWRkQ29tcG9uZW50KEJ1dHRvbkxpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzrorr7nva7pn7PmlYjnm7jlhbMgYXVkaW9OYW1lXG4gICAgICAgIGJ1dHRvbkxpc3RlbmVyLkluaXQoKTtcbiAgICAgICAgYnV0dG9uTGlzdGVuZXIuU2V0RGF0YShjdXN0b21EYXRhKTtcbiAgICAgICAgYnV0dG9uTGlzdGVuZXIuU2V0QXVkaW9OYW1lKGF1ZGlvTmFtZSk7XG4gICAgICAgIGJ1dHRvbkxpc3RlbmVyLlNldE9uQ2xpY2tDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTZXRQYWdlVmlld1Njcm9sbEV2ZW50KHBhZ2VWaWV3OmNjLlBhZ2VWaWV3LCBjYWxsYmFjazoocGFnZVZpZXc6Y2MuUGFnZVZpZXcsIGV2ZW50VHlwZTpjYy5QYWdlVmlldy5FdmVudFR5cGUsIGRhdGE6YW55KT0+dm9pZClcbiAgICB7XG4gICAgICAgIGxldCBwYWdlVmlld0xpc3RlbmVyOlBhZ2VWaWV3TGlzdGVuZXIgPSBwYWdlVmlldy5nZXRDb21wb25lbnQoUGFnZVZpZXdMaXN0ZW5lcik7XG4gICAgICAgIGlmIChwYWdlVmlld0xpc3RlbmVyID09IG51bGwpXG4gICAgICAgICAgICBwYWdlVmlld0xpc3RlbmVyID0gcGFnZVZpZXcuYWRkQ29tcG9uZW50KFBhZ2VWaWV3TGlzdGVuZXIpO1xuXG4gICAgICAgIHBhZ2VWaWV3TGlzdGVuZXIuU2V0U2Nyb2xsRXZlbnRBY3Rpb24oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2V0U2xpZGVyVmFsdWVDaGFuZ2VFdmVudChzbGlkZXI6Y2MuU2xpZGVyLGNhbGxiYWNrOihzbGlkZXI6Y2MuU2xpZGVyLGRhdGE6YW55KT0+dm9pZClcbiAgICB7XG4gICAgICAgIGxldCBzbGlkZXJMaXN0ZW5lcjpTbGlkZXJMaXN0ZW5lciA9IHNsaWRlci5nZXRDb21wb25lbnQoU2xpZGVyTGlzdGVuZXIpO1xuICAgICAgICBpZihzbGlkZXJMaXN0ZW5lciA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBzbGlkZXJMaXN0ZW5lciA9IHNsaWRlci5hZGRDb21wb25lbnQoU2xpZGVyTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlckxpc3RlbmVyLlNldFNsaWRlclZhbHVlQ2hhbmdlQ2FsbGJhY2soY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2V0U2Nyb2xsVmlld1Njcm9sbEV2ZW50KHNjcm9sbFZpZXc6Y2MuU2Nyb2xsVmlldywgY2FsbGJhY2s6KHNjcm9sbFZpZXc6Y2MuU2Nyb2xsVmlldywgZXZlbnRUeXBlOmNjLlNjcm9sbFZpZXcuRXZlbnRUeXBlLCBkYXRhOmFueSk9PnZvaWQpXG4gICAge1xuICAgICAgICBsZXQgc2Nyb2xsVmlld0xpc3RlbmVyOlNjcm9sbFZpZXdMaXN0ZW5lciA9IHNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KFNjcm9sbFZpZXdMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzY3JvbGxWaWV3TGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIHNjcm9sbFZpZXdMaXN0ZW5lciA9IHNjcm9sbFZpZXcuYWRkQ29tcG9uZW50KFNjcm9sbFZpZXdMaXN0ZW5lcik7XG5cbiAgICAgICAgc2Nyb2xsVmlld0xpc3RlbmVyLlNldFNjcm9sbEV2ZW50QWN0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYbogZrnhKbkuovku7ZcbiAgICAgKiBAcGFyYW0gZWRpdEJveCBcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAgICogQHBhcmFtIGN1c3RvbURhdGEgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBBZGRFZGl0RGlkQmVnYW5FdmVudChlZGl0Qm94OmNjLkVkaXRCb3gsIGNhbGxiYWNrOihlZGl0Qm94OmNjLkVkaXRCb3gsIGN1c3RvbURhdGE6c3RyaW5nKT0+dm9pZCwgY3VzdG9tRGF0YTpzdHJpbmc9XCJcIilcbiAgICB7XG4gICAgICAgIGxldCBlZGl0Qm94TGlzdGVuZXIgPSBlZGl0Qm94LmdldENvbXBvbmVudChFZGl0Qm94TGlzdGVuZXIpO1xuICAgICAgICBpZiAoZWRpdEJveExpc3RlbmVyID09IG51bGwpXG4gICAgICAgICAgICBlZGl0Qm94TGlzdGVuZXIgPSBlZGl0Qm94LmFkZENvbXBvbmVudChFZGl0Qm94TGlzdGVuZXIpO1xuXG4gICAgICAgIGVkaXRCb3hMaXN0ZW5lci5BZGRFZGl0RGlkQmVnYW5IYW5kbGVyKGNhbGxiYWNrLCBjdXN0b21EYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXlrrnmlLnlj5jkuovku7ZcbiAgICAgKiBAcGFyYW0gZWRpdEJveCBcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAgICogQHBhcmFtIGN1c3RvbURhdGEgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBBZGRFZGl0VGV4dENoYW5nZWRFdmVudChlZGl0Qm94OmNjLkVkaXRCb3gsIGNhbGxiYWNrOih0ZXh0OnN0cmluZywgZWRpdEJveDpjYy5FZGl0Qm94LCBjdXN0b21EYXRhOnN0cmluZyk9PnZvaWQsIGN1c3RvbURhdGE6c3RyaW5nPVwiXCIpXG4gICAge1xuICAgICAgICBsZXQgZWRpdEJveExpc3RlbmVyID0gZWRpdEJveC5nZXRDb21wb25lbnQoRWRpdEJveExpc3RlbmVyKTtcbiAgICAgICAgaWYgKGVkaXRCb3hMaXN0ZW5lciA9PSBudWxsKVxuICAgICAgICAgICAgZWRpdEJveExpc3RlbmVyID0gZWRpdEJveC5hZGRDb21wb25lbnQoRWRpdEJveExpc3RlbmVyKTtcblxuICAgICAgICBlZGl0Qm94TGlzdGVuZXIuQWRkVGV4dENoYW5nZWRIYW5kbGVyKGNhbGxiYWNrLCBjdXN0b21EYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblpLHnhKbkuovku7ZcbiAgICAgKiBAcGFyYW0gZWRpdEJveCBcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXG4gICAgICogQHBhcmFtIGN1c3RvbURhdGEgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBBZGRFZGl0RGlkRW5kZWRIYW5kbGVyKGVkaXRCb3g6Y2MuRWRpdEJveCwgY2FsbGJhY2s6KGVkaXRCb3g6Y2MuRWRpdEJveCwgY3VzdG9tRGF0YTpzdHJpbmcpPT52b2lkLCBjdXN0b21EYXRhOnN0cmluZz1cIlwiKVxuICAgIHtcbiAgICAgICAgbGV0IGVkaXRCb3hMaXN0ZW5lciA9IGVkaXRCb3guZ2V0Q29tcG9uZW50KEVkaXRCb3hMaXN0ZW5lcik7XG4gICAgICAgIGlmIChlZGl0Qm94TGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIGVkaXRCb3hMaXN0ZW5lciA9IGVkaXRCb3guYWRkQ29tcG9uZW50KEVkaXRCb3hMaXN0ZW5lcik7XG5cbiAgICAgICAgZWRpdEJveExpc3RlbmVyLkFkZEVkaXREaWRFbmRlZEhhbmRsZXIoY2FsbGJhY2ssIGN1c3RvbURhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaMieS4i3JldHVyblxuICAgICAqIEBwYXJhbSBlZGl0Qm94IFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcbiAgICAgKiBAcGFyYW0gY3VzdG9tRGF0YSBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEFkZEVkaXRpbmdSZXR1cm5IYW5kbGVyKGVkaXRCb3g6Y2MuRWRpdEJveCwgY2FsbGJhY2s6KGVkaXRCb3g6Y2MuRWRpdEJveCwgY3VzdG9tRGF0YTpzdHJpbmcpPT52b2lkLCBjdXN0b21EYXRhOnN0cmluZz1cIlwiKVxuICAgIHtcbiAgICAgICAgbGV0IGVkaXRCb3hMaXN0ZW5lciA9IGVkaXRCb3guZ2V0Q29tcG9uZW50KEVkaXRCb3hMaXN0ZW5lcik7XG4gICAgICAgIGlmIChlZGl0Qm94TGlzdGVuZXIgPT0gbnVsbClcbiAgICAgICAgICAgIGVkaXRCb3hMaXN0ZW5lciA9IGVkaXRCb3guYWRkQ29tcG9uZW50KEVkaXRCb3hMaXN0ZW5lcik7XG5cbiAgICAgICAgZWRpdEJveExpc3RlbmVyLkFkZEVkaXRpbmdSZXR1cm5IYW5kbGVyKGNhbGxiYWNrLCBjdXN0b21EYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLzlvI/ljJblrZfnrKbkuLIg5L6L5a2QIFV0aWwuU3RyaW5nRm9ybWF0KFwiYWFhICVzMSBiYmIgJXMyIGNjYyAlczNcIixcIjExMVwiLFwiMjIyXCIsXCIzMzNcIik7XG4gICAgICogQHBhcmFtIFtzdHJpbmdPcmlnaW5dIOWOn+Wtl+espuS4slxuICAgICAqIEBwYXJhbSBbc3RyaW5nUmVwbGFjZXNdIOabv+aNoueahOWtl+espuS4slxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU3RyaW5nRm9ybWF0KHN0cmluZ09yaWdpbjpzdHJpbmcsLi4uIHN0cmluZ1JlcGxhY2VzOnN0cmluZ1tdKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxzdHJpbmdSZXBsYWNlcy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdHJpbmdPcmlnaW4gPSBzdHJpbmdPcmlnaW4ucmVwbGFjZShcIiVzXCIgKyAoaSArIDEpLHN0cmluZ1JlcGxhY2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmdPcmlnaW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oqK5Y2V5L2N5YiG6L6T5Ye65Li65YWD77yM5aaCIDEwMDAg6L+U5ZueIDEwLlxuICAgICAqIEBwYXJhbSBbY291bnRdIOWkmuWwkeWIhlxuICAgICAqIEBwYXJhbSBbc2hvd0RvdDAwXSDlpoLmnpzmnKvlsL7mmK8uMDDvvIx0cnVlIOaYr+S/neeVme+8jGZhbHNl5piv5Y675o6JXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXRHb2xkVGV4dChjb3VudDpzdHJpbmd8bnVtYmVyLHNob3dEb3QwMDpib29sZWFuPXRydWUpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgaWYoY291bnQgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50ID0gXCIwXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRtcCA9IDA7XG4gICAgICAgIGlmKHR5cGVvZihjb3VudCkgPT0gXCJzdHJpbmdcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdG1wID0gcGFyc2VGbG9hdChjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0bXAgPSBjb3VudDtcbiAgICAgICAgfVxuICAgICAgICB0bXAgLz0gMTAwO1xuXG4gICAgICAgIGxldCByZXQgPSB0bXAudG9GaXhlZCgyKTtcbiAgICAgICAgaWYoc2hvd0RvdDAwID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihyZXQubGVuZ3RoID4gMyAmJiAocmV0LnN1YnN0cmluZyhyZXQubGVuZ3RoIC0gMyxyZXQubGVuZ3RoKSA9PSBcIi4wMFwiKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQgPSByZXQuc3Vic3RyaW5nKDAscmV0Lmxlbmd0aC0zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWbvumbhlxuICAgICAqIEBwYXJhbSBzcHJpdGUgXG4gICAgICogQHBhcmFtIGF0bGFzIFxuICAgICAqIEBwYXJhbSBzcHJpdGVOYW1lIFxuICAgICAqIEBwYXJhbSBmaW5pc2hDYWxsYmFja1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU2V0U3ByaXRlRnJhbWUoc3ByaXRlOmNjLlNwcml0ZSwgYXRsYXNQYXRoOnN0cmluZywgc3ByaXRlTmFtZTpzdHJpbmcsIGZpbmlzaENhbGxiYWNrOigpPT52b2lkKVxuICAgIHtcbiAgICAgICAgLy8gY2MuZXJyb3IoXCJhdGxhc1BhdGggIFwiICsgYXRsYXNQYXRoKTtcbiAgICAgICAgLy8gY2NDLmxvYWRSZXNEaXIoYXRsYXNQYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgYXNzZXRzOmNjLlNwcml0ZUZyYW1lW10pPT57XG4gICAgICAgIC8vICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgY2MuZXJyb3IoXCJlcnIgIFwiICsgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKylcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoYXNzZXRzW2ldLm5hbWUgPT0gc3ByaXRlTmFtZSlcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGFzc2V0c1tpXTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGZpbmlzaENhbGxiYWNrICE9IG51bGwpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBjY0MubG9hZFJlcyhhdGxhc1BhdGgsY2MuU3ByaXRlQXRsYXMsKGVycixyZXM6Y2MuU3ByaXRlQXRsYXMpPT57XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJlcnIgIFwiICsgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXMuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcblxuICAgIHB1YmxpYyBzdGF0aWMgbmV0SW1hZ2VDYWNoZTp7W3Nwcml0TmFtZTpzdHJpbmddOmNjLlNwcml0ZUZyYW1lfSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICog6K6+572u572R57uc5aS05YOPXG4gICAgICogQHBhcmFtIGltZ0hlYWRPYmog5pi+56S65aS05YOP55qER2FtZU9iamVjdFxuICAgICAqIEBwYXJhbSBoZWFkVXJsIOWktOWDj+WcsOWdgFxuICAgICAqIEBwYXJhbSBpc1NldE5hdGl2ZVNpemUg5piv5ZCm6K6+572u5Y6f5aeL5bC65a+4XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBTZXRIZWFkTmV0SWNvbihpbWdIZWFkT2JqOmNjLlNwcml0ZSwgaGVhZFVybDpzdHJpbmcsc3VjY2Vzc0NhbGxiYWNrOigpPT52b2lkPW51bGwpXG4gICAge1xuICAgICAgICBpZiAoaGVhZFVybD09dW5kZWZpbmVkIHx8IGhlYWRVcmwgPT0gbnVsbCB8fCBoZWFkVXJsLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgaGVhZFVybCA9IFwiR1laWV9UWF9NXzFcIjtcbiAgICAgICAgXG4gICAgICAgIGxldCBzcEhlYWRJbWFnZSA9IGltZ0hlYWRPYmo7XG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IGhlYWRVcmw7XG4gICAgICAgIGxldCBwb3NJbmRleCA9IGhlYWRVcmwubGFzdEluZGV4T2YoXCIuXCIpO1xuICAgICAgICBpZiAocG9zSW5kZXggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBzcHJpdGVGcmFtZSA9IGhlYWRVcmwuc3Vic3RyaW5nKDAsIHBvc0luZGV4LTEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhc3NldFBhdGggPSBcIk1haW5HYW1lL0F0bGFzL0hlYWRcIjtcbiAgICAgICAgaWYgKHRoaXMubmV0SW1hZ2VDYWNoZVtzcHJpdGVGcmFtZV0gPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY2NDLmxvYWRSZXMoYXNzZXRQYXRoLCBjYy5TcHJpdGVBdGxhcywgKGVycjogRXJyb3IsIGF0bGFzOiBhbnkpID0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciAgXCIgKyBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhdGxhc3M6Y2MuU3ByaXRlQXRsYXMgPSBhdGxhcyBhcyBjYy5TcHJpdGVBdGxhcztcbiAgICAgICAgICAgICAgICBpbWdIZWFkT2JqLnNwcml0ZUZyYW1lID0gYXRsYXNzLmdldFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5ldEltYWdlQ2FjaGVbc3ByaXRlRnJhbWVdID0gYXRsYXNzLmdldFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lKTtcbiAgICAgICAgICAgICAgICBpZihzdWNjZXNzQ2FsbGJhY2sgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaW1nSGVhZE9iai5zcHJpdGVGcmFtZSA9IHRoaXMubmV0SW1hZ2VDYWNoZVtzcHJpdGVGcmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lpLTlg4/moYZcbiAgICAgKiBAcGFyYW0gaW1hZ2UgXG4gICAgICogQHBhcmFtIHNwcml0TmFtZSBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNldEhlYWRCb3goaW1hZ2U6Y2MuU3ByaXRlLCBzcHJpdE5hbWU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKHNwcml0TmFtZT09bnVsbCB8fCBzcHJpdE5hbWUubGVuZ3RoPT0wIHx8IHNwcml0TmFtZSA9PSBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIHNwcml0TmFtZSA9IFwiR1laWV9UWEtcIjtcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgYXNzZXRQYXRoID0gXCJNYWluR2FtZS9BdGxhcy9IZWFkXCI7XG4gICAgICAgIGlmICh0aGlzLm5ldEltYWdlQ2FjaGVbc3ByaXROYW1lXSA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjY0MubG9hZFJlcyhhc3NldFBhdGgsIGNjLlNwcml0ZUF0bGFzLCAoZXJyOiBFcnJvciwgYXRsYXM6IGFueSkgPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiZXJyICBcIiArIGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGF0bGFzczpjYy5TcHJpdGVBdGxhcyA9IGF0bGFzIGFzIGNjLlNwcml0ZUF0bGFzO1xuICAgICAgICAgICAgICAgIGltYWdlLnNwcml0ZUZyYW1lID0gYXRsYXNzLmdldFNwcml0ZUZyYW1lKHNwcml0TmFtZSk7O1xuICAgICAgICAgICAgICAgIHRoaXMubmV0SW1hZ2VDYWNoZVtzcHJpdE5hbWVdID0gYXRsYXNzLmdldFNwcml0ZUZyYW1lKHNwcml0TmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlLnNwcml0ZUZyYW1lID0gdGhpcy5uZXRJbWFnZUNhY2hlW3Nwcml0TmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNldEhlYWRJY29uKHNwcml0ZTpjYy5TcHJpdGUsIGhlYWRVcmw6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYgKGhlYWRVcmw9PXVuZGVmaW5lZCB8fCBoZWFkVXJsID09IG51bGwgfHwgaGVhZFVybC5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIGhlYWRVcmwgPSBcIkdZWllfVFhfTV8xXCI7XG5cbiAgICAgICAgbGV0IHBhdGggPSBcIlRleHR1cmVzL0hlYWQvXCIgKyBoZWFkVXJsO1xuICAgICAgICBOb2RlVXRpbC5TZXRTcHJpdGVGcmFtZShzcHJpdGUsIHBhdGgpO1xuICAgIH1cblxuICAgIC8v5pKt5pS+c3BpbmXliqjnlLvlm57osIPmjqXlj6NcbiAgICBwdWJsaWMgc3RhdGljIFBsYXlTcGluZUVmZmVjdChzcGluZTpzcC5Ta2VsZXRvbixsaXN0ZW5lcjogYW55PW51bGwsbmFtZTpzdHJpbmcgPSBcIjFcIixsb29wOmJvb2xlYW4gPSBmYWxzZSxoaWRlT25Db21wbGV0ZTpib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIGlmKHNwaW5lID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy5lcnJvcihcInNwaW5lIOWKqOeUu+S4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgc3BpbmUuc2V0QW5pbWF0aW9uKDAsbmFtZSxsb29wKTtcbiAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKT0+e1xuICAgICAgICAgICAgaWYgKGhpZGVPbkNvbXBsZXRlKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihsaXN0ZW5lciAhPW51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5oyH5a6a5pWw57uE5Lit5oyH5a6a5LiL5qCH5oiW6ICF5YWD57Sg5pWw5o2uLFxuICAgICAjIOS4jeaUr+aMgeWIoOmZpOe6r+aVsOWtl+e7hOaIkOeahOaVsOe7hO+8jFxuICAgICAjIyDlm6DkuLrnrKzkuozkuKrlj4LmlbDlpoLmnpzkvKDlhaXnmoTmmK8gbnVtYmVyIOexu+Wei++8jOm7mOiupOS8muWwhuWFtuiupOS4uuaYr+aVsOe7hOS4i+agh+OAglxuICAgICAqIEBwYXJhbSBhcnJheSDpnIDopoHkv67mlLnnmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0gb2JqIOaMh+WumuS4i+agh+aIluiAheWFg+e0oFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUmVtb3ZlQXJyYXkoYXJyYXk6QXJyYXk8YW55Piwgb2JqOmFueSk6YW55e1xuICAgICAgICBsZXQgdGVtcFxuICAgICAgICBpZih0eXBlb2Yob2JqKT09J251bWJlcicpe1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5LnNwbGljZShvYmosMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0ZW1wID0gYXJyYXkuaW5kZXhPZihvYmopXG4gICAgICAgICAgICBpZih0ZW1wPi0xKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXkuc3BsaWNlKHRlbXAsMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrueUqOaIt+WktOWDj+WIpOWumuaYr+WQpuS4uueUt+aAp1xuICAgICAqIEBwYXJhbSBoZWFkTmFtZSDnlKjmiLflpLTlg4/mlofku7blkI1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldEdlbmRlckJ5TmFtZShoZWFkTmFtZTpzdHJpbmcpOmJvb2xlYW57XG4gICAgICAgIGlmKGhlYWROYW1lID09IG51bGwpIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBoZWFkTmFtZS5pbmRleE9mKCdfTV8nKSAhPT0gLTFcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog5Yik5pat5a2X56ym5Liy5piv5ZCm5piv5ZCI5rOV55qE6YKu566xXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBJc1JpZ2h0RW1haWwoc3RyOnN0cmluZylcbiAgICB7XG4gICAgICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKC9eXFx3KygoLVxcdyspfChcXC5cXHcrKSkqXFxAW0EtWmEtejAtOV0rKChcXC58LSlbQS1aYS16MC05XSspKlxcLltBLVphLXowLTldKyQvKTtcbiAgICAgICAgaWYgKHJlZy50ZXN0KHN0cikpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreaYr+WQpuaYr+WQiOazleeahOaJi+acuuWPt1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSXNSaWdodE1vYmlsZShzdHI6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoL14xWzAxMjM0NTY3ODldXFxkezl9JC8pO1xuICAgICAgICBpZiAocmVnLnRlc3Qoc3RyKSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IFxuXG4gICAgLyoqXG4gICAgICog5qC55o2u6Z+z5pWI6Lev5b6E6I635Y+W5aOw6Z+z5ZCN56ew77yM5LiN5YyF5ous5ZCO57yAXG4gICAgICovXG5cbiAgICAvLyAgcHVibGljIHN0YXRpYyBHZXRBdWRpb05hbWVCeVBhdGgoYXVkaW9QYXRoOnN0cmluZyl7XG4gICAgLy8gICAgICBpZihhdWRpb1BhdGg9PW51bGx8fGF1ZGlvUGF0aD09XCJcIil7XG4gICAgLy8gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgLy8gICAgICB9XG4gICAgLy8gICAgICBsZXQgcGF0aExpc3Q9YXVkaW9QYXRoLnNwbGl0KFwiL1wiLDUpXG5cbiAgICAvLyAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5LiA5Liq5Ye95pWwXG4gICAgICovXG4gICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlcjIoc2VsZlRhYmxlLG1ldGhvZCxidXR0b25DdXN0b20pe1xuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChzZWxmVGFibGUsYnV0dG9uQ3VzdG9tKTtcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlKG9iaixtZXRob2Qpe1xuICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChvYmopXG4gICAgICAgICB9XG4gICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgUGVyZm9ybVdpdGhEZWxheSh0aW1lOm51bWJlcixjYWxsQmFjazphbnksdGltZXJBcnJheTpBcnJheTxzdHJpbmc+ID0gbnVsbCxhdXRvRGVsOmJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgbGV0IHRpbWVySUQgPSBcIlwiO1xuICAgICAgICB0aW1lcklEID0gVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuQ2FsbEFjdGlvbkRlbGF5KCgpPT57XG5cbiAgICAgICAgICAgIGlmKGNhbGxCYWNrIT1udWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhdXRvRGVsJiZ0aW1lckFycmF5IT1udWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkRlbGV0ZVRpbWVyKHRpbWVySUQpO1xuICAgICAgICAgICAgICAgIFV0aWwuUmVtb3ZlQXJyYXkodGltZXJBcnJheSx0aW1lcklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSx0aW1lKTtcbiAgICAgICAgaWYodGltZXJBcnJheSE9bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGltZXJBcnJheS5wdXNoKHRpbWVySUQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lcklEO1xuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBHZXRPckNyZWF0ZUl0ZW0ocGFyZW50Q29udGFpbmVyOmNjLk5vZGUsaW5kZXg6bnVtYmVyKTpjYy5Ob2RlXG4gICAgeyAgIFxuICAgICAgICBsZXQgY2hpbGROb2RlOmNjLk5vZGUgPSBudWxsO1xuICAgICAgIFxuXG4gICAgICAgIGlmKGluZGV4PHBhcmVudENvbnRhaW5lci5jaGlsZHJlbkNvdW50KVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NjLmVycm9yKCBwYXJlbnRDb250YWluZXIuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IHBhcmVudENvbnRhaW5lci5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NjLmVycm9yKCBwYXJlbnRDb250YWluZXIuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2MuaW5zdGFudGlhdGUocGFyZW50Q29udGFpbmVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5wYXJlbnQgPSBwYXJlbnRDb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldERpY0xlbmd0aChkaWM6e30pOm51bWJlcntcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWMpIHtcbiAgICAgICAgICAgIGlmIChkaWMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvdW50ICsrIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgT3BlblVybCh1cmwpXG4gICAge1xuICAgICAgICBpZihjYy5zeXMuaXNCcm93c2VyID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBKU09wZW5VcmwuRGlyZWN0T3Blbih1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTW9iaWxlID09IGZhbHNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEpTT3BlblVybC5CbGFua09wZW4odXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8v5YaF5bWMd2Vidmlld1xuICAgICAgICAgICAgICAgICAgICAvLyBpZihjYy5zeXMuYnJvd3NlclR5cGUgPT0gY2Muc3lzLkJST1dTRVJfVFlQRV9VTktOT1dOKVxuICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBKU09wZW5VcmwuSnVzdE9wZW4odXJsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaW9z5ZCE56eN5rWP6KeI5ZmoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBKU09wZW5VcmwuQmxhbmtPcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICBKU09wZW5VcmwuQmxhbmtPcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy/lronljZNcbiAgICAgICAgICAgICAgICAgICAgSlNPcGVuVXJsLkJsYW5rT3Blbih1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBKU09wZW5VcmwuRGlyZWN0T3Blbih1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaXpeacn++8jCBcbiAgICAgKiBAcGFyYW0gZGF0ZSBEYXRl5a+56LGhXG4gICAgICogQHBhcmFtIGZvcm1hdFN0ciDlj6/ku6XmmK8t77yM5Lmf5Y+v5Lul5pivL1xuICAgICAqIEBwYXJhbSBoYXNITVMg5piv5ZCm5YyF5ZCr5pe25YiG56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBGb3JtYXREYXRlKGRhdGU6RGF0ZSwgZm9ybWF0U3RyPVwiLVwiLCBoYXNITVM9ZmFsc2UpXG4gICAge1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgbGV0IG1vbnRoU3RyID0gbW9udGggPj0gMTAgPyBtb250aCA6IFwiMFwiICsgbW9udGg7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRheVN0ciA9IGRheSA+PSAxMCA/IGRheSA6IFwiMFwiICsgZGF5O1xuICAgICAgICBsZXQgZGF0ZVN0ciA9IHllYXIgKyBmb3JtYXRTdHIgKyBtb250aFN0ciArIGZvcm1hdFN0ciArIGRheVN0cjtcblxuICAgICAgICBpZiAoaGFzSE1TKVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRlU3RyICs9IChcIiBcIiArIGRhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgZGF0ZS5nZXRNaW51dGVzKCkgKyBcIjpcIiArIGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGVTdHI7XG4gICAgfVxuXG59XG4iXX0=