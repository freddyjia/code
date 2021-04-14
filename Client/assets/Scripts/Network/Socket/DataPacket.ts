export class Package
{
    public msgID:number;
    // public length:number;
    public seq:number;
    public data:Uint8Array;
    // public dataRest:Uint8Array;
}

export default class DataPacket
{
    public static Packet(id:number,seq:number,data:Uint8Array):Uint8Array
    {
        if(data == null)
        {
            data = new Uint8Array(0);
        }
        
        let lengthData = data.length;
        let length = lengthData + 18;
        let finalData = new Uint8Array(length);
        let msgType:number;
        if(id == 0 || id == 1)
        {
            msgType = 0;
        }
        else
        {
            msgType = 1;
        }

        let id1 = id & 255;
        let id2 = (id>>8) & 255;
        let id3 = (id>>16) & 255;
        let id4 = (id>>24) & 255;

        let seq1 = seq & 255;
        let seq2 = (seq>>8) & 255;
        let seq3 = (seq>>16) & 255;
        let seq4 = (seq>>24) & 255;

        let length1 = length & 255;
        let length2 = (length>>8) & 255;
        let length3 = (length>>16) & 255;
        let length4 = (length>>24) & 255;

        let lengthData1 = lengthData & 255;
        let lengthData2 = (lengthData>>8) & 255;
        let lengthData3 = (lengthData>>16) & 255;
        let lengthData4 = (lengthData>>24) & 255;

        let platform = 0;

        finalData[0] = length4;
        finalData[1] = length3;
        finalData[2] = length2;
        finalData[3] = length1;
        finalData[4] = msgType;
        finalData[5] = platform;
        finalData[6] = seq4;
        finalData[7] = seq3;
        finalData[8] = seq2;
        finalData[9] = seq1;
        finalData[10] = id4;
        finalData[11] = id3;
        finalData[12] = id2;
        finalData[13] = id1;
        finalData[14] = lengthData4;
        finalData[15] = lengthData3;
        finalData[16] = lengthData2;
        finalData[17] = lengthData1;
        finalData.set(data,18);

        return finalData;
    }

    public static TryUnpacket(data:Uint8Array):boolean
    {
        if(data.length < 4)
        {
            return false;
        }
        let length = data[0]<<24 | data[1]<<16 | data[2]<<8 | data[3];
        if(data.length < length)
        {
            return false;
        }
        return true;
    }

    public static UnPacket(data:Uint8Array,packageArray:Array<Package>):Uint8Array
    {
        if(this.TryUnpacket(data) == false)
        {
            return data;
        }
        let length = data[0]<<24 | data[1]<<16 | data[2]<<8 | data[3];
        let msgType = data[4];
        let platform = data[5];
        let seq = data[6]<<24 | data[7]<<16 | data[8]<<8 | data[9];
        let msgID = data[10]<<24 | data[11]<<16 | data[12]<<8 | data[13];
        let lengthData = data[14]<<24 | data[15]<<16 | data[16]<<8 | data[17];
        
        // cc.error("UnPacket data " + data);
        // cc.error("UnPacket seq " + seq + " length " + length + " msgID " + msgID);
        let pack:Package = new Package();
        pack.data = data.subarray(18,18 + lengthData);
        // pack.length = length;
        pack.msgID = msgID;
        pack.seq = seq;
        packageArray.push(pack);

        if(data.length > length)
        {
            data = data.subarray(length,data.length - 1);
            return this.UnPacket(data,packageArray);
        }
        return new Uint8Array(0);
    }

}
