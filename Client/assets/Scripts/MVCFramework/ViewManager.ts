import View from "./View";
import { MVCRegister, ViewNames } from "../Modules/MVCRegister";
import ViewConfigs, { LayerOrderNum, LoadingStyle } from "../Modules/ViewConfigs";
import Util from "../Tools/Util";
import TimerManager from "../Components/TimerManager";
import XTween from "../Tools/XTween/XTween";
import ccC from "../Tools/ccC";
import { XTweenCurvType } from "../Tools/XTween/Base/XTweenCurv";

// //UI节点上的gameobject名称
// enum LayerOrderName {
//     UINormal = "UINormal",
//     UIPopup = "UIPopup",
//     UITop = "UITop"
// };

export default class ViewManager
{
    private static viewNormalPopupStackArray:Array<View> = [];
    // private static viewTopStackArray:Array<View> = [];
    private static UnDestroyViews:Array<string> = [ViewNames.ViewToast,ViewNames.ViewDialogNormal,ViewNames.ViewOpenNetworking];
    private static UINormal:cc.Node;
    private static UIPopup:cc.Node;
    private static UITop:cc.Node;
    private static UITopper:cc.Node;
    private static dicViews:{[viewName:string]:View} = {};
    private static viewWithNodes:Array<View> = [];

    private static bigLoading:cc.Node;
    private static spriteProgress:cc.Sprite;
    private static labelProgress:cc.Label;

    private static smallLoading:cc.Node;
    private static Loading_LOGO:cc.Sprite;

    private static loadingErr:cc.Node;
    private static LoadingEff:cc.Node;
    private static LoadingMask:cc.Node;

    public static Clean()
    {
        this.DestroyAllView();
        this.ClearAllViewStack();
        this.viewNormalPopupStackArray = [];
        // this.viewTopStackArray = [];
    }

    public static Init()
    {
        if(this.UINormal != null)
        {
            return;
        } 
        let mainNode = cc.find("Main");
        cc.game.addPersistRootNode(mainNode);
        let canvasNode = cc.find("Canvas");
        cc.game.addPersistRootNode(canvasNode);

        this.UINormal = cc.find("Canvas/UINormal");
        this.UIPopup = cc.find("Canvas/UIPopup");
        this.UITop = cc.find("Canvas/UITop");
        this.UITopper = cc.find("Canvas/UITopper");

        this.bigLoading = cc.find("Canvas/UILoading/BigLoading");
        this.LoadingMask = cc.find("Canvas/UILoading/LoadingMask");
        this.Loading_LOGO = cc.find("Loading_LOGO",this.bigLoading).getComponent(cc.Sprite);
        this.spriteProgress = cc.find("Progress/SpriteProgress",this.bigLoading).getComponent(cc.Sprite);
        this.labelProgress = cc.find("Progress/LabelProgress",this.bigLoading).getComponent(cc.Label);
        this.LoadingEff = cc.find("LoadingEff",this.spriteProgress.node);

        this.smallLoading = cc.find("Canvas/UILoading/SmallLoading");

        this.loadingErr = cc.find("Canvas/UILoading/LoadingErr");

        this.Loading_LOGO.node.active = false;
        
    }

    private static SetTransformDic(node:cc.Node,dicTransforms:{[transformName:string]:cc.Node})
    {
        dicTransforms[node.name] = node;
        for(let i = 0;i<node.childrenCount;i++)
        {
            this.SetTransformDic(node.children[i],dicTransforms);
        }
    }

    private static SetHideView(view:View)
    {
        if(view.isShow == false)
        {
            return;
        }
        if(view.node != null)
        {
            view.node.active = false;
        }
        view.isShow = false;
        if(view.onHideViewCallback != null)
        {
            view.onHideViewCallback();
        }
        view.OnHideView();
    }

