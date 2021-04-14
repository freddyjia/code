
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/View.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBQ2pDLHNEQUF1RTtBQUl2RTtJQUFBO1FBRVcsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUN0Qyw0Q0FBNEM7UUFDcEMsZUFBVSxHQUF3RCxFQUFFLENBQUM7UUFDckUsc0JBQWlCLEdBQTZCLEVBQUUsQ0FBQztRQUNqRCxpQkFBWSxHQUE2QixFQUFFLENBQUM7UUFDN0MsaUJBQVksR0FBb0UsSUFBSSxDQUFDO1FBQ3JGLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQW9DLEVBQUUsQ0FBQztRQUNyRCxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFVBQUssR0FBaUIsMkJBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0MsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUV4Qix1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDbkMsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBRW5DLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRWxDLHFEQUFxRDtRQUM3QyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBd0o5QixDQUFDO0lBdEpVLG1CQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhO0lBQ04sOEJBQWUsR0FBdEI7UUFFSSxLQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFV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TUFBTSxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFDdkI7WUFDSSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7SUFDRixzQkFBTyxHQUFkO0lBR0EsQ0FBQztJQUVELFNBQVM7SUFDRix5QkFBVSxHQUFqQjtJQUdBLENBQUM7SUFFRCxTQUFTO0lBQ0YseUJBQVUsR0FBakI7SUFHQSxDQUFDO0lBRUQsY0FBYztJQUNQLHNCQUFPLEdBQWQ7SUFHQSxDQUFDO0lBRUQsbUJBQW1CO0lBQ1oseUJBQVUsR0FBakI7SUFHQSxDQUFDO0lBRUQsWUFBWTtJQUNMLHdCQUFTLEdBQWhCO0lBR0EsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQTlLQSxBQThLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL1Rvb2xzL1V0aWxcIjtcbmltcG9ydCB7IExheWVyT3JkZXJOdW0sIFZpZXdDb25maWdEYXRhIH0gZnJvbSBcIi4uL01vZHVsZXMvVmlld0NvbmZpZ3NcIjtcbmltcG9ydCBjY0MgZnJvbSBcIi4uL1Rvb2xzL2NjQ1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdcbntcbiAgICBwdWJsaWMgcmVtb3ZlTWFza0NsaWNrOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNTaG93OmJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNMb2FkaW5nQXN5bmM6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHB1YmxpYyBzaG91bGRTaG93TG9hZGluZzpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjbGlja0Z1bmNzOntbYnRuTmFtZTpzdHJpbmddOihidXR0b246Y2MuQnV0dG9uLGRhdGE6YW55KT0+dm9pZH0gPSB7fTtcbiAgICBwcml2YXRlIGJ1dHRvbkN1c3RvbURhdGFzOntbYnRuTmFtZTpzdHJpbmddOnN0cmluZ30gPSB7fTtcbiAgICBwcml2YXRlIGJ1dHRvbkF1ZGlvczp7W2J0bk5hbWU6c3RyaW5nXTpzdHJpbmd9ID0ge307XG4gICAgcHVibGljIHNob3dDYWxsYmFjazooZmluaXNoTG9hZENhbGxiYWNrOihzdWNjZXNzOmJvb2xlYW4sZXJyTXNnOnN0cmluZyk9PnZvaWQpPT52b2lkID0gbnVsbDtcbiAgICBwdWJsaWMgaGlkZUNhbGxiYWNrOigpPT52b2lkID0gbnVsbDtcbiAgICBwdWJsaWMgdHJhbnNmb3JtQ2FjaGU6e1t0cmFuc2Zvcm1OYW1lOnN0cmluZ106Y2MuTm9kZX0gPSB7fTtcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBsYXllcjpMYXllck9yZGVyTnVtID0gTGF5ZXJPcmRlck51bS5VSU5vcm1hbDtcbiAgICBwdWJsaWMgaXNGb2N1czpib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG5vZGU6Y2MuTm9kZTtcbiAgICBwdWJsaWMgb25IaWRlVmlld0NhbGxiYWNrOigpPT52b2lkID0gbnVsbDtcbiAgICBwdWJsaWMgb25TaG93Vmlld0NhbGxiYWNrOigpPT52b2lkID0gbnVsbDtcbiAgICBwdWJsaWMgdmlld0NvbmZpZzpWaWV3Q29uZmlnRGF0YTtcbiAgICBwdWJsaWMgZGVwZW5kZW50UmVzOnN0cmluZ1tdID0gW107XG5cbiAgICAvL+W9k3Nob3fosIPnlKjnmoTml7blgJnvvIzlpoLmnpzotYTmupDliqDovb3mnJ/pl7TvvIzosIPnlKjkuoZoaWRl77yM5bqU6K+l5Zyoc2hvd+aIkOWKn+WQju+8jOaKinZpZXcgaGlkZeaOieOAglxuICAgIHByaXZhdGUgc2hvdWxkU2hvdyA9IHRydWU7XG5cbiAgICBwdWJsaWMgSW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnJlbW92ZU1hc2tDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsaWNrRnVuY3MgPSB7fTtcbiAgICAgICAgdGhpcy5idXR0b25BdWRpb3MgPSB7fTtcbiAgICAgICAgdGhpcy5idXR0b25DdXN0b21EYXRhcyA9IHt9O1xuICAgIH1cblxuICAgIC8v5qGG5p626LCD55So77yM5LiK5bGC6K+35Yu/6LCD55SoXG4gICAgcHVibGljIFNldEJ1dHRvbkNsaWNrcygpXG4gICAge1xuICAgICAgICBmb3IobGV0IGJ0bk5hbWUgaW4gdGhpcy5jbGlja0Z1bmNzKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIgPSB0aGlzLkZpbmRUcmFuc2Zvcm0oYnRuTmFtZSk7XG4gICAgICAgICAgICBpZih0ciA9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiU2V0QnV0dG9uQ2xpY2tzIOS4jeWtmOWcqCBidG5OYW1lIFwiICsgYnRuTmFtZSArIFwiIOaMiemSru+8jOa3u+WKoOaMiemSruS6i+S7tuWksei0pSBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGJ1dHRvbjpjYy5CdXR0b24gPSB0ci5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZihidXR0b24gPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiYnRuTmFtZSBcIiArIGJ0bk5hbWUgKyBcIiDmsqHmnInpmYTliqBCdXR0b27nu4Tku7bvvIzmt7vliqDmjInpkq7kuovku7blpLHotKUgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLlNldENsaWNrQWN0aW9uKGJ1dHRvbix0aGlzLmNsaWNrRnVuY3NbYnRuTmFtZV0sdGhpcy5idXR0b25BdWRpb3NbYnRuTmFtZV0sdGhpcy5idXR0b25DdXN0b21EYXRhc1tidG5OYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vL+S7peS4i+aYr+S4iuWxguWPr+iwg+eUqOeahCBjdXN0b21EYXRh5ZKMYXVkaW9OYW1l5piv5Y+v6YCJ5Y+C5pWw77yM5Y+v5LiN5aGrXG4gICAgcHVibGljIFNldE9uQ2xpY2soYnV0dG9uTmFtZTpzdHJpbmcsY2FsbGJhY2s6KGJ1dHRvbjpjYy5CdXR0b24sZGF0YTphbnkpPT52b2lkLGF1ZGlvTmFtZT86c3RyaW5nLGN1c3RvbURhdGE/OnN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuY2xpY2tGdW5jc1tidXR0b25OYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmJ1dHRvbkF1ZGlvc1tidXR0b25OYW1lXSA9IGF1ZGlvTmFtZTtcbiAgICAgICAgdGhpcy5idXR0b25DdXN0b21EYXRhc1tidXR0b25OYW1lXSA9IGN1c3RvbURhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIEZpbmRUcmFuc2Zvcm0obmFtZSk6Y2MuTm9kZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy50cmFuc2Zvcm1DYWNoZVtuYW1lXSAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiRmluZFRyYW5zZm9ybSDkuI3lrZjlnKh0cmFuc2Zvcm1OYW1lIFwiICsgbmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBSZW1vdmVNYXNrQ2xpY2soKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZW1vdmVNYXNrQ2xpY2sgPSB0cnVlO1xuICAgIH1cblxuICAgIC8v5Yqg6L295L6d6LWW6LWE5rqQ77yM5YWo6YOo5Yqg6L295a6M5omN5Lya5Zue6LCDc2hvdyBjYWxsYmFja1xuICAgIHB1YmxpYyBBZGREZXBlbmRlbnRSZXMocmVzUGF0aClcbiAgICB7ICAgXG4gICAgICAgIHRoaXMuZGVwZW5kZW50UmVzLnB1c2gocmVzUGF0aCk7XG4gICAgfVxuXG4gICAgLy9TaG935piv5byC5q2l5Yqg6L296LWE5rqQ77yM6ZyA6KaBY2FsbGJhY2vmnLrliLZcbiAgICBwdWJsaWMgU2hvdyhzdWNjZXNzQ2FsbGJhY2s6KCk9PnZvaWQ9bnVsbCxmYWlsQ2FsbGJhY2s6KGVyck1zZzpzdHJpbmcpPT52b2lkPW51bGwpXG4gICAge1xuICAgICAgICB0aGlzLnNob3VsZFNob3cgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLmlzU2hvdyA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihzdWNjZXNzQ2FsbGJhY2sgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmlzTG9hZGluZ0FzeW5jID09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwidmlldyBcIiArIG5hbWUgKyBcIiDotYTmupDlvILmraXor7fmsYLkuK3vvIzor7fli7/ph43lpI3osIPnlKhcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2soKHN1Y2Nlc3M6Ym9vbGVhbixlcnJNc2c6c3RyaW5nKT0+e1xuICAgICAgICAgICAgaWYoc3VjY2VzcyA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHN1Y2Nlc3NDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaG91bGRTaG93ID09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGZhaWxDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSGlkZSgpXG4gICAge1xuICAgICAgICB0aGlzLnNob3VsZFNob3cgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5pc1Nob3cgPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8v5Lul5LiL5piv6YeN5YaZ5Ye95pWwXG4gICAgcHVibGljIE9uQXdha2UoKVxuICAgIHtcblxuICAgIH1cblxuICAgIC8v5pi+56S655qE5pe25YCZ5Zue6LCDXG4gICAgcHVibGljIE9uU2hvd1ZpZXcoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy/pmpDol4/nmoTml7blgJnlm57osINcbiAgICBwdWJsaWMgT25IaWRlVmlldygpXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvL+W9k+eVjOmdouWOu+WIsOacgOWJjeeahOaXtuWAmeWbnuiwg1xuICAgIHB1YmxpYyBPbkZvY3VzKClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8v5b2T55WM6Z2i5LuO5pyA5YmN5YiH5o2i5Zue6Z2e5pyA5YmN55qE5pe25YCZ5Zue6LCDXG4gICAgcHVibGljIE9uRGlzRm9jdXMoKVxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy/lvZPnlYzpnaLplIDmr4HnmoTml7blgJnlm57osINcbiAgICBwdWJsaWMgT25EZXN0cm95KClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxufVxuIl19