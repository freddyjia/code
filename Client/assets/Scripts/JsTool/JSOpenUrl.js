export function JSOpenUrl() 
{ 

}

//directOpenUrl
//blankOpenUrl
//justOpenUrl

JSOpenUrl.JustOpen = function(url)
{
    if(window["directOpenUrl"] == "1")
    {
        JSOpenUrl.DirectOpen(url);
        return;
    }
    if(window["blankOpenUrl"] == "1")
    {
        JSOpenUrl.BlankOpen(url);
        return;
    }

    window.open(url);
}

JSOpenUrl.DirectOpen = function(url)
{
    if(window["blankOpenUrl"] == "1")
    {
        JSOpenUrl.BlankOpen(url);
        return;
    }
    if(window["justOpenUrl"] == "1")
    {
        JSOpenUrl.JustOpen(url);
        return;
    }

    document.location = url
}

JSOpenUrl.BlankOpen = function(url)
{
    if(window["directOpenUrl"] == "1")
    {
        JSOpenUrl.DirectOpen(url);
        return;
    }
    if(window["justOpenUrl"] == "1")
    {
        JSOpenUrl.JustOpen(url);
        return;
    }

    var tempwindow=window.open('_blank'); // 先打开页面
    if(tempwindow == null || typeof(tempwindow)=='undefined')
    {
        document.location = url
    }
    else
    {
        tempwindow.location = url // 后更改页面地址
    }
}

// JSOpenUrl.Open = function(url)
// {
//     if(window["directOpenUrl"] == "1")
//     {
//         JSOpenUrl.DirectOpen(url);
//         return;
//     }
//     if(window["blankOpenUrl"] == "1")
//     {
//         JSOpenUrl.BlankOpen(url);
//         return;
//     }
//     if(window["justOpenUrl"] == "1")
//     {
//         JSOpenUrl.JustOpen(url);
//         return;
//     }

//     if(navigator.userAgent.indexOf("Android") != -1)
//     {
//         JSOpenUrl.BlankOpen(url);
//     }
//     else if(navigator.userAgent.indexOf("iPhone") != -1)
//     {
//         //苹果手机端
//         if(navigator.userAgent.indexOf("AppleWebKit") != -1 && navigator.userAgent.indexOf("Mobile") != -1)
//         {
//             var splits = navigator.userAgent.split(" ");
//             for(var i=0;i<splits.length;i++)
//             {
//                 var str = splits[i];
//                 if(str.indexOf("Mobile/") != -1)
//                 {
//                     if(i == splits.length - 1)
//                     {
//                         console.log("app内置webview");
//                         JSOpenUrl.JustOpen(url);
//                     }
//                     else
//                     {
//                         var str1 = splits[splits.length - 1];
//                         if(str1.indexOf("Safari") != -1)
//                         {
//                             console.log("手机端浏览器");
//                         }
//                         else
//                         {
//                             console.log("浏览器app");
//                         }
//                         JSOpenUrl.BlankOpen(url);
//                     }
       
//                     break;
//                 }
//             }
//         }
//         else
//         {
//             JSOpenUrl.BlankOpen(url);
//         }
//     }
//     else
//     {
//         JSOpenUrl.BlankOpen(url);
//     }
   

// }
