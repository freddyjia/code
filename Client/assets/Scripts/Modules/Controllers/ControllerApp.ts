import Controller from "../../MVCFramework/Controller";
import MessageNames from "../MessageNames";
import ViewApp from "../Views/ViewApp";
import { ViewNames, ModelNames } from "../MVCRegister";
import ModelApp from "../Models/ModelApp";
import Toast from "../../Tools/Toast";
import { ImageTool } from "../../JsTool/ImageTool";

export default class ControllerChat extends Controller
{
    viewAppStart:ViewApp;
    testImage = new Image();

    modelApp:ModelApp;


    public Init()
    {
        this.modelApp = this.GetModel(ModelNames.ModelApp) as ModelApp;
        this.modelApp.SetSelfPlayerID(window["selfId"]);
    }

    public Clean()
    {
        
    }

    public OnReceiveMessage(msg:string,msgBody:any)
    {
        if(msg == MessageNames.StartLogin)
        {
            this.modelApp.StartLogin();
        }
        else if(msg == MessageNames.ShowAppStartView)
        {
            this.ShowAppStartView();
        }
    }


    public ShowAppStartView()
    {
        if(this.viewAppStart == null)
        {
            this.viewAppStart = this.GetView(ViewNames.ViewApp) as ViewApp;

            // 上传照片
            this.viewAppStart.SetOnClick("BtnImgUpload", ()=>{
                ImageTool.Get((imageData:string)=>{
                    this.testImage.onload = ()=>{
                        if (imageData.length == 0)
                        {
                            return;
                        }
                        //imageData
                    };
                    this.testImage.src = imageData;
                });
            });
        }

        this.viewAppStart.SetSelfPlayerID(window["selfId"]);
        this.viewAppStart.Show(()=>{
            // 请求协议
        });
    }
}
