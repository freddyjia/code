"use strict";
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