    private static AllLoadFinish(view:View,getPrefabCallback,timerID)
    {
        TimerManager.GetInstance().DeleteTimer(timerID);

        TimerManager.GetInstance().CallActionDelay(()=>{
            if(view.viewConfig.loadingStyle != LoadingStyle.None)
            {
                this.bigLoading.active = false;
                this.smallLoading.active = false;
            }
        },0.1,null,0,0,true);
        this.LoadingMask.active = false;

        if(view.viewConfig.loadingStyle == LoadingStyle.FullScreen)
        {
            // this.spriteProgress.fillStart = 1;
            // this.labelProgress.string = "100%";
            this.SetProgress(1);
        }
        
        if(view.layer == LayerOrderNum.UINormal)
        {
            view.node.setParent(this.UINormal);
        }
        else if(view.layer == LayerOrderNum.UIPopup)
        {
            view.node.setParent(this.UIPopup);
            //TODO: add mask
            ccC.loadRes("Prefab/ButtonMask",cc.Prefab,
            (errloadMask: Error, perfabMask: any)=>{
                if (errloadMask) {
                    cc.error("err  " + errloadMask.message || errloadMask);
                    return;
                }
                let nodeMask:cc.Node = cc.instantiate(perfabMask);
                nodeMask.setParent(view.node);
                nodeMask.setSiblingIndex(0);
                nodeMask.setPosition(0,0);
                nodeMask.name = "PopUIMask";
                nodeMask.getComponent(cc.Widget).updateAlignment();

                Util.SetClickAction(nodeMask.getComponent(cc.Button),()=>{
                    if(view.removeMaskClick == false)
                        view.Hide();
                });
            });
        }
        else if(view.layer == LayerOrderNum.UITop)
        {
            view.node.setParent(this.UITop);
        }
        else if(view.layer == LayerOrderNum.UITopper)
        {
            view.node.setParent(this.UITopper);
        }
        view.node.setPosition(0,0);
        
        view.OnAwake();
        view.SetButtonClicks();
        getPrefabCallback(true,"");
        view.isLoadingAsync = false;
    }

    private static SetProgress(progress)
    {
        this.spriteProgress.fillStart = progress;
        this.labelProgress.string = (Math.floor(progress * 100)).toString() + "%";
        this.LoadingEff.position = new cc.Vec2(-378 + 756 * progress,0);
    }

