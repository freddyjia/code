
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/ccC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43098JIL15CQqGtJVPyCtb3', 'ccC');
// Scripts/Tools/ccC.ts

"use strict";
// import Global from "../Global/Global";
Object.defineProperty(exports, "__esModule", { value: true });
var ccC = /** @class */ (function () {
    function ccC() {
    }
    ccC.loadRes = function (url, type, completeCallback) {
        var _this = this;
        var asset = this.dicAssets[url];
        if (asset != null && asset != undefined) {
            completeCallback(null, asset);
            return;
        }
        cc.loader.loadRes(url, type, function (err, res) {
            if (err != null) {
                _this.dicAssets[url] = res;
            }
            completeCallback(err, res);
        });
    };
    ccC.load = function (url, completeCallback) {
        var _this = this;
        var asset = this.dicAssets[url];
        if (asset != null && asset != undefined) {
            completeCallback(null, asset);
            return;
        }
        cc.loader.load(url, function (err, tex) {
            if (err != null) {
                _this.dicAssets[url] = tex;
            }
            completeCallback(err, tex);
        });
    };
    ccC.loadResDir = function (url, type, completeCallback) {
        var _this = this;
        var asset = this.dicAssetArrs[url];
        if (asset != null && asset != undefined) {
            completeCallback(null, asset, this.dicUrlArrs[url]);
            return;
        }
        cc.loader.loadResDir(url, type, function (err, res, urls) {
            if (err != null) {
                _this.dicAssets[url] = res;
                _this.dicUrlArrs[url] = urls;
            }
            completeCallback(err, res, urls);
        });
    };
    ccC.loadResProgressWithoutType = function (url, progressCallback, completeCallback) {
        var asset = this.dicAssets[url];
        if (asset != null && asset != undefined) {
            progressCallback(1, 1, null);
            completeCallback(null, asset);
            return;
        }
        cc.loader.loadRes(url, function (completedCount, totalCount, item) {
            progressCallback(completedCount, totalCount, item);
        }, function (err, perfab) {
            completeCallback(err, perfab);
        });
    };
    ccC.loadResProgress = function (url, type, progressCallback, completeCallback) {
        cc.loader.loadRes(url, type, function (completedCount, totalCount, item) {
            progressCallback(completedCount, totalCount, item);
        }, function (err, perfab) {
            completeCallback(err, perfab);
        });
    };
    // public static log(msg: string|any, ...subst: any[]): void
    // {
    //     if(Global.showLog == true)
    //     {
    //         cc.log(msg,...subst);
    //     }
    // }
    // public static error(msg: any, ...subst: any[]): void
    // {
    //     if(Global.showLog == true)
    //     {
    //         cc.error(msg,...subst);
    //     }
    // }
    // public static warn(msg: any, ...subst: any[]): void
    // {
    //     if(Global.showLog == true)
    //     {
    //         cc.warn(msg,...subst);
    //     }
    // }
    ccC.dicAssets = {};
    ccC.dicAssetArrs = {};
    ccC.dicUrlArrs = {};
    return ccC;
}());
exports.default = ccC;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXGNjQy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXlDOztBQUV6QztJQUFBO0lBOEdBLENBQUM7SUFoRmlCLFdBQU8sR0FBckIsVUFBc0IsR0FBVyxFQUFFLElBQXFCLEVBQUUsZ0JBQXVEO1FBQWpILGlCQWVDO1FBYkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFHLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsRUFDdEM7WUFDSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxVQUFDLEdBQUcsRUFBQyxHQUFHO1lBQy9CLElBQUcsR0FBRyxJQUFJLElBQUksRUFDZDtnQkFDSSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUM3QjtZQUNELGdCQUFnQixDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFYSxRQUFJLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxnQkFBdUQ7UUFBdkYsaUJBZUM7UUFiRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUN0QztZQUNJLGdCQUFnQixDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUMsR0FBRztZQUN4QixJQUFHLEdBQUcsSUFBSSxJ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QztJQUNsQyxnQkFBWSxHQUF3QixFQUFFLENBQUM7SUFDdkMsY0FBVSxHQUF3QixFQUFFLENBQUM7SUFrRnhELFVBQUM7Q0E5R0QsQUE4R0MsSUFBQTtrQkE5R29CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9HbG9iYWwvR2xvYmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNjQyBcbntcbiAgICAvLyBwdWJsaWMgc3RhdGljIGxvZyhtc2c6IHN0cmluZ3xhbnksIC4uLnN1YnN0OiBhbnlbXSk6IHZvaWRcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNjLmxvZyhtc2csLi4uc3Vic3QpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIHN0YXRpYyBlcnJvcihtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKTogdm9pZFxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY2MuZXJyb3IobXNnLC4uLnN1YnN0KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHB1YmxpYyBzdGF0aWMgd2Fybihtc2c6IGFueSwgLi4uc3Vic3Q6IGFueVtdKTogdm9pZFxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYoR2xvYmFsLnNob3dMb2cgPT0gdHJ1ZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY2Mud2Fybihtc2csLi4uc3Vic3QpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGljQXNzZXRzOntbdXJsOnN0cmluZ106YW55fSA9IHt9O1xuICAgIHByaXZhdGUgc3RhdGljIGRpY0Fzc2V0QXJyczp7W3VybDpzdHJpbmddOmFueVtdfSA9IHt9O1xuICAgIHByaXZhdGUgc3RhdGljIGRpY1VybEFycnM6e1t1cmw6c3RyaW5nXTphbnlbXX0gPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlcyh1cmw6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LCBjb21wbGV0ZUNhbGxiYWNrOiAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5kaWNBc3NldHNbdXJsXTtcbiAgICAgICAgaWYoYXNzZXQgIT0gbnVsbCAmJiBhc3NldCAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2sobnVsbCxhc3NldCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLHR5cGUsKGVycixyZXMpPT57XG4gICAgICAgICAgICBpZihlcnIgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY0Fzc2V0c1t1cmxdID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhlcnIscmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKHVybDogc3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrOiAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5kaWNBc3NldHNbdXJsXTtcbiAgICAgICAgaWYoYXNzZXQgIT0gbnVsbCAmJiBhc3NldCAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2sobnVsbCxhc3NldCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWQodXJsLCAoZXJyLHRleCk9PntcbiAgICAgICAgICAgIGlmKGVyciAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljQXNzZXRzW3VybF0gPSB0ZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKGVycix0ZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXNEaXIodXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgY29tcGxldGVDYWxsYmFjazogKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueVtdLCB1cmxzOiBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuZGljQXNzZXRBcnJzW3VybF07XG4gICAgICAgIGlmKGFzc2V0ICE9IG51bGwgJiYgYXNzZXQgIT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKG51bGwsYXNzZXQsdGhpcy5kaWNVcmxBcnJzW3VybF0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIodXJsLHR5cGUsKGVycixyZXMsdXJscyk9PntcbiAgICAgICAgICAgIGlmKGVyciAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGljQXNzZXRzW3VybF0gPSByZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWNVcmxBcnJzW3VybF0gPSB1cmxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhlcnIscmVzLHVybHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXNQcm9ncmVzc1dpdGhvdXRUeXBlKHVybDogc3RyaW5nLCBwcm9ncmVzc0NhbGxiYWNrOiAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlQ2FsbGJhY2s6ICgoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkKXxudWxsKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5kaWNBc3NldHNbdXJsXTtcbiAgICAgICAgaWYoYXNzZXQgIT0gbnVsbCAmJiBhc3NldCAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2soMSwxLG51bGwpO1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhudWxsLGFzc2V0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsXG4gICAgICAgICAgICAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+e1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2soY29tcGxldGVkQ291bnQsdG90YWxDb3VudCxpdGVtKTtcbiAgICAgICAgICAgIH0sIChlcnI6IEVycm9yLCBwZXJmYWI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soZXJyLHBlcmZhYik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRSZXNQcm9ncmVzcyh1cmw6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LCBwcm9ncmVzc0NhbGxiYWNrOiAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlQ2FsbGJhY2s6ICgoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkKXxudWxsKTogdm9pZFxuICAgIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLHR5cGUsXG4gICAgICAgICAgICAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+e1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2soY29tcGxldGVkQ291bnQsdG90YWxDb3VudCxpdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyOiBFcnJvciwgcGVyZmFiOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKGVycixwZXJmYWIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=