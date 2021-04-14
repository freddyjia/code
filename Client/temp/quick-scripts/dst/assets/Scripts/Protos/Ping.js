
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Protos/Ping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a2f3pmBwpCFIFPnH7xXUAD', 'Ping');
// Scripts/Protos/Ping.js

/*eslint-disable,block-scoped-var,id-length,no-control-regex,no-magic-numbers,no-prototype-builtins,no-redeclare,no-shadow,no-var,sort-vars*/
"use strict";

var $protobuf = require("./protobuf"); // Common aliases


var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots.Ping || ($protobuf.roots.Ping = {});

$root.PingReq = function () {
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
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
      if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
  }
  /**
   * PingReq timestamp.
   * @member {number|Long} timestamp
   * @memberof PingReq
   * @instance
   */


  PingReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
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
    if (!w) w = $Writer.create();
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
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.PingReq();

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

    if (!m.hasOwnProperty("timestamp")) throw $util.ProtocolError("missing required 'timestamp'", {
      instance: m
    });
    return m;
  };

  return PingReq;
}();

$root.PingRes = function () {
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
    if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
      if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
    }
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
    if (!w) w = $Writer.create();
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
    if (!(r instanceof $Reader)) r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new $root.PingRes();

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

    if (!m.hasOwnProperty("currentTime")) throw $util.ProtocolError("missing required 'currentTime'", {
      instance: m
    });
    return m;
  };

  return PingRes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUHJvdG9zXFxQaW5nLmpzIl0sIm5hbWVzIjpbIiRwcm90b2J1ZiIsInJlcXVpcmUiLCIkUmVhZGVyIiwiUmVhZGVyIiwiJFdyaXRlciIsIldyaXRlciIsIiR1dGlsIiwidXRpbCIsIiRyb290Iiwicm9vdHMiLCJQaW5nIiwiUGluZ1JlcSIsInAiLCJrcyIsIk9iamVjdCIsImtleXMiLCJpIiwibGVuZ3RoIiwicHJvdG90eXBlIiwidGltZXN0YW1wIiwiTG9uZyIsImZyb21CaXRzIiwiY3JlYXRlIiwicHJvcGVydGllcyIsImVuY29kZSIsIm0iLCJ3IiwidWludDMyIiwiaW50NjQiLCJkZWNvZGUiLCJyIiwibCIsImMiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0Iiwic2tpcFR5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlByb3RvY29sRXJyb3IiLCJpbnN0YW5jZSIsIlBpbmdSZXMiLCJjdXJyZW50VGltZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2QixFQUVBOzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0csTUFBeEI7QUFBQSxJQUFnQ0MsT0FBTyxHQUFHSixTQUFTLENBQUNLLE1BQXBEO0FBQUEsSUFBNERDLEtBQUssR0FBR04sU0FBUyxDQUFDTyxJQUE5RSxFQUVBOztBQUNBLElBQUlDLEtBQUssR0FBR1IsU0FBUyxDQUFDUyxLQUFWLENBQWdCQyxJQUFoQixLQUF5QlYsU0FBUyxDQUFDUyxLQUFWLENBQWdCQyxJQUFoQixHQUF1QixFQUFoRCxDQUFaOztBQUVBRixLQUFLLENBQUNHLE9BQU4sR0FBaUIsWUFBVztBQUV4Qjs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBLFdBQVNBLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2hCLFFBQUlBLENBQUosRUFD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QXBCLEdBQTBCSixDQUFDLENBQUNLLEdBQUYsR0FBUUosQ0FBMUM7QUFBQSxRQUE2Q04sQ0FBQyxHQUFHLElBQUlqQixLQUFLLENBQUNpQyxPQUFWLEVBQWpEOztBQUNBLFdBQU9YLENBQUMsQ0FBQ0ssR0FBRixHQUFRSCxDQUFmLEVBQWtCO0FBQ2QsVUFBSUksQ0FBQyxHQUFHTixDQUFDLENBQUNILE1BQUYsRUFBUjs7QUFDQSxjQUFRUyxDQUFDLEtBQUssQ0FBZDtBQUNBLGFBQUssQ0FBTDtBQUNJWCxVQUFBQSxDQUFDLENBQUNpQixXQUFGLEdBQWdCWixDQUFDLENBQUNhLE1BQUYsRUFBaEI7QUFDQTs7QUFDSjtBQUNJYixVQUFBQSxDQUFDLENBQUNPLFFBQUYsQ0FBV0QsQ0FBQyxHQUFHLENBQWY7QUFDQTtBQU5KO0FBUUg7O0FBQ0QsUUFBSSxDQUFDWCxDQUFDLENBQUNhLGNBQUYsQ0FBaUIsYUFBakIsQ0FBTCxFQUNJLE1BQU1oQyxLQUFLLENBQUNpQyxhQUFOLENBQW9CLGdDQUFwQixFQUFzRDtBQUFFQyxNQUFBQSxRQUFRLEVBQUVmO0FBQVosS0FBdEQsQ0FBTjtBQUNKLFdBQU9BLENBQVA7QUFDSCxHQWxCRDs7QUFvQkEsU0FBT2dCLE9BQVA7QUFDSCxDQTVGZSxFQUFoQjs7QUE4RkFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJDLEtBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKmVzbGludC1kaXNhYmxlLGJsb2NrLXNjb3BlZC12YXIsaWQtbGVuZ3RoLG5vLWNvbnRyb2wtcmVnZXgsbm8tbWFnaWMtbnVtYmVycyxuby1wcm90b3R5cGUtYnVpbHRpbnMsbm8tcmVkZWNsYXJlLG5vLXNoYWRvdyxuby12YXIsc29ydC12YXJzKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJHByb3RvYnVmID0gcmVxdWlyZShcIi4vcHJvdG9idWZcIik7XG5cbi8vIENvbW1vbiBhbGlhc2VzXG52YXIgJFJlYWRlciA9ICRwcm90b2J1Zi5SZWFkZXIsICRXcml0ZXIgPSAkcHJvdG9idWYuV3JpdGVyLCAkdXRpbCA9ICRwcm90b2J1Zi51dGlsO1xuXG4vLyBFeHBvcnRlZCByb290IG5hbWVzcGFjZVxudmFyICRyb290ID0gJHByb3RvYnVmLnJvb3RzLlBpbmcgfHwgKCRwcm90b2J1Zi5yb290cy5QaW5nID0ge30pO1xuXG4kcm9vdC5QaW5nUmVxID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBvZiBhIFBpbmdSZXEuXG4gICAgICogQGV4cG9ydHMgSVBpbmdSZXFcbiAgICAgKiBAaW50ZXJmYWNlIElQaW5nUmVxXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ8TG9uZ30gdGltZXN0YW1wIFBpbmdSZXEgdGltZXN0YW1wXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFBpbmdSZXEuXG4gICAgICogQGV4cG9ydHMgUGluZ1JlcVxuICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFBpbmdSZXEuXG4gICAgICogQGltcGxlbWVudHMgSVBpbmdSZXFcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0lQaW5nUmVxPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICovXG4gICAgZnVuY3Rpb24gUGluZ1JlcShwKSB7XG4gICAgICAgIGlmIChwKVxuICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaW5nUmVxIHRpbWVzdGFtcC5cbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ8TG9uZ30gdGltZXN0YW1wXG4gICAgICogQG1lbWJlcm9mIFBpbmdSZXFcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBQaW5nUmVxLnByb3RvdHlwZS50aW1lc3RhbXAgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLDAsZmFsc2UpIDogMDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgUGluZ1JlcSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAqIEBtZW1iZXJvZiBQaW5nUmVxXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7SVBpbmdSZXE9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgKiBAcmV0dXJucyB7UGluZ1JlcX0gUGluZ1JlcSBpbnN0YW5jZVxuICAgICAqL1xuICAgIFBpbmdSZXEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQaW5nUmVxKHByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgUGluZ1JlcSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBQaW5nUmVxLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgKiBAbWVtYmVyb2YgUGluZ1JlcVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge0lQaW5nUmVxfSBtIFBpbmdSZXEgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgKi9cbiAgICBQaW5nUmVxLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgIGlmICghdylcbiAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICB3LnVpbnQzMig4KS5pbnQ2NChtLnRpbWVzdGFtcCk7XG4gICAgICAgIHJldHVybiB3O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGEgUGluZ1JlcSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgKiBAbWVtYmVyb2YgUGluZ1JlcVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICogQHJldHVybnMge1BpbmdSZXF9IFBpbmdSZXFcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAqL1xuICAgIFBpbmdSZXEuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290LlBpbmdSZXEoKTtcbiAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbS50aW1lc3RhbXAgPSByLmludDY0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghbS5oYXNPd25Qcm9wZXJ0eShcInRpbWVzdGFtcFwiKSlcbiAgICAgICAgICAgIHRocm93ICR1dGlsLlByb3RvY29sRXJyb3IoXCJtaXNzaW5nIHJlcXVpcmVkICd0aW1lc3RhbXAnXCIsIHsgaW5zdGFuY2U6IG0gfSk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGluZ1JlcTtcbn0pKCk7XG5cbiRyb290LlBpbmdSZXMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgUGluZ1Jlcy5cbiAgICAgKiBAZXhwb3J0cyBJUGluZ1Jlc1xuICAgICAqIEBpbnRlcmZhY2UgSVBpbmdSZXNcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudFRpbWUgUGluZ1JlcyBjdXJyZW50VGltZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhIG5ldyBQaW5nUmVzLlxuICAgICAqIEBleHBvcnRzIFBpbmdSZXNcbiAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBQaW5nUmVzLlxuICAgICAqIEBpbXBsZW1lbnRzIElQaW5nUmVzXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtJUGluZ1Jlcz19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFBpbmdSZXMocCkge1xuICAgICAgICBpZiAocClcbiAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGluZ1JlcyBjdXJyZW50VGltZS5cbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGN1cnJlbnRUaW1lXG4gICAgICogQG1lbWJlcm9mIFBpbmdSZXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBQaW5nUmVzLnByb3RvdHlwZS5jdXJyZW50VGltZSA9IFwiXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFBpbmdSZXMgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgKiBAbWVtYmVyb2YgUGluZ1Jlc1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge0lQaW5nUmVzPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICogQHJldHVybnMge1BpbmdSZXN9IFBpbmdSZXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBQaW5nUmVzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGluZ1Jlcyhwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFBpbmdSZXMgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgUGluZ1Jlcy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICogQG1lbWJlcm9mIFBpbmdSZXNcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtJUGluZ1Jlc30gbSBQaW5nUmVzIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICovXG4gICAgUGluZ1Jlcy5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgdy51aW50MzIoMTApLnN0cmluZyhtLmN1cnJlbnRUaW1lKTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYSBQaW5nUmVzIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAqIEBtZW1iZXJvZiBQaW5nUmVzXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgKiBAcmV0dXJucyB7UGluZ1Jlc30gUGluZ1Jlc1xuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICovXG4gICAgUGluZ1Jlcy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuUGluZ1JlcygpO1xuICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtLmN1cnJlbnRUaW1lID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtLmhhc093blByb3BlcnR5KFwiY3VycmVudFRpbWVcIikpXG4gICAgICAgICAgICB0aHJvdyAkdXRpbC5Qcm90b2NvbEVycm9yKFwibWlzc2luZyByZXF1aXJlZCAnY3VycmVudFRpbWUnXCIsIHsgaW5zdGFuY2U6IG0gfSk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGluZ1Jlcztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gJHJvb3Q7XG4iXX0=