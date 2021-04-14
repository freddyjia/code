import Model from "./Model";
import { MVCRegister } from "../Modules/MVCRegister";
import MessageCenter from "./MessageCenter";

export default class ModelManager
{
    private static dicModels:{[modelName:string]:Model} = {};
    public static GetModel(modelName:string):Model
    {
        if(this.dicModels[modelName] == null)
        {
            let model:Model = MVCRegister.dicModels[modelName]();
            model.sendMsgCallBack = (msg,msgBody)=>{
                MessageCenter.SendMessage(msg,msgBody);
            };
            model.Init();
            this.dicModels[modelName] = model;
        }
        
        return this.dicModels[modelName];
    }

    public static Clean()
    {
        for(let modelName in this.dicModels)
        {
            this.dicModels[modelName].Clean();
        }

        this.dicModels = {};
    }
}
