const {ccclass, property} = cc._decorator;

@ccclass
export default class PageViewListener extends cc.Component 
{
    private pageView:cc.PageView;
    private scrollEventHandler:cc.Component.EventHandler;
    private scrollEventAction:(pageView:cc.PageView, eventType:cc.PageView.EventType, data:any)=>void;

    public SetScrollEventAction(callback:(pageView:cc.PageView, eventType:cc.PageView.EventType, data:any)=>void)
    {
        this.scrollEventAction = callback;
    }

    onLoad() 
    {
        this.scrollEventHandler = new cc.Component.EventHandler();
        this.scrollEventHandler.target = this.node;
        this.scrollEventHandler.component = "PageViewListener";
        this.scrollEventHandler.handler = "OnScrollCallback";
        
        this.pageView = this.node.getComponent(cc.PageView);
        this.pageView.scrollEvents.push(this.scrollEventHandler);
    }

    OnScrollCallback(pageView:cc.PageView, eventType:cc.PageView.EventType, customEventData:string) 
    {
        if (this.scrollEventAction != null)
            this.scrollEventAction(pageView, eventType, customEventData);
    }
}
