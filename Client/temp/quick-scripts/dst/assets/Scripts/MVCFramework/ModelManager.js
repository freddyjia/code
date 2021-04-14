
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MVCFramework/ModelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3553esqZL5Mt5BCzKgr36F9', 'ModelManager');
// Scripts/MVCFramework/ModelManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVCRegister_1 = require("../Modules/MVCRegister");
var MessageCenter_1 = require("./MessageCenter");
var ModelManager = /** @class */ (function () {
    function ModelManager() {
    }
    ModelManager.GetModel = function (modelName) {
        if (this.dicModels[modelName] == null) {
            var model = MVCRegister_1.MVCRegister.dicModels[modelName]();
            model.sendMsgCallBack = function (msg, msgBody) {
                MessageCenter_1.default.SendMessage(msg, msgBody);
            };
            model.Init();
            this.dicModels[modelName] = model;
        }
        return this.dicModels[modelName];
    };
    ModelManager.Clean = function () {
        for (var modelName in this.dicModels) {
            this.dicModels[modelName].Clean();
        }
        this.dicModels = {};
    };
    ModelManager.dicModels = {};
    return ModelManager;
}());
exports.default = ModelManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTVZDRnJhbWV3b3JrXFxNb2RlbE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBcUQ7QUFDckQsaURBQTRDO0FBRTVDO0lBQUE7SUEyQkEsQ0FBQztJQXhCaUIscUJBQVEsR0FBdEIsVUFBdUIsU0FBZ0I7UUFFbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFDcEM7WUFDSSxJQUFJLEtBQUssR0FBUyx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ3JELEtBQUssQ0FBQyxlQUFlLEdBQUcsVUFBQyxHQUFHLEVBQUMsT0FBTztnQkFDaEMsdUJBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFYSxrQkFBSyxHQUFuQjtRQUVJLEtBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFDbkM7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXhCYyxzQkFBUyxHQUE4QixFQUFFLENBQUM7SUF5QjdELG1CQUFDO0NBM0JELEFBMkJDLElBQUE7a0JBM0JvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gXCIuL01vZGVsXCI7XG5pbXBvcnQgeyBNVkNSZWdpc3RlciB9IGZyb20gXCIuLi9Nb2R1bGVzL01WQ1JlZ2lzdGVyXCI7XG5pbXBvcnQgTWVzc2FnZUNlbnRlciBmcm9tIFwiLi9NZXNzYWdlQ2VudGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsTWFuYWdlclxue1xuICAgIHByaXZhdGUgc3RhdGljIGRpY01vZGVsczp7W21vZGVsTmFtZTpzdHJpbmddOk1vZGVsfSA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0TW9kZWwobW9kZWxOYW1lOnN0cmluZyk6TW9kZWxcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZGljTW9kZWxzW21vZGVsTmFtZV0gPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG1vZGVsOk1vZGVsID0gTVZDUmVnaXN0ZXIuZGljTW9kZWxzW21vZGVsTmFtZV0oKTtcbiAgICAgICAgICAgIG1vZGVsLnNlbmRNc2dDYWxsQmFjayA9IChtc2csbXNnQm9keSk9PntcbiAgICAgICAgICAgICAgICBNZXNzYWdlQ2VudGVyLlNlbmRNZXNzYWdlKG1zZyxtc2dCb2R5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtb2RlbC5Jbml0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY01vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmRpY01vZGVsc1ttb2RlbE5hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQ2xlYW4oKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBtb2RlbE5hbWUgaW4gdGhpcy5kaWNNb2RlbHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGljTW9kZWxzW21vZGVsTmFtZV0uQ2xlYW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGljTW9kZWxzID0ge307XG4gICAgfVxufVxuIl19