"use strict";
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