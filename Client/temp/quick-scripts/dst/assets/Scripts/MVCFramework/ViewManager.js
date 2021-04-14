
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/ViewManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c787bqsFYpA4a4bad8uB73e', 'ViewManager');
// Scripts/MVCFramework/ViewManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVCRegister_1 = require("../Modules/MVCRegister");
var ViewConfigs_1 = require("../Modules/ViewConfigs");
var Util_1 = require("../Tools/Util");
var TimerManager_1 = require("../Components/TimerManager");
var XTween_1 = require("../Tools/XTween/XTween");
var ccC_1 = require("../Tools/ccC");
var XTweenCurv_1 = require("../Tools/XTween/Base/XTweenCurv");
// //UI节点上的gameobject名称
// enum LayerOrderName {
//     UINormal = "UINormal",
//     UIPopup = "UIPopup",
//     UITop = "UITop"
// };
var ViewManager = /** @class */ (function () {
    function ViewManager() {
    }
    ViewManager.Clean = function () {
        this.DestroyAllView();
        this.ClearAllViewStack();
        this.viewNormalPopupStackArray = [];
        // this.viewTopStackArray = [];
    };
    ViewManager.Init = function () {
        if (this.UINormal != null) {
            return;
        }
        var mainNode = cc.find("Main");
        cc.game.addPersistRootNode(mainNode);
        var canvasNode = cc.find("Canvas");
        cc.game.addPersistRootNode(canvasNode);
        this.UINormal = cc.find("Canvas/UINormal");
        this.UIPopup = cc.find("Canvas/UIPopup");
        this.UITop = cc.find("Canvas/UITop");
        this.UITopper = cc.find("Canvas/UITopper");
        this.bigLoading = cc.find("Canvas/UILoading/BigLoading");
        this.LoadingMask = cc.find("Canvas/UILoading/LoadingMask");
        this.Loading_LOGO = cc.find("Loading_LOGO", this.bigLoading).getComponent(cc.Sprite);
        this.spriteProgress = cc.find("Progress/SpriteProgress", this.bigLoading).getComponent(cc.Sprite);
        this.labelProgress = cc.find("Progress/LabelProgress", this.bigLoading).getComponent(cc.Label);
        this.LoadingEff = cc.find("LoadingEff", this.spriteProgress.node);
        this.smallLoading = cc.find("Canvas/UILoading/SmallLoading");
        this.loadingErr = cc.find("Canvas/UILoading/LoadingErr");
        this.Loading_LOGO.node.active = false;
    };
    ViewManager.SetTransformDic = function (node, dicTransforms) {
        dicTransforms[node.name] = node;
        for (var i = 0; i < node.childrenCount; i++) {
            this.SetTransformDic(node.children[i], dicTransforms);
        }
    };
    ViewManager.SetHideView = function (view) {
        if (view.isShow == false) {
            return;
        }
        if (view.node != null) {
            view.node.active = false;
        }
        view.isShow = false;
        if (view.onHideViewCallback != null) {
            view.onHideViewCallback();
        }
        view.OnHideView();
    };
    ViewManager.AllLoadFinish = function (view, getPrefabCallback, timerID) {
        var _this = this;
        TimerManager_1.default.GetInstance().DeleteTimer(timerID);
        TimerManager_1.default.GetInstance().CallActionDelay(function () {
            if (view.viewConfig.loadingStyle != ViewConfigs_1.LoadingStyle.None) {
                _this.bigLoading.active = false;
                _this.smallLoading.active = false;
            }
        }, 0.1, null, 0, 0, true);
        this.LoadingMask.active = false;
        if (view.viewConfig.loadingStyle == ViewConfigs_1.LoadingStyle.FullScreen) {
            // this.spriteProgress.fillStart = 1;
            // this.labelProgress.string = "100%";
            this.SetProgress(1);
        }
        if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal) {
            view.node.setParent(this.UINormal);
        }
        else if (view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
            view.node.setParent(this.UIPopup);
            //TODO: add mask
            ccC_1.default.loadRes("Prefab/ButtonMask", cc.Prefab, function (errloadMask, perfabMask) {
                if (errloadMask) {
                    cc.error("err  " + errloadMask.message || errloadMask);
                    return;
                }
                var nodeMask = cc.instantiate(perfabMask);
                nodeMask.setParent(view.node);
                nodeMask.setSiblingIndex(0);
                nodeMask.setPosition(0, 0);
                nodeMask.name = "PopUIMask";
                nodeMask.getComponent(cc.Widget).updateAlignment();
                Util_1.default.SetClickAction(nodeMask.getComponent(cc.Button), function () {
                    if (view.removeMaskClick == false)
                        view.Hide();
                });
            });
        }
        else if (view.layer == ViewConfigs_1.LayerOrderNum.UITop) {
            view.node.setParent(this.UITop);
        }
        else if (view.layer == ViewConfigs_1.LayerOrderNum.UITopper) {
            view.node.setParent(this.UITopper);
        }
        view.node.setPosition(0, 0);
        view.OnAwake();
        view.SetButtonClicks();
        getPrefabCallback(true, "");
        view.isLoadingAsync = false;
    };
    ViewManager.SetProgress = function (progress) {
        this.spriteProgress.fillStart = progress;
        this.labelProgress.string = (Math.floor(progress * 100)).toString() + "%";
        this.LoadingEff.position = new cc.Vec2(-378 + 756 * progress, 0);
    };
    ViewManager.CreateViewObj = function (view, getPrefabCallback) {
        var _this = this;
        view.isLoadingAsync = true;
        var timerID;
        if (view.viewConfig.loadingStyle != ViewConfigs_1.LoadingStyle.None) {
            this.LoadingMask.active = true;
            //加载1秒还没完成就需要显示加载条
            timerID = TimerManager_1.default.GetInstance().CallActionDelay(function () {
                if (view.isLoadingAsync == true) {
                    if (view.viewConfig.loadingStyle == ViewConfigs_1.LoadingStyle.FullScreen) {
                        _this.bigLoading.active = true;
                        // this.spriteProgress.fillStart = 0;
                        // this.labelProgress.string = "0%";
                        /*
                        var imagePath = "MainGame/textures/Login/DL_LOGO";
                        ccC.loadRes(imagePath, cc.SpriteFrame, (err: Error, texture: any) =>{
                            if (err) {
                                cc.error("err  " + err.message || err);
                                return;
                            }
                            this.Loading_LOGO.spriteFrame = texture;
                        });
                        */
                        _this.SetProgress(0);
                    }
                    else {
                        _this.smallLoading.active = true;
                    }
                }
            }, 1, null, 0, 0, true);
        }
        //view prefab占总加载比的最大比例
        var mainMaxProgress;
        mainMaxProgress = 0.9 / (view.dependentRes.length + 1);
        if (mainMaxProgress < 0.4) {
            mainMaxProgress = 0.4;
        }
        var mainProgress = 0;
        var dependentProgressDic = {};
        var finishStateDic = {};
        var currentProgress = 0;
        var progressAddTimer = null;
        //每个依赖占的比例
        var perMaxProgress = (0.9 - mainMaxProgress) / view.dependentRes.length;
        var funcCheckFinish = function () {
            var allfinish = true;
            for (var path in finishStateDic) {
                if (finishStateDic[path] == false) {
                    allfinish = false;
                    break;
                }
            }
            if (allfinish) {
                TimerManager_1.default.GetInstance().DeleteTimer(progressAddTimer);
                _this.AllLoadFinish(view, getPrefabCallback, timerID);
            }
        };
        var funcUpdateProgress = function () {
            if (view.viewConfig.loadingStyle == ViewConfigs_1.LoadingStyle.FullScreen) {
                var allDependentProgress = 0;
                for (var dependentPath in dependentProgressDic) {
                    allDependentProgress += dependentProgressDic[dependentPath];
                }
                var progress = allDependentProgress + mainProgress;
                if (progress > currentProgress) {
                    currentProgress = progress;
                }
                // this.spriteProgress.fillStart = currentProgress;
                // this.labelProgress.string = (Math.floor(currentProgress * 100)).toString() + "%";
                _this.SetProgress(currentProgress);
                if (currentProgress > 0.98) {
                    TimerManager_1.default.GetInstance().DeleteTimer(progressAddTimer);
                }
            }
        };
        var cnt = 0;
        if (view.viewConfig.loadingStyle == ViewConfigs_1.LoadingStyle.FullScreen) {
            progressAddTimer = TimerManager_1.default.GetInstance().CallActionDelay(function () {
                cnt++;
                var step = 0.1 / (cnt * cnt);
                if (step > 0.01) {
                    step = 0.01;
                }
                else if (step < 0.002) {
                    step = 0.002;
                }
                currentProgress += step;
                if (currentProgress > 0.95) {
                    currentProgress = 0.95;
                }
                funcUpdateProgress();
            }, 0.5, null, 120, 0, true);
        }
        var _loop_1 = function (i) {
            var dependentPath = view.dependentRes[i];
            dependentProgressDic[dependentPath] = 0;
            finishStateDic[dependentPath] = false;
            ccC_1.default.loadResProgressWithoutType(dependentPath, function (completedCount, totalCount, item) {
                dependentProgressDic[dependentPath] = perMaxProgress * completedCount / totalCount;
                if (view.isLoadingAsync == true)
                    funcUpdateProgress();
            }, function (err, perfab) {
                dependentProgressDic[dependentPath] = perMaxProgress;
                finishStateDic[dependentPath] = true;
                if (view.isLoadingAsync == true)
                    funcCheckFinish();
            });
        };
        for (var i = 0; i < view.dependentRes.length; i++) {
            _loop_1(i);
        }
        finishStateDic[view.viewConfig.prefabPath] = false;
        ccC_1.default.loadResProgress(view.viewConfig.prefabPath, cc.Prefab, function (completedCount, totalCount, item) {
            mainProgress = completedCount / totalCount * mainMaxProgress;
            if (view.isLoadingAsync == true)
                funcUpdateProgress();
        }, function (err, perfab) {
            if (err != null) {
                var errMsg = "加载 view prefab 错误:" + err.message;
                getPrefabCallback(false, errMsg);
                cc.error(errMsg);
                if (view.viewConfig.loadingStyle != ViewConfigs_1.LoadingStyle.None) {
                    _this.bigLoading.active = false;
                    _this.smallLoading.active = false;
                    _this.LoadingMask.active = false;
                }
                view.isLoadingAsync = false;
                _this.loadingErr.active = true;
                _this.loadingErr.opacity = 255;
                var tweener = XTween_1.default.DoValue(_this.loadingErr, function (value) {
                    _this.loadingErr.opacity = value * 255;
                }, 1, 0, 1, 1, false, XTweenCurv_1.XTweenCurvType.Liner, null, 2);
                tweener.SetFinishCallback(function () {
                    _this.loadingErr.active = false;
                });
                tweener.Play();
                return;
            }
            var node = cc.instantiate(perfab);
            node.name = view.name;
            view.node = node;
            _this.SetTransformDic(node, view.transformCache);
            _this.viewWithNodes.push(view);
            finishStateDic[view.viewConfig.prefabPath] = true;
            mainProgress = mainMaxProgress;
            funcCheckFinish();
        });
    };
    ViewManager.SetShowView = function (view, showviewCallback) {
        var funcCallback = function (success, errMsg) {
            if (success == true) {
                view.node.active = true;
                view.isShow = true;
                view.node.setSiblingIndex(view.node.parent.childrenCount - 1);
                showviewCallback(true, "");
                if (view.onShowViewCallback != null) {
                    view.onShowViewCallback();
                }
                view.OnShowView();
            }
            else {
                showviewCallback(false, errMsg);
            }
        };
        if (view.node == null) {
            this.CreateViewObj(view, funcCallback);
        }
        else {
            funcCallback(true, "");
        }
    };
    ViewManager.GetView = function (viewName) {
        var _this = this;
        var view = this.dicViews[viewName];
        if (view == null) {
            view = MVCRegister_1.MVCRegister.dicViews[viewName]();
            if (view == null) {
                cc.error("viewName " + viewName + " 未注册");
                return null;
            }
            this.dicViews[viewName] = view;
        }
        // let view = MVCRegister.dicViews[viewName]();
        // if(view == null)
        // {
        //     cc.error("viewName " + viewName + " 未注册");
        //     return null;
        // }
        view.name = viewName;
        view.showCallback = function (callback) {
            if (view.isShow == true) {
                callback(true, "");
                return;
            }
            // cc.error("viewName    " + viewName);
            var viewConfig = ViewConfigs_1.default.GetViewConfig(viewName);
            if (viewConfig == null) {
                var errMsg = "viewConfig 配置为空 viewName:" + viewName;
                callback(false, errMsg);
                cc.error(errMsg);
                return;
            }
            var lastView = null;
            if (_this.viewNormalPopupStackArray.length != 0) {
                lastView = _this.viewNormalPopupStackArray[_this.viewNormalPopupStackArray.length - 1];
            }
            view.viewConfig = viewConfig;
            view.layer = viewConfig.layer;
            _this.SetShowView(view, function (success, errMsg) {
                if (success == false) {
                    callback(false, errMsg);
                    return;
                }
                if (lastView != null && (view.layer == ViewConfigs_1.LayerOrderNum.UINormal || view.layer == ViewConfigs_1.LayerOrderNum.UIPopup)) {
                    _this.DeActiveViewFuncs(lastView);
                }
                if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal) {
                    for (var i = _this.viewNormalPopupStackArray.length - 1; i >= 0; i--) {
                        var viewInStack = _this.viewNormalPopupStackArray[i];
                        if (viewInStack.isShow == true) {
                            _this.SetHideView(viewInStack);
                        }
                    }
                }
                else if (view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                    for (var i = _this.viewNormalPopupStackArray.length - 1; i >= 0; i--) {
                        var viewInStack = _this.viewNormalPopupStackArray[i];
                        if (viewInStack.isShow == true && viewInStack.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                            _this.SetHideView(viewInStack);
                        }
                    }
                }
                if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal || view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                    _this.viewNormalPopupStackArray.push(view);
                }
                else {
                    // this.viewTopStackArray.push(view);
                }
                if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal || view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                    _this.ActiveViewFuncs(view);
                }
                callback(true, "");
                if (view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                    _this.DoAnimation(view);
                }
            });
        };
        view.hideCallback = function () {
            if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal || view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                _this.DeActiveViewFuncs(view);
            }
            if (_this.viewNormalPopupStackArray.length == 1
                && view.layer != ViewConfigs_1.LayerOrderNum.UITop
                && view.layer != ViewConfigs_1.LayerOrderNum.UITopper) {
                return;
            }
            if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal) {
                //如果view不在栈顶，就要先隐藏栈上的其他pop层view
                var deactivePop = false;
                if (_this.viewNormalPopupStackArray[_this.viewNormalPopupStackArray.length - 1] != view) {
                    for (var i = _this.viewNormalPopupStackArray.length - 1; i >= 0; i--) {
                        if (_this.viewNormalPopupStackArray[i] == view) {
                            break;
                        }
                        var popView = _this.viewNormalPopupStackArray[i];
                        if (deactivePop == false) {
                            deactivePop = true;
                            _this.DeActiveViewFuncs(popView);
                        }
                        _this.SetHideView(popView);
                        Util_1.default.RemoveArray(_this.viewNormalPopupStackArray, i);
                    }
                }
                _this.SetHideView(view);
                _this.viewNormalPopupStackArray.pop();
                for (var i = _this.viewNormalPopupStackArray.length - 1; i >= 0; i--) {
                    var viewInStack = _this.viewNormalPopupStackArray[i];
                    _this.SetShowView(viewInStack, function (success, errmsg) {
                        if (success == false) {
                            cc.error("显示失败1 errmsg " + errmsg);
                        }
                    });
                    if (viewInStack.layer == ViewConfigs_1.LayerOrderNum.UINormal)
                        break;
                }
            }
            else if (view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                _this.SetHideView(view);
                _this.viewNormalPopupStackArray.pop();
                var lastView = _this.viewNormalPopupStackArray[_this.viewNormalPopupStackArray.length - 1];
                //pop层的view消失  只会引起pop层的view的显示
                if (lastView.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                    _this.SetShowView(lastView, function (success, errmsg) {
                        if (success == false) {
                            cc.error("显示失败2 errmsg " + errmsg);
                        }
                    });
                }
            }
            else {
                _this.SetHideView(view);
                // this.viewTopStackArray.pop();
            }
            if (view.layer == ViewConfigs_1.LayerOrderNum.UINormal || view.layer == ViewConfigs_1.LayerOrderNum.UIPopup) {
                var lastView = _this.viewNormalPopupStackArray[_this.viewNormalPopupStackArray.length - 1];
                _this.ActiveViewFuncs(lastView);
            }
        };
        return view;
    };
    ViewManager.DoAnimation = function (view) {
        var window = cc.find("Window", view.node);
        if (window == null) {
            window = cc.find("window", view.node);
        }
        if (window == null)
            return;
        window.scaleX = 0.8;
        window.scaleY = 0.8;
        var action = cc.sequence(cc.scaleTo(0.08, 1.1, 1.1), cc.scaleTo(0.08, 1, 1));
        window.runAction(action);
    };
    ViewManager.ActiveViewFuncs = function (view) {
        if (view.isFocus == true) {
            return;
        }
        view.isFocus = true;
        view.OnFocus();
    };
    ViewManager.DeActiveViewFuncs = function (view) {
        if (view.isFocus == false) {
            return;
        }
        view.isFocus = false;
        view.OnDisFocus();
    };
    ViewManager.SetViewDestroy = function (view) {
        // cc.error("SetViewDestroy " + view.name);
        if (view.node == null)
            return;
        this.SetHideView(view);
        view.OnDestroy();
        view.node.destroy();
        view.node = null;
    };
    ViewManager.DestroyAllView = function () {
        for (var i = 0; i < this.viewWithNodes.length; i++) {
            var view = this.viewWithNodes[i];
            // if(view.layer == LayerOrderNum.UITop)
            //     continue;
            var findUnDestroy = false;
            for (var j = 0; j < this.UnDestroyViews.length; j++) {
                if (view.name == this.UnDestroyViews[j]) {
                    findUnDestroy = true;
                    break;
                }
            }
            if (findUnDestroy == true) {
                continue;
            }
            else {
                this.SetViewDestroy(view);
            }
        }
    };
    ViewManager.ClearAllViewStack = function () {
        this.viewNormalPopupStackArray = [];
        for (var viewName in this.dicViews) {
            var findUnDestroy = false;
            for (var j = 0; j < this.UnDestroyViews.length; j++) {
                if (viewName == this.UnDestroyViews[j]) {
                    findUnDestroy = true;
                    break;
                }
            }
            //如果不在非删列表里就删掉
            if (findUnDestroy == false) {
                delete (this.dicViews[viewName]);
                this.dicViews[viewName] = null;
            }
        }
    };
    ViewManager.viewNormalPopupStackArray = [];
    // private static viewTopStackArray:Array<View> = [];
    ViewManager.UnDestroyViews = [MVCRegister_1.ViewNames.ViewToast, MVCRegister_1.ViewNames.ViewDialogNormal, MVCRegister_1.ViewNames.ViewOpenNetworking];
    ViewManager.dicViews = {};
    ViewManager.viewWithNodes = [];
    return ViewManager;
}());
exports.default = ViewManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxWaWV3TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFnRTtBQUNoRSxzREFBa0Y7QUFDbEYsc0NBQWlDO0FBQ2pDLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFDNUMsb0NBQStCO0FBQy9CLDhEQUFpRTtBQUVqRSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0Isc0JBQXNCO0FBQ3RCLEtBQUs7QUFFTDtJQUFBO0lBb3FCQSxDQUFDO0lBN29CaUIsaUJBQUssR0FBbkI7UUFFSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUNwQywrQkFBK0I7SUFDbkMsQ0FBQztJQUVhLGdCQUFJLEdBQWxCO1FBRUksSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFDeEI7WUFDSSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElB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QzFELHFEQUFxRDtJQUN0QywwQkFBYyxHQUFpQixDQUFDLHVCQUFTLENBQUMsU0FBUyxFQUFDLHVCQUFTLENBQUMsZ0JBQWdCLEVBQUMsdUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBSzdHLG9CQUFRLEdBQTRCLEVBQUUsQ0FBQztJQUN2Qyx5QkFBYSxHQUFlLEVBQUUsQ0FBQztJQTBwQmxELGtCQUFDO0NBcHFCRCxBQW9xQkMsSUFBQTtrQkFwcUJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IHsgTVZDUmVnaXN0ZXIsIFZpZXdOYW1lcyB9IGZyb20gXCIuLi9Nb2R1bGVzL01WQ1JlZ2lzdGVyXCI7XG5pbXBvcnQgVmlld0NvbmZpZ3MsIHsgTGF5ZXJPcmRlck51bSwgTG9hZGluZ1N0eWxlIH0gZnJvbSBcIi4uL01vZHVsZXMvVmlld0NvbmZpZ3NcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuLi9Ub29scy9VdGlsXCI7XG5pbXBvcnQgVGltZXJNYW5hZ2VyIGZyb20gXCIuLi9Db21wb25lbnRzL1RpbWVyTWFuYWdlclwiO1xuaW1wb3J0IFhUd2VlbiBmcm9tIFwiLi4vVG9vbHMvWFR3ZWVuL1hUd2VlblwiO1xuaW1wb3J0IGNjQyBmcm9tIFwiLi4vVG9vbHMvY2NDXCI7XG5pbXBvcnQgeyBYVHdlZW5DdXJ2VHlwZSB9IGZyb20gXCIuLi9Ub29scy9YVHdlZW4vQmFzZS9YVHdlZW5DdXJ2XCI7XG5cbi8vIC8vVUnoioLngrnkuIrnmoRnYW1lb2JqZWN05ZCN56ewXG4vLyBlbnVtIExheWVyT3JkZXJOYW1lIHtcbi8vICAgICBVSU5vcm1hbCA9IFwiVUlOb3JtYWxcIixcbi8vICAgICBVSVBvcHVwID0gXCJVSVBvcHVwXCIsXG4vLyAgICAgVUlUb3AgPSBcIlVJVG9wXCJcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNYW5hZ2VyXG57XG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlld05vcm1hbFBvcHVwU3RhY2tBcnJheTpBcnJheTxWaWV3PiA9IFtdO1xuICAgIC8vIHByaXZhdGUgc3RhdGljIHZpZXdUb3BTdGFja0FycmF5OkFycmF5PFZpZXc+ID0gW107XG4gICAgcHJpdmF0ZSBzdGF0aWMgVW5EZXN0cm95Vmlld3M6QXJyYXk8c3RyaW5nPiA9IFtWaWV3TmFtZXMuVmlld1RvYXN0LFZpZXdOYW1lcy5WaWV3RGlhbG9nTm9ybWFsLFZpZXdOYW1lcy5WaWV3T3Blbk5ldHdvcmtpbmddO1xuICAgIHByaXZhdGUgc3RhdGljIFVJTm9ybWFsOmNjLk5vZGU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlQb3B1cDpjYy5Ob2RlO1xuICAgIHByaXZhdGUgc3RhdGljIFVJVG9wOmNjLk5vZGU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVUlUb3BwZXI6Y2MuTm9kZTtcbiAgICBwcml2YXRlIHN0YXRpYyBkaWNWaWV3czp7W3ZpZXdOYW1lOnN0cmluZ106Vmlld30gPSB7fTtcbiAgICBwcml2YXRlIHN0YXRpYyB2aWV3V2l0aE5vZGVzOkFycmF5PFZpZXc+ID0gW107XG5cbiAgICBwcml2YXRlIHN0YXRpYyBiaWdMb2FkaW5nOmNjLk5vZGU7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3ByaXRlUHJvZ3Jlc3M6Y2MuU3ByaXRlO1xuICAgIHByaXZhdGUgc3RhdGljIGxhYmVsUHJvZ3Jlc3M6Y2MuTGFiZWw7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzbWFsbExvYWRpbmc6Y2MuTm9kZTtcbiAgICBwcml2YXRlIHN0YXRpYyBMb2FkaW5nX0xPR086Y2MuU3ByaXRlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZGluZ0VycjpjYy5Ob2RlO1xuICAgIHByaXZhdGUgc3RhdGljIExvYWRpbmdFZmY6Y2MuTm9kZTtcbiAgICBwcml2YXRlIHN0YXRpYyBMb2FkaW5nTWFzazpjYy5Ob2RlO1xuXG4gICAgcHVibGljIHN0YXRpYyBDbGVhbigpXG4gICAge1xuICAgICAgICB0aGlzLkRlc3Ryb3lBbGxWaWV3KCk7XG4gICAgICAgIHRoaXMuQ2xlYXJBbGxWaWV3U3RhY2soKTtcbiAgICAgICAgdGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5ID0gW107XG4gICAgICAgIC8vIHRoaXMudmlld1RvcFN0YWNrQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5VSU5vcm1hbCAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG4gICAgICAgIGxldCBtYWluTm9kZSA9IGNjLmZpbmQoXCJNYWluXCIpO1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShtYWluTm9kZSk7XG4gICAgICAgIGxldCBjYW52YXNOb2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoY2FudmFzTm9kZSk7XG5cbiAgICAgICAgdGhpcy5VSU5vcm1hbCA9IGNjLmZpbmQoXCJDYW52YXMvVUlOb3JtYWxcIik7XG4gICAgICAgIHRoaXMuVUlQb3B1cCA9IGNjLmZpbmQoXCJDYW52YXMvVUlQb3B1cFwiKTtcbiAgICAgICAgdGhpcy5VSVRvcCA9IGNjLmZpbmQoXCJDYW52YXMvVUlUb3BcIik7XG4gICAgICAgIHRoaXMuVUlUb3BwZXIgPSBjYy5maW5kKFwiQ2FudmFzL1VJVG9wcGVyXCIpO1xuXG4gICAgICAgIHRoaXMuYmlnTG9hZGluZyA9IGNjLmZpbmQoXCJDYW52YXMvVUlMb2FkaW5nL0JpZ0xvYWRpbmdcIik7XG4gICAgICAgIHRoaXMuTG9hZGluZ01hc2sgPSBjYy5maW5kKFwiQ2FudmFzL1VJTG9hZGluZy9Mb2FkaW5nTWFza1wiKTtcbiAgICAgICAgdGhpcy5Mb2FkaW5nX0xPR08gPSBjYy5maW5kKFwiTG9hZGluZ19MT0dPXCIsdGhpcy5iaWdMb2FkaW5nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5zcHJpdGVQcm9ncmVzcyA9IGNjLmZpbmQoXCJQcm9ncmVzcy9TcHJpdGVQcm9ncmVzc1wiLHRoaXMuYmlnTG9hZGluZykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMubGFiZWxQcm9ncmVzcyA9IGNjLmZpbmQoXCJQcm9ncmVzcy9MYWJlbFByb2dyZXNzXCIsdGhpcy5iaWdMb2FkaW5nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLkxvYWRpbmdFZmYgPSBjYy5maW5kKFwiTG9hZGluZ0VmZlwiLHRoaXMuc3ByaXRlUHJvZ3Jlc3Mubm9kZSk7XG5cbiAgICAgICAgdGhpcy5zbWFsbExvYWRpbmcgPSBjYy5maW5kKFwiQ2FudmFzL1VJTG9hZGluZy9TbWFsbExvYWRpbmdcIik7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nRXJyID0gY2MuZmluZChcIkNhbnZhcy9VSUxvYWRpbmcvTG9hZGluZ0VyclwiKTtcblxuICAgICAgICB0aGlzLkxvYWRpbmdfTE9HTy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXRUcmFuc2Zvcm1EaWMobm9kZTpjYy5Ob2RlLGRpY1RyYW5zZm9ybXM6e1t0cmFuc2Zvcm1OYW1lOnN0cmluZ106Y2MuTm9kZX0pXG4gICAge1xuICAgICAgICBkaWNUcmFuc2Zvcm1zW25vZGUubmFtZV0gPSBub2RlO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8bm9kZS5jaGlsZHJlbkNvdW50O2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5TZXRUcmFuc2Zvcm1EaWMobm9kZS5jaGlsZHJlbltpXSxkaWNUcmFuc2Zvcm1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIFNldEhpZGVWaWV3KHZpZXc6VmlldylcbiAgICB7XG4gICAgICAgIGlmKHZpZXcuaXNTaG93ID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodmlldy5ub2RlICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZXcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICBpZih2aWV3Lm9uSGlkZVZpZXdDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB2aWV3Lm9uSGlkZVZpZXdDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcuT25IaWRlVmlldygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEFsbExvYWRGaW5pc2godmlldzpWaWV3LGdldFByZWZhYkNhbGxiYWNrLHRpbWVySUQpXG4gICAge1xuICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcih0aW1lcklEKTtcblxuICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5DYWxsQWN0aW9uRGVsYXkoKCk9PntcbiAgICAgICAgICAgIGlmKHZpZXcudmlld0NvbmZpZy5sb2FkaW5nU3R5bGUgIT0gTG9hZGluZ1N0eWxlLk5vbmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdMb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc21hbGxMb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LDAuMSxudWxsLDAsMCx0cnVlKTtcbiAgICAgICAgdGhpcy5Mb2FkaW5nTWFzay5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZih2aWV3LnZpZXdDb25maWcubG9hZGluZ1N0eWxlID09IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyB0aGlzLnNwcml0ZVByb2dyZXNzLmZpbGxTdGFydCA9IDE7XG4gICAgICAgICAgICAvLyB0aGlzLmxhYmVsUHJvZ3Jlc3Muc3RyaW5nID0gXCIxMDAlXCI7XG4gICAgICAgICAgICB0aGlzLlNldFByb2dyZXNzKDEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlOb3JtYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZXcubm9kZS5zZXRQYXJlbnQodGhpcy5VSU5vcm1hbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlQb3B1cClcbiAgICAgICAge1xuICAgICAgICAgICAgdmlldy5ub2RlLnNldFBhcmVudCh0aGlzLlVJUG9wdXApO1xuICAgICAgICAgICAgLy9UT0RPOiBhZGQgbWFza1xuICAgICAgICAgICAgY2NDLmxvYWRSZXMoXCJQcmVmYWIvQnV0dG9uTWFza1wiLGNjLlByZWZhYixcbiAgICAgICAgICAgIChlcnJsb2FkTWFzazogRXJyb3IsIHBlcmZhYk1hc2s6IGFueSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZXJybG9hZE1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJlcnIgIFwiICsgZXJybG9hZE1hc2subWVzc2FnZSB8fCBlcnJsb2FkTWFzayk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVNYXNrOmNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwZXJmYWJNYXNrKTtcbiAgICAgICAgICAgICAgICBub2RlTWFzay5zZXRQYXJlbnQodmlldy5ub2RlKTtcbiAgICAgICAgICAgICAgICBub2RlTWFzay5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgbm9kZU1hc2suc2V0UG9zaXRpb24oMCwwKTtcbiAgICAgICAgICAgICAgICBub2RlTWFzay5uYW1lID0gXCJQb3BVSU1hc2tcIjtcbiAgICAgICAgICAgICAgICBub2RlTWFzay5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcblxuICAgICAgICAgICAgICAgIFV0aWwuU2V0Q2xpY2tBY3Rpb24obm9kZU1hc2suZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYodmlldy5yZW1vdmVNYXNrQ2xpY2sgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LkhpZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJVG9wKVxuICAgICAgICB7XG4gICAgICAgICAgICB2aWV3Lm5vZGUuc2V0UGFyZW50KHRoaXMuVUlUb3ApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJVG9wcGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICB2aWV3Lm5vZGUuc2V0UGFyZW50KHRoaXMuVUlUb3BwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcubm9kZS5zZXRQb3NpdGlvbigwLDApO1xuICAgICAgICBcbiAgICAgICAgdmlldy5PbkF3YWtlKCk7XG4gICAgICAgIHZpZXcuU2V0QnV0dG9uQ2xpY2tzKCk7XG4gICAgICAgIGdldFByZWZhYkNhbGxiYWNrKHRydWUsXCJcIik7XG4gICAgICAgIHZpZXcuaXNMb2FkaW5nQXN5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXRQcm9ncmVzcyhwcm9ncmVzcylcbiAgICB7XG4gICAgICAgIHRoaXMuc3ByaXRlUHJvZ3Jlc3MuZmlsbFN0YXJ0ID0gcHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMubGFiZWxQcm9ncmVzcy5zdHJpbmcgPSAoTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwMCkpLnRvU3RyaW5nKCkgKyBcIiVcIjtcbiAgICAgICAgdGhpcy5Mb2FkaW5nRWZmLnBvc2l0aW9uID0gbmV3IGNjLlZlYzIoLTM3OCArIDc1NiAqIHByb2dyZXNzLDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIENyZWF0ZVZpZXdPYmoodmlldzpWaWV3LGdldFByZWZhYkNhbGxiYWNrOihzdWNjZXNzOmJvb2xlYW4sZXJyTXNnOnN0cmluZyk9PnZvaWQpXG4gICAge1xuICAgICAgICB2aWV3LmlzTG9hZGluZ0FzeW5jID0gdHJ1ZTtcblxuICAgICAgICBsZXQgdGltZXJJRDtcbiAgICAgICAgaWYodmlldy52aWV3Q29uZmlnLmxvYWRpbmdTdHlsZSAhPSBMb2FkaW5nU3R5bGUuTm9uZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5Mb2FkaW5nTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy/liqDovb0x56eS6L+Y5rKh5a6M5oiQ5bCx6ZyA6KaB5pi+56S65Yqg6L295p2hXG4gICAgICAgICAgICB0aW1lcklEID0gVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuQ2FsbEFjdGlvbkRlbGF5KCgpPT57XG4gICAgICAgICAgICAgICAgaWYodmlldy5pc0xvYWRpbmdBc3luYyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmlldy52aWV3Q29uZmlnLmxvYWRpbmdTdHlsZSA9PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWdMb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNwcml0ZVByb2dyZXNzLmZpbGxTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxhYmVsUHJvZ3Jlc3Muc3RyaW5nID0gXCIwJVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlUGF0aCA9IFwiTWFpbkdhbWUvdGV4dHVyZXMvTG9naW4vRExfTE9HT1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2NDLmxvYWRSZXMoaW1hZ2VQYXRoLCBjYy5TcHJpdGVGcmFtZSwgKGVycjogRXJyb3IsIHRleHR1cmU6IGFueSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciAgXCIgKyBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9hZGluZ19MT0dPLnNwcml0ZUZyYW1lID0gdGV4dHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc21hbGxMb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDEsbnVsbCwwLDAsdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vdmlldyBwcmVmYWLljaDmgLvliqDovb3mr5TnmoTmnIDlpKfmr5TkvotcbiAgICAgICAgbGV0IG1haW5NYXhQcm9ncmVzcztcbiAgICAgICAgbWFpbk1heFByb2dyZXNzID0gMC45IC8gKHZpZXcuZGVwZW5kZW50UmVzLmxlbmd0aCArIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYobWFpbk1heFByb2dyZXNzIDwgMC40KVxuICAgICAgICB7XG4gICAgICAgICAgICBtYWluTWF4UHJvZ3Jlc3MgPSAwLjQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFpblByb2dyZXNzID0gMDtcbiAgICAgICAgbGV0IGRlcGVuZGVudFByb2dyZXNzRGljOntbcGF0aDpzdHJpbmddOm51bWJlcn0gPSB7fTtcbiAgICAgICAgbGV0IGZpbmlzaFN0YXRlRGljOntbcGF0aDpzdHJpbmddOmJvb2xlYW59ID0ge307XG4gICAgICAgIGxldCBjdXJyZW50UHJvZ3Jlc3MgPSAwO1xuICAgICAgICBsZXQgcHJvZ3Jlc3NBZGRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgLy/mr4/kuKrkvp3otZbljaDnmoTmr5TkvotcbiAgICAgICAgbGV0IHBlck1heFByb2dyZXNzID0gKDAuOSAtIG1haW5NYXhQcm9ncmVzcykgLyB2aWV3LmRlcGVuZGVudFJlcy5sZW5ndGg7XG5cbiAgICAgICAgbGV0IGZ1bmNDaGVja0ZpbmlzaCA9ICgpPT57XG4gICAgICAgICAgICBsZXQgYWxsZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcihsZXQgcGF0aCBpbiBmaW5pc2hTdGF0ZURpYylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihmaW5pc2hTdGF0ZURpY1twYXRoXSA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFsbGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihhbGxmaW5pc2gpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVGltZXJNYW5hZ2VyLkdldEluc3RhbmNlKCkuRGVsZXRlVGltZXIocHJvZ3Jlc3NBZGRUaW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5BbGxMb2FkRmluaXNoKHZpZXcsZ2V0UHJlZmFiQ2FsbGJhY2ssdGltZXJJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZnVuY1VwZGF0ZVByb2dyZXNzID0gKCk9PntcbiAgICAgICAgICAgIGlmKHZpZXcudmlld0NvbmZpZy5sb2FkaW5nU3R5bGUgPT0gTG9hZGluZ1N0eWxlLkZ1bGxTY3JlZW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGFsbERlcGVuZGVudFByb2dyZXNzID0gMDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGRlcGVuZGVudFBhdGggaW4gZGVwZW5kZW50UHJvZ3Jlc3NEaWMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbGxEZXBlbmRlbnRQcm9ncmVzcyArPSBkZXBlbmRlbnRQcm9ncmVzc0RpY1tkZXBlbmRlbnRQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBhbGxEZXBlbmRlbnRQcm9ncmVzcyArIG1haW5Qcm9ncmVzcztcbiAgICAgICAgICAgICAgICBpZihwcm9ncmVzcyA+IGN1cnJlbnRQcm9ncmVzcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwcml0ZVByb2dyZXNzLmZpbGxTdGFydCA9IGN1cnJlbnRQcm9ncmVzcztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxhYmVsUHJvZ3Jlc3Muc3RyaW5nID0gKE1hdGguZmxvb3IoY3VycmVudFByb2dyZXNzICogMTAwKSkudG9TdHJpbmcoKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0UHJvZ3Jlc3MoY3VycmVudFByb2dyZXNzKTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRQcm9ncmVzcyA+IDAuOTgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaW1lck1hbmFnZXIuR2V0SW5zdGFuY2UoKS5EZWxldGVUaW1lcihwcm9ncmVzc0FkZFRpbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY250ID0gMDtcbiAgICAgICAgaWYodmlldy52aWV3Q29uZmlnLmxvYWRpbmdTdHlsZSA9PSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbilcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvZ3Jlc3NBZGRUaW1lciA9IFRpbWVyTWFuYWdlci5HZXRJbnN0YW5jZSgpLkNhbGxBY3Rpb25EZWxheSgoKT0+e1xuICAgICAgICAgICAgICAgIGNudCArKztcbiAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IDAuMSAvIChjbnQgKiBjbnQpO1xuICAgICAgICAgICAgICAgIGlmKHN0ZXAgPiAwLjAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IDAuMDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoc3RlcCA8IDAuMDAyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IDAuMDAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgKz0gc3RlcDtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50UHJvZ3Jlc3MgPiAwLjk1KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gMC45NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY1VwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB9LDAuNSxudWxsLDEyMCwwLHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGk9MDtpPHZpZXcuZGVwZW5kZW50UmVzLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkZXBlbmRlbnRQYXRoID0gdmlldy5kZXBlbmRlbnRSZXNbaV07XG4gICAgICAgICAgICBkZXBlbmRlbnRQcm9ncmVzc0RpY1tkZXBlbmRlbnRQYXRoXSA9IDA7XG4gICAgICAgICAgICBmaW5pc2hTdGF0ZURpY1tkZXBlbmRlbnRQYXRoXSA9IGZhbHNlO1xuICAgICAgICAgICAgY2NDLmxvYWRSZXNQcm9ncmVzc1dpdGhvdXRUeXBlKGRlcGVuZGVudFBhdGgsXG4gICAgICAgICAgICAgICAgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PntcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50UHJvZ3Jlc3NEaWNbZGVwZW5kZW50UGF0aF0gPSBwZXJNYXhQcm9ncmVzcyAqIGNvbXBsZXRlZENvdW50IC8gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaWYodmlldy5pc0xvYWRpbmdBc3luYyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY1VwZGF0ZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgfSwgKGVycjogRXJyb3IsIHBlcmZhYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudFByb2dyZXNzRGljW2RlcGVuZGVudFBhdGhdID0gcGVyTWF4UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaFN0YXRlRGljW2RlcGVuZGVudFBhdGhdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYodmlldy5pc0xvYWRpbmdBc3luYyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY0NoZWNrRmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZpbmlzaFN0YXRlRGljW3ZpZXcudmlld0NvbmZpZy5wcmVmYWJQYXRoXSA9IGZhbHNlO1xuXG4gICAgICAgIGNjQy5sb2FkUmVzUHJvZ3Jlc3Modmlldy52aWV3Q29uZmlnLnByZWZhYlBhdGgsY2MuUHJlZmFiLFxuICAgICAgICAgICAgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PntcbiAgICAgICAgICAgICAgICBtYWluUHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQgKiBtYWluTWF4UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgaWYodmlldy5pc0xvYWRpbmdBc3luYyA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBmdW5jVXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyOiBFcnJvciwgcGVyZmFiOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyTXNnID0gXCLliqDovb0gdmlldyBwcmVmYWIg6ZSZ6K+vOlwiICsgZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGdldFByZWZhYkNhbGxiYWNrKGZhbHNlLGVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyck1zZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodmlldy52aWV3Q29uZmlnLmxvYWRpbmdTdHlsZSAhPSBMb2FkaW5nU3R5bGUuTm9uZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaWdMb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFsbExvYWRpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvYWRpbmdNYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuaXNMb2FkaW5nQXN5bmMgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdFcnIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nRXJyLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR3ZWVuZXIgPSBYVHdlZW4uRG9WYWx1ZSh0aGlzLmxvYWRpbmdFcnIsKHZhbHVlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nRXJyLm9wYWNpdHkgPSB2YWx1ZSAqIDI1NTtcbiAgICAgICAgICAgICAgICAgICAgfSwxLDAsMSwxLGZhbHNlLFhUd2VlbkN1cnZUeXBlLkxpbmVyLG51bGwsMik7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuZXIuU2V0RmluaXNoQ2FsbGJhY2soKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0Vyci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuZXIuUGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBub2RlOmNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwZXJmYWIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IHZpZXcubmFtZTtcbiAgICAgICAgICAgICAgICB2aWV3Lm5vZGUgPSBub2RlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0VHJhbnNmb3JtRGljKG5vZGUsdmlldy50cmFuc2Zvcm1DYWNoZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3V2l0aE5vZGVzLnB1c2godmlldyk7ICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbmlzaFN0YXRlRGljW3ZpZXcudmlld0NvbmZpZy5wcmVmYWJQYXRoXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbWFpblByb2dyZXNzID0gbWFpbk1heFByb2dyZXNzO1xuICAgICAgICAgICAgICAgIGZ1bmNDaGVja0ZpbmlzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXRTaG93Vmlldyh2aWV3OlZpZXcsc2hvd3ZpZXdDYWxsYmFjazooc3VjY2Vzczpib29sZWFuLGVyck1zZzpzdHJpbmcpPT52b2lkKVxuICAgIHtcblxuICAgICAgICBsZXQgZnVuY0NhbGxiYWNrID0gKHN1Y2Nlc3M6Ym9vbGVhbixlcnJNc2c6c3RyaW5nKT0+e1xuXG4gICAgICAgICAgICBpZihzdWNjZXNzID09IHRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmlldy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmlldy5pc1Nob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZpZXcubm9kZS5zZXRTaWJsaW5nSW5kZXgodmlldy5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgICAgICBzaG93dmlld0NhbGxiYWNrKHRydWUsXCJcIik7XG5cbiAgICAgICAgICAgICAgICBpZih2aWV3Lm9uU2hvd1ZpZXdDYWxsYmFjayAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5vblNob3dWaWV3Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmlldy5PblNob3dWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvd3ZpZXdDYWxsYmFjayhmYWxzZSxlcnJNc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYodmlldy5ub2RlID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlVmlld09iaih2aWV3LGZ1bmNDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBmdW5jQ2FsbGJhY2sodHJ1ZSxcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldFZpZXcodmlld05hbWUpOlZpZXdcbiAgICB7XG5cbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmRpY1ZpZXdzW3ZpZXdOYW1lXTtcbiAgICAgICAgaWYodmlldyA9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB2aWV3ID0gTVZDUmVnaXN0ZXIuZGljVmlld3Nbdmlld05hbWVdKCk7XG4gICAgICAgICAgICBpZih2aWV3ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJ2aWV3TmFtZSBcIiArIHZpZXdOYW1lICsgXCIg5pyq5rOo5YaMXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaWNWaWV3c1t2aWV3TmFtZV0gPSB2aWV3O1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCB2aWV3ID0gTVZDUmVnaXN0ZXIuZGljVmlld3Nbdmlld05hbWVdKCk7XG4gICAgICAgIC8vIGlmKHZpZXcgPT0gbnVsbClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgY2MuZXJyb3IoXCJ2aWV3TmFtZSBcIiArIHZpZXdOYW1lICsgXCIg5pyq5rOo5YaMXCIpO1xuICAgICAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdmlldy5uYW1lID0gdmlld05hbWU7XG5cbiAgICAgICAgdmlldy5zaG93Q2FsbGJhY2sgPSAoY2FsbGJhY2s6KHN1Y2Nlc3M6Ym9vbGVhbixlcnJNc2c6c3RyaW5nKT0+dm9pZCk9PntcblxuICAgICAgICAgICAgaWYodmlldy5pc1Nob3cgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2MuZXJyb3IoXCJ2aWV3TmFtZSAgICBcIiArIHZpZXdOYW1lKTtcbiAgICAgICAgICAgIGxldCB2aWV3Q29uZmlnID0gVmlld0NvbmZpZ3MuR2V0Vmlld0NvbmZpZyh2aWV3TmFtZSk7XG4gICAgICAgICAgICBpZih2aWV3Q29uZmlnID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGVyck1zZyA9IFwidmlld0NvbmZpZyDphY3nva7kuLrnqbogdmlld05hbWU6XCIgKyB2aWV3TmFtZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSxlcnJNc2cpO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGFzdFZpZXc6VmlldyA9IG51bGw7XG4gICAgICAgICAgICBpZih0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkubGVuZ3RoICE9IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFzdFZpZXcgPSB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXlbdGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aWV3LnZpZXdDb25maWcgPSB2aWV3Q29uZmlnO1xuICAgICAgICAgICAgdmlldy5sYXllciA9IHZpZXdDb25maWcubGF5ZXI7XG5cbiAgICAgICAgICAgIHRoaXMuU2V0U2hvd1ZpZXcodmlldywoc3VjY2Vzczpib29sZWFuLGVyck1zZzpzdHJpbmcpPT57XG4gICAgICAgICAgICAgICAgaWYoc3VjY2VzcyA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLGVyck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYobGFzdFZpZXcgIT0gbnVsbCAmJiAodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJTm9ybWFsIHx8dmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5EZUFjdGl2ZVZpZXdGdW5jcyhsYXN0Vmlldyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHZpZXcubGF5ZXIgPT0gTGF5ZXJPcmRlck51bS5VSU5vcm1hbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheS5sZW5ndGggLSAxO2k+PTA7aS0tKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmlld0luU3RhY2sgPSB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2aWV3SW5TdGFjay5pc1Nob3cgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEhpZGVWaWV3KHZpZXdJblN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHZpZXcubGF5ZXIgPT0gTGF5ZXJPcmRlck51bS5VSVBvcHVwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gdGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5Lmxlbmd0aCAtIDE7aT49MDtpLS0pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aWV3SW5TdGFjayA9IHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZpZXdJblN0YWNrLmlzU2hvdyA9PSB0cnVlICYmIHZpZXdJblN0YWNrLmxheWVyID09IExheWVyT3JkZXJOdW0uVUlQb3B1cClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEhpZGVWaWV3KHZpZXdJblN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZih2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlOb3JtYWwgfHwgdmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkucHVzaCh2aWV3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy52aWV3VG9wU3RhY2tBcnJheS5wdXNoKHZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZih2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlOb3JtYWwgfHwgdmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkFjdGl2ZVZpZXdGdW5jcyh2aWV3KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkRvQW5pbWF0aW9uKHZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZpZXcuaGlkZUNhbGxiYWNrID0gKCk9PntcbiAgICAgICAgICAgIGlmKHZpZXcubGF5ZXIgPT0gTGF5ZXJPcmRlck51bS5VSU5vcm1hbCB8fCB2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlQb3B1cClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLkRlQWN0aXZlVmlld0Z1bmNzKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5Lmxlbmd0aCA9PSAxIFxuICAgICAgICAgICAgICAgICYmIHZpZXcubGF5ZXIgIT0gTGF5ZXJPcmRlck51bS5VSVRvcCBcbiAgICAgICAgICAgICAgICAmJiB2aWV3LmxheWVyICE9IExheWVyT3JkZXJOdW0uVUlUb3BwZXIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJTm9ybWFsKVxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgLy/lpoLmnpx2aWV35LiN5Zyo5qCI6aG277yM5bCx6KaB5YWI6ZqQ6JeP5qCI5LiK55qE5YW25LuWcG9w5bGCdmlld1xuICAgICAgICAgICAgICAgIGxldCBkZWFjdGl2ZVBvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheVt0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkubGVuZ3RoIC0gMV0gIT0gdmlldylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT10aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkubGVuZ3RoIC0gMTtpPj0wO2ktLSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5W2ldID09IHZpZXcpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9wVmlldyA9IHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRlYWN0aXZlUG9wID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYWN0aXZlUG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlQWN0aXZlVmlld0Z1bmNzKHBvcFZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRIaWRlVmlldyhwb3BWaWV3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuUmVtb3ZlQXJyYXkodGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5LGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLlNldEhpZGVWaWV3KHZpZXcpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkubGVuZ3RoIC0gMTtpPj0wO2ktLSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2aWV3SW5TdGFjayA9IHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRTaG93Vmlldyh2aWV3SW5TdGFjaywoc3VjY2VzcyxlcnJtc2cpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzdWNjZXNzID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwi5pi+56S65aSx6LSlMSBlcnJtc2cgXCIgKyBlcnJtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYodmlld0luU3RhY2subGF5ZXIgPT0gTGF5ZXJPcmRlck51bS5VSU5vcm1hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRIaWRlVmlldyh2aWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXkucG9wKCk7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RWaWV3ID0gdGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5W3RoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAvL3BvcOWxgueahHZpZXfmtojlpLEgIOWPquS8muW8lei1t3BvcOWxgueahHZpZXfnmoTmmL7npLpcbiAgICAgICAgICAgICAgICBpZihsYXN0Vmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJUG9wdXApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldFNob3dWaWV3KGxhc3RWaWV3LChzdWNjZXNzLGVycm1zZyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN1Y2Nlc3MgPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLmmL7npLrlpLHotKUyIGVycm1zZyBcIiArIGVycm1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEhpZGVWaWV3KHZpZXcpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudmlld1RvcFN0YWNrQXJyYXkucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHZpZXcubGF5ZXIgPT0gTGF5ZXJPcmRlck51bS5VSU5vcm1hbCB8fCB2aWV3LmxheWVyID09IExheWVyT3JkZXJOdW0uVUlQb3B1cClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFZpZXcgPSB0aGlzLnZpZXdOb3JtYWxQb3B1cFN0YWNrQXJyYXlbdGhpcy52aWV3Tm9ybWFsUG9wdXBTdGFja0FycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMuQWN0aXZlVmlld0Z1bmNzKGxhc3RWaWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIERvQW5pbWF0aW9uKHZpZXc6VmlldylcbiAgICB7XG4gICAgICAgIGxldCB3aW5kb3cgPSBjYy5maW5kKFwiV2luZG93XCIsdmlldy5ub2RlKTtcbiAgICAgICAgaWYod2luZG93ID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdyA9IGNjLmZpbmQoXCJ3aW5kb3dcIix2aWV3Lm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHdpbmRvdyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHdpbmRvdy5zY2FsZVggPSAwLjg7XG4gICAgICAgIHdpbmRvdy5zY2FsZVkgPSAwLjg7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjA4LDEuMSwxLjEpLGNjLnNjYWxlVG8oMC4wOCwxLDEpKTtcbiAgICAgICAgd2luZG93LnJ1bkFjdGlvbihhY3Rpb24pOyAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQWN0aXZlVmlld0Z1bmNzKHZpZXc6VmlldylcbiAgICB7XG4gICAgICAgIGlmKHZpZXcuaXNGb2N1cyA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmlldy5pc0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdmlldy5PbkZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBEZUFjdGl2ZVZpZXdGdW5jcyh2aWV3OlZpZXcpXG4gICAge1xuICAgICAgICBpZih2aWV3LmlzRm9jdXMgPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2aWV3LmlzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdmlldy5PbkRpc0ZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTZXRWaWV3RGVzdHJveSh2aWV3OlZpZXcpXG4gICAge1xuICAgICAgICAvLyBjYy5lcnJvcihcIlNldFZpZXdEZXN0cm95IFwiICsgdmlldy5uYW1lKTtcbiAgICAgICAgaWYodmlldy5ub2RlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuU2V0SGlkZVZpZXcodmlldyk7XG4gICAgICAgIHZpZXcuT25EZXN0cm95KCk7XG4gICAgICAgIHZpZXcubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHZpZXcubm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBEZXN0cm95QWxsVmlldygpXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy52aWV3V2l0aE5vZGVzLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3V2l0aE5vZGVzW2ldO1xuICAgICAgICAgICAgLy8gaWYodmlldy5sYXllciA9PSBMYXllck9yZGVyTnVtLlVJVG9wKVxuICAgICAgICAgICAgLy8gICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGZpbmRVbkRlc3Ryb3kgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7ajx0aGlzLlVuRGVzdHJveVZpZXdzLmxlbmd0aDtqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodmlldy5uYW1lID09IHRoaXMuVW5EZXN0cm95Vmlld3Nbal0pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaW5kVW5EZXN0cm95ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZmluZFVuRGVzdHJveSA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0Vmlld0Rlc3Ryb3kodmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENsZWFyQWxsVmlld1N0YWNrKClcbiAgICB7XG4gICAgICAgIHRoaXMudmlld05vcm1hbFBvcHVwU3RhY2tBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgdmlld05hbWUgaW4gdGhpcy5kaWNWaWV3cylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZpbmRVbkRlc3Ryb3kgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7ajx0aGlzLlVuRGVzdHJveVZpZXdzLmxlbmd0aDtqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodmlld05hbWUgPT0gdGhpcy5VbkRlc3Ryb3lWaWV3c1tqXSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmRVbkRlc3Ryb3kgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5aaC5p6c5LiN5Zyo6Z2e5Yig5YiX6KGo6YeM5bCx5Yig5o6JXG4gICAgICAgICAgICBpZihmaW5kVW5EZXN0cm95ID09IGZhbHNlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSh0aGlzLmRpY1ZpZXdzW3ZpZXdOYW1lXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWNWaWV3c1t2aWV3TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuIl19