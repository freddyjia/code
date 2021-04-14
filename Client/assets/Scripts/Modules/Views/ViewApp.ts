import View from "../../MVCFramework/View";


export default class ViewApp extends View 
{
    ContentPanel:cc.Widget;

    selfPlayerId:string;


    public SetSelfPlayerID(playerId)
    {
        this.selfPlayerId = playerId;
    }

    public OnAwake()
    {
        this.AdaptPhone();
    }

    private AdaptPhone()
    {
        // iPhone刘海适配
        if (cc.sys.os == cc.sys.OS_IOS)
        {
            let screen = cc.view.getFrameSize();
            let screenRate = screen.height / screen.width;
            if (screenRate >= 1.99)
            {
                this.ContentPanel.top = 50;
            }
        }
    }

    public OnShowView()
    {

    }

    public OnHideView()
    {
        
    }

    public OnDestroy()
    {
        
    }
}
