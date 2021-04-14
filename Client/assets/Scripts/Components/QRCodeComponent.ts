import { JSGenQrcode } from "../JsTool/JSGenQrcode";

const {ccclass, property} = cc._decorator;

@ccclass

export default class QRCodeComponent extends cc.Component 
{

    public Gen(url:string)
    {
        let graphic = this.node.getComponent(cc.Graphics);
        if(graphic == null)
        {
            graphic = this.node.addComponent(cc.Graphics);
        }
        graphic.clear();
        graphic.fillColor = cc.Color.BLACK;
        let size = this.node.width;
        let data = JSGenQrcode.Gen(url);
        let num = data.length;
        var tileW = size / num;
		var tileH = size / num;
        for(let row=0;row<num;row++)
        {
            for(let col=0;col<num;col++)
            {
                if(data[row][col])
                {
                    var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    graphic.rect(Math.round(col * tileW) - size / 2, size - tileH - Math.round(row * tileH) - size / 2, w, h);
                    graphic.fill();
                }
                else
                {
                    // graphic.fillColor = cc.Color.WHITE;
                    // var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    // var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    // graphic.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
                    // graphic.fill();
                }
            }
        }
    }

}
