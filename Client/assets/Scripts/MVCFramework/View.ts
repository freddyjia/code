import Util from "../Tools/Util";
import { LayerOrderNum, ViewConfigData } from "../Modules/ViewConfigs";
import ccC from "../Tools/ccC";


export default class View
{
    public removeMaskClick:boolean = false;
    public isShow:boolean = false;
    public isLoadingAsync:boolean = false;
    // public shouldShowLoading:boolean = false;
    private clickFuncs:{[btnName:string]:(button:cc.Button,data:any)=>void} = {};
    private buttonCustomDatas:{[btnName:string]:string} = {};
    private buttonAudios:{[btnName:string]:string} = {};
    public showCallback:(finishLoadCallback:(success:boolean,errMsg:string)=>void)=>void = null;
    public hideCallback:()=>void = null;
    public transformCache:{[transformName:string]:cc.Node} = {};
    public name:string = "";
    public layer:LayerOrderNum = LayerOrderNum.UINormal;
    public isFocus:boolean = false;
    public node:cc.Node;
    public onHideViewCallback:()=>void = null;
    public onShowViewCallback:()=>void = null;
    public viewConfig:ViewConfigData;
    public dependentRes:string[] = [];

    //当show调用的时候，如果资源加载期间，调用了hide，应该在show成功后，把view hide掉。
    private shouldShow = true;

    public Init()
    {
        this.removeMaskClick = false;
        this.isShow = false;
        this.clickFuncs = {};
        this.buttonAudios = {};
        this.buttonCustomDatas = {};
    }

    //框架调用，上层请勿调用
    public SetButtonClicks()
    {
        for(let btnName in this.clickFuncs)
        {
            let tr = this.FindTransform(btnName);
            if(tr == null)
            {
                cc.error("SetButtonClicks 不存在 btnName " + btnName + " 按钮，添加按钮事件失败 ");
            }
            else
            {
                let button:cc.Button = tr.getComponent(cc.Button);
                if(button == null)
                {
                    cc.error("btnName " + btnName + " 没有附加Button组件，添加按钮事件失败 ");
                }
                else
                {
                    Util.SetClickAction(button,this.clickFuncs[btnName],this.buttonAudios[btnName],this.buttonCustomDatas[btnName]);
                }
            }
        }
    }

    ////以下是上层可调用的 customData和audioName是可选参数，可不填
    public SetOnClick(buttonName:string,callback:(button:cc.Button,data:any)=>void,audioName?:string,customData?:string)
    {
        this.clickFuncs[buttonName] = callback;
        this.buttonAudios[buttonName] = audioName;
        this.buttonCustomDatas[buttonName] = customData;
    }

    public FindTransform(name):cc.Node
    {
        if(this.transformCache[name] != null)
        {
            return this.transformCache[name];
        }
        else
        {
            cc.error("FindTransform 不存在transformName " + name);
            return null;
        }
    }

    public RemoveMaskClick()
    {
        this.removeMaskClick = true;
    }

    //加载依赖资源，全部加载完才会回调show callback
    public AddDependentRes(resPath)
    {   
        this.dependentRes.push(resPath);
    }

    //Show是异步加载资源，需要callback机制
    public Show(successCallback:()=>void=null,failCallback:(errMsg:string)=>void=null)
    {
        this.shouldShow = true;
        if(this.isShow == true)
        {
            if(successCallback != null)
                successCallback();
            return;
        }
        if(this.isLoadingAsync == true)
        {
            cc.error("view " + name + " 资源异步请求中，请勿重复调用");
            return;
        }
        this.showCallback((success:boolean,errMsg:string)=>{
            if(success == true)
            {
                if(successCallback != null)
                {
                    successCallback();
                }

                if(this.shouldShow == false)
                {
                    this.Hide();
                }
            }
            else
            {
                if(failCallback != null)
                {
                    failCallback(errMsg);
                }
            }
        });
    }

    public Hide()
    {
        this.shouldShow = false;
        if(this.isShow == false)
        {
            return;
        }
        this.hideCallback();
    }

    //以下是重写函数
    public OnAwake()
    {

    }

    //显示的时候回调
    public OnShowView()
    {
        
    }

    //隐藏的时候回调
    public OnHideView()
    {
        
    }

    //当界面去到最前的时候回调
    public OnFocus()
    {
        
    }

    //当界面从最前切换回非最前的时候回调
    public OnDisFocus()
    {
        
    }

    //当界面销毁的时候回调
    public OnDestroy()
    {
        
    }

}
