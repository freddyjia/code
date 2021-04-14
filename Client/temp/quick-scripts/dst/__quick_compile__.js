
(function () {
var scripts = [{"deps":{"./assets/Scripts/Components/QRCodeComponent":65,"./assets/Scripts/Components/ListView":54,"./assets/Scripts/Components/ScrollPage":70,"./assets/Scripts/Components/SliderListener":68,"./assets/Scripts/Components/PageViewListener":15,"./assets/Scripts/Components/TimerManager":86,"./assets/Scripts/Components/ResizeComponent":64,"./assets/Scripts/Components/UIAnimation":69,"./assets/Scripts/Components/ScrollViewListener":66,"./assets/Scripts/Components/EditBoxListener":73,"./assets/Scripts/Global/LocalStorageKey":17,"./assets/Scripts/Global/Global":74,"./assets/Scripts/Global/Language":72,"./assets/Scripts/JsTool/ClipboardJS":91,"./assets/Scripts/JsTool/ImageTool":80,"./assets/Scripts/JsTool/LabelFunc":75,"./assets/Scripts/JsTool/JsGetIP":78,"./assets/Scripts/JsTool/NoSleep":59,"./assets/Scripts/JsTool/JsGetUrlParms":76,"./assets/Scripts/JsTool/JSOpenUrl":71,"./assets/Scripts/JsTool/qrcode":7,"./assets/Scripts/JsTool/NoSleepJsTool":77,"./assets/Scripts/JsTool/JSGenQrcode":79,"./assets/Scripts/MVCFramework/ModelManager":82,"./assets/Scripts/MVCFramework/Controller":85,"./assets/Scripts/MVCFramework/MessageCenter":89,"./assets/Scripts/MVCFramework/View":83,"./assets/Scripts/MVCFramework/ViewManager":4,"./assets/Scripts/MVCFramework/MVCFramework":81,"./assets/Scripts/MVCFramework/Model":88,"./assets/Scripts/MVCFramework/ControllerManager":84,"./assets/Scripts/Main":9,"./assets/Scripts/Manager/AudioManager":87,"./assets/Scripts/Manager/UpdateBeat":63,"./assets/Scripts/Modules/MessageNames":90,"./assets/Scripts/Modules/MVCRegister":22,"./assets/Scripts/Modules/Controllers/ControllerApp":20,"./assets/Scripts/Modules/Controllers/ControllerToast":19,"./assets/Scripts/Modules/Controllers/ControllerOpenNetworking":5,"./assets/Scripts/Modules/Controllers/ControllerDialogNormal":21,"./assets/Scripts/Modules/ViewConfigs":8,"./assets/Scripts/Modules/Views/ViewApp":1,"./assets/Scripts/Modules/Views/ViewToast":23,"./assets/Scripts/Modules/Views/ViewOpenNetworking":49,"./assets/Scripts/Modules/Views/PayEn/UIItemDay":26,"./assets/Scripts/Modules/Views/PayEn/BounsItem":11,"./assets/Scripts/Modules/Views/PayEn/BankItem":29,"./assets/Scripts/Modules/Views/ViewDialogNormal":33,"./assets/Scripts/Modules/Models/ModelApp":10,"./assets/Scripts/Protos/MessageDefine_BankProxy":24,"./assets/Scripts/Protos/MessageDefine":13,"./assets/Scripts/Protos/Ping":25,"./assets/Scripts/Protos/Handshake":28,"./assets/Scripts/Protos/protobuf":92,"./assets/Scripts/Tools/Extension":35,"./assets/Scripts/Tools/Dialog":41,"./assets/Scripts/Tools/Bezier":39,"./assets/Scripts/Tools/MD5":2,"./assets/Scripts/Tools/NodeUtil":27,"./assets/Scripts/Tools/SpriteUtil":58,"./assets/Scripts/Tools/Toast":32,"./assets/Scripts/Tools/OpenNetworkingUI":34,"./assets/Scripts/Tools/UploadAnalytics":30,"./assets/Scripts/Tools/Util":12,"./assets/Scripts/Tools/UploadIMG":36,"./assets/Scripts/Tools/Random":61,"./assets/Scripts/Tools/ccC":40,"./assets/Scripts/Tools/AtlasFont":31,"./assets/Scripts/Tools/XTween/XTweenerAction":45,"./assets/Scripts/Tools/XTween/XTweenerRotaion":37,"./assets/Scripts/Tools/XTween/XTweenerScale":46,"./assets/Scripts/Tools/XTween/XTweenerWorldPosition":43,"./assets/Scripts/Tools/XTween/XTweenerValue":47,"./assets/Scripts/Tools/XTween/XTweenerPosition":50,"./assets/Scripts/Tools/XTween/XTween":3,"./assets/Scripts/Tools/XTween/XTweenerValueArray":38,"./assets/Scripts/Tools/XTween/Base/XTweenObserver":56,"./assets/Scripts/Tools/XTween/Base/XTweenUpdater":44,"./assets/Scripts/Tools/XTween/Base/XTweenCurv":48,"./assets/Scripts/Tools/XTween/Base/XTweenerIF":14,"./assets/Scripts/Tools/XTween/Base/XTweenerGroupQueueItem":60,"./assets/Scripts/Tools/XTween/Base/XTweener":57,"./assets/Scripts/Tools/XTween/Base/XTweenerGroup":52,"./assets/Scripts/Tools/XTween/Base/XTweenGlobal":51,"./assets/Scripts/Tools/XTween/XTweenerColor":42,"./assets/migration/use_v2.0.x_cc.Toggle_event":16,"./assets/Scripts/Components/ButtonListener":67,"./assets/Scripts/Network/Socket/TCPNetwork":6,"./assets/Scripts/Network/Socket/TCPSession":62,"./assets/Scripts/Network/Socket/TCPSendTaskManager":55,"./assets/Scripts/Network/Socket/DataPacket":53,"./assets/Scripts/Network/Http/HttpRequest":18},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../JsTool/ClipboardJS":91,"../../MVCFramework/View":83,"../../Global/Language":72,"../../Tools/Toast":32,"../../Tools/UploadIMG":36,"./PayEn/BankItem":29,"./PayEn/BounsItem":11},"path":"preview-scripts/assets/Scripts/Modules/Views/ViewApp.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/MD5.js"},{"deps":{"./XTweenerPosition":50,"./Base/XTweenCurv":48,"./XTweenerRotaion":37,"./XTweenerScale":46,"./Base/XTweenerGroup":52,"./XTweenerValueArray":38,"./XTweenerValue":47,"./XTweenerAction":45,"./XTweenerWorldPosition":43},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTween.js"},{"deps":{"../Modules/MVCRegister":22,"../Modules/ViewConfigs":8,"../Components/TimerManager":86,"../Tools/Util":12,"../Tools/XTween/Base/XTweenCurv":48,"../Tools/ccC":40,"../Tools/XTween/XTween":3},"path":"preview-scripts/assets/Scripts/MVCFramework/ViewManager.js"},{"deps":{"../../MVCFramework/Controller":85,"../MVCRegister":22,"../MessageNames":90},"path":"preview-scripts/assets/Scripts/Modules/Controllers/ControllerOpenNetworking.js"},{"deps":{"./TCPSession":62},"path":"preview-scripts/assets/Scripts/Network/Socket/TCPNetwork.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/qrcode.js"},{"deps":{"./MVCRegister":22},"path":"preview-scripts/assets/Scripts/Modules/ViewConfigs.js"},{"deps":{"./JsTool/JsGetUrlParms":76,"./Modules/MessageNames":90,"./MVCFramework/MessageCenter":89,"./Network/Socket/TCPNetwork":6,"./MVCFramework/MVCFramework":81,"./Manager/AudioManager":87,"./Tools/OpenNetworkingUI":34,"./JsTool/ImageTool":80},"path":"preview-scripts/assets/Scripts/Main.js"},{"deps":{"../MessageNames":90,"../../MVCFramework/Model":88,"../../Tools/Toast":32,"../../Components/TimerManager":86,"../../Global/Language":72,"../../Protos/Ping":25,"../../Protos/MessageDefine_BankProxy":24,"../../Protos/MessageDefine":13,"../../Network/Socket/TCPNetwork":6},"path":"preview-scripts/assets/Scripts/Modules/Models/ModelApp.js"},{"deps":{"../../../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Modules/Views/PayEn/BounsItem.js"},{"deps":{"../Components/PageViewListener":15,"../Components/SliderListener":68,"../Components/ButtonListener":67,"../Components/ScrollViewListener":66,"../Components/TimerManager":86,"../JsTool/JSOpenUrl":71,"../Components/EditBoxListener":73,"./ccC":40,"./NodeUtil":27},"path":"preview-scripts/assets/Scripts/Tools/Util.js"},{"deps":{"./protobuf":92},"path":"preview-scripts/assets/Scripts/Protos/MessageDefine.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenerIF.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/PageViewListener.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Global/LocalStorageKey.js"},{"deps":{"../../Global/Global":74},"path":"preview-scripts/assets/Scripts/Network/Http/HttpRequest.js"},{"deps":{"../../MVCFramework/Controller":85,"../MVCRegister":22,"../MessageNames":90},"path":"preview-scripts/assets/Scripts/Modules/Controllers/ControllerToast.js"},{"deps":{"../MessageNames":90,"../../MVCFramework/Controller":85,"../MVCRegister":22,"../../Tools/Toast":32,"../../JsTool/ImageTool":80,"../../Global/Language":72},"path":"preview-scripts/assets/Scripts/Modules/Controllers/ControllerApp.js"},{"deps":{"../MessageNames":90,"../MVCRegister":22,"../../MVCFramework/Controller":85},"path":"preview-scripts/assets/Scripts/Modules/Controllers/ControllerDialogNormal.js"},{"deps":{"./MessageNames":90,"./Views/ViewDialogNormal":33,"./Controllers/ControllerToast":19,"./Controllers/ControllerOpenNetworking":5,"./Views/ViewToast":23,"./Views/ViewOpenNetworking":49,"./Controllers/ControllerApp":20,"./Views/ViewApp":1,"./Models/ModelApp":10,"./Controllers/ControllerDialogNormal":21},"path":"preview-scripts/assets/Scripts/Modules/MVCRegister.js"},{"deps":{"../../MVCFramework/View":83},"path":"preview-scripts/assets/Scripts/Modules/Views/ViewToast.js"},{"deps":{"./protobuf":92},"path":"preview-scripts/assets/Scripts/Protos/MessageDefine_BankProxy.js"},{"deps":{"./protobuf":92},"path":"preview-scripts/assets/Scripts/Protos/Ping.js"},{"deps":{"../../../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Modules/Views/PayEn/UIItemDay.js"},{"deps":{"./ccC":40},"path":"preview-scripts/assets/Scripts/Tools/NodeUtil.js"},{"deps":{"./protobuf":92},"path":"preview-scripts/assets/Scripts/Protos/Handshake.js"},{"deps":{"../../../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Modules/Views/PayEn/BankItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/UploadAnalytics.js"},{"deps":{"./Extension":35},"path":"preview-scripts/assets/Scripts/Tools/AtlasFont.js"},{"deps":{"../Modules/MessageNames":90,"../MVCFramework/MessageCenter":89},"path":"preview-scripts/assets/Scripts/Tools/Toast.js"},{"deps":{"../../MVCFramework/View":83,"../../Global/Global":74,"../../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Modules/Views/ViewDialogNormal.js"},{"deps":{"../MVCFramework/MessageCenter":89,"../Modules/MessageNames":90},"path":"preview-scripts/assets/Scripts/Tools/OpenNetworkingUI.js"},{"deps":{"../Components/TimerManager":86,"./ccC":40,"./NodeUtil":27,"./XTween/Base/XTweenObserver":56},"path":"preview-scripts/assets/Scripts/Tools/Extension.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/UploadIMG.js"},{"deps":{"./Base/XTweener":57,"./Base/XTweenCurv":48},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerRotaion.js"},{"deps":{"./Base/XTweener":57,"./Base/XTweenCurv":48},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerValueArray.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/Bezier.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/ccC.js"},{"deps":{"../MVCFramework/MessageCenter":89,"../Modules/MessageNames":90,"../Global/Global":74},"path":"preview-scripts/assets/Scripts/Tools/Dialog.js"},{"deps":{"./Base/XTweenCurv":48,"./Base/XTweener":57},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerColor.js"},{"deps":{"./Base/XTweenCurv":48,"./Base/XTweener":57},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerWorldPosition.js"},{"deps":{"../../Util":12,"./XTweenGlobal":51,"../../../Manager/UpdateBeat":63},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenUpdater.js"},{"deps":{"./Base/XTweenGlobal":51},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerAction.js"},{"deps":{"./Base/XTweenCurv":48,"./Base/XTweener":57},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerScale.js"},{"deps":{"./Base/XTweener":57,"./Base/XTweenCurv":48},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerValue.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenCurv.js"},{"deps":{"../../Components/TimerManager":86,"../../MVCFramework/View":83},"path":"preview-scripts/assets/Scripts/Modules/Views/ViewOpenNetworking.js"},{"deps":{"./Base/XTweener":57,"./Base/XTweenCurv":48},"path":"preview-scripts/assets/Scripts/Tools/XTween/XTweenerPosition.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenGlobal.js"},{"deps":{"./XTweenGlobal":51,"../../Util":12,"./XTweenUpdater":44,"./XTweenerGroupQueueItem":60,"./XTweenObserver":56},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenerGroup.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Network/Socket/DataPacket.js"},{"deps":{"../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Components/ListView.js"},{"deps":{"../../Components/TimerManager":86,"../../Global/Language":72,"../../Tools/Toast":32},"path":"preview-scripts/assets/Scripts/Network/Socket/TCPSendTaskManager.js"},{"deps":{"../../Util":12},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenObserver.js"},{"deps":{"./XTweenCurv":48,"./XTweenGlobal":51,"./XTweenObserver":56,"./XTweenUpdater":44},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweener.js"},{"deps":{"./ccC":40},"path":"preview-scripts/assets/Scripts/Tools/SpriteUtil.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/NoSleep.js"},{"deps":{"./XTweenGlobal":51},"path":"preview-scripts/assets/Scripts/Tools/XTween/Base/XTweenerGroupQueueItem.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Tools/Random.js"},{"deps":{"./TCPSendTaskManager":55,"../../Protos/Handshake":28,"../../Global/Global":74,"../../Tools/OpenNetworkingUI":34,"../../Global/Language":72,"../../Components/TimerManager":86,"../../Tools/Toast":32,"./DataPacket":53},"path":"preview-scripts/assets/Scripts/Network/Socket/TCPSession.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Manager/UpdateBeat.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/ResizeComponent.js"},{"deps":{"../JsTool/JSGenQrcode":79},"path":"preview-scripts/assets/Scripts/Components/QRCodeComponent.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/ScrollViewListener.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/ButtonListener.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/SliderListener.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/UIAnimation.js"},{"deps":{"../Tools/Util":12},"path":"preview-scripts/assets/Scripts/Components/ScrollPage.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/JSOpenUrl.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Global/Language.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Components/EditBoxListener.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Global/Global.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/LabelFunc.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/JsGetUrlParms.js"},{"deps":{"./NoSleep.js":59},"path":"preview-scripts/assets/Scripts/JsTool/NoSleepJsTool.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/JsGetIP.js"},{"deps":{"./qrcode":7},"path":"preview-scripts/assets/Scripts/JsTool/JSGenQrcode.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/ImageTool.js"},{"deps":{"./ControllerManager":84,"./MessageCenter":89,"./ModelManager":82,"../Modules/ViewConfigs":8,"./ViewManager":4,"../Modules/MVCRegister":22},"path":"preview-scripts/assets/Scripts/MVCFramework/MVCFramework.js"},{"deps":{"./MessageCenter":89,"../Modules/MVCRegister":22},"path":"preview-scripts/assets/Scripts/MVCFramework/ModelManager.js"},{"deps":{"../Tools/Util":12,"../Modules/ViewConfigs":8},"path":"preview-scripts/assets/Scripts/MVCFramework/View.js"},{"deps":{"./MessageCenter":89,"./ViewManager":4,"./ModelManager":82,"../Modules/MVCRegister":22},"path":"preview-scripts/assets/Scripts/MVCFramework/ControllerManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/MVCFramework/Controller.js"},{"deps":{"../Manager/UpdateBeat":63},"path":"preview-scripts/assets/Scripts/Components/TimerManager.js"},{"deps":{"../Global/LocalStorageKey":17,"../Tools/ccC":40},"path":"preview-scripts/assets/Scripts/Manager/AudioManager.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/MVCFramework/Model.js"},{"deps":{"../Modules/MVCRegister":22,"./ControllerManager":84},"path":"preview-scripts/assets/Scripts/MVCFramework/MessageCenter.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Modules/MessageNames.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/JsTool/ClipboardJS.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Protos/protobuf.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    