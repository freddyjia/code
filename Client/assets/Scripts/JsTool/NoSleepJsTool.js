export function NoSleepJsTool() 
{ 

}

NoSleepJsTool.Run = function()
{
    let NoSleep = require("./NoSleep.js");
    var noSleep = new NoSleep();
    noSleep.enable();
    
   
}
