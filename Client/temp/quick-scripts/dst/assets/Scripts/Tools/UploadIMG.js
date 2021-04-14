
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/UploadIMG.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67f87aUXJpIdrlSG5GzHqSb', 'UploadIMG');
// Scripts/Tools/UploadIMG.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UploadIMG = /** @class */ (function () {
    function UploadIMG() {
    }
    // ts 代码
    // 选择本地文件，以下callback为函数回调参数
    UploadIMG.openLocalFile = function (callback) {
        var inputEl = document.getElementById('file_input'); // 类型转行 HTMLInputElement ，方便下面的 inputEl.files 调用
        if (!inputEl) {
            // 只创建一次
            console.log('xxxxxx createElement input');
            inputEl = document.createElement('input');
            inputEl.id = 'file_input';
            inputEl.setAttribute('id', 'file_input');
            inputEl.setAttribute('type', 'file');
            inputEl.setAttribute('class', 'fileToUpload');
            inputEl.style.opacity = '0'; // 不可见
            inputEl.style.position = 'absolute';
            document.body.appendChild(inputEl);
        }
        // 这个和 inputEl.onchange 的效果是一样的，2选1就可以了
        // inputEl.addEventListener('change', (event) => {
        //    console.log('xxx onchange1', event, inputEl.value);
        // });
        inputEl.onchange = function (event) {
            // console.log('xxx onchange2', event, inputEl.files);
            var files = inputEl.files; // 我在Mac上测试，每次只能选一个文件
            if (files && files.length > 0) {
                var file = files[0];
                if (callback)
                    callback(file);
            }
        };
        inputEl.click(); // 模拟点击，触发文件选择弹出框，据说有的浏览器不支持，chrome是没问题的
    };
    UploadIMG.upload = function (file) {
        // 使用表单设置文件，发送上传消息到服务器
        var forms = new FormData();
        forms.append("file", file); // 必填，key不限制必须"file"，根据nestjs服务器逻辑填写
        forms.append('fileName', file.name); // 选填，根据nestjs服务器逻辑填写
        forms.append('targetPath', 'test'); // 选填，根据nestjs服务器逻辑填写
        var xhr = cc.loader.getXMLHttpRequest(); //new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
                    console.log(xhr.response);
                }
            }
            else {
                console.log(xhr.status);
            }
        };
        xhr.open('POST', 'http://localhost:443/api/v1/upload', true);
        // xhr.setRequestHeader 的问题卡了好久，
        // nestjs那边一直报错，nestjs的文档要求是 multipart/form-data 格式，
        // 但是要是你自己设置的话会导致 Boundary 丢失，nestjs 的multer中间件解析错误，报错"Multipart: Boundary not found"，
        // 所以不设置"multipart/form-data"，自动生成就好，可以在network里查看发送的消息头已经自动添加好了"Content-Type"，
        // 网上各路大神各种花式解决方案，都未解决我的困惑，最后参考这个链接解决，跪谢https://blog.csdn.net/yun_hou/article/details/97004557
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");// multer不会处理非"multipart/form-data"表单
        // xhr.setRequestHeader("Content-Type", "multipart/form-data");
        // console.log(forms);// 打印不出来什么的，所以放弃吧
        xhr.addEventListener("progress", function (evt) {
            console.log('xxx progress', evt); // 上传进度，我只看到打印一次
        }, false);
        xhr.send(forms);
    };
    // 展示本地图片到sprite
    UploadIMG.showImage = function (base64, sprite) {
        // 读取文件为base64数据流
        this.base64ToSpriteFrame(base64, function (spriteFrame) {
            if (sprite)
                sprite.spriteFrame = spriteFrame;
        });
    };
    // 读取文件为base64数据流
    UploadIMG.readFile = function (file, callback) {
        var reader = new FileReader();
        reader.onload = function (event2) {
            if (callback) {
                if (reader.readyState == FileReader.DONE) {
                    // console.log('xxx FileReader', event2, reader.result);
                    callback(reader.result.toString());
                }
                else {
                    console.error('FileReader read error', event2, reader.result);
                    callback(null);
                }
            }
        };
        // reader.readAsText(file);//作为字符串读出
        reader.readAsDataURL(file);
        //reader.readAsText(file,'gb2312');//默认是用utf-8格式输出的，想指定输出格式就再添加一个参数，像txt的ANSI格式只能用国标才能显示出来
    };
    //
    UploadIMG.base64ToSpriteFrame = function (base64, callback) {
        var img = new Image();
        console.warn("------------准备合成-------------");
        img.onload = function () {
            console.warn("*********img.onload**********");
            var texture = new cc.Texture2D();
            texture.initWithElement(img);
            texture.handleLoadedTexture();
            var newframe = new cc.SpriteFrame(texture);
            if (callback)
                callback(newframe);
        };
        img.onerror = function (err) {
            console.warn("------合成报错-----", err);
        };
        if (base64.startsWith !== undefined && base64.startsWith("data:image")) {
            img.src = base64;
        }
        else {
            img.src = "data:image/png;base64," + base64;
        }
    };
    return UploadIMG;
}());
exports.default = UploadIMG;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXFVwbG9hZElNRy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrSEEsQ0FBQztJQWhIRyxRQUFRO0lBQ1IsMkJBQTJCO0lBQ2IsdUJBQWEsR0FBM0IsVUFBNEIsUUFBOEI7UUFDdEQsSUFBSSxPQUFPLEdBQXVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQSxnREFBZ0Q7UUFDeEksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLFFBQVE7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUEsTUFBTTtZQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7UUFDRCx1Q0FBdUM7UUFDdkMsa0RBQWtEO1FBQ2xELHlEQUF5RDtRQUN6RCxNQUFNO1FBQ04sT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFDLEtBQUs7WUFDckIsc0RBQXNEO1lBQ3RELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQSxxQkFBcUI7WUFDL0MsSUFBSSxLQUFLLElBQUksS0FBSyxD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IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZElNRyB7XHJcblxyXG4gICAgLy8gdHMg5Luj56CBXHJcbiAgICAvLyDpgInmi6nmnKzlnLDmlofku7bvvIzku6XkuItjYWxsYmFja+S4uuWHveaVsOWbnuiwg+WPguaVsFxyXG4gICAgcHVibGljIHN0YXRpYyBvcGVuTG9jYWxGaWxlKGNhbGxiYWNrOiAoZmlsZTogRmlsZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBpbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVfaW5wdXQnKTsvLyDnsbvlnovovazooYwgSFRNTElucHV0RWxlbWVudCDvvIzmlrnkvr/kuIvpnaLnmoQgaW5wdXRFbC5maWxlcyDosIPnlKhcclxuICAgICAgICBpZiAoIWlucHV0RWwpIHtcclxuICAgICAgICAgICAgLy8g5Y+q5Yib5bu65LiA5qyhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHh4eHggY3JlYXRlRWxlbWVudCBpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRFbC5pZCA9ICdmaWxlX2lucHV0JztcclxuICAgICAgICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpbGVfaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xyXG4gICAgICAgICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmlsZVRvVXBsb2FkJyk7XHJcbiAgICAgICAgICAgIGlucHV0RWwuc3R5bGUub3BhY2l0eSA9ICcwJzsvLyDkuI3lj6/op4FcclxuICAgICAgICAgICAgaW5wdXRFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi/meS4quWSjCBpbnB1dEVsLm9uY2hhbmdlIOeahOaViOaenOaYr+S4gOagt+eahO+8jDLpgIkx5bCx5Y+v5Lul5LqGXHJcbiAgICAgICAgLy8gaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZygneHh4IG9uY2hhbmdlMScsIGV2ZW50LCBpbnB1dEVsLnZhbHVlKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBpbnB1dEVsLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd4eHggb25jaGFuZ2UyJywgZXZlbnQsIGlucHV0RWwuZmlsZXMpO1xyXG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBpbnB1dEVsLmZpbGVzOy8vIOaIkeWcqE1hY+S4iua1i+ivle+8jOavj+asoeWPquiDvemAieS4gOS4quaWh+S7tlxyXG4gICAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRFbC5jbGljaygpOy8vIOaooeaLn+eCueWHu++8jOinpuWPkeaWh+S7tumAieaLqeW8ueWHuuahhu+8jOaNruivtOacieeahOa1j+iniOWZqOS4jeaUr+aMge+8jGNocm9tZeaYr+ayoemXrumimOeahFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwbG9hZChmaWxlOiBGaWxlKSB7XHJcbiAgICAgICAgLy8g5L2/55So6KGo5Y2V6K6+572u5paH5Lu277yM5Y+R6YCB5LiK5Lyg5raI5oGv5Yiw5pyN5Yqh5ZmoXHJcbiAgICAgICAgbGV0IGZvcm1zID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybXMuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTsvLyDlv4XloavvvIxrZXnkuI3pmZDliLblv4XpobtcImZpbGVcIu+8jOagueaNrm5lc3Rqc+acjeWKoeWZqOmAu+i+keWhq+WGmVxyXG4gICAgICAgIGZvcm1zLmFwcGVuZCgnZmlsZU5hbWUnLCBmaWxlLm5hbWUpOy8vIOmAieWhq++8jOagueaNrm5lc3Rqc+acjeWKoeWZqOmAu+i+keWhq+WGmVxyXG4gICAgICAgIGZvcm1zLmFwcGVuZCgndGFyZ2V0UGF0aCcsICd0ZXN0Jyk7Ly8g6YCJ5aGr77yM5qC55o2ubmVzdGpz5pyN5Yqh5Zmo6YC76L6R5aGr5YaZXHJcbiAgICAgICAgbGV0IHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpOy8vbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDw9IDMwMCB8fCB4aHIuc3RhdHVzID09IDMwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDo0NDMvYXBpL3YxL3VwbG9hZCcsIHRydWUpO1xyXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyIOeahOmXrumimOWNoeS6huWlveS5he+8jFxyXG4gICAgICAgIC8vIG5lc3Rqc+mCo+i+ueS4gOebtOaKpemUme+8jG5lc3Rqc+eahOaWh+aho+imgeaxguaYryBtdWx0aXBhcnQvZm9ybS1kYXRhIOagvOW8j++8jFxyXG4gICAgICAgIC8vIOS9huaYr+imgeaYr+S9oOiHquW3seiuvue9rueahOivneS8muWvvOiHtCBCb3VuZGFyeSDkuKLlpLHvvIxuZXN0anMg55qEbXVsdGVy5Lit6Ze05Lu26Kej5p6Q6ZSZ6K+v77yM5oql6ZSZXCJNdWx0aXBhcnQ6IEJvdW5kYXJ5IG5vdCBmb3VuZFwi77yMXHJcbiAgICAgICAgLy8g5omA5Lul5LiN6K6+572uXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCLvvIzoh6rliqjnlJ/miJDlsLHlpb3vvIzlj6/ku6XlnKhuZXR3b3Jr6YeM5p+l55yL5Y+R6YCB55qE5raI5oGv5aS05bey57uP6Ieq5Yqo5re75Yqg5aW95LqGXCJDb250ZW50LVR5cGVcIu+8jFxyXG4gICAgICAgIC8vIOe9keS4iuWQhOi3r+Wkp+elnuWQhOenjeiKseW8j+ino+WGs+aWueahiO+8jOmDveacquino+WGs+aIkeeahOWbsOaDke+8jOacgOWQjuWPguiAg+i/meS4qumTvuaOpeino+WGs++8jOi3quiwomh0dHBzOi8vYmxvZy5jc2RuLm5ldC95dW5faG91L2FydGljbGUvZGV0YWlscy85NzAwNDU1N1xyXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpOy8vIG11bHRlcuS4jeS8muWkhOeQhumdnlwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwi6KGo5Y2VXHJcbiAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1zKTsvLyDmiZPljbDkuI3lh7rmnaXku4DkuYjnmoTvvIzmiYDku6XmlL7lvIPlkKdcclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3h4eCBwcm9ncmVzcycsIGV2dCk7Ly8g5LiK5Lyg6L+b5bqm77yM5oiR5Y+q55yL5Yiw5omT5Y2w5LiA5qyhXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHhoci5zZW5kKGZvcm1zKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5bGV56S65pys5Zyw5Zu+54mH5Yiwc3ByaXRlXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dJbWFnZShiYXNlNjQ6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUpIHtcclxuICAgICAgICAvLyDor7vlj5bmlofku7bkuLpiYXNlNjTmlbDmja7mtYFcclxuXHJcbiAgICAgICAgdGhpcy5iYXNlNjRUb1Nwcml0ZUZyYW1lKGJhc2U2NCwgKHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlKSBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyDor7vlj5bmlofku7bkuLpiYXNlNjTmlbDmja7mtYFcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZEZpbGUoZmlsZTogRmlsZSwgY2FsbGJhY2s6IChiYXNlNjQ6IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQyKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRlci5yZWFkeVN0YXRlID09IEZpbGVSZWFkZXIuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd4eHggRmlsZVJlYWRlcicsIGV2ZW50MiwgcmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVhZGVyLnJlc3VsdC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmlsZVJlYWRlciByZWFkIGVycm9yJywgZXZlbnQyLCByZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7Ly/kvZzkuLrlrZfnrKbkuLLor7vlh7pcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAvL3JlYWRlci5yZWFkQXNUZXh0KGZpbGUsJ2diMjMxMicpOy8v6buY6K6k5piv55SodXRmLTjmoLzlvI/ovpPlh7rnmoTvvIzmg7PmjIflrprovpPlh7rmoLzlvI/lsLHlho3mt7vliqDkuIDkuKrlj4LmlbDvvIzlg490eHTnmoRBTlNJ5qC85byP5Y+q6IO955So5Zu95qCH5omN6IO95pi+56S65Ye65p2lXHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgcHVibGljIHN0YXRpYyBiYXNlNjRUb1Nwcml0ZUZyYW1lKGJhc2U2NDogc3RyaW5nLCBjYWxsYmFjazogKHRoaXM6IHZvaWQsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCItLS0tLS0tLS0tLS3lh4blpIflkIjmiJAtLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiKioqKioqKioqaW1nLm9ubG9hZCoqKioqKioqKipcIilcclxuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhFbGVtZW50KGltZyk7XHJcbiAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB2YXIgbmV3ZnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3ZnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiLS0tLS0t5ZCI5oiQ5oql6ZSZLS0tLS1cIiwgZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDxhbnk+YmFzZTY0KS5zdGFydHNXaXRoICE9PSB1bmRlZmluZWQgJiYgKDxhbnk+YmFzZTY0KS5zdGFydHNXaXRoKFwiZGF0YTppbWFnZVwiKSkge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gYmFzZTY0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGJhc2U2NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=