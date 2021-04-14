export function ClipboardJS() 
{ 

}

// ClipboardJS.Copy = function(content,callback){
//     var success = document.execCommand("Copy", false, null);
//     callback(success);
    
//     // var script = document.createElement("script");
//     // script.type= 'text/javascript';
//     // script.src = "./clipboard.min.js";
// }

function CreateElementForExecCommand (textToClipboard) {
    var forExecElement = document.createElement ("div");
    //在可见区域以外
    forExecElement.style.position = "absolute";
    forExecElement.style.left = "-10000px";
    forExecElement.style.top = "-10000px";
    forExecElement.style.userSelect = "all";
    //将必需的文本写入元素并追加到文档中
    forExecElement.textContent = textToClipboard;
    document.body.appendChild (forExecElement);
    //内容编辑模式在火狐的exec命令方法是必要的
    forExecElement.contentEditable = true;
    return forExecElement;
}
    
function SelectContent (element) {
    //创建一个范围
    var rangeToSelect = document.createRange ();
    rangeToSelect.selectNodeContents (element);
    //选择内容
    var selection = window.getSelection ();
    selection.removeAllRanges ();
    selection.addRange (rangeToSelect);
}

ClipboardJS.Copy = function(str){
    console.log('复制');

    var textToClipboard = str; //文本到剪贴板

    var success = false;
    if (window.clipboardData) { // 浏览器
        window.clipboardData.setData ("Text", textToClipboard);
        success = true;
    }
    else
    {
        var input = str + '';
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
    
        const selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
    
        try {
            success = document.execCommand('copy',false);
        } catch (err) {
            console.error("ClipboardJS err " + err);
        }
    
        document.body.removeChild(el);
    
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }

        // var forExecElement = CreateElementForExecCommand (textToClipboard);
        // SelectContent (forExecElement);

        // try {
        //     if (window.netscape && netscape.security) {
        //         netscape.security.PrivilegeManager.enablePrivilege ("UniversalXPConnect");
        //     }
        //     //将选定内容复制到剪贴板
        //     success = document.execCommand ("copy", false, null);
        // }
        // catch (e) {
        //     success = false;
        // }
        // //移除临时元素
        // document.body.removeChild (forExecElement);
    }

    
    // return success;
    return true;
}
