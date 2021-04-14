import TimerManager from "../Components/TimerManager";
import NodeUtil from "./NodeUtil";
import XTweenObserver from "./XTween/Base/XTweenObserver";
import Vec2 = cc.Vec2;
import ccC from "./ccC";

export default class Extension {
    public static SearchNode(transform: cc.Node, childname: string): cc.Node | null {
        for (let i = 0; i < transform.childrenCount; i++) {
            let child = transform.children[i]
            if (child.name == childname) {
                return child
            }
            let result = Extension.SearchNode(child, childname)
            if (result != null) {
                return result
            }
        }
        return null
    }

    public static DirGetAbTrans(path, callback: (err: Error, prefab: cc.Node) => void, transParent) {
        Extension.DirGetAbObj(path, (err: Error, prefab: cc.Node) => {
            if (transParent != null) {
                prefab.parent = (transParent)
                prefab.scale = 1
                prefab.position = Vec2.ZERO
                if (callback != null) {
                    callback(err, prefab)
                }
            }
        })
    }


    public static SearchSprite(transform: cc.Node, childname: string): cc.Sprite | null {
        let node = Extension.SearchNode(transform, childname)
        if (node != null) {
            return node.getComponent(cc.Sprite)
        }
        return null
    }

    public static SearchBtn(transform: cc.Node, childname: string): cc.Button | null {
        let node = Extension.SearchNode(transform, childname)
        if (node != null) {
            return node.getComponent(cc.Button)
        }
        return null
    }

    public static SearchTxt(transform: cc.Node, childname: string): cc.Label | null {
        let node = Extension.SearchNode(transform, childname)
        if (node != null) {
            return node.getComponent(cc.Label)
        }
        return null
    }

    public static GetGenderByName(headName: string | null): boolean {
        if (headName == null) {
            return true
        }
        if (headName.length == null) {
            return true
        }
        return headName.indexOf("_M_") != -1
    }


    public static DirGetAbObj(path: string, callback: (err: Error, prefab: cc.Node) => void) {
        ccC.loadRes(path, cc.Prefab, (newError: Error, node: any) => {
            if (newError == null) {
                callback(newError, cc.instantiate(node))
            } else {
                callback(newError, null)
            }

        })
    }

    public static ClearArr(arr) {
        if (arr == null) {
            return
        }
        let len = arr.length
        for (let i = 0; i < len; i++) {
            arr.shift()
        }
    }

    public static SetAsLastSibling(trans: cc.Node) {
        let total = trans.parent.childrenCount - 1
        trans.setSiblingIndex(total)
    }

    public static JSObjectLength(obj): number {
        let cnt = 0
        for (let key in obj) {
            cnt = cnt + 1
        }
        return cnt
    }

    public static DelayCall(func, delay, parm = null, repeatCnt = 0, interval = null, keepAlive = false): string {
        let _interval = interval
        if (_interval == null) {
            _interval = delay
        }
        return TimerManager.GetInstance().CallActionDelay(func, delay, parm, repeatCnt, _interval, keepAlive)
    }

    public static CancelDelayCall(id) {
        TimerManager.GetInstance().DeleteTimer(id)
    }

    public static DirGetAbSprite(img: cc.Sprite, atlasPath: string, spriteName: string, finishCallback: () => void = null) {
        NodeUtil.SetSpriteFrame(img, atlasPath, spriteName, finishCallback)
    }

    public static ClearXTween(node: cc.Node) {
        let ob = node.getComponent(XTweenObserver)
        if (ob != null) {
            node.removeComponent(ob)
        }
    }

    public static GetTimeString(time) {
        let Day = 24 * 3600 * 1000;
        let date = new Date();
        date.setTime(Date.now());
        let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        let msgTime = Number(time);
        if (today.getTime() <= msgTime)
        {
            date = new Date();
            date.setTime(msgTime);
            let hour = date.getHours()<10 ? "0"+date.getHours() : date.getHours();
            let min = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
            return hour + ":" + min;
        }
        else
        {
            let diff = today.getTime() - msgTime;
            if (diff <= Day)
            {
                return "昨天";
            }
            else if (diff <= 2*Day)
            {
                return "前天";
            }
            else
            {
                return "3天前";
            }
        }
    }
}