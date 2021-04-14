import Extension from "./Extension";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AtlasFont extends cc.Component {

    private tarNode: cc.Node
    private atlas: string
    private getSpriteNameFunc: (val: string) => string
    private firstNode


    public Init(atlas: string, getSpriteNameFunc: (val: string) => string) {
        this.tarNode = this.node
        this.firstNode = this.node.children[0]
        this.atlas = atlas
        this.getSpriteNameFunc = getSpriteNameFunc

        for (let val of this.tarNode.children) {
            val.active = false
        }
    }

    //需要一个布局组件 设置好自动布局
    public SetContent(content: string, okCallback: () => void = null) {
        // var node = cc.instantiate(prefabAsset);

        //先全部隐藏
        for (let val of this.tarNode.children) {
            val.active = false
        }

        //创建不足够
        for (let i = this.tarNode.childrenCount; i < content.length; i++) {
            let node = cc.instantiate(this.firstNode)
            node.parent = this.firstNode.parent
        }

        let okCnt = 0
        let fAllOk = () => {
            ++okCnt
            if (okCnt == content.length && okCallback != null) {
                okCallback()
            }
        }

        //设置各个sprite
        for (let i = 0; i < content.length; i++) {
            let node = this.tarNode.children[i]
            node.active = true
            let finalSpriteName = this.getSpriteNameFunc(content.substr(i, 1))
            Extension.DirGetAbSprite(node.getComponent(cc.Sprite), this.atlas, finalSpriteName, fAllOk)
        }

    }

    public Clear(){
        for (let val of this.tarNode.children) {
            val.active = false
        }
    }


}