import View from "../../MVCFramework/View";

export default class ViewToast extends View
{
    private ToastItem:cc.Node;
    private ToastObjs:cc.Node;

    private unuseToastItem:Array<cc.Node> = [];
    private toastingObjCnt = 0;

    public OnAwake()
    {
        this.ToastItem = this.FindTransform("ToastItem");
        this.ToastObjs = this.FindTransform("ToastObjs");
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
        this.unuseToastItem = [];
        this.toastingObjCnt = 0;
    }

    private GetToastItem():cc.Node
    {
        let ret:cc.Node = null;
        if(this.unuseToastItem.length > 0)
        {
            ret = this.unuseToastItem.pop();
        }
        if(ret == null)
        {
            ret = cc.instantiate(this.ToastItem);
            this.ToastObjs.addChild(ret);
            ret.position = cc.Vec2.ZERO;
        }
        ret.active = true;
        ret.opacity = 255;
        ret.position = cc.Vec2.ZERO;
        return ret;
    }

    public AddToast(content:string)
    {
        // cc.error("content  "+ content);
        this.toastingObjCnt ++;
        let toastItem = this.GetToastItem();
        cc.find("LabelContent1",toastItem).getComponent(cc.Label).string = content;
        cc.find("LabelContent1/LabelContent2",toastItem).getComponent(cc.Label).string = content;
        cc.find("LabelContent1/BG",toastItem).getComponent(cc.Widget).updateAlignment();

        let outside = this;
        var finished = cc.callFunc(function () {
            toastItem.active = false;
            outside.unuseToastItem.push(toastItem);
            outside.toastingObjCnt --;
            if(outside.toastingObjCnt <= 0)
            {
                outside.toastingObjCnt = 0;
                outside.Hide();
            }
        }, this, null);

        let spawn = cc.sequence(cc.moveBy(1, 0, 50),cc.spawn(cc.moveBy(2, 0, 100),cc.sequence(cc.fadeOut(2.0),finished)));

        toastItem.runAction(spawn);
        
    }

}
