import ccC from "./ccC";

export default class SpriteUtil
{
    public static LoadSpriteByPath(s: cc.Sprite, c:string)
    {
        if (s == null){

            return;
        }
        ccC.loadRes(c,cc.SpriteFrame,(err: Error, resource: any) => {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            s.spriteFrame = resource as cc.SpriteFrame;
        });
 
    }

    public static LoadSpriteByAtlas(Sprite: cc.Sprite,atlasPath:string,spriteName:string,callBack:any = null)
    {
        if (Sprite == null){

            return;
        }

        ccC.loadRes(atlasPath,cc.SpriteAtlas,(err: Error, atlas: any) => {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            let atlass:cc.SpriteAtlas = atlas as cc.SpriteAtlas;
            Sprite.spriteFrame = atlass.getSpriteFrame(spriteName);
            if(callBack!=null)
            {
                callBack();
            }
                  
        });
    }
}