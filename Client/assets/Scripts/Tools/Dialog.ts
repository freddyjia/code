import MessageCenter from "../MVCFramework/MessageCenter";
import MessageNames from "../Modules/MessageNames";
import Global from "../Global/Global";


export class DialogData
{
    public showYes:boolean = true;
    public showNo:boolean = true;
    public title:string = "";
    public content:string = "";
    public yesCallback;
    public noCallback;
    public yesText = "确定";
    public noText = "取消";
}

export default class Dialog
{
    public static ShowOnlyYes(content,yesCallback)
    {
        if(Global.showLog == true)
            cc.error("Dialog ShowOnlyYes " + content);
        let data = new DialogData();
        data.showNo = false;
        data.content = content;
        data.yesCallback = yesCallback;
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowWithYesNo(content,yesCallBack,noCallback)
    {
        let data = new DialogData();
        data.showNo = true;
        data.content = content;
        data.yesCallback = yesCallBack;
        data.noCallback = noCallback;
        if(Global.showLog == true)
            cc.error("Dialog ShowWithYesNo " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowWithYesNoContent(dialogType,title,content,yesText,noText,yesCallback,noCallback)
    {
        let data = new DialogData();
        data.title = title;
        data.showNo = true;
        data.content = content;
        data.yesText = yesText;
        data.noText = noText;
        data.yesCallback = yesCallback;
        data.noCallback = noCallback;
        if(Global.showLog == true)
            cc.error("Dialog ShowWithYesNoContent " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowJustYesButton(dialogType,title,content,yesText,yesCallback)
    {
        let data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;Global
        if(Global.showLog == true)
            cc.error("Dialog ShowJustYesButton " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowYesNoItemButton(dialogType,title,content,yesText,noText,item,yesCallback,noCallback)
    {
        let data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.noText = noText;
        data.yesCallback = yesCallback;
        data.noCallback = noCallback;
        if(Global.showLog == true)
            cc.error("Dialog ShowYesNoItemButton " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowNoItemButton(dialogType,title,content,yesText,itemList,yesCallback)
    {
        let data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;

        if(Global.showLog == true)
            cc.error("Dialog ShowNoItemButton " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
    }

    public static ShowYesCloseButton(dialogType,title,content,yesText,yesCallback)
    {
        let data = new DialogData();
        data.title = title;
        data.showNo = false;
        data.content = content;
        data.yesText = yesText;
        data.yesCallback = yesCallback;

        if(Global.showLog == true)
            cc.error("Dialog ShowYesCloseButton " + content);
        MessageCenter.SendMessage(MessageNames.ShowDialog,data);
        
    }
}

export class DialogType
{
    public static Normal = 1;
}

export class DialogStatus
{
    public static Title = "Title";
    public static Content = "Content";
    public static Yes = "Yes";
    public static No = "No";
    public static Close = "Close";
    public static Item = "Item";
}