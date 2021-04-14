
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/ViewConfigs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcVmlld0NvbmZpZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBMEM7QUFFMUM7SUFBQTtJQWdCQSxDQUFDO0lBYmlCLGdCQUFJLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFekIsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsdUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLHVCQUFTLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSwwQkFBMEIsRUFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEssSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsdUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6SyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsdUJBQVMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFDLHVCQUFTLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25KLENBQUM7SUFFYSx5QkFBYSxHQUEzQixVQUE0QixRQUFRO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBZGMsMEJBQWMsR0FBMkMsRUFBRSxDQUFDO0lBZS9FLGtCQUFDO0NBaEJELEFBZ0JDLElBQUE7a0JBaEJvQixXQUFXO0FBa0JoQyxnQkFBZ0I7QUFDaEI7O0dBRUc7QUFDSCxJQUFZLGFBS1g7QUFMRCxXQUFZLGFBQWE7SUFDckIseURBQVksQ0FBQTtJQUNaLHVEQUFXLENBQUE7SUFDWCxtREFBUyxDQUFBO0lBQ1QseURBQVksQ0FBQTtBQUNoQixDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFFRCxVQUFVO0FBQ1YsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3BCLDJEQUFjLENBQUE7SUFDZCx5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQSxDQUFBLGdCQUFnQjtBQUM1QixDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7QUFFRDtJQU1JOzs7Ozs7T0FNRztJQUNILHdCQUFZLFFBQWdCLEVBQUUsS0FBb0IsRUFBRSxVQUFrQixFQUFDLFlBQXlCO1FBQzVGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDTCxxQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3TmFtZXMgfSBmcm9tIFwiLi9NVkNSZWdpc3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3Q29uZmlncyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZGljVmlld0NvbmZpZ3M6IHsgW3ZpZXdOYW1lOiBzdHJpbmddOiBWaWV3Q29uZmlnRGF0YSB9ID0ge307XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuZGljVmlld0NvbmZpZ3MgPSB7fTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLT4gIOWcqOi/memHjOa3u+WKoCB2aWV3Y29uZmlnXG4gICAgICAgIHRoaXMuZGljVmlld0NvbmZpZ3NbVmlld05hbWVzLlZpZXdPcGVuTmV0d29ya2luZ10gPSBuZXcgVmlld0NvbmZpZ0RhdGEoVmlld05hbWVzLlZpZXdPcGVuTmV0d29ya2luZywgTGF5ZXJPcmRlck51bS5VSVRvcCwgXCIvUHJlZmFiL1VJT3Blbk5ldHdvcmtpbmdcIixMb2FkaW5nU3R5bGUuTm9uZSk7XG4gICAgICAgIHRoaXMuZGljVmlld0NvbmZpZ3NbVmlld05hbWVzLlZpZXdEaWFsb2dOb3JtYWxdID0gbmV3IFZpZXdDb25maWdEYXRhKFZpZXdOYW1lcy5WaWV3RGlhbG9nTm9ybWFsLCBMYXllck9yZGVyTnVtLlVJUG9wdXAsIFwiL1ByZWZhYi9VSURpYWxvZ05vcm1hbFwiLExvYWRpbmdTdHlsZS5Qb3BXaW5kb3cpO1xuICAgICAgICB0aGlzLmRpY1ZpZXdDb25maWdzW1ZpZXdOYW1lcy5WaWV3VG9hc3RdID0gbmV3IFZpZXdDb25maWdEYXRhKFZpZXdOYW1lcy5WaWV3VG9hc3QsIExheWVyT3JkZXJOdW0uVUlUb3AsIFwiL1ByZWZhYi9VSVRvYXN0XCIsTG9hZGluZ1N0eWxlLk5vbmUpO1xuICAgICAgICB0aGlzLmRpY1ZpZXdDb25maWdzW1ZpZXdOYW1lcy5WaWV3QXBwXSA9IG5ldyBWaWV3Q29uZmlnRGF0YShWaWV3TmFtZXMuVmlld0FwcCwgTGF5ZXJPcmRlck51bS5VSU5vcm1hbCwgXCIvUHJlZmFiL1VJQXBwU3RhcnRcIixMb2FkaW5nU3R5bGUuTm9uZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBHZXRWaWV3Q29uZmlnKHZpZXdOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpY1ZpZXdDb25maWdzW3ZpZXdOYW1lXTtcbiAgICB9XG59XG5cbi8v6KGo5pWw5o2u6YeM6Z2i55qEbGF5ZXLlrZfmrrXlgLxcbi8qKlxuICogVUlUb3BwZXIg5ZKMIFVJVG9wIOeJueaAp+S4gOagt++8jOWPquaYr+Wxgue6p+mrmOS4gOe6p1xuICovXG5leHBvcnQgZW51bSBMYXllck9yZGVyTnVtIHtcbiAgICBVSU5vcm1hbCA9IDEsXG4gICAgVUlQb3B1cCA9IDIsXG4gICAgVUlUb3AgPSAzLFxuICAgIFVJVG9wcGVyID0gNCxcbn1cblxuLy/nlYzpnaLliqDovb3mmL7npLrlvaLlvI9cbmV4cG9ydCBlbnVtIExvYWRpbmdTdHlsZSB7XG4gICAgRnVsbFNjcmVlbiA9IDEsLy/lhajlsY/luKbliqDovb3mnaFcbiAgICBQb3BXaW5kb3cgPSAyLC8v5by556qX5Yqg6L29XG4gICAgTm9uZSA9IDMvL+S4jeW4puWKoOi9vSzpgJrluLjkuLp0b3DlsYLmiYDnlKhcbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdDb25maWdEYXRhIHtcbiAgICBwdWJsaWMgdmlld05hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGF5ZXI6IExheWVyT3JkZXJOdW07XG4gICAgcHVibGljIHByZWZhYlBhdGg6IHN0cmluZztcbiAgICBwdWJsaWMgbG9hZGluZ1N0eWxlOkxvYWRpbmdTdHlsZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2aWV3TmFtZSB2aWV3TmFtZVxuICAgICAqIEBwYXJhbSBsYXllciDlsYLnuqdcbiAgICAgKiBAcGFyYW0gcHJlZmFiUGF0aCBwcmVmYWJQYXRoXG4gICAgICogQHBhcmFtIGxvYWRpbmdTdHlsZSDmmK/lkKbmmL7npLrliqDovb3nlYzpnaLvvIzkuIDoiKzotYTmupDph4/lpJrnmoTpnIDopoHmmL7npLrliqDovb3nlYzpnaJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2aWV3TmFtZTogc3RyaW5nLCBsYXllcjogTGF5ZXJPcmRlck51bSwgcHJlZmFiUGF0aDogc3RyaW5nLGxvYWRpbmdTdHlsZTpMb2FkaW5nU3R5bGUpIHtcbiAgICAgICAgdGhpcy52aWV3TmFtZSA9IHZpZXdOYW1lO1xuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgICAgIHRoaXMucHJlZmFiUGF0aCA9IHByZWZhYlBhdGg7XG4gICAgICAgIHRoaXMubG9hZGluZ1N0eWxlID0gbG9hZGluZ1N0eWxlO1xuICAgIH1cbn1cbiJdfQ==