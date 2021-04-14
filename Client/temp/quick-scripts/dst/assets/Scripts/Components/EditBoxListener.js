
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/EditBoxListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9768bQQ7lB+KdJarSiP++I', 'EditBoxListener');
// Scripts/Components/EditBoxListener.ts

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
var EditBoxListener = /** @class */ (function (_super) {
    __extends(EditBoxListener, _super);
    function EditBoxListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditBoxListener.prototype.onEditDidBegan = function (editbox, customEventData) {
        if (this.onEditDidBeganAction != null)
            this.onEditDidBeganAction(editbox, customEventData);
    };
    EditBoxListener.prototype.AddEditDidBeganHandler = function (action, customEventData) {
        if (customEventData === void 0) { customEventData = ""; }
        this.onEditDidBeganAction = action;
        var onEditDidBeganHandler = new cc.Component.EventHandler();
        onEditDidBeganHandler.target = this.node;
        onEditDidBeganHandler.component = "EditBoxListener";
        onEditDidBeganHandler.handler = "onEditDidBegan";
        onEditDidBeganHandler.customEventData = customEventData;
        var editBox = this.node.getComponent(cc.EditBox);
        editBox.editingDidBegan.push(onEditDidBeganHandler);
    };
    EditBoxListener.prototype.onTextChanged = function (text, editbox, customEventData) {
        if (this.onTextChangedAction != null)
            this.onTextChangedAction(text, editbox, customEventData);
    };
    EditBoxListener.prototype.AddTextChangedHandler = function (action, customEventData) {
        if (customEventData === void 0) { customEventData = ""; }
        this.onTextChangedAction = action;
        var hander = new cc.Component.EventHandler();
        hander.target = this.node;
        hander.component = "EditBoxListener";
        hander.handler = "onTextChanged";
        hander.customEventData = customEventData;
        var editBox = this.node.getComponent(cc.EditBox);
        editBox.textChanged.push(hander);
    };
    EditBoxListener.prototype.onEditDidEnded = function (editbox, customEventData) {
        if (this.onEditDidEndedAction != null)
            this.onEditDidEndedAction(editbox, customEventData);
    };
    EditBoxListener.prototype.AddEditDidEndedHandler = function (action, customEventData) {
        if (customEventData === void 0) { customEventData = ""; }
        this.onEditDidEndedAction = action;
        var handler = new cc.Component.EventHandler();
        handler.target = this.node;
        handler.component = "EditBoxListener";
        handler.handler = "onEditDidEnded";
        handler.customEventData = customEventData;
        var editBox = this.node.getComponent(cc.EditBox);
        editBox.editingDidEnded.push(handler);
    };
    EditBoxListener.prototype.onEditingReturn = function (editbox, customEventData) {
        if (this.onEditingReturnAction != null)
            this.onEditingReturnAction(editbox, customEventData);
    };
    EditBoxListener.prototype.AddEditingReturnHandler = function (action, customEventData) {
        if (customEventData === void 0) { customEventData = ""; }
        this.onEditingReturnAction = action;
        var handler = new cc.Component.EventHandler();
        handler.target = this.node;
        handler.component = "EditBoxListener";
        handler.handler = "onEditingReturn";
        handler.customEventData = customEventData;
        var editBox = this.node.getComponent(cc.EditBox);
        editBox.editingReturn.push(handler);
    };
    EditBoxListener = __decorate([
        ccclass
    ], EditBoxListener);
    return EditBoxListener;
}(cc.Component));
exports.default = EditBoxListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcRWRpdEJveExpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBcUdBLENBQUM7SUE5Rkcsd0NBQWMsR0FBZCxVQUFlLE9BQWtCLEVBQUUsZUFBc0I7UUFFckQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxnREFBc0IsR0FBN0IsVUFBOEIsTUFBeUQsRUFBRSxlQUF5QjtRQUF6QixnQ0FBQSxFQUFBLG9CQUF5QjtRQUU5RyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDO1FBRW5DLElBQUkscUJBQXFCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUNwRCxxQkFBcUIsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDakQscUJBQXFCLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUV4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBT0QsdUNBQWEsR0FBYixVQUFjLElBQVcsRUFBRSxPQUFrQixFQUFFLGVBQXNCO1FBRWpFLElBQUksSUFBSSxDQUFDLG1C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QXJHRCxBQXFHQyxDQXJHNEMsRUFBRSxDQUFDLFNBQVMsR0FxR3hEO2tCQXJHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdEJveExpc3RlbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcbiAgICAvKlxyXG4gICAgKiog6K+l5LqL5Lu25Zyo55So5oi354K55Ye76L6T5YWl5qGG6I635Y+W54Sm54K555qE5pe25YCZ6KKr6Kem5Y+RXHJcbiAgICAqL1xyXG4gICAgb25FZGl0RGlkQmVnYW5BY3Rpb246KGVkaXRib3g6Y2MuRWRpdEJveCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZyk9PnZvaWQ7XHJcbiAgICBcclxuICAgIG9uRWRpdERpZEJlZ2FuKGVkaXRib3g6Y2MuRWRpdEJveCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXREaWRCZWdhbkFjdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm9uRWRpdERpZEJlZ2FuQWN0aW9uKGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZEVkaXREaWRCZWdhbkhhbmRsZXIoYWN0aW9uOihlZGl0Ym94OmNjLkVkaXRCb3gsIGN1c3RvbUV2ZW50RGF0YTpzdHJpbmcpPT52b2lkLCBjdXN0b21FdmVudERhdGE6c3RyaW5nPVwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vbkVkaXREaWRCZWdhbkFjdGlvbiA9IGFjdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IG9uRWRpdERpZEJlZ2FuSGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgb25FZGl0RGlkQmVnYW5IYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBvbkVkaXREaWRCZWdhbkhhbmRsZXIuY29tcG9uZW50ID0gXCJFZGl0Qm94TGlzdGVuZXJcIjtcclxuICAgICAgICBvbkVkaXREaWRCZWdhbkhhbmRsZXIuaGFuZGxlciA9IFwib25FZGl0RGlkQmVnYW5cIjtcclxuICAgICAgICBvbkVkaXREaWRCZWdhbkhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlZGl0Qm94ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBlZGl0Qm94LmVkaXRpbmdEaWRCZWdhbi5wdXNoKG9uRWRpdERpZEJlZ2FuSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICoqIOivpeS6i+S7tuWcqOeUqOaIt+avj+S4gOasoei+k+WFpeaWh+Wtl+WPmOWMlueahOaXtuWAmeiiq+inpuWPkVxyXG4gICAgKi9cclxuICAgIG9uVGV4dENoYW5nZWRBY3Rpb246KHRleHQ6c3RyaW5nLCBlZGl0Ym94OmNjLkVkaXRCb3gsIGN1c3RvbUV2ZW50RGF0YTpzdHJpbmcpPT52b2lkO1xyXG5cclxuICAgIG9uVGV4dENoYW5nZWQodGV4dDpzdHJpbmcsIGVkaXRib3g6Y2MuRWRpdEJveCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5vblRleHRDaGFuZ2VkQWN0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMub25UZXh0Q2hhbmdlZEFjdGlvbih0ZXh0LCBlZGl0Ym94LCBjdXN0b21FdmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBBZGRUZXh0Q2hhbmdlZEhhbmRsZXIoYWN0aW9uOih0ZXh0OnN0cmluZywgZWRpdGJveDpjYy5FZGl0Qm94LCBjdXN0b21FdmVudERhdGE6c3RyaW5nKT0+dm9pZCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZz1cIlwiKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub25UZXh0Q2hhbmdlZEFjdGlvbiA9IGFjdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgaGFuZGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBoYW5kZXIuY29tcG9uZW50ID0gXCJFZGl0Qm94TGlzdGVuZXJcIjtcclxuICAgICAgICBoYW5kZXIuaGFuZGxlciA9IFwib25UZXh0Q2hhbmdlZFwiO1xyXG4gICAgICAgIGhhbmRlci5jdXN0b21FdmVudERhdGEgPSBjdXN0b21FdmVudERhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVkaXRCb3ggPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGVkaXRCb3gudGV4dENoYW5nZWQucHVzaChoYW5kZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqKiDlnKjljZXooYzmqKHlvI/kuIvpnaLvvIzkuIDoiKzmmK/lnKjnlKjmiLfmjInkuIvlm57ovabmiJbogIXngrnlh7vlsY/luZXovpPlhaXmoYbku6XlpJbnmoTlnLDmlrnosIPnlKjor6Xlh73mlbDjgIIg5aaC5p6c5piv5aSa6KGM6L6T5YWl77yM5LiA6Iis5piv5Zyo55So5oi354K55Ye75bGP5bmV6L6T5YWl5qGG5Lul5aSW55qE5Zyw5pa56LCD55So6K+l5Ye95pWw44CCXHJcbiAgICAqL1xyXG4gICAgb25FZGl0RGlkRW5kZWRBY3Rpb246KGVkaXRib3g6Y2MuRWRpdEJveCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZyk9PnZvaWQ7XHJcblxyXG4gICAgb25FZGl0RGlkRW5kZWQoZWRpdGJveDpjYy5FZGl0Qm94LCBjdXN0b21FdmVudERhdGE6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm9uRWRpdERpZEVuZGVkQWN0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMub25FZGl0RGlkRW5kZWRBY3Rpb24oZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkRWRpdERpZEVuZGVkSGFuZGxlcihhY3Rpb246KGVkaXRib3g6Y2MuRWRpdEJveCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZyk9PnZvaWQsIGN1c3RvbUV2ZW50RGF0YTpzdHJpbmc9XCJcIilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9uRWRpdERpZEVuZGVkQWN0aW9uID0gYWN0aW9uO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgaGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaGFuZGxlci5jb21wb25lbnQgPSBcIkVkaXRCb3hMaXN0ZW5lclwiO1xyXG4gICAgICAgIGhhbmRsZXIuaGFuZGxlciA9IFwib25FZGl0RGlkRW5kZWRcIjtcclxuICAgICAgICBoYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZWRpdEJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgZWRpdEJveC5lZGl0aW5nRGlkRW5kZWQucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgIC8qXHJcbiAgICAqKiDlvZPnlKjmiLfmjInkuIvlm57ovabmjInplK7ml7bnmoTkuovku7blm57osIPvvIznm67liY3kuI3mlK/mjIEgd2luZG93cyDlubPlj7BcclxuICAgICovXHJcbiAgIG9uRWRpdGluZ1JldHVybkFjdGlvbjooZWRpdGJveDpjYy5FZGl0Qm94LCBjdXN0b21FdmVudERhdGE6c3RyaW5nKT0+dm9pZDtcclxuXHJcbiAgIG9uRWRpdGluZ1JldHVybihlZGl0Ym94OmNjLkVkaXRCb3gsIGN1c3RvbUV2ZW50RGF0YTpzdHJpbmcpXHJcbiAgIHtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRpbmdSZXR1cm5BY3Rpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5vbkVkaXRpbmdSZXR1cm5BY3Rpb24oZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIEFkZEVkaXRpbmdSZXR1cm5IYW5kbGVyKGFjdGlvbjooZWRpdGJveDpjYy5FZGl0Qm94LCBjdXN0b21FdmVudERhdGE6c3RyaW5nKT0+dm9pZCwgY3VzdG9tRXZlbnREYXRhOnN0cmluZz1cIlwiKVxyXG4gICB7XHJcbiAgICAgICAgdGhpcy5vbkVkaXRpbmdSZXR1cm5BY3Rpb24gPSBhY3Rpb247XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBoYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBoYW5kbGVyLmNvbXBvbmVudCA9IFwiRWRpdEJveExpc3RlbmVyXCI7XHJcbiAgICAgICAgaGFuZGxlci5oYW5kbGVyID0gXCJvbkVkaXRpbmdSZXR1cm5cIjtcclxuICAgICAgICBoYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZWRpdEJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgZWRpdEJveC5lZGl0aW5nUmV0dXJuLnB1c2goaGFuZGxlcik7XHJcbiAgIH1cclxufVxyXG4iXX0=