    private static CreateViewObj(view:View,getPrefabCallback:(success:boolean,errMsg:string)=>void)
    {
        view.isLoadingAsync = true;

        let timerID;
        if(view.viewConfig.loadingStyle != LoadingStyle.None)
        {
            this.LoadingMask.active = true;
            //加载1秒还没完成就需要显示加载条
            timerID = TimerManager.GetInstance().CallActionDelay(()=>{
                if(view.isLoadingAsync == true)
                {
                    if(view.viewConfig.loadingStyle == LoadingStyle.FullScreen)
                    {
                        this.bigLoading.active = true;
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

                        this.SetProgress(0);
                    }
                    else
                    {
                        this.smallLoading.active = true;
                    }
                }
            },1,null,0,0,true);
        }
        
        //view prefab占总加载比的最大比例
        let mainMaxProgress;
        mainMaxProgress = 0.9 / (view.dependentRes.length + 1);
        
        if(mainMaxProgress < 0.4)
        {
            mainMaxProgress = 0.4;
        }

        let mainProgress = 0;
        let dependentProgressDic:{[path:string]:number} = {};
        let finishStateDic:{[path:string]:boolean} = {};
        let currentProgress = 0;
        let progressAddTimer = null;

        //每个依赖占的比例
        let perMaxProgress = (0.9 - mainMaxProgress) / view.dependentRes.length;

        let funcCheckFinish = ()=>{
            let allfinish = true;
            for(let path in finishStateDic)
            {
                if(finishStateDic[path] == false)
                {
                    allfinish = false;
                    break;
                }
            }
            if(allfinish)
            {
                TimerManager.GetInstance().DeleteTimer(progressAddTimer);
                this.AllLoadFinish(view,getPrefabCallback,timerID);
            }
        }

        let funcUpdateProgress = ()=>{
            if(view.viewConfig.loadingStyle == LoadingStyle.FullScreen)
            {
                let allDependentProgress = 0;
                for(let dependentPath in dependentProgressDic)
                {
                    allDependentProgress += dependentProgressDic[dependentPath];
                }

                let progress = allDependentProgress + mainProgress;
                if(progress > currentProgress)
                {
                    currentProgress = progress;
                }
                // this.spriteProgress.fillStart = currentProgress;
                // this.labelProgress.string = (Math.floor(currentProgress * 100)).toString() + "%";
                this.SetProgress(currentProgress);

                if(currentProgress > 0.98)
                {
                    TimerManager.GetInstance().DeleteTimer(progressAddTimer);
                }
            }
        }

        let cnt = 0;
        if(view.viewConfig.loadingStyle == LoadingStyle.FullScreen)
        {
            progressAddTimer = TimerManager.GetInstance().CallActionDelay(()=>{
                cnt ++;
                let step = 0.1 / (cnt * cnt);
                if(step > 0.01)
                {
                    step = 0.01;
                }
                else if(step < 0.002)
                {
                    step = 0.002;
                }
                currentProgress += step;
                if(currentProgress > 0.95)
                {
                    currentProgress = 0.95;
                }
                funcUpdateProgress();
            },0.5,null,120,0,true);
        }
        
        for(let i=0;i<view.dependentRes.length;i++)
        {
            let dependentPath = view.dependentRes[i];
            dependentProgressDic[dependentPath] = 0;
            finishStateDic[dependentPath] = false;
            ccC.loadResProgressWithoutType(dependentPath,
                (completedCount: number, totalCount: number, item: any) =>{
                    dependentProgressDic[dependentPath] = perMaxProgress * completedCount / totalCount;
                    if(view.isLoadingAsync == true)
                        funcUpdateProgress();
                }, (err: Error, perfab: any) => {
                    dependentProgressDic[dependentPath] = perMaxProgress;
                    finishStateDic[dependentPath] = true;
                    if(view.isLoadingAsync == true)
                        funcCheckFinish();
                });
        }
        
        finishStateDic[view.viewConfig.prefabPath] = false;

        ccC.loadResProgress(view.viewConfig.prefabPath,cc.Prefab,
            (completedCount: number, totalCount: number, item: any) =>{
                mainProgress = completedCount / totalCount * mainMaxProgress;
                if(view.isLoadingAsync == true)
                    funcUpdateProgress();
            },
            (err: Error, perfab: any) => {

                if (err != null) 
                {
                    let errMsg = "加载 view prefab 错误:" + err.message;
                    getPrefabCallback(false,errMsg);
                    cc.error(errMsg);

                    if(view.viewConfig.loadingStyle != LoadingStyle.None)
                    {
                        this.bigLoading.active = false;
                        this.smallLoading.active = false;
                        this.LoadingMask.active = false;
                    }
                    view.isLoadingAsync = false;

                    this.loadingErr.active = true;
                    this.loadingErr.opacity = 255;

                    let tweener = XTween.DoValue(this.loadingErr,(value)=>{
                        this.loadingErr.opacity = value * 255;
                    },1,0,1,1,false,XTweenCurvType.Liner,null,2);
                    tweener.SetFinishCallback(()=>{
                        this.loadingErr.active = false;
                    });
                    tweener.Play();
                    
                    return;
                }

                let node:cc.Node = cc.instantiate(perfab);
                
                node.name = view.name;
                view.node = node;
                this.SetTransformDic(node,view.transformCache);
                this.viewWithNodes.push(view);    
                
                finishStateDic[view.viewConfig.prefabPath] = true;
                mainProgress = mainMaxProgress;
                funcCheckFinish();
        });
    }

