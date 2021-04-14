"use strict";
cc._RF.push(module, '6a12eNF521KqJHrpgNOeVLT', 'ImageTool');
// Scripts/JsTool/ImageTool.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageTool = ImageTool;

function ImageTool() {}

ImageTool.Get = function (callback) {
  ImageTool.Compelte = callback;
  console.log("ImageTool.GetImageTool.GetImageTool.Get");
  document.getElementById("ImageTool").click();
};

ImageTool.Init = function () {
  //    用于压缩图片的canvas
  ImageTool.canvas = document.createElement("canvas");
  ImageTool.ctx = ImageTool.canvas.getContext('2d'); //    瓦片canvas

  ImageTool.tCanvas = document.createElement("canvas");
  ImageTool.tctx = ImageTool.tCanvas.getContext("2d"); //<input id="file" type="file" class="fileToUpload" style="opacity:0;position:absolute;" onchange="handleFiles(this)"/> 

  var input = document.createElement("input");
  input.style.opacity = 0;
  input.type = "file";
  input.style.position = "absolute";
  input.style.left = '-9999px';

  var fileGet = function fileGet(handler) {
    console.log("fileGetfileGetfileGetfileGet " + handler);
    var maxsize = 100 * 1024;
    var file = input.files[0];

    if (file.type != 'image/png' && file.type != 'image/jpeg') {
      return alert("图片上传格式不正确");
    }

    var fileReader = new FileReader();

    fileReader.onloadend = function () {
      if (fileReader.readyState == fileReader.DONE) {
        // 200kb一下直接上传，否则进行压缩
        if (fileReader.result.length <= maxsize) {
          ImageTool.Compelte(fileReader.result);
        } else {
          var img = new Image();

          img.onload = function () {
            var data = ImageTool.Compress(img);
            ImageTool.Compelte(data);
          };

          img.src = fileReader.result;
        }
      }
    };

    fileReader.readAsDataURL(file);
  };

  input.onchange = fileGet;
  input.id = "ImageTool";
  input.accept = "image/*";
  document.body.appendChild(input);
};

ImageTool.Compress = function (img) {
  var initSize = img.src.length;
  var width = img.width;
  var height = img.height; //如果图片大于四百万像素，计算压缩比并将大小压至400万以下

  var ratio;

  if ((ratio = width * height / 4000000) > 1) {
    ratio = Math.sqrt(ratio);
    width /= ratio;
    height /= ratio;
  } else {
    ratio = 1;
  }

  ImageTool.canvas.width = width;
  ImageTool.canvas.height = height; //铺底色

  ImageTool.ctx.fillStyle = "#fff";
  ImageTool.ctx.fillRect(0, 0, ImageTool.canvas.width, ImageTool.canvas.height); //如果图片像素大于100万则使用瓦片绘制

  var count;

  if ((count = width * height / 1000000) > 1) {
    count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
    //计算每块瓦片的宽和高

    var nw = ~~(width / count);
    var nh = ~~(height / count);
    ImageTool.tCanvas.width = nw;
    ImageTool.tCanvas.height = nh;

    for (var i = 0; i < count; i++) {
      for (var j = 0; j < count; j++) {
        ImageTool.tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
        ImageTool.ctx.drawImage(ImageTool.tCanvas, i * nw, j * nh, nw, nh);
      }
    }
  } else {
    ImageTool.ctx.drawImage(img, 0, 0, width, height);
  } //进行最小压缩


  var ndata = ImageTool.canvas.toDataURL('image/jpeg', 0.1);
  console.log('压缩前：' + initSize);
  console.log('压缩后：' + ndata.length);
  console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
  ImageTool.tCanvas.width = ImageTool.tCanvas.height = ImageTool.canvas.width = ImageTool.canvas.height = 0;
  return ndata;
};

cc._RF.pop();