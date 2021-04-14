const {ccclass, property} = cc._decorator;

@ccclass
export default class Bezier extends cc.Component {


    private timeScale: number
    private tarPos: cc.Vec2
    private centerPos: cc.Vec2
    private startPos: cc.Vec2
    private finishCallback
    private finishCallbackParm
    private hasInitData
    private timer


    protected start(): void {
    }


    protected update(dt: number): void {
        if (!this.hasInitData) {
            return
        }
        if (this.timer <= 1) {
            let finalPos = new cc.Vec2(
                this.startPos.x * (1 - this.timer) * (1 - this.timer) + this.centerPos.x * 2 * this.timer * (1 - this.timer) + this.tarPos.x * this.timer * this.timer
                ,
                this.startPos.y * (1 - this.timer) * (1 - this.timer) + this.centerPos.y * 2 * this.timer * (1 - this.timer) + this.tarPos.y * this.timer * this.timer)
            this.node.position = finalPos
            this.timer = this.timer + dt * this.timeScale
        } else {
            this.node.position = this.tarPos
            this.hasInitData = false
            if (this.finishCallback != null) {
                this.finishCallback(this.finishCallbackParm, this.node)
            }
        }
    }

    public SetMoveTrail(startPosX: number, startPosY: number, centerPosX: number, centerPosY: number, tarPosX: number, tarPosY: number, timeScale: number, finishCallbackParm: any, finishCallback: (parm: any, trans: cc.Node) => void) {

        this.timeScale = timeScale
        this.tarPos = new cc.Vec2(tarPosX, tarPosY)
        this.centerPos = new cc.Vec2(centerPosX, centerPosY)

        this.startPos = new cc.Vec2(startPosX, startPosY)
        this.finishCallback = finishCallback
        this.finishCallbackParm = finishCallbackParm

        this.hasInitData = true

        this.node.position = this.startPos

        this.timer = 0


    }

}