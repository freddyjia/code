import ccC from "../../Tools/ccC";
import Global from "../../Global/Global";

export default class HttpRequest
{
    public static Get(url:string,successCallback:(string)=>void,failCallback:(string)=>void,timeout:number)
    {
        var xhr = new XMLHttpRequest();
        xhr.timeout = timeout;
        
        xhr.onreadystatechange = function () {
            // cc.error("xhr.readyState  " + xhr.readyState);
            if (xhr.readyState == 4) 
            {
                if(xhr.status >= 200 && xhr.status < 400)
                {
                    var response = xhr.responseText;
                    successCallback(response);
                }
                else
                {
                    failCallback("err code: "+ xhr.status + " err msg: " + xhr.statusText);
                }
            }
            // else if(xhr.readyState == 1)
            // {
            //     xhr.setRequestHeader("Access-Control-Allow-Origin","*");
            // }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    public static Post(url:string,postParm:{[name:string]:any},successCallback:(string)=>void,failCallback:(string)=>void,timeout:number=10000,contentType?:string)
    {
        if(Global.showLog == true)
            cc.error("HttpRequest Post url " + url);
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function () {
            // cc.error("Post xhr.readyState  " + xhr.readyState);
            if (xhr.readyState == 4) 
            {
                if(xhr.status >= 200 && xhr.status < 400)
                {
                    var response = xhr.responseText;
                    successCallback(response);
                }
                else
                {
                    cc.error("err code: "+ xhr.status + " err msg: " + xhr.statusText + " xhr.responseText " + xhr.responseText);
                    failCallback("网络请求错误");
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.timeout = timeout;
        xhr.setRequestHeader("Content-Type",contentType == null ? "application/x-www-form-urlencoded" : contentType);
        
        let jsongStr = JSON.stringify(postParm);
        // cc.error("jsongStr " + jsongStr);

        // let bytes = new TextEncoder().encode(jsongStr);
        // xhr.send(bytes);
        xhr.send(jsongStr);
    }
}
