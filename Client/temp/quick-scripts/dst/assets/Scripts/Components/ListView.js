
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/ListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcTGlzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlDO0FBRTNCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUF3ZEM7UUExY1csZUFBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixlQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUNuQyxnQkFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsa0JBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ2hDLFlBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIsZ0JBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIscUJBQWUsR0FBVSxDQUFDLENBQUMsQ0FBQztRQUM1QixtQkFBYSxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFCLGtCQUFZLEdBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekIsZ0JBQVUsR0FBVSxDQUFDLENBQUMsQ0FBQztRQUN2QixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQTZadkIsZUFBUyxHQUFVLENBQUMsQ0FBQzs7SUFtQ2pDLENBQUM7SUEvYkcsd0JBQXdCO0lBR3hCOzs7Ozs7O09BT0c7SUFDSSx1QkFBSSxHQUFYLFVBQ0ksV0FBK0IsRUFDL0IscUJBQTBDLEVBQzFDLG1CQUE4QixFQUM5QixlQUF3QixFQUN4QixVQUE0QjtRQUxoQyxpQkFpRUM7UUF6REcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENB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LE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUM5QztnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FFSjtJQUNMLENBQUM7SUFLTSxrREFBK0IsR0FBdEMsVUFBdUMsY0FBc0I7UUFFekQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0lBSU0sMENBQXVCLEdBQTlCLFVBQStCLGNBQXVCO1FBRWxELElBQUksQ0FBQywwQkFBMEIsR0FBRyxjQUFjLENBQUM7SUFDckQsQ0FBQztJQUVELGVBQWU7SUFDUixnQ0FBYSxHQUFwQjtRQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBdGRnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdWQ1QjtJQUFELGVBQUM7Q0F2ZEQsQUF1ZEMsQ0F2ZHFDLEVBQUUsQ0FBQyxTQUFTLEdBdWRqRDtrQkF2ZG9CLFFBQVE7QUF5ZDdCO0lBQUE7SUFJQSxDQUFDO0lBQUQsV0FBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksb0JBQUk7QUFNakIsSUFBWSxtQkFNWDtBQU5ELFdBQVksbUJBQW1CO0lBRTNCLDJEQUFHLENBQUE7SUFDSCxpRUFBTSxDQUFBO0lBQ04sNkRBQUksQ0FBQTtJQUNKLCtEQUFLLENBQUE7QUFDVCxDQUFDLEVBTlcsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFNOUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbCBmcm9tIFwiLi4vVG9vbHMvVXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIHByaXZhdGUgc2Nyb2xsdmlldzpjYy5TY3JvbGxWaWV3O1xuICAgIHB1YmxpYyAgY29udGVudFZpZXc6Y2MuTm9kZTtcbiAgICBwcml2YXRlIHNjcm9sbEJhcjpjYy5TY3JvbGxiYXI7XG4gICAgcHJpdmF0ZSBzY3JvbGxzdHlsZTpMaXN0Vmlld1Njcm9sbFN0eWxlO1xuICAgIHByaXZhdGUgc3BhY2luZ0ZvclJvd0NhbGxiYWNrOihyb3c6bnVtYmVyKT0+bnVtYmVyO1xuICAgIHByaXZhdGUgY291bnRPZlJvd3NDYWxsYmFjazooKT0+bnVtYmVyO1xuICAgIHByaXZhdGUgZ2V0Q2VsbENhbGxiYWNrOigpPT5DZWxsO1xuICAgIHByaXZhdGUgY2VsbEZvclJvdzooY2VsbDpDZWxsKT0+dm9pZDtcblxuICAgIC8vZGF0YS0tLS0tLS0tLS0tLS0tPj5cbiAgICBwcml2YXRlIHRvdGFsSGVpZ2h0Om51bWJlcjtcbiAgICBwcml2YXRlIHVudXNlQ2VsbDpBcnJheTxDZWxsPiA9IFtdO1xuICAgIHByaXZhdGUgdXNpbmdDZWxsOntbcm93Om51bWJlcl06Q2VsbH0gPSB7fTtcbiAgICBwcml2YXRlIHBvc0ZvclJvd3M6QXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgc3BhY2VGb3JSb3dzOkFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwcml2YXRlIG9mZnNldDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGFzdE9mZnNldDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFN0YXJ0Um93Om51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgY3VycmVudEVuZFJvdzpudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGxhc3RTdGFydFJvdzpudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGxhc3RFbmRSb3c6bnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBjdXJyZW50Um93czpudW1iZXIgPSAwO1xuICAgIC8vPDwtLS0tLS0tLS0tLS0tLS0tZGF0YVxuXG5cbiAgICAvKipcbiAgICAgKiBsaXN0dmlldyDliJ3lp4vljJZcbiAgICAgKiBAcGFyYW0gW3Njcm9sbHN0eWxlXSDmoLflvI9cbiAgICAgKiBAcGFyYW0gW3NwYWNpbmdGb3JSb3dDYWxsYmFja10g6L+U5Zue6KGM6auY77yM5Y+v5Yqo5oCB5pS55Y+YXG4gICAgICogQHBhcmFtIFtjb3VudE9mUm93c0NhbGxiYWNrXSDov5Tlm57ooYzmlbDvvIzlj6/liqjmgIHmlLnlj5hcbiAgICAgKiBAcGFyYW0gW2dldENlbGxDYWxsYmFja10g6L+U5Zue5LiA5Liq5paw5bu655qEY2VsbO+8jOWPr+S7pee7p+aJv0NlbGznsbtcbiAgICAgKiBAcGFyYW0gW2NlbGxGb3JSb3ddIOavj+W9k+imgeWIt+aWsOS4gOS4qmNlbGznmoTml7blgJnkvJrlm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgSW5pdChcbiAgICAgICAgc2Nyb2xsc3R5bGU6TGlzdFZpZXdTY3JvbGxTdHlsZSxcbiAgICAgICAgc3BhY2luZ0ZvclJvd0NhbGxiYWNrOihyb3c6bnVtYmVyKT0+bnVtYmVyLFxuICAgICAgICBjb3VudE9mUm93c0NhbGxiYWNrOigpPT5udW1iZXIsXG4gICAgICAgIGdldENlbGxDYWxsYmFjazooKT0+Q2VsbCxcbiAgICAgICAgY2VsbEZvclJvdzooY2VsbDpDZWxsKT0+dm9pZFxuICAgICAgICApXG4gICAge1xuICAgICAgICB0aGlzLnNwYWNpbmdGb3JSb3dDYWxsYmFjayA9IHNwYWNpbmdGb3JSb3dDYWxsYmFjaztcbiAgICAgICAgdGhpcy5jb3VudE9mUm93c0NhbGxiYWNrID0gY291bnRPZlJvd3NDYWxsYmFjaztcbiAgICAgICAgdGhpcy5nZXRDZWxsQ2FsbGJhY2sgPSBnZXRDZWxsQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY2VsbEZvclJvdyA9IGNlbGxGb3JSb3c7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxzdHlsZSA9IHNjcm9sbHN0eWxlO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsdmlldyA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmlldyA9IG5ldyBjYy5Ob2RlKFwidmlld1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHZpZXcpO1xuICAgICAgICB2aWV3LnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICB2aWV3LnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcblxuICAgICAgICBsZXQgbWFzayA9IHZpZXcuYWRkQ29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDtcblxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3ID0gbmV3IGNjLk5vZGUoXCJjb250ZW50XCIpO1xuICAgICAgICB2aWV3LmFkZENoaWxkKHRoaXMuY29udGVudFZpZXcpO1xuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LnNldENvbnRlbnRTaXplKHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpKTtcblxuICAgICAgICB0aGlzLnNjcm9sbHZpZXcuY29udGVudCA9IHRoaXMuY29udGVudFZpZXc7XG5cbiAgICAgICAgLy9UT0RPOlxuICAgICAgICBpZih0aGlzLnNjcm9sbHN0eWxlID09IExpc3RWaWV3U2Nyb2xsU3R5bGUuVG9wKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAxO1xuXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgcG9zLnkgKz0gMC41ICogdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XG5cbiAgICAgICAgICAgIHZpZXcuYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgICAgIHZpZXcuYW5jaG9yWSA9IDE7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGVudFZpZXcuYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFZpZXcuYW5jaG9yWSA9IDE7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsdmlldy52ZXJ0aWNhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbHZpZXcuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbC5TZXRTY3JvbGxWaWV3U2Nyb2xsRXZlbnQodGhpcy5zY3JvbGx2aWV3LCAoc2Nyb2xsVmlldywgZXZlbnRUeXBlOmNjLlNjcm9sbFZpZXcuRXZlbnRUeXBlLCBkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBjYy5TY3JvbGxWaWV3LkV2ZW50VHlwZS5TQ1JPTExfVE9fQk9UVE9NKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbEJvdHRvbVNob3VsZENhbGxiYWNrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uU2Nyb2xsQm90dG9tQ2FsbGJhY2shPW51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uU2Nyb2xsQm90dG9tQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgU2V0VmVydGljYWxTY3JvbGxCYXIoc2Nyb2xsYmFyOmNjLlNjcm9sbGJhcilcbiAgICB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdmlldy52ZXJ0aWNhbFNjcm9sbEJhciA9IHNjcm9sbGJhcjtcbiAgICAgICAgLy8gaWYodGhpcy5zY3JvbGxzdHlsZSA9PSBMaXN0Vmlld1Njcm9sbFN0eWxlLlRvcClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgc2Nyb2xsYmFyLm5vZGUuYW5jaG9yWCA9IDAuNTtcbiAgICAgICAgLy8gICAgIHNjcm9sbGJhci5ub2RlLmFuY2hvclkgPSAxO1xuXG4gICAgICAgIC8vICAgICBsZXQgcG9zID0gc2Nyb2xsYmFyLm5vZGUucG9zaXRpb247XG4gICAgICAgIC8vICAgICBwb3MueSA9IDA7XG4gICAgICAgIC8vICAgICBzY3JvbGxiYXIubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIFNldEhvcml6b250YWxTY3JvbGxCYXIoc2Nyb2xsYmFyOmNjLlNjcm9sbGJhcilcbiAgICB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdmlldy5ob3Jpem9udGFsU2Nyb2xsQmFyID0gc2Nyb2xsYmFyO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWZyZXNoKClcbiAgICB7XG4gICAgICAgIHRoaXMucG9zRm9yUm93cyA9IFtdO1xuICAgICAgICB0aGlzLnNwYWNlRm9yUm93cyA9IFtdO1xuICAgICAgICB0aGlzLnRvdGFsSGVpZ2h0ID0gMDtcbiAgICAgICAgbGV0IGNvdW50T2ZSb3dzID0gdGhpcy5jb3VudE9mUm93c0NhbGxiYWNrKCk7XG4gICAgICAgIC8vIGNjQy5lcnJvcihcIlJlZnJlc2ggY291bnRPZlJvd3MgIFwiICsgY291bnRPZlJvd3MpO1xuICAgICAgICB0aGlzLmN1cnJlbnRSb3dzID0gY291bnRPZlJvd3M7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y291bnRPZlJvd3M7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLnNwYWNpbmdGb3JSb3dDYWxsYmFjayhpKTtcbiAgICAgICAgICAgIHRoaXMucG9zRm9yUm93cy5wdXNoKHRoaXMudG90YWxIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5zcGFjZUZvclJvd3MucHVzaChzcGFjZSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsSGVpZ2h0ICs9IHNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zY3JvbGxzdHlsZSA9PSBMaXN0Vmlld1Njcm9sbFN0eWxlLlRvcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50Vmlldy5oZWlnaHQgPSB0aGlzLnRvdGFsSGVpZ2h0O1xuICAgICAgICAgICAgaWYodGhpcy5zY3JvbGx2aWV3LmdldFNjcm9sbE9mZnNldCgpLnkgPiB0aGlzLnRvdGFsSGVpZ2h0IC0gdGhpcy5zY3JvbGx2aWV3Lm5vZGUuZ2V0Q29udGVudFNpemUubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsdmlldy5zY3JvbGxUb09mZnNldChuZXcgY2MuVmVjMigwLHRoaXMudG90YWxIZWlnaHQgLSB0aGlzLnNjcm9sbHZpZXcubm9kZS5nZXRDb250ZW50U2l6ZS5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuU2hvd0N1cnJlbnRSb3dzKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTY3JvbGxUb1RvcCgpXG4gICAge1xuICAgICAgICB0aGlzLnNjcm9sbHZpZXcuc2Nyb2xsVG9Ub3AoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEdldFJvd3NTaG91bGRTaG93KGZvcmNlUmVmcmVzaDpib29sZWFuKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5vZmZzZXQgPT0gdGhpcy5sYXN0T2Zmc2V0ICYmIGZvcmNlUmVmcmVzaCA9PSBmYWxzZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZih0aGlzLm9mZnNldCA8PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFydFJvdyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLm9mZnNldCA+IHRoaXMubGFzdE9mZnNldClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLmN1cnJlbnRTdGFydFJvdztpIDwgdGhpcy5wb3NGb3JSb3dzLmxlbmd0aDtpICsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhcnRSb3cgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBvc0ZvclJvd3NbaV0gPT0gdGhpcy5vZmZzZXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5wb3NGb3JSb3dzW2ldPHRoaXMub2Zmc2V0ICYmIHRoaXMucG9zRm9yUm93c1tpXSArIHRoaXMuc3BhY2VGb3JSb3dzW2ldID4gdGhpcy5vZmZzZXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHRoaXMuY3VycmVudFN0YXJ0Um93O2kgPj0gMDtpIC0tKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhcnRSb3cgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBvc0ZvclJvd3NbaV0gPT0gdGhpcy5vZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLnBvc0ZvclJvd3NbaV08dGhpcy5vZmZzZXQgJiYgdGhpcy5wb3NGb3JSb3dzW2ldICsgdGhpcy5zcGFjZUZvclJvd3NbaV0gPiB0aGlzLm9mZnNldCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSB0aGlzLmN1cnJlbnRTdGFydFJvdztpPHRoaXMucG9zRm9yUm93cy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFbmRSb3cgPSBpO1xuICAgICAgICAgICAgaWYodGhpcy5wb3NGb3JSb3dzW2ldICsgdGhpcy5zcGFjZUZvclJvd3NbaV0gPiB0aGlzLm9mZnNldCArIHRoaXMubm9kZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjY0MuZXJyb3IoXG4gICAgICAgIC8vICAgICBcIiB0aGlzLm9mZnNldCBcIiArIHRoaXMub2Zmc2V0IFxuICAgICAgICAvLyArIFwiIHRoaXMubGFzdFN0YXJ0Um93IFwiICsgdGhpcy5sYXN0U3RhcnRSb3cgXG4gICAgICAgIC8vICsgXCIgbGFzdEVuZFJvdyBcIiArIHRoaXMubGFzdEVuZFJvdyBcbiAgICAgICAgLy8gKyBcIiB0aGlzLmN1cnJlbnRTdGFydFJvdyAgXCIgKyB0aGlzLmN1cnJlbnRTdGFydFJvdyBcbiAgICAgICAgLy8gKyBcIiB0aGlzLmN1cnJlbnRFbmRSb3cgXCIgKyB0aGlzLmN1cnJlbnRFbmRSb3cpO1xuXG4gICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cblxuICAgIHByaXZhdGUgU2hvd0N1cnJlbnRSb3dzKGZvcmNlUmVmcmVzaDpib29sZWFuKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50Um93cyA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3dzID0gLTE7XG4gICAgICAgICAgICB0aGlzLkhpZGVBbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXJ0Um93ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFbmRSb3cgPSAtMTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RTdGFydFJvdyA9IHRoaXMuY3VycmVudFN0YXJ0Um93O1xuICAgICAgICB0aGlzLmxhc3RFbmRSb3cgPSB0aGlzLmN1cnJlbnRFbmRSb3c7XG4gICAgICAgIHRoaXMuR2V0Um93c1Nob3VsZFNob3coZm9yY2VSZWZyZXNoKTtcblxuICAgICAgICAvLzbnp43ljLrpl7TlhbPns7tcbiAgICAgICAgLypcbiAgICAgICAgMS4tLS0gICAgICAgXG4gICAgICAgICAgICB8XG4gICAgICAgICAtLS18LVxuICAgICAgICAgfCAgfFxuICAgICAgICAgfCAgfFxuICAgICAgICAgfCAgfFxuICAgICAgICAgLS0tfC1cbiAgICAgICAgICAtLS0gIFxuXG4gICAgICAgIDIuXG4gICAgICAgICAtLS1cbiAgICAgICAgIHxcbiAgICAgICAgLXwtLS1cbiAgICAgICAgIHwgIHxcbiAgICAgICAgIHwgIHxcbiAgICAgICAgLXwtLS1cbiAgICAgICAgIHwgIFxuICAgICAgICAgLS0tXG5cbiAgICAgICAgIDMuXG4gICAgICAgICAtLS0tXG4gICAgICAgICB8XG4gICAgICAgICB8XG4gICAgICAgICB8XG4gICAgICAgICB8LS0tLS1cbiAgICAgICAgIHwgICAgfFxuICAgICAgICAgLS0tLSB8XG4gICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgfFxuICAgICAgICAgLS0tLS0tXG5cbiAgICAgICAgIDQuXG4gICAgICAgLS0tLS1cbiAgICAgICAgICAgfFxuICAgICAgIC0tLS18XG4gICAgICAgfCAgIHxcbiAgICAgICB8LS0tLSAgIFxuICAgICAgIHxcbiAgICAgICB8XG4gICAgICAgLS0tLS1cblxuICAgICAgIDUuXG4gICAgICAgLS0tXG4gICAgICAgfFxuICAgICAgIHxcbiAgICAgICAtLS1cblxuICAgICAgIC0tLVxuICAgICAgICAgfFxuICAgICAgICAgfFxuICAgICAgIC0tLVxuICAgICAgIFxuICAgICAgIDYuXG4gICAgICAgLS0tXG4gICAgICAgICB8XG4gICAgICAgICB8XG4gICAgICAgLS0tXG5cbiAgICAgICAtLS1cbiAgICAgICB8XG4gICAgICAgfFxuICAgICAgIC0tLVxuXG4gICAgICAgKioqKioqKioqKioqKioqKipcbiAgICAgICAtLS1cbiAgICAgICB8XG4gICAgICAgfFxuICAgICAgIC0tLSDmmK9sYXN0XG5cbiAgICAgICAtLS1cbiAgICAgICAgIHxcbiAgICAgICAgIHxcbiAgICAgICAtLS0g5pivY3VycmVudFxuXG4gICAgICAgICovXG4gICAgLy8gICAgY2MuZXJyb3IoXCJ0aGlzLmxhc3RTdGFydFJvdyAgXCIgKyB0aGlzLmxhc3RTdGFydFJvdyArIFwiIHRoaXMuY3VycmVudFN0YXJ0Um93IFwiICsgdGhpcy5jdXJyZW50U3RhcnRSb3cgXG4gICAgLy8gICAgKyBcIiB0aGlzLmxhc3RFbmRSb3cgXCIgKyB0aGlzLmxhc3RFbmRSb3cgKyBcIiB0aGlzLmN1cnJlbnRFbmRSb3cgXCIgKyB0aGlzLmN1cnJlbnRFbmRSb3cpO1xuXG4gICAgICAgIGlmKHRoaXMubGFzdFN0YXJ0Um93ICE9IHRoaXMuY3VycmVudFN0YXJ0Um93IHx8IHRoaXMubGFzdEVuZFJvdyAhPSB0aGlzLmN1cnJlbnRFbmRSb3cgfHwgZm9yY2VSZWZyZXNoID09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNjQy5lcnJvcihcIioqKioqKlwiKTtcbiAgICAgICAgICAgIGxldCBzaG91bGRDYWxsQ2VsbEZvclJvdyA9ICFmb3JjZVJlZnJlc2g7Ly/lvLrliLbliLfmlrDnmoTor51jZWxsRm9yUm935pS+5Zyo5pyA5ZCO57uf5LiA5omn6KGMXG4gICAgICAgICAgICBpZih0aGlzLmxhc3RTdGFydFJvdyA+PSB0aGlzLmN1cnJlbnRTdGFydFJvdyAmJiB0aGlzLmxhc3RFbmRSb3cgPD0gdGhpcy5jdXJyZW50RW5kUm93KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNjQy5lcnJvcihcIjFcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPXRoaXMuY3VycmVudFN0YXJ0Um93O2k8dGhpcy5sYXN0U3RhcnRSb3c7aSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93Um93KGksc2hvdWxkQ2FsbENlbGxGb3JSb3cpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT10aGlzLmxhc3RFbmRSb3cgKyAxO2k8PXRoaXMuY3VycmVudEVuZFJvdztpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dSb3coaSxzaG91bGRDYWxsQ2VsbEZvclJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxhc3RTdGFydFJvdyA8PSB0aGlzLmN1cnJlbnRTdGFydFJvdyAmJiB0aGlzLmxhc3RFbmRSb3cgPj0gdGhpcy5jdXJyZW50RW5kUm93KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNjQy5lcnJvcihcIjJcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPXRoaXMubGFzdFN0YXJ0Um93O2k8dGhpcy5jdXJyZW50U3RhcnRSb3c7aSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9dGhpcy5jdXJyZW50RW5kUm93ICsgMTtpPD10aGlzLmxhc3RFbmRSb3c7aSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5sYXN0U3RhcnRSb3cgPD0gdGhpcy5jdXJyZW50U3RhcnRSb3cgJiYgdGhpcy5sYXN0RW5kUm93ID49IHRoaXMuY3VycmVudFN0YXJ0Um93ICYmIHRoaXMubGFzdEVuZFJvdyA8PSB0aGlzLmN1cnJlbnRFbmRSb3cpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY2NDLmVycm9yKFwiM1wiKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9dGhpcy5sYXN0U3RhcnRSb3c7aTx0aGlzLmN1cnJlbnRTdGFydFJvdztpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhpZGVSb3coaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT10aGlzLmxhc3RFbmRSb3cgKyAxO2kgPD0gdGhpcy5jdXJyZW50RW5kUm93O2krKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvd1JvdyhpLHNob3VsZENhbGxDZWxsRm9yUm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMubGFzdFN0YXJ0Um93IDw9IHRoaXMuY3VycmVudEVuZFJvdyAmJiB0aGlzLmxhc3RFbmRSb3cgPj0gdGhpcy5jdXJyZW50RW5kUm93ICYmIHRoaXMubGFzdFN0YXJ0Um93ID49IHRoaXMuY3VycmVudFN0YXJ0Um93KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNjQy5lcnJvcihcIjRcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPXRoaXMuY3VycmVudEVuZFJvdyArIDE7aSA8PSB0aGlzLmxhc3RFbmRSb3c7aSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9dGhpcy5jdXJyZW50U3RhcnRSb3c7aTx0aGlzLmxhc3RTdGFydFJvdztpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dSb3coaSxzaG91bGRDYWxsQ2VsbEZvclJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxhc3RFbmRSb3cgPD0gdGhpcy5jdXJyZW50U3RhcnRSb3cgfHwgdGhpcy5sYXN0U3RhcnRSb3cgPj0gdGhpcy5jdXJyZW50RW5kUm93KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNjQy5lcnJvcihcIjVcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPXRoaXMubGFzdFN0YXJ0Um93O2k8PXRoaXMubGFzdEVuZFJvdztpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihpICE9IHRoaXMuY3VycmVudFN0YXJ0Um93IHx8IGkgIT0gdGhpcy5jdXJyZW50RW5kUm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlUm93KGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9dGhpcy5jdXJyZW50U3RhcnRSb3c7aTw9IHRoaXMuY3VycmVudEVuZFJvdztpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dSb3coaSxzaG91bGRDYWxsQ2VsbEZvclJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihmb3JjZVJlZnJlc2ggPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9dGhpcy5jdXJyZW50U3RhcnRSb3c7aTw9dGhpcy5jdXJyZW50RW5kUm93O2krKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsOkNlbGwgPSB0aGlzLnVzaW5nQ2VsbFtpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZWxsRm9yUm93KGNlbGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTaG93Um93KHJvdzpudW1iZXIsc2hvdWxkQ2FsbENlbGxGb3JSb3c6Ym9vbGVhbilcbiAgICB7XG4gICAgICAgIC8vIGNjLmVycm9yKFwiU2hvd1JvdyBcIiArIHJvdyk7XG4gICAgICAgIGxldCBjZWxsOkNlbGw7ICBcbiAgICAgICAgaWYodGhpcy51bnVzZUNlbGwubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMudW51c2VDZWxsLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMuZ2V0Q2VsbENhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LmFkZENoaWxkKGNlbGwuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5yb3cgPSByb3c7XG4gICAgICAgIGNlbGwuY29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvL1RPRE86XG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsc3R5bGUgPT0gTGlzdFZpZXdTY3JvbGxTdHlsZS5Ub3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBwb3MgPSBjZWxsLmNvbnRlbnQucG9zaXRpb247XG4gICAgICAgICAgICBwb3MueCA9IDA7XG4gICAgICAgICAgICBwb3MueSA9IC10aGlzLnBvc0ZvclJvd3Nbcm93XSAtIHRoaXMuc3BhY2VGb3JSb3dzW3Jvd10gLyAyO1xuICAgICAgICAgICAgY2VsbC5jb250ZW50LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2hvdWxkQ2FsbENlbGxGb3JSb3cgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHRoaXMuY2VsbEZvclJvdyhjZWxsKTtcbiAgICAgICAgdGhpcy51c2luZ0NlbGxbcm93XSA9IGNlbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBIaWRlUm93KHJvdzpudW1iZXIpXG4gICAge1xuICAgICAgICAvLyBjY0MuZXJyb3IoXCJIaWRlUm93IFwiICsgcm93KTtcbiAgICAgICAgbGV0IGNlbGwgPSB0aGlzLnVzaW5nQ2VsbFtyb3ddO1xuICAgICAgICBpZihjZWxsICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY29udGVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW51c2VDZWxsLnB1c2goY2VsbCk7XG4gICAgICAgICAgICB0aGlzLnVzaW5nQ2VsbFtyb3ddID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIEhpZGVBbGwoKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuY3VycmVudFN0YXJ0Um93O2k8PXRoaXMuY3VycmVudEVuZFJvdztpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuSGlkZVJvdyhpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSBcbiAgICB7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSBcbiAgICB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRtcE9mZnNldDpudW1iZXIgPSAwO1xuICAgIHVwZGF0ZSAoZHQpIFxuICAgIHtcbiAgICAgICAgaWYodGhpcy5zY3JvbGx2aWV3ICE9IG51bGwgJiYgdGhpcy5jdXJyZW50Um93cyA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5zY3JvbGx2aWV3LmdldFNjcm9sbE9mZnNldCgpLnk7XG4gICAgICAgICAgICBpZihNYXRoLmFicyh0aGlzLm9mZnNldCAtIHRoaXMudG1wT2Zmc2V0KSA+IDIwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMudG1wT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93Q3VycmVudFJvd3MoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlvZNMaXN0Vmlld+a7keWKqOWIsOW6lemDqOaXtuaYr+WQpuaJp+ihjOWbnuiwg1xuICAgIHNjcm9sbEJvdHRvbVNob3VsZENhbGxiYWNrOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgU2V0U2Nyb2xsVG9Cb3R0b21TaG91bGRDYWxsYmFjayhzaG91bGRDYWxsYmFjazpib29sZWFuKVxuICAgIHtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3R0b21TaG91bGRDYWxsYmFjayA9IHNob3VsZENhbGxiYWNrO1xuICAgIH1cblxuICAgIC8vIOa7keWKqOWIsOW6lemDqOaXtuaJp+ihjOWbnuiwg1xuICAgIGFjdGlvblNjcm9sbEJvdHRvbUNhbGxiYWNrOigpPT52b2lkO1xuICAgIHB1YmxpYyBTZXRTY3JvbGxCb3R0b21DYWxsYmFjayhhY3Rpb25DYWxsYmFjazooKT0+dm9pZClcbiAgICB7XG4gICAgICAgIHRoaXMuYWN0aW9uU2Nyb2xsQm90dG9tQ2FsbGJhY2sgPSBhY3Rpb25DYWxsYmFjaztcbiAgICB9XG5cbiAgICAvLyDojrflj5ZTY3JvbGxWaWV3XG4gICAgcHVibGljIEdldFNjcm9sbFZpZXcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsdmlldztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsXG57XG4gICAgcHVibGljIGNvbnRlbnQ6Y2MuTm9kZTtcbiAgICBwdWJsaWMgcm93Om51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gTGlzdFZpZXdTY3JvbGxTdHlsZVxue1xuICAgIFRvcCwvL+aJi+aMh+WQkeS4iuWIkuS4uuS4i+S4gOihjFxuICAgIEJvdHRvbSxcbiAgICBMZWZ0LFxuICAgIFJpZ2h0LFxufVxuXG5cblxuIl19