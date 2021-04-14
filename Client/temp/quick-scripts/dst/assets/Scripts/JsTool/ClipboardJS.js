
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/ClipboardJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13f43QaorFBbI6CdorGGLFU', 'ClipboardJS');
// Scripts/JsTool/ClipboardJS.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClipboardJS = ClipboardJS;

function ClipboardJS() {} // ClipboardJS.Copy = function(content,callback){
//     var success = document.execCommand("Copy", false, null);
//     callback(success);
//     // var script = document.createElement("script");
//     // script.type= 'text/javascript';
//     // script.src = "./clipboard.min.js";
// }


function CreateElementForExecCommand(textToClipboard) {
  var forExecElement = document.createElement("div"); //在可见区域以外

  forExecElement.style.position = "absolute";
  forExecElement.style.left = "-10000px";
  forExecElement.style.top = "-10000px";
  forExecElement.style.userSelect = "all"; //将必需的文本写入元素并追加到文档中

  forExecElement.textContent = textToClipboard;
  document.body.appendChild(forExecElement); //内容编辑模式在火狐的exec命令方法是必要的

  forExecElement.contentEditable = true;
  return forExecElement;
}

function SelectContent(element) {
  //创建一个范围
  var rangeToSelect = document.createRange();
  rangeToSelect.selectNodeContents(element); //选择内容

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(rangeToSelect);
}

