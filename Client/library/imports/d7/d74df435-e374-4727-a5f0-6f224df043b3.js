"use strict";
cc._RF.push(module, 'd74dfQ143RHJ6XwbyJN8EOz', 'UpdateBeat');
// Scripts/Manager/UpdateBeat.ts

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
var UpdateBeat = /** @class */ (function (_super) {
    __extends(UpdateBeat, _super);
    /**
     *
     */
    function UpdateBeat() {
        var _this = _super.call(this) || this;
        _this.dicUpdateFuncs = {};
        // private dicDatas:{[id:number]:any} = {};
        _this.id = 0;
        _this.listWaitToDelete = [];
        _this.lastUpdateTime = Date.now();
        return _this;
    }
    UpdateBeat_1 = UpdateBeat;
    UpdateBeat.GetInstance = function () {
        if (this.m_Instance == null) {
            var node = new cc.Node("UpdateBeat");
            node.setParent(cc.find("Main"));
            this.m_Instance = node.addComponent(UpdateBeat_1);
        }
        return this.m_Instance;
    };
    UpdateBeat.prototype.Add = function (func) {
        if (func == null)
            return;
        this.id++;
        var idStr = this.id.toString();
        this.dicUpdateFuncs[idStr] = func;
        // this.dicDatas[idStr] = data;
        return idStr;
    };
    UpdateBeat.prototype.DeleteUpdateFuncs = function () {
        if (this.listWaitToDelete.length == 0)
            return;
        for (var i = 0; i < this.listWaitToDelete.length; i++) {
            delete this.dicUpdateFuncs[this.listWaitToDelete[i]];
            // delete this.dicDatas[this.listWaitToDelete[i]];
        }
        this.listWaitToDelete = [];
    };
    UpdateBeat.prototype.Remove = function (id) {
        if (id == null) {
            return;
        }
        if (this.dicUpdateFuncs[id] != null)
            this.listWaitToDelete.push(id);
    };
    /**
     * 只有登出的时候调用，其他时候别调用
     */
    // public ClearAll()
    // {
    //     for(let id in this.dicUpdateFuncs)
    //     {
    //         this.listWaitToDelete.push(id);
    //     }
    // }
    UpdateBeat.prototype.update = function (dt) {
        var timeNow = Date.now();
        var deltaTime = (timeNow - this.lastUpdateTime) / 1000;
        this.DeleteUpdateFuncs();
        for (var id in this.dicUpdateFuncs) {
            this.dicUpdateFuncs[id](deltaTime);
        }
        this.DeleteUpdateFuncs();
        this.lastUpdateTime = timeNow;
    };
    var UpdateBeat_1;
    UpdateBeat = UpdateBeat_1 = __decorate([
        ccclass
    ], UpdateBeat);
    return UpdateBeat;
}(cc.Component));
exports.default = UpdateBeat;

cc._RF.pop();