/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.Handshake || ($protobuf.roots.Handshake = {});

$root.HandshakeRequest = (function() {

    /**
     * Properties of a HandshakeRequest.
     * @exports IHandshakeRequest
     * @interface IHandshakeRequest
     * @property {string} uid HandshakeRequest uid
     * @property {string} token HandshakeRequest token
     */

    /**
     * Constructs a new HandshakeRequest.
     * @exports HandshakeRequest
     * @classdesc Represents a HandshakeRequest.
     * @implements IHandshakeRequest
     * @constructor
     * @param {IHandshakeRequest=} [p] Properties to set
     */
    function HandshakeRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HandshakeRequest uid.
     * @member {string} uid
     * @memberof HandshakeRequest
     * @instance
     */
    HandshakeRequest.prototype.uid = "";

    /**
     * HandshakeRequest token.
     * @member {string} token
     * @memberof HandshakeRequest
     * @instance
     */
    HandshakeRequest.prototype.token = "";

    /**
     * Creates a new HandshakeRequest instance using the specified properties.
     * @function create
     * @memberof HandshakeRequest
     * @static
     * @param {IHandshakeRequest=} [properties] Properties to set
     * @returns {HandshakeRequest} HandshakeRequest instance
     */
    HandshakeRequest.create = function create(properties) {
        return new HandshakeRequest(properties);
    };

    /**
     * Encodes the specified HandshakeRequest message. Does not implicitly {@link HandshakeRequest.verify|verify} messages.
     * @function encode
     * @memberof HandshakeRequest
     * @static
     * @param {IHandshakeRequest} m HandshakeRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandshakeRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uid);
        w.uint32(18).string(m.token);
        return w;
    };

    /**
     * Decodes a HandshakeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HandshakeRequest} HandshakeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandshakeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HandshakeRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uid = r.string();
                break;
            case 2:
                m.token = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uid"))
            throw $util.ProtocolError("missing required 'uid'", { instance: m });
        if (!m.hasOwnProperty("token"))
            throw $util.ProtocolError("missing required 'token'", { instance: m });
        return m;
    };

    return HandshakeRequest;
})();

$root.HandshakeResponse = (function() {

    /**
     * Properties of a HandshakeResponse.
     * @exports IHandshakeResponse
     * @interface IHandshakeResponse
     * @property {number} statusCode HandshakeResponse statusCode
     * @property {string|null} [errorMsg] HandshakeResponse errorMsg
     */

    /**
     * Constructs a new HandshakeResponse.
     * @exports HandshakeResponse
     * @classdesc Represents a HandshakeResponse.
     * @implements IHandshakeResponse
     * @constructor
     * @param {IHandshakeResponse=} [p] Properties to set
     */
    function HandshakeResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * HandshakeResponse statusCode.
     * @member {number} statusCode
     * @memberof HandshakeResponse
     * @instance
     */
    HandshakeResponse.prototype.statusCode = 0;

    /**
     * HandshakeResponse errorMsg.
     * @member {string} errorMsg
     * @memberof HandshakeResponse
     * @instance
     */
    HandshakeResponse.prototype.errorMsg = "";

    /**
     * Creates a new HandshakeResponse instance using the specified properties.
     * @function create
     * @memberof HandshakeResponse
     * @static
     * @param {IHandshakeResponse=} [properties] Properties to set
     * @returns {HandshakeResponse} HandshakeResponse instance
     */
    HandshakeResponse.create = function create(properties) {
        return new HandshakeResponse(properties);
    };

    /**
     * Encodes the specified HandshakeResponse message. Does not implicitly {@link HandshakeResponse.verify|verify} messages.
     * @function encode
     * @memberof HandshakeResponse
     * @static
     * @param {IHandshakeResponse} m HandshakeResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandshakeResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.statusCode);
        if (m.errorMsg != null && m.hasOwnProperty("errorMsg"))
            w.uint32(18).string(m.errorMsg);
        return w;
    };

    /**
     * Decodes a HandshakeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HandshakeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HandshakeResponse} HandshakeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandshakeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.HandshakeResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.statusCode = r.int32();
                break;
            case 2:
                m.errorMsg = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("statusCode"))
            throw $util.ProtocolError("missing required 'statusCode'", { instance: m });
        return m;
    };

    return HandshakeResponse;
})();

module.exports = $root;