ClipboardJS.Copy = function (str) {
  console.log('复制');
  var textToClipboard = str; //文本到剪贴板

  var success = false;

  if (window.clipboardData) {
    // 浏览器
    window.clipboardData.setData("Text", textToClipboard);
    success = true;
  } else {
    var input = str + '';
    var el = document.createElement('textarea');
    el.value = input;
    el.setAttribute('readonly', '');
    el.style.contain = 'strict';
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.style.fontSize = '12pt'; // Prevent zooming on iOS

    var selection = getSelection();
    var originalRange = false;

    if (selection.rangeCount > 0) {
      originalRange = selection.getRangeAt(0);
    }

    document.body.appendChild(el);
    el.select();
    el.selectionStart = 0;
    el.selectionEnd = input.length;

    try {
      success = document.execCommand('copy', false);
    } catch (err) {
      console.error("ClipboardJS err " + err);
    }

    document.body.removeChild(el);

    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    } // var forExecElement = CreateElementForExecCommand (textToClipboard);
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

  } // return success;


  return true;
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxDbGlwYm9hcmRKUy5qcyJdLCJuYW1lcyI6WyJDbGlwYm9hcmRKUyIsIkNyZWF0ZUVsZW1lbnRGb3JFeGVjQ29tbWFuZCIsInRleHRUb0NsaXBib2FyZCIsImZvckV4ZWNFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ1c2VyU2VsZWN0IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50RWRpdGFibGUiLCJTZWxlY3RDb250ZW50IiwiZWxlbWVudCIsInJhbmdlVG9TZWxlY3QiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiQ29weSIsInN0ciIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJpbnB1dCIsImVsIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJjb250YWluIiwiZm9udFNpemUiLCJvcmlnaW5hbFJhbmdlIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImxlbmd0aCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiZXJyb3IiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLFdBQVQsR0FDUCxDQUVDLEVBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNDLDJCQUFULENBQXNDQyxlQUF0QyxFQUF1RDtBQUNuRCxNQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QixLQUF4QixDQUFyQixDQURtRCxDQUVuRDs7QUFDQUYsRUFBQUEsY0FBYyxD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LEdBQVAsRUFBWTtBQUNWbkIsTUFBQUEsT0FBTyxDQUFDb0IsS0FBUixDQUFjLHFCQUFxQkQsR0FBbkM7QUFDSDs7QUFFRDFDLElBQUFBLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjb0MsV0FBZCxDQUEwQmYsRUFBMUI7O0FBRUEsUUFBSUssYUFBSixFQUFtQjtBQUNmbEIsTUFBQUEsU0FBUyxDQUFDRyxlQUFWO0FBQ0FILE1BQUFBLFNBQVMsQ0FBQ0ksUUFBVixDQUFtQmMsYUFBbkI7QUFDSCxLQS9CTCxDQWlDSTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILEdBM0QyQixDQThENUI7OztBQUNBLFNBQU8sSUFBUDtBQUNILENBaEVEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQ2xpcGJvYXJkSlMoKSBcbnsgXG5cbn1cblxuLy8gQ2xpcGJvYXJkSlMuQ29weSA9IGZ1bmN0aW9uKGNvbnRlbnQsY2FsbGJhY2spe1xuLy8gICAgIHZhciBzdWNjZXNzID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIsIGZhbHNlLCBudWxsKTtcbi8vICAgICBjYWxsYmFjayhzdWNjZXNzKTtcbiAgICBcbi8vICAgICAvLyB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbi8vICAgICAvLyBzY3JpcHQudHlwZT0gJ3RleHQvamF2YXNjcmlwdCc7XG4vLyAgICAgLy8gc2NyaXB0LnNyYyA9IFwiLi9jbGlwYm9hcmQubWluLmpzXCI7XG4vLyB9XG5cbmZ1bmN0aW9uIENyZWF0ZUVsZW1lbnRGb3JFeGVjQ29tbWFuZCAodGV4dFRvQ2xpcGJvYXJkKSB7XG4gICAgdmFyIGZvckV4ZWNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJkaXZcIik7XG4gICAgLy/lnKjlj6/op4HljLrln5/ku6XlpJZcbiAgICBmb3JFeGVjRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBmb3JFeGVjRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCItMTAwMDBweFwiO1xuICAgIGZvckV4ZWNFbGVtZW50LnN0eWxlLnRvcCA9IFwiLTEwMDAwcHhcIjtcbiAgICBmb3JFeGVjRWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gXCJhbGxcIjtcbiAgICAvL+WwhuW/hemcgOeahOaWh+acrOWGmeWFpeWFg+e0oOW5tui/veWKoOWIsOaWh+aho+S4rVxuICAgIGZvckV4ZWNFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFRvQ2xpcGJvYXJkO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQgKGZvckV4ZWNFbGVtZW50KTtcbiAgICAvL+WGheWuuee8lui+keaooeW8j+WcqOeBq+eLkOeahGV4ZWPlkb3ku6Tmlrnms5XmmK/lv4XopoHnmoRcbiAgICBmb3JFeGVjRWxlbWVudC5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgIHJldHVybiBmb3JFeGVjRWxlbWVudDtcbn1cbiAgICBcbmZ1bmN0aW9uIFNlbGVjdENvbnRlbnQgKGVsZW1lbnQpIHtcbiAgICAvL+WIm+W7uuS4gOS4quiMg+WbtFxuICAgIHZhciByYW5nZVRvU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UgKCk7XG4gICAgcmFuZ2VUb1NlbGVjdC5zZWxlY3ROb2RlQ29udGVudHMgKGVsZW1lbnQpO1xuICAgIC8v6YCJ5oup5YaF5a65XG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24gKCk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcyAoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UgKHJhbmdlVG9TZWxlY3QpO1xufVxuXG5DbGlwYm9hcmRKUy5Db3B5ID0gZnVuY3Rpb24oc3RyKXtcbiAgICBjb25zb2xlLmxvZygn5aSN5Yi2Jyk7XG5cbiAgICB2YXIgdGV4dFRvQ2xpcGJvYXJkID0gc3RyOyAvL+aWh+acrOWIsOWJqui0tOadv1xuXG4gICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAod2luZG93LmNsaXBib2FyZERhdGEpIHsgLy8g5rWP6KeI5ZmoXG4gICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEgKFwiVGV4dFwiLCB0ZXh0VG9DbGlwYm9hcmQpO1xuICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmFyIGlucHV0ID0gc3RyICsgJyc7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZWwudmFsdWUgPSBpbnB1dDtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgZWwuc3R5bGUuY29udGFpbiA9ICdzdHJpY3QnO1xuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG4gICAgICAgIGVsLnN0eWxlLmZvbnRTaXplID0gJzEycHQnOyAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXG4gICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgb3JpZ2luYWxSYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsLnNlbGVjdCgpO1xuICAgICAgICBlbC5zZWxlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgIGVsLnNlbGVjdGlvbkVuZCA9IGlucHV0Lmxlbmd0aDtcbiAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScsZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbGlwYm9hcmRKUyBlcnIgXCIgKyBlcnIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIFxuICAgICAgICBpZiAob3JpZ2luYWxSYW5nZSkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKG9yaWdpbmFsUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFyIGZvckV4ZWNFbGVtZW50ID0gQ3JlYXRlRWxlbWVudEZvckV4ZWNDb21tYW5kICh0ZXh0VG9DbGlwYm9hcmQpO1xuICAgICAgICAvLyBTZWxlY3RDb250ZW50IChmb3JFeGVjRWxlbWVudCk7XG5cbiAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cubmV0c2NhcGUgJiYgbmV0c2NhcGUuc2VjdXJpdHkpIHtcbiAgICAgICAgLy8gICAgICAgICBuZXRzY2FwZS5zZWN1cml0eS5Qcml2aWxlZ2VNYW5hZ2VyLmVuYWJsZVByaXZpbGVnZSAoXCJVbml2ZXJzYWxYUENvbm5lY3RcIik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvL+WwhumAieWumuWGheWuueWkjeWItuWIsOWJqui0tOadv1xuICAgICAgICAvLyAgICAgc3VjY2VzcyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kIChcImNvcHlcIiwgZmFsc2UsIG51bGwpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy/np7vpmaTkuLTml7blhYPntKBcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCAoZm9yRXhlY0VsZW1lbnQpO1xuICAgIH1cblxuICAgIFxuICAgIC8vIHJldHVybiBzdWNjZXNzO1xuICAgIHJldHVybiB0cnVlO1xufVxuIl19