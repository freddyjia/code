
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Components/ScrollViewListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19a69412WNKS5S50MTIt39M', 'ScrollViewListener');
// Scripts/Components/ScrollViewListener.ts

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
var ScrollViewListener = /** @class */ (function (_super) {
    __extends(ScrollViewListener, _super);
    function ScrollViewListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollViewListener.prototype.SetScrollEventAction = function (callback) {
        this.scrollEventAction = callback;
    };
    ScrollViewListener.prototype.onLoad = function () {
        this.scrollEventHandler = new cc.Component.EventHandler();
        this.scrollEventHandler.target = this.node;
        this.scrollEventHandler.component = "ScrollViewListener";
        this.scrollEventHandler.handler = "OnScrollCallback";
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this.scrollView.scrollEvents.push(this.scrollEventHandler);
    };
    ScrollViewListener.prototype.OnScrollCallback = function (scrollView, eventType, customEventData) {
        if (this.scrollEventAction != null)
            this.scrollEventAction(scrollView, eventType, customEventData);
    };
    ScrollViewListener = __decorate([
        ccclass
    ], ScrollViewListener);
    return ScrollViewListener;
}(cc.Component));
exports.default = ScrollViewListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ29tcG9uZW50c1xcU2Nyb2xsVmlld0xpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBMkJBLENBQUM7SUFyQlUsaURBQW9CLEdBQTNCLFVBQTRCLFFBQXNGO1FBRTlHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFFckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBd0IsRUFBRSxTQUFpQyxFQUFFLGVBQXNCO1FBRWhHLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUk7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQTFCZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EyQnRDO0lBQUQseUJBQUM7Q0EzQkQsQUEyQkMsQ0EzQitDLEVBQUUsQ0FBQyxTQUFTLEdBMkIzRDtrQkEzQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVmlld0xpc3RlbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxyXG57XHJcbiAgICBwcml2YXRlIHNjcm9sbFZpZXc6Y2MuU2Nyb2xsVmlldztcclxuICAgIHByaXZhdGUgc2Nyb2xsRXZlbnRIYW5kbGVyOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXI7XHJcbiAgICBwcml2YXRlIHNjcm9sbEV2ZW50QWN0aW9uOihzY3JvbGxWaWV3OmNjLlNjcm9sbFZpZXcsIGV2ZW50VHlwZTpjYy5TY3JvbGxWaWV3LkV2ZW50VHlwZSwgZGF0YTphbnkpPT52b2lkO1xyXG5cclxuICAgIHB1YmxpYyBTZXRTY3JvbGxFdmVudEFjdGlvbihjYWxsYmFjazooc2Nyb2xsVmlldzpjYy5TY3JvbGxWaWV3LCBldmVudFR5cGU6Y2MuU2Nyb2xsVmlldy5FdmVudFR5cGUsIGRhdGE6YW55KT0+dm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50QWN0aW9uID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNjcm9sbFZpZXdMaXN0ZW5lclwiO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIk9uU2Nyb2xsQ2FsbGJhY2tcIjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxFdmVudHMucHVzaCh0aGlzLnNjcm9sbEV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgT25TY3JvbGxDYWxsYmFjayhzY3JvbGxWaWV3OmNjLlNjcm9sbFZpZXcsIGV2ZW50VHlwZTpjYy5TY3JvbGxWaWV3LkV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhOnN0cmluZykgXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsRXZlbnRBY3Rpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxFdmVudEFjdGlvbihzY3JvbGxWaWV3LCBldmVudFR5cGUsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19