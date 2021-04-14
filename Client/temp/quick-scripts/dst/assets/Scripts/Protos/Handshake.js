
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Protos/Handshake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b2b8fSIodMo4rPitRBbHyD', 'Handshake');
// Scripts/Protos/Handshake.js

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf"); // Common aliases


var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots.Handshake || ($protobuf.roots.Handshake = {});

$root.HandshakeRequest = function () {
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
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
      if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
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
    if (!w) w = $Writer.create();
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
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.HandshakeRequest();

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

    if (!m.hasOwnProperty("uid")) throw $util.ProtocolError("missing required 'uid'", {
      instance: m
    });
    if (!m.hasOwnProperty("token")) throw $util.ProtocolError("missing required 'token'", {
      instance: m
    });
    return m;
  };

  return HandshakeRequest;
}();

$root.HandshakeResponse = function () {
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
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
      if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
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
    if (!w) w = $Writer.create();
    w.uint32(8).int32(m.statusCode);
    if (m.errorMsg != null && m.hasOwnProperty("errorMsg")) w.uint32(18).string(m.errorMsg);
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
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.HandshakeResponse();

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

    if (!m.hasOwnProperty("statusCode")) throw $util.ProtocolError("missing required 'statusCode'", {
      instance: m
    });
    return m;
  };

  return HandshakeResponse;
}();

