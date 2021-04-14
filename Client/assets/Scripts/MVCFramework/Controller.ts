import View from "./View";
import Model from "./Model";

export default class Controller 
{
    public name:string;
    public sendMsgCallBack:(string,any)=>void;
    public getViewCallback:(string)=>View;
    public getModelCallback:(string)=>Model;

    constructor(){

    }

    public SendMessage(msg:string,msgBody:any=null)
    {
        this.sendMsgCallBack(msg,msgBody);
    }

    public GetView(viewName:string):View
    {
        return this.getViewCallback(viewName);
    }

    public GetModel(modelName:string)
    {
        return this.getModelCallback(modelName);
    }

    //以下是可以重写的函数
    public Init()
    {

    }

    //重写函数
    public Clean()
    {
        
    }

    //重写函数
    public OnReceiveMessage(msg:string,msgBody:any)
    {

    }

}
