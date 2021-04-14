"use strict";
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