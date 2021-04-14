
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tools/NodeUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68bd8wVEnJNIY7EkAypCzql', 'NodeUtil');
// Scripts/Tools/NodeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccC_1 = require("./ccC");
/**
 * 这个类里面仅限与添加和 Node 有关的共用方法，其他的请写到 Util.ts 脚本中
 */
var NodeUtil = /** @class */ (function () {
    function NodeUtil() {
    }
    /**
     * 递归查找指定根节点下指定名字的字节点，会递归所有层级
     * @param node 根节点
     * @param childName 字节点名字
     */
    NodeUtil.SearchChild = function (node, childName) {
        for (var index = 0; index < node.childrenCount; index++) {
            var element = node.children[index];
            if (element.name == childName) {
                return element;
            }
            var result = this.SearchChild(element, childName);
            if (result != null) {
                return result;
            }
        }
        return null;
    };
    NodeUtil.SearchButton = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.Button);
    };
    NodeUtil.SearchLabel = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.Label);
    };
    NodeUtil.SearchRichText = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.RichText);
    };
    NodeUtil.SearchEditBox = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.EditBox);
    };
    NodeUtil.SearchSprite = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.Sprite);
    };
    NodeUtil.SearchSlider = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.Slider);
    };
    NodeUtil.SearchToggle = function (node, childName) {
        return this.SearchChild(node, childName).getComponent(cc.Toggle);
    };
    /**
     * 设置图集
     * @param sprite
     * @param atlas
     * @param spriteName 不传这个参数表示是加载散图
     * @param finishCallback
     */
    NodeUtil.SetSpriteFrame = function (sprite, atlasPath, spriteName, finishCallback) {
        if (spriteName === void 0) { spriteName = null; }
        if (finishCallback === void 0) { finishCallback = null; }
        if (spriteName == undefined || spriteName == null || spriteName.length == 0) {
            ccC_1.default.loadRes(atlasPath, cc.SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    cc.error("err  " + err.message || err);
                    return;
                }
                sprite.spriteFrame = spriteFrame;
                if (finishCallback != null)
                    finishCallback();
            });
        }
        else {
            ccC_1.default.loadRes(atlasPath, cc.SpriteAtlas, function (err, atlas) {
                if (err) {
                    cc.error(err.message || err);
                }
                else {
                    var frame = atlas.getSpriteFrame(spriteName);
                    if (frame) {
                        sprite.spriteFrame = frame;
                        if (finishCallback != null)
                            finishCallback();
                    }
                }
            });
        }
    };
    /**
     * 获取指定根节点下所有的子节点[包含传入的根节点]，尽量保证所有的字节点名字都不一样
     * @param root 根节点
     * @param dic 保存所有字节点的字典
     */
    NodeUtil.GetAllChildren = function (root, dic) {
        dic[root.name] = root;
        for (var index = 0; index < root.childrenCount; index++) {
            var element = root.children[index];
            this.GetAllChildren(element, dic);
        }
    };
    /**
     * 查找或者创建一个新的子节点
     * @param container 根节点
     * @param index 指定获取的节点下标
     * @param createIndex 可以指定复制的节点
     */
    NodeUtil.GetOrCreateChild = function (container, index, createIndex) {
        if (createIndex === void 0) { createIndex = null; }
        var child;
        if (index < container.childrenCount) {
            child = container.children[index];
        }
        else {
            var cIndex = createIndex || 0;
            child = cc.instantiate(container.children[cIndex]);
            child.parent = container;
        }
        child.active = true;
        return child;
    };
    NodeUtil.GetNodeDic = function (node, dic) {
        if (dic === void 0) { dic = null; }
        if (dic == null) {
            dic = {};
        }
        dic[node.name] = node;
        for (var i = 0; i < node.childrenCount; i++) {
            this.GetNodeDic(node.children[i], dic);
        }
        return dic;
    };
    /**
     * 用于两个node不在同一个父节点下时，设置相同的位置
     * @param node 需要设置位置的node
     * @param followNode 目标位置node
     */
    NodeUtil.FollowPosition = function (node, tofollowNode) {
        var worldPos = tofollowNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var localPos = node.parent.convertToNodeSpaceAR(worldPos);
        node.position = localPos;
    };
    return NodeUtil;
}());
exports.default = NodeUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVG9vbHNcXE5vZGVVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQXdCO0FBRXhCOztHQUVHO0FBQ0g7SUFBQTtJQThJQSxDQUFDO0lBN0lHOzs7O09BSUc7SUFDVyxvQkFBVyxHQUF6QixVQUEwQixJQUFhLEVBQUUsU0FBaUI7UUFDdEQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO2dCQUMzQixPQUFPLE9BQU8sQ0FBQzthQUNsQjtZQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDaEIsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBWSxHQUFuQixVQUFvQixJQUFhLEVBQUUsU0FBaUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxvQkFBVyxHQUFsQixVQUFtQixJQUFhLEVBQUUsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSx1QkFBYyxHQUFyQixVQUFzQixJQUFhLEVBQUUsU0FBaUI7UUFDbEQsT0FBTyxJ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LFlBQW9CO1FBRTFELElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTlJQSxBQThJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjQyBmcm9tIFwiLi9jY0NcIjtcblxuLyoqXG4gKiDov5nkuKrnsbvph4zpnaLku4XpmZDkuI7mt7vliqDlkowgTm9kZSDmnInlhbPnmoTlhbHnlKjmlrnms5XvvIzlhbbku5bnmoTor7flhpnliLAgVXRpbC50cyDohJrmnKzkuK1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVV0aWwge1xuICAgIC8qKlxuICAgICAqIOmAkuW9kuafpeaJvuaMh+WumuagueiKgueCueS4i+aMh+WumuWQjeWtl+eahOWtl+iKgueCue+8jOS8mumAkuW9kuaJgOacieWxgue6p1xuICAgICAqIEBwYXJhbSBub2RlIOagueiKgueCuVxuICAgICAqIEBwYXJhbSBjaGlsZE5hbWUg5a2X6IqC54K55ZCN5a2XXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBTZWFyY2hDaGlsZChub2RlOiBjYy5Ob2RlLCBjaGlsZE5hbWU6IHN0cmluZyk6IGNjLk5vZGUge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZS5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IGNoaWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuU2VhcmNoQ2hpbGQoZWxlbWVudCwgY2hpbGROYW1lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaEJ1dHRvbihub2RlOiBjYy5Ob2RlLCBjaGlsZE5hbWU6IHN0cmluZyk6IGNjLkJ1dHRvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLlNlYXJjaENoaWxkKG5vZGUsIGNoaWxkTmFtZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaExhYmVsKG5vZGU6IGNjLk5vZGUsIGNoaWxkTmFtZTogc3RyaW5nKTogY2MuTGFiZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5TZWFyY2hDaGlsZChub2RlLCBjaGlsZE5hbWUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaFJpY2hUZXh0KG5vZGU6IGNjLk5vZGUsIGNoaWxkTmFtZTogc3RyaW5nKTogY2MuUmljaFRleHQge1xuICAgICAgICByZXR1cm4gdGhpcy5TZWFyY2hDaGlsZChub2RlLCBjaGlsZE5hbWUpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaEVkaXRCb3gobm9kZTogY2MuTm9kZSwgY2hpbGROYW1lOiBzdHJpbmcpOiBjYy5FZGl0Qm94IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuU2VhcmNoQ2hpbGQobm9kZSwgY2hpbGROYW1lKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaFNwcml0ZShub2RlOiBjYy5Ob2RlLCBjaGlsZE5hbWU6IHN0cmluZyk6IGNjLlNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNlYXJjaENoaWxkKG5vZGUsIGNoaWxkTmFtZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaFNsaWRlcihub2RlOiBjYy5Ob2RlLCBjaGlsZE5hbWU6IHN0cmluZyk6IGNjLlNsaWRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLlNlYXJjaENoaWxkKG5vZGUsIGNoaWxkTmFtZSkuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgfVxuXG4gICAgc3RhdGljIFNlYXJjaFRvZ2dsZShub2RlOiBjYy5Ob2RlLCBjaGlsZE5hbWU6IHN0cmluZyk6IGNjLlRvZ2dsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLlNlYXJjaENoaWxkKG5vZGUsIGNoaWxkTmFtZSkuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5Zu+6ZuGXG4gICAgICogQHBhcmFtIHNwcml0ZVxuICAgICAqIEBwYXJhbSBhdGxhc1xuICAgICAqIEBwYXJhbSBzcHJpdGVOYW1lIOS4jeS8oOi/meS4quWPguaVsOihqOekuuaYr+WKoOi9veaVo+WbvlxuICAgICAqIEBwYXJhbSBmaW5pc2hDYWxsYmFja1xuICAgICAqL1xuICAgIHN0YXRpYyBTZXRTcHJpdGVGcmFtZShzcHJpdGU6IGNjLlNwcml0ZSwgYXRsYXNQYXRoOiBzdHJpbmcsIHNwcml0ZU5hbWU6IHN0cmluZz1udWxsLCBmaW5pc2hDYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChzcHJpdGVOYW1lPT11bmRlZmluZWQgfHwgc3ByaXRlTmFtZT09bnVsbCB8fCBzcHJpdGVOYW1lLmxlbmd0aCA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjY0MubG9hZFJlcyhhdGxhc1BhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciAgXCIgKyBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGlmIChmaW5pc2hDYWxsYmFjayAhPSBudWxsKSBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjY0MubG9hZFJlcyhhdGxhc1BhdGgsIGNjLlNwcml0ZUF0bGFzLCAoZXJyLCBhdGxhczogY2MuU3ByaXRlQXRsYXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKHNwcml0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaENhbGxiYWNrICE9IG51bGwpIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaMh+WumuagueiKgueCueS4i+aJgOacieeahOWtkOiKgueCuVvljIXlkKvkvKDlhaXnmoTmoLnoioLngrld77yM5bC96YeP5L+d6K+B5omA5pyJ55qE5a2X6IqC54K55ZCN5a2X6YO95LiN5LiA5qC3XG4gICAgICogQHBhcmFtIHJvb3Qg5qC56IqC54K5XG4gICAgICogQHBhcmFtIGRpYyDkv53lrZjmiYDmnInlrZfoioLngrnnmoTlrZflhbhcbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0QWxsQ2hpbGRyZW4ocm9vdDogY2MuTm9kZSwgZGljOiB7IFtuYW1lOiBzdHJpbmddOiBjYy5Ob2RlIH0pIHtcbiAgICAgICAgZGljW3Jvb3QubmFtZV0gPSByb290O1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcm9vdC5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcm9vdC5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICB0aGlzLkdldEFsbENoaWxkcmVuKGVsZW1lbnQsIGRpYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn6Xmib7miJbogIXliJvlu7rkuIDkuKrmlrDnmoTlrZDoioLngrlcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIOagueiKgueCuVxuICAgICAqIEBwYXJhbSBpbmRleCDmjIflrprojrflj5bnmoToioLngrnkuIvmoIdcbiAgICAgKiBAcGFyYW0gY3JlYXRlSW5kZXgg5Y+v5Lul5oyH5a6a5aSN5Yi255qE6IqC54K5XG4gICAgICovXG4gICAgc3RhdGljIEdldE9yQ3JlYXRlQ2hpbGQoY29udGFpbmVyOmNjLk5vZGUsaW5kZXg6bnVtYmVyLGNyZWF0ZUluZGV4Om51bWJlciA9IG51bGwpOmNjLk5vZGV7XG4gICAgICAgIGxldCBjaGlsZDpjYy5Ob2RlXG4gICAgICAgIGlmKGluZGV4PGNvbnRhaW5lci5jaGlsZHJlbkNvdW50KXtcbiAgICAgICAgICAgIGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2luZGV4XVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBjSW5kZXggPSBjcmVhdGVJbmRleCB8fCAwXG4gICAgICAgICAgICBjaGlsZCA9IGNjLmluc3RhbnRpYXRlKGNvbnRhaW5lci5jaGlsZHJlbltjSW5kZXhdKVxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gY29udGFpbmVyXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldE5vZGVEaWMobm9kZTpjYy5Ob2RlLGRpYzp7W25hbWU6c3RyaW5nXTpjYy5Ob2RlfT1udWxsKTp7W25hbWU6c3RyaW5nXTpjYy5Ob2RlfVxuICAgIHtcbiAgICAgICAgaWYoZGljID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpYyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGRpY1tub2RlLm5hbWVdID0gbm9kZTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxub2RlLmNoaWxkcmVuQ291bnQ7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLkdldE5vZGVEaWMobm9kZS5jaGlsZHJlbltpXSxkaWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlKjkuo7kuKTkuKpub2Rl5LiN5Zyo5ZCM5LiA5Liq54i26IqC54K55LiL5pe277yM6K6+572u55u45ZCM55qE5L2N572uXG4gICAgICogQHBhcmFtIG5vZGUg6ZyA6KaB6K6+572u5L2N572u55qEbm9kZVxuICAgICAqIEBwYXJhbSBmb2xsb3dOb2RlIOebruagh+S9jee9rm5vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEZvbGxvd1Bvc2l0aW9uKG5vZGU6Y2MuTm9kZSx0b2ZvbGxvd05vZGU6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRvZm9sbG93Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgbGV0IGxvY2FsUG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gbG9jYWxQb3M7XG4gICAgfVxufVxuIl19