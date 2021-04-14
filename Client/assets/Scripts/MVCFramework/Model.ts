export default class Model 
{
    public sendMsgCallBack:(string,any)=>void = null;

    constructor()
    {

    }

    public SendMessage(msg:string,msgBody:any=null)
    {
        this.sendMsgCallBack(msg,msgBody);
    }

    //可以重写
    public Init()
    {
        
    }

    //可以重写
    public Clean()
    {
        
    }
}