module.exports = $root;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHJvdG9zXFxIYW5kc2hha2UuanMiXSwibmFtZXMiOlsiJHByb3RvYnVmIiwicmVxdWlyZSIsIiRSZWFkZXIiLCJSZWFkZXIiLCIkV3JpdGVyIiwiV3JpdGVyIiwiJHV0aWwiLCJ1dGlsIiwiJHJvb3QiLCJyb290cyIsIkhhbmRzaGFrZSIsIkhhbmRzaGFrZVJlcXVlc3QiLCJwIiwia3MiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsInByb3RvdHlwZSIsInVpZCIsInRva2VuIiwiY3JlYXRlIiwicHJvcGVydGllcyIsImVuY29kZSIsIm0iLCJ3IiwidWludDMyIiwic3RyaW5nIiwiZGVjb2RlIiwiciIsImwiLCJjIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidCIsInNraXBUeXBlIiwiaGFzT3duUHJvcGVydHkiLCJQcm90b2NvbEVycm9yIiwiaW5zdGFuY2UiLCJIYW5kc2hha2VSZXNwb25zZSIsInN0YXR1c0NvZGUiLCJlcnJvck1zZyIsImludDMyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCLEVBRUE7OztBQUNBLElBQUlDLE9BQU8sR0FBR0YsU0FBUyxDQUFDRyxNQUF4QjtBQUFBLElBQWdDQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssTUFBcEQ7QUFBQSxJQUE0REMsS0FBSyxHQUFHTixTQUFTLENBQUNPLElBQTlFLEVBRUE7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHUixTQUFTLENBQUNTLEtBQVYsQ0FBZ0JDLFNBQWhCLEtBQThCVixTQUFTLENBQUNTLEtBQVYsQ0FBZ0JDLFNBQWhCLEdBQTRCLEVBQTFELENBQVo7O0FBRUFGLEtBQUssQ0FBQ0csZ0JBQU4sR0FBMEIsWUFBVztBQUVqQzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7QUFRQSxXQUFTQSxnQkFBVCxDQUEwQkMsQ0FBMUIs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SjtBQUNJRSxVQUFBQSxDQUFDLENBQUNPLFFBQUYsQ0FBV0QsQ0FBQyxHQUFHLENBQWY7QUFDQTtBQVRKO0FBV0g7O0FBQ0QsUUFBSSxDQUFDWCxDQUFDLENBQUNhLGNBQUYsQ0FBaUIsWUFBakIsQ0FBTCxFQUNJLE1BQU0vQixLQUFLLENBQUNnQyxhQUFOLENBQW9CLCtCQUFwQixFQUFxRDtBQUFFQyxNQUFBQSxRQUFRLEVBQUVmO0FBQVosS0FBckQsQ0FBTjtBQUNKLFdBQU9BLENBQVA7QUFDSCxHQXJCRDs7QUF1QkEsU0FBT2dCLGlCQUFQO0FBQ0gsQ0ExR3lCLEVBQTFCOztBQTRHQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsS0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qZXNsaW50LWRpc2FibGUsYmxvY2stc2NvcGVkLXZhcixpZC1sZW5ndGgsbm8tY29udHJvbC1yZWdleCxuby1tYWdpYy1udW1iZXJzLG5vLXByb3RvdHlwZS1idWlsdGlucyxuby1yZWRlY2xhcmUsbm8tc2hhZG93LG5vLXZhcixzb3J0LXZhcnMqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkcHJvdG9idWYgPSByZXF1aXJlKFwiLi9wcm90b2J1ZlwiKTtcblxuLy8gQ29tbW9uIGFsaWFzZXNcbnZhciAkUmVhZGVyID0gJHByb3RvYnVmLlJlYWRlciwgJFdyaXRlciA9ICRwcm90b2J1Zi5Xcml0ZXIsICR1dGlsID0gJHByb3RvYnVmLnV0aWw7XG5cbi8vIEV4cG9ydGVkIHJvb3QgbmFtZXNwYWNlXG52YXIgJHJvb3QgPSAkcHJvdG9idWYucm9vdHMuSGFuZHNoYWtlIHx8ICgkcHJvdG9idWYucm9vdHMuSGFuZHNoYWtlID0ge30pO1xuXG4kcm9vdC5IYW5kc2hha2VSZXF1ZXN0ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBvZiBhIEhhbmRzaGFrZVJlcXVlc3QuXG4gICAgICogQGV4cG9ydHMgSUhhbmRzaGFrZVJlcXVlc3RcbiAgICAgKiBAaW50ZXJmYWNlIElIYW5kc2hha2VSZXF1ZXN0XG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IHVpZCBIYW5kc2hha2VSZXF1ZXN0IHVpZFxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0b2tlbiBIYW5kc2hha2VSZXF1ZXN0IHRva2VuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEhhbmRzaGFrZVJlcXVlc3QuXG4gICAgICogQGV4cG9ydHMgSGFuZHNoYWtlUmVxdWVzdFxuICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEhhbmRzaGFrZVJlcXVlc3QuXG4gICAgICogQGltcGxlbWVudHMgSUhhbmRzaGFrZVJlcXVlc3RcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0lIYW5kc2hha2VSZXF1ZXN0PX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICovXG4gICAgZnVuY3Rpb24gSGFuZHNoYWtlUmVxdWVzdChwKSB7XG4gICAgICAgIGlmIChwKVxuICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kc2hha2VSZXF1ZXN0IHVpZC5cbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHVpZFxuICAgICAqIEBtZW1iZXJvZiBIYW5kc2hha2VSZXF1ZXN0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgSGFuZHNoYWtlUmVxdWVzdC5wcm90b3R5cGUudWlkID0gXCJcIjtcblxuICAgIC8qKlxuICAgICAqIEhhbmRzaGFrZVJlcXVlc3QgdG9rZW4uXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSB0b2tlblxuICAgICAqIEBtZW1iZXJvZiBIYW5kc2hha2VSZXF1ZXN0XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgSGFuZHNoYWtlUmVxdWVzdC5wcm90b3R5cGUudG9rZW4gPSBcIlwiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBIYW5kc2hha2VSZXF1ZXN0IGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICogQG1lbWJlcm9mIEhhbmRzaGFrZVJlcXVlc3RcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtJSGFuZHNoYWtlUmVxdWVzdD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAqIEByZXR1cm5zIHtIYW5kc2hha2VSZXF1ZXN0fSBIYW5kc2hha2VSZXF1ZXN0IGluc3RhbmNlXG4gICAgICovXG4gICAgSGFuZHNoYWtlUmVxdWVzdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICByZXR1cm4gbmV3IEhhbmRzaGFrZVJlcXVlc3QocHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBIYW5kc2hha2VSZXF1ZXN0IG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIEhhbmRzaGFrZVJlcXVlc3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAqIEBtZW1iZXJvZiBIYW5kc2hha2VSZXF1ZXN0XG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7SUhhbmRzaGFrZVJlcXVlc3R9IG0gSGFuZHNoYWtlUmVxdWVzdCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAqL1xuICAgIEhhbmRzaGFrZVJlcXVlc3QuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgIHcudWludDMyKDEwKS5zdHJpbmcobS51aWQpO1xuICAgICAgICB3LnVpbnQzMigxOCkuc3RyaW5nKG0udG9rZW4pO1xuICAgICAgICByZXR1cm4gdztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhIEhhbmRzaGFrZVJlcXVlc3QgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICogQG1lbWJlcm9mIEhhbmRzaGFrZVJlcXVlc3RcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAqIEByZXR1cm5zIHtIYW5kc2hha2VSZXF1ZXN0fSBIYW5kc2hha2VSZXF1ZXN0XG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgKi9cbiAgICBIYW5kc2hha2VSZXF1ZXN0LmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5IYW5kc2hha2VSZXF1ZXN0KCk7XG4gICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG0udWlkID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtLnRva2VuID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtLmhhc093blByb3BlcnR5KFwidWlkXCIpKVxuICAgICAgICAgICAgdGhyb3cgJHV0aWwuUHJvdG9jb2xFcnJvcihcIm1pc3NpbmcgcmVxdWlyZWQgJ3VpZCdcIiwgeyBpbnN0YW5jZTogbSB9KTtcbiAgICAgICAgaWYgKCFtLmhhc093blByb3BlcnR5KFwidG9rZW5cIikpXG4gICAgICAgICAgICB0aHJvdyAkdXRpbC5Qcm90b2NvbEVycm9yKFwibWlzc2luZyByZXF1aXJlZCAndG9rZW4nXCIsIHsgaW5zdGFuY2U6IG0gfSk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH07XG5cbiAgICByZXR1cm4gSGFuZHNoYWtlUmVxdWVzdDtcbn0pKCk7XG5cbiRyb290LkhhbmRzaGFrZVJlc3BvbnNlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBvZiBhIEhhbmRzaGFrZVJlc3BvbnNlLlxuICAgICAqIEBleHBvcnRzIElIYW5kc2hha2VSZXNwb25zZVxuICAgICAqIEBpbnRlcmZhY2UgSUhhbmRzaGFrZVJlc3BvbnNlXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXR1c0NvZGUgSGFuZHNoYWtlUmVzcG9uc2Ugc3RhdHVzQ29kZVxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtlcnJvck1zZ10gSGFuZHNoYWtlUmVzcG9uc2UgZXJyb3JNc2dcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgSGFuZHNoYWtlUmVzcG9uc2UuXG4gICAgICogQGV4cG9ydHMgSGFuZHNoYWtlUmVzcG9uc2VcbiAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBIYW5kc2hha2VSZXNwb25zZS5cbiAgICAgKiBAaW1wbGVtZW50cyBJSGFuZHNoYWtlUmVzcG9uc2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0lIYW5kc2hha2VSZXNwb25zZT19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEhhbmRzaGFrZVJlc3BvbnNlKHApIHtcbiAgICAgICAgaWYgKHApXG4gICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRzaGFrZVJlc3BvbnNlIHN0YXR1c0NvZGUuXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBzdGF0dXNDb2RlXG4gICAgICogQG1lbWJlcm9mIEhhbmRzaGFrZVJlc3BvbnNlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgSGFuZHNoYWtlUmVzcG9uc2UucHJvdG90eXBlLnN0YXR1c0NvZGUgPSAwO1xuXG4gICAgLyoqXG4gICAgICogSGFuZHNoYWtlUmVzcG9uc2UgZXJyb3JNc2cuXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBlcnJvck1zZ1xuICAgICAqIEBtZW1iZXJvZiBIYW5kc2hha2VSZXNwb25zZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIEhhbmRzaGFrZVJlc3BvbnNlLnByb3RvdHlwZS5lcnJvck1zZyA9IFwiXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEhhbmRzaGFrZVJlc3BvbnNlIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICogQG1lbWJlcm9mIEhhbmRzaGFrZVJlc3BvbnNlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7SUhhbmRzaGFrZVJlc3BvbnNlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICogQHJldHVybnMge0hhbmRzaGFrZVJlc3BvbnNlfSBIYW5kc2hha2VSZXNwb25zZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIEhhbmRzaGFrZVJlc3BvbnNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSGFuZHNoYWtlUmVzcG9uc2UocHJvcGVydGllcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBIYW5kc2hha2VSZXNwb25zZSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBIYW5kc2hha2VSZXNwb25zZS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICogQG1lbWJlcm9mIEhhbmRzaGFrZVJlc3BvbnNlXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7SUhhbmRzaGFrZVJlc3BvbnNlfSBtIEhhbmRzaGFrZVJlc3BvbnNlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICovXG4gICAgSGFuZHNoYWtlUmVzcG9uc2UuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgIHcudWludDMyKDgpLmludDMyKG0uc3RhdHVzQ29kZSk7XG4gICAgICAgIGlmIChtLmVycm9yTXNnICE9IG51bGwgJiYgbS5oYXNPd25Qcm9wZXJ0eShcImVycm9yTXNnXCIpKVxuICAgICAgICAgICAgdy51aW50MzIoMTgpLnN0cmluZyhtLmVycm9yTXNnKTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBIYW5kc2hha2VSZXNwb25zZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgKiBAbWVtYmVyb2YgSGFuZHNoYWtlUmVzcG9uc2VcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAqIEByZXR1cm5zIHtIYW5kc2hha2VSZXNwb25zZX0gSGFuZHNoYWtlUmVzcG9uc2VcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAqL1xuICAgIEhhbmRzaGFrZVJlc3BvbnNlLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5IYW5kc2hha2VSZXNwb25zZSgpO1xuICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtLnN0YXR1c0NvZGUgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbS5lcnJvck1zZyA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbS5oYXNPd25Qcm9wZXJ0eShcInN0YXR1c0NvZGVcIikpXG4gICAgICAgICAgICB0aHJvdyAkdXRpbC5Qcm90b2NvbEVycm9yKFwibWlzc2luZyByZXF1aXJlZCAnc3RhdHVzQ29kZSdcIiwgeyBpbnN0YW5jZTogbSB9KTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfTtcblxuICAgIHJldHVybiBIYW5kc2hha2VSZXNwb25zZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gJHJvb3Q7XG4iXX0=