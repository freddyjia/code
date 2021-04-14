// import Global from "../Global/Global";

export default class ccC 
{
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

    private static dicAssets:{[url:string]:any} = {};
    private static dicAssetArrs:{[url:string]:any[]} = {};
    private static dicUrlArrs:{[url:string]:any[]} = {};

    public static loadRes(url: string, type: typeof cc.Asset, completeCallback: (error: Error, resource: any) => void): void
    {
        let asset = this.dicAssets[url];
        if(asset != null && asset != undefined)
        {
            completeCallback(null,asset);
            return;
        }
        cc.loader.loadRes(url,type,(err,res)=>{
            if(err != null)
            {
                this.dicAssets[url] = res;
            }
            completeCallback(err,res);
        });
    }

    public static load(url: string, completeCallback: (error: Error, resource: any) => void): void
    {
        let asset = this.dicAssets[url];
        if(asset != null && asset != undefined)
        {
            completeCallback(null,asset);
            return;
        }
        cc.loader.load(url, (err,tex)=>{
            if(err != null)
            {
                this.dicAssets[url] = tex;
            }
            completeCallback(err,tex);
        });
    }

    public static loadResDir(url: string, type: typeof cc.Asset, completeCallback: (error: Error, resource: any[], urls: string[]) => void): void
    {
        let asset = this.dicAssetArrs[url];
        if(asset != null && asset != undefined)
        {
            completeCallback(null,asset,this.dicUrlArrs[url]);
            return;
        }

        cc.loader.loadResDir(url,type,(err,res,urls)=>{
            if(err != null)
            {
                this.dicAssets[url] = res;
                this.dicUrlArrs[url] = urls;
            }
            completeCallback(err,res,urls);
        });
    }

    public static loadResProgressWithoutType(url: string, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any) => void)|null): void
    {
        let asset = this.dicAssets[url];
        if(asset != null && asset != undefined)
        {
            progressCallback(1,1,null);
            completeCallback(null,asset);
            return;
        }
        cc.loader.loadRes(url,
            (completedCount: number, totalCount: number, item: any) =>{
                progressCallback(completedCount,totalCount,item);
            }, (err: Error, perfab: any) => {
                completeCallback(err,perfab);
            });
    }

    public static loadResProgress(url: string, type: typeof cc.Asset, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: ((error: Error, resource: any) => void)|null): void
    {
        cc.loader.loadRes(url,type,
            (completedCount: number, totalCount: number, item: any) =>{
                progressCallback(completedCount,totalCount,item);
            },
            (err: Error, perfab: any) => {
                completeCallback(err,perfab);
        });
    }
}
