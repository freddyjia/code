import ButtonListener from "../Components/ButtonListener";
import PageViewListener from "../Components/PageViewListener";
import ScrollViewListener from "../Components/ScrollViewListener";
import SliderListener from "../Components/SliderListener";
import EditBoxListener from "../Components/EditBoxListener";
import TimerManager from "../Components/TimerManager";
import { JSOpenUrl } from "../JsTool/JSOpenUrl";
import ccC from "./ccC";
import NodeUtil from "./NodeUtil";
// import Global from "../Global/Global";

export default class Util
{
    //customData,audioName 是可选参数，可不填.   customData只能填string类型
    public static SetClickAction(button:cc.Button,callback:(button:cc.Button,data:any)=>void,audioName?:string,customData?:string)
    {
        
        let buttonListener:ButtonListener = button.getComponent(ButtonListener);
        if(buttonListener == null)
        {
            buttonListener = button.addComponent(ButtonListener);
        }

        //TODO:设置音效相关 audioName
        buttonListener.Init();
        buttonListener.SetData(customData);
        buttonListener.SetAudioName(audioName);
        buttonListener.SetOnClickCallback(callback);
    
    }

    public static SetPageViewScrollEvent(pageView:cc.PageView, callback:(pageView:cc.PageView, eventType:cc.PageView.EventType, data:any)=>void)
    {
        let pageViewListener:PageViewListener = pageView.getComponent(PageViewListener);
        if (pageViewListener == null)
            pageViewListener = pageView.addComponent(PageViewListener);

        pageViewListener.SetScrollEventAction(callback);
    }

    public static SetSliderValueChangeEvent(slider:cc.Slider,callback:(slider:cc.Slider,data:any)=>void)
    {
        let sliderListener:SliderListener = slider.getComponent(SliderListener);
        if(sliderListener == null)
        {
            sliderListener = slider.addComponent(SliderListener);
        }
        sliderListener.SetSliderValueChangeCallback(callback);
    }

    public static SetScrollViewScrollEvent(scrollView:cc.ScrollView, callback:(scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, data:any)=>void)
    {
        let scrollViewListener:ScrollViewListener = scrollView.getComponent(ScrollViewListener);
        if (scrollViewListener == null)
            scrollViewListener = scrollView.addComponent(ScrollViewListener);

        scrollViewListener.SetScrollEventAction(callback);
    }

    /**
     * 输入框聚焦事件
     * @param editBox 
     * @param callback 
     * @param customData 
     */
    public static AddEditDidBeganEvent(editBox:cc.EditBox, callback:(editBox:cc.EditBox, customData:string)=>void, customData:string="")
    {
        let editBoxListener = editBox.getComponent(EditBoxListener);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener);

