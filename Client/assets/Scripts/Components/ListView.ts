import Util from "../Tools/Util";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ListView extends cc.Component 
{
    private scrollview:cc.ScrollView;
    public  contentView:cc.Node;
    private scrollBar:cc.Scrollbar;
    private scrollstyle:ListViewScrollStyle;
    private spacingForRowCallback:(row:number)=>number;
    private countOfRowsCallback:()=>number;
    private getCellCallback:()=>Cell;
    private cellForRow:(cell:Cell)=>void;

    //data-------------->>
    private totalHeight:number;
    private unuseCell:Array<Cell> = [];
    private usingCell:{[row:number]:Cell} = {};
    private posForRows:Array<number> = [];
    private spaceForRows:Array<number> = [];
    private offset:number = 0;
    private lastOffset:number = 0;
    private currentStartRow:number = -1;
    private currentEndRow:number = -1;
    private lastStartRow:number = -1;
    private lastEndRow:number = -1;
    private currentRows:number = 0;
    //<<----------------data


    /**
     * listview 初始化
     * @param [scrollstyle] 样式
     * @param [spacingForRowCallback] 返回行高，可动态改变
     * @param [countOfRowsCallback] 返回行数，可动态改变
     * @param [getCellCallback] 返回一个新建的cell，可以继承Cell类
     * @param [cellForRow] 每当要刷新一个cell的时候会回调
     */
    public Init(
        scrollstyle:ListViewScrollStyle,
        spacingForRowCallback:(row:number)=>number,
        countOfRowsCallback:()=>number,
        getCellCallback:()=>Cell,
        cellForRow:(cell:Cell)=>void
        )
    {
        this.spacingForRowCallback = spacingForRowCallback;
        this.countOfRowsCallback = countOfRowsCallback;
        this.getCellCallback = getCellCallback;
        this.cellForRow = cellForRow;

        this.scrollstyle = scrollstyle;

        this.scrollview = this.node.addComponent(cc.ScrollView);
        
        let view = new cc.Node("view");
        this.node.addChild(view);
        view.position = cc.Vec2.ZERO;
        view.setContentSize(this.node.getContentSize());

        let mask = view.addComponent(cc.Mask);
        mask.type = cc.Mask.Type.RECT;

        this.contentView = new cc.Node("content");
        view.addChild(this.contentView);
        this.contentView.position = cc.Vec2.ZERO;
        this.contentView.setContentSize(this.node.getContentSize());

        this.scrollview.content = this.contentView;

        //TODO:
        if(this.scrollstyle == ListViewScrollStyle.Top)
        {
            this.node.anchorX = 0.5;
            
            this.node.anchorY = 1;

            let pos = this.node.position;
            pos.y += 0.5 * this.node.getContentSize().height;
            this.node.setPosition(pos);

            view.anchorX = 0.5;
            view.anchorY = 1;

            this.contentView.anchorX = 0.5;
            this.contentView.anchorY = 1;

            this.scrollview.vertical = true;
            this.scrollview.horizontal = false;
        }

        Util.SetScrollViewScrollEvent(this.scrollview, (scrollView, eventType:cc.ScrollView.EventType, data)=>{
            if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM)
            {
                if (this.scrollBottomShouldCallback)
                {
                    if (this.actionScrollBottomCallback!=null)
                    {
                        this.actionScrollBottomCallback();
                    }
                }
            }
        })
    }

    public SetVerticalScrollBar(scrollbar:cc.Scrollbar)
    {
        this.scrollview.verticalScrollBar = scrollbar;
        // if(this.scrollstyle == ListViewScrollStyle.Top)
        // {
        //     scrollbar.node.anchorX = 0.5;
        //     scrollbar.node.anchorY = 1;

        //     let pos = scrollbar.node.position;
        //     pos.y = 0;
        //     scrollbar.node.setPosition(pos);
        // }
    }

    public SetHorizontalScrollBar(scrollbar:cc.Scrollbar)
    {
        this.scrollview.horizontalScrollBar = scrollbar;
    }

    public Refresh()
    {
        this.posForRows = [];
        this.spaceForRows = [];
        this.totalHeight = 0;
        let countOfRows = this.countOfRowsCallback();
        // ccC.error("Refresh countOfRows  " + countOfRows);
        this.currentRows = countOfRows;
        for(let i=0;i<countOfRows;i++)
        {
            let space = this.spacingForRowCallback(i);
            this.posForRows.push(this.totalHeight);
            this.spaceForRows.push(space);
            this.totalHeight += space;
        }

        if(this.scrollstyle == ListViewScrollStyle.Top)
        {
            this.contentView.height = this.totalHeight;
            if(this.scrollview.getScrollOffset().y > this.totalHeight - this.scrollview.node.getContentSize.length)
            {
                this.scrollview.scrollToOffset(new cc.Vec2(0,this.totalHeight - this.scrollview.node.getContentSize.length));
            }
        }

        this.ShowCurrentRows(true);
    }

    public ScrollToTop()
    {
        this.scrollview.scrollToTop();
    }

    private GetRowsShouldShow(forceRefresh:boolean)
    {
        if(this.offset == this.lastOffset && forceRefresh == false)
            return;

        if(this.offset <= 0)
        {
            this.currentStartRow = 0;
        }
        else
        {
            if(this.offset > this.lastOffset)
            {
                for(let i = this.currentStartRow;i < this.posForRows.length;i ++)
                {
                    this.currentStartRow = i;
                    if(this.posForRows[i] == this.offset 
                        || (this.posForRows[i]<this.offset && this.posForRows[i] + this.spaceForRows[i] > this.offset))
                        break;
                }
            }
            else
            {
                for(let i = this.currentStartRow;i >= 0;i --)
                {
                    this.currentStartRow = i;
                    if(this.posForRows[i] == this.offset
                        || (this.posForRows[i]<this.offset && this.posForRows[i] + this.spaceForRows[i] > this.offset))
                        break;
                }
            }
        }

        for(let i = this.currentStartRow;i<this.posForRows.length;i++)
        {
            this.currentEndRow = i;
            if(this.posForRows[i] + this.spaceForRows[i] > this.offset + this.node.height)
                break;
        }

        // ccC.error(
        //     " this.offset " + this.offset 
        // + " this.lastStartRow " + this.lastStartRow 
        // + " lastEndRow " + this.lastEndRow 
        // + " this.currentStartRow  " + this.currentStartRow 
        // + " this.currentEndRow " + this.currentEndRow);

        this.lastOffset = this.offset;
    }

    private ShowCurrentRows(forceRefresh:boolean)
    {
        if(this.currentRows == 0)
        {
            this.currentRows = -1;
            this.HideAll();
            this.currentStartRow = -1;
            this.currentEndRow = -1;
            return;
        }
        this.lastStartRow = this.currentStartRow;
        this.lastEndRow = this.currentEndRow;
        this.GetRowsShouldShow(forceRefresh);

        //6种区间关系
        /*
        1.---       
            |
         ---|-
         |  |
         |  |
         |  |
         ---|-
          ---  

        2.
         ---
         |
        -|---
         |  |
         |  |
        -|---
         |  
         ---

         3.
         ----
         |
         |
         |
         |-----
         |    |
         ---- |
              |
              |
         ------

         4.
       -----
           |
       ----|
       |   |
       |----   
       |
       |
       -----

       5.
       ---
       |
       |
       ---

       ---
         |
         |
       ---
       
       6.
       ---
         |
         |
       ---

       ---
       |
       |
       ---

       *****************
       ---
       |
       |
       --- 是last

       ---
         |
         |
       --- 是current

        */
    //    cc.error("this.lastStartRow  " + this.lastStartRow + " this.currentStartRow " + this.currentStartRow 
    //    + " this.lastEndRow " + this.lastEndRow + " this.currentEndRow " + this.currentEndRow);

        if(this.lastStartRow != this.currentStartRow || this.lastEndRow != this.currentEndRow || forceRefresh == true)
        {
            // ccC.error("******");
            let shouldCallCellForRow = !forceRefresh;//强制刷新的话cellForRow放在最后统一执行
            if(this.lastStartRow >= this.currentStartRow && this.lastEndRow <= this.currentEndRow)
            {
                // ccC.error("1");
                for(let i=this.currentStartRow;i<this.lastStartRow;i++)
                {
                    this.ShowRow(i,shouldCallCellForRow);
                }

                for(let i=this.lastEndRow + 1;i<=this.currentEndRow;i++)
                {
                    this.ShowRow(i,shouldCallCellForRow);
                }
            }
            else if(this.lastStartRow <= this.currentStartRow && this.lastEndRow >= this.currentEndRow)
            {
                // ccC.error("2");
                for(let i=this.lastStartRow;i<this.currentStartRow;i++)
                {
                    this.HideRow(i);
                }
                for(let i=this.currentEndRow + 1;i<=this.lastEndRow;i++)
                {
                    this.HideRow(i);
                }
            }
            else if(this.lastStartRow <= this.currentStartRow && this.lastEndRow >= this.currentStartRow && this.lastEndRow <= this.currentEndRow)
            {
                // ccC.error("3");
                for(let i=this.lastStartRow;i<this.currentStartRow;i++)
                {
                    this.HideRow(i);
                }
                for(let i=this.lastEndRow + 1;i <= this.currentEndRow;i++)
                {
                    this.ShowRow(i,shouldCallCellForRow);
                }
            }
            else if(this.lastStartRow <= this.currentEndRow && this.lastEndRow >= this.currentEndRow && this.lastStartRow >= this.currentStartRow)
            {
                // ccC.error("4");
                for(let i=this.currentEndRow + 1;i <= this.lastEndRow;i++)
                {
                    this.HideRow(i);
                }
                for(let i=this.currentStartRow;i<this.lastStartRow;i++)
                {
                    this.ShowRow(i,shouldCallCellForRow);
                }
            }
            else if(this.lastEndRow <= this.currentStartRow || this.lastStartRow >= this.currentEndRow)
            {
                // ccC.error("5");
                for(let i=this.lastStartRow;i<=this.lastEndRow;i++)
                {
                    if(i != this.currentStartRow || i != this.currentEndRow)
                        this.HideRow(i);
                }
                for(let i=this.currentStartRow;i<= this.currentEndRow;i++)
                {
                    this.ShowRow(i,shouldCallCellForRow);
                }
            }

            if(forceRefresh == true)
            {
                for(let i=this.currentStartRow;i<=this.currentEndRow;i++)
                {
                    let cell:Cell = this.usingCell[i];
                    this.cellForRow(cell);
                }
            }
        }

    }

    private ShowRow(row:number,shouldCallCellForRow:boolean)
    {
        // cc.error("ShowRow " + row);
        let cell:Cell;  
        if(this.unuseCell.length > 0)
        {
            cell = this.unuseCell.pop();
        }
        else
        {
            cell = this.getCellCallback();
            this.contentView.addChild(cell.content);
        }
        cell.row = row;
        cell.content.active = true;
        //TODO:
        if(this.scrollstyle == ListViewScrollStyle.Top)
        {
            let pos = cell.content.position;
            pos.x = 0;
            pos.y = -this.posForRows[row] - this.spaceForRows[row] / 2;
            cell.content.setPosition(pos);
        }
        if(shouldCallCellForRow == true)
            this.cellForRow(cell);
        this.usingCell[row] = cell;
    }

    private HideRow(row:number)
    {
        // ccC.error("HideRow " + row);
        let cell = this.usingCell[row];
        if(cell != null)
        {
            cell.content.active = false;
            this.unuseCell.push(cell);
            this.usingCell[row] = null;
        }
        
    }

    private HideAll()
    {
        for(let i=this.currentStartRow;i<=this.currentEndRow;i++)
        {
            this.HideRow(i);
        }
    }

    onLoad () 
    {

    }

    start () 
    {

    }

    private tmpOffset:number = 0;
    update (dt) 
    {
        if(this.scrollview != null && this.currentRows > 0)
        {
            this.offset = this.scrollview.getScrollOffset().y;
            if(Math.abs(this.offset - this.tmpOffset) > 20)
            {
                this.tmpOffset = this.offset;
                this.ShowCurrentRows(false);
            }
            
        }
    }

    // 当ListView滑动到底部时是否执行回调
    scrollBottomShouldCallback:boolean;

    public SetScrollToBottomShouldCallback(shouldCallback:boolean)
    {
        this.scrollBottomShouldCallback = shouldCallback;
    }

    // 滑动到底部时执行回调
    actionScrollBottomCallback:()=>void;
    public SetScrollBottomCallback(actionCallback:()=>void)
    {
        this.actionScrollBottomCallback = actionCallback;
    }

    // 获取ScrollView
    public GetScrollView()
    {
        return this.scrollview;
    }
}

export class Cell
{
    public content:cc.Node;
    public row:number;
}

export enum ListViewScrollStyle
{
    Top,//手指向上划为下一行
    Bottom,
    Left,
    Right,
}



