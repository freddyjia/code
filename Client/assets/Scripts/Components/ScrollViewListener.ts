const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollViewListener extends cc.Component 
{
    private scrollView:cc.ScrollView;
    private scrollEventHandler:cc.Component.EventHandler;
    private scrollEventAction:(scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, data:any)=>void;

    public SetScrollEventAction(callback:(scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, data:any)=>void)
    {
        this.scrollEventAction = callback;
    }

    onLoad() 
    {
        this.scrollEventHandler = new cc.Component.EventHandler();
        this.scrollEventHandler.target = this.node;
        this.scrollEventHandler.component = "ScrollViewListener";
        this.scrollEventHandler.handler = "OnScrollCallback";
        
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this.scrollView.scrollEvents.push(this.scrollEventHandler);
    }

    OnScrollCallback(scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, customEventData:string) 
    {
        if (this.scrollEventAction != null)
            this.scrollEventAction(scrollView, eventType, customEventData);
    }
}
