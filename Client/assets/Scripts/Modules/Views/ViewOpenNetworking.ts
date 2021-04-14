import View from "../../MVCFramework/View";
import TimerManager from "../../Components/TimerManager";

export default class ViewOpenNetworking extends View 
{
    private LabelLoading:cc.Label;

    private timerID;
    private Content:cc.Node;

    public OnAwake()
    {
        // this.LabelLoading = this.FindTransform("LabelLoading").getComponent(cc.Label);
        // this.LabelLoading.node.active = false;

        this.Content = this.FindTransform("Content");
        this.Content.active = false;
    }

    public Refresh(content:string)
    {
        this.timerID = TimerManager.GetInstance().CallActionDelay(()=>{
            // this.LabelLoading.node.active = true;
            this.Content.active = true;
        },1);
        if(content != "")
            this.LabelLoading.string = content;
    }

    public OnShowView()
    {
        
    }

    public OnHideView()
    {
        TimerManager.GetInstance().DeleteTimer(this.timerID);
        // this.LabelLoading.node.active = false;
        this.Content.active = false;
    }

}
