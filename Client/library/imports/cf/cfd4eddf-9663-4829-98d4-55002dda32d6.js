"use strict";
cc._RF.push(module, 'cfd4e3flmNIKZjUVQAt2jLW', 'ViewConfigs');
// Scripts/Modules/ViewConfigs.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVCRegister_1 = require("./MVCRegister");
var ViewConfigs = /** @class */ (function () {
    function ViewConfigs() {
    }
    ViewConfigs.Init = function () {
        this.dicViewConfigs = {};
        //------------>  在这里添加 viewconfig
        this.dicViewConfigs[MVCRegister_1.ViewNames.ViewOpenNetworking] = new ViewConfigData(MVCRegister_1.ViewNames.ViewOpenNetworking, LayerOrderNum.UITop, "/Prefab/UIOpenNetworking", LoadingStyle.None);
        this.dicViewConfigs[MVCRegister_1.ViewNames.ViewDialogNormal] = new ViewConfigData(MVCRegister_1.ViewNames.ViewDialogNormal, LayerOrderNum.UIPopup, "/Prefab/UIDialogNormal", LoadingStyle.PopWindow);
        this.dicViewConfigs[MVCRegister_1.ViewNames.ViewToast] = new ViewConfigData(MVCRegister_1.ViewNames.ViewToast, LayerOrderNum.UITop, "/Prefab/UIToast", LoadingStyle.None);
        this.dicViewConfigs[MVCRegister_1.ViewNames.ViewApp] = new ViewConfigData(MVCRegister_1.ViewNames.ViewApp, LayerOrderNum.UINormal, "/Prefab/UIAppStart", LoadingStyle.None);
    };
    ViewConfigs.GetViewConfig = function (viewName) {
        return this.dicViewConfigs[viewName];
    };
    ViewConfigs.dicViewConfigs = {};
    return ViewConfigs;
}());
exports.default = ViewConfigs;
//表数据里面的layer字段值
/**
 * UITopper 和 UITop 特性一样，只是层级高一级
 */
var LayerOrderNum;
(function (LayerOrderNum) {
    LayerOrderNum[LayerOrderNum["UINormal"] = 1] = "UINormal";
    LayerOrderNum[LayerOrderNum["UIPopup"] = 2] = "UIPopup";
    LayerOrderNum[LayerOrderNum["UITop"] = 3] = "UITop";
    LayerOrderNum[LayerOrderNum["UITopper"] = 4] = "UITopper";
})(LayerOrderNum = exports.LayerOrderNum || (exports.LayerOrderNum = {}));
//界面加载显示形式
var LoadingStyle;
(function (LoadingStyle) {
    LoadingStyle[LoadingStyle["FullScreen"] = 1] = "FullScreen";
    LoadingStyle[LoadingStyle["PopWindow"] = 2] = "PopWindow";
    LoadingStyle[LoadingStyle["None"] = 3] = "None"; //不带加载,通常为top层所用
})(LoadingStyle = exports.LoadingStyle || (exports.LoadingStyle = {}));
var ViewConfigData = /** @class */ (function () {
    /**
     *
     * @param viewName viewName
     * @param layer 层级
     * @param prefabPath prefabPath
     * @param loadingStyle 是否显示加载界面，一般资源量多的需要显示加载界面
     */
    function ViewConfigData(viewName, layer, prefabPath, loadingStyle) {
        this.viewName = viewName;
        this.layer = layer;
        this.prefabPath = prefabPath;
        this.loadingStyle = loadingStyle;
    }
    return ViewConfigData;
}());
exports.ViewConfigData = ViewConfigData;

cc._RF.pop();