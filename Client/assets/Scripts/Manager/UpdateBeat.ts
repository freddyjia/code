
const {ccclass, property} = cc._decorator;

@ccclass
export default class UpdateBeat extends cc.Component 
{
    private dicUpdateFuncs:{[id:number]:(data)=>void} = {};
    // private dicDatas:{[id:number]:any} = {};
    private id = 0;

    private listWaitToDelete:Array<string> = [];
    private lastUpdateTime;

    private static m_Instance:UpdateBeat;
    public static GetInstance():UpdateBeat
    {
        if(this.m_Instance == null)
        {
            let node:cc.Node = new cc.Node("UpdateBeat");
            node.setParent(cc.find("Main"));
            this.m_Instance = node.addComponent(UpdateBeat);
        }
        return this.m_Instance;
    }

    /**
     *
     */
    constructor() {
        super();
        this.lastUpdateTime = Date.now();
    }

    public Add(func:(deltaTime:number)=>void):string
    {
        if(func == null)
            return;
        this.id++;
        let idStr = this.id.toString();
        this.dicUpdateFuncs[idStr] = func;
        // this.dicDatas[idStr] = data;
        return idStr;
    }

    private DeleteUpdateFuncs()
    {
        if(this.listWaitToDelete.length == 0)
            return;
        for(let i = 0;i<this.listWaitToDelete.length;i++)
        {
            delete this.dicUpdateFuncs[this.listWaitToDelete[i]];
            // delete this.dicDatas[this.listWaitToDelete[i]];
        }
        this.listWaitToDelete = [];
    }

    public Remove(id:string)
    {
        if(id == null)
        {
            return;
        }
        if(this.dicUpdateFuncs[id] != null)
            this.listWaitToDelete.push(id);
    }

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

    update (dt) 
    {
        let timeNow = Date.now();
        let deltaTime = (timeNow - this.lastUpdateTime) / 1000;
        
        this.DeleteUpdateFuncs();
        
        for(let id in this.dicUpdateFuncs)
        {
            this.dicUpdateFuncs[id](deltaTime);
        }

        this.DeleteUpdateFuncs();

        this.lastUpdateTime = timeNow;
    }
}
