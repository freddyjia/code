
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/PageViewListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '262f7e0YJhOoZSjRa7luEFU', 'PageViewListener');
// Scripts/Components/PageViewListener.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageViewListener = /** @class */ (function (_super) {
    __extends(PageViewListener, _super);
    function PageViewListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageViewListener.prototype.SetScrollEventAction = function (callback) {
        this.scrollEventAction = callback;
    };
    PageViewListener.prototype.onLoad = function () {
        this.scrollEventHandler = new cc.Component.EventHandler();
        this.scrollEventHandler.target = this.node;
        this.scrollEventHandler.component = "PageViewListener";
        this.scrollEventHandler.handler = "OnScrollCallback";
        this.pageView = this.node.getComponent(cc.PageView);
        this.pageView.scrollEvents.push(this.scrollEventHandler);
    };
    PageViewListener.prototype.OnScrollCallback = function (pageView, eventType, customEventData) {
        if (this.scrollEventAction != null)
            this.scrollEventAction(pageView, eventType, customEventData);
    };
    PageViewListener = __decorate([
        ccclass
    ], PageViewListener);
    return PageViewListener;
}(cc.Component));
exports.default = PageViewListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcUGFnZVZpZXdMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEOztJQTJCQSxDQUFDO0lBckJVLCtDQUFvQixHQUEzQixVQUE0QixRQUFnRjtRQUV4RyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBRUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBRXJELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLFFBQW9CLEVBQUUsU0FBK0IsRUFBRSxlQUFzQjtRQUUxRixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUExQmdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkJwQztJQUFELHVCQUFDO0NBM0JELEFBMkJDLENBM0I2QyxFQUFFLENBQUMsU0FBUyxHQTJCekQ7a0JBM0JvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VWaWV3TGlzdGVuZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIHByaXZhdGUgcGFnZVZpZXc6Y2MuUGFnZVZpZXc7XHJcbiAgICBwcml2YXRlIHNjcm9sbEV2ZW50SGFuZGxlcjpjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxFdmVudEFjdGlvbjoocGFnZVZpZXc6Y2MuUGFnZVZpZXcsIGV2ZW50VHlwZTpjYy5QYWdlVmlldy5FdmVudFR5cGUsIGRhdGE6YW55KT0+dm9pZDtcclxuXHJcbiAgICBwdWJsaWMgU2V0U2Nyb2xsRXZlbnRBY3Rpb24oY2FsbGJhY2s6KHBhZ2VWaWV3OmNjLlBhZ2VWaWV3LCBldmVudFR5cGU6Y2MuUGFnZVZpZXcuRXZlbnRUeXBlLCBkYXRhOmFueSk9PnZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudEFjdGlvbiA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJQYWdlVmlld0xpc3RlbmVyXCI7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiT25TY3JvbGxDYWxsYmFja1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGFnZVZpZXcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhZ2VWaWV3KTtcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3LnNjcm9sbEV2ZW50cy5wdXNoKHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBPblNjcm9sbENhbGxiYWNrKHBhZ2VWaWV3OmNjLlBhZ2VWaWV3LCBldmVudFR5cGU6Y2MuUGFnZVZpZXcuRXZlbnRUeXBlLCBjdXN0b21FdmVudERhdGE6c3RyaW5nKSBcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxFdmVudEFjdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEV2ZW50QWN0aW9uKHBhZ2VWaWV3LCBldmVudFR5cGUsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19