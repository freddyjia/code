
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Modules/MVCRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21676ViAZxK/oPxOZEkCSpU', 'MVCRegister');
// Scripts/Modules/MVCRegister.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageNames_1 = require("./MessageNames");
var ControllerDialogNormal_1 = require("./Controllers/ControllerDialogNormal");
var ViewDialogNormal_1 = require("./Views/ViewDialogNormal");
var ViewToast_1 = require("./Views/ViewToast");
var ControllerToast_1 = require("./Controllers/ControllerToast");
var ViewOpenNetworking_1 = require("./Views/ViewOpenNetworking");
var ControllerOpenNetworking_1 = require("./Controllers/ControllerOpenNetworking");
var ViewApp_1 = require("./Views/ViewApp");
var ControllerApp_1 = require("./Controllers/ControllerApp");
var ModelApp_1 = require("./Models/ModelApp");
//---------->>>>> ModelNames
var ModelNames = /** @class */ (function () {
    function ModelNames() {
    }
    ModelNames.ModelApp = "ModelApp";
    return ModelNames;
}());
exports.ModelNames = ModelNames;
//---------->>>>> ViewNames
var ViewNames = /** @class */ (function () {
    function ViewNames() {
    }
    ViewNames.ViewDialogNormal = "ViewDialogNormal";
    ViewNames.ViewToast = "ViewToast";
    ViewNames.ViewOpenNetworking = "ViewOpenNetworking";
    ViewNames.ViewApp = "ViewApp";
    return ViewNames;
}());
exports.ViewNames = ViewNames;
//---------->>>>> ControllerNames
var ControllerNames = /** @class */ (function () {
    function ControllerNames() {
    }
    ControllerNames.ControllerToast = "ControllerToast";
    ControllerNames.ControllerDialogNormal = "ControllerDialogNormal";
    ControllerNames.ControllerOpenNetworking = "ControllerOpenNetworking";
    ControllerNames.ControllerApp = "ControllerApp";
    return ControllerNames;
}());
exports.ControllerNames = ControllerNames;
var MVCRegister = /** @class */ (function () {
    function MVCRegister() {
    }
    MVCRegister.AddModels = function () {
        this.dicModels = {};
        this.dicModels[ModelNames.ModelApp] = function () {
            return new ModelApp_1.default();
        };
    };
    MVCRegister.AddViews = function () {
        this.dicViews = {};
        //---------->>>>> Register Views HERE
        this.dicViews[ViewNames.ViewDialogNormal] = function () {
            return new ViewDialogNormal_1.default();
        };
        this.dicViews[ViewNames.ViewToast] = function () {
            return new ViewToast_1.default();
        };
        this.dicViews[ViewNames.ViewOpenNetworking] = function () {
            return new ViewOpenNetworking_1.default();
        };
        this.dicViews[ViewNames.ViewApp] = function () {
            return new ViewApp_1.default();
        };
    };
    MVCRegister.AddControllers = function () {
        this.dicControllers = {};
        //---------->>>>> Register Controllers HERE
        this.dicControllers[ControllerNames.ControllerDialogNormal] = function () {
            return new ControllerDialogNormal_1.default();
        };
        this.dicControllers[ControllerNames.ControllerToast] = function () {
            return new ControllerToast_1.default();
        };
        this.dicControllers[ControllerNames.ControllerOpenNetworking] = function () {
            return new ControllerOpenNetworking_1.default();
        };
        this.dicControllers[ControllerNames.ControllerApp] = function () {
            return new ControllerApp_1.default();
        };
    };
    MVCRegister.AddControllerMsgs = function () {
        this.dicControllerMsgListening = {};
        //---------->>>>> Register Listening Messages HERE
        this.dicControllerMsgListening[ControllerNames.ControllerDialogNormal] = [MessageNames_1.default.ShowDialog];
        this.dicControllerMsgListening[ControllerNames.ControllerToast] = [MessageNames_1.default.ShowToastUI];
        this.dicControllerMsgListening[ControllerNames.ControllerOpenNetworking] = [MessageNames_1.default.OpenNetworkLoading];
        this.dicControllerMsgListening[ControllerNames.ControllerApp] = [
            MessageNames_1.default.StartLogin,
        ];
    };
    MVCRegister.Init = function () {
        this.AddModels();
        this.AddViews();
        this.AddControllers();
        this.AddControllerMsgs();
    };
    //--------->  以下内容框架调用
    MVCRegister.dicModels = {};
    MVCRegister.dicViews = {};
    MVCRegister.dicControllers = {};
    MVCRegister.dicControllerMsgListening = {};
    return MVCRegister;
}());
exports.MVCRegister = MVCRegister;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTW9kdWxlc1xcTVZDUmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSwrQ0FBMEM7QUFDMUMsK0VBQTBFO0FBQzFFLDZEQUF3RDtBQUN4RCwrQ0FBMEM7QUFDMUMsaUVBQTREO0FBQzVELGlFQUE0RDtBQUM1RCxtRkFBOEU7QUFDOUUsMkNBQXNDO0FBQ3RDLDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFHekMsNEJBQTRCO0FBQzVCO0lBQUE7SUFFQSxDQUFDO0lBRGlCLG1CQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3hDLGlCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksZ0NBQVU7QUFJdkIsMkJBQTJCO0FBQzNCO0lBQUE7SUFLQSxDQUFDO0lBSmlCLDBCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLG1CQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3hCLDRCQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLGlCQUFPLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLGdCQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksOEJBQVM7QUFPdEIsaUNBQWlDO0FBQ2pDO0lBQUE7SUFLQSxDQUFDO0lBSmlCLCtCQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDcEMsc0NBQXNCLEdBQUcsd0JBQXdCLENBQUM7SUFDbEQsd0NBQXdCLEdBQUcsMEJBQTBCLENBQUM7SUFDdEQsNkJBQWEsR0FBRyxlQUFlLENBQUM7SUFDbEQsc0JBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSwwQ0FBZTtBQU81QjtJQUFBO0lBc0VBLENBQUM7SUFyRWlCLHFCQUFTLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDbEMsT0FBTyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsb0JBQVEsR0FBdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRztZQUN4QyxPQUFPLElBQUksMEJBQWdCLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRztZQUNqQyxPQUFPLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDMUMsT0FBTyxJQUFJLDRCQUFrQixFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDL0IsT0FBTyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsMEJBQWMsR0FBNUI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QiwyQ0FBMkM7UUFFM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsR0FBRztZQUMxRCxPQUFPLElBQUksZ0NBQXNCLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRztZQUNuRCxPQUFPLElBQUkseUJBQWUsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEdBQUc7WUFDNUQsT0FBTyxJQUFJLGtDQUF3QixFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUc7WUFDakQsT0FBTyxJQUFJLHVCQUFhLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUM7SUFDTixDQUFDO0lBRWEsNkJBQWlCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLHlCQUF5QixHQUFHLEVBQUUsQ0FBQztRQUVwQyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxzQkFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0csSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsR0FBRztZQUM1RCxzQkFBWSxDQUFDLFVBQVU7U0FDMUIsQ0FBQztJQUNOLENBQUM7SUFRYSxnQkFBSSxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFYRCxzQkFBc0I7SUFDUixxQkFBUyxHQUF3QyxFQUFFLENBQUM7SUFDcEQsb0JBQVEsR0FBdUMsRUFBRSxDQUFDO0lBQ2xELDBCQUFjLEdBQW1ELEVBQUUsQ0FBQztJQUNwRSxxQ0FBeUIsR0FBZ0QsRUFBRSxDQUFDO0lBUTlGLGtCQUFDO0NBdEVELEFBc0VDLElBQUE7QUF0RVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01WQ0ZyYW1ld29yay9Nb2RlbFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL01WQ0ZyYW1ld29yay9WaWV3XCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi4vTVZDRnJhbWV3b3JrL0NvbnRyb2xsZXJcIjtcbmltcG9ydCBNZXNzYWdlTmFtZXMgZnJvbSBcIi4vTWVzc2FnZU5hbWVzXCI7XG5pbXBvcnQgQ29udHJvbGxlckRpYWxvZ05vcm1hbCBmcm9tIFwiLi9Db250cm9sbGVycy9Db250cm9sbGVyRGlhbG9nTm9ybWFsXCI7XG5pbXBvcnQgVmlld0RpYWxvZ05vcm1hbCBmcm9tIFwiLi9WaWV3cy9WaWV3RGlhbG9nTm9ybWFsXCI7XG5pbXBvcnQgVmlld1RvYXN0IGZyb20gXCIuL1ZpZXdzL1ZpZXdUb2FzdFwiO1xuaW1wb3J0IENvbnRyb2xsZXJUb2FzdCBmcm9tIFwiLi9Db250cm9sbGVycy9Db250cm9sbGVyVG9hc3RcIjtcbmltcG9ydCBWaWV3T3Blbk5ldHdvcmtpbmcgZnJvbSBcIi4vVmlld3MvVmlld09wZW5OZXR3b3JraW5nXCI7XG5pbXBvcnQgQ29udHJvbGxlck9wZW5OZXR3b3JraW5nIGZyb20gXCIuL0NvbnRyb2xsZXJzL0NvbnRyb2xsZXJPcGVuTmV0d29ya2luZ1wiO1xuaW1wb3J0IFZpZXdBcHAgZnJvbSBcIi4vVmlld3MvVmlld0FwcFwiO1xuaW1wb3J0IENvbnRyb2xsZXJBcHAgZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlckFwcFwiO1xuaW1wb3J0IE1vZGVsQXBwIGZyb20gXCIuL01vZGVscy9Nb2RlbEFwcFwiO1xuXG5cbi8vLS0tLS0tLS0tLT4+Pj4+IE1vZGVsTmFtZXNcbmV4cG9ydCBjbGFzcyBNb2RlbE5hbWVzIHtcbiAgICBwdWJsaWMgc3RhdGljIE1vZGVsQXBwID0gXCJNb2RlbEFwcFwiO1xufVxuXG4vLy0tLS0tLS0tLS0+Pj4+PiBWaWV3TmFtZXNcbmV4cG9ydCBjbGFzcyBWaWV3TmFtZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgVmlld0RpYWxvZ05vcm1hbCA9IFwiVmlld0RpYWxvZ05vcm1hbFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgVmlld1RvYXN0ID0gXCJWaWV3VG9hc3RcIjtcbiAgICBwdWJsaWMgc3RhdGljIFZpZXdPcGVuTmV0d29ya2luZyA9IFwiVmlld09wZW5OZXR3b3JraW5nXCI7XG4gICAgcHVibGljIHN0YXRpYyBWaWV3QXBwID0gXCJWaWV3QXBwXCI7XG59XG5cbi8vLS0tLS0tLS0tLT4+Pj4+IENvbnRyb2xsZXJOYW1lc1xuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJOYW1lcyB7XG4gICAgcHVibGljIHN0YXRpYyBDb250cm9sbGVyVG9hc3QgPSBcIkNvbnRyb2xsZXJUb2FzdFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ29udHJvbGxlckRpYWxvZ05vcm1hbCA9IFwiQ29udHJvbGxlckRpYWxvZ05vcm1hbFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ29udHJvbGxlck9wZW5OZXR3b3JraW5nID0gXCJDb250cm9sbGVyT3Blbk5ldHdvcmtpbmdcIjtcbiAgICBwdWJsaWMgc3RhdGljIENvbnRyb2xsZXJBcHAgPSBcIkNvbnRyb2xsZXJBcHBcIjtcbn1cblxuZXhwb3J0IGNsYXNzIE1WQ1JlZ2lzdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIEFkZE1vZGVscygpIHtcbiAgICAgICAgdGhpcy5kaWNNb2RlbHMgPSB7fTtcblxuICAgICAgICB0aGlzLmRpY01vZGVsc1tNb2RlbE5hbWVzLk1vZGVsQXBwXSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9kZWxBcHAoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEFkZFZpZXdzKCkge1xuICAgICAgICB0aGlzLmRpY1ZpZXdzID0ge307XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tPj4+Pj4gUmVnaXN0ZXIgVmlld3MgSEVSRVxuICAgICAgICB0aGlzLmRpY1ZpZXdzW1ZpZXdOYW1lcy5WaWV3RGlhbG9nTm9ybWFsXSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlld0RpYWxvZ05vcm1hbCgpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpY1ZpZXdzW1ZpZXdOYW1lcy5WaWV3VG9hc3RdID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWV3VG9hc3QoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaWNWaWV3c1tWaWV3TmFtZXMuVmlld09wZW5OZXR3b3JraW5nXSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlld09wZW5OZXR3b3JraW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGljVmlld3NbVmlld05hbWVzLlZpZXdBcHBdID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWaWV3QXBwKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBBZGRDb250cm9sbGVycygpIHtcbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVycyA9IHt9O1xuICAgICAgICAvLy0tLS0tLS0tLS0+Pj4+PiBSZWdpc3RlciBDb250cm9sbGVycyBIRVJFXG5cbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVyc1tDb250cm9sbGVyTmFtZXMuQ29udHJvbGxlckRpYWxvZ05vcm1hbF0gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXJEaWFsb2dOb3JtYWwoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVyc1tDb250cm9sbGVyTmFtZXMuQ29udHJvbGxlclRvYXN0XSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbGxlclRvYXN0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGljQ29udHJvbGxlcnNbQ29udHJvbGxlck5hbWVzLkNvbnRyb2xsZXJPcGVuTmV0d29ya2luZ10gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xsZXJPcGVuTmV0d29ya2luZygpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRpY0NvbnRyb2xsZXJzW0NvbnRyb2xsZXJOYW1lcy5Db250cm9sbGVyQXBwXSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbGxlckFwcCgpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQWRkQ29udHJvbGxlck1zZ3MoKSB7XG4gICAgICAgIHRoaXMuZGljQ29udHJvbGxlck1zZ0xpc3RlbmluZyA9IHt9O1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLT4+Pj4+IFJlZ2lzdGVyIExpc3RlbmluZyBNZXNzYWdlcyBIRVJFXG4gICAgICAgIHRoaXMuZGljQ29udHJvbGxlck1zZ0xpc3RlbmluZ1tDb250cm9sbGVyTmFtZXMuQ29udHJvbGxlckRpYWxvZ05vcm1hbF0gPSBbTWVzc2FnZU5hbWVzLlNob3dEaWFsb2ddO1xuICAgICAgICB0aGlzLmRpY0NvbnRyb2xsZXJNc2dMaXN0ZW5pbmdbQ29udHJvbGxlck5hbWVzLkNvbnRyb2xsZXJUb2FzdF0gPSBbTWVzc2FnZU5hbWVzLlNob3dUb2FzdFVJXTtcbiAgICAgICAgdGhpcy5kaWNDb250cm9sbGVyTXNnTGlzdGVuaW5nW0NvbnRyb2xsZXJOYW1lcy5Db250cm9sbGVyT3Blbk5ldHdvcmtpbmddID0gW01lc3NhZ2VOYW1lcy5PcGVuTmV0d29ya0xvYWRpbmddO1xuXG4gICAgICAgIHRoaXMuZGljQ29udHJvbGxlck1zZ0xpc3RlbmluZ1tDb250cm9sbGVyTmFtZXMuQ29udHJvbGxlckFwcF0gPSBbXG4gICAgICAgICAgICBNZXNzYWdlTmFtZXMuU3RhcnRMb2dpbixcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLT4gIOS7peS4i+WGheWuueahhuaetuiwg+eUqFxuICAgIHB1YmxpYyBzdGF0aWMgZGljTW9kZWxzOiB7IFttb2RlTmFtZTogc3RyaW5nXTogKCkgPT4gTW9kZWwgfSA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgZGljVmlld3M6IHsgW3ZpZXdOYW1lOiBzdHJpbmddOiAoKSA9PiBWaWV3IH0gPSB7fTtcbiAgICBwdWJsaWMgc3RhdGljIGRpY0NvbnRyb2xsZXJzOiB7IFtjb250cm9sbGVyTmFtZTogc3RyaW5nXTogKCkgPT4gQ29udHJvbGxlciB9ID0ge307XG4gICAgcHVibGljIHN0YXRpYyBkaWNDb250cm9sbGVyTXNnTGlzdGVuaW5nOiB7IFtjb250cm9sbGVyTmFtZTogc3RyaW5nXTogQXJyYXk8c3RyaW5nPiB9ID0ge307XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuQWRkTW9kZWxzKCk7XG4gICAgICAgIHRoaXMuQWRkVmlld3MoKTtcbiAgICAgICAgdGhpcy5BZGRDb250cm9sbGVycygpO1xuICAgICAgICB0aGlzLkFkZENvbnRyb2xsZXJNc2dzKCk7XG4gICAgfVxufVxuIl19