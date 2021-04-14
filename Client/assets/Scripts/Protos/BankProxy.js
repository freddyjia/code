/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.BankProxy || ($protobuf.roots.BankProxy = {});

$root.LoginReq = (function() {

    /**
     * Properties of a LoginReq.
     * @exports ILoginReq
     * @interface ILoginReq
     * @property {string} playerId LoginReq playerId
     */

    /**
     * Constructs a new LoginReq.
     * @exports LoginReq
     * @classdesc Represents a LoginReq.
     * @implements ILoginReq
     * @constructor
     * @param {ILoginReq=} [p] Properties to set
     */
    function LoginReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginReq playerId.
     * @member {string} playerId
     * @memberof LoginReq
     * @instance
     */
    LoginReq.prototype.playerId = "";

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @function create
     * @memberof LoginReq
     * @static
     * @param {ILoginReq=} [properties] Properties to set
     * @returns {LoginReq} LoginReq instance
     */
    LoginReq.create = function create(properties) {
        return new LoginReq(properties);
    };

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link LoginReq.verify|verify} messages.
     * @function encode
     * @memberof LoginReq
     * @static
     * @param {ILoginReq} m LoginReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.playerId);
        return w;
    };

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof LoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginReq} LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        return m;
    };

    return LoginReq;
})();

