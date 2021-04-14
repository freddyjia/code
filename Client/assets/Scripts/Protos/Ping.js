/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Ping || ($protobuf.roots.Ping = {});

$root.PingReq = (function() {

    /**
     * Properties of a PingReq.
     * @exports IPingReq
     * @interface IPingReq
     * @property {number|Long} timestamp PingReq timestamp
     */

    /**
     * Constructs a new PingReq.
     * @exports PingReq
     * @classdesc Represents a PingReq.
     * @implements IPingReq
     * @constructor
     * @param {IPingReq=} [p] Properties to set
     */
    function PingReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PingReq timestamp.
     * @member {number|Long} timestamp
     * @memberof PingReq
     * @instance
     */
    PingReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new PingReq instance using the specified properties.
     * @function create
     * @memberof PingReq
     * @static
     * @param {IPingReq=} [properties] Properties to set
     * @returns {PingReq} PingReq instance
     */
    PingReq.create = function create(properties) {
        return new PingReq(properties);
    };

    /**
     * Encodes the specified PingReq message. Does not implicitly {@link PingReq.verify|verify} messages.
     * @function encode
     * @memberof PingReq
     * @static
     * @param {IPingReq} m PingReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.timestamp);
        return w;
    };

    /**
     * Decodes a PingReq message from the specified reader or buffer.
     * @function decode
     * @memberof PingReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PingReq} PingReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PingReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.timestamp = r.int64();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("timestamp"))
            throw $util.ProtocolError("missing required 'timestamp'", { instance: m });
        return m;
    };

    return PingReq;
})();

$root.PingRes = (function() {

    /**
     * Properties of a PingRes.
     * @exports IPingRes
     * @interface IPingRes
     * @property {string} currentTime PingRes currentTime
     */

    /**
     * Constructs a new PingRes.
     * @exports PingRes
     * @classdesc Represents a PingRes.
     * @implements IPingRes
     * @constructor
     * @param {IPingRes=} [p] Properties to set
     */
    function PingRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PingRes currentTime.
     * @member {string} currentTime
     * @memberof PingRes
     * @instance
     */
    PingRes.prototype.currentTime = "";

    /**
     * Creates a new PingRes instance using the specified properties.
     * @function create
     * @memberof PingRes
     * @static
     * @param {IPingRes=} [properties] Properties to set
     * @returns {PingRes} PingRes instance
     */
    PingRes.create = function create(properties) {
        return new PingRes(properties);
    };

    /**
     * Encodes the specified PingRes message. Does not implicitly {@link PingRes.verify|verify} messages.
     * @function encode
     * @memberof PingRes
     * @static
     * @param {IPingRes} m PingRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PingRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.currentTime);
        return w;
    };

    /**
     * Decodes a PingRes message from the specified reader or buffer.
     * @function decode
     * @memberof PingRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PingRes} PingRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PingRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PingRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.currentTime = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("currentTime"))
            throw $util.ProtocolError("missing required 'currentTime'", { instance: m });
        return m;
    };

    return PingRes;
})();

module.exports = $root;
