"use strict";
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