    private static SetShowView(view:View,showviewCallback:(success:boolean,errMsg:string)=>void)
    {

        let funcCallback = (success:boolean,errMsg:string)=>{

            if(success == true)
            {
                view.node.active = true;
                view.isShow = true;
                view.node.setSiblingIndex(view.node.parent.childrenCount - 1);

                showviewCallback(true,"");

                if(view.onShowViewCallback != null)
                {
                    view.onShowViewCallback();
                }
                
                view.OnShowView();
            }
            else
            {
                showviewCallback(false,errMsg);
            }
        
        };
        if(view.node == null)
        {
            this.CreateViewObj(view,funcCallback);
        }
        else
        {
            funcCallback(true,"");
        }
        
    }

    public static GetView(viewName):View
    {

        let view = this.dicViews[viewName];
        if(view == null)
        {
            view = MVCRegister.dicViews[viewName]();
            if(view == null)
            {
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

        view.showCallback = (callback:(success:boolean,errMsg:string)=>void)=>{

            if(view.isShow == true)
            {
                callback(true,"");
                return;
            }

            // cc.error("viewName    " + viewName);
            let viewConfig = ViewConfigs.GetViewConfig(viewName);
            if(viewConfig == null)
            {
                let errMsg = "viewConfig 配置为空 viewName:" + viewName;
                callback(false,errMsg);
                cc.error(errMsg);
                return;
            }

            let lastView:View = null;
            if(this.viewNormalPopupStackArray.length != 0)
            {
                lastView = this.viewNormalPopupStackArray[this.viewNormalPopupStackArray.length - 1];
            }

            view.viewConfig = viewConfig;
            view.layer = viewConfig.layer;

            this.SetShowView(view,(success:boolean,errMsg:string)=>{
                if(success == false)
                {
                    callback(false,errMsg);
                    return;
                }
                
                if(lastView != null && (view.layer == LayerOrderNum.UINormal ||view.layer == LayerOrderNum.UIPopup))
                {
                    this.DeActiveViewFuncs(lastView);
                }
                if(view.layer == LayerOrderNum.UINormal)
                {
                    for(let i = this.viewNormalPopupStackArray.length - 1;i>=0;i--)
                    {
                        let viewInStack = this.viewNormalPopupStackArray[i];
                        if(viewInStack.isShow == true)
                        {
                            this.SetHideView(viewInStack);
                        }
                    }
                }
                else if(view.layer == LayerOrderNum.UIPopup)
                {
                    for(let i = this.viewNormalPopupStackArray.length - 1;i>=0;i--)
                    {
                        let viewInStack = this.viewNormalPopupStackArray[i];
                        if(viewInStack.isShow == true && viewInStack.layer == LayerOrderNum.UIPopup)
                        {
                            this.SetHideView(viewInStack);
                        }
                    }
                }
    
                if(view.layer == LayerOrderNum.UINormal || view.layer == LayerOrderNum.UIPopup)
                {
                    this.viewNormalPopupStackArray.push(view);
                }
                else
                {
                    // this.viewTopStackArray.push(view);
                }
    
                if(view.layer == LayerOrderNum.UINormal || view.layer == LayerOrderNum.UIPopup)
                {
                    this.ActiveViewFuncs(view);
                }

                callback(true,"");

                if(view.layer == LayerOrderNum.UIPopup)
                {
                    this.DoAnimation(view);
                }
            });
        };

        view.hideCallback = ()=>{
            if(view.layer == LayerOrderNum.UINormal || view.layer == LayerOrderNum.UIPopup)
            {
                this.DeActiveViewFuncs(view);
            }
            if(this.viewNormalPopupStackArray.length == 1 
                && view.layer != LayerOrderNum.UITop 
                && view.layer != LayerOrderNum.UITopper)
            {
                return;
            }
            if(view.layer == LayerOrderNum.UINormal)
            {

                //如果view不在栈顶，就要先隐藏栈上的其他pop层view
                let deactivePop = false;
                if(this.viewNormalPopupStackArray[this.viewNormalPopupStackArray.length - 1] != view)
                {
                    for(let i=this.viewNormalPopupStackArray.length - 1;i>=0;i--)
                    {
                        if(this.viewNormalPopupStackArray[i] == view)
                        {
                            break;
                        }
                        let popView = this.viewNormalPopupStackArray[i];
                        if(deactivePop == false)
                        {
                            deactivePop = true;
                            this.DeActiveViewFuncs(popView);
                        }
                        this.SetHideView(popView);
                        Util.RemoveArray(this.viewNormalPopupStackArray,i);
                    }
                }


                this.SetHideView(view);
                this.viewNormalPopupStackArray.pop();
                for(let i = this.viewNormalPopupStackArray.length - 1;i>=0;i--)
                {
                    let viewInStack = this.viewNormalPopupStackArray[i];
                    this.SetShowView(viewInStack,(success,errmsg)=>{
                        if(success == false)
                        {
                            cc.error("显示失败1 errmsg " + errmsg);
                        }
                    });
                    if(viewInStack.layer == LayerOrderNum.UINormal)
                        break;
                }
            }
            else if(view.layer == LayerOrderNum.UIPopup)
            {
                this.SetHideView(view);
                this.viewNormalPopupStackArray.pop();
                let lastView = this.viewNormalPopupStackArray[this.viewNormalPopupStackArray.length - 1];
                //pop层的view消失  只会引起pop层的view的显示
                if(lastView.layer == LayerOrderNum.UIPopup)
                {
                    this.SetShowView(lastView,(success,errmsg)=>{
                        if(success == false)
                        {
                            cc.error("显示失败2 errmsg " + errmsg);
                        }
                    });
                }
            }
            else
            {
                this.SetHideView(view);
                // this.viewTopStackArray.pop();
            }

            if(view.layer == LayerOrderNum.UINormal || view.layer == LayerOrderNum.UIPopup)
            {
                let lastView = this.viewNormalPopupStackArray[this.viewNormalPopupStackArray.length - 1];
                this.ActiveViewFuncs(lastView);
            }
        };
        
        return view;
    }

    private static DoAnimation(view:View)
    {
        let window = cc.find("Window",view.node);
        if(window == null)
        {
            window = cc.find("window",view.node);
        }
        if(window == null)
            return;

        window.scaleX = 0.8;
        window.scaleY = 0.8;
        
        let action = cc.sequence(cc.scaleTo(0.08,1.1,1.1),cc.scaleTo(0.08,1,1));
        window.runAction(action);            
    }

    public static ActiveViewFuncs(view:View)
    {
        if(view.isFocus == true)
        {
            return;
        }
        view.isFocus = true;
        view.OnFocus();
    }

    public static DeActiveViewFuncs(view:View)
    {
        if(view.isFocus == false)
        {
            return;
        }
        view.isFocus = false;
        view.OnDisFocus();
    }

    public static SetViewDestroy(view:View)
    {
        // cc.error("SetViewDestroy " + view.name);
        if(view.node == null)
            return;
        this.SetHideView(view);
        view.OnDestroy();
        view.node.destroy();
        view.node = null;
    }

    public static DestroyAllView()
    {
        for(let i = 0;i<this.viewWithNodes.length;i++)
        {
            let view = this.viewWithNodes[i];
            // if(view.layer == LayerOrderNum.UITop)
            //     continue;
            let findUnDestroy = false;
            for(let j = 0;j<this.UnDestroyViews.length;j++)
            {
                if(view.name == this.UnDestroyViews[j])
                {
                    findUnDestroy = true;
                    break;
                }
            }
            if(findUnDestroy == true)
            {
                continue;
            }
            else
            {
                this.SetViewDestroy(view);
            }
        }
    }

    public static ClearAllViewStack()
    {
        this.viewNormalPopupStackArray = [];

        for(let viewName in this.dicViews)
        {
            let findUnDestroy = false;
            for(let j = 0;j<this.UnDestroyViews.length;j++)
            {
                if(viewName == this.UnDestroyViews[j])
                {
                    findUnDestroy = true;
                    break;
                }
            }

            //如果不在非删列表里就删掉
            if(findUnDestroy == false)
            {
                delete(this.dicViews[viewName]);
                this.dicViews[viewName] = null;
            }
        }
    }
    
}
