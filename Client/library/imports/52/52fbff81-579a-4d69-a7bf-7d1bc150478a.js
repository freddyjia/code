"use strict";
cc._RF.push(module, '52fbf+BV5pNaae/fRvBUEeK', 'ListView');
// Scripts/Components/ListView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../Tools/Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListView = /** @class */ (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.unuseCell = [];
        _this.usingCell = {};
        _this.posForRows = [];
        _this.spaceForRows = [];
        _this.offset = 0;
        _this.lastOffset = 0;
        _this.currentStartRow = -1;
        _this.currentEndRow = -1;
        _this.lastStartRow = -1;
        _this.lastEndRow = -1;
        _this.currentRows = 0;
        _this.tmpOffset = 0;
        return _this;
    }
    //<<----------------data
    /**
     * listview 初始化
     * @param [scrollstyle] 样式
     * @param [spacingForRowCallback] 返回行高，可动态改变
     * @param [countOfRowsCallback] 返回行数，可动态改变
     * @param [getCellCallback] 返回一个新建的cell，可以继承Cell类
     * @param [cellForRow] 每当要刷新一个cell的时候会回调
     */
    ListView.prototype.Init = function (scrollstyle, spacingForRowCallback, countOfRowsCallback, getCellCallback, cellForRow) {
        var _this = this;
        this.spacingForRowCallback = spacingForRowCallback;
        this.countOfRowsCallback = countOfRowsCallback;
        this.getCellCallback = getCellCallback;
        this.cellForRow = cellForRow;
        this.scrollstyle = scrollstyle;
        this.scrollview = this.node.addComponent(cc.ScrollView);
        var view = new cc.Node("view");
        this.node.addChild(view);
        view.position = cc.Vec2.ZERO;
        view.setContentSize(this.node.getContentSize());
        var mask = view.addComponent(cc.Mask);
        mask.type = cc.Mask.Type.RECT;
        this.contentView = new cc.Node("content");
        view.addChild(this.contentView);
        this.contentView.position = cc.Vec2.ZERO;
        this.contentView.setContentSize(this.node.getContentSize());
        this.scrollview.content = this.contentView;
        //TODO:
        if (this.scrollstyle == ListViewScrollStyle.Top) {
            this.node.anchorX = 0.5;
            this.node.anchorY = 1;
            var pos = this.node.position;
            pos.y += 0.5 * this.node.getContentSize().height;
            this.node.setPosition(pos);
            view.anchorX = 0.5;
            view.anchorY = 1;
            this.contentView.anchorX = 0.5;
            this.contentView.anchorY = 1;
            this.scrollview.vertical = true;
            this.scrollview.horizontal = false;
        }
        Util_1.default.SetScrollViewScrollEvent(this.scrollview, function (scrollView, eventType, data) {
            if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM) {
                if (_this.scrollBottomShouldCallback) {
                    if (_this.actionScrollBottomCallback != null) {
                        _this.actionScrollBottomCallback();
                    }
                }
            }
        });
    };
    ListView.prototype.SetVerticalScrollBar = function (scrollbar) {
        this.scrollview.verticalScrollBar = scrollbar;
        // if(this.scrollstyle == ListViewScrollStyle.Top)
        // {
        //     scrollbar.node.anchorX = 0.5;
        //     scrollbar.node.anchorY = 1;
        //     let pos = scrollbar.node.position;
        //     pos.y = 0;
        //     scrollbar.node.setPosition(pos);
        // }
    };
    ListView.prototype.SetHorizontalScrollBar = function (scrollbar) {
        this.scrollview.horizontalScrollBar = scrollbar;
    };
    ListView.prototype.Refresh = function () {
        this.posForRows = [];
        this.spaceForRows = [];
        this.totalHeight = 0;
        var countOfRows = this.countOfRowsCallback();
        // ccC.error("Refresh countOfRows  " + countOfRows);
        this.currentRows = countOfRows;
        for (var i = 0; i < countOfRows; i++) {
            var space = this.spacingForRowCallback(i);
            this.posForRows.push(this.totalHeight);
            this.spaceForRows.push(space);
            this.totalHeight += space;
        }
        if (this.scrollstyle == ListViewScrollStyle.Top) {
            this.contentView.height = this.totalHeight;
            if (this.scrollview.getScrollOffset().y > this.totalHeight - this.scrollview.node.getContentSize.length) {
                this.scrollview.scrollToOffset(new cc.Vec2(0, this.totalHeight - this.scrollview.node.getContentSize.length));
            }
        }
        this.ShowCurrentRows(true);
    };
    ListView.prototype.ScrollToTop = function () {
        this.scrollview.scrollToTop();
    };
    ListView.prototype.GetRowsShouldShow = function (forceRefresh) {
        if (this.offset == this.lastOffset && forceRefresh == false)
            return;
        if (this.offset <= 0) {
            this.currentStartRow = 0;
        }
        else {
            if (this.offset > this.lastOffset) {
                for (var i = this.currentStartRow; i < this.posForRows.length; i++) {
                    this.currentStartRow = i;
                    if (this.posForRows[i] == this.offset
                        || (this.posForRows[i] < this.offset && this.posForRows[i] + this.spaceForRows[i] > this.offset))
                        break;
                }
            }
            else {
                for (var i = this.currentStartRow; i >= 0; i--) {
                    this.currentStartRow = i;
                    if (this.posForRows[i] == this.offset
                        || (this.posForRows[i] < this.offset && this.posForRows[i] + this.spaceForRows[i] > this.offset))
                        break;
                }
            }
        }
        for (var i = this.currentStartRow; i < this.posForRows.length; i++) {
            this.currentEndRow = i;
            if (this.posForRows[i] + this.spaceForRows[i] > this.offset + this.node.height)
                break;
        }
        // ccC.error(
        //     " this.offset " + this.offset 
        // + " this.lastStartRow " + this.lastStartRow 
        // + " lastEndRow " + this.lastEndRow 
        // + " this.currentStartRow  " + this.currentStartRow 
        // + " this.currentEndRow " + this.currentEndRow);
        this.lastOffset = this.offset;
    };
    ListView.prototype.ShowCurrentRows = function (forceRefresh) {
        if (this.currentRows == 0) {
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
        if (this.lastStartRow != this.currentStartRow || this.lastEndRow != this.currentEndRow || forceRefresh == true) {
            // ccC.error("******");
            var shouldCallCellForRow = !forceRefresh; //强制刷新的话cellForRow放在最后统一执行
            if (this.lastStartRow >= this.currentStartRow && this.lastEndRow <= this.currentEndRow) {
                // ccC.error("1");
                for (var i = this.currentStartRow; i < this.lastStartRow; i++) {
                    this.ShowRow(i, shouldCallCellForRow);
                }
                for (var i = this.lastEndRow + 1; i <= this.currentEndRow; i++) {
                    this.ShowRow(i, shouldCallCellForRow);
                }
            }
            else if (this.lastStartRow <= this.currentStartRow && this.lastEndRow >= this.currentEndRow) {
                // ccC.error("2");
                for (var i = this.lastStartRow; i < this.currentStartRow; i++) {
                    this.HideRow(i);
                }
                for (var i = this.currentEndRow + 1; i <= this.lastEndRow; i++) {
                    this.HideRow(i);
                }
            }
            else if (this.lastStartRow <= this.currentStartRow && this.lastEndRow >= this.currentStartRow && this.lastEndRow <= this.currentEndRow) {
                // ccC.error("3");
                for (var i = this.lastStartRow; i < this.currentStartRow; i++) {
                    this.HideRow(i);
                }
                for (var i = this.lastEndRow + 1; i <= this.currentEndRow; i++) {
                    this.ShowRow(i, shouldCallCellForRow);
                }
            }
            else if (this.lastStartRow <= this.currentEndRow && this.lastEndRow >= this.currentEndRow && this.lastStartRow >= this.currentStartRow) {
                // ccC.error("4");
                for (var i = this.currentEndRow + 1; i <= this.lastEndRow; i++) {
                    this.HideRow(i);
                }
                for (var i = this.currentStartRow; i < this.lastStartRow; i++) {
                    this.ShowRow(i, shouldCallCellForRow);
                }
            }
            else if (this.lastEndRow <= this.currentStartRow || this.lastStartRow >= this.currentEndRow) {
                // ccC.error("5");
                for (var i = this.lastStartRow; i <= this.lastEndRow; i++) {
                    if (i != this.currentStartRow || i != this.currentEndRow)
                        this.HideRow(i);
                }
                for (var i = this.currentStartRow; i <= this.currentEndRow; i++) {
                    this.ShowRow(i, shouldCallCellForRow);
                }
            }
            if (forceRefresh == true) {
                for (var i = this.currentStartRow; i <= this.currentEndRow; i++) {
                    var cell = this.usingCell[i];
                    this.cellForRow(cell);
                }
            }
        }
    };
    ListView.prototype.ShowRow = function (row, shouldCallCellForRow) {
        // cc.error("ShowRow " + row);
        var cell;
        if (this.unuseCell.length > 0) {
            cell = this.unuseCell.pop();
        }
        else {
            cell = this.getCellCallback();
            this.contentView.addChild(cell.content);
        }
        cell.row = row;
        cell.content.active = true;
        //TODO:
        if (this.scrollstyle == ListViewScrollStyle.Top) {
            var pos = cell.content.position;
            pos.x = 0;
            pos.y = -this.posForRows[row] - this.spaceForRows[row] / 2;
            cell.content.setPosition(pos);
        }
        if (shouldCallCellForRow == true)
            this.cellForRow(cell);
        this.usingCell[row] = cell;
    };
    ListView.prototype.HideRow = function (row) {
        // ccC.error("HideRow " + row);
        var cell = this.usingCell[row];
        if (cell != null) {
            cell.content.active = false;
            this.unuseCell.push(cell);
            this.usingCell[row] = null;
        }
    };
    ListView.prototype.HideAll = function () {
        for (var i = this.currentStartRow; i <= this.currentEndRow; i++) {
            this.HideRow(i);
        }
    };
    ListView.prototype.onLoad = function () {
    };
    ListView.prototype.start = function () {
    };
    ListView.prototype.update = function (dt) {
        if (this.scrollview != null && this.currentRows > 0) {
            this.offset = this.scrollview.getScrollOffset().y;
            if (Math.abs(this.offset - this.tmpOffset) > 20) {
                this.tmpOffset = this.offset;
                this.ShowCurrentRows(false);
            }
        }
    };
    ListView.prototype.SetScrollToBottomShouldCallback = function (shouldCallback) {
        this.scrollBottomShouldCallback = shouldCallback;
    };
    ListView.prototype.SetScrollBottomCallback = function (actionCallback) {
        this.actionScrollBottomCallback = actionCallback;
    };
    // 获取ScrollView
    ListView.prototype.GetScrollView = function () {
        return this.scrollview;
    };
    ListView = __decorate([
        ccclass
    ], ListView);
    return ListView;
}(cc.Component));
exports.default = ListView;
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());
exports.Cell = Cell;
var ListViewScrollStyle;
(function (ListViewScrollStyle) {
    ListViewScrollStyle[ListViewScrollStyle["Top"] = 0] = "Top";
    ListViewScrollStyle[ListViewScrollStyle["Bottom"] = 1] = "Bottom";
    ListViewScrollStyle[ListViewScrollStyle["Left"] = 2] = "Left";
    ListViewScrollStyle[ListViewScrollStyle["Right"] = 3] = "Right";
})(ListViewScrollStyle = exports.ListViewScrollStyle || (exports.ListViewScrollStyle = {}));

cc._RF.pop();