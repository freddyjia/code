import ccC from "./ccC";

/**
 * 这个类里面仅限与添加和 Node 有关的共用方法，其他的请写到 Util.ts 脚本中
 */
export default class NodeUtil {
    /**
     * 递归查找指定根节点下指定名字的字节点，会递归所有层级
     * @param node 根节点
     * @param childName 字节点名字
     */
    public static SearchChild(node: cc.Node, childName: string): cc.Node {
        for (let index = 0; index < node.childrenCount; index++) {
            const element = node.children[index];
            if (element.name == childName) {
                return element;
            }
            let result = this.SearchChild(element, childName);
            if (result != null) {
                return result;
            }
        }
        return null;
    }

    static SearchButton(node: cc.Node, childName: string): cc.Button {
        return this.SearchChild(node, childName).getComponent(cc.Button);
    }

    static SearchLabel(node: cc.Node, childName: string): cc.Label {
        return this.SearchChild(node, childName).getComponent(cc.Label);
    }

    static SearchRichText(node: cc.Node, childName: string): cc.RichText {
        return this.SearchChild(node, childName).getComponent(cc.RichText);
    }

    static SearchEditBox(node: cc.Node, childName: string): cc.EditBox {
        return this.SearchChild(node, childName).getComponent(cc.EditBox);
    }

    static SearchSprite(node: cc.Node, childName: string): cc.Sprite {
        return this.SearchChild(node, childName).getComponent(cc.Sprite);
    }

    static SearchSlider(node: cc.Node, childName: string): cc.Slider {
        return this.SearchChild(node, childName).getComponent(cc.Slider);
    }

    static SearchToggle(node: cc.Node, childName: string): cc.Toggle {
        return this.SearchChild(node, childName).getComponent(cc.Toggle);
    }

    /**
     * 设置图集
     * @param sprite
     * @param atlas
     * @param spriteName 不传这个参数表示是加载散图
     * @param finishCallback
     */
    static SetSpriteFrame(sprite: cc.Sprite, atlasPath: string, spriteName: string=null, finishCallback: () => void = null) {
        
        if (spriteName==undefined || spriteName==null || spriteName.length == 0)
        {
            ccC.loadRes(atlasPath, cc.SpriteFrame, (err, spriteFrame: any) => {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
                if (finishCallback != null) finishCallback();
            });
        }
        else
        {
            ccC.loadRes(atlasPath, cc.SpriteAtlas, (err, atlas: cc.SpriteAtlas) => {
                if(err){
                    cc.error(err.message || err)
                }else{
                    var frame = atlas.getSpriteFrame(spriteName);
                    if (frame) {
                        sprite.spriteFrame = frame;
                        if (finishCallback != null) finishCallback();
                    }
                }
            });
        }
    }

    /**
     * 获取指定根节点下所有的子节点[包含传入的根节点]，尽量保证所有的字节点名字都不一样
     * @param root 根节点
     * @param dic 保存所有字节点的字典
     */
    static GetAllChildren(root: cc.Node, dic: { [name: string]: cc.Node }) {
        dic[root.name] = root;
        for (let index = 0; index < root.childrenCount; index++) {
            const element = root.children[index];
            this.GetAllChildren(element, dic);
        }
    }

    /**
     * 查找或者创建一个新的子节点
     * @param container 根节点
     * @param index 指定获取的节点下标
     * @param createIndex 可以指定复制的节点
     */
    static GetOrCreateChild(container:cc.Node,index:number,createIndex:number = null):cc.Node{
        let child:cc.Node
        if(index<container.childrenCount){
            child = container.children[index]
        }else{
            let cIndex = createIndex || 0
            child = cc.instantiate(container.children[cIndex])
            child.parent = container
        }
        child.active = true
        return child
    }

    public static GetNodeDic(node:cc.Node,dic:{[name:string]:cc.Node}=null):{[name:string]:cc.Node}
    {
        if(dic == null)
        {
            dic = {};
        }
        dic[node.name] = node;
        for(let i=0;i<node.childrenCount;i++)
        {
            this.GetNodeDic(node.children[i],dic);
        }

        return dic;
    }

    /**
     * 用于两个node不在同一个父节点下时，设置相同的位置
     * @param node 需要设置位置的node
     * @param followNode 目标位置node
     */
    public static FollowPosition(node:cc.Node,tofollowNode:cc.Node)
    {
        let worldPos = tofollowNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let localPos = node.parent.convertToNodeSpaceAR(worldPos);
        node.position = localPos;
    }
}
