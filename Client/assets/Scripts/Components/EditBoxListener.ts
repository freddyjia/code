const {ccclass, property} = cc._decorator;

@ccclass
export default class EditBoxListener extends cc.Component 
{
    /*
    ** 该事件在用户点击输入框获取焦点的时候被触发
    */
    onEditDidBeganAction:(editbox:cc.EditBox, customEventData:string)=>void;
    
    onEditDidBegan(editbox:cc.EditBox, customEventData:string)
    {
        if (this.onEditDidBeganAction != null)
            this.onEditDidBeganAction(editbox, customEventData);
    }

    public AddEditDidBeganHandler(action:(editbox:cc.EditBox, customEventData:string)=>void, customEventData:string="")
    {
        this.onEditDidBeganAction = action;

        let onEditDidBeganHandler = new cc.Component.EventHandler();
        onEditDidBeganHandler.target = this.node;
        onEditDidBeganHandler.component = "EditBoxListener";
        onEditDidBeganHandler.handler = "onEditDidBegan";
        onEditDidBeganHandler.customEventData = customEventData;
        
        let editBox = this.node.getComponent(cc.EditBox);
        editBox.editingDidBegan.push(onEditDidBeganHandler);
    }

    /*
    ** 该事件在用户每一次输入文字变化的时候被触发
    */
    onTextChangedAction:(text:string, editbox:cc.EditBox, customEventData:string)=>void;

    onTextChanged(text:string, editbox:cc.EditBox, customEventData:string)
    {
        if (this.onTextChangedAction != null)
            this.onTextChangedAction(text, editbox, customEventData);
    }

    public AddTextChangedHandler(action:(text:string, editbox:cc.EditBox, customEventData:string)=>void, customEventData:string="")
    {
        this.onTextChangedAction = action;

        let hander = new cc.Component.EventHandler();
        hander.target = this.node;
        hander.component = "EditBoxListener";
        hander.handler = "onTextChanged";
        hander.customEventData = customEventData;
        
        let editBox = this.node.getComponent(cc.EditBox);
        editBox.textChanged.push(hander);
    }

    /*
    ** 在单行模式下面，一般是在用户按下回车或者点击屏幕输入框以外的地方调用该函数。 如果是多行输入，一般是在用户点击屏幕输入框以外的地方调用该函数。
    */
    onEditDidEndedAction:(editbox:cc.EditBox, customEventData:string)=>void;

    onEditDidEnded(editbox:cc.EditBox, customEventData:string)
    {
        if (this.onEditDidEndedAction != null)
            this.onEditDidEndedAction(editbox, customEventData);
    }

    public AddEditDidEndedHandler(action:(editbox:cc.EditBox, customEventData:string)=>void, customEventData:string="")
    {
        this.onEditDidEndedAction = action;

        let handler = new cc.Component.EventHandler();
        handler.target = this.node;
        handler.component = "EditBoxListener";
        handler.handler = "onEditDidEnded";
        handler.customEventData = customEventData;
        
        let editBox = this.node.getComponent(cc.EditBox);
        editBox.editingDidEnded.push(handler);
    }

   /*
    ** 当用户按下回车按键时的事件回调，目前不支持 windows 平台
    */
   onEditingReturnAction:(editbox:cc.EditBox, customEventData:string)=>void;

   onEditingReturn(editbox:cc.EditBox, customEventData:string)
   {
        if (this.onEditingReturnAction != null)
            this.onEditingReturnAction(editbox, customEventData);
   }

   public AddEditingReturnHandler(action:(editbox:cc.EditBox, customEventData:string)=>void, customEventData:string="")
   {
        this.onEditingReturnAction = action;

        let handler = new cc.Component.EventHandler();
        handler.target = this.node;
        handler.component = "EditBoxListener";
        handler.handler = "onEditingReturn";
        handler.customEventData = customEventData;
        
        let editBox = this.node.getComponent(cc.EditBox);
        editBox.editingReturn.push(handler);
   }
}
