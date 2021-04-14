import View from "../../MVCFramework/View";
import { DialogData } from "../../Tools/Dialog";
import Util from "../../Tools/Util";
import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";


export default class ViewDialogNormal extends View
{
    private ButtonYes:cc.Button;
    private ButtonNo:cc.Button;
    private ButtonClose:cc.Button;
    private LabelTitle:cc.Label;
    public LabelContent:cc.Label;
    private LabelYes:cc.Label;
    private LabelNo:cc.Label;

    private data:DialogData;

    public OnAwake()
    {
        if(Global.showLog == true)
            cc.log("ViewTest1 OnAwake");
        this.ButtonYes = this.FindTransform("ButtonYes").getComponent(cc.Button);
        Util.SetClickAction(this.ButtonYes,(button,data)=>{
            
            this.Hide();
            if(this.data.yesCallback != null)
            {
                this.data.yesCallback();
            }
        });
        this.ButtonNo = this.FindTransform("ButtonNo").getComponent(cc.Button);
        Util.SetClickAction(this.ButtonNo,(button,data)=>{
            
            this.Hide();
            if(this.data.noCallback != null)
            {
                this.data.noCallback();
            }
        });
        this.ButtonClose = this.FindTransform("ButtonClose").getComponent(cc.Button);
        Util.SetClickAction(this.ButtonClose,(button,data)=>{
            this.Hide();
        });
        this.LabelTitle = this.FindTransform("LabelTitle").getComponent(cc.Label);
        this.LabelContent = this.FindTransform("LabelContent").getComponent(cc.Label);

        this.LabelYes = this.FindTransform("LabelYes").getComponent(cc.Label);
        this.LabelNo = this.FindTransform("LabelNo").getComponent(cc.Label);
    }

    public OnShowView()
    {
        
    }

    public OnHideView()
    {
        
    }

    public OnFocus()
    {

    }

    public OnDisFocus()
    {
        
    }

    public OnDestroy()
    {
        
    }

    public SetData(data:DialogData)
    {
        this.data = data;
        this.LabelContent.string = this.data.content;
        this.LabelTitle.string = this.data.title;
        this.ButtonYes.node.active = this.data.showYes;
        this.ButtonNo.node.active = this.data.showNo;
        this.LabelYes.string = this.data.yesText;
        this.LabelNo.string = this.data.noText;
    }

}
