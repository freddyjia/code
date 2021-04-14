"use strict";
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