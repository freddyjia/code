
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Manager/UpdateBeat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFuYWdlclxcVXBkYXRlQmVhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBcUJoRDs7T0FFRztJQUNIO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBekJPLG9CQUFjLEdBQThCLEVBQUUsQ0FBQztRQUN2RCwyQ0FBMkM7UUFDbkMsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUVQLHNCQUFnQixHQUFpQixFQUFFLENBQUM7UUFvQnhDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQUNyQyxDQUFDO21CQTNCZ0IsVUFBVTtJQVViLHNCQUFXLEdBQXpCO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLElBQUksR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVUsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFVTSx3QkFBRyxHQUFWLFVBQVcsSUFBNkI7UUFFcEMsSUFBRyxJQUFJLElBQUksSUFBSTtZQUNYLE9BQU87UUFDWCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDVixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLCtCQUErQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBRUksSUFBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDaEMsT0FBTztRQUNYLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNoRDtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxrREFBa0Q7U0FDckQ7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsRUFBUztRQUVuQixJQUFHLEVBQUUsSUFBSSxJQUFJLEVBQ2I7WUFDSSxPQUFPO1NBQ1Y7UUFDRCxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtJQUNwQixJQUFJO0lBQ0oseUNBQXlDO0lBQ3pDLFFBQVE7SUFDUiwwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLElBQUk7SUFFSiwyQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUVOLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXZELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLEtBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFDakM7WUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7SUFDbEMsQ0FBQzs7SUF4RmdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F5RjlCO0lBQUQsaUJBQUM7Q0F6RkQsQUF5RkMsQ0F6RnVDLEVBQUUsQ0FBQyxTQUFTLEdBeUZuRDtrQkF6Rm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlQmVhdCBleHRlbmRzIGNjLkNvbXBvbmVudCBcbntcbiAgICBwcml2YXRlIGRpY1VwZGF0ZUZ1bmNzOntbaWQ6bnVtYmVyXTooZGF0YSk9PnZvaWR9ID0ge307XG4gICAgLy8gcHJpdmF0ZSBkaWNEYXRhczp7W2lkOm51bWJlcl06YW55fSA9IHt9O1xuICAgIHByaXZhdGUgaWQgPSAwO1xuXG4gICAgcHJpdmF0ZSBsaXN0V2FpdFRvRGVsZXRlOkFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIGxhc3RVcGRhdGVUaW1lO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbV9JbnN0YW5jZTpVcGRhdGVCZWF0O1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0SW5zdGFuY2UoKTpVcGRhdGVCZWF0XG4gICAge1xuICAgICAgICBpZih0aGlzLm1fSW5zdGFuY2UgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5vZGU6Y2MuTm9kZSA9IG5ldyBjYy5Ob2RlKFwiVXBkYXRlQmVhdFwiKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KGNjLmZpbmQoXCJNYWluXCIpKTtcbiAgICAgICAgICAgIHRoaXMubV9JbnN0YW5jZSA9IG5vZGUuYWRkQ29tcG9uZW50KFVwZGF0ZUJlYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1fSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlVGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZChmdW5jOihkZWx0YVRpbWU6bnVtYmVyKT0+dm9pZCk6c3RyaW5nXG4gICAge1xuICAgICAgICBpZihmdW5jID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuaWQrKztcbiAgICAgICAgbGV0IGlkU3RyID0gdGhpcy5pZC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmRpY1VwZGF0ZUZ1bmNzW2lkU3RyXSA9IGZ1bmM7XG4gICAgICAgIC8vIHRoaXMuZGljRGF0YXNbaWRTdHJdID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIGlkU3RyO1xuICAgIH1cblxuICAgIHByaXZhdGUgRGVsZXRlVXBkYXRlRnVuY3MoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5saXN0V2FpdFRvRGVsZXRlLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8dGhpcy5saXN0V2FpdFRvRGVsZXRlLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRpY1VwZGF0ZUZ1bmNzW3RoaXMubGlzdFdhaXRUb0RlbGV0ZVtpXV07XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhpcy5kaWNEYXRhc1t0aGlzLmxpc3RXYWl0VG9EZWxldGVbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdFdhaXRUb0RlbGV0ZSA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZW1vdmUoaWQ6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYoaWQgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZGljVXBkYXRlRnVuY3NbaWRdICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLmxpc3RXYWl0VG9EZWxldGUucHVzaChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+q5pyJ55m75Ye655qE5pe25YCZ6LCD55So77yM5YW25LuW5pe25YCZ5Yir6LCD55SoXG4gICAgICovXG4gICAgLy8gcHVibGljIENsZWFyQWxsKClcbiAgICAvLyB7XG4gICAgLy8gICAgIGZvcihsZXQgaWQgaW4gdGhpcy5kaWNVcGRhdGVGdW5jcylcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGhpcy5saXN0V2FpdFRvRGVsZXRlLnB1c2goaWQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgdXBkYXRlIChkdCkgXG4gICAge1xuICAgICAgICBsZXQgdGltZU5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBkZWx0YVRpbWUgPSAodGltZU5vdyAtIHRoaXMubGFzdFVwZGF0ZVRpbWUpIC8gMTAwMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuRGVsZXRlVXBkYXRlRnVuY3MoKTtcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaWQgaW4gdGhpcy5kaWNVcGRhdGVGdW5jcylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaWNVcGRhdGVGdW5jc1tpZF0oZGVsdGFUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuRGVsZXRlVXBkYXRlRnVuY3MoKTtcblxuICAgICAgICB0aGlzLmxhc3RVcGRhdGVUaW1lID0gdGltZU5vdztcbiAgICB9XG59XG4iXX0=