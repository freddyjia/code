"use strict";
cc._RF.push(module, '0f2c3a4rqVJYYCDqmzl8Dgb', 'DataPacket');
// Scripts/Network/Socket/DataPacket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Package = /** @class */ (function () {
    function Package() {
    }
    return Package;
}());
exports.Package = Package;
var DataPacket = /** @class */ (function () {
    function DataPacket() {
    }
    DataPacket.Packet = function (id, seq, data) {
        if (data == null) {
            data = new Uint8Array(0);
        }
        var lengthData = data.length;
        var length = lengthData + 18;
        var finalData = new Uint8Array(length);
        var msgType;
        if (id == 0 || id == 1) {
            msgType = 0;
        }
        else {
            msgType = 1;
        }
        var id1 = id & 255;
        var id2 = (id >> 8) & 255;
        var id3 = (id >> 16) & 255;
        var id4 = (id >> 24) & 255;
        var seq1 = seq & 255;
        var seq2 = (seq >> 8) & 255;
        var seq3 = (seq >> 16) & 255;
        var seq4 = (seq >> 24) & 255;
        var length1 = length & 255;
        var length2 = (length >> 8) & 255;
        var length3 = (length >> 16) & 255;
        var length4 = (length >> 24) & 255;
        var lengthData1 = lengthData & 255;
        var lengthData2 = (lengthData >> 8) & 255;
        var lengthData3 = (lengthData >> 16) & 255;
        var lengthData4 = (lengthData >> 24) & 255;
        var platform = 0;
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
        finalData.set(data, 18);
        return finalData;
    };
    DataPacket.TryUnpacket = function (data) {
        if (data.length < 4) {
            return false;
        }
        var length = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3];
        if (data.length < length) {
            return false;
        }
        return true;
    };
    DataPacket.UnPacket = function (data, packageArray) {
        if (this.TryUnpacket(data) == false) {
            return data;
        }
        var length = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3];
        var msgType = data[4];
        var platform = data[5];
        var seq = data[6] << 24 | data[7] << 16 | data[8] << 8 | data[9];
        var msgID = data[10] << 24 | data[11] << 16 | data[12] << 8 | data[13];
        var lengthData = data[14] << 24 | data[15] << 16 | data[16] << 8 | data[17];
        // cc.error("UnPacket data " + data);
        // cc.error("UnPacket seq " + seq + " length " + length + " msgID " + msgID);
        var pack = new Package();
        pack.data = data.subarray(18, 18 + lengthData);
        // pack.length = length;
        pack.msgID = msgID;
        pack.seq = seq;
        packageArray.push(pack);
        if (data.length > length) {
            data = data.subarray(length, data.length - 1);
            return this.UnPacket(data, packageArray);
        }
        return new Uint8Array(0);
    };
    return DataPacket;
}());
exports.default = DataPacket;

cc._RF.pop();