$root.LoginRes = (function() {

    /**
     * Properties of a LoginRes.
     * @exports ILoginRes
     * @interface ILoginRes
     * @property {boolean} success LoginRes success
     * @property {string|null} [tips] LoginRes tips
     */

    /**
     * Constructs a new LoginRes.
     * @exports LoginRes
     * @classdesc Represents a LoginRes.
     * @implements ILoginRes
     * @constructor
     * @param {ILoginRes=} [p] Properties to set
     */
    function LoginRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * LoginRes success.
     * @member {boolean} success
     * @memberof LoginRes
     * @instance
     */
    LoginRes.prototype.success = false;

    /**
     * LoginRes tips.
     * @member {string} tips
     * @memberof LoginRes
     * @instance
     */
    LoginRes.prototype.tips = "";

    /**
     * Creates a new LoginRes instance using the specified properties.
     * @function create
     * @memberof LoginRes
     * @static
     * @param {ILoginRes=} [properties] Properties to set
     * @returns {LoginRes} LoginRes instance
     */
    LoginRes.create = function create(properties) {
        return new LoginRes(properties);
    };

    /**
     * Encodes the specified LoginRes message. Does not implicitly {@link LoginRes.verify|verify} messages.
     * @function encode
     * @memberof LoginRes
     * @static
     * @param {ILoginRes} m LoginRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a LoginRes message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {LoginRes} LoginRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.LoginRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return LoginRes;
})();

$root.ProxyInfoReq = (function() {

    /**
     * Properties of a ProxyInfoReq.
     * @exports IProxyInfoReq
     * @interface IProxyInfoReq
     * @property {string} bankProxyId ProxyInfoReq bankProxyId
     */

    /**
     * Constructs a new ProxyInfoReq.
     * @exports ProxyInfoReq
     * @classdesc Represents a ProxyInfoReq.
     * @implements IProxyInfoReq
     * @constructor
     * @param {IProxyInfoReq=} [p] Properties to set
     */
    function ProxyInfoReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ProxyInfoReq bankProxyId.
     * @member {string} bankProxyId
     * @memberof ProxyInfoReq
     * @instance
     */
    ProxyInfoReq.prototype.bankProxyId = "";

    /**
     * Creates a new ProxyInfoReq instance using the specified properties.
     * @function create
     * @memberof ProxyInfoReq
     * @static
     * @param {IProxyInfoReq=} [properties] Properties to set
     * @returns {ProxyInfoReq} ProxyInfoReq instance
     */
    ProxyInfoReq.create = function create(properties) {
        return new ProxyInfoReq(properties);
    };

    /**
     * Encodes the specified ProxyInfoReq message. Does not implicitly {@link ProxyInfoReq.verify|verify} messages.
     * @function encode
     * @memberof ProxyInfoReq
     * @static
     * @param {IProxyInfoReq} m ProxyInfoReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProxyInfoReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.bankProxyId);
        return w;
    };

    /**
     * Decodes a ProxyInfoReq message from the specified reader or buffer.
     * @function decode
     * @memberof ProxyInfoReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ProxyInfoReq} ProxyInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProxyInfoReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ProxyInfoReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bankProxyId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bankProxyId"))
            throw $util.ProtocolError("missing required 'bankProxyId'", { instance: m });
        return m;
    };

    return ProxyInfoReq;
})();

$root.ProxyInfoRsp = (function() {

    /**
     * Properties of a ProxyInfoRsp.
     * @exports IProxyInfoRsp
     * @interface IProxyInfoRsp
     * @property {Array.<BankType>|null} [bankTypes] ProxyInfoRsp bankTypes
     */

    /**
     * Constructs a new ProxyInfoRsp.
     * @exports ProxyInfoRsp
     * @classdesc Represents a ProxyInfoRsp.
     * @implements IProxyInfoRsp
     * @constructor
     * @param {IProxyInfoRsp=} [p] Properties to set
     */
    function ProxyInfoRsp(p) {
        this.bankTypes = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ProxyInfoRsp bankTypes.
     * @member {Array.<BankType>} bankTypes
     * @memberof ProxyInfoRsp
     * @instance
     */
    ProxyInfoRsp.prototype.bankTypes = $util.emptyArray;

    /**
     * Creates a new ProxyInfoRsp instance using the specified properties.
     * @function create
     * @memberof ProxyInfoRsp
     * @static
     * @param {IProxyInfoRsp=} [properties] Properties to set
     * @returns {ProxyInfoRsp} ProxyInfoRsp instance
     */
    ProxyInfoRsp.create = function create(properties) {
        return new ProxyInfoRsp(properties);
    };

    /**
     * Encodes the specified ProxyInfoRsp message. Does not implicitly {@link ProxyInfoRsp.verify|verify} messages.
     * @function encode
     * @memberof ProxyInfoRsp
     * @static
     * @param {IProxyInfoRsp} m ProxyInfoRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProxyInfoRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bankTypes != null && m.bankTypes.length) {
            for (var i = 0; i < m.bankTypes.length; ++i)
                w.uint32(8).int32(m.bankTypes[i]);
        }
        return w;
    };

    /**
     * Decodes a ProxyInfoRsp message from the specified reader or buffer.
     * @function decode
     * @memberof ProxyInfoRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ProxyInfoRsp} ProxyInfoRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProxyInfoRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ProxyInfoRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.bankTypes && m.bankTypes.length))
                    m.bankTypes = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.bankTypes.push(r.int32());
                } else
                    m.bankTypes.push(r.int32());
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ProxyInfoRsp;
})();

$root.SubmitDepositReq = (function() {

    /**
     * Properties of a SubmitDepositReq.
     * @exports ISubmitDepositReq
     * @interface ISubmitDepositReq
     * @property {string} bankProxyId SubmitDepositReq bankProxyId
     * @property {string} playerId SubmitDepositReq playerId
     * @property {BankType} bankType SubmitDepositReq bankType
     * @property {number} depositAmount SubmitDepositReq depositAmount
     */

    /**
     * Constructs a new SubmitDepositReq.
     * @exports SubmitDepositReq
     * @classdesc Represents a SubmitDepositReq.
     * @implements ISubmitDepositReq
     * @constructor
     * @param {ISubmitDepositReq=} [p] Properties to set
     */
    function SubmitDepositReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SubmitDepositReq bankProxyId.
     * @member {string} bankProxyId
     * @memberof SubmitDepositReq
     * @instance
     */
    SubmitDepositReq.prototype.bankProxyId = "";

    /**
     * SubmitDepositReq playerId.
     * @member {string} playerId
     * @memberof SubmitDepositReq
     * @instance
     */
    SubmitDepositReq.prototype.playerId = "";

    /**
     * SubmitDepositReq bankType.
     * @member {BankType} bankType
     * @memberof SubmitDepositReq
     * @instance
     */
    SubmitDepositReq.prototype.bankType = 1;

    /**
     * SubmitDepositReq depositAmount.
     * @member {number} depositAmount
     * @memberof SubmitDepositReq
     * @instance
     */
    SubmitDepositReq.prototype.depositAmount = 0;

    /**
     * Creates a new SubmitDepositReq instance using the specified properties.
     * @function create
     * @memberof SubmitDepositReq
     * @static
     * @param {ISubmitDepositReq=} [properties] Properties to set
     * @returns {SubmitDepositReq} SubmitDepositReq instance
     */
    SubmitDepositReq.create = function create(properties) {
        return new SubmitDepositReq(properties);
    };

    /**
     * Encodes the specified SubmitDepositReq message. Does not implicitly {@link SubmitDepositReq.verify|verify} messages.
     * @function encode
     * @memberof SubmitDepositReq
     * @static
     * @param {ISubmitDepositReq} m SubmitDepositReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitDepositReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.bankProxyId);
        w.uint32(18).string(m.playerId);
        w.uint32(24).int32(m.bankType);
        w.uint32(32).int32(m.depositAmount);
        return w;
    };

    /**
     * Decodes a SubmitDepositReq message from the specified reader or buffer.
     * @function decode
     * @memberof SubmitDepositReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SubmitDepositReq} SubmitDepositReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitDepositReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SubmitDepositReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bankProxyId = r.string();
                break;
            case 2:
                m.playerId = r.string();
                break;
            case 3:
                m.bankType = r.int32();
                break;
            case 4:
                m.depositAmount = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("bankProxyId"))
            throw $util.ProtocolError("missing required 'bankProxyId'", { instance: m });
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("bankType"))
            throw $util.ProtocolError("missing required 'bankType'", { instance: m });
        if (!m.hasOwnProperty("depositAmount"))
            throw $util.ProtocolError("missing required 'depositAmount'", { instance: m });
        return m;
    };

    return SubmitDepositReq;
})();

$root.SubmitDepositRsp = (function() {

    /**
     * Properties of a SubmitDepositRsp.
     * @exports ISubmitDepositRsp
     * @interface ISubmitDepositRsp
     * @property {string} name SubmitDepositRsp name
     * @property {string} cardNo SubmitDepositRsp cardNo
     * @property {string} bankName SubmitDepositRsp bankName
     * @property {string|null} [bankBranchName] SubmitDepositRsp bankBranchName
     * @property {number} depositAmount SubmitDepositRsp depositAmount
     * @property {string} orderNo SubmitDepositRsp orderNo
     */

    /**
     * Constructs a new SubmitDepositRsp.
     * @exports SubmitDepositRsp
     * @classdesc Represents a SubmitDepositRsp.
     * @implements ISubmitDepositRsp
     * @constructor
     * @param {ISubmitDepositRsp=} [p] Properties to set
     */
    function SubmitDepositRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SubmitDepositRsp name.
     * @member {string} name
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.name = "";

    /**
     * SubmitDepositRsp cardNo.
     * @member {string} cardNo
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.cardNo = "";

    /**
     * SubmitDepositRsp bankName.
     * @member {string} bankName
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.bankName = "";

    /**
     * SubmitDepositRsp bankBranchName.
     * @member {string} bankBranchName
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.bankBranchName = "";

    /**
     * SubmitDepositRsp depositAmount.
     * @member {number} depositAmount
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.depositAmount = 0;

    /**
     * SubmitDepositRsp orderNo.
     * @member {string} orderNo
     * @memberof SubmitDepositRsp
     * @instance
     */
    SubmitDepositRsp.prototype.orderNo = "";

    /**
     * Creates a new SubmitDepositRsp instance using the specified properties.
     * @function create
     * @memberof SubmitDepositRsp
     * @static
     * @param {ISubmitDepositRsp=} [properties] Properties to set
     * @returns {SubmitDepositRsp} SubmitDepositRsp instance
     */
    SubmitDepositRsp.create = function create(properties) {
        return new SubmitDepositRsp(properties);
    };

    /**
     * Encodes the specified SubmitDepositRsp message. Does not implicitly {@link SubmitDepositRsp.verify|verify} messages.
     * @function encode
     * @memberof SubmitDepositRsp
     * @static
     * @param {ISubmitDepositRsp} m SubmitDepositRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitDepositRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.name);
        w.uint32(18).string(m.cardNo);
        w.uint32(26).string(m.bankName);
        if (m.bankBranchName != null && m.hasOwnProperty("bankBranchName"))
            w.uint32(34).string(m.bankBranchName);
        w.uint32(40).int32(m.depositAmount);
        w.uint32(50).string(m.orderNo);
        return w;
    };

    /**
     * Decodes a SubmitDepositRsp message from the specified reader or buffer.
     * @function decode
     * @memberof SubmitDepositRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SubmitDepositRsp} SubmitDepositRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitDepositRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SubmitDepositRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.name = r.string();
                break;
            case 2:
                m.cardNo = r.string();
                break;
            case 3:
                m.bankName = r.string();
                break;
            case 4:
                m.bankBranchName = r.string();
                break;
            case 5:
                m.depositAmount = r.int32();
                break;
            case 6:
                m.orderNo = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: m });
        if (!m.hasOwnProperty("cardNo"))
            throw $util.ProtocolError("missing required 'cardNo'", { instance: m });
        if (!m.hasOwnProperty("bankName"))
            throw $util.ProtocolError("missing required 'bankName'", { instance: m });
        if (!m.hasOwnProperty("depositAmount"))
            throw $util.ProtocolError("missing required 'depositAmount'", { instance: m });
        if (!m.hasOwnProperty("orderNo"))
            throw $util.ProtocolError("missing required 'orderNo'", { instance: m });
        return m;
    };

    return SubmitDepositRsp;
})();

$root.SubmitOrderReq = (function() {

    /**
     * Properties of a SubmitOrderReq.
     * @exports ISubmitOrderReq
     * @interface ISubmitOrderReq
     * @property {string} orderNo SubmitOrderReq orderNo
     * @property {string} imageData SubmitOrderReq imageData
     * @property {string|null} [desc] SubmitOrderReq desc
     */

    /**
     * Constructs a new SubmitOrderReq.
     * @exports SubmitOrderReq
     * @classdesc Represents a SubmitOrderReq.
     * @implements ISubmitOrderReq
     * @constructor
     * @param {ISubmitOrderReq=} [p] Properties to set
     */
    function SubmitOrderReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SubmitOrderReq orderNo.
     * @member {string} orderNo
     * @memberof SubmitOrderReq
     * @instance
     */
    SubmitOrderReq.prototype.orderNo = "";

    /**
     * SubmitOrderReq imageData.
     * @member {string} imageData
     * @memberof SubmitOrderReq
     * @instance
     */
    SubmitOrderReq.prototype.imageData = "";

    /**
     * SubmitOrderReq desc.
     * @member {string} desc
     * @memberof SubmitOrderReq
     * @instance
     */
    SubmitOrderReq.prototype.desc = "";

    /**
     * Creates a new SubmitOrderReq instance using the specified properties.
     * @function create
     * @memberof SubmitOrderReq
     * @static
     * @param {ISubmitOrderReq=} [properties] Properties to set
     * @returns {SubmitOrderReq} SubmitOrderReq instance
     */
    SubmitOrderReq.create = function create(properties) {
        return new SubmitOrderReq(properties);
    };

    /**
     * Encodes the specified SubmitOrderReq message. Does not implicitly {@link SubmitOrderReq.verify|verify} messages.
     * @function encode
     * @memberof SubmitOrderReq
     * @static
     * @param {ISubmitOrderReq} m SubmitOrderReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitOrderReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.orderNo);
        w.uint32(18).string(m.imageData);
        if (m.desc != null && m.hasOwnProperty("desc"))
            w.uint32(26).string(m.desc);
        return w;
    };

    /**
     * Decodes a SubmitOrderReq message from the specified reader or buffer.
     * @function decode
     * @memberof SubmitOrderReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SubmitOrderReq} SubmitOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitOrderReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SubmitOrderReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.orderNo = r.string();
                break;
            case 2:
                m.imageData = r.string();
                break;
            case 3:
                m.desc = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("orderNo"))
            throw $util.ProtocolError("missing required 'orderNo'", { instance: m });
        if (!m.hasOwnProperty("imageData"))
            throw $util.ProtocolError("missing required 'imageData'", { instance: m });
        return m;
    };

    return SubmitOrderReq;
})();

$root.SubmitOrderRsp = (function() {

    /**
     * Properties of a SubmitOrderRsp.
     * @exports ISubmitOrderRsp
     * @interface ISubmitOrderRsp
     * @property {boolean} success SubmitOrderRsp success
     * @property {string|null} [tips] SubmitOrderRsp tips
     */

    /**
     * Constructs a new SubmitOrderRsp.
     * @exports SubmitOrderRsp
     * @classdesc Represents a SubmitOrderRsp.
     * @implements ISubmitOrderRsp
     * @constructor
     * @param {ISubmitOrderRsp=} [p] Properties to set
     */
    function SubmitOrderRsp(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * SubmitOrderRsp success.
     * @member {boolean} success
     * @memberof SubmitOrderRsp
     * @instance
     */
    SubmitOrderRsp.prototype.success = false;

    /**
     * SubmitOrderRsp tips.
     * @member {string} tips
     * @memberof SubmitOrderRsp
     * @instance
     */
    SubmitOrderRsp.prototype.tips = "";

    /**
     * Creates a new SubmitOrderRsp instance using the specified properties.
     * @function create
     * @memberof SubmitOrderRsp
     * @static
     * @param {ISubmitOrderRsp=} [properties] Properties to set
     * @returns {SubmitOrderRsp} SubmitOrderRsp instance
     */
    SubmitOrderRsp.create = function create(properties) {
        return new SubmitOrderRsp(properties);
    };

    /**
     * Encodes the specified SubmitOrderRsp message. Does not implicitly {@link SubmitOrderRsp.verify|verify} messages.
     * @function encode
     * @memberof SubmitOrderRsp
     * @static
     * @param {ISubmitOrderRsp} m SubmitOrderRsp message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitOrderRsp.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes a SubmitOrderRsp message from the specified reader or buffer.
     * @function decode
     * @memberof SubmitOrderRsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {SubmitOrderRsp} SubmitOrderRsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitOrderRsp.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.SubmitOrderRsp();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return SubmitOrderRsp;
})();

$root.PayOrderRequest = (function() {

    /**
     * Properties of a PayOrderRequest.
     * @exports IPayOrderRequest
     * @interface IPayOrderRequest
     * @property {string} tradeNo PayOrderRequest tradeNo
     * @property {string} orderNo PayOrderRequest orderNo
     * @property {number} amount PayOrderRequest amount
     * @property {string} channelId PayOrderRequest channelId
     * @property {string|null} [currencyType] PayOrderRequest currencyType
     * @property {string|null} [sdkUserId] PayOrderRequest sdkUserId
     * @property {string|null} [extraInfo] PayOrderRequest extraInfo
     * @property {boolean|null} [showInputMoney] PayOrderRequest showInputMoney
     * @property {string|null} [tradeNoNew] PayOrderRequest tradeNoNew
     */

    /**
     * Constructs a new PayOrderRequest.
     * @exports PayOrderRequest
     * @classdesc Represents a PayOrderRequest.
     * @implements IPayOrderRequest
     * @constructor
     * @param {IPayOrderRequest=} [p] Properties to set
     */
    function PayOrderRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PayOrderRequest tradeNo.
     * @member {string} tradeNo
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.tradeNo = "";

    /**
     * PayOrderRequest orderNo.
     * @member {string} orderNo
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.orderNo = "";

    /**
     * PayOrderRequest amount.
     * @member {number} amount
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.amount = 0;

    /**
     * PayOrderRequest channelId.
     * @member {string} channelId
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.channelId = "";

    /**
     * PayOrderRequest currencyType.
     * @member {string} currencyType
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.currencyType = "";

    /**
     * PayOrderRequest sdkUserId.
     * @member {string} sdkUserId
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.sdkUserId = "";

    /**
     * PayOrderRequest extraInfo.
     * @member {string} extraInfo
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.extraInfo = "";

    /**
     * PayOrderRequest showInputMoney.
     * @member {boolean} showInputMoney
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.showInputMoney = false;

    /**
     * PayOrderRequest tradeNoNew.
     * @member {string} tradeNoNew
     * @memberof PayOrderRequest
     * @instance
     */
    PayOrderRequest.prototype.tradeNoNew = "";

    /**
     * Creates a new PayOrderRequest instance using the specified properties.
     * @function create
     * @memberof PayOrderRequest
     * @static
     * @param {IPayOrderRequest=} [properties] Properties to set
     * @returns {PayOrderRequest} PayOrderRequest instance
     */
    PayOrderRequest.create = function create(properties) {
        return new PayOrderRequest(properties);
    };

    /**
     * Encodes the specified PayOrderRequest message. Does not implicitly {@link PayOrderRequest.verify|verify} messages.
     * @function encode
     * @memberof PayOrderRequest
     * @static
     * @param {IPayOrderRequest} m PayOrderRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PayOrderRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.tradeNo);
        w.uint32(18).string(m.orderNo);
        w.uint32(29).fixed32(m.amount);
        w.uint32(34).string(m.channelId);
        if (m.currencyType != null && m.hasOwnProperty("currencyType"))
            w.uint32(42).string(m.currencyType);
        if (m.sdkUserId != null && m.hasOwnProperty("sdkUserId"))
            w.uint32(50).string(m.sdkUserId);
        if (m.extraInfo != null && m.hasOwnProperty("extraInfo"))
            w.uint32(58).string(m.extraInfo);
        if (m.showInputMoney != null && m.hasOwnProperty("showInputMoney"))
            w.uint32(64).bool(m.showInputMoney);
        if (m.tradeNoNew != null && m.hasOwnProperty("tradeNoNew"))
            w.uint32(74).string(m.tradeNoNew);
        return w;
    };

    /**
     * Decodes a PayOrderRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PayOrderRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PayOrderRequest} PayOrderRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PayOrderRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PayOrderRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.tradeNo = r.string();
                break;
            case 2:
                m.orderNo = r.string();
                break;
            case 3:
                m.amount = r.fixed32();
                break;
            case 4:
                m.channelId = r.string();
                break;
            case 5:
                m.currencyType = r.string();
                break;
            case 6:
                m.sdkUserId = r.string();
                break;
            case 7:
                m.extraInfo = r.string();
                break;
            case 8:
                m.showInputMoney = r.bool();
                break;
            case 9:
                m.tradeNoNew = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("tradeNo"))
            throw $util.ProtocolError("missing required 'tradeNo'", { instance: m });
        if (!m.hasOwnProperty("orderNo"))
            throw $util.ProtocolError("missing required 'orderNo'", { instance: m });
        if (!m.hasOwnProperty("amount"))
            throw $util.ProtocolError("missing required 'amount'", { instance: m });
        if (!m.hasOwnProperty("channelId"))
            throw $util.ProtocolError("missing required 'channelId'", { instance: m });
        return m;
    };

    return PayOrderRequest;
})();

$root.PayOrderResponse = (function() {

    /**
     * Properties of a PayOrderResponse.
     * @exports IPayOrderResponse
     * @interface IPayOrderResponse
     * @property {boolean} success PayOrderResponse success
     */

    /**
     * Constructs a new PayOrderResponse.
     * @exports PayOrderResponse
     * @classdesc Represents a PayOrderResponse.
     * @implements IPayOrderResponse
     * @constructor
     * @param {IPayOrderResponse=} [p] Properties to set
     */
    function PayOrderResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PayOrderResponse success.
     * @member {boolean} success
     * @memberof PayOrderResponse
     * @instance
     */
    PayOrderResponse.prototype.success = false;

    /**
     * Creates a new PayOrderResponse instance using the specified properties.
     * @function create
     * @memberof PayOrderResponse
     * @static
     * @param {IPayOrderResponse=} [properties] Properties to set
     * @returns {PayOrderResponse} PayOrderResponse instance
     */
    PayOrderResponse.create = function create(properties) {
        return new PayOrderResponse(properties);
    };

    /**
     * Encodes the specified PayOrderResponse message. Does not implicitly {@link PayOrderResponse.verify|verify} messages.
     * @function encode
     * @memberof PayOrderResponse
     * @static
     * @param {IPayOrderResponse} m PayOrderResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PayOrderResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        return w;
    };

    /**
     * Decodes a PayOrderResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PayOrderResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PayOrderResponse} PayOrderResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PayOrderResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PayOrderResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return PayOrderResponse;
})();

$root.BeforePayRequest = (function() {

    /**
     * Properties of a BeforePayRequest.
     * @exports IBeforePayRequest
     * @interface IBeforePayRequest
     */

    /**
     * Constructs a new BeforePayRequest.
     * @exports BeforePayRequest
     * @classdesc Represents a BeforePayRequest.
     * @implements IBeforePayRequest
     * @constructor
     * @param {IBeforePayRequest=} [p] Properties to set
     */
    function BeforePayRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new BeforePayRequest instance using the specified properties.
     * @function create
     * @memberof BeforePayRequest
     * @static
     * @param {IBeforePayRequest=} [properties] Properties to set
     * @returns {BeforePayRequest} BeforePayRequest instance
     */
    BeforePayRequest.create = function create(properties) {
        return new BeforePayRequest(properties);
    };

    /**
     * Encodes the specified BeforePayRequest message. Does not implicitly {@link BeforePayRequest.verify|verify} messages.
     * @function encode
     * @memberof BeforePayRequest
     * @static
     * @param {IBeforePayRequest} m BeforePayRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeforePayRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a BeforePayRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BeforePayRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeforePayRequest} BeforePayRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeforePayRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeforePayRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return BeforePayRequest;
})();

$root.BeforePayResponse = (function() {

    /**
     * Properties of a BeforePayResponse.
     * @exports IBeforePayResponse
     * @interface IBeforePayResponse
     * @property {boolean} canPay BeforePayResponse canPay
     * @property {string} serverId BeforePayResponse serverId
     * @property {string} orderNo BeforePayResponse orderNo
     */

    /**
     * Constructs a new BeforePayResponse.
     * @exports BeforePayResponse
     * @classdesc Represents a BeforePayResponse.
     * @implements IBeforePayResponse
     * @constructor
     * @param {IBeforePayResponse=} [p] Properties to set
     */
    function BeforePayResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BeforePayResponse canPay.
     * @member {boolean} canPay
     * @memberof BeforePayResponse
     * @instance
     */
    BeforePayResponse.prototype.canPay = false;

    /**
     * BeforePayResponse serverId.
     * @member {string} serverId
     * @memberof BeforePayResponse
     * @instance
     */
    BeforePayResponse.prototype.serverId = "";

    /**
     * BeforePayResponse orderNo.
     * @member {string} orderNo
     * @memberof BeforePayResponse
     * @instance
     */
    BeforePayResponse.prototype.orderNo = "";

    /**
     * Creates a new BeforePayResponse instance using the specified properties.
     * @function create
     * @memberof BeforePayResponse
     * @static
     * @param {IBeforePayResponse=} [properties] Properties to set
     * @returns {BeforePayResponse} BeforePayResponse instance
     */
    BeforePayResponse.create = function create(properties) {
        return new BeforePayResponse(properties);
    };

    /**
     * Encodes the specified BeforePayResponse message. Does not implicitly {@link BeforePayResponse.verify|verify} messages.
     * @function encode
     * @memberof BeforePayResponse
     * @static
     * @param {IBeforePayResponse} m BeforePayResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BeforePayResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.canPay);
        w.uint32(18).string(m.serverId);
        w.uint32(26).string(m.orderNo);
        return w;
    };

    /**
     * Decodes a BeforePayResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BeforePayResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BeforePayResponse} BeforePayResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BeforePayResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BeforePayResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.canPay = r.bool();
                break;
            case 2:
                m.serverId = r.string();
                break;
            case 3:
                m.orderNo = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("canPay"))
            throw $util.ProtocolError("missing required 'canPay'", { instance: m });
        if (!m.hasOwnProperty("serverId"))
            throw $util.ProtocolError("missing required 'serverId'", { instance: m });
        if (!m.hasOwnProperty("orderNo"))
            throw $util.ProtocolError("missing required 'orderNo'", { instance: m });
        return m;
    };

    return BeforePayResponse;
})();

$root.RechargeListRequest = (function() {

    /**
     * Properties of a RechargeListRequest.
     * @exports IRechargeListRequest
     * @interface IRechargeListRequest
     */

    /**
     * Constructs a new RechargeListRequest.
     * @exports RechargeListRequest
     * @classdesc Represents a RechargeListRequest.
     * @implements IRechargeListRequest
     * @constructor
     * @param {IRechargeListRequest=} [p] Properties to set
     */
    function RechargeListRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RechargeListRequest instance using the specified properties.
     * @function create
     * @memberof RechargeListRequest
     * @static
     * @param {IRechargeListRequest=} [properties] Properties to set
     * @returns {RechargeListRequest} RechargeListRequest instance
     */
    RechargeListRequest.create = function create(properties) {
        return new RechargeListRequest(properties);
    };

    /**
     * Encodes the specified RechargeListRequest message. Does not implicitly {@link RechargeListRequest.verify|verify} messages.
     * @function encode
     * @memberof RechargeListRequest
     * @static
     * @param {IRechargeListRequest} m RechargeListRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeListRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RechargeListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeListRequest} RechargeListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeListRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeListRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RechargeListRequest;
})();

/**
 * ChargeType enum.
 * @exports ChargeType
 * @enum {string}
 * @property {number} P_ZHIFUBAO=1 P_ZHIFUBAO value
 * @property {number} P_WECHAT=2 P_WECHAT value
 * @property {number} P_CREDICARD=3 P_CREDICARD value
 * @property {number} P_FLOWER=4 P_FLOWER value
 * @property {number} P_BANKCARD=5 P_BANKCARD value
 */
$root.ChargeType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "P_ZHIFUBAO"] = 1;
    values[valuesById[2] = "P_WECHAT"] = 2;
    values[valuesById[3] = "P_CREDICARD"] = 3;
    values[valuesById[4] = "P_FLOWER"] = 4;
    values[valuesById[5] = "P_BANKCARD"] = 5;
    return values;
})();

/**
 * ChannelType enum.
 * @exports ChannelType
 * @enum {string}
 * @property {number} PROXY=0 PROXY value
 * @property {number} ZHIFUBAO=1 ZHIFUBAO value
 * @property {number} WEIXIN=2 WEIXIN value
 * @property {number} QQPAY=3 QQPAY value
 * @property {number} YINLIAN=4 YINLIAN value
 * @property {number} JINDONG=5 JINDONG value
 * @property {number} BIGZHIFUBAO=6 BIGZHIFUBAO value
 * @property {number} DIANKA=7 DIANKA value
 * @property {number} BIGWEIXIN=8 BIGWEIXIN value
 * @property {number} YUNSHANFU=9 YUNSHANFU value
 * @property {number} PROXY_NORMAL=10 PROXY_NORMAL value
 * @property {number} S_ALI_PAY=11 S_ALI_PAY value
 * @property {number} S_WECHAT_PAY=12 S_WECHAT_PAY value
 */
$root.ChannelType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PROXY"] = 0;
    values[valuesById[1] = "ZHIFUBAO"] = 1;
    values[valuesById[2] = "WEIXIN"] = 2;
    values[valuesById[3] = "QQPAY"] = 3;
    values[valuesById[4] = "YINLIAN"] = 4;
    values[valuesById[5] = "JINDONG"] = 5;
    values[valuesById[6] = "BIGZHIFUBAO"] = 6;
    values[valuesById[7] = "DIANKA"] = 7;
    values[valuesById[8] = "BIGWEIXIN"] = 8;
    values[valuesById[9] = "YUNSHANFU"] = 9;
    values[valuesById[10] = "PROXY_NORMAL"] = 10;
    values[valuesById[11] = "S_ALI_PAY"] = 11;
    values[valuesById[12] = "S_WECHAT_PAY"] = 12;
    return values;
})();

/**
 * BankType enum.
 * @exports BankType
 * @enum {string}
 * @property {number} Bank1=1 Bank1 value
 * @property {number} Bank2=2 Bank2 value
 * @property {number} Bank3=3 Bank3 value
 * @property {number} Bank4=4 Bank4 value
 * @property {number} Bank5=5 Bank5 value
 * @property {number} Bank6=6 Bank6 value
 * @property {number} Bank7=7 Bank7 value
 * @property {number} Bank8=8 Bank8 value
 * @property {number} Bank9=9 Bank9 value
 * @property {number} Bank10=10 Bank10 value
 * @property {number} Bank11=11 Bank11 value
 * @property {number} Bank12=12 Bank12 value
 * @property {number} Bank13=13 Bank13 value
 * @property {number} Bank14=14 Bank14 value
 * @property {number} Bank15=15 Bank15 value
 * @property {number} Bank16=16 Bank16 value
 * @property {number} Bank17=17 Bank17 value
 * @property {number} Bank18=18 Bank18 value
 * @property {number} Bank19=19 Bank19 value
 * @property {number} Bank20=20 Bank20 value
 * @property {number} Bank21=21 Bank21 value
 * @property {number} Bank22=22 Bank22 value
 * @property {number} Bank23=23 Bank23 value
 * @property {number} Bank24=24 Bank24 value
 * @property {number} Bank25=25 Bank25 value
 * @property {number} Bank26=26 Bank26 value
 * @property {number} Bank27=27 Bank27 value
 * @property {number} Bank28=28 Bank28 value
 * @property {number} Bank29=29 Bank29 value
 * @property {number} Bank30=30 Bank30 value
 * @property {number} Bank31=31 Bank31 value
 * @property {number} Bank32=32 Bank32 value
 * @property {number} Bank33=33 Bank33 value
 * @property {number} Bank34=34 Bank34 value
 * @property {number} Bank35=35 Bank35 value
 * @property {number} Bank36=36 Bank36 value
 * @property {number} Bank37=37 Bank37 value
 * @property {number} Bank38=38 Bank38 value
 * @property {number} Bank39=39 Bank39 value
 * @property {number} Bank40=40 Bank40 value
 */
$root.BankType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "Bank1"] = 1;
    values[valuesById[2] = "Bank2"] = 2;
    values[valuesById[3] = "Bank3"] = 3;
    values[valuesById[4] = "Bank4"] = 4;
    values[valuesById[5] = "Bank5"] = 5;
    values[valuesById[6] = "Bank6"] = 6;
    values[valuesById[7] = "Bank7"] = 7;
    values[valuesById[8] = "Bank8"] = 8;
    values[valuesById[9] = "Bank9"] = 9;
    values[valuesById[10] = "Bank10"] = 10;
    values[valuesById[11] = "Bank11"] = 11;
    values[valuesById[12] = "Bank12"] = 12;
    values[valuesById[13] = "Bank13"] = 13;
    values[valuesById[14] = "Bank14"] = 14;
    values[valuesById[15] = "Bank15"] = 15;
    values[valuesById[16] = "Bank16"] = 16;
    values[valuesById[17] = "Bank17"] = 17;
    values[valuesById[18] = "Bank18"] = 18;
    values[valuesById[19] = "Bank19"] = 19;
    values[valuesById[20] = "Bank20"] = 20;
    values[valuesById[21] = "Bank21"] = 21;
    values[valuesById[22] = "Bank22"] = 22;
    values[valuesById[23] = "Bank23"] = 23;
    values[valuesById[24] = "Bank24"] = 24;
    values[valuesById[25] = "Bank25"] = 25;
    values[valuesById[26] = "Bank26"] = 26;
    values[valuesById[27] = "Bank27"] = 27;
    values[valuesById[28] = "Bank28"] = 28;
    values[valuesById[29] = "Bank29"] = 29;
    values[valuesById[30] = "Bank30"] = 30;
    values[valuesById[31] = "Bank31"] = 31;
    values[valuesById[32] = "Bank32"] = 32;
    values[valuesById[33] = "Bank33"] = 33;
    values[valuesById[34] = "Bank34"] = 34;
    values[valuesById[35] = "Bank35"] = 35;
    values[valuesById[36] = "Bank36"] = 36;
    values[valuesById[37] = "Bank37"] = 37;
    values[valuesById[38] = "Bank38"] = 38;
    values[valuesById[39] = "Bank39"] = 39;
    values[valuesById[40] = "Bank40"] = 40;
    return values;
})();

$root.ProxyInfo = (function() {

    /**
     * Properties of a ProxyInfo.
     * @exports IProxyInfo
     * @interface IProxyInfo
     * @property {string|null} [proxyId] ProxyInfo proxyId
     * @property {string|null} [imageUrl] ProxyInfo imageUrl
     * @property {string} proxyName ProxyInfo proxyName
     * @property {Array.<ChargeType>|null} [chargeType] ProxyInfo chargeType
     * @property {Array.<string>|null} [tag] ProxyInfo tag
     * @property {boolean|null} [isRecentPay] ProxyInfo isRecentPay
     * @property {number|null} [starLevel] ProxyInfo starLevel
     * @property {number|null} [evaluations] ProxyInfo evaluations
     */

    /**
     * Constructs a new ProxyInfo.
     * @exports ProxyInfo
     * @classdesc Represents a ProxyInfo.
     * @implements IProxyInfo
     * @constructor
     * @param {IProxyInfo=} [p] Properties to set
     */
    function ProxyInfo(p) {
        this.chargeType = [];
        this.tag = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ProxyInfo proxyId.
     * @member {string} proxyId
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.proxyId = "";

    /**
     * ProxyInfo imageUrl.
     * @member {string} imageUrl
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.imageUrl = "";

    /**
     * ProxyInfo proxyName.
     * @member {string} proxyName
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.proxyName = "";

    /**
     * ProxyInfo chargeType.
     * @member {Array.<ChargeType>} chargeType
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.chargeType = $util.emptyArray;

    /**
     * ProxyInfo tag.
     * @member {Array.<string>} tag
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.tag = $util.emptyArray;

    /**
     * ProxyInfo isRecentPay.
     * @member {boolean} isRecentPay
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.isRecentPay = false;

    /**
     * ProxyInfo starLevel.
     * @member {number} starLevel
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.starLevel = 0;

    /**
     * ProxyInfo evaluations.
     * @member {number} evaluations
     * @memberof ProxyInfo
     * @instance
     */
    ProxyInfo.prototype.evaluations = 0;

    /**
     * Creates a new ProxyInfo instance using the specified properties.
     * @function create
     * @memberof ProxyInfo
     * @static
     * @param {IProxyInfo=} [properties] Properties to set
     * @returns {ProxyInfo} ProxyInfo instance
     */
    ProxyInfo.create = function create(properties) {
        return new ProxyInfo(properties);
    };

    /**
     * Encodes the specified ProxyInfo message. Does not implicitly {@link ProxyInfo.verify|verify} messages.
     * @function encode
     * @memberof ProxyInfo
     * @static
     * @param {IProxyInfo} m ProxyInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProxyInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.proxyId != null && m.hasOwnProperty("proxyId"))
            w.uint32(10).string(m.proxyId);
        if (m.imageUrl != null && m.hasOwnProperty("imageUrl"))
            w.uint32(18).string(m.imageUrl);
        w.uint32(26).string(m.proxyName);
        if (m.chargeType != null && m.chargeType.length) {
            for (var i = 0; i < m.chargeType.length; ++i)
                w.uint32(32).int32(m.chargeType[i]);
        }
        if (m.tag != null && m.tag.length) {
            for (var i = 0; i < m.tag.length; ++i)
                w.uint32(42).string(m.tag[i]);
        }
        if (m.isRecentPay != null && m.hasOwnProperty("isRecentPay"))
            w.uint32(48).bool(m.isRecentPay);
        if (m.starLevel != null && m.hasOwnProperty("starLevel"))
            w.uint32(56).int32(m.starLevel);
        if (m.evaluations != null && m.hasOwnProperty("evaluations"))
            w.uint32(64).int32(m.evaluations);
        return w;
    };

    /**
     * Decodes a ProxyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ProxyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ProxyInfo} ProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProxyInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ProxyInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.proxyId = r.string();
                break;
            case 2:
                m.imageUrl = r.string();
                break;
            case 3:
                m.proxyName = r.string();
                break;
            case 4:
                if (!(m.chargeType && m.chargeType.length))
                    m.chargeType = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.chargeType.push(r.int32());
                } else
                    m.chargeType.push(r.int32());
                break;
            case 5:
                if (!(m.tag && m.tag.length))
                    m.tag = [];
                m.tag.push(r.string());
                break;
            case 6:
                m.isRecentPay = r.bool();
                break;
            case 7:
                m.starLevel = r.int32();
                break;
            case 8:
                m.evaluations = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("proxyName"))
            throw $util.ProtocolError("missing required 'proxyName'", { instance: m });
        return m;
    };

    return ProxyInfo;
})();

$root.NormalProxyInfo = (function() {

    /**
     * Properties of a NormalProxyInfo.
     * @exports INormalProxyInfo
     * @interface INormalProxyInfo
     * @property {string|null} [proxyNo] NormalProxyInfo proxyNo
     * @property {boolean|null} [isSupportHuaBei] NormalProxyInfo isSupportHuaBei
     * @property {string|null} [weiOrQq] NormalProxyInfo weiOrQq
     * @property {number|null} [chargeTime] NormalProxyInfo chargeTime
     * @property {number|null} [successRate] NormalProxyInfo successRate
     * @property {number|null} [useTime] NormalProxyInfo useTime
     */

    /**
     * Constructs a new NormalProxyInfo.
     * @exports NormalProxyInfo
     * @classdesc Represents a NormalProxyInfo.
     * @implements INormalProxyInfo
     * @constructor
     * @param {INormalProxyInfo=} [p] Properties to set
     */
    function NormalProxyInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * NormalProxyInfo proxyNo.
     * @member {string} proxyNo
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.proxyNo = "";

    /**
     * NormalProxyInfo isSupportHuaBei.
     * @member {boolean} isSupportHuaBei
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.isSupportHuaBei = false;

    /**
     * NormalProxyInfo weiOrQq.
     * @member {string} weiOrQq
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.weiOrQq = "";

    /**
     * NormalProxyInfo chargeTime.
     * @member {number} chargeTime
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.chargeTime = 0;

    /**
     * NormalProxyInfo successRate.
     * @member {number} successRate
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.successRate = 0;

    /**
     * NormalProxyInfo useTime.
     * @member {number} useTime
     * @memberof NormalProxyInfo
     * @instance
     */
    NormalProxyInfo.prototype.useTime = 0;

    /**
     * Creates a new NormalProxyInfo instance using the specified properties.
     * @function create
     * @memberof NormalProxyInfo
     * @static
     * @param {INormalProxyInfo=} [properties] Properties to set
     * @returns {NormalProxyInfo} NormalProxyInfo instance
     */
    NormalProxyInfo.create = function create(properties) {
        return new NormalProxyInfo(properties);
    };

    /**
     * Encodes the specified NormalProxyInfo message. Does not implicitly {@link NormalProxyInfo.verify|verify} messages.
     * @function encode
     * @memberof NormalProxyInfo
     * @static
     * @param {INormalProxyInfo} m NormalProxyInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NormalProxyInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.proxyNo != null && m.hasOwnProperty("proxyNo"))
            w.uint32(10).string(m.proxyNo);
        if (m.isSupportHuaBei != null && m.hasOwnProperty("isSupportHuaBei"))
            w.uint32(16).bool(m.isSupportHuaBei);
        if (m.weiOrQq != null && m.hasOwnProperty("weiOrQq"))
            w.uint32(26).string(m.weiOrQq);
        if (m.chargeTime != null && m.hasOwnProperty("chargeTime"))
            w.uint32(32).int32(m.chargeTime);
        if (m.successRate != null && m.hasOwnProperty("successRate"))
            w.uint32(40).int32(m.successRate);
        if (m.useTime != null && m.hasOwnProperty("useTime"))
            w.uint32(48).int32(m.useTime);
        return w;
    };

    /**
     * Decodes a NormalProxyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof NormalProxyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {NormalProxyInfo} NormalProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NormalProxyInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.NormalProxyInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.proxyNo = r.string();
                break;
            case 2:
                m.isSupportHuaBei = r.bool();
                break;
            case 3:
                m.weiOrQq = r.string();
                break;
            case 4:
                m.chargeTime = r.int32();
                break;
            case 5:
                m.successRate = r.int32();
                break;
            case 6:
                m.useTime = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return NormalProxyInfo;
})();

$root.BankProxyInfo = (function() {

    /**
     * Properties of a BankProxyInfo.
     * @exports IBankProxyInfo
     * @interface IBankProxyInfo
     * @property {string|null} [bankProxyId] BankProxyInfo bankProxyId
     * @property {string|null} [imageUrl] BankProxyInfo imageUrl
     * @property {string} proxyName BankProxyInfo proxyName
     * @property {Array.<BankType>|null} [bankTypes] BankProxyInfo bankTypes
     * @property {Array.<string>|null} [tag] BankProxyInfo tag
     * @property {boolean|null} [isRecentPay] BankProxyInfo isRecentPay
     * @property {number|null} [starLevel] BankProxyInfo starLevel
     * @property {number|null} [evaluations] BankProxyInfo evaluations
     */

    /**
     * Constructs a new BankProxyInfo.
     * @exports BankProxyInfo
     * @classdesc Represents a BankProxyInfo.
     * @implements IBankProxyInfo
     * @constructor
     * @param {IBankProxyInfo=} [p] Properties to set
     */
    function BankProxyInfo(p) {
        this.bankTypes = [];
        this.tag = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * BankProxyInfo bankProxyId.
     * @member {string} bankProxyId
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.bankProxyId = "";

    /**
     * BankProxyInfo imageUrl.
     * @member {string} imageUrl
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.imageUrl = "";

    /**
     * BankProxyInfo proxyName.
     * @member {string} proxyName
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.proxyName = "";

    /**
     * BankProxyInfo bankTypes.
     * @member {Array.<BankType>} bankTypes
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.bankTypes = $util.emptyArray;

    /**
     * BankProxyInfo tag.
     * @member {Array.<string>} tag
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.tag = $util.emptyArray;

    /**
     * BankProxyInfo isRecentPay.
     * @member {boolean} isRecentPay
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.isRecentPay = false;

    /**
     * BankProxyInfo starLevel.
     * @member {number} starLevel
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.starLevel = 0;

    /**
     * BankProxyInfo evaluations.
     * @member {number} evaluations
     * @memberof BankProxyInfo
     * @instance
     */
    BankProxyInfo.prototype.evaluations = 0;

    /**
     * Creates a new BankProxyInfo instance using the specified properties.
     * @function create
     * @memberof BankProxyInfo
     * @static
     * @param {IBankProxyInfo=} [properties] Properties to set
     * @returns {BankProxyInfo} BankProxyInfo instance
     */
    BankProxyInfo.create = function create(properties) {
        return new BankProxyInfo(properties);
    };

    /**
     * Encodes the specified BankProxyInfo message. Does not implicitly {@link BankProxyInfo.verify|verify} messages.
     * @function encode
     * @memberof BankProxyInfo
     * @static
     * @param {IBankProxyInfo} m BankProxyInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BankProxyInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.bankProxyId != null && m.hasOwnProperty("bankProxyId"))
            w.uint32(10).string(m.bankProxyId);
        if (m.imageUrl != null && m.hasOwnProperty("imageUrl"))
            w.uint32(18).string(m.imageUrl);
        w.uint32(26).string(m.proxyName);
        if (m.bankTypes != null && m.bankTypes.length) {
            for (var i = 0; i < m.bankTypes.length; ++i)
                w.uint32(32).int32(m.bankTypes[i]);
        }
        if (m.tag != null && m.tag.length) {
            for (var i = 0; i < m.tag.length; ++i)
                w.uint32(42).string(m.tag[i]);
        }
        if (m.isRecentPay != null && m.hasOwnProperty("isRecentPay"))
            w.uint32(48).bool(m.isRecentPay);
        if (m.starLevel != null && m.hasOwnProperty("starLevel"))
            w.uint32(56).int32(m.starLevel);
        if (m.evaluations != null && m.hasOwnProperty("evaluations"))
            w.uint32(64).int32(m.evaluations);
        return w;
    };

    /**
     * Decodes a BankProxyInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BankProxyInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {BankProxyInfo} BankProxyInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BankProxyInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.BankProxyInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.bankProxyId = r.string();
                break;
            case 2:
                m.imageUrl = r.string();
                break;
            case 3:
                m.proxyName = r.string();
                break;
            case 4:
                if (!(m.bankTypes && m.bankTypes.length))
                    m.bankTypes = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.bankTypes.push(r.int32());
                } else
                    m.bankTypes.push(r.int32());
                break;
            case 5:
                if (!(m.tag && m.tag.length))
                    m.tag = [];
                m.tag.push(r.string());
                break;
            case 6:
                m.isRecentPay = r.bool();
                break;
            case 7:
                m.starLevel = r.int32();
                break;
            case 8:
                m.evaluations = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("proxyName"))
            throw $util.ProtocolError("missing required 'proxyName'", { instance: m });
        return m;
    };

    return BankProxyInfo;
})();

$root.EvaluationReq = (function() {

    /**
     * Properties of an EvaluationReq.
     * @exports IEvaluationReq
     * @interface IEvaluationReq
     * @property {string} orderId EvaluationReq orderId
     * @property {number} starLv EvaluationReq starLv
     */

    /**
     * Constructs a new EvaluationReq.
     * @exports EvaluationReq
     * @classdesc Represents an EvaluationReq.
     * @implements IEvaluationReq
     * @constructor
     * @param {IEvaluationReq=} [p] Properties to set
     */
    function EvaluationReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EvaluationReq orderId.
     * @member {string} orderId
     * @memberof EvaluationReq
     * @instance
     */
    EvaluationReq.prototype.orderId = "";

    /**
     * EvaluationReq starLv.
     * @member {number} starLv
     * @memberof EvaluationReq
     * @instance
     */
    EvaluationReq.prototype.starLv = 0;

    /**
     * Creates a new EvaluationReq instance using the specified properties.
     * @function create
     * @memberof EvaluationReq
     * @static
     * @param {IEvaluationReq=} [properties] Properties to set
     * @returns {EvaluationReq} EvaluationReq instance
     */
    EvaluationReq.create = function create(properties) {
        return new EvaluationReq(properties);
    };

    /**
     * Encodes the specified EvaluationReq message. Does not implicitly {@link EvaluationReq.verify|verify} messages.
     * @function encode
     * @memberof EvaluationReq
     * @static
     * @param {IEvaluationReq} m EvaluationReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EvaluationReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.orderId);
        w.uint32(16).int32(m.starLv);
        return w;
    };

    /**
     * Decodes an EvaluationReq message from the specified reader or buffer.
     * @function decode
     * @memberof EvaluationReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EvaluationReq} EvaluationReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EvaluationReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EvaluationReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.orderId = r.string();
                break;
            case 2:
                m.starLv = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("orderId"))
            throw $util.ProtocolError("missing required 'orderId'", { instance: m });
        if (!m.hasOwnProperty("starLv"))
            throw $util.ProtocolError("missing required 'starLv'", { instance: m });
        return m;
    };

    return EvaluationReq;
})();

$root.EvaluationRes = (function() {

    /**
     * Properties of an EvaluationRes.
     * @exports IEvaluationRes
     * @interface IEvaluationRes
     * @property {boolean} success EvaluationRes success
     * @property {string|null} [tips] EvaluationRes tips
     */

    /**
     * Constructs a new EvaluationRes.
     * @exports EvaluationRes
     * @classdesc Represents an EvaluationRes.
     * @implements IEvaluationRes
     * @constructor
     * @param {IEvaluationRes=} [p] Properties to set
     */
    function EvaluationRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * EvaluationRes success.
     * @member {boolean} success
     * @memberof EvaluationRes
     * @instance
     */
    EvaluationRes.prototype.success = false;

    /**
     * EvaluationRes tips.
     * @member {string} tips
     * @memberof EvaluationRes
     * @instance
     */
    EvaluationRes.prototype.tips = "";

    /**
     * Creates a new EvaluationRes instance using the specified properties.
     * @function create
     * @memberof EvaluationRes
     * @static
     * @param {IEvaluationRes=} [properties] Properties to set
     * @returns {EvaluationRes} EvaluationRes instance
     */
    EvaluationRes.create = function create(properties) {
        return new EvaluationRes(properties);
    };

    /**
     * Encodes the specified EvaluationRes message. Does not implicitly {@link EvaluationRes.verify|verify} messages.
     * @function encode
     * @memberof EvaluationRes
     * @static
     * @param {IEvaluationRes} m EvaluationRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EvaluationRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        return w;
    };

    /**
     * Decodes an EvaluationRes message from the specified reader or buffer.
     * @function decode
     * @memberof EvaluationRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {EvaluationRes} EvaluationRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EvaluationRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.EvaluationRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return EvaluationRes;
})();

$root.RechargeInfo = (function() {

    /**
     * Properties of a RechargeInfo.
     * @exports IRechargeInfo
     * @interface IRechargeInfo
     * @property {ChannelType} channelType RechargeInfo channelType
     * @property {string} channelTypeDesc RechargeInfo channelTypeDesc
     * @property {string} res RechargeInfo res
     * @property {string} desc RechargeInfo desc
     * @property {Array.<number>|null} [chargeMoney] RechargeInfo chargeMoney
     * @property {Array.<IProxyInfo>|null} [proxyInfo] RechargeInfo proxyInfo
     * @property {string|null} [sign] RechargeInfo sign
     * @property {number|null} [minChargeMoney] RechargeInfo minChargeMoney
     * @property {boolean|null} [isFix] RechargeInfo isFix
     * @property {string|null} [downloadaddress] RechargeInfo downloadaddress
     * @property {Array.<INormalProxyInfo>|null} [normalProxyInfo] RechargeInfo normalProxyInfo
     * @property {Array.<IBankProxyInfo>|null} [bankProxyInfo] RechargeInfo bankProxyInfo
     */

    /**
     * Constructs a new RechargeInfo.
     * @exports RechargeInfo
     * @classdesc Represents a RechargeInfo.
     * @implements IRechargeInfo
     * @constructor
     * @param {IRechargeInfo=} [p] Properties to set
     */
    function RechargeInfo(p) {
        this.chargeMoney = [];
        this.proxyInfo = [];
        this.normalProxyInfo = [];
        this.bankProxyInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RechargeInfo channelType.
     * @member {ChannelType} channelType
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.channelType = 0;

    /**
     * RechargeInfo channelTypeDesc.
     * @member {string} channelTypeDesc
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.channelTypeDesc = "";

    /**
     * RechargeInfo res.
     * @member {string} res
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.res = "";

    /**
     * RechargeInfo desc.
     * @member {string} desc
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.desc = "";

    /**
     * RechargeInfo chargeMoney.
     * @member {Array.<number>} chargeMoney
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.chargeMoney = $util.emptyArray;

    /**
     * RechargeInfo proxyInfo.
     * @member {Array.<IProxyInfo>} proxyInfo
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.proxyInfo = $util.emptyArray;

    /**
     * RechargeInfo sign.
     * @member {string} sign
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.sign = "";

    /**
     * RechargeInfo minChargeMoney.
     * @member {number} minChargeMoney
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.minChargeMoney = 0;

    /**
     * RechargeInfo isFix.
     * @member {boolean} isFix
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.isFix = false;

    /**
     * RechargeInfo downloadaddress.
     * @member {string} downloadaddress
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.downloadaddress = "";

    /**
     * RechargeInfo normalProxyInfo.
     * @member {Array.<INormalProxyInfo>} normalProxyInfo
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.normalProxyInfo = $util.emptyArray;

    /**
     * RechargeInfo bankProxyInfo.
     * @member {Array.<IBankProxyInfo>} bankProxyInfo
     * @memberof RechargeInfo
     * @instance
     */
    RechargeInfo.prototype.bankProxyInfo = $util.emptyArray;

    /**
     * Creates a new RechargeInfo instance using the specified properties.
     * @function create
     * @memberof RechargeInfo
     * @static
     * @param {IRechargeInfo=} [properties] Properties to set
     * @returns {RechargeInfo} RechargeInfo instance
     */
    RechargeInfo.create = function create(properties) {
        return new RechargeInfo(properties);
    };

    /**
     * Encodes the specified RechargeInfo message. Does not implicitly {@link RechargeInfo.verify|verify} messages.
     * @function encode
     * @memberof RechargeInfo
     * @static
     * @param {IRechargeInfo} m RechargeInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.channelType);
        w.uint32(18).string(m.channelTypeDesc);
        w.uint32(26).string(m.res);
        w.uint32(34).string(m.desc);
        if (m.chargeMoney != null && m.chargeMoney.length) {
            for (var i = 0; i < m.chargeMoney.length; ++i)
                w.uint32(40).int32(m.chargeMoney[i]);
        }
        if (m.proxyInfo != null && m.proxyInfo.length) {
            for (var i = 0; i < m.proxyInfo.length; ++i)
                $root.ProxyInfo.encode(m.proxyInfo[i], w.uint32(50).fork()).ldelim();
        }
        if (m.sign != null && m.hasOwnProperty("sign"))
            w.uint32(58).string(m.sign);
        if (m.minChargeMoney != null && m.hasOwnProperty("minChargeMoney"))
            w.uint32(64).int32(m.minChargeMoney);
        if (m.isFix != null && m.hasOwnProperty("isFix"))
            w.uint32(72).bool(m.isFix);
        if (m.downloadaddress != null && m.hasOwnProperty("downloadaddress"))
            w.uint32(82).string(m.downloadaddress);
        if (m.normalProxyInfo != null && m.normalProxyInfo.length) {
            for (var i = 0; i < m.normalProxyInfo.length; ++i)
                $root.NormalProxyInfo.encode(m.normalProxyInfo[i], w.uint32(90).fork()).ldelim();
        }
        if (m.bankProxyInfo != null && m.bankProxyInfo.length) {
            for (var i = 0; i < m.bankProxyInfo.length; ++i)
                $root.BankProxyInfo.encode(m.bankProxyInfo[i], w.uint32(98).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RechargeInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeInfo} RechargeInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.channelType = r.int32();
                break;
            case 2:
                m.channelTypeDesc = r.string();
                break;
            case 3:
                m.res = r.string();
                break;
            case 4:
                m.desc = r.string();
                break;
            case 5:
                if (!(m.chargeMoney && m.chargeMoney.length))
                    m.chargeMoney = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2)
                        m.chargeMoney.push(r.int32());
                } else
                    m.chargeMoney.push(r.int32());
                break;
            case 6:
                if (!(m.proxyInfo && m.proxyInfo.length))
                    m.proxyInfo = [];
                m.proxyInfo.push($root.ProxyInfo.decode(r, r.uint32()));
                break;
            case 7:
                m.sign = r.string();
                break;
            case 8:
                m.minChargeMoney = r.int32();
                break;
            case 9:
                m.isFix = r.bool();
                break;
            case 10:
                m.downloadaddress = r.string();
                break;
            case 11:
                if (!(m.normalProxyInfo && m.normalProxyInfo.length))
                    m.normalProxyInfo = [];
                m.normalProxyInfo.push($root.NormalProxyInfo.decode(r, r.uint32()));
                break;
            case 12:
                if (!(m.bankProxyInfo && m.bankProxyInfo.length))
                    m.bankProxyInfo = [];
                m.bankProxyInfo.push($root.BankProxyInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("channelType"))
            throw $util.ProtocolError("missing required 'channelType'", { instance: m });
        if (!m.hasOwnProperty("channelTypeDesc"))
            throw $util.ProtocolError("missing required 'channelTypeDesc'", { instance: m });
        if (!m.hasOwnProperty("res"))
            throw $util.ProtocolError("missing required 'res'", { instance: m });
        if (!m.hasOwnProperty("desc"))
            throw $util.ProtocolError("missing required 'desc'", { instance: m });
        return m;
    };

    return RechargeInfo;
})();

$root.RechargeListResponse = (function() {

    /**
     * Properties of a RechargeListResponse.
     * @exports IRechargeListResponse
     * @interface IRechargeListResponse
     * @property {Array.<IRechargeInfo>|null} [rechargeInfo] RechargeListResponse rechargeInfo
     */

    /**
     * Constructs a new RechargeListResponse.
     * @exports RechargeListResponse
     * @classdesc Represents a RechargeListResponse.
     * @implements IRechargeListResponse
     * @constructor
     * @param {IRechargeListResponse=} [p] Properties to set
     */
    function RechargeListResponse(p) {
        this.rechargeInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RechargeListResponse rechargeInfo.
     * @member {Array.<IRechargeInfo>} rechargeInfo
     * @memberof RechargeListResponse
     * @instance
     */
    RechargeListResponse.prototype.rechargeInfo = $util.emptyArray;

    /**
     * Creates a new RechargeListResponse instance using the specified properties.
     * @function create
     * @memberof RechargeListResponse
     * @static
     * @param {IRechargeListResponse=} [properties] Properties to set
     * @returns {RechargeListResponse} RechargeListResponse instance
     */
    RechargeListResponse.create = function create(properties) {
        return new RechargeListResponse(properties);
    };

    /**
     * Encodes the specified RechargeListResponse message. Does not implicitly {@link RechargeListResponse.verify|verify} messages.
     * @function encode
     * @memberof RechargeListResponse
     * @static
     * @param {IRechargeListResponse} m RechargeListResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeListResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.rechargeInfo != null && m.rechargeInfo.length) {
            for (var i = 0; i < m.rechargeInfo.length; ++i)
                $root.RechargeInfo.encode(m.rechargeInfo[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RechargeListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeListResponse} RechargeListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeListResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeListResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.rechargeInfo && m.rechargeInfo.length))
                    m.rechargeInfo = [];
                m.rechargeInfo.push($root.RechargeInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RechargeListResponse;
})();

$root.RechargeRequest = (function() {

    /**
     * Properties of a RechargeRequest.
     * @exports IRechargeRequest
     * @interface IRechargeRequest
     * @property {number} chargeMoney RechargeRequest chargeMoney
     * @property {ChannelType} channelType RechargeRequest channelType
     * @property {string} clientIp RechargeRequest clientIp
     */

    /**
     * Constructs a new RechargeRequest.
     * @exports RechargeRequest
     * @classdesc Represents a RechargeRequest.
     * @implements IRechargeRequest
     * @constructor
     * @param {IRechargeRequest=} [p] Properties to set
     */
    function RechargeRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RechargeRequest chargeMoney.
     * @member {number} chargeMoney
     * @memberof RechargeRequest
     * @instance
     */
    RechargeRequest.prototype.chargeMoney = 0;

    /**
     * RechargeRequest channelType.
     * @member {ChannelType} channelType
     * @memberof RechargeRequest
     * @instance
     */
    RechargeRequest.prototype.channelType = 0;

    /**
     * RechargeRequest clientIp.
     * @member {string} clientIp
     * @memberof RechargeRequest
     * @instance
     */
    RechargeRequest.prototype.clientIp = "";

    /**
     * Creates a new RechargeRequest instance using the specified properties.
     * @function create
     * @memberof RechargeRequest
     * @static
     * @param {IRechargeRequest=} [properties] Properties to set
     * @returns {RechargeRequest} RechargeRequest instance
     */
    RechargeRequest.create = function create(properties) {
        return new RechargeRequest(properties);
    };

    /**
     * Encodes the specified RechargeRequest message. Does not implicitly {@link RechargeRequest.verify|verify} messages.
     * @function encode
     * @memberof RechargeRequest
     * @static
     * @param {IRechargeRequest} m RechargeRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int32(m.chargeMoney);
        w.uint32(16).int32(m.channelType);
        w.uint32(26).string(m.clientIp);
        return w;
    };

    /**
     * Decodes a RechargeRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeRequest} RechargeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.chargeMoney = r.int32();
                break;
            case 2:
                m.channelType = r.int32();
                break;
            case 3:
                m.clientIp = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("chargeMoney"))
            throw $util.ProtocolError("missing required 'chargeMoney'", { instance: m });
        if (!m.hasOwnProperty("channelType"))
            throw $util.ProtocolError("missing required 'channelType'", { instance: m });
        if (!m.hasOwnProperty("clientIp"))
            throw $util.ProtocolError("missing required 'clientIp'", { instance: m });
        return m;
    };

    return RechargeRequest;
})();

$root.RechargeResponse = (function() {

    /**
     * Properties of a RechargeResponse.
     * @exports IRechargeResponse
     * @interface IRechargeResponse
     * @property {boolean} isSuccess RechargeResponse isSuccess
     * @property {string|null} [tips] RechargeResponse tips
     * @property {string|null} [rechargeUrl] RechargeResponse rechargeUrl
     * @property {string|null} [orderNo] RechargeResponse orderNo
     * @property {string|null} [orderCreateTime] RechargeResponse orderCreateTime
     */

    /**
     * Constructs a new RechargeResponse.
     * @exports RechargeResponse
     * @classdesc Represents a RechargeResponse.
     * @implements IRechargeResponse
     * @constructor
     * @param {IRechargeResponse=} [p] Properties to set
     */
    function RechargeResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RechargeResponse isSuccess.
     * @member {boolean} isSuccess
     * @memberof RechargeResponse
     * @instance
     */
    RechargeResponse.prototype.isSuccess = false;

    /**
     * RechargeResponse tips.
     * @member {string} tips
     * @memberof RechargeResponse
     * @instance
     */
    RechargeResponse.prototype.tips = "";

    /**
     * RechargeResponse rechargeUrl.
     * @member {string} rechargeUrl
     * @memberof RechargeResponse
     * @instance
     */
    RechargeResponse.prototype.rechargeUrl = "";

    /**
     * RechargeResponse orderNo.
     * @member {string} orderNo
     * @memberof RechargeResponse
     * @instance
     */
    RechargeResponse.prototype.orderNo = "";

    /**
     * RechargeResponse orderCreateTime.
     * @member {string} orderCreateTime
     * @memberof RechargeResponse
     * @instance
     */
    RechargeResponse.prototype.orderCreateTime = "";

    /**
     * Creates a new RechargeResponse instance using the specified properties.
     * @function create
     * @memberof RechargeResponse
     * @static
     * @param {IRechargeResponse=} [properties] Properties to set
     * @returns {RechargeResponse} RechargeResponse instance
     */
    RechargeResponse.create = function create(properties) {
        return new RechargeResponse(properties);
    };

    /**
     * Encodes the specified RechargeResponse message. Does not implicitly {@link RechargeResponse.verify|verify} messages.
     * @function encode
     * @memberof RechargeResponse
     * @static
     * @param {IRechargeResponse} m RechargeResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(18).string(m.tips);
        if (m.rechargeUrl != null && m.hasOwnProperty("rechargeUrl"))
            w.uint32(26).string(m.rechargeUrl);
        if (m.orderNo != null && m.hasOwnProperty("orderNo"))
            w.uint32(34).string(m.orderNo);
        if (m.orderCreateTime != null && m.hasOwnProperty("orderCreateTime"))
            w.uint32(42).string(m.orderCreateTime);
        return w;
    };

    /**
     * Decodes a RechargeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeResponse} RechargeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.isSuccess = r.bool();
                break;
            case 2:
                m.tips = r.string();
                break;
            case 3:
                m.rechargeUrl = r.string();
                break;
            case 4:
                m.orderNo = r.string();
                break;
            case 5:
                m.orderCreateTime = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        return m;
    };

    return RechargeResponse;
})();

$root.RechargeProxyRefreshReq = (function() {

    /**
     * Properties of a RechargeProxyRefreshReq.
     * @exports IRechargeProxyRefreshReq
     * @interface IRechargeProxyRefreshReq
     */

    /**
     * Constructs a new RechargeProxyRefreshReq.
     * @exports RechargeProxyRefreshReq
     * @classdesc Represents a RechargeProxyRefreshReq.
     * @implements IRechargeProxyRefreshReq
     * @constructor
     * @param {IRechargeProxyRefreshReq=} [p] Properties to set
     */
    function RechargeProxyRefreshReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new RechargeProxyRefreshReq instance using the specified properties.
     * @function create
     * @memberof RechargeProxyRefreshReq
     * @static
     * @param {IRechargeProxyRefreshReq=} [properties] Properties to set
     * @returns {RechargeProxyRefreshReq} RechargeProxyRefreshReq instance
     */
    RechargeProxyRefreshReq.create = function create(properties) {
        return new RechargeProxyRefreshReq(properties);
    };

    /**
     * Encodes the specified RechargeProxyRefreshReq message. Does not implicitly {@link RechargeProxyRefreshReq.verify|verify} messages.
     * @function encode
     * @memberof RechargeProxyRefreshReq
     * @static
     * @param {IRechargeProxyRefreshReq} m RechargeProxyRefreshReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeProxyRefreshReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a RechargeProxyRefreshReq message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeProxyRefreshReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeProxyRefreshReq} RechargeProxyRefreshReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeProxyRefreshReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeProxyRefreshReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RechargeProxyRefreshReq;
})();

$root.AccountGetMoneyResponse = (function() {

    /**
     * Properties of an AccountGetMoneyResponse.
     * @exports IAccountGetMoneyResponse
     * @interface IAccountGetMoneyResponse
     * @property {string} chargeMoney AccountGetMoneyResponse chargeMoney
     * @property {string|null} [order] AccountGetMoneyResponse order
     * @property {ChannelType|null} [type] AccountGetMoneyResponse type
     * @property {number|null} [chargeRewardValue] AccountGetMoneyResponse chargeRewardValue
     */

    /**
     * Constructs a new AccountGetMoneyResponse.
     * @exports AccountGetMoneyResponse
     * @classdesc Represents an AccountGetMoneyResponse.
     * @implements IAccountGetMoneyResponse
     * @constructor
     * @param {IAccountGetMoneyResponse=} [p] Properties to set
     */
    function AccountGetMoneyResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * AccountGetMoneyResponse chargeMoney.
     * @member {string} chargeMoney
     * @memberof AccountGetMoneyResponse
     * @instance
     */
    AccountGetMoneyResponse.prototype.chargeMoney = "";

    /**
     * AccountGetMoneyResponse order.
     * @member {string} order
     * @memberof AccountGetMoneyResponse
     * @instance
     */
    AccountGetMoneyResponse.prototype.order = "";

    /**
     * AccountGetMoneyResponse type.
     * @member {ChannelType} type
     * @memberof AccountGetMoneyResponse
     * @instance
     */
    AccountGetMoneyResponse.prototype.type = 0;

    /**
     * AccountGetMoneyResponse chargeRewardValue.
     * @member {number} chargeRewardValue
     * @memberof AccountGetMoneyResponse
     * @instance
     */
    AccountGetMoneyResponse.prototype.chargeRewardValue = 0;

    /**
     * Creates a new AccountGetMoneyResponse instance using the specified properties.
     * @function create
     * @memberof AccountGetMoneyResponse
     * @static
     * @param {IAccountGetMoneyResponse=} [properties] Properties to set
     * @returns {AccountGetMoneyResponse} AccountGetMoneyResponse instance
     */
    AccountGetMoneyResponse.create = function create(properties) {
        return new AccountGetMoneyResponse(properties);
    };

    /**
     * Encodes the specified AccountGetMoneyResponse message. Does not implicitly {@link AccountGetMoneyResponse.verify|verify} messages.
     * @function encode
     * @memberof AccountGetMoneyResponse
     * @static
     * @param {IAccountGetMoneyResponse} m AccountGetMoneyResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountGetMoneyResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.chargeMoney);
        if (m.order != null && m.hasOwnProperty("order"))
            w.uint32(18).string(m.order);
        if (m.type != null && m.hasOwnProperty("type"))
            w.uint32(24).int32(m.type);
        if (m.chargeRewardValue != null && m.hasOwnProperty("chargeRewardValue"))
            w.uint32(32).int32(m.chargeRewardValue);
        return w;
    };

    /**
     * Decodes an AccountGetMoneyResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AccountGetMoneyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {AccountGetMoneyResponse} AccountGetMoneyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountGetMoneyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.AccountGetMoneyResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.chargeMoney = r.string();
                break;
            case 2:
                m.order = r.string();
                break;
            case 3:
                m.type = r.int32();
                break;
            case 4:
                m.chargeRewardValue = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("chargeMoney"))
            throw $util.ProtocolError("missing required 'chargeMoney'", { instance: m });
        return m;
    };

    return AccountGetMoneyResponse;
})();

$root.PayOrderConfirmReq = (function() {

    /**
     * Properties of a PayOrderConfirmReq.
     * @exports IPayOrderConfirmReq
     * @interface IPayOrderConfirmReq
     * @property {string} order PayOrderConfirmReq order
     */

    /**
     * Constructs a new PayOrderConfirmReq.
     * @exports PayOrderConfirmReq
     * @classdesc Represents a PayOrderConfirmReq.
     * @implements IPayOrderConfirmReq
     * @constructor
     * @param {IPayOrderConfirmReq=} [p] Properties to set
     */
    function PayOrderConfirmReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * PayOrderConfirmReq order.
     * @member {string} order
     * @memberof PayOrderConfirmReq
     * @instance
     */
    PayOrderConfirmReq.prototype.order = "";

    /**
     * Creates a new PayOrderConfirmReq instance using the specified properties.
     * @function create
     * @memberof PayOrderConfirmReq
     * @static
     * @param {IPayOrderConfirmReq=} [properties] Properties to set
     * @returns {PayOrderConfirmReq} PayOrderConfirmReq instance
     */
    PayOrderConfirmReq.create = function create(properties) {
        return new PayOrderConfirmReq(properties);
    };

    /**
     * Encodes the specified PayOrderConfirmReq message. Does not implicitly {@link PayOrderConfirmReq.verify|verify} messages.
     * @function encode
     * @memberof PayOrderConfirmReq
     * @static
     * @param {IPayOrderConfirmReq} m PayOrderConfirmReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PayOrderConfirmReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.order);
        return w;
    };

    /**
     * Decodes a PayOrderConfirmReq message from the specified reader or buffer.
     * @function decode
     * @memberof PayOrderConfirmReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {PayOrderConfirmReq} PayOrderConfirmReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PayOrderConfirmReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.PayOrderConfirmReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.order = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("order"))
            throw $util.ProtocolError("missing required 'order'", { instance: m });
        return m;
    };

    return PayOrderConfirmReq;
})();

$root.RechargeProxyRefreshRes = (function() {

    /**
     * Properties of a RechargeProxyRefreshRes.
     * @exports IRechargeProxyRefreshRes
     * @interface IRechargeProxyRefreshRes
     * @property {Array.<IProxyInfo>|null} [proxyInfo] RechargeProxyRefreshRes proxyInfo
     * @property {Array.<INormalProxyInfo>|null} [normalProxyInfo] RechargeProxyRefreshRes normalProxyInfo
     */

    /**
     * Constructs a new RechargeProxyRefreshRes.
     * @exports RechargeProxyRefreshRes
     * @classdesc Represents a RechargeProxyRefreshRes.
     * @implements IRechargeProxyRefreshRes
     * @constructor
     * @param {IRechargeProxyRefreshRes=} [p] Properties to set
     */
    function RechargeProxyRefreshRes(p) {
        this.proxyInfo = [];
        this.normalProxyInfo = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RechargeProxyRefreshRes proxyInfo.
     * @member {Array.<IProxyInfo>} proxyInfo
     * @memberof RechargeProxyRefreshRes
     * @instance
     */
    RechargeProxyRefreshRes.prototype.proxyInfo = $util.emptyArray;

    /**
     * RechargeProxyRefreshRes normalProxyInfo.
     * @member {Array.<INormalProxyInfo>} normalProxyInfo
     * @memberof RechargeProxyRefreshRes
     * @instance
     */
    RechargeProxyRefreshRes.prototype.normalProxyInfo = $util.emptyArray;

    /**
     * Creates a new RechargeProxyRefreshRes instance using the specified properties.
     * @function create
     * @memberof RechargeProxyRefreshRes
     * @static
     * @param {IRechargeProxyRefreshRes=} [properties] Properties to set
     * @returns {RechargeProxyRefreshRes} RechargeProxyRefreshRes instance
     */
    RechargeProxyRefreshRes.create = function create(properties) {
        return new RechargeProxyRefreshRes(properties);
    };

    /**
     * Encodes the specified RechargeProxyRefreshRes message. Does not implicitly {@link RechargeProxyRefreshRes.verify|verify} messages.
     * @function encode
     * @memberof RechargeProxyRefreshRes
     * @static
     * @param {IRechargeProxyRefreshRes} m RechargeProxyRefreshRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RechargeProxyRefreshRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.proxyInfo != null && m.proxyInfo.length) {
            for (var i = 0; i < m.proxyInfo.length; ++i)
                $root.ProxyInfo.encode(m.proxyInfo[i], w.uint32(10).fork()).ldelim();
        }
        if (m.normalProxyInfo != null && m.normalProxyInfo.length) {
            for (var i = 0; i < m.normalProxyInfo.length; ++i)
                $root.NormalProxyInfo.encode(m.normalProxyInfo[i], w.uint32(18).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a RechargeProxyRefreshRes message from the specified reader or buffer.
     * @function decode
     * @memberof RechargeProxyRefreshRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RechargeProxyRefreshRes} RechargeProxyRefreshRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RechargeProxyRefreshRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RechargeProxyRefreshRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.proxyInfo && m.proxyInfo.length))
                    m.proxyInfo = [];
                m.proxyInfo.push($root.ProxyInfo.decode(r, r.uint32()));
                break;
            case 2:
                if (!(m.normalProxyInfo && m.normalProxyInfo.length))
                    m.normalProxyInfo = [];
                m.normalProxyInfo.push($root.NormalProxyInfo.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return RechargeProxyRefreshRes;
})();

$root.IAPVerifyRequest = (function() {

    /**
     * Properties of a IAPVerifyRequest.
     * @exports IIAPVerifyRequest
     * @interface IIAPVerifyRequest
     * @property {string} uniqueId IAPVerifyRequest uniqueId
     * @property {string} payload IAPVerifyRequest payload
     */

    /**
     * Constructs a new IAPVerifyRequest.
     * @exports IAPVerifyRequest
     * @classdesc Represents a IAPVerifyRequest.
     * @implements IIAPVerifyRequest
     * @constructor
     * @param {IIAPVerifyRequest=} [p] Properties to set
     */
    function IAPVerifyRequest(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * IAPVerifyRequest uniqueId.
     * @member {string} uniqueId
     * @memberof IAPVerifyRequest
     * @instance
     */
    IAPVerifyRequest.prototype.uniqueId = "";

    /**
     * IAPVerifyRequest payload.
     * @member {string} payload
     * @memberof IAPVerifyRequest
     * @instance
     */
    IAPVerifyRequest.prototype.payload = "";

    /**
     * Creates a new IAPVerifyRequest instance using the specified properties.
     * @function create
     * @memberof IAPVerifyRequest
     * @static
     * @param {IIAPVerifyRequest=} [properties] Properties to set
     * @returns {IAPVerifyRequest} IAPVerifyRequest instance
     */
    IAPVerifyRequest.create = function create(properties) {
        return new IAPVerifyRequest(properties);
    };

    /**
     * Encodes the specified IAPVerifyRequest message. Does not implicitly {@link IAPVerifyRequest.verify|verify} messages.
     * @function encode
     * @memberof IAPVerifyRequest
     * @static
     * @param {IIAPVerifyRequest} m IAPVerifyRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IAPVerifyRequest.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uniqueId);
        w.uint32(18).string(m.payload);
        return w;
    };

    /**
     * Decodes a IAPVerifyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof IAPVerifyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IAPVerifyRequest} IAPVerifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IAPVerifyRequest.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IAPVerifyRequest();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uniqueId = r.string();
                break;
            case 2:
                m.payload = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uniqueId"))
            throw $util.ProtocolError("missing required 'uniqueId'", { instance: m });
        if (!m.hasOwnProperty("payload"))
            throw $util.ProtocolError("missing required 'payload'", { instance: m });
        return m;
    };

    return IAPVerifyRequest;
})();

$root.IAPVerifyResponse = (function() {

    /**
     * Properties of a IAPVerifyResponse.
     * @exports IIAPVerifyResponse
     * @interface IIAPVerifyResponse
     */

    /**
     * Constructs a new IAPVerifyResponse.
     * @exports IAPVerifyResponse
     * @classdesc Represents a IAPVerifyResponse.
     * @implements IIAPVerifyResponse
     * @constructor
     * @param {IIAPVerifyResponse=} [p] Properties to set
     */
    function IAPVerifyResponse(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new IAPVerifyResponse instance using the specified properties.
     * @function create
     * @memberof IAPVerifyResponse
     * @static
     * @param {IIAPVerifyResponse=} [properties] Properties to set
     * @returns {IAPVerifyResponse} IAPVerifyResponse instance
     */
    IAPVerifyResponse.create = function create(properties) {
        return new IAPVerifyResponse(properties);
    };

    /**
     * Encodes the specified IAPVerifyResponse message. Does not implicitly {@link IAPVerifyResponse.verify|verify} messages.
     * @function encode
     * @memberof IAPVerifyResponse
     * @static
     * @param {IIAPVerifyResponse} m IAPVerifyResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IAPVerifyResponse.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a IAPVerifyResponse message from the specified reader or buffer.
     * @function decode
     * @memberof IAPVerifyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {IAPVerifyResponse} IAPVerifyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IAPVerifyResponse.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.IAPVerifyResponse();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return IAPVerifyResponse;
})();

$root.NotifyIAPVerifyFinish = (function() {

    /**
     * Properties of a NotifyIAPVerifyFinish.
     * @exports INotifyIAPVerifyFinish
     * @interface INotifyIAPVerifyFinish
     * @property {string} uniqueId NotifyIAPVerifyFinish uniqueId
     */

    /**
     * Constructs a new NotifyIAPVerifyFinish.
     * @exports NotifyIAPVerifyFinish
     * @classdesc Represents a NotifyIAPVerifyFinish.
     * @implements INotifyIAPVerifyFinish
     * @constructor
     * @param {INotifyIAPVerifyFinish=} [p] Properties to set
     */
    function NotifyIAPVerifyFinish(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * NotifyIAPVerifyFinish uniqueId.
     * @member {string} uniqueId
     * @memberof NotifyIAPVerifyFinish
     * @instance
     */
    NotifyIAPVerifyFinish.prototype.uniqueId = "";

    /**
     * Creates a new NotifyIAPVerifyFinish instance using the specified properties.
     * @function create
     * @memberof NotifyIAPVerifyFinish
     * @static
     * @param {INotifyIAPVerifyFinish=} [properties] Properties to set
     * @returns {NotifyIAPVerifyFinish} NotifyIAPVerifyFinish instance
     */
    NotifyIAPVerifyFinish.create = function create(properties) {
        return new NotifyIAPVerifyFinish(properties);
    };

    /**
     * Encodes the specified NotifyIAPVerifyFinish message. Does not implicitly {@link NotifyIAPVerifyFinish.verify|verify} messages.
     * @function encode
     * @memberof NotifyIAPVerifyFinish
     * @static
     * @param {INotifyIAPVerifyFinish} m NotifyIAPVerifyFinish message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotifyIAPVerifyFinish.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.uniqueId);
        return w;
    };

    /**
     * Decodes a NotifyIAPVerifyFinish message from the specified reader or buffer.
     * @function decode
     * @memberof NotifyIAPVerifyFinish
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {NotifyIAPVerifyFinish} NotifyIAPVerifyFinish
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotifyIAPVerifyFinish.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.NotifyIAPVerifyFinish();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.uniqueId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("uniqueId"))
            throw $util.ProtocolError("missing required 'uniqueId'", { instance: m });
        return m;
    };

    return NotifyIAPVerifyFinish;
})();

$root.CreateOrderReq = (function() {

    /**
     * Properties of a CreateOrderReq.
     * @exports ICreateOrderReq
     * @interface ICreateOrderReq
     * @property {number|Long} playerId CreateOrderReq playerId
     * @property {string} chargeChannel CreateOrderReq chargeChannel
     * @property {number} rechargeMoney CreateOrderReq rechargeMoney
     * @property {string} orderNo CreateOrderReq orderNo
     * @property {string} orderName CreateOrderReq orderName
     * @property {number} chargeType CreateOrderReq chargeType
     * @property {string} clientIp CreateOrderReq clientIp
     * @property {string} extraInfo CreateOrderReq extraInfo
     * @property {string} hallIp CreateOrderReq hallIp
     * @property {number} hallport CreateOrderReq hallport
     * @property {number} seq CreateOrderReq seq
     */

    /**
     * Constructs a new CreateOrderReq.
     * @exports CreateOrderReq
     * @classdesc Represents a CreateOrderReq.
     * @implements ICreateOrderReq
     * @constructor
     * @param {ICreateOrderReq=} [p] Properties to set
     */
    function CreateOrderReq(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreateOrderReq playerId.
     * @member {number|Long} playerId
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CreateOrderReq chargeChannel.
     * @member {string} chargeChannel
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.chargeChannel = "";

    /**
     * CreateOrderReq rechargeMoney.
     * @member {number} rechargeMoney
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.rechargeMoney = 0;

    /**
     * CreateOrderReq orderNo.
     * @member {string} orderNo
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.orderNo = "";

    /**
     * CreateOrderReq orderName.
     * @member {string} orderName
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.orderName = "";

    /**
     * CreateOrderReq chargeType.
     * @member {number} chargeType
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.chargeType = 0;

    /**
     * CreateOrderReq clientIp.
     * @member {string} clientIp
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.clientIp = "";

    /**
     * CreateOrderReq extraInfo.
     * @member {string} extraInfo
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.extraInfo = "";

    /**
     * CreateOrderReq hallIp.
     * @member {string} hallIp
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.hallIp = "";

    /**
     * CreateOrderReq hallport.
     * @member {number} hallport
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.hallport = 0;

    /**
     * CreateOrderReq seq.
     * @member {number} seq
     * @memberof CreateOrderReq
     * @instance
     */
    CreateOrderReq.prototype.seq = 0;

    /**
     * Creates a new CreateOrderReq instance using the specified properties.
     * @function create
     * @memberof CreateOrderReq
     * @static
     * @param {ICreateOrderReq=} [properties] Properties to set
     * @returns {CreateOrderReq} CreateOrderReq instance
     */
    CreateOrderReq.create = function create(properties) {
        return new CreateOrderReq(properties);
    };

    /**
     * Encodes the specified CreateOrderReq message. Does not implicitly {@link CreateOrderReq.verify|verify} messages.
     * @function encode
     * @memberof CreateOrderReq
     * @static
     * @param {ICreateOrderReq} m CreateOrderReq message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateOrderReq.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(18).string(m.chargeChannel);
        w.uint32(24).int32(m.rechargeMoney);
        w.uint32(34).string(m.orderNo);
        w.uint32(42).string(m.orderName);
        w.uint32(48).int32(m.chargeType);
        w.uint32(58).string(m.clientIp);
        w.uint32(66).string(m.extraInfo);
        w.uint32(74).string(m.hallIp);
        w.uint32(80).int32(m.hallport);
        w.uint32(88).int32(m.seq);
        return w;
    };

    /**
     * Decodes a CreateOrderReq message from the specified reader or buffer.
     * @function decode
     * @memberof CreateOrderReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreateOrderReq} CreateOrderReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateOrderReq.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreateOrderReq();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.chargeChannel = r.string();
                break;
            case 3:
                m.rechargeMoney = r.int32();
                break;
            case 4:
                m.orderNo = r.string();
                break;
            case 5:
                m.orderName = r.string();
                break;
            case 6:
                m.chargeType = r.int32();
                break;
            case 7:
                m.clientIp = r.string();
                break;
            case 8:
                m.extraInfo = r.string();
                break;
            case 9:
                m.hallIp = r.string();
                break;
            case 10:
                m.hallport = r.int32();
                break;
            case 11:
                m.seq = r.int32();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("chargeChannel"))
            throw $util.ProtocolError("missing required 'chargeChannel'", { instance: m });
        if (!m.hasOwnProperty("rechargeMoney"))
            throw $util.ProtocolError("missing required 'rechargeMoney'", { instance: m });
        if (!m.hasOwnProperty("orderNo"))
            throw $util.ProtocolError("missing required 'orderNo'", { instance: m });
        if (!m.hasOwnProperty("orderName"))
            throw $util.ProtocolError("missing required 'orderName'", { instance: m });
        if (!m.hasOwnProperty("chargeType"))
            throw $util.ProtocolError("missing required 'chargeType'", { instance: m });
        if (!m.hasOwnProperty("clientIp"))
            throw $util.ProtocolError("missing required 'clientIp'", { instance: m });
        if (!m.hasOwnProperty("extraInfo"))
            throw $util.ProtocolError("missing required 'extraInfo'", { instance: m });
        if (!m.hasOwnProperty("hallIp"))
            throw $util.ProtocolError("missing required 'hallIp'", { instance: m });
        if (!m.hasOwnProperty("hallport"))
            throw $util.ProtocolError("missing required 'hallport'", { instance: m });
        if (!m.hasOwnProperty("seq"))
            throw $util.ProtocolError("missing required 'seq'", { instance: m });
        return m;
    };

    return CreateOrderReq;
})();

$root.CreateOrderRes = (function() {

    /**
     * Properties of a CreateOrderRes.
     * @exports ICreateOrderRes
     * @interface ICreateOrderRes
     * @property {number|Long} playerId CreateOrderRes playerId
     * @property {boolean} isSuccess CreateOrderRes isSuccess
     * @property {string|null} [tips] CreateOrderRes tips
     * @property {string|null} [rechargeUrl] CreateOrderRes rechargeUrl
     * @property {string|null} [orderNo] CreateOrderRes orderNo
     * @property {string|null} [tradeNo] CreateOrderRes tradeNo
     * @property {number|null} [rechargeMoney] CreateOrderRes rechargeMoney
     * @property {number} seq CreateOrderRes seq
     * @property {number|null} [chargeType] CreateOrderRes chargeType
     * @property {string|null} [chargeChannel] CreateOrderRes chargeChannel
     */

    /**
     * Constructs a new CreateOrderRes.
     * @exports CreateOrderRes
     * @classdesc Represents a CreateOrderRes.
     * @implements ICreateOrderRes
     * @constructor
     * @param {ICreateOrderRes=} [p] Properties to set
     */
    function CreateOrderRes(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * CreateOrderRes playerId.
     * @member {number|Long} playerId
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CreateOrderRes isSuccess.
     * @member {boolean} isSuccess
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.isSuccess = false;

    /**
     * CreateOrderRes tips.
     * @member {string} tips
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.tips = "";

    /**
     * CreateOrderRes rechargeUrl.
     * @member {string} rechargeUrl
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.rechargeUrl = "";

    /**
     * CreateOrderRes orderNo.
     * @member {string} orderNo
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.orderNo = "";

    /**
     * CreateOrderRes tradeNo.
     * @member {string} tradeNo
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.tradeNo = "";

    /**
     * CreateOrderRes rechargeMoney.
     * @member {number} rechargeMoney
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.rechargeMoney = 0;

    /**
     * CreateOrderRes seq.
     * @member {number} seq
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.seq = 0;

    /**
     * CreateOrderRes chargeType.
     * @member {number} chargeType
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.chargeType = 0;

    /**
     * CreateOrderRes chargeChannel.
     * @member {string} chargeChannel
     * @memberof CreateOrderRes
     * @instance
     */
    CreateOrderRes.prototype.chargeChannel = "";

    /**
     * Creates a new CreateOrderRes instance using the specified properties.
     * @function create
     * @memberof CreateOrderRes
     * @static
     * @param {ICreateOrderRes=} [properties] Properties to set
     * @returns {CreateOrderRes} CreateOrderRes instance
     */
    CreateOrderRes.create = function create(properties) {
        return new CreateOrderRes(properties);
    };

    /**
     * Encodes the specified CreateOrderRes message. Does not implicitly {@link CreateOrderRes.verify|verify} messages.
     * @function encode
     * @memberof CreateOrderRes
     * @static
     * @param {ICreateOrderRes} m CreateOrderRes message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateOrderRes.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).int64(m.playerId);
        w.uint32(16).bool(m.isSuccess);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(26).string(m.tips);
        if (m.rechargeUrl != null && m.hasOwnProperty("rechargeUrl"))
            w.uint32(34).string(m.rechargeUrl);
        if (m.orderNo != null && m.hasOwnProperty("orderNo"))
            w.uint32(42).string(m.orderNo);
        if (m.tradeNo != null && m.hasOwnProperty("tradeNo"))
            w.uint32(50).string(m.tradeNo);
        if (m.rechargeMoney != null && m.hasOwnProperty("rechargeMoney"))
            w.uint32(56).int32(m.rechargeMoney);
        w.uint32(64).int32(m.seq);
        if (m.chargeType != null && m.hasOwnProperty("chargeType"))
            w.uint32(72).int32(m.chargeType);
        if (m.chargeChannel != null && m.hasOwnProperty("chargeChannel"))
            w.uint32(82).string(m.chargeChannel);
        return w;
    };

    /**
     * Decodes a CreateOrderRes message from the specified reader or buffer.
     * @function decode
     * @memberof CreateOrderRes
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {CreateOrderRes} CreateOrderRes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateOrderRes.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.CreateOrderRes();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.playerId = r.int64();
                break;
            case 2:
                m.isSuccess = r.bool();
                break;
            case 3:
                m.tips = r.string();
                break;
            case 4:
                m.rechargeUrl = r.string();
                break;
            case 5:
                m.orderNo = r.string();
                break;
            case 6:
                m.tradeNo = r.string();
                break;
            case 7:
                m.rechargeMoney = r.int32();
                break;
            case 8:
                m.seq = r.int32();
                break;
            case 9:
                m.chargeType = r.int32();
                break;
            case 10:
                m.chargeChannel = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("playerId"))
            throw $util.ProtocolError("missing required 'playerId'", { instance: m });
        if (!m.hasOwnProperty("isSuccess"))
            throw $util.ProtocolError("missing required 'isSuccess'", { instance: m });
        if (!m.hasOwnProperty("seq"))
            throw $util.ProtocolError("missing required 'seq'", { instance: m });
        return m;
    };

    return CreateOrderRes;
})();

$root.ReqProxyServerInfo = (function() {

    /**
     * Properties of a ReqProxyServerInfo.
     * @exports IReqProxyServerInfo
     * @interface IReqProxyServerInfo
     */

    /**
     * Constructs a new ReqProxyServerInfo.
     * @exports ReqProxyServerInfo
     * @classdesc Represents a ReqProxyServerInfo.
     * @implements IReqProxyServerInfo
     * @constructor
     * @param {IReqProxyServerInfo=} [p] Properties to set
     */
    function ReqProxyServerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqProxyServerInfo instance using the specified properties.
     * @function create
     * @memberof ReqProxyServerInfo
     * @static
     * @param {IReqProxyServerInfo=} [properties] Properties to set
     * @returns {ReqProxyServerInfo} ReqProxyServerInfo instance
     */
    ReqProxyServerInfo.create = function create(properties) {
        return new ReqProxyServerInfo(properties);
    };

    /**
     * Encodes the specified ReqProxyServerInfo message. Does not implicitly {@link ReqProxyServerInfo.verify|verify} messages.
     * @function encode
     * @memberof ReqProxyServerInfo
     * @static
     * @param {IReqProxyServerInfo} m ReqProxyServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqProxyServerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqProxyServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ReqProxyServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqProxyServerInfo} ReqProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqProxyServerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqProxyServerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqProxyServerInfo;
})();

$root.ResProxyServerInfo = (function() {

    /**
     * Properties of a ResProxyServerInfo.
     * @exports IResProxyServerInfo
     * @interface IResProxyServerInfo
     * @property {boolean} success ResProxyServerInfo success
     * @property {string|null} [proxyChargeIp] ResProxyServerInfo proxyChargeIp
     * @property {number|null} [proxyChargePort] ResProxyServerInfo proxyChargePort
     * @property {string|null} [tips] ResProxyServerInfo tips
     */

    /**
     * Constructs a new ResProxyServerInfo.
     * @exports ResProxyServerInfo
     * @classdesc Represents a ResProxyServerInfo.
     * @implements IResProxyServerInfo
     * @constructor
     * @param {IResProxyServerInfo=} [p] Properties to set
     */
    function ResProxyServerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResProxyServerInfo success.
     * @member {boolean} success
     * @memberof ResProxyServerInfo
     * @instance
     */
    ResProxyServerInfo.prototype.success = false;

    /**
     * ResProxyServerInfo proxyChargeIp.
     * @member {string} proxyChargeIp
     * @memberof ResProxyServerInfo
     * @instance
     */
    ResProxyServerInfo.prototype.proxyChargeIp = "";

    /**
     * ResProxyServerInfo proxyChargePort.
     * @member {number} proxyChargePort
     * @memberof ResProxyServerInfo
     * @instance
     */
    ResProxyServerInfo.prototype.proxyChargePort = 0;

    /**
     * ResProxyServerInfo tips.
     * @member {string} tips
     * @memberof ResProxyServerInfo
     * @instance
     */
    ResProxyServerInfo.prototype.tips = "";

    /**
     * Creates a new ResProxyServerInfo instance using the specified properties.
     * @function create
     * @memberof ResProxyServerInfo
     * @static
     * @param {IResProxyServerInfo=} [properties] Properties to set
     * @returns {ResProxyServerInfo} ResProxyServerInfo instance
     */
    ResProxyServerInfo.create = function create(properties) {
        return new ResProxyServerInfo(properties);
    };

    /**
     * Encodes the specified ResProxyServerInfo message. Does not implicitly {@link ResProxyServerInfo.verify|verify} messages.
     * @function encode
     * @memberof ResProxyServerInfo
     * @static
     * @param {IResProxyServerInfo} m ResProxyServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResProxyServerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.proxyChargeIp != null && m.hasOwnProperty("proxyChargeIp"))
            w.uint32(18).string(m.proxyChargeIp);
        if (m.proxyChargePort != null && m.hasOwnProperty("proxyChargePort"))
            w.uint32(24).int32(m.proxyChargePort);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(34).string(m.tips);
        return w;
    };

    /**
     * Decodes a ResProxyServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ResProxyServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResProxyServerInfo} ResProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResProxyServerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResProxyServerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.proxyChargeIp = r.string();
                break;
            case 3:
                m.proxyChargePort = r.int32();
                break;
            case 4:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return ResProxyServerInfo;
})();

$root.ReqChargeRecord = (function() {

    /**
     * Properties of a ReqChargeRecord.
     * @exports IReqChargeRecord
     * @interface IReqChargeRecord
     */

    /**
     * Constructs a new ReqChargeRecord.
     * @exports ReqChargeRecord
     * @classdesc Represents a ReqChargeRecord.
     * @implements IReqChargeRecord
     * @constructor
     * @param {IReqChargeRecord=} [p] Properties to set
     */
    function ReqChargeRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqChargeRecord instance using the specified properties.
     * @function create
     * @memberof ReqChargeRecord
     * @static
     * @param {IReqChargeRecord=} [properties] Properties to set
     * @returns {ReqChargeRecord} ReqChargeRecord instance
     */
    ReqChargeRecord.create = function create(properties) {
        return new ReqChargeRecord(properties);
    };

    /**
     * Encodes the specified ReqChargeRecord message. Does not implicitly {@link ReqChargeRecord.verify|verify} messages.
     * @function encode
     * @memberof ReqChargeRecord
     * @static
     * @param {IReqChargeRecord} m ReqChargeRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqChargeRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqChargeRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ReqChargeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqChargeRecord} ReqChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqChargeRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqChargeRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqChargeRecord;
})();

$root.ChargeRecord = (function() {

    /**
     * Properties of a ChargeRecord.
     * @exports IChargeRecord
     * @interface IChargeRecord
     * @property {string} proxyName ChargeRecord proxyName
     * @property {number} chargeMoney ChargeRecord chargeMoney
     * @property {string|null} [orderNo] ChargeRecord orderNo
     * @property {string|null} [finishTime] ChargeRecord finishTime
     * @property {number|null} [startLevel] ChargeRecord startLevel
     * @property {string|null} [headIMG] ChargeRecord headIMG
     * @property {string|null} [proxyId] ChargeRecord proxyId
     */

    /**
     * Constructs a new ChargeRecord.
     * @exports ChargeRecord
     * @classdesc Represents a ChargeRecord.
     * @implements IChargeRecord
     * @constructor
     * @param {IChargeRecord=} [p] Properties to set
     */
    function ChargeRecord(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ChargeRecord proxyName.
     * @member {string} proxyName
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.proxyName = "";

    /**
     * ChargeRecord chargeMoney.
     * @member {number} chargeMoney
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.chargeMoney = 0;

    /**
     * ChargeRecord orderNo.
     * @member {string} orderNo
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.orderNo = "";

    /**
     * ChargeRecord finishTime.
     * @member {string} finishTime
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.finishTime = "";

    /**
     * ChargeRecord startLevel.
     * @member {number} startLevel
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.startLevel = 0;

    /**
     * ChargeRecord headIMG.
     * @member {string} headIMG
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.headIMG = "";

    /**
     * ChargeRecord proxyId.
     * @member {string} proxyId
     * @memberof ChargeRecord
     * @instance
     */
    ChargeRecord.prototype.proxyId = "";

    /**
     * Creates a new ChargeRecord instance using the specified properties.
     * @function create
     * @memberof ChargeRecord
     * @static
     * @param {IChargeRecord=} [properties] Properties to set
     * @returns {ChargeRecord} ChargeRecord instance
     */
    ChargeRecord.create = function create(properties) {
        return new ChargeRecord(properties);
    };

    /**
     * Encodes the specified ChargeRecord message. Does not implicitly {@link ChargeRecord.verify|verify} messages.
     * @function encode
     * @memberof ChargeRecord
     * @static
     * @param {IChargeRecord} m ChargeRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChargeRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(10).string(m.proxyName);
        w.uint32(16).int32(m.chargeMoney);
        if (m.orderNo != null && m.hasOwnProperty("orderNo"))
            w.uint32(26).string(m.orderNo);
        if (m.finishTime != null && m.hasOwnProperty("finishTime"))
            w.uint32(34).string(m.finishTime);
        if (m.startLevel != null && m.hasOwnProperty("startLevel"))
            w.uint32(40).int32(m.startLevel);
        if (m.headIMG != null && m.hasOwnProperty("headIMG"))
            w.uint32(50).string(m.headIMG);
        if (m.proxyId != null && m.hasOwnProperty("proxyId"))
            w.uint32(58).string(m.proxyId);
        return w;
    };

    /**
     * Decodes a ChargeRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ChargeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ChargeRecord} ChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChargeRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ChargeRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.proxyName = r.string();
                break;
            case 2:
                m.chargeMoney = r.int32();
                break;
            case 3:
                m.orderNo = r.string();
                break;
            case 4:
                m.finishTime = r.string();
                break;
            case 5:
                m.startLevel = r.int32();
                break;
            case 6:
                m.headIMG = r.string();
                break;
            case 7:
                m.proxyId = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("proxyName"))
            throw $util.ProtocolError("missing required 'proxyName'", { instance: m });
        if (!m.hasOwnProperty("chargeMoney"))
            throw $util.ProtocolError("missing required 'chargeMoney'", { instance: m });
        return m;
    };

    return ChargeRecord;
})();

$root.ResChargeRecord = (function() {

    /**
     * Properties of a ResChargeRecord.
     * @exports IResChargeRecord
     * @interface IResChargeRecord
     * @property {Array.<IChargeRecord>|null} [records] ResChargeRecord records
     */

    /**
     * Constructs a new ResChargeRecord.
     * @exports ResChargeRecord
     * @classdesc Represents a ResChargeRecord.
     * @implements IResChargeRecord
     * @constructor
     * @param {IResChargeRecord=} [p] Properties to set
     */
    function ResChargeRecord(p) {
        this.records = [];
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * ResChargeRecord records.
     * @member {Array.<IChargeRecord>} records
     * @memberof ResChargeRecord
     * @instance
     */
    ResChargeRecord.prototype.records = $util.emptyArray;

    /**
     * Creates a new ResChargeRecord instance using the specified properties.
     * @function create
     * @memberof ResChargeRecord
     * @static
     * @param {IResChargeRecord=} [properties] Properties to set
     * @returns {ResChargeRecord} ResChargeRecord instance
     */
    ResChargeRecord.create = function create(properties) {
        return new ResChargeRecord(properties);
    };

    /**
     * Encodes the specified ResChargeRecord message. Does not implicitly {@link ResChargeRecord.verify|verify} messages.
     * @function encode
     * @memberof ResChargeRecord
     * @static
     * @param {IResChargeRecord} m ResChargeRecord message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResChargeRecord.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.records != null && m.records.length) {
            for (var i = 0; i < m.records.length; ++i)
                $root.ChargeRecord.encode(m.records[i], w.uint32(10).fork()).ldelim();
        }
        return w;
    };

    /**
     * Decodes a ResChargeRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ResChargeRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ResChargeRecord} ResChargeRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResChargeRecord.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ResChargeRecord();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                if (!(m.records && m.records.length))
                    m.records = [];
                m.records.push($root.ChargeRecord.decode(r, r.uint32()));
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ResChargeRecord;
})();

$root.ReqBankProxyServerInfo = (function() {

    /**
     * Properties of a ReqBankProxyServerInfo.
     * @exports IReqBankProxyServerInfo
     * @interface IReqBankProxyServerInfo
     */

    /**
     * Constructs a new ReqBankProxyServerInfo.
     * @exports ReqBankProxyServerInfo
     * @classdesc Represents a ReqBankProxyServerInfo.
     * @implements IReqBankProxyServerInfo
     * @constructor
     * @param {IReqBankProxyServerInfo=} [p] Properties to set
     */
    function ReqBankProxyServerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * Creates a new ReqBankProxyServerInfo instance using the specified properties.
     * @function create
     * @memberof ReqBankProxyServerInfo
     * @static
     * @param {IReqBankProxyServerInfo=} [properties] Properties to set
     * @returns {ReqBankProxyServerInfo} ReqBankProxyServerInfo instance
     */
    ReqBankProxyServerInfo.create = function create(properties) {
        return new ReqBankProxyServerInfo(properties);
    };

    /**
     * Encodes the specified ReqBankProxyServerInfo message. Does not implicitly {@link ReqBankProxyServerInfo.verify|verify} messages.
     * @function encode
     * @memberof ReqBankProxyServerInfo
     * @static
     * @param {IReqBankProxyServerInfo} m ReqBankProxyServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqBankProxyServerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        return w;
    };

    /**
     * Decodes a ReqBankProxyServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ReqBankProxyServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {ReqBankProxyServerInfo} ReqBankProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqBankProxyServerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.ReqBankProxyServerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };

    return ReqBankProxyServerInfo;
})();

$root.RspBankProxyServerInfo = (function() {

    /**
     * Properties of a RspBankProxyServerInfo.
     * @exports IRspBankProxyServerInfo
     * @interface IRspBankProxyServerInfo
     * @property {boolean} success RspBankProxyServerInfo success
     * @property {string|null} [proxyChargeIp] RspBankProxyServerInfo proxyChargeIp
     * @property {number|null} [proxyChargePort] RspBankProxyServerInfo proxyChargePort
     * @property {string|null} [token] RspBankProxyServerInfo token
     * @property {string|null} [tips] RspBankProxyServerInfo tips
     */

    /**
     * Constructs a new RspBankProxyServerInfo.
     * @exports RspBankProxyServerInfo
     * @classdesc Represents a RspBankProxyServerInfo.
     * @implements IRspBankProxyServerInfo
     * @constructor
     * @param {IRspBankProxyServerInfo=} [p] Properties to set
     */
    function RspBankProxyServerInfo(p) {
        if (p)
            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                if (p[ks[i]] != null)
                    this[ks[i]] = p[ks[i]];
    }

    /**
     * RspBankProxyServerInfo success.
     * @member {boolean} success
     * @memberof RspBankProxyServerInfo
     * @instance
     */
    RspBankProxyServerInfo.prototype.success = false;

    /**
     * RspBankProxyServerInfo proxyChargeIp.
     * @member {string} proxyChargeIp
     * @memberof RspBankProxyServerInfo
     * @instance
     */
    RspBankProxyServerInfo.prototype.proxyChargeIp = "";

    /**
     * RspBankProxyServerInfo proxyChargePort.
     * @member {number} proxyChargePort
     * @memberof RspBankProxyServerInfo
     * @instance
     */
    RspBankProxyServerInfo.prototype.proxyChargePort = 0;

    /**
     * RspBankProxyServerInfo token.
     * @member {string} token
     * @memberof RspBankProxyServerInfo
     * @instance
     */
    RspBankProxyServerInfo.prototype.token = "";

    /**
     * RspBankProxyServerInfo tips.
     * @member {string} tips
     * @memberof RspBankProxyServerInfo
     * @instance
     */
    RspBankProxyServerInfo.prototype.tips = "";

    /**
     * Creates a new RspBankProxyServerInfo instance using the specified properties.
     * @function create
     * @memberof RspBankProxyServerInfo
     * @static
     * @param {IRspBankProxyServerInfo=} [properties] Properties to set
     * @returns {RspBankProxyServerInfo} RspBankProxyServerInfo instance
     */
    RspBankProxyServerInfo.create = function create(properties) {
        return new RspBankProxyServerInfo(properties);
    };

    /**
     * Encodes the specified RspBankProxyServerInfo message. Does not implicitly {@link RspBankProxyServerInfo.verify|verify} messages.
     * @function encode
     * @memberof RspBankProxyServerInfo
     * @static
     * @param {IRspBankProxyServerInfo} m RspBankProxyServerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RspBankProxyServerInfo.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        w.uint32(8).bool(m.success);
        if (m.proxyChargeIp != null && m.hasOwnProperty("proxyChargeIp"))
            w.uint32(18).string(m.proxyChargeIp);
        if (m.proxyChargePort != null && m.hasOwnProperty("proxyChargePort"))
            w.uint32(24).int32(m.proxyChargePort);
        if (m.token != null && m.hasOwnProperty("token"))
            w.uint32(34).string(m.token);
        if (m.tips != null && m.hasOwnProperty("tips"))
            w.uint32(42).string(m.tips);
        return w;
    };

    /**
     * Decodes a RspBankProxyServerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RspBankProxyServerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {RspBankProxyServerInfo} RspBankProxyServerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RspBankProxyServerInfo.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.RspBankProxyServerInfo();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.success = r.bool();
                break;
            case 2:
                m.proxyChargeIp = r.string();
                break;
            case 3:
                m.proxyChargePort = r.int32();
                break;
            case 4:
                m.token = r.string();
                break;
            case 5:
                m.tips = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        if (!m.hasOwnProperty("success"))
            throw $util.ProtocolError("missing required 'success'", { instance: m });
        return m;
    };

    return RspBankProxyServerInfo;
})();

module.exports = $root;
