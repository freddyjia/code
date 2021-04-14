export function JSGenQrcode() 
{ 

}

JSGenQrcode.Gen = function(url)
{
    let QRCode = require("./qrcode");
    var qrcode = new QRCode(-1, 2);
    qrcode.addData(url);
    qrcode.make();

    let num = qrcode.getModuleCount();
    // console.log(" num " + num);

    let array = new Array();
    for(var i=0;i<num;i++)
    {
        let tmpArray = new Array();
        for(var j=0;j<num;j++)
        {
            tmpArray.push(qrcode.isDark(i, j));
        }
        array.push(tmpArray);
    }
    
    return array;
}