        editBoxListener.AddEditDidBeganHandler(callback, customData);
    }

    /**
     * 输入框内容改变事件
     * @param editBox 
     * @param callback 
     * @param customData 
     */
    public static AddEditTextChangedEvent(editBox:cc.EditBox, callback:(text:string, editBox:cc.EditBox, customData:string)=>void, customData:string="")
    {
        let editBoxListener = editBox.getComponent(EditBoxListener);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener);

        editBoxListener.AddTextChangedHandler(callback, customData);
    }

    /**
     * 输入框失焦事件
     * @param editBox 
     * @param callback 
     * @param customData 
     */
    public static AddEditDidEndedHandler(editBox:cc.EditBox, callback:(editBox:cc.EditBox, customData:string)=>void, customData:string="")
    {
        let editBoxListener = editBox.getComponent(EditBoxListener);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener);

        editBoxListener.AddEditDidEndedHandler(callback, customData);
    }

    /**
     * 按下return
     * @param editBox 
     * @param callback 
     * @param customData 
     */
    public static AddEditingReturnHandler(editBox:cc.EditBox, callback:(editBox:cc.EditBox, customData:string)=>void, customData:string="")
    {
        let editBoxListener = editBox.getComponent(EditBoxListener);
        if (editBoxListener == null)
            editBoxListener = editBox.addComponent(EditBoxListener);

        editBoxListener.AddEditingReturnHandler(callback, customData);
    }

    /**
     * 格式化字符串 例子 Util.StringFormat("aaa %s1 bbb %s2 ccc %s3","111","222","333");
     * @param [stringOrigin] 原字符串
     * @param [stringReplaces] 替换的字符串
     */
    public static StringFormat(stringOrigin:string,... stringReplaces:string[]):string
    {
        for(let i = 0;i<stringReplaces.length;i++)
        {
            stringOrigin = stringOrigin.replace("%s" + (i + 1),stringReplaces[i]);
        }

        return stringOrigin;
    }

    /**
     * 把单位分输出为元，如 1000 返回 10.
     * @param [count] 多少分
     * @param [showDot00] 如果末尾是.00，true 是保留，false是去掉
     */
    public static formatGoldText(count:string|number,showDot00:boolean=true):string
    {
        if(count == null)
        {
            return count = "0";
        }
        let tmp = 0;
        if(typeof(count) == "string")
        {
            tmp = parseFloat(count);
        }
        else
        {
            tmp = count;
        }
        tmp /= 100;

        let ret = tmp.toFixed(2);
        if(showDot00 == false)
        {
            if(ret.length > 3 && (ret.substring(ret.length - 3,ret.length) == ".00"))
            {
                ret = ret.substring(0,ret.length-3);
            }
        }
        return ret;
    }

    /**
     * 设置图集
     * @param sprite 
     * @param atlas 
     * @param spriteName 
     * @param finishCallback
     */
    public static SetSpriteFrame(sprite:cc.Sprite, atlasPath:string, spriteName:string, finishCallback:()=>void)
    {
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
        ccC.loadRes(atlasPath,cc.SpriteAtlas,(err,res:cc.SpriteAtlas)=>{
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            sprite.spriteFrame = res.getSpriteFrame(spriteName);
        });
    }
    
    

    public static netImageCache:{[spritName:string]:cc.SpriteFrame} = {};

    /**
     * 设置网络头像
     * @param imgHeadObj 显示头像的GameObject
     * @param headUrl 头像地址
     * @param isSetNativeSize 是否设置原始尺寸
     */
    public static SetHeadNetIcon(imgHeadObj:cc.Sprite, headUrl:string,successCallback:()=>void=null)
    {
        if (headUrl==undefined || headUrl == null || headUrl.length == 0)
            headUrl = "GYZY_TX_M_1";
        
        let spHeadImage = imgHeadObj;
        let spriteFrame = headUrl;
        let posIndex = headUrl.lastIndexOf(".");
        if (posIndex > 0)
        {
            spriteFrame = headUrl.substring(0, posIndex-1);
        }
        let assetPath = "MainGame/Atlas/Head";
        if (this.netImageCache[spriteFrame] == null)
        {
            ccC.loadRes(assetPath, cc.SpriteAtlas, (err: Error, atlas: any) =>
            {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                let atlass:cc.SpriteAtlas = atlas as cc.SpriteAtlas;
                imgHeadObj.spriteFrame = atlass.getSpriteFrame(spriteFrame);
                this.netImageCache[spriteFrame] = atlass.getSpriteFrame(spriteFrame);
                if(successCallback != null)
                {
                    successCallback();
                }
            });
        }
        else
        {
            imgHeadObj.spriteFrame = this.netImageCache[spriteFrame];
        }
    }

    /**
     * 设置头像框
     * @param image 
     * @param spritName 
     */
    public static SetHeadBox(image:cc.Sprite, spritName:string)
    {
        if (spritName==null || spritName.length==0 || spritName == "default")
            spritName = "GYZY_TXK";
            
        let assetPath = "MainGame/Atlas/Head";
        if (this.netImageCache[spritName] == null)
        {
            ccC.loadRes(assetPath, cc.SpriteAtlas, (err: Error, atlas: any) =>
            {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                let atlass:cc.SpriteAtlas = atlas as cc.SpriteAtlas;
                image.spriteFrame = atlass.getSpriteFrame(spritName);;
                this.netImageCache[spritName] = atlass.getSpriteFrame(spritName);
            });
        }
        else
        {
            image.spriteFrame = this.netImageCache[spritName];
        }
    }

    public static SetHeadIcon(sprite:cc.Sprite, headUrl:string)
    {
        if (headUrl==undefined || headUrl == null || headUrl.length == 0)
            headUrl = "GYZY_TX_M_1";

        let path = "Textures/Head/" + headUrl;
        NodeUtil.SetSpriteFrame(sprite, path);
    }

    //播放spine动画回调接口
    public static PlaySpineEffect(spine:sp.Skeleton,listener: any=null,name:string = "1",loop:boolean = false,hideOnComplete:boolean = true)
    {
        if(spine == null)
        {
            // if(Global.showLog == true)
            cc.error("spine 动画为空");
            return;
        }
        spine.node.active = false;
        spine.node.active = true;

        spine.setAnimation(0,name,loop);
        spine.setCompleteListener(()=>{
            if (hideOnComplete) 
            {
                spine.node.active = false;
            }

            if(listener !=null)
            {
                listener();
            }
        });
    }

    /**
     * 删除指定数组中指定下标或者元素数据,
     # 不支持删除纯数字组成的数组，
     ## 因为第二个参数如果传入的是 number 类型，默认会将其认为是数组下标。
     * @param array 需要修改的数组
     * @param obj 指定下标或者元素
     */
    public static RemoveArray(array:Array<any>, obj:any):any{
        let temp
        if(typeof(obj)=='number'){
            return array.splice(obj,1)
        }else{
            temp = array.indexOf(obj)
            if(temp>-1){
                return array.splice(temp,1)
            }
        }
        return null
    }

    /**
     * 根据用户头像判定是否为男性
     * @param headName 用户头像文件名
     */
    public static GetGenderByName(headName:string):boolean{
        if(headName == null) return true
        return headName.indexOf('_M_') !== -1
    }
    
    /**
     * 判断字符串是否是合法的邮箱
     */
    public static IsRightEmail(str:string)
    {
        let reg = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        if (reg.test(str))
            return true;
        return false;
    }

    /**
     * 判断是否是合法的手机号
     */
    public static IsRightMobile(str:string)
    {
        let reg = new RegExp(/^1[0123456789]\d{9}$/);
        if (reg.test(str))
            return true;

        return false;
    } 

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
     public static handler2(selfTable,method,buttonCustom){
         return function(){
             return method(selfTable,buttonCustom);
         }
     }

     public static handle(obj,method){
         return function(){
             return method(obj)
         }
     }

    public static PerformWithDelay(time:number,callBack:any,timerArray:Array<string> = null,autoDel:boolean = true)
    {
        let timerID = "";
        timerID = TimerManager.GetInstance().CallActionDelay(()=>{

            if(callBack!=null)
            {
                callBack();
            }
            if(autoDel&&timerArray!=null)
            {
                TimerManager.GetInstance().DeleteTimer(timerID);
                Util.RemoveArray(timerArray,timerID);
            }
        },time);
        if(timerArray!=null)
        {
            timerArray.push(timerID);
        }
        return timerID;
    }


    public static GetOrCreateItem(parentContainer:cc.Node,index:number):cc.Node
    {   
        let childNode:cc.Node = null;
       

        if(index<parentContainer.childrenCount)
        {
            //cc.error( parentContainer.children[index]);
            childNode = parentContainer.children[index];
        }
        else
        {
            //cc.error( parentContainer.children[0]);
            childNode = cc.instantiate(parentContainer.children[0]);
            childNode.parent = parentContainer;
        }

        childNode.active = true;
        return childNode;
    }

    public static GetDicLength(dic:{}):number{
        let count = 0
        for (const key in dic) {
            if (dic.hasOwnProperty(key)) {
                count ++ 
            }
        }
        return count
    }

    public static OpenUrl(url)
    {
        if(cc.sys.isBrowser == false)
        {
            JSOpenUrl.DirectOpen(url);
        }
        else
        {
            if(cc.sys.isMobile == false)
            {
                JSOpenUrl.BlankOpen(url);
            }
            else
            {
                if(cc.sys.os == cc.sys.OS_IOS)
                {
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

                    JSOpenUrl.BlankOpen(url);
                }
                else if(cc.sys.os == cc.sys.OS_ANDROID)
                {
                    //安卓
                    JSOpenUrl.BlankOpen(url);
                }
                else
                {
                    JSOpenUrl.DirectOpen(url);
                }
            }
        }
    }

    /**
     * 格式化日期， 
     * @param date Date对象
     * @param formatStr 可以是-，也可以是/
     * @param hasHMS 是否包含时分秒
     */
    public static FormatDate(date:Date, formatStr="-", hasHMS=false)
    {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let monthStr = month >= 10 ? month : "0" + month;
        let day = date.getDate();
        let dayStr = day >= 10 ? day : "0" + day;
        let dateStr = year + formatStr + monthStr + formatStr + dayStr;

        if (hasHMS)
        {
            dateStr += (" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        }
        
        return dateStr;
    }

}
