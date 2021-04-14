import { ViewNames } from "./MVCRegister";

export default class ViewConfigs {
    private static dicViewConfigs: { [viewName: string]: ViewConfigData } = {};

    public static Init() {
        this.dicViewConfigs = {};

        //------------>  在这里添加 viewconfig
        this.dicViewConfigs[ViewNames.ViewOpenNetworking] = new ViewConfigData(ViewNames.ViewOpenNetworking, LayerOrderNum.UITop, "/Prefab/UIOpenNetworking",LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewDialogNormal] = new ViewConfigData(ViewNames.ViewDialogNormal, LayerOrderNum.UIPopup, "/Prefab/UIDialogNormal",LoadingStyle.PopWindow);
        this.dicViewConfigs[ViewNames.ViewToast] = new ViewConfigData(ViewNames.ViewToast, LayerOrderNum.UITop, "/Prefab/UIToast",LoadingStyle.None);
        this.dicViewConfigs[ViewNames.ViewApp] = new ViewConfigData(ViewNames.ViewApp, LayerOrderNum.UINormal, "/Prefab/UIAppStart",LoadingStyle.None);
    }

    public static GetViewConfig(viewName) {
        return this.dicViewConfigs[viewName];
    }
}

//表数据里面的layer字段值
/**
 * UITopper 和 UITop 特性一样，只是层级高一级
 */
export enum LayerOrderNum {
    UINormal = 1,
    UIPopup = 2,
    UITop = 3,
    UITopper = 4,
}

//界面加载显示形式
export enum LoadingStyle {
    FullScreen = 1,//全屏带加载条
    PopWindow = 2,//弹窗加载
    None = 3//不带加载,通常为top层所用
}

export class ViewConfigData {
    public viewName: string;
    public layer: LayerOrderNum;
    public prefabPath: string;
    public loadingStyle:LoadingStyle;

    /**
     * 
     * @param viewName viewName
     * @param layer 层级
     * @param prefabPath prefabPath
     * @param loadingStyle 是否显示加载界面，一般资源量多的需要显示加载界面
     */
    constructor(viewName: string, layer: LayerOrderNum, prefabPath: string,loadingStyle:LoadingStyle) {
        this.viewName = viewName;
        this.layer = layer;
        this.prefabPath = prefabPath;
        this.loadingStyle = loadingStyle;
    }
}
