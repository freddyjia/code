import Util from "../Tools/Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollPage extends cc.Component 
{
    @property(cc.Button)
    public BtnLeft:cc.Button = null;

    @property(cc.Button)
    public BtnRight:cc.Button = null;

    parentWidth:number = 0;
    initOffset:number = 0;
    scrollView:cc.ScrollView;
    MoveOffset:number = 260*4;

    private lastOffsetX:number;
    private lastMaxOffsetX:number;

    onLoad() 
    {
        this.scrollView = this.getComponent(cc.ScrollView);
        this.parentWidth = this.scrollView.content.parent.getContentSize().width;
        this.initOffset = this.parentWidth*0.5;

        /*
        Util.SetScrollViewScrollEvent(
            this.getComponent(cc.ScrollView),
            (scrollView:cc.ScrollView, eventType:cc.ScrollView.EventType, data:any)=>{
                if (eventType == cc.ScrollView.EventType.SCROLL_ENDED)
                {
                    this.OnEndDrag();
                }
            }
        );
        */

        this.BtnRight.node.active = false;
        this.BtnLeft.node.active = false;
        
        Util.SetClickAction(this.BtnLeft, (btn:cc.Button, data:any)=>{
            this.MoveLeft();
        });

        Util.SetClickAction(this.BtnRight, (btn:cc.Button, data:any)=>{
            this.MoveRight();
        });

        this.lastOffsetX = -999;
        this.lastMaxOffsetX = -999;
    }

    update(dt:number)
    {
        if (this.scrollView.isScrolling())
            return;
        this.ShowButtons();
    }

    // private OnEndDrag()
    // {
    //     this.ShowButtons();
    // }

    private ShowButtons()
    {
        if(this.scrollView.getMaxScrollOffset().x < 100)
        {
            if(Math.abs(this.lastMaxOffsetX - this.scrollView.getMaxScrollOffset().x) < 50)
                return;
            this.lastMaxOffsetX = this.scrollView.getMaxScrollOffset().x;
            this.BtnLeft.node.active = false;
            this.BtnRight.node.active = false;
        }
        else
        {
            if(Math.abs(this.lastOffsetX - this.scrollView.getScrollOffset().x) < 50)
                return;

            this.lastOffsetX = this.scrollView.getScrollOffset().x;
            let scrollOffset = -this.scrollView.getScrollOffset().x / this.scrollView.getMaxScrollOffset().x;

            if(scrollOffset > 0.2)
            {
                this.BtnLeft.node.active = true;
            }
            else
            {
                this.BtnLeft.node.active = false;
            }
    
            if(scrollOffset < 0.8)
            {
                this.BtnRight.node.active = true;
            }
            else
            {
                this.BtnRight.node.active = false;
            }
        }
    }

    public MoveLeft()
    {
        let totalWidth = this.scrollView.content.width - this.parentWidth;
        if (totalWidth <= 0)
            return;

        let oldx = this.scrollView.content.position.x;
        let newx = oldx + this.MoveOffset;
        if (newx > -this.initOffset)
        {
            newx = -this.initOffset;
            this.BtnLeft.node.active = false;
            this.BtnRight.node.active = true;
        }
            
        newx += this.initOffset;
        
        let percent = Math.abs(newx/totalWidth);
        this.scrollView.scrollToPercentHorizontal(percent, 0.1);
    }

    public MoveRight()
    {
        let totalWidth = this.scrollView.content.width - this.parentWidth;
        if (totalWidth <= 0)
            return;

        let oldx = this.scrollView.content.position.x;
        let newx = oldx - this.MoveOffset;
        if (newx < -totalWidth)
        {
            newx = -totalWidth;
            this.BtnLeft.node.active = true;
            this.BtnRight.node.active = false;
        }
           
        newx -= this.initOffset;
        
        let percent = Math.abs(newx/totalWidth);
        this.scrollView.scrollToPercentHorizontal(percent, 0.1);
    }
}
