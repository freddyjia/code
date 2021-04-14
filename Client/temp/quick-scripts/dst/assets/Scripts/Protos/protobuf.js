
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Protos/protobuf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, '8588eoGuKdO1rNCrTV383w6', 'protobuf');
// Scripts/Protos/protobuf.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * protobuf.js v6.8.8 (c) 2016, daniel wirtz
 * compiled thu, 19 jul 2018 00:33:25 utc
 * licensed under the bsd-3-clause license
 * see: https://github.com/dcodeio/protobuf.js for details
 */
(function (undefined) {
  "use strict";

  (function prelude(modules, cache, entries) {
    // This is the prelude used to bundle protobuf.js for the browser. Wraps up the CommonJS
    // sources through a conflict-free require shim and is again wrapped within an iife that
    // provides a minification-friendly `undefined` var plus a global "use strict" directive
    // so that minification can remove the directives of each module.
    function $require(name) {
      var $module = cache[name];
      if (!$module) modules[name][0].call($module = cache[name] = {
        exports: {}
      }, $require, $module, $module.exports);
      return $module.exports;
    }

    var protobuf = $require(entries[0]); // Expose globally

    protobuf.util.global.protobuf = protobuf; // Be nice to AMD

    if (typeof define === "function" && define.amd) define(["long"], function (Long) {
      if (Long && Long.isLong) {
        protobuf.util.Long = Long;
        protobuf.configure();
      }

      return protobuf;
    }); // Be nice to CommonJS

    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module && module.exports) module.exports = protobuf;
  })(
  /* end of prelude */
  {
    1: [function (require, module, exports) {
      "use strict";

      module.exports = asPromise;
      /**
       * Callback as used by {@link util.asPromise}.
       * @typedef asPromiseCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {...*} params Additional arguments
       * @returns {undefined}
       */

      /**
       * Returns a promise from a node-style callback function.
       * @memberof util
       * @param {asPromiseCallback} fn Function to call
       * @param {*} ctx Function context
       * @param {...*} params Function arguments
       * @returns {Promise<*>} Promisified function
       */

      function asPromise(fn, ctx
      /*, varargs */
      ) {
        var params = new Array(arguments.length - 1),
            offset = 0,
            index = 2,
            pending = true;

        while (index < arguments.length) {
          params[offset++] = arguments[index++];
        }

        return new Promise(function executor(resolve, reject) {
          params[offset] = function callback(err
          /*, varargs */
          ) {
            if (pending) {
              pending = false;
              if (err) reject(err);else {
                var params = new Array(arguments.length - 1),
                    offset = 0;

                while (offset < params.length) {
                  params[offset++] = arguments[offset];
                }

                resolve.apply(null, params);
              }
            }
          };

          try {
            fn.apply(ctx || null, params);
          } catch (err) {
            if (pending) {
              pending = false;
              reject(err);
            }
          }
        });
      }
    }, {}],
    2: [function (require, module, exports) {
      "use strict";
      /**
       * A minimal base64 implementation for number arrays.
       * @memberof util
       * @namespace
       */

      var base64 = exports;
      /**
       * Calculates the byte length of a base64 encoded string.
       * @param {string} string Base64 encoded string
       * @returns {number} Byte length
       */

      base64.length = function length(string) {
        var p = string.length;
        if (!p) return 0;
        var n = 0;

        while (--p % 4 > 1 && string.charAt(p) === "=") {
          ++n;
        }

        return Math.ceil(string.length * 3) / 4 - n;
      }; // Base64 encoding table


      var b64 = new Array(64); // Base64 decoding table

      var s64 = new Array(123); // 65..90, 97..122, 48..57, 43, 47

      for (var i = 0; i < 64;) {
        s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
      }
      /**
       * Encodes a buffer to a base64 encoded string.
       * @param {Uint8Array} buffer Source buffer
       * @param {number} start Source start
       * @param {number} end Source end
       * @returns {string} Base64 encoded string
       */


      base64.encode = function encode(buffer, start, end) {
        var parts = null,
            chunk = [];
        var i = 0,
            // output index
        j = 0,
            // goto index
        t; // temporary

        while (start < end) {
          var b = buffer[start++];

          switch (j) {
            case 0:
              chunk[i++] = b64[b >> 2];
              t = (b & 3) << 4;
              j = 1;
              break;

            case 1:
              chunk[i++] = b64[t | b >> 4];
              t = (b & 15) << 2;
              j = 2;
              break;

            case 2:
              chunk[i++] = b64[t | b >> 6];
              chunk[i++] = b64[b & 63];
              j = 0;
              break;
          }

          if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
          }
        }

        if (j) {
          chunk[i++] = b64[t];
          chunk[i++] = 61;
          if (j === 1) chunk[i++] = 61;
        }

        if (parts) {
          if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
          return parts.join("");
        }

        return String.fromCharCode.apply(String, chunk.slice(0, i));
      };

      var invalidEncoding = "invalid encoding";
      /**
       * Decodes a base64 encoded string to a buffer.
       * @param {string} string Source string
       * @param {Uint8Array} buffer Destination buffer
       * @param {number} offset Destination offset
       * @returns {number} Number of bytes written
       * @throws {Error} If encoding is invalid
       */

      base64.decode = function decode(string, buffer, offset) {
        var start = offset;
        var j = 0,
            // goto index
        t; // temporary

        for (var i = 0; i < string.length;) {
          var c = string.charCodeAt(i++);
          if (c === 61 && j > 1) break;
          if ((c = s64[c]) === undefined) throw Error(invalidEncoding);

          switch (j) {
            case 0:
              t = c;
              j = 1;
              break;

            case 1:
              buffer[offset++] = t << 2 | (c & 48) >> 4;
              t = c;
              j = 2;
              break;

            case 2:
              buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
              t = c;
              j = 3;
              break;

            case 3:
              buffer[offset++] = (t & 3) << 6 | c;
              j = 0;
              break;
          }
        }

        if (j === 1) throw Error(invalidEncoding);
        return offset - start;
      };
      /**
       * Tests if the specified string appears to be base64 encoded.
       * @param {string} string String to test
       * @returns {boolean} `true` if probably base64 encoded, otherwise false
       */


      base64.test = function test(string) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
      };
    }, {}],
    3: [function (require, module, exports) {
      "use strict";

      module.exports = codegen;
      /**
       * Begins generating a function.
       * @memberof util
       * @param {string[]} functionParams Function parameter names
       * @param {string} [functionName] Function name if not anonymous
       * @returns {Codegen} Appender that appends code to the function's body
       */

      function codegen(functionParams, functionName) {
        /* istanbul ignore if */
        if (typeof functionParams === "string") {
          functionName = functionParams;
          functionParams = undefined;
        }

        var body = [];
        /**
         * Appends code to the function's body or finishes generation.
         * @typedef Codegen
         * @type {function}
         * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
         * @param {...*} [formatParams] Format parameters
         * @returns {Codegen|Function} Itself or the generated function if finished
         * @throws {Error} If format parameter counts do not match
         */

        function Codegen(formatStringOrScope) {
          // note that explicit array handling below makes this ~50% faster
          // finish the function
          if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose) console.log("codegen: " + source); // eslint-disable-line no-console

            source = "return " + source;

            if (formatStringOrScope) {
              var scopeKeys = Object.keys(formatStringOrScope),
                  scopeParams = new Array(scopeKeys.length + 1),
                  scopeValues = new Array(scopeKeys.length),
                  scopeOffset = 0;

              while (scopeOffset < scopeKeys.length) {
                scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
              }

              scopeParams[scopeOffset] = source;
              return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
            }

            return Function(source)(); // eslint-disable-line no-new-func
          } // otherwise append to body


          var formatParams = new Array(arguments.length - 1),
              formatOffset = 0;

          while (formatOffset < formatParams.length) {
            formatParams[formatOffset] = arguments[++formatOffset];
          }

          formatOffset = 0;
          formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];

            switch ($1) {
              case "d":
              case "f":
                return String(Number(value));

              case "i":
                return String(Math.floor(value));

              case "j":
                return JSON.stringify(value);

              case "s":
                return String(value);
            }

            return "%";
          });
          if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
          body.push(formatStringOrScope);
          return Codegen;
        }

        function toString(functionNameOverride) {
          return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
        }

        Codegen.toString = toString;
        return Codegen;
      }
      /**
       * Begins generating a function.
       * @memberof util
       * @function codegen
       * @param {string} [functionName] Function name if not anonymous
       * @returns {Codegen} Appender that appends code to the function's body
       * @variation 2
       */

      /**
       * When set to `true`, codegen will log generated code to console. Useful for debugging.
       * @name util.codegen.verbose
       * @type {boolean}
       */


      codegen.verbose = false;
    }, {}],
    4: [function (require, module, exports) {
      "use strict";

      module.exports = EventEmitter;
      /**
       * Constructs a new event emitter instance.
       * @classdesc A minimal event emitter.
       * @memberof util
       * @constructor
       */

      function EventEmitter() {
        /**
         * Registered listeners.
         * @type {Object.<string,*>}
         * @private
         */
        this._listeners = {};
      }
      /**
       * Registers an event listener.
       * @param {string} evt Event name
       * @param {function} fn Listener
       * @param {*} [ctx] Listener context
       * @returns {util.EventEmitter} `this`
       */


      EventEmitter.prototype.on = function on(evt, fn, ctx) {
        (this._listeners[evt] || (this._listeners[evt] = [])).push({
          fn: fn,
          ctx: ctx || this
        });
        return this;
      };
      /**
       * Removes an event listener or any matching listeners if arguments are omitted.
       * @param {string} [evt] Event name. Removes all listeners if omitted.
       * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
       * @returns {util.EventEmitter} `this`
       */


      EventEmitter.prototype.off = function off(evt, fn) {
        if (evt === undefined) this._listeners = {};else {
          if (fn === undefined) this._listeners[evt] = [];else {
            var listeners = this._listeners[evt];

            for (var i = 0; i < listeners.length;) {
              if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
            }
          }
        }
        return this;
      };
      /**
       * Emits an event by calling its listeners with the specified arguments.
       * @param {string} evt Event name
       * @param {...*} args Arguments
       * @returns {util.EventEmitter} `this`
       */


      EventEmitter.prototype.emit = function emit(evt) {
        var listeners = this._listeners[evt];

        if (listeners) {
          var args = [],
              i = 1;

          for (; i < arguments.length;) {
            args.push(arguments[i++]);
          }

          for (i = 0; i < listeners.length;) {
            listeners[i].fn.apply(listeners[i++].ctx, args);
          }
        }

        return this;
      };
    }, {}],
    5: [function (require, module, exports) {
      "use strict";

      module.exports = fetch;

      var asPromise = require(1),
          inquire = require(7);

      var fs = inquire("fs");
      /**
       * Node-style callback as used by {@link util.fetch}.
       * @typedef FetchCallback
       * @type {function}
       * @param {?Error} error Error, if any, otherwise `null`
       * @param {string} [contents] File contents, if there hasn't been an error
       * @returns {undefined}
       */

      /**
       * Options as used by {@link util.fetch}.
       * @typedef FetchOptions
       * @type {Object}
       * @property {boolean} [binary=false] Whether expecting a binary response
       * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
       */

      /**
       * Fetches the contents of a file.
       * @memberof util
       * @param {string} filename File path or url
       * @param {FetchOptions} options Fetch options
       * @param {FetchCallback} callback Callback function
       * @returns {undefined}
       */

      function fetch(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        } else if (!options) options = {};

        if (!callback) return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this
        // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.

        if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        }); // use the XHR version otherwise.

        return fetch.xhr(filename, options, callback);
      }
      /**
       * Fetches the contents of a file.
       * @name util.fetch
       * @function
       * @param {string} path File path or url
       * @param {FetchCallback} callback Callback function
       * @returns {undefined}
       * @variation 2
       */

      /**
       * Fetches the contents of a file.
       * @name util.fetch
       * @function
       * @param {string} path File path or url
       * @param {FetchOptions} [options] Fetch options
       * @returns {Promise<string|Uint8Array>} Promise
       * @variation 3
       */

      /**/


      fetch.xhr = function fetch_xhr(filename, options, callback) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange
        /* works everywhere */
        = function fetchOnReadyStateChange() {
          if (xhr.readyState !== 4) return undefined; // local cors security errors return status 0 / empty string, too. afaik this cannot be
          // reliably distinguished from an actually empty file for security reasons. feel free
          // to send a pull request if you are aware of a solution.

          if (xhr.status !== 0 && xhr.status !== 200) return callback(Error("status " + xhr.status)); // if binary data is expected, make sure that some sort of array is returned, even if
          // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.

          if (options.binary) {
            var buffer = xhr.response;

            if (!buffer) {
              buffer = [];

              for (var i = 0; i < xhr.responseText.length; ++i) {
                buffer.push(xhr.responseText.charCodeAt(i) & 255);
              }
            }

            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
          }

          return callback(null, xhr.responseText);
        };

        if (options.binary) {
          // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
          if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
          xhr.responseType = "arraybuffer";
        }

        xhr.open("GET", filename);
        xhr.send();
      };
    }, {
      "1": 1,
      "7": 7
    }],
    6: [function (require, module, exports) {
      "use strict";

      module.exports = factory(factory);
      /**
       * Reads / writes floats / doubles from / to buffers.
       * @name util.float
       * @namespace
       */

      /**
       * Writes a 32 bit float to a buffer using little endian byte order.
       * @name util.float.writeFloatLE
       * @function
       * @param {number} val Value to write
       * @param {Uint8Array} buf Target buffer
       * @param {number} pos Target buffer offset
       * @returns {undefined}
       */

      /**
       * Writes a 32 bit float to a buffer using big endian byte order.
       * @name util.float.writeFloatBE
       * @function
       * @param {number} val Value to write
       * @param {Uint8Array} buf Target buffer
       * @param {number} pos Target buffer offset
       * @returns {undefined}
       */

      /**
       * Reads a 32 bit float from a buffer using little endian byte order.
       * @name util.float.readFloatLE
       * @function
       * @param {Uint8Array} buf Source buffer
       * @param {number} pos Source buffer offset
       * @returns {number} Value read
       */

      /**
       * Reads a 32 bit float from a buffer using big endian byte order.
       * @name util.float.readFloatBE
       * @function
       * @param {Uint8Array} buf Source buffer
       * @param {number} pos Source buffer offset
       * @returns {number} Value read
       */

      /**
       * Writes a 64 bit double to a buffer using little endian byte order.
       * @name util.float.writeDoubleLE
       * @function
       * @param {number} val Value to write
       * @param {Uint8Array} buf Target buffer
       * @param {number} pos Target buffer offset
       * @returns {undefined}
       */

      /**
       * Writes a 64 bit double to a buffer using big endian byte order.
       * @name util.float.writeDoubleBE
       * @function
       * @param {number} val Value to write
       * @param {Uint8Array} buf Target buffer
       * @param {number} pos Target buffer offset
       * @returns {undefined}
       */

      /**
       * Reads a 64 bit double from a buffer using little endian byte order.
       * @name util.float.readDoubleLE
       * @function
       * @param {Uint8Array} buf Source buffer
       * @param {number} pos Source buffer offset
       * @returns {number} Value read
       */

      /**
       * Reads a 64 bit double from a buffer using big endian byte order.
       * @name util.float.readDoubleBE
       * @function
       * @param {Uint8Array} buf Source buffer
       * @param {number} pos Source buffer offset
       * @returns {number} Value read
       */
      // Factory function for the purpose of node-based testing in modified global environments

      function factory(exports) {
        // float: typed array
        if (typeof Float32Array !== "undefined") (function () {
          var f32 = new Float32Array([-0]),
              f8b = new Uint8Array(f32.buffer),
              le = f8b[3] === 128;

          function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
          }

          function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
          }
          /* istanbul ignore next */


          exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
          /* istanbul ignore next */

          exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

          function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
          }

          function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
          }
          /* istanbul ignore next */


          exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
          /* istanbul ignore next */

          exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy; // float: ieee754
        })();else (function () {
          function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;
            if (val === 0) writeUint(1 / val > 0 ?
            /* positive */
            0 :
            /* negative 0 */
            2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38) // +-Infinity
              writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38) // denormal
              writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
              var exponent = Math.floor(Math.log(val) / Math.LN2),
                  mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
              writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
          }

          exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
          exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

          function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
            ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
          }

          exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
          exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
        })(); // double: typed array

        if (typeof Float64Array !== "undefined") (function () {
          var f64 = new Float64Array([-0]),
              f8b = new Uint8Array(f64.buffer),
              le = f8b[7] === 128;

          function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
          }

          function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
          }
          /* istanbul ignore next */


          exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
          /* istanbul ignore next */

          exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

          function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
          }

          function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
          }
          /* istanbul ignore next */


          exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
          /* istanbul ignore next */

          exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy; // double: ieee754
        })();else (function () {
          function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign) val = -val;

            if (val === 0) {
              writeUint(0, buf, pos + off0);
              writeUint(1 / val > 0 ?
              /* positive */
              0 :
              /* negative 0 */
              2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
              writeUint(0, buf, pos + off0);
              writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) {
              // +-Infinity
              writeUint(0, buf, pos + off0);
              writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
              var mantissa;

              if (val < 2.2250738585072014e-308) {
                // denormal
                mantissa = val / 5e-324;
                writeUint(mantissa >>> 0, buf, pos + off0);
                writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
              } else {
                var exponent = Math.floor(Math.log(val) / Math.LN2);
                if (exponent === 1024) exponent = 1023;
                mantissa = val * Math.pow(2, -exponent);
                writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
              }
            }
          }

          exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
          exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

          function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
            ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
          }

          exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
          exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
        })();
        return exports;
      } // uint helpers


      function writeUintLE(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }

      function writeUintBE(val, buf, pos) {
        buf[pos] = val >>> 24;
        buf[pos + 1] = val >>> 16 & 255;
        buf[pos + 2] = val >>> 8 & 255;
        buf[pos + 3] = val & 255;
      }

      function readUintLE(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
      }

      function readUintBE(buf, pos) {
        return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
      }
    }, {}],
    7: [function (require, module, exports) {
      "use strict";

      module.exports = inquire;
      /**
       * Requires a module only if available.
       * @memberof util
       * @param {string} moduleName Module to require
       * @returns {?Object} Required module if available and not empty, otherwise `null`
       */

      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval

          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (e) {} // eslint-disable-line no-empty


        return null;
      }
    }, {}],
    8: [function (require, module, exports) {
      "use strict";
      /**
       * A minimal path module to resolve Unix, Windows and URL paths alike.
       * @memberof util
       * @namespace
       */

      var path = exports;

      var isAbsolute =
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path.isAbsolute = function isAbsolute(path) {
        return /^(?:\/|\w+:)/.test(path);
      };

      var normalize =
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path.normalize = function normalize(path) {
        path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path.split("/"),
            absolute = isAbsolute(path),
            prefix = "";
        if (absolute) prefix = parts.shift() + "/";

        for (var i = 0; i < parts.length;) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);else if (absolute) parts.splice(i, 1);else ++i;
          } else if (parts[i] === ".") parts.splice(i, 1);else ++i;
        }

        return prefix + parts.join("/");
      };
      /**
       * Resolves the specified include path against the specified origin path.
       * @param {string} originPath Path to the origin file
       * @param {string} includePath Include path relative to origin path
       * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
       * @returns {string} Path to the include file
       */


      path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
        if (!alreadyNormalized) includePath = normalize(includePath);
        if (isAbsolute(includePath)) return includePath;
        if (!alreadyNormalized) originPath = normalize(originPath);
        return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
      };
    }, {}],
    9: [function (require, module, exports) {
      "use strict";

      module.exports = pool;
      /**
       * An allocator as used by {@link util.pool}.
       * @typedef PoolAllocator
       * @type {function}
       * @param {number} size Buffer size
       * @returns {Uint8Array} Buffer
       */

      /**
       * A slicer as used by {@link util.pool}.
       * @typedef PoolSlicer
       * @type {function}
       * @param {number} start Start offset
       * @param {number} end End offset
       * @returns {Uint8Array} Buffer slice
       * @this {Uint8Array}
       */

      /**
       * A general purpose buffer pool.
       * @memberof util
       * @function
       * @param {PoolAllocator} alloc Allocator
       * @param {PoolSlicer} slice Slicer
       * @param {number} [size=8192] Slab size
       * @returns {PoolAllocator} Pooled allocator
       */

      function pool(alloc, slice, size) {
        var SIZE = size || 8192;
        var MAX = SIZE >>> 1;
        var slab = null;
        var offset = SIZE;
        return function pool_alloc(size) {
          if (size < 1 || size > MAX) return alloc(size);

          if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
          }

          var buf = slice.call(slab, offset, offset += size);
          if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
          return buf;
        };
      }
    }, {}],
    10: [function (require, module, exports) {
      "use strict";
      /**
       * A minimal UTF8 implementation for number arrays.
       * @memberof util
       * @namespace
       */

      var utf8 = exports;
      /**
       * Calculates the UTF8 byte length of a string.
       * @param {string} string String
       * @returns {number} Byte length
       */

      utf8.length = function utf8_length(string) {
        var len = 0,
            c = 0;

        for (var i = 0; i < string.length; ++i) {
          c = string.charCodeAt(i);
          if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
          } else len += 3;
        }

        return len;
      };
      /**
       * Reads UTF8 bytes as a string.
       * @param {Uint8Array} buffer Source buffer
       * @param {number} start Source start
       * @param {number} end Source end
       * @returns {string} String read
       */


      utf8.read = function utf8_read(buffer, start, end) {
        var len = end - start;
        if (len < 1) return "";
        var parts = null,
            chunk = [],
            i = 0,
            // char offset
        t; // temporary

        while (start < end) {
          t = buffer[start++];
          if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
          } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;

          if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
          }
        }

        if (parts) {
          if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
          return parts.join("");
        }

        return String.fromCharCode.apply(String, chunk.slice(0, i));
      };
      /**
       * Writes a string as UTF8 bytes.
       * @param {string} string Source string
       * @param {Uint8Array} buffer Destination buffer
       * @param {number} offset Destination offset
       * @returns {number} Bytes written
       */


      utf8.write = function utf8_write(string, buffer, offset) {
        var start = offset,
            c1,
            // character 1
        c2; // character 2

        for (var i = 0; i < string.length; ++i) {
          c1 = string.charCodeAt(i);

          if (c1 < 128) {
            buffer[offset++] = c1;
          } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
          } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          }
        }

        return offset - start;
      };
    }, {}],
    11: [function (require, module, exports) {
      "use strict";

      module.exports = common;
      var commonRe = /\/|\./;
      /**
       * Provides common type definitions.
       * Can also be used to provide additional google types or your own custom types.
       * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
       * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
       * @returns {undefined}
       * @property {INamespace} google/protobuf/any.proto Any
       * @property {INamespace} google/protobuf/duration.proto Duration
       * @property {INamespace} google/protobuf/empty.proto Empty
       * @property {INamespace} google/protobuf/field_mask.proto FieldMask
       * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
       * @property {INamespace} google/protobuf/timestamp.proto Timestamp
       * @property {INamespace} google/protobuf/wrappers.proto Wrappers
       * @example
       * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
       * protobuf.common("descriptor", descriptorJson);
       *
       * // manually provides a custom definition (uses my.foo namespace)
       * protobuf.common("my/foo/bar.proto", myFooBarJson);
       */

      function common(name, json) {
        if (!commonRe.test(name)) {
          name = "google/protobuf/" + name + ".proto";
          json = {
            nested: {
              google: {
                nested: {
                  protobuf: {
                    nested: json
                  }
                }
              }
            }
          };
        }

        common[name] = json;
      } // Not provided because of limited use (feel free to discuss or to provide yourself):
      //
      // google/protobuf/descriptor.proto
      // google/protobuf/source_context.proto
      // google/protobuf/type.proto
      //
      // Stripped and pre-parsed versions of these non-bundled files are instead available as part of
      // the repository or package within the google/protobuf directory.


      common("any", {
        /**
         * Properties of a google.protobuf.Any message.
         * @interface IAny
         * @type {Object}
         * @property {string} [typeUrl]
         * @property {Uint8Array} [bytes]
         * @memberof common
         */
        Any: {
          fields: {
            type_url: {
              type: "string",
              id: 1
            },
            value: {
              type: "bytes",
              id: 2
            }
          }
        }
      });
      var timeType;
      common("duration", {
        /**
         * Properties of a google.protobuf.Duration message.
         * @interface IDuration
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Duration: timeType = {
          fields: {
            seconds: {
              type: "int64",
              id: 1
            },
            nanos: {
              type: "int32",
              id: 2
            }
          }
        }
      });
      common("timestamp", {
        /**
         * Properties of a google.protobuf.Timestamp message.
         * @interface ITimestamp
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Timestamp: timeType
      });
      common("empty", {
        /**
         * Properties of a google.protobuf.Empty message.
         * @interface IEmpty
         * @memberof common
         */
        Empty: {
          fields: {}
        }
      });
      common("struct", {
        /**
         * Properties of a google.protobuf.Struct message.
         * @interface IStruct
         * @type {Object}
         * @property {Object.<string,IValue>} [fields]
         * @memberof common
         */
        Struct: {
          fields: {
            fields: {
              keyType: "string",
              type: "Value",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.Value message.
         * @interface IValue
         * @type {Object}
         * @property {string} [kind]
         * @property {0} [nullValue]
         * @property {number} [numberValue]
         * @property {string} [stringValue]
         * @property {boolean} [boolValue]
         * @property {IStruct} [structValue]
         * @property {IListValue} [listValue]
         * @memberof common
         */
        Value: {
          oneofs: {
            kind: {
              oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
            }
          },
          fields: {
            nullValue: {
              type: "NullValue",
              id: 1
            },
            numberValue: {
              type: "double",
              id: 2
            },
            stringValue: {
              type: "string",
              id: 3
            },
            boolValue: {
              type: "bool",
              id: 4
            },
            structValue: {
              type: "Struct",
              id: 5
            },
            listValue: {
              type: "ListValue",
              id: 6
            }
          }
        },
        NullValue: {
          values: {
            NULL_VALUE: 0
          }
        },

        /**
         * Properties of a google.protobuf.ListValue message.
         * @interface IListValue
         * @type {Object}
         * @property {Array.<IValue>} [values]
         * @memberof common
         */
        ListValue: {
          fields: {
            values: {
              rule: "repeated",
              type: "Value",
              id: 1
            }
          }
        }
      });
      common("wrappers", {
        /**
         * Properties of a google.protobuf.DoubleValue message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        DoubleValue: {
          fields: {
            value: {
              type: "double",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.FloatValue message.
         * @interface IFloatValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FloatValue: {
          fields: {
            value: {
              type: "float",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.Int64Value message.
         * @interface IInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        Int64Value: {
          fields: {
            value: {
              type: "int64",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.UInt64Value message.
         * @interface IUInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        UInt64Value: {
          fields: {
            value: {
              type: "uint64",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.Int32Value message.
         * @interface IInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        Int32Value: {
          fields: {
            value: {
              type: "int32",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.UInt32Value message.
         * @interface IUInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        UInt32Value: {
          fields: {
            value: {
              type: "uint32",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.BoolValue message.
         * @interface IBoolValue
         * @type {Object}
         * @property {boolean} [value]
         * @memberof common
         */
        BoolValue: {
          fields: {
            value: {
              type: "bool",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.StringValue message.
         * @interface IStringValue
         * @type {Object}
         * @property {string} [value]
         * @memberof common
         */
        StringValue: {
          fields: {
            value: {
              type: "string",
              id: 1
            }
          }
        },

        /**
         * Properties of a google.protobuf.BytesValue message.
         * @interface IBytesValue
         * @type {Object}
         * @property {Uint8Array} [value]
         * @memberof common
         */
        BytesValue: {
          fields: {
            value: {
              type: "bytes",
              id: 1
            }
          }
        }
      });
      common("field_mask", {
        /**
         * Properties of a google.protobuf.FieldMask message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FieldMask: {
          fields: {
            paths: {
              rule: "repeated",
              type: "string",
              id: 1
            }
          }
        }
      });
      /**
       * Gets the root definition of the specified common proto file.
       *
       * Bundled definitions are:
       * - google/protobuf/any.proto
       * - google/protobuf/duration.proto
       * - google/protobuf/empty.proto
       * - google/protobuf/field_mask.proto
       * - google/protobuf/struct.proto
       * - google/protobuf/timestamp.proto
       * - google/protobuf/wrappers.proto
       *
       * @param {string} file Proto file name
       * @returns {INamespace|null} Root definition or `null` if not defined
       */

      common.get = function get(file) {
        return common[file] || null;
      };
    }, {}],
    12: [function (require, module, exports) {
      "use strict";
      /**
       * Runtime message from/to plain object converters.
       * @namespace
       */

      var converter = exports;

      var Enum = require(15),
          util = require(37);
      /**
       * Generates a partial value fromObject conveter.
       * @param {Codegen} gen Codegen instance
       * @param {Field} field Reflected field
       * @param {number} fieldIndex Field index
       * @param {string} prop Property reference
       * @returns {Codegen} Codegen instance
       * @ignore
       */


      function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
        /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(d%s){", prop);

            for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
              if (field.repeated && values[keys[i]] === field.typeDefault) gen("default:");
              gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
            }

            gen("}");
          } else gen("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;

          switch (field.type) {
            case "double":
            case "float":
              gen("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"

              break;

            case "uint32":
            case "fixed32":
              gen("m%s=d%s>>>0", prop, prop);
              break;

            case "int32":
            case "sint32":
            case "sfixed32":
              gen("m%s=d%s|0", prop, prop);
              break;

            case "uint64":
              isUnsigned = true;
            // eslint-disable-line no-fallthrough

            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)("else if(typeof d%s===\"string\")", prop)("m%s=parseInt(d%s,10)", prop, prop)("else if(typeof d%s===\"number\")", prop)("m%s=d%s", prop, prop)("else if(typeof d%s===\"object\")", prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
              break;

            case "bytes":
              gen("if(typeof d%s===\"string\")", prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length)", prop)("m%s=d%s", prop, prop);
              break;

            case "string":
              gen("m%s=String(d%s)", prop, prop);
              break;

            case "bool":
              gen("m%s=Boolean(d%s)", prop, prop);
              break;

            /* default: gen
                ("m%s=d%s", prop, prop);
                break; */
          }
        }

        return gen;
        /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
      }
      /**
       * Generates a plain object to runtime message converter specific to the specified message type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */


      converter.fromObject = function fromObject(mtype) {
        /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
        var fields = mtype.fieldsArray;
        var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!fields.length) return gen("return new this.ctor");
        gen("var m=new this.ctor");

        for (var i = 0; i < fields.length; ++i) {
          var field = fields[i].resolve(),
              prop = util.safeProp(field.name); // Map fields

          if (field.map) {
            gen("if(d%s){", prop)("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(gen, field,
            /* not sorted */
            i, prop + "[ks[i]]")("}")("}"); // Repeated fields
          } else if (field.repeated) {
            gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(gen, field,
            /* not sorted */
            i, prop + "[i]")("}")("}"); // Non-repeated fields
          } else {
            if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
            ("if(d%s!=null){", prop); // !== undefined && !== null

            genValuePartial_fromObject(gen, field,
            /* not sorted */
            i, prop);
            if (!(field.resolvedType instanceof Enum)) gen("}");
          }
        }

        return gen("return m");
        /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
      };
      /**
       * Generates a partial value toObject converter.
       * @param {Codegen} gen Codegen instance
       * @param {Field} field Reflected field
       * @param {number} fieldIndex Field index
       * @param {string} prop Property reference
       * @returns {Codegen} Codegen instance
       * @ignore
       */


      function genValuePartial_toObject(gen, field, fieldIndex, prop) {
        /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?types[%i].values[m%s]:m%s", prop, fieldIndex, prop, prop);else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;

          switch (field.type) {
            case "double":
            case "float":
              gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
              break;

            case "uint64":
              isUnsigned = true;
            // eslint-disable-line no-fallthrough

            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(typeof m%s===\"number\")", prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else") // Long-like
              ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
              break;

            case "bytes":
              gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
              break;

            default:
              gen("d%s=m%s", prop, prop);
              break;
          }
        }

        return gen;
        /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
      }
      /**
       * Generates a runtime message to plain object converter specific to the specified message type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */


      converter.toObject = function toObject(mtype) {
        /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
        var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
        if (!fields.length) return util.codegen()("return {}");
        var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
        var repeatedFields = [],
            mapFields = [],
            normalFields = [],
            i = 0;

        for (; i < fields.length; ++i) {
          if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
        }

        if (repeatedFields.length) {
          gen("if(o.arrays||o.defaults){");

          for (i = 0; i < repeatedFields.length; ++i) {
            gen("d%s=[]", util.safeProp(repeatedFields[i].name));
          }

          gen("}");
        }

        if (mapFields.length) {
          gen("if(o.objects||o.defaults){");

          for (i = 0; i < mapFields.length; ++i) {
            gen("d%s={}", util.safeProp(mapFields[i].name));
          }

          gen("}");
        }

        if (normalFields.length) {
          gen("if(o.defaults){");

          for (i = 0; i < normalFields.length; ++i) {
            var field = normalFields[i],
                prop = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);else if (field["long"]) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());else if (field.bytes) {
              var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
              gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
            } else gen("d%s=%j", prop, field.typeDefault); // also messages (=null)
          }

          gen("}");
        }

        var hasKs2 = false;

        for (i = 0; i < fields.length; ++i) {
          var field = fields[i],
              index = mtype._fieldsArray.indexOf(field),
              prop = util.safeProp(field.name);

          if (field.map) {
            if (!hasKs2) {
              hasKs2 = true;
              gen("var ks2");
            }

            gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(gen, field,
            /* sorted */
            index, prop + "[ks2[j]]")("}");
          } else if (field.repeated) {
            gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(gen, field,
            /* sorted */
            index, prop + "[j]")("}");
          } else {
            gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null

            genValuePartial_toObject(gen, field,
            /* sorted */
            index, prop);
            if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
          }

          gen("}");
        }

        return gen("return d");
        /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
      };
    }, {
      "15": 15,
      "37": 37
    }],
    13: [function (require, module, exports) {
      "use strict";

      module.exports = decoder;

      var Enum = require(15),
          types = require(36),
          util = require(37);

      function missing(field) {
        return "missing required '" + field.name + "'";
      }
      /**
       * Generates a decoder specific to the specified message type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */


      function decoder(mtype) {
        /* eslint-disable no-unexpected-multiline */
        var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function (field) {
          return field.map;
        }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
        if (mtype.group) gen("if((t&7)===4)")("break");
        gen("switch(t>>>3){");
        var i = 0;

        for (; i <
        /* initializes */
        mtype.fieldsArray.length; ++i) {
          var field = mtype._fieldsArray[i].resolve(),
              type = field.resolvedType instanceof Enum ? "int32" : field.type,
              ref = "m" + util.safeProp(field.name);

          gen("case %i:", field.id); // Map fields

          if (field.map) {
            gen("r.skip().pos++") // assumes id 1 + key wireType
            ("if(%s===util.emptyObject)", ref)("%s={}", ref)("k=r.%s()", field.keyType)("r.pos++"); // assumes id 2 + value wireType

            if (types["long"][field.keyType] !== undefined) {
              if (types.basic[type] === undefined) gen("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
              else gen("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", ref, type);
            } else {
              if (types.basic[type] === undefined) gen("%s[k]=types[%i].decode(r,r.uint32())", ref, i); // can't be groups
              else gen("%s[k]=r.%s()", ref, type);
            } // Repeated fields

          } else if (field.repeated) {
            gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref); // Packable (always check for forward and backward compatiblity)

            if (types.packed[type] !== undefined) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else"); // Non-packed

            if (types.basic[type] === undefined) gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);else gen("%s.push(r.%s())", ref, type); // Non-repeated
          } else if (types.basic[type] === undefined) gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);else gen("%s=r.%s()", ref, type);

          gen("break"); // Unknown fields
        }

        gen("default:")("r.skipType(t&7)")("break")("}")("}"); // Field presence

        for (i = 0; i < mtype._fieldsArray.length; ++i) {
          var rfield = mtype._fieldsArray[i];
          if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
        }

        return gen("return m");
        /* eslint-enable no-unexpected-multiline */
      }
    }, {
      "15": 15,
      "36": 36,
      "37": 37
    }],
    14: [function (require, module, exports) {
      "use strict";

      module.exports = encoder;

      var Enum = require(15),
          types = require(36),
          util = require(37);
      /**
       * Generates a partial message type encoder.
       * @param {Codegen} gen Codegen instance
       * @param {Field} field Reflected field
       * @param {number} fieldIndex Field index
       * @param {string} ref Variable reference
       * @returns {Codegen} Codegen instance
       * @ignore
       */


      function genTypePartial(gen, field, fieldIndex, ref) {
        return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
      }
      /**
       * Generates an encoder specific to the specified message type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */


      function encoder(mtype) {
        /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
        var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
        var i, ref; // "when a message is serialized its known fields should be written sequentially by field number"

        var fields =
        /* initializes */
        mtype.fieldsArray.slice().sort(util.compareFieldsById);

        for (var i = 0; i < fields.length; ++i) {
          var field = fields[i].resolve(),
              index = mtype._fieldsArray.indexOf(field),
              type = field.resolvedType instanceof Enum ? "int32" : field.type,
              wireType = types.basic[type];

          ref = "m" + util.safeProp(field.name); // Map fields

          if (field.map) {
            gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name) // !== undefined && !== null
            ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === undefined) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
            else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen("}")("}"); // Repeated fields
          } else if (field.repeated) {
            gen("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null
            // Packed repeated

            if (field.packed && types.packed[type] !== undefined) {
              gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()"); // Non-packed
            } else {
              gen("for(var i=0;i<%s.length;++i)", ref);
              if (wireType === undefined) genTypePartial(gen, field, index, ref + "[i]");else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
            }

            gen("}"); // Non-repeated
          } else {
            if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j))", ref, field.name); // !== undefined && !== null

            if (wireType === undefined) genTypePartial(gen, field, index, ref);else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
          }
        }

        return gen("return w");
        /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
      }
    }, {
      "15": 15,
      "36": 36,
      "37": 37
    }],
    15: [function (require, module, exports) {
      "use strict";

      module.exports = Enum; // extends ReflectionObject

      var ReflectionObject = require(24);

      ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

      var Namespace = require(23),
          util = require(37);
      /**
       * Constructs a new enum instance.
       * @classdesc Reflected enum.
       * @extends ReflectionObject
       * @constructor
       * @param {string} name Unique name within its namespace
       * @param {Object.<string,number>} [values] Enum values as an object, by name
       * @param {Object.<string,*>} [options] Declared options
       * @param {string} [comment] The comment for this enum
       * @param {Object.<string,string>} [comments] The value comments for this enum
       */


      function Enum(name, values, options, comment, comments) {
        ReflectionObject.call(this, name, options);
        if (values && _typeof(values) !== "object") throw TypeError("values must be an object");
        /**
         * Enum values by id.
         * @type {Object.<number,string>}
         */

        this.valuesById = {};
        /**
         * Enum values by name.
         * @type {Object.<string,number>}
         */

        this.values = Object.create(this.valuesById); // toJSON, marker

        /**
         * Enum comment text.
         * @type {string|null}
         */

        this.comment = comment;
        /**
         * Value comment texts, if any.
         * @type {Object.<string,string>}
         */

        this.comments = comments || {};
        /**
         * Reserved ranges, if any.
         * @type {Array.<number[]|string>}
         */

        this.reserved = undefined; // toJSON
        // Note that values inherit valuesById on their prototype which makes them a TypeScript-
        // compatible enum. This is used by pbts to write actual enum definitions that work for
        // static and reflection code alike instead of emitting generic object definitions.

        if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) {
          if (typeof values[keys[i]] === "number") // use forward entries only
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
        }
      }
      /**
       * Enum descriptor.
       * @interface IEnum
       * @property {Object.<string,number>} values Enum values
       * @property {Object.<string,*>} [options] Enum options
       */

      /**
       * Constructs an enum from an enum descriptor.
       * @param {string} name Enum name
       * @param {IEnum} json Enum descriptor
       * @returns {Enum} Created enum
       * @throws {TypeError} If arguments are invalid
       */


      Enum.fromJSON = function fromJSON(name, json) {
        var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
        enm.reserved = json.reserved;
        return enm;
      };
      /**
       * Converts this enum to an enum descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IEnum} Enum descriptor
       */


      Enum.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined]);
      };
      /**
       * Adds a value to this enum.
       * @param {string} name Value name
       * @param {number} id Value id
       * @param {string} [comment] Comment, if any
       * @returns {Enum} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If there is already a value with this name or id
       */


      Enum.prototype.add = function add(name, id, comment) {
        // utilized by the parser but not by .fromJSON
        if (!util.isString(name)) throw TypeError("name must be a string");
        if (!util.isInteger(id)) throw TypeError("id must be an integer");
        if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
        if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
        if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);

        if (this.valuesById[id] !== undefined) {
          if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
          this.values[name] = id;
        } else this.valuesById[this.values[name] = id] = name;

        this.comments[name] = comment || null;
        return this;
      };
      /**
       * Removes a value from this enum
       * @param {string} name Value name
       * @returns {Enum} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If `name` is not a name of this enum
       */


      Enum.prototype.remove = function remove(name) {
        if (!util.isString(name)) throw TypeError("name must be a string");
        var val = this.values[name];
        if (val == null) throw Error("name '" + name + "' does not exist in " + this);
        delete this.valuesById[val];
        delete this.values[name];
        delete this.comments[name];
        return this;
      };
      /**
       * Tests if the specified id is reserved.
       * @param {number} id Id to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */


      Enum.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      /**
       * Tests if the specified name is reserved.
       * @param {string} name Name to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */


      Enum.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
    }, {
      "23": 23,
      "24": 24,
      "37": 37
    }],
    16: [function (require, module, exports) {
      "use strict";

      module.exports = Field; // extends ReflectionObject

      var ReflectionObject = require(24);

      ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

      var Enum = require(15),
          types = require(36),
          util = require(37);

      var Type; // cyclic

      var ruleRe = /^required|optional|repeated$/;
      /**
       * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
       * @name Field
       * @classdesc Reflected message field.
       * @extends FieldBase
       * @constructor
       * @param {string} name Unique name within its namespace
       * @param {number} id Unique id within its namespace
       * @param {string} type Value type
       * @param {string|Object.<string,*>} [rule="optional"] Field rule
       * @param {string|Object.<string,*>} [extend] Extended type if different from parent
       * @param {Object.<string,*>} [options] Declared options
       */

      /**
       * Constructs a field from a field descriptor.
       * @param {string} name Field name
       * @param {IField} json Field descriptor
       * @returns {Field} Created field
       * @throws {TypeError} If arguments are invalid
       */

      Field.fromJSON = function fromJSON(name, json) {
        return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
      };
      /**
       * Not an actual constructor. Use {@link Field} instead.
       * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
       * @exports FieldBase
       * @extends ReflectionObject
       * @constructor
       * @param {string} name Unique name within its namespace
       * @param {number} id Unique id within its namespace
       * @param {string} type Value type
       * @param {string|Object.<string,*>} [rule="optional"] Field rule
       * @param {string|Object.<string,*>} [extend] Extended type if different from parent
       * @param {Object.<string,*>} [options] Declared options
       * @param {string} [comment] Comment associated with this field
       */


      function Field(name, id, type, rule, extend, options, comment) {
        if (util.isObject(rule)) {
          comment = extend;
          options = rule;
          rule = extend = undefined;
        } else if (util.isObject(extend)) {
          comment = options;
          options = extend;
          extend = undefined;
        }

        ReflectionObject.call(this, name, options);
        if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
        if (!util.isString(type)) throw TypeError("type must be a string");
        if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");
        /**
         * Field rule, if any.
         * @type {string|undefined}
         */

        this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

        /**
         * Field type.
         * @type {string}
         */

        this.type = type; // toJSON

        /**
         * Unique field id.
         * @type {number}
         */

        this.id = id; // toJSON, marker

        /**
         * Extended type if different from parent.
         * @type {string|undefined}
         */

        this.extend = extend || undefined; // toJSON

        /**
         * Whether this field is required.
         * @type {boolean}
         */

        this.required = rule === "required";
        /**
         * Whether this field is optional.
         * @type {boolean}
         */

        this.optional = !this.required;
        /**
         * Whether this field is repeated.
         * @type {boolean}
         */

        this.repeated = rule === "repeated";
        /**
         * Whether this field is a map or not.
         * @type {boolean}
         */

        this.map = false;
        /**
         * Message this field belongs to.
         * @type {Type|null}
         */

        this.message = null;
        /**
         * OneOf this field belongs to, if any,
         * @type {OneOf|null}
         */

        this.partOf = null;
        /**
         * The field type's default value.
         * @type {*}
         */

        this.typeDefault = null;
        /**
         * The field's default value on prototypes.
         * @type {*}
         */

        this.defaultValue = null;
        /**
         * Whether this field's value should be treated as a long.
         * @type {boolean}
         */

        this["long"] = util.Long ? types["long"][type] !== undefined :
        /* istanbul ignore next */
        false;
        /**
         * Whether this field's value is a buffer.
         * @type {boolean}
         */

        this.bytes = type === "bytes";
        /**
         * Resolved type if not a basic type.
         * @type {Type|Enum|null}
         */

        this.resolvedType = null;
        /**
         * Sister-field within the extended type if a declaring extension field.
         * @type {Field|null}
         */

        this.extensionField = null;
        /**
         * Sister-field within the declaring namespace if an extended field.
         * @type {Field|null}
         */

        this.declaringField = null;
        /**
         * Internally remembers whether this field is packed.
         * @type {boolean|null}
         * @private
         */

        this._packed = null;
        /**
         * Comment for this field.
         * @type {string|null}
         */

        this.comment = comment;
      }
      /**
       * Determines whether this field is packed. Only relevant when repeated and working with proto2.
       * @name Field#packed
       * @type {boolean}
       * @readonly
       */


      Object.defineProperty(Field.prototype, "packed", {
        get: function get() {
          // defaults to packed=true if not explicity set to false
          if (this._packed === null) this._packed = this.getOption("packed") !== false;
          return this._packed;
        }
      });
      /**
       * @override
       */

      Field.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (name === "packed") // clear cached before setting
          this._packed = null;
        return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
      };
      /**
       * Field descriptor.
       * @interface IField
       * @property {string} [rule="optional"] Field rule
       * @property {string} type Field type
       * @property {number} id Field id
       * @property {Object.<string,*>} [options] Field options
       */

      /**
       * Extension field descriptor.
       * @interface IExtensionField
       * @extends IField
       * @property {string} extend Extended type
       */

      /**
       * Converts this field to a field descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IField} Field descriptor
       */


      Field.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * Resolves this field's type references.
       * @returns {Field} `this`
       * @throws {Error} If any reference cannot be resolved
       */


      Field.prototype.resolve = function resolve() {
        if (this.resolved) return this;

        if ((this.typeDefault = types.defaults[this.type]) === undefined) {
          // if not a basic type, resolve it
          this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
          if (this.resolvedType instanceof Type) this.typeDefault = null;else // instanceof Enum
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
        } // use explicitly set default value if present


        if (this.options && this.options["default"] != null) {
          this.typeDefault = this.options["default"];
          if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
        } // remove unnecessary options


        if (this.options) {
          if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum)) delete this.options.packed;
          if (!Object.keys(this.options).length) this.options = undefined;
        } // convert to internal data type if necesssary


        if (this["long"]) {
          this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
          /* istanbul ignore else */

          if (Object.freeze) Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)
        } else if (this.bytes && typeof this.typeDefault === "string") {
          var buf;
          if (util.base64.test(this.typeDefault)) util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);else util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
          this.typeDefault = buf;
        } // take special care of maps and repeated fields


        if (this.map) this.defaultValue = util.emptyObject;else if (this.repeated) this.defaultValue = util.emptyArray;else this.defaultValue = this.typeDefault; // ensure proper value on prototype

        if (this.parent instanceof Type) this.parent.ctor.prototype[this.name] = this.defaultValue;
        return ReflectionObject.prototype.resolve.call(this);
      };
      /**
       * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
       * @typedef FieldDecorator
       * @type {function}
       * @param {Object} prototype Target prototype
       * @param {string} fieldName Field name
       * @returns {undefined}
       */

      /**
       * Field decorator (TypeScript).
       * @name Field.d
       * @function
       * @param {number} fieldId Field id
       * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
       * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
       * @param {T} [defaultValue] Default value
       * @returns {FieldDecorator} Decorator function
       * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
       */


      Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
        // submessage: decorate the submessage and use its name as the type
        if (typeof fieldType === "function") fieldType = util.decorateType(fieldType).name; // enum reference: create a reflected copy of the enum and keep reuseing it
        else if (fieldType && _typeof(fieldType) === "object") fieldType = util.decorateEnum(fieldType).name;
        return function fieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
            "default": defaultValue
          }));
        };
      };
      /**
       * Field decorator (TypeScript).
       * @name Field.d
       * @function
       * @param {number} fieldId Field id
       * @param {Constructor<T>|string} fieldType Field type
       * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
       * @returns {FieldDecorator} Decorator function
       * @template T extends Message<T>
       * @variation 2
       */
      // like Field.d but without a default value
      // Sets up cyclic dependencies (called in index-light)


      Field._configure = function configure(Type_) {
        Type = Type_;
      };
    }, {
      "15": 15,
      "24": 24,
      "36": 36,
      "37": 37
    }],
    17: [function (require, module, exports) {
      "use strict";

      var protobuf = module.exports = require(18);

      protobuf.build = "light";
      /**
       * A node-style callback as used by {@link load} and {@link Root#load}.
       * @typedef LoadCallback
       * @type {function}
       * @param {Error|null} error Error, if any, otherwise `null`
       * @param {Root} [root] Root, if there hasn't been an error
       * @returns {undefined}
       */

      /**
       * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
       * @param {string|string[]} filename One or multiple files to load
       * @param {Root} root Root namespace, defaults to create a new one if omitted.
       * @param {LoadCallback} callback Callback function
       * @returns {undefined}
       * @see {@link Root#load}
       */

      function load(filename, root, callback) {
        if (typeof root === "function") {
          callback = root;
          root = new protobuf.Root();
        } else if (!root) root = new protobuf.Root();

        return root.load(filename, callback);
      }
      /**
       * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
       * @name load
       * @function
       * @param {string|string[]} filename One or multiple files to load
       * @param {LoadCallback} callback Callback function
       * @returns {undefined}
       * @see {@link Root#load}
       * @variation 2
       */
      // function load(filename:string, callback:LoadCallback):undefined

      /**
       * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
       * @name load
       * @function
       * @param {string|string[]} filename One or multiple files to load
       * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
       * @returns {Promise<Root>} Promise
       * @see {@link Root#load}
       * @variation 3
       */
      // function load(filename:string, [root:Root]):Promise<Root>


      protobuf.load = load;
      /**
       * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
       * @param {string|string[]} filename One or multiple files to load
       * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
       * @returns {Root} Root namespace
       * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
       * @see {@link Root#loadSync}
       */

      function loadSync(filename, root) {
        if (!root) root = new protobuf.Root();
        return root.loadSync(filename);
      }

      protobuf.loadSync = loadSync; // Serialization

      protobuf.encoder = require(14);
      protobuf.decoder = require(13);
      protobuf.verifier = require(40);
      protobuf.converter = require(12); // Reflection

      protobuf.ReflectionObject = require(24);
      protobuf.Namespace = require(23);
      protobuf.Root = require(29);
      protobuf.Enum = require(15);
      protobuf.Type = require(35);
      protobuf.Field = require(16);
      protobuf.OneOf = require(25);
      protobuf.MapField = require(20);
      protobuf.Service = require(33);
      protobuf.Method = require(22); // Runtime

      protobuf.Message = require(21);
      protobuf.wrappers = require(41); // Utility

      protobuf.types = require(36);
      protobuf.util = require(37); // Set up possibly cyclic reflection dependencies

      protobuf.ReflectionObject._configure(protobuf.Root);

      protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);

      protobuf.Root._configure(protobuf.Type);

      protobuf.Field._configure(protobuf.Type);
    }, {
      "12": 12,
      "13": 13,
      "14": 14,
      "15": 15,
      "16": 16,
      "18": 18,
      "20": 20,
      "21": 21,
      "22": 22,
      "23": 23,
      "24": 24,
      "25": 25,
      "29": 29,
      "33": 33,
      "35": 35,
      "36": 36,
      "37": 37,
      "40": 40,
      "41": 41
    }],
    18: [function (require, module, exports) {
      "use strict";

      var protobuf = exports;
      /**
       * Build type, one of `"full"`, `"light"` or `"minimal"`.
       * @name build
       * @type {string}
       * @const
       */

      protobuf.build = "minimal"; // Serialization

      protobuf.Writer = require(42);
      protobuf.BufferWriter = require(43);
      protobuf.Reader = require(27);
      protobuf.BufferReader = require(28); // Utility

      protobuf.util = require(39);
      protobuf.rpc = require(31);
      protobuf.roots = require(30);
      protobuf.configure = configure;
      /* istanbul ignore next */

      /**
       * Reconfigures the library according to the environment.
       * @returns {undefined}
       */

      function configure() {
        protobuf.Reader._configure(protobuf.BufferReader);

        protobuf.util._configure();
      } // Set up buffer utility according to the environment


      protobuf.Writer._configure(protobuf.BufferWriter);

      configure();
    }, {
      "27": 27,
      "28": 28,
      "30": 30,
      "31": 31,
      "39": 39,
      "42": 42,
      "43": 43
    }],
    19: [function (require, module, exports) {
      "use strict";

      var protobuf = module.exports = require(17);

      protobuf.build = "full"; // Parser

      protobuf.tokenize = require(34);
      protobuf.parse = require(26);
      protobuf.common = require(11); // Configure parser

      protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
    }, {
      "11": 11,
      "17": 17,
      "26": 26,
      "34": 34
    }],
    20: [function (require, module, exports) {
      "use strict";

      module.exports = MapField; // extends Field

      var Field = require(16);

      ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

      var types = require(36),
          util = require(37);
      /**
       * Constructs a new map field instance.
       * @classdesc Reflected map field.
       * @extends FieldBase
       * @constructor
       * @param {string} name Unique name within its namespace
       * @param {number} id Unique id within its namespace
       * @param {string} keyType Key type
       * @param {string} type Value type
       * @param {Object.<string,*>} [options] Declared options
       * @param {string} [comment] Comment associated with this field
       */


      function MapField(name, id, keyType, type, options, comment) {
        Field.call(this, name, id, type, undefined, undefined, options, comment);
        /* istanbul ignore if */

        if (!util.isString(keyType)) throw TypeError("keyType must be a string");
        /**
         * Key type.
         * @type {string}
         */

        this.keyType = keyType; // toJSON, marker

        /**
         * Resolved key type if not a basic type.
         * @type {ReflectionObject|null}
         */

        this.resolvedKeyType = null; // Overrides Field#map

        this.map = true;
      }
      /**
       * Map field descriptor.
       * @interface IMapField
       * @extends {IField}
       * @property {string} keyType Key type
       */

      /**
       * Extension map field descriptor.
       * @interface IExtensionMapField
       * @extends IMapField
       * @property {string} extend Extended type
       */

      /**
       * Constructs a map field from a map field descriptor.
       * @param {string} name Field name
       * @param {IMapField} json Map field descriptor
       * @returns {MapField} Created map field
       * @throws {TypeError} If arguments are invalid
       */


      MapField.fromJSON = function fromJSON(name, json) {
        return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
      };
      /**
       * Converts this map field to a map field descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IMapField} Map field descriptor
       */


      MapField.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * @override
       */


      MapField.prototype.resolve = function resolve() {
        if (this.resolved) return this; // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"

        if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
        return Field.prototype.resolve.call(this);
      };
      /**
       * Map field decorator (TypeScript).
       * @name MapField.d
       * @function
       * @param {number} fieldId Field id
       * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
       * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
       * @returns {FieldDecorator} Decorator function
       * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
       */


      MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
        // submessage value: decorate the submessage and use its name as the type
        if (typeof fieldValueType === "function") fieldValueType = util.decorateType(fieldValueType).name; // enum reference value: create a reflected copy of the enum and keep reuseing it
        else if (fieldValueType && _typeof(fieldValueType) === "object") fieldValueType = util.decorateEnum(fieldValueType).name;
        return function mapFieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
        };
      };
    }, {
      "16": 16,
      "36": 36,
      "37": 37
    }],
    21: [function (require, module, exports) {
      "use strict";

      module.exports = Message;

      var util = require(39);
      /**
       * Constructs a new message instance.
       * @classdesc Abstract runtime message.
       * @constructor
       * @param {Properties<T>} [properties] Properties to set
       * @template T extends object = object
       */


      function Message(properties) {
        // not used internally
        if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          this[keys[i]] = properties[keys[i]];
        }
      }
      /**
       * Reference to the reflected type.
       * @name Message.$type
       * @type {Type}
       * @readonly
       */

      /**
       * Reference to the reflected type.
       * @name Message#$type
       * @type {Type}
       * @readonly
       */

      /*eslint-disable valid-jsdoc*/

      /**
       * Creates a new message of this type using the specified properties.
       * @param {Object.<string,*>} [properties] Properties to set
       * @returns {Message<T>} Message instance
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.create = function create(properties) {
        return this.$type.create(properties);
      };
      /**
       * Encodes a message of this type.
       * @param {T|Object.<string,*>} message Message to encode
       * @param {Writer} [writer] Writer to use
       * @returns {Writer} Writer
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.encode = function encode(message, writer) {
        return this.$type.encode(message, writer);
      };
      /**
       * Encodes a message of this type preceeded by its length as a varint.
       * @param {T|Object.<string,*>} message Message to encode
       * @param {Writer} [writer] Writer to use
       * @returns {Writer} Writer
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.$type.encodeDelimited(message, writer);
      };
      /**
       * Decodes a message of this type.
       * @name Message.decode
       * @function
       * @param {Reader|Uint8Array} reader Reader or buffer to decode
       * @returns {T} Decoded message
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.decode = function decode(reader) {
        return this.$type.decode(reader);
      };
      /**
       * Decodes a message of this type preceeded by its length as a varint.
       * @name Message.decodeDelimited
       * @function
       * @param {Reader|Uint8Array} reader Reader or buffer to decode
       * @returns {T} Decoded message
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.decodeDelimited = function decodeDelimited(reader) {
        return this.$type.decodeDelimited(reader);
      };
      /**
       * Verifies a message of this type.
       * @name Message.verify
       * @function
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */


      Message.verify = function verify(message) {
        return this.$type.verify(message);
      };
      /**
       * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
       * @param {Object.<string,*>} object Plain object
       * @returns {T} Message instance
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.fromObject = function fromObject(object) {
        return this.$type.fromObject(object);
      };
      /**
       * Creates a plain object from a message of this type. Also converts values to other types if specified.
       * @param {T} message Message instance
       * @param {IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       * @template T extends Message<T>
       * @this Constructor<T>
       */


      Message.toObject = function toObject(message, options) {
        return this.$type.toObject(message, options);
      };
      /**
       * Converts this message to JSON.
       * @returns {Object.<string,*>} JSON object
       */


      Message.prototype.toJSON = function toJSON() {
        return this.$type.toObject(this, util.toJSONOptions);
      };
      /*eslint-enable valid-jsdoc*/

    }, {
      "39": 39
    }],
    22: [function (require, module, exports) {
      "use strict";

      module.exports = Method; // extends ReflectionObject

      var ReflectionObject = require(24);

      ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

      var util = require(37);
      /**
       * Constructs a new service method instance.
       * @classdesc Reflected service method.
       * @extends ReflectionObject
       * @constructor
       * @param {string} name Method name
       * @param {string|undefined} type Method type, usually `"rpc"`
       * @param {string} requestType Request message type
       * @param {string} responseType Response message type
       * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
       * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
       * @param {Object.<string,*>} [options] Declared options
       * @param {string} [comment] The comment for this method
       */


      function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {
        /* istanbul ignore next */
        if (util.isObject(requestStream)) {
          options = requestStream;
          requestStream = responseStream = undefined;
        } else if (util.isObject(responseStream)) {
          options = responseStream;
          responseStream = undefined;
        }
        /* istanbul ignore if */


        if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");
        /* istanbul ignore if */

        if (!util.isString(requestType)) throw TypeError("requestType must be a string");
        /* istanbul ignore if */

        if (!util.isString(responseType)) throw TypeError("responseType must be a string");
        ReflectionObject.call(this, name, options);
        /**
         * Method type.
         * @type {string}
         */

        this.type = type || "rpc"; // toJSON

        /**
         * Request type.
         * @type {string}
         */

        this.requestType = requestType; // toJSON, marker

        /**
         * Whether requests are streamed or not.
         * @type {boolean|undefined}
         */

        this.requestStream = requestStream ? true : undefined; // toJSON

        /**
         * Response type.
         * @type {string}
         */

        this.responseType = responseType; // toJSON

        /**
         * Whether responses are streamed or not.
         * @type {boolean|undefined}
         */

        this.responseStream = responseStream ? true : undefined; // toJSON

        /**
         * Resolved request type.
         * @type {Type|null}
         */

        this.resolvedRequestType = null;
        /**
         * Resolved response type.
         * @type {Type|null}
         */

        this.resolvedResponseType = null;
        /**
         * Comment for this method
         * @type {string|null}
         */

        this.comment = comment;
      }
      /**
       * Method descriptor.
       * @interface IMethod
       * @property {string} [type="rpc"] Method type
       * @property {string} requestType Request type
       * @property {string} responseType Response type
       * @property {boolean} [requestStream=false] Whether requests are streamed
       * @property {boolean} [responseStream=false] Whether responses are streamed
       * @property {Object.<string,*>} [options] Method options
       */

      /**
       * Constructs a method from a method descriptor.
       * @param {string} name Method name
       * @param {IMethod} json Method descriptor
       * @returns {Method} Created method
       * @throws {TypeError} If arguments are invalid
       */


      Method.fromJSON = function fromJSON(name, json) {
        return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
      };
      /**
       * Converts this method to a method descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IMethod} Method descriptor
       */


      Method.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["type", this.type !== "rpc" &&
        /* istanbul ignore next */
        this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * @override
       */


      Method.prototype.resolve = function resolve() {
        /* istanbul ignore if */
        if (this.resolved) return this;
        this.resolvedRequestType = this.parent.lookupType(this.requestType);
        this.resolvedResponseType = this.parent.lookupType(this.responseType);
        return ReflectionObject.prototype.resolve.call(this);
      };
    }, {
      "24": 24,
      "37": 37
    }],
    23: [function (require, module, exports) {
      "use strict";

      module.exports = Namespace; // extends ReflectionObject

      var ReflectionObject = require(24);

      ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

      var Field = require(16),
          util = require(37);

      var Type, // cyclic
      Service, Enum;
      /**
       * Constructs a new namespace instance.
       * @name Namespace
       * @classdesc Reflected namespace.
       * @extends NamespaceBase
       * @constructor
       * @param {string} name Namespace name
       * @param {Object.<string,*>} [options] Declared options
       */

      /**
       * Constructs a namespace from JSON.
       * @memberof Namespace
       * @function
       * @param {string} name Namespace name
       * @param {Object.<string,*>} json JSON object
       * @returns {Namespace} Created namespace
       * @throws {TypeError} If arguments are invalid
       */

      Namespace.fromJSON = function fromJSON(name, json) {
        return new Namespace(name, json.options).addJSON(json.nested);
      };
      /**
       * Converts an array of reflection objects to JSON.
       * @memberof Namespace
       * @param {ReflectionObject[]} array Object array
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
       */


      function arrayToJSON(array, toJSONOptions) {
        if (!(array && array.length)) return undefined;
        var obj = {};

        for (var i = 0; i < array.length; ++i) {
          obj[array[i].name] = array[i].toJSON(toJSONOptions);
        }

        return obj;
      }

      Namespace.arrayToJSON = arrayToJSON;
      /**
       * Tests if the specified id is reserved.
       * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
       * @param {number} id Id to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */

      Namespace.isReservedId = function isReservedId(reserved, id) {
        if (reserved) for (var i = 0; i < reserved.length; ++i) {
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] >= id) return true;
        }
        return false;
      };
      /**
       * Tests if the specified name is reserved.
       * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
       * @param {string} name Name to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */


      Namespace.isReservedName = function isReservedName(reserved, name) {
        if (reserved) for (var i = 0; i < reserved.length; ++i) {
          if (reserved[i] === name) return true;
        }
        return false;
      };
      /**
       * Not an actual constructor. Use {@link Namespace} instead.
       * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
       * @exports NamespaceBase
       * @extends ReflectionObject
       * @abstract
       * @constructor
       * @param {string} name Namespace name
       * @param {Object.<string,*>} [options] Declared options
       * @see {@link Namespace}
       */


      function Namespace(name, options) {
        ReflectionObject.call(this, name, options);
        /**
         * Nested objects by name.
         * @type {Object.<string,ReflectionObject>|undefined}
         */

        this.nested = undefined; // toJSON

        /**
         * Cached nested objects as an array.
         * @type {ReflectionObject[]|null}
         * @private
         */

        this._nestedArray = null;
      }

      function clearCache(namespace) {
        namespace._nestedArray = null;
        return namespace;
      }
      /**
       * Nested objects of this namespace as an array for iteration.
       * @name NamespaceBase#nestedArray
       * @type {ReflectionObject[]}
       * @readonly
       */


      Object.defineProperty(Namespace.prototype, "nestedArray", {
        get: function get() {
          return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
        }
      });
      /**
       * Namespace descriptor.
       * @interface INamespace
       * @property {Object.<string,*>} [options] Namespace options
       * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
       */

      /**
       * Any extension field descriptor.
       * @typedef AnyExtensionField
       * @type {IExtensionField|IExtensionMapField}
       */

      /**
       * Any nested object descriptor.
       * @typedef AnyNestedObject
       * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
       */
      // ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

      /**
       * Converts this namespace to a namespace descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {INamespace} Namespace descriptor
       */

      Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
        return util.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions)]);
      };
      /**
       * Adds nested objects to this namespace from nested object descriptors.
       * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
       * @returns {Namespace} `this`
       */


      Namespace.prototype.addJSON = function addJSON(nestedJson) {
        var ns = this;
        /* istanbul ignore else */

        if (nestedJson) {
          for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add( // most to least likely
            (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
          }
        }

        return this;
      };
      /**
       * Gets the nested object of the specified name.
       * @param {string} name Nested object name
       * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
       */


      Namespace.prototype.get = function get(name) {
        return this.nested && this.nested[name] || null;
      };
      /**
       * Gets the values of the nested {@link Enum|enum} of the specified name.
       * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
       * @param {string} name Nested enum name
       * @returns {Object.<string,number>} Enum values
       * @throws {Error} If there is no such enum
       */


      Namespace.prototype.getEnum = function getEnum(name) {
        if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
        throw Error("no such enum: " + name);
      };
      /**
       * Adds a nested object to this namespace.
       * @param {ReflectionObject} object Nested object to add
       * @returns {Namespace} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If there is already a nested object with this name
       */


      Namespace.prototype.add = function add(object) {
        if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
        if (!this.nested) this.nested = {};else {
          var prev = this.get(object.name);

          if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
              // replace plain namespace but keep existing nested elements and options
              var nested = prev.nestedArray;

              for (var i = 0; i < nested.length; ++i) {
                object.add(nested[i]);
              }

              this.remove(prev);
              if (!this.nested) this.nested = {};
              object.setOptions(prev.options, true);
            } else throw Error("duplicate name '" + object.name + "' in " + this);
          }
        }
        this.nested[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      };
      /**
       * Removes a nested object from this namespace.
       * @param {ReflectionObject} object Nested object to remove
       * @returns {Namespace} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If `object` is not a member of this namespace
       */


      Namespace.prototype.remove = function remove(object) {
        if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
        if (object.parent !== this) throw Error(object + " is not a member of " + this);
        delete this.nested[object.name];
        if (!Object.keys(this.nested).length) this.nested = undefined;
        object.onRemove(this);
        return clearCache(this);
      };
      /**
       * Defines additial namespaces within this one if not yet existing.
       * @param {string|string[]} path Path to create
       * @param {*} [json] Nested types to create from JSON
       * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
       */


      Namespace.prototype.define = function define(path, json) {
        if (util.isString(path)) path = path.split(".");else if (!Array.isArray(path)) throw TypeError("illegal path");
        if (path && path.length && path[0] === "") throw Error("path must be relative");
        var ptr = this;

        while (path.length > 0) {
          var part = path.shift();

          if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
          } else ptr.add(ptr = new Namespace(part));
        }

        if (json) ptr.addJSON(json);
        return ptr;
      };
      /**
       * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
       * @returns {Namespace} `this`
       */


      Namespace.prototype.resolveAll = function resolveAll() {
        var nested = this.nestedArray,
            i = 0;

        while (i < nested.length) {
          if (nested[i] instanceof Namespace) nested[i++].resolveAll();else nested[i++].resolve();
        }

        return this.resolve();
      };
      /**
       * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
       * @param {string|string[]} path Path to look up
       * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
       * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
       * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
       */


      Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
        /* istanbul ignore next */
        if (typeof filterTypes === "boolean") {
          parentAlreadyChecked = filterTypes;
          filterTypes = undefined;
        } else if (filterTypes && !Array.isArray(filterTypes)) filterTypes = [filterTypes];

        if (util.isString(path) && path.length) {
          if (path === ".") return this.root;
          path = path.split(".");
        } else if (!path.length) return this; // Start at root if path is absolute


        if (path[0] === "") return this.root.lookup(path.slice(1), filterTypes); // Test if the first part matches any nested object, and if so, traverse if path contains more

        var found = this.get(path[0]);

        if (found) {
          if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
          } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found; // Otherwise try each nested namespace

        } else for (var i = 0; i < this.nestedArray.length; ++i) {
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;
        } // If there hasn't been a match, try again at the parent


        if (this.parent === null || parentAlreadyChecked) return null;
        return this.parent.lookup(path, filterTypes);
      };
      /**
       * Looks up the reflection object at the specified path, relative to this namespace.
       * @name NamespaceBase#lookup
       * @function
       * @param {string|string[]} path Path to look up
       * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
       * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
       * @variation 2
       */
      // lookup(path: string, [parentAlreadyChecked: boolean])

      /**
       * Looks up the {@link Type|type} at the specified path, relative to this namespace.
       * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
       * @param {string|string[]} path Path to look up
       * @returns {Type} Looked up type
       * @throws {Error} If `path` does not point to a type
       */


      Namespace.prototype.lookupType = function lookupType(path) {
        var found = this.lookup(path, [Type]);
        if (!found) throw Error("no such type: " + path);
        return found;
      };
      /**
       * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
       * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
       * @param {string|string[]} path Path to look up
       * @returns {Enum} Looked up enum
       * @throws {Error} If `path` does not point to an enum
       */


      Namespace.prototype.lookupEnum = function lookupEnum(path) {
        var found = this.lookup(path, [Enum]);
        if (!found) throw Error("no such Enum '" + path + "' in " + this);
        return found;
      };
      /**
       * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
       * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
       * @param {string|string[]} path Path to look up
       * @returns {Type} Looked up type or enum
       * @throws {Error} If `path` does not point to a type or enum
       */


      Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
        var found = this.lookup(path, [Type, Enum]);
        if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
        return found;
      };
      /**
       * Looks up the {@link Service|service} at the specified path, relative to this namespace.
       * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
       * @param {string|string[]} path Path to look up
       * @returns {Service} Looked up service
       * @throws {Error} If `path` does not point to a service
       */


      Namespace.prototype.lookupService = function lookupService(path) {
        var found = this.lookup(path, [Service]);
        if (!found) throw Error("no such Service '" + path + "' in " + this);
        return found;
      }; // Sets up cyclic dependencies (called in index-light)


      Namespace._configure = function (Type_, Service_, Enum_) {
        Type = Type_;
        Service = Service_;
        Enum = Enum_;
      };
    }, {
      "16": 16,
      "24": 24,
      "37": 37
    }],
    24: [function (require, module, exports) {
      "use strict";

      module.exports = ReflectionObject;
      ReflectionObject.className = "ReflectionObject";

      var util = require(37);

      var Root; // cyclic

      /**
       * Constructs a new reflection object instance.
       * @classdesc Base class of all reflection objects.
       * @constructor
       * @param {string} name Object name
       * @param {Object.<string,*>} [options] Declared options
       * @abstract
       */

      function ReflectionObject(name, options) {
        if (!util.isString(name)) throw TypeError("name must be a string");
        if (options && !util.isObject(options)) throw TypeError("options must be an object");
        /**
         * Options.
         * @type {Object.<string,*>|undefined}
         */

        this.options = options; // toJSON

        /**
         * Unique name within its namespace.
         * @type {string}
         */

        this.name = name;
        /**
         * Parent namespace.
         * @type {Namespace|null}
         */

        this.parent = null;
        /**
         * Whether already resolved or not.
         * @type {boolean}
         */

        this.resolved = false;
        /**
         * Comment text, if any.
         * @type {string|null}
         */

        this.comment = null;
        /**
         * Defining file name.
         * @type {string|null}
         */

        this.filename = null;
      }

      Object.defineProperties(ReflectionObject.prototype, {
        /**
         * Reference to the root namespace.
         * @name ReflectionObject#root
         * @type {Root}
         * @readonly
         */
        root: {
          get: function get() {
            var ptr = this;

            while (ptr.parent !== null) {
              ptr = ptr.parent;
            }

            return ptr;
          }
        },

        /**
         * Full name including leading dot.
         * @name ReflectionObject#fullName
         * @type {string}
         * @readonly
         */
        fullName: {
          get: function get() {
            var path = [this.name],
                ptr = this.parent;

            while (ptr) {
              path.unshift(ptr.name);
              ptr = ptr.parent;
            }

            return path.join(".");
          }
        }
      });
      /**
       * Converts this reflection object to its descriptor representation.
       * @returns {Object.<string,*>} Descriptor
       * @abstract
       */

      ReflectionObject.prototype.toJSON =
      /* istanbul ignore next */
      function toJSON() {
        throw Error(); // not implemented, shouldn't happen
      };
      /**
       * Called when this object is added to a parent.
       * @param {ReflectionObject} parent Parent added to
       * @returns {undefined}
       */


      ReflectionObject.prototype.onAdd = function onAdd(parent) {
        if (this.parent && this.parent !== parent) this.parent.remove(this);
        this.parent = parent;
        this.resolved = false;
        var root = parent.root;
        if (root instanceof Root) root._handleAdd(this);
      };
      /**
       * Called when this object is removed from a parent.
       * @param {ReflectionObject} parent Parent removed from
       * @returns {undefined}
       */


      ReflectionObject.prototype.onRemove = function onRemove(parent) {
        var root = parent.root;
        if (root instanceof Root) root._handleRemove(this);
        this.parent = null;
        this.resolved = false;
      };
      /**
       * Resolves this objects type references.
       * @returns {ReflectionObject} `this`
       */


      ReflectionObject.prototype.resolve = function resolve() {
        if (this.resolved) return this;
        if (this.root instanceof Root) this.resolved = true; // only if part of a root

        return this;
      };
      /**
       * Gets an option value.
       * @param {string} name Option name
       * @returns {*} Option value or `undefined` if not set
       */


      ReflectionObject.prototype.getOption = function getOption(name) {
        if (this.options) return this.options[name];
        return undefined;
      };
      /**
       * Sets an option.
       * @param {string} name Option name
       * @param {*} value Option value
       * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
       * @returns {ReflectionObject} `this`
       */


      ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (!ifNotSet || !this.options || this.options[name] === undefined) (this.options || (this.options = {}))[name] = value;
        return this;
      };
      /**
       * Sets multiple options.
       * @param {Object.<string,*>} options Options to set
       * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
       * @returns {ReflectionObject} `this`
       */


      ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
        if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) {
          this.setOption(keys[i], options[keys[i]], ifNotSet);
        }
        return this;
      };
      /**
       * Converts this instance to its string representation.
       * @returns {string} Class name[, space, full name]
       */


      ReflectionObject.prototype.toString = function toString() {
        var className = this.constructor.className,
            fullName = this.fullName;
        if (fullName.length) return className + " " + fullName;
        return className;
      }; // Sets up cyclic dependencies (called in index-light)


      ReflectionObject._configure = function (Root_) {
        Root = Root_;
      };
    }, {
      "37": 37
    }],
    25: [function (require, module, exports) {
      "use strict";

      module.exports = OneOf; // extends ReflectionObject

      var ReflectionObject = require(24);

      ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

      var Field = require(16),
          util = require(37);
      /**
       * Constructs a new oneof instance.
       * @classdesc Reflected oneof.
       * @extends ReflectionObject
       * @constructor
       * @param {string} name Oneof name
       * @param {string[]|Object.<string,*>} [fieldNames] Field names
       * @param {Object.<string,*>} [options] Declared options
       * @param {string} [comment] Comment associated with this field
       */


      function OneOf(name, fieldNames, options, comment) {
        if (!Array.isArray(fieldNames)) {
          options = fieldNames;
          fieldNames = undefined;
        }

        ReflectionObject.call(this, name, options);
        /* istanbul ignore if */

        if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");
        /**
         * Field names that belong to this oneof.
         * @type {string[]}
         */

        this.oneof = fieldNames || []; // toJSON, marker

        /**
         * Fields that belong to this oneof as an array for iteration.
         * @type {Field[]}
         * @readonly
         */

        this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

        /**
         * Comment for this field.
         * @type {string|null}
         */

        this.comment = comment;
      }
      /**
       * Oneof descriptor.
       * @interface IOneOf
       * @property {Array.<string>} oneof Oneof field names
       * @property {Object.<string,*>} [options] Oneof options
       */

      /**
       * Constructs a oneof from a oneof descriptor.
       * @param {string} name Oneof name
       * @param {IOneOf} json Oneof descriptor
       * @returns {OneOf} Created oneof
       * @throws {TypeError} If arguments are invalid
       */


      OneOf.fromJSON = function fromJSON(name, json) {
        return new OneOf(name, json.oneof, json.options, json.comment);
      };
      /**
       * Converts this oneof to a oneof descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IOneOf} Oneof descriptor
       */


      OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * Adds the fields of the specified oneof to the parent if not already done so.
       * @param {OneOf} oneof The oneof
       * @returns {undefined}
       * @inner
       * @ignore
       */


      function addFieldsToParent(oneof) {
        if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) {
          if (!oneof.fieldsArray[i].parent) oneof.parent.add(oneof.fieldsArray[i]);
        }
      }
      /**
       * Adds a field to this oneof and removes it from its current parent, if any.
       * @param {Field} field Field to add
       * @returns {OneOf} `this`
       */


      OneOf.prototype.add = function add(field) {
        /* istanbul ignore if */
        if (!(field instanceof Field)) throw TypeError("field must be a Field");
        if (field.parent && field.parent !== this.parent) field.parent.remove(field);
        this.oneof.push(field.name);
        this.fieldsArray.push(field);
        field.partOf = this; // field.parent remains null

        addFieldsToParent(this);
        return this;
      };
      /**
       * Removes a field from this oneof and puts it back to the oneof's parent.
       * @param {Field} field Field to remove
       * @returns {OneOf} `this`
       */


      OneOf.prototype.remove = function remove(field) {
        /* istanbul ignore if */
        if (!(field instanceof Field)) throw TypeError("field must be a Field");
        var index = this.fieldsArray.indexOf(field);
        /* istanbul ignore if */

        if (index < 0) throw Error(field + " is not a member of " + this);
        this.fieldsArray.splice(index, 1);
        index = this.oneof.indexOf(field.name);
        /* istanbul ignore else */

        if (index > -1) // theoretical
          this.oneof.splice(index, 1);
        field.partOf = null;
        return this;
      };
      /**
       * @override
       */


      OneOf.prototype.onAdd = function onAdd(parent) {
        ReflectionObject.prototype.onAdd.call(this, parent);
        var self = this; // Collect present fields

        for (var i = 0; i < this.oneof.length; ++i) {
          var field = parent.get(this.oneof[i]);

          if (field && !field.partOf) {
            field.partOf = self;
            self.fieldsArray.push(field);
          }
        } // Add not yet present fields


        addFieldsToParent(this);
      };
      /**
       * @override
       */


      OneOf.prototype.onRemove = function onRemove(parent) {
        for (var i = 0, field; i < this.fieldsArray.length; ++i) {
          if ((field = this.fieldsArray[i]).parent) field.parent.remove(field);
        }

        ReflectionObject.prototype.onRemove.call(this, parent);
      };
      /**
       * Decorator function as returned by {@link OneOf.d} (TypeScript).
       * @typedef OneOfDecorator
       * @type {function}
       * @param {Object} prototype Target prototype
       * @param {string} oneofName OneOf name
       * @returns {undefined}
       */

      /**
       * OneOf decorator (TypeScript).
       * @function
       * @param {...string} fieldNames Field names
       * @returns {OneOfDecorator} Decorator function
       * @template T extends string
       */


      OneOf.d = function decorateOneOf() {
        var fieldNames = new Array(arguments.length),
            index = 0;

        while (index < arguments.length) {
          fieldNames[index] = arguments[index++];
        }

        return function oneOfDecorator(prototype, oneofName) {
          util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
          Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
          });
        };
      };
    }, {
      "16": 16,
      "24": 24,
      "37": 37
    }],
    26: [function (require, module, exports) {
      "use strict";

      module.exports = parse;
      parse.filename = null;
      parse.defaults = {
        keepCase: false
      };

      var tokenize = require(34),
          Root = require(29),
          Type = require(35),
          Field = require(16),
          MapField = require(20),
          OneOf = require(25),
          Enum = require(15),
          Service = require(33),
          Method = require(22),
          types = require(36),
          util = require(37);

      var base10Re = /^[1-9][0-9]*$/,
          base10NegRe = /^-?[1-9][0-9]*$/,
          base16Re = /^0[x][0-9a-fA-F]+$/,
          base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
          base8Re = /^0[0-7]+$/,
          base8NegRe = /^-?0[0-7]+$/,
          numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
          nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
          typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
          fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
      /**
       * Result object returned from {@link parse}.
       * @interface IParserResult
       * @property {string|undefined} package Package name, if declared
       * @property {string[]|undefined} imports Imports, if any
       * @property {string[]|undefined} weakImports Weak imports, if any
       * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
       * @property {Root} root Populated root instance
       */

      /**
       * Options modifying the behavior of {@link parse}.
       * @interface IParseOptions
       * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
       * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
       */

      /**
       * Options modifying the behavior of JSON serialization.
       * @interface IToJSONOptions
       * @property {boolean} [keepComments=false] Serializes comments.
       */

      /**
       * Parses the given .proto source and returns an object with the parsed contents.
       * @param {string} source Source contents
       * @param {Root} root Root to populate
       * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
       * @returns {IParserResult} Parser result
       * @property {string} filename=null Currently processing file name for error reporting, if known
       * @property {IParseOptions} defaults Default {@link IParseOptions}
       */

      function parse(source, root, options) {
        /* eslint-disable callback-return */
        if (!(root instanceof Root)) {
          options = root;
          root = new Root();
        }

        if (!options) options = parse.defaults;
        var tn = tokenize(source, options.alternateCommentMode || false),
            next = tn.next,
            push = tn.push,
            peek = tn.peek,
            skip = tn.skip,
            cmnt = tn.cmnt;
        var head = true,
            pkg,
            imports,
            weakImports,
            syntax,
            isProto3 = false;
        var ptr = root;
        var applyCase = options.keepCase ? function (name) {
          return name;
        } : util.camelCase;
        /* istanbul ignore next */

        function illegal(token, name, insideTryCatch) {
          var filename = parse.filename;
          if (!insideTryCatch) parse.filename = null;
          return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
        }

        function readString() {
          var values = [],
              token;

          do {
            /* istanbul ignore if */
            if ((token = next()) !== "\"" && token !== "'") throw illegal(token);
            values.push(next());
            skip(token);
            token = peek();
          } while (token === "\"" || token === "'");

          return values.join("");
        }

        function readValue(acceptTypeRef) {
          var token = next();

          switch (token) {
            case "'":
            case "\"":
              push(token);
              return readString();

            case "true":
            case "TRUE":
              return true;

            case "false":
            case "FALSE":
              return false;
          }

          try {
            return parseNumber(token,
            /* insideTryCatch */
            true);
          } catch (e) {
            /* istanbul ignore else */
            if (acceptTypeRef && typeRefRe.test(token)) return token;
            /* istanbul ignore next */

            throw illegal(token, "value");
          }
        }

        function readRanges(target, acceptStrings) {
          var token, start;

          do {
            if (acceptStrings && ((token = peek()) === "\"" || token === "'")) target.push(readString());else target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
          } while (skip(",", true));

          skip(";");
        }

        function parseNumber(token, insideTryCatch) {
          var sign = 1;

          if (token.charAt(0) === "-") {
            sign = -1;
            token = token.substring(1);
          }

          switch (token) {
            case "inf":
            case "INF":
            case "Inf":
              return sign * Infinity;

            case "nan":
            case "NAN":
            case "Nan":
            case "NaN":
              return NaN;

            case "0":
              return 0;
          }

          if (base10Re.test(token)) return sign * parseInt(token, 10);
          if (base16Re.test(token)) return sign * parseInt(token, 16);
          if (base8Re.test(token)) return sign * parseInt(token, 8);
          /* istanbul ignore else */

          if (numberRe.test(token)) return sign * parseFloat(token);
          /* istanbul ignore next */

          throw illegal(token, "number", insideTryCatch);
        }

        function parseId(token, acceptNegative) {
          switch (token) {
            case "max":
            case "MAX":
            case "Max":
              return 536870911;

            case "0":
              return 0;
          }
          /* istanbul ignore if */


          if (!acceptNegative && token.charAt(0) === "-") throw illegal(token, "id");
          if (base10NegRe.test(token)) return parseInt(token, 10);
          if (base16NegRe.test(token)) return parseInt(token, 16);
          /* istanbul ignore else */

          if (base8NegRe.test(token)) return parseInt(token, 8);
          /* istanbul ignore next */

          throw illegal(token, "id");
        }

        function parsePackage() {
          /* istanbul ignore if */
          if (pkg !== undefined) throw illegal("package");
          pkg = next();
          /* istanbul ignore if */

          if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");
          ptr = ptr.define(pkg);
          skip(";");
        }

        function parseImport() {
          var token = peek();
          var whichImports;

          switch (token) {
            case "weak":
              whichImports = weakImports || (weakImports = []);
              next();
              break;

            case "public":
              next();
            // eslint-disable-line no-fallthrough

            default:
              whichImports = imports || (imports = []);
              break;
          }

          token = readString();
          skip(";");
          whichImports.push(token);
        }

        function parseSyntax() {
          skip("=");
          syntax = readString();
          isProto3 = syntax === "proto3";
          /* istanbul ignore if */

          if (!isProto3 && syntax !== "proto2") throw illegal(syntax, "syntax");
          skip(";");
        }

        function parseCommon(parent, token) {
          switch (token) {
            case "option":
              parseOption(parent, token);
              skip(";");
              return true;

            case "message":
              parseType(parent, token);
              return true;

            case "enum":
              parseEnum(parent, token);
              return true;

            case "service":
              parseService(parent, token);
              return true;

            case "extend":
              parseExtension(parent, token);
              return true;
          }

          return false;
        }

        function ifBlock(obj, fnIf, fnElse) {
          var trailingLine = tn.line;

          if (obj) {
            obj.comment = cmnt(); // try block-type comment

            obj.filename = parse.filename;
          }

          if (skip("{", true)) {
            var token;

            while ((token = next()) !== "}") {
              fnIf(token);
            }

            skip(";", true);
          } else {
            if (fnElse) fnElse();
            skip(";");
            if (obj && typeof obj.comment !== "string") obj.comment = cmnt(trailingLine); // try line-type comment if no block
          }
        }

        function parseType(parent, token) {
          /* istanbul ignore if */
          if (!nameRe.test(token = next())) throw illegal(token, "type name");
          var type = new Type(token);
          ifBlock(type, function parseType_block(token) {
            if (parseCommon(type, token)) return;

            switch (token) {
              case "map":
                parseMapField(type, token);
                break;

              case "required":
              case "optional":
              case "repeated":
                parseField(type, token);
                break;

              case "oneof":
                parseOneOf(type, token);
                break;

              case "extensions":
                readRanges(type.extensions || (type.extensions = []));
                break;

              case "reserved":
                readRanges(type.reserved || (type.reserved = []), true);
                break;

              default:
                /* istanbul ignore if */
                if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                push(token);
                parseField(type, "optional");
                break;
            }
          });
          parent.add(type);
        }

        function parseField(parent, rule, extend) {
          var type = next();

          if (type === "group") {
            parseGroup(parent, rule);
            return;
          }
          /* istanbul ignore if */


          if (!typeRefRe.test(type)) throw illegal(type, "type");
          var name = next();
          /* istanbul ignore if */

          if (!nameRe.test(name)) throw illegal(name, "name");
          name = applyCase(name);
          skip("=");
          var field = new Field(name, parseId(next()), type, rule, extend);
          ifBlock(field, function parseField_block(token) {
            /* istanbul ignore else */
            if (token === "option") {
              parseOption(field, token);
              skip(";");
            } else throw illegal(token);
          }, function parseField_line() {
            parseInlineOptions(field);
          });
          parent.add(field); // JSON defaults to packed=true if not set so we have to set packed=false explicity when
          // parsing proto2 descriptors without the option, where applicable. This must be done for
          // all known packable types and anything that could be an enum (= is not a basic type).

          if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined)) field.setOption("packed", false,
          /* ifNotSet */
          true);
        }

        function parseGroup(parent, rule) {
          var name = next();
          /* istanbul ignore if */

          if (!nameRe.test(name)) throw illegal(name, "name");
          var fieldName = util.lcFirst(name);
          if (name === fieldName) name = util.ucFirst(name);
          skip("=");
          var id = parseId(next());
          var type = new Type(name);
          type.group = true;
          var field = new Field(fieldName, id, name, rule);
          field.filename = parse.filename;
          ifBlock(type, function parseGroup_block(token) {
            switch (token) {
              case "option":
                parseOption(type, token);
                skip(";");
                break;

              case "required":
              case "optional":
              case "repeated":
                parseField(type, token);
                break;

              /* istanbul ignore next */

              default:
                throw illegal(token);
              // there are no groups with proto3 semantics
            }
          });
          parent.add(type).add(field);
        }

        function parseMapField(parent) {
          skip("<");
          var keyType = next();
          /* istanbul ignore if */

          if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");
          skip(",");
          var valueType = next();
          /* istanbul ignore if */

          if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");
          skip(">");
          var name = next();
          /* istanbul ignore if */

          if (!nameRe.test(name)) throw illegal(name, "name");
          skip("=");
          var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
          ifBlock(field, function parseMapField_block(token) {
            /* istanbul ignore else */
            if (token === "option") {
              parseOption(field, token);
              skip(";");
            } else throw illegal(token);
          }, function parseMapField_line() {
            parseInlineOptions(field);
          });
          parent.add(field);
        }

        function parseOneOf(parent, token) {
          /* istanbul ignore if */
          if (!nameRe.test(token = next())) throw illegal(token, "name");
          var oneof = new OneOf(applyCase(token));
          ifBlock(oneof, function parseOneOf_block(token) {
            if (token === "option") {
              parseOption(oneof, token);
              skip(";");
            } else {
              push(token);
              parseField(oneof, "optional");
            }
          });
          parent.add(oneof);
        }

        function parseEnum(parent, token) {
          /* istanbul ignore if */
          if (!nameRe.test(token = next())) throw illegal(token, "name");
          var enm = new Enum(token);
          ifBlock(enm, function parseEnum_block(token) {
            switch (token) {
              case "option":
                parseOption(enm, token);
                skip(";");
                break;

              case "reserved":
                readRanges(enm.reserved || (enm.reserved = []), true);
                break;

              default:
                parseEnumValue(enm, token);
            }
          });
          parent.add(enm);
        }

        function parseEnumValue(parent, token) {
          /* istanbul ignore if */
          if (!nameRe.test(token)) throw illegal(token, "name");
          skip("=");
          var value = parseId(next(), true),
              dummy = {};
          ifBlock(dummy, function parseEnumValue_block(token) {
            /* istanbul ignore else */
            if (token === "option") {
              parseOption(dummy, token); // skip

              skip(";");
            } else throw illegal(token);
          }, function parseEnumValue_line() {
            parseInlineOptions(dummy); // skip
          });
          parent.add(token, value, dummy.comment);
        }

        function parseOption(parent, token) {
          var isCustom = skip("(", true);
          /* istanbul ignore if */

          if (!typeRefRe.test(token = next())) throw illegal(token, "name");
          var name = token;

          if (isCustom) {
            skip(")");
            name = "(" + name + ")";
            token = peek();

            if (fqTypeRefRe.test(token)) {
              name += token;
              next();
            }
          }

          skip("=");
          parseOptionValue(parent, name);
        }

        function parseOptionValue(parent, name) {
          if (skip("{", true)) {
            // { a: "foo" b { c: "bar" } }
            do {
              /* istanbul ignore if */
              if (!nameRe.test(token = next())) throw illegal(token, "name");
              if (peek() === "{") parseOptionValue(parent, name + "." + token);else {
                skip(":");
                if (peek() === "{") parseOptionValue(parent, name + "." + token);else setOption(parent, name + "." + token, readValue(true));
              }
              skip(",", true);
            } while (!skip("}", true));
          } else setOption(parent, name, readValue(true)); // Does not enforce a delimiter to be universal

        }

        function setOption(parent, name, value) {
          if (parent.setOption) parent.setOption(name, value);
        }

        function parseInlineOptions(parent) {
          if (skip("[", true)) {
            do {
              parseOption(parent, "option");
            } while (skip(",", true));

            skip("]");
          }

          return parent;
        }

        function parseService(parent, token) {
          /* istanbul ignore if */
          if (!nameRe.test(token = next())) throw illegal(token, "service name");
          var service = new Service(token);
          ifBlock(service, function parseService_block(token) {
            if (parseCommon(service, token)) return;
            /* istanbul ignore else */

            if (token === "rpc") parseMethod(service, token);else throw illegal(token);
          });
          parent.add(service);
        }

        function parseMethod(parent, token) {
          var type = token;
          /* istanbul ignore if */

          if (!nameRe.test(token = next())) throw illegal(token, "name");
          var name = token,
              requestType,
              requestStream,
              responseType,
              responseStream;
          skip("(");
          if (skip("stream", true)) requestStream = true;
          /* istanbul ignore if */

          if (!typeRefRe.test(token = next())) throw illegal(token);
          requestType = token;
          skip(")");
          skip("returns");
          skip("(");
          if (skip("stream", true)) responseStream = true;
          /* istanbul ignore if */

          if (!typeRefRe.test(token = next())) throw illegal(token);
          responseType = token;
          skip(")");
          var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
          ifBlock(method, function parseMethod_block(token) {
            /* istanbul ignore else */
            if (token === "option") {
              parseOption(method, token);
              skip(";");
            } else throw illegal(token);
          });
          parent.add(method);
        }

        function parseExtension(parent, token) {
          /* istanbul ignore if */
          if (!typeRefRe.test(token = next())) throw illegal(token, "reference");
          var reference = token;
          ifBlock(null, function parseExtension_block(token) {
            switch (token) {
              case "required":
              case "repeated":
              case "optional":
                parseField(parent, token, reference);
                break;

              default:
                /* istanbul ignore if */
                if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
                push(token);
                parseField(parent, "optional", reference);
                break;
            }
          });
        }

        var token;

        while ((token = next()) !== null) {
          switch (token) {
            case "package":
              /* istanbul ignore if */
              if (!head) throw illegal(token);
              parsePackage();
              break;

            case "import":
              /* istanbul ignore if */
              if (!head) throw illegal(token);
              parseImport();
              break;

            case "syntax":
              /* istanbul ignore if */
              if (!head) throw illegal(token);
              parseSyntax();
              break;

            case "option":
              /* istanbul ignore if */
              if (!head) throw illegal(token);
              parseOption(ptr, token);
              skip(";");
              break;

            default:
              /* istanbul ignore else */
              if (parseCommon(ptr, token)) {
                head = false;
                continue;
              }
              /* istanbul ignore next */


              throw illegal(token);
          }
        }

        parse.filename = null;
        return {
          "package": pkg,
          "imports": imports,
          weakImports: weakImports,
          syntax: syntax,
          root: root
        };
      }
      /**
       * Parses the given .proto source and returns an object with the parsed contents.
       * @name parse
       * @function
       * @param {string} source Source contents
       * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
       * @returns {IParserResult} Parser result
       * @property {string} filename=null Currently processing file name for error reporting, if known
       * @property {IParseOptions} defaults Default {@link IParseOptions}
       * @variation 2
       */

    }, {
      "15": 15,
      "16": 16,
      "20": 20,
      "22": 22,
      "25": 25,
      "29": 29,
      "33": 33,
      "34": 34,
      "35": 35,
      "36": 36,
      "37": 37
    }],
    27: [function (require, module, exports) {
      "use strict";

      module.exports = Reader;

      var util = require(39);

      var BufferReader; // cyclic

      var LongBits = util.LongBits,
          utf8 = util.utf8;
      /* istanbul ignore next */

      function indexOutOfRange(reader, writeLength) {
        return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
      }
      /**
       * Constructs a new reader instance using the specified buffer.
       * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
       * @constructor
       * @param {Uint8Array} buffer Buffer to read from
       */


      function Reader(buffer) {
        /**
         * Read buffer.
         * @type {Uint8Array}
         */
        this.buf = buffer;
        /**
         * Read buffer position.
         * @type {number}
         */

        this.pos = 0;
        /**
         * Read buffer length.
         * @type {number}
         */

        this.len = buffer.length;
      }

      var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
        throw Error("illegal buffer");
      }
      /* istanbul ignore next */
      : function create_array(buffer) {
        if (Array.isArray(buffer)) return new Reader(buffer);
        throw Error("illegal buffer");
      };
      /**
       * Creates a new reader using the specified buffer.
       * @function
       * @param {Uint8Array|Buffer} buffer Buffer to read from
       * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
       * @throws {Error} If `buffer` is not a valid buffer
       */

      Reader.create = util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
          return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
          /* istanbul ignore next */
          : create_array(buffer);
        })(buffer);
      }
      /* istanbul ignore next */
      : create_array;
      Reader.prototype._slice = util.Array.prototype.subarray ||
      /* istanbul ignore next */
      util.Array.prototype.slice;
      /**
       * Reads a varint as an unsigned 32 bit value.
       * @function
       * @returns {number} Value read
       */

      Reader.prototype.uint32 = function read_uint32_setup() {
        var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)

        return function read_uint32() {
          value = (this.buf[this.pos] & 127) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
          if (this.buf[this.pos++] < 128) return value;
          /* istanbul ignore if */

          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
          }

          return value;
        };
      }();
      /**
       * Reads a varint as a signed 32 bit value.
       * @returns {number} Value read
       */


      Reader.prototype.int32 = function read_int32() {
        return this.uint32() | 0;
      };
      /**
       * Reads a zig-zag encoded varint as a signed 32 bit value.
       * @returns {number} Value read
       */


      Reader.prototype.sint32 = function read_sint32() {
        var value = this.uint32();
        return value >>> 1 ^ -(value & 1) | 0;
      };
      /* eslint-disable no-invalid-this */


      function readLongVarint() {
        // tends to deopt with local vars for octet etc.
        var bits = new LongBits(0, 0);
        var i = 0;

        if (this.len - this.pos > 4) {
          // fast route (lo)
          for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
          } // 5th


          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
          if (this.buf[this.pos++] < 128) return bits;
          i = 0;
        } else {
          for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
          } // 4th


          bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
          return bits;
        }

        if (this.len - this.pos > 4) {
          // fast route (hi)
          for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
          }
        } else {
          for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128) return bits;
          }
        }
        /* istanbul ignore next */


        throw Error("invalid varint encoding");
      }
      /* eslint-enable no-invalid-this */

      /**
       * Reads a varint as a signed 64 bit value.
       * @name Reader#int64
       * @function
       * @returns {Long} Value read
       */

      /**
       * Reads a varint as an unsigned 64 bit value.
       * @name Reader#uint64
       * @function
       * @returns {Long} Value read
       */

      /**
       * Reads a zig-zag encoded varint as a signed 64 bit value.
       * @name Reader#sint64
       * @function
       * @returns {Long} Value read
       */

      /**
       * Reads a varint as a boolean.
       * @returns {boolean} Value read
       */


      Reader.prototype.bool = function read_bool() {
        return this.uint32() !== 0;
      };

      function readFixed32_end(buf, end) {
        // note that this uses `end`, not `pos`
        return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
      }
      /**
       * Reads fixed 32 bits as an unsigned 32 bit integer.
       * @returns {number} Value read
       */


      Reader.prototype.fixed32 = function read_fixed32() {
        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4);
      };
      /**
       * Reads fixed 32 bits as a signed 32 bit integer.
       * @returns {number} Value read
       */


      Reader.prototype.sfixed32 = function read_sfixed32() {
        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4) | 0;
      };
      /* eslint-disable no-invalid-this */


      function readFixed64()
      /* this: Reader */
      {
        /* istanbul ignore if */
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
        return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
      }
      /* eslint-enable no-invalid-this */

      /**
       * Reads fixed 64 bits.
       * @name Reader#fixed64
       * @function
       * @returns {Long} Value read
       */

      /**
       * Reads zig-zag encoded fixed 64 bits.
       * @name Reader#sfixed64
       * @function
       * @returns {Long} Value read
       */

      /**
       * Reads a float (32 bit) as a number.
       * @function
       * @returns {number} Value read
       */


      Reader.prototype["float"] = function read_float() {
        /* istanbul ignore if */
        if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
        var value = util["float"].readFloatLE(this.buf, this.pos);
        this.pos += 4;
        return value;
      };
      /**
       * Reads a double (64 bit float) as a number.
       * @function
       * @returns {number} Value read
       */


      Reader.prototype["double"] = function read_double() {
        /* istanbul ignore if */
        if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
        var value = util["float"].readDoubleLE(this.buf, this.pos);
        this.pos += 8;
        return value;
      };
      /**
       * Reads a sequence of bytes preceeded by its length as a varint.
       * @returns {Uint8Array} Value read
       */


      Reader.prototype.bytes = function read_bytes() {
        var length = this.uint32(),
            start = this.pos,
            end = this.pos + length;
        /* istanbul ignore if */

        if (end > this.len) throw indexOutOfRange(this, length);
        this.pos += length;
        if (Array.isArray(this.buf)) // plain array
          return this.buf.slice(start, end);
        return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
      };
      /**
       * Reads a string preceeded by its byte length as a varint.
       * @returns {string} Value read
       */


      Reader.prototype.string = function read_string() {
        var bytes = this.bytes();
        return utf8.read(bytes, 0, bytes.length);
      };
      /**
       * Skips the specified number of bytes if specified, otherwise skips a varint.
       * @param {number} [length] Length if known, otherwise a varint is assumed
       * @returns {Reader} `this`
       */


      Reader.prototype.skip = function skip(length) {
        if (typeof length === "number") {
          /* istanbul ignore if */
          if (this.pos + length > this.len) throw indexOutOfRange(this, length);
          this.pos += length;
        } else {
          do {
            /* istanbul ignore if */
            if (this.pos >= this.len) throw indexOutOfRange(this);
          } while (this.buf[this.pos++] & 128);
        }

        return this;
      };
      /**
       * Skips the next element of the specified wire type.
       * @param {number} wireType Wire type received
       * @returns {Reader} `this`
       */


      Reader.prototype.skipType = function (wireType) {
        switch (wireType) {
          case 0:
            this.skip();
            break;

          case 1:
            this.skip(8);
            break;

          case 2:
            this.skip(this.uint32());
            break;

          case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
              this.skipType(wireType);
            }

            break;

          case 5:
            this.skip(4);
            break;

          /* istanbul ignore next */

          default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
        }

        return this;
      };

      Reader._configure = function (BufferReader_) {
        BufferReader = BufferReader_;
        var fn = util.Long ? "toLong" :
        /* istanbul ignore next */
        "toNumber";
        util.merge(Reader.prototype, {
          int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
          },
          uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
          },
          sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
          },
          fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
          },
          sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
          }
        });
      };
    }, {
      "39": 39
    }],
    28: [function (require, module, exports) {
      "use strict";

      module.exports = BufferReader; // extends Reader

      var Reader = require(27);

      (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

      var util = require(39);
      /**
       * Constructs a new buffer reader instance.
       * @classdesc Wire format reader using node buffers.
       * @extends Reader
       * @constructor
       * @param {Buffer} buffer Buffer to read from
       */


      function BufferReader(buffer) {
        Reader.call(this, buffer);
        /**
         * Read buffer.
         * @name BufferReader#buf
         * @type {Buffer}
         */
      }
      /* istanbul ignore else */


      if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
      /**
       * @override
       */

      BufferReader.prototype.string = function read_string_buffer() {
        var len = this.uint32(); // modifies pos

        return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
      };
      /**
       * Reads a sequence of bytes preceeded by its length as a varint.
       * @name BufferReader#bytes
       * @function
       * @returns {Buffer} Value read
       */

    }, {
      "27": 27,
      "39": 39
    }],
    29: [function (require, module, exports) {
      "use strict";

      module.exports = Root; // extends Namespace

      var Namespace = require(23);

      ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

      var Field = require(16),
          Enum = require(15),
          OneOf = require(25),
          util = require(37);

      var Type, // cyclic
      parse, // might be excluded
      common; // "

      /**
       * Constructs a new root namespace instance.
       * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
       * @extends NamespaceBase
       * @constructor
       * @param {Object.<string,*>} [options] Top level options
       */

      function Root(options) {
        Namespace.call(this, "", options);
        /**
         * Deferred extension fields.
         * @type {Field[]}
         */

        this.deferred = [];
        /**
         * Resolved file names of loaded files.
         * @type {string[]}
         */

        this.files = [];
      }
      /**
       * Loads a namespace descriptor into a root namespace.
       * @param {INamespace} json Nameespace descriptor
       * @param {Root} [root] Root namespace, defaults to create a new one if omitted
       * @returns {Root} Root namespace
       */


      Root.fromJSON = function fromJSON(json, root) {
        if (!root) root = new Root();
        if (json.options) root.setOptions(json.options);
        return root.addJSON(json.nested);
      };
      /**
       * Resolves the path of an imported file, relative to the importing origin.
       * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
       * @function
       * @param {string} origin The file name of the importing file
       * @param {string} target The file name being imported
       * @returns {string|null} Resolved path to `target` or `null` to skip the file
       */


      Root.prototype.resolvePath = util.path.resolve; // A symbol-like function to safely signal synchronous loading

      /* istanbul ignore next */

      function SYNC() {} // eslint-disable-line no-empty-function

      /**
       * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
       * @param {string|string[]} filename Names of one or multiple files to load
       * @param {IParseOptions} options Parse options
       * @param {LoadCallback} callback Callback function
       * @returns {undefined}
       */


      Root.prototype.load = function load(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = undefined;
        }

        var self = this;
        if (!callback) return util.asPromise(load, self, filename, options);
        var sync = callback === SYNC; // undocumented
        // Finishes loading by calling the callback (exactly once)

        function finish(err, root) {
          /* istanbul ignore if */
          if (!callback) return;
          var cb = callback;
          callback = null;
          if (sync) throw err;
          cb(err, root);
        } // Processes a single file


        function process(filename, source) {
          try {
            if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
            if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
              parse.filename = filename;
              var parsed = parse(source, self, options),
                  resolved,
                  i = 0;
              if (parsed.imports) for (; i < parsed.imports.length; ++i) {
                if (resolved = self.resolvePath(filename, parsed.imports[i])) fetch(resolved);
              }
              if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) {
                if (resolved = self.resolvePath(filename, parsed.weakImports[i])) fetch(resolved, true);
              }
            }
          } catch (err) {
            finish(err);
          }

          if (!sync && !queued) finish(null, self); // only once anyway
        } // Fetches a single file


        function fetch(filename, weak) {
          // Strip path if this file references a bundled definition
          var idx = filename.lastIndexOf("google/protobuf/");

          if (idx > -1) {
            var altname = filename.substring(idx);
            if (altname in common) filename = altname;
          } // Skip if already loaded / attempted


          if (self.files.indexOf(filename) > -1) return;
          self.files.push(filename); // Shortcut bundled definitions

          if (filename in common) {
            if (sync) process(filename, common[filename]);else {
              ++queued;
              setTimeout(function () {
                --queued;
                process(filename, common[filename]);
              });
            }
            return;
          } // Otherwise fetch from disk or network


          if (sync) {
            var source;

            try {
              source = util.fs.readFileSync(filename).toString("utf8");
            } catch (err) {
              if (!weak) finish(err);
              return;
            }

            process(filename, source);
          } else {
            ++queued;
            util.fetch(filename, function (err, source) {
              --queued;
              /* istanbul ignore if */

              if (!callback) return; // terminated meanwhile

              if (err) {
                /* istanbul ignore else */
                if (!weak) finish(err);else if (!queued) // can't be covered reliably
                  finish(null, self);
                return;
              }

              process(filename, source);
            });
          }
        }

        var queued = 0; // Assembling the root namespace doesn't require working type
        // references anymore, so we can load everything in parallel

        if (util.isString(filename)) filename = [filename];

        for (var i = 0, resolved; i < filename.length; ++i) {
          if (resolved = self.resolvePath("", filename[i])) fetch(resolved);
        }

        if (sync) return self;
        if (!queued) finish(null, self);
        return undefined;
      }; // function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

      /**
       * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
       * @function Root#load
       * @param {string|string[]} filename Names of one or multiple files to load
       * @param {LoadCallback} callback Callback function
       * @returns {undefined}
       * @variation 2
       */
      // function load(filename:string, callback:LoadCallback):undefined

      /**
       * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
       * @function Root#load
       * @param {string|string[]} filename Names of one or multiple files to load
       * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
       * @returns {Promise<Root>} Promise
       * @variation 3
       */
      // function load(filename:string, [options:IParseOptions]):Promise<Root>

      /**
       * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
       * @function Root#loadSync
       * @param {string|string[]} filename Names of one or multiple files to load
       * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
       * @returns {Root} Root namespace
       * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
       */


      Root.prototype.loadSync = function loadSync(filename, options) {
        if (!util.isNode) throw Error("not supported");
        return this.load(filename, options, SYNC);
      };
      /**
       * @override
       */


      Root.prototype.resolveAll = function resolveAll() {
        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
        return Namespace.prototype.resolveAll.call(this);
      }; // only uppercased (and thus conflict-free) children are exposed, see below


      var exposeRe = /^[A-Z]/;
      /**
       * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
       * @param {Root} root Root instance
       * @param {Field} field Declaring extension field witin the declaring type
       * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
       * @inner
       * @ignore
       */

      function tryHandleExtension(root, field) {
        var extendedType = field.parent.lookup(field.extend);

        if (extendedType) {
          var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
          sisterField.declaringField = field;
          field.extensionField = sisterField;
          extendedType.add(sisterField);
          return true;
        }

        return false;
      }
      /**
       * Called when any object is added to this root or its sub-namespaces.
       * @param {ReflectionObject} object Object added
       * @returns {undefined}
       * @private
       */


      Root.prototype._handleAdd = function _handleAdd(object) {
        if (object instanceof Field) {
          if (
          /* an extension field (implies not part of a oneof) */
          object.extend !== undefined &&
          /* not already handled */
          !object.extensionField) if (!tryHandleExtension(this, object)) this.deferred.push(object);
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
        } else if (!(object instanceof OneOf))
          /* everything else is a namespace */
          {
            if (object instanceof Type) // Try to handle any deferred extensions
              for (var i = 0; i < this.deferred.length;) {
                if (tryHandleExtension(this, this.deferred[i])) this.deferred.splice(i, 1);else ++i;
              }

            for (var j = 0; j <
            /* initializes */
            object.nestedArray.length; ++j) {
              // recurse into the namespace
              this._handleAdd(object._nestedArray[j]);
            }

            if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
          } // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
        // properties of namespaces just like static code does. This allows using a .d.ts generated for
        // a static module with reflection-based solutions where the condition is met.

      };
      /**
       * Called when any object is removed from this root or its sub-namespaces.
       * @param {ReflectionObject} object Object removed
       * @returns {undefined}
       * @private
       */


      Root.prototype._handleRemove = function _handleRemove(object) {
        if (object instanceof Field) {
          if (
          /* an extension field */
          object.extend !== undefined) {
            if (
            /* already handled */
            object.extensionField) {
              // remove its sister field
              object.extensionField.parent.remove(object.extensionField);
              object.extensionField = null;
            } else {
              // cancel the extension
              var index = this.deferred.indexOf(object);
              /* istanbul ignore else */

              if (index > -1) this.deferred.splice(index, 1);
            }
          }
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
        } else if (object instanceof Namespace) {
          for (var i = 0; i <
          /* initializes */
          object.nestedArray.length; ++i) {
            // recurse into the namespace
            this._handleRemove(object._nestedArray[i]);
          }

          if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
        }
      }; // Sets up cyclic dependencies (called in index-light)


      Root._configure = function (Type_, parse_, common_) {
        Type = Type_;
        parse = parse_;
        common = common_;
      };
    }, {
      "15": 15,
      "16": 16,
      "23": 23,
      "25": 25,
      "37": 37
    }],
    30: [function (require, module, exports) {
      "use strict";

      module.exports = {};
      /**
       * Named roots.
       * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
       * Can also be used manually to make roots available accross modules.
       * @name roots
       * @type {Object.<string,Root>}
       * @example
       * // pbjs -r myroot -o compiled.js ...
       *
       * // in another module:
       * require("./compiled.js");
       *
       * // in any subsequent module:
       * var root = protobuf.roots["myroot"];
       */
    }, {}],
    31: [function (require, module, exports) {
      "use strict";
      /**
       * Streaming RPC helpers.
       * @namespace
       */

      var rpc = exports;
      /**
       * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
       * @typedef RPCImpl
       * @type {function}
       * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
       * @param {Uint8Array} requestData Request data
       * @param {RPCImplCallback} callback Callback function
       * @returns {undefined}
       * @example
       * function rpcImpl(method, requestData, callback) {
       *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
       *         throw Error("no such method");
       *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
       *         callback(err, responseData);
       *     });
       * }
       */

      /**
       * Node-style callback as used by {@link RPCImpl}.
       * @typedef RPCImplCallback
       * @type {function}
       * @param {Error|null} error Error, if any, otherwise `null`
       * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
       * @returns {undefined}
       */

      rpc.Service = require(32);
    }, {
      "32": 32
    }],
    32: [function (require, module, exports) {
      "use strict";

      module.exports = Service;

      var util = require(39); // Extends EventEmitter


      (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
      /**
       * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
       *
       * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
       * @typedef rpc.ServiceMethodCallback
       * @template TRes extends Message<TRes>
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {TRes} [response] Response message
       * @returns {undefined}
       */

      /**
       * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
       * @typedef rpc.ServiceMethod
       * @template TReq extends Message<TReq>
       * @template TRes extends Message<TRes>
       * @type {function}
       * @param {TReq|Properties<TReq>} request Request message or plain object
       * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
       * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
       */

      /**
       * Constructs a new RPC service instance.
       * @classdesc An RPC service as returned by {@link Service#create}.
       * @exports rpc.Service
       * @extends util.EventEmitter
       * @constructor
       * @param {RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */

      function Service(rpcImpl, requestDelimited, responseDelimited) {
        if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
        util.EventEmitter.call(this);
        /**
         * RPC implementation. Becomes `null` once the service is ended.
         * @type {RPCImpl|null}
         */

        this.rpcImpl = rpcImpl;
        /**
         * Whether requests are length-delimited.
         * @type {boolean}
         */

        this.requestDelimited = Boolean(requestDelimited);
        /**
         * Whether responses are length-delimited.
         * @type {boolean}
         */

        this.responseDelimited = Boolean(responseDelimited);
      }
      /**
       * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
       * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
       * @param {Constructor<TReq>} requestCtor Request constructor
       * @param {Constructor<TRes>} responseCtor Response constructor
       * @param {TReq|Properties<TReq>} request Request message or plain object
       * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
       * @returns {undefined}
       * @template TReq extends Message<TReq>
       * @template TRes extends Message<TRes>
       */


      Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
        if (!request) throw TypeError("request must be specified");
        var self = this;
        if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

        if (!self.rpcImpl) {
          setTimeout(function () {
            callback(Error("already ended"));
          }, 0);
          return undefined;
        }

        try {
          return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
            if (err) {
              self.emit("error", err, method);
              return callback(err);
            }

            if (response === null) {
              self.end(
              /* endedByRPC */
              true);
              return undefined;
            }

            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err) {
                self.emit("error", err, method);
                return callback(err);
              }
            }

            self.emit("data", response, method);
            return callback(null, response);
          });
        } catch (err) {
          self.emit("error", err, method);
          setTimeout(function () {
            callback(err);
          }, 0);
          return undefined;
        }
      };
      /**
       * Ends this service and emits the `end` event.
       * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
       * @returns {rpc.Service} `this`
       */


      Service.prototype.end = function end(endedByRPC) {
        if (this.rpcImpl) {
          if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
          this.rpcImpl = null;
          this.emit("end").off();
        }

        return this;
      };
    }, {
      "39": 39
    }],
    33: [function (require, module, exports) {
      "use strict";

      module.exports = Service; // extends Namespace

      var Namespace = require(23);

      ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

      var Method = require(22),
          util = require(37),
          rpc = require(31);
      /**
       * Constructs a new service instance.
       * @classdesc Reflected service.
       * @extends NamespaceBase
       * @constructor
       * @param {string} name Service name
       * @param {Object.<string,*>} [options] Service options
       * @throws {TypeError} If arguments are invalid
       */


      function Service(name, options) {
        Namespace.call(this, name, options);
        /**
         * Service methods.
         * @type {Object.<string,Method>}
         */

        this.methods = {}; // toJSON, marker

        /**
         * Cached methods as an array.
         * @type {Method[]|null}
         * @private
         */

        this._methodsArray = null;
      }
      /**
       * Service descriptor.
       * @interface IService
       * @extends INamespace
       * @property {Object.<string,IMethod>} methods Method descriptors
       */

      /**
       * Constructs a service from a service descriptor.
       * @param {string} name Service name
       * @param {IService} json Service descriptor
       * @returns {Service} Created service
       * @throws {TypeError} If arguments are invalid
       */


      Service.fromJSON = function fromJSON(name, json) {
        var service = new Service(name, json.options);
        /* istanbul ignore else */

        if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) {
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
        }
        if (json.nested) service.addJSON(json.nested);
        service.comment = json.comment;
        return service;
      };
      /**
       * Converts this service to a service descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IService} Service descriptor
       */


      Service.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) ||
        /* istanbul ignore next */
        {}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * Methods of this service as an array for iteration.
       * @name Service#methodsArray
       * @type {Method[]}
       * @readonly
       */


      Object.defineProperty(Service.prototype, "methodsArray", {
        get: function get() {
          return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
        }
      });

      function clearCache(service) {
        service._methodsArray = null;
        return service;
      }
      /**
       * @override
       */


      Service.prototype.get = function get(name) {
        return this.methods[name] || Namespace.prototype.get.call(this, name);
      };
      /**
       * @override
       */


      Service.prototype.resolveAll = function resolveAll() {
        var methods = this.methodsArray;

        for (var i = 0; i < methods.length; ++i) {
          methods[i].resolve();
        }

        return Namespace.prototype.resolve.call(this);
      };
      /**
       * @override
       */


      Service.prototype.add = function add(object) {
        /* istanbul ignore if */
        if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

        if (object instanceof Method) {
          this.methods[object.name] = object;
          object.parent = this;
          return clearCache(this);
        }

        return Namespace.prototype.add.call(this, object);
      };
      /**
       * @override
       */


      Service.prototype.remove = function remove(object) {
        if (object instanceof Method) {
          /* istanbul ignore if */
          if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
          delete this.methods[object.name];
          object.parent = null;
          return clearCache(this);
        }

        return Namespace.prototype.remove.call(this, object);
      };
      /**
       * Creates a runtime service using the specified rpc implementation.
       * @param {RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
       */


      Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);

        for (var i = 0, method; i <
        /* initializes */
        this.methodsArray.length; ++i) {
          var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
          rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
          });
        }

        return rpcService;
      };
    }, {
      "22": 22,
      "23": 23,
      "31": 31,
      "37": 37
    }],
    34: [function (require, module, exports) {
      "use strict";

      module.exports = tokenize;
      var delimRe = /[\s{}=;:[\],'"()<>]/g,
          stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
          stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
      var setCommentRe = /^ *[*/]+ */,
          setCommentAltRe = /^\s*\*?\/*/,
          setCommentSplitRe = /\n/g,
          whitespaceRe = /\s/,
          unescapeRe = /\\(.?)/g;
      var unescapeMap = {
        "0": "\0",
        "r": "\r",
        "n": "\n",
        "t": "\t"
      };
      /**
       * Unescapes a string.
       * @param {string} str String to unescape
       * @returns {string} Unescaped string
       * @property {Object.<string,string>} map Special characters map
       * @memberof tokenize
       */

      function unescape(str) {
        return str.replace(unescapeRe, function ($0, $1) {
          switch ($1) {
            case "\\":
            case "":
              return $1;

            default:
              return unescapeMap[$1] || "";
          }
        });
      }

      tokenize.unescape = unescape;
      /**
       * Gets the next token and advances.
       * @typedef TokenizerHandleNext
       * @type {function}
       * @returns {string|null} Next token or `null` on eof
       */

      /**
       * Peeks for the next token.
       * @typedef TokenizerHandlePeek
       * @type {function}
       * @returns {string|null} Next token or `null` on eof
       */

      /**
       * Pushes a token back to the stack.
       * @typedef TokenizerHandlePush
       * @type {function}
       * @param {string} token Token
       * @returns {undefined}
       */

      /**
       * Skips the next token.
       * @typedef TokenizerHandleSkip
       * @type {function}
       * @param {string} expected Expected token
       * @param {boolean} [optional=false] If optional
       * @returns {boolean} Whether the token matched
       * @throws {Error} If the token didn't match and is not optional
       */

      /**
       * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
       * @typedef TokenizerHandleCmnt
       * @type {function}
       * @param {number} [line] Line number
       * @returns {string|null} Comment text or `null` if none
       */

      /**
       * Handle object returned from {@link tokenize}.
       * @interface ITokenizerHandle
       * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
       * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
       * @property {TokenizerHandlePush} push Pushes a token back to the stack
       * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
       * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
       * @property {number} line Current line number
       */

      /**
       * Tokenizes the given .proto source and returns an object with useful utility functions.
       * @param {string} source Source contents
       * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
       * @returns {ITokenizerHandle} Tokenizer handle
       */

      function tokenize(source, alternateCommentMode) {
        /* eslint-disable callback-return */
        source = source.toString();
        var offset = 0,
            length = source.length,
            line = 1,
            commentType = null,
            commentText = null,
            commentLine = 0,
            commentLineEmpty = false;
        var stack = [];
        var stringDelim = null;
        /* istanbul ignore next */

        /**
         * Creates an error for illegal syntax.
         * @param {string} subject Subject
         * @returns {Error} Error created
         * @inner
         */

        function illegal(subject) {
          return Error("illegal " + subject + " (line " + line + ")");
        }
        /**
         * Reads a string till its end.
         * @returns {string} String read
         * @inner
         */


        function readString() {
          var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
          re.lastIndex = offset - 1;
          var match = re.exec(source);
          if (!match) throw illegal("string");
          offset = re.lastIndex;
          push(stringDelim);
          stringDelim = null;
          return unescape(match[1]);
        }
        /**
         * Gets the character at `pos` within the source.
         * @param {number} pos Position
         * @returns {string} Character
         * @inner
         */


        function charAt(pos) {
          return source.charAt(pos);
        }
        /**
         * Sets the current comment text.
         * @param {number} start Start offset
         * @param {number} end End offset
         * @returns {undefined}
         * @inner
         */


        function setComment(start, end) {
          commentType = source.charAt(start++);
          commentLine = line;
          commentLineEmpty = false;
          var lookback;

          if (alternateCommentMode) {
            lookback = 2; // alternate comment parsing: "//" or "/*"
          } else {
            lookback = 3; // "///" or "/**"
          }

          var commentOffset = start - lookback,
              c;

          do {
            if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
              commentLineEmpty = true;
              break;
            }
          } while (c === " " || c === "\t");

          var lines = source.substring(start, end).split(setCommentSplitRe);

          for (var i = 0; i < lines.length; ++i) {
            lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
          }

          commentText = lines.join("\n").trim();
        }

        function isDoubleSlashCommentLine(startOffset) {
          var endOffset = findEndOfLine(startOffset); // see if remaining line matches comment pattern

          var lineText = source.substring(startOffset, endOffset); // look for 1 or 2 slashes since startOffset would already point past
          // the first slash that started the comment.

          var isComment = /^\s*\/{1,2}/.test(lineText);
          return isComment;
        }

        function findEndOfLine(cursor) {
          // find end of cursor's line
          var endOffset = cursor;

          while (endOffset < length && charAt(endOffset) !== "\n") {
            endOffset++;
          }

          return endOffset;
        }
        /**
         * Obtains the next token.
         * @returns {string|null} Next token or `null` on eof
         * @inner
         */


        function next() {
          if (stack.length > 0) return stack.shift();
          if (stringDelim) return readString();
          var repeat, prev, curr, start, isDoc;

          do {
            if (offset === length) return null;
            repeat = false;

            while (whitespaceRe.test(curr = charAt(offset))) {
              if (curr === "\n") ++line;
              if (++offset === length) return null;
            }

            if (charAt(offset) === "/") {
              if (++offset === length) {
                throw illegal("comment");
              }

              if (charAt(offset) === "/") {
                // Line
                if (!alternateCommentMode) {
                  // check for triple-slash comment
                  isDoc = charAt(start = offset + 1) === "/";

                  while (charAt(++offset) !== "\n") {
                    if (offset === length) {
                      return null;
                    }
                  }

                  ++offset;

                  if (isDoc) {
                    setComment(start, offset - 1);
                  }

                  ++line;
                  repeat = true;
                } else {
                  // check for double-slash comments, consolidating consecutive lines
                  start = offset;
                  isDoc = false;

                  if (isDoubleSlashCommentLine(offset)) {
                    isDoc = true;

                    do {
                      offset = findEndOfLine(offset);

                      if (offset === length) {
                        break;
                      }

                      offset++;
                    } while (isDoubleSlashCommentLine(offset));
                  } else {
                    offset = Math.min(length, findEndOfLine(offset) + 1);
                  }

                  if (isDoc) {
                    setComment(start, offset);
                  }

                  line++;
                  repeat = true;
                }
              } else if ((curr = charAt(offset)) === "*") {
                /* Block */
                // check for /** (regular comment mode) or /* (alternate comment mode)
                start = offset + 1;
                isDoc = alternateCommentMode || charAt(start) === "*";

                do {
                  if (curr === "\n") {
                    ++line;
                  }

                  if (++offset === length) {
                    throw illegal("comment");
                  }

                  prev = curr;
                  curr = charAt(offset);
                } while (prev !== "*" || curr !== "/");

                ++offset;

                if (isDoc) {
                  setComment(start, offset - 2);
                }

                repeat = true;
              } else {
                return "/";
              }
            }
          } while (repeat); // offset !== length if we got here


          var end = offset;
          delimRe.lastIndex = 0;
          var delim = delimRe.test(charAt(end++));
          if (!delim) while (end < length && !delimRe.test(charAt(end))) {
            ++end;
          }
          var token = source.substring(offset, offset = end);
          if (token === "\"" || token === "'") stringDelim = token;
          return token;
        }
        /**
         * Pushes a token back to the stack.
         * @param {string} token Token
         * @returns {undefined}
         * @inner
         */


        function push(token) {
          stack.push(token);
        }
        /**
         * Peeks for the next token.
         * @returns {string|null} Token or `null` on eof
         * @inner
         */


        function peek() {
          if (!stack.length) {
            var token = next();
            if (token === null) return null;
            push(token);
          }

          return stack[0];
        }
        /**
         * Skips a token.
         * @param {string} expected Expected token
         * @param {boolean} [optional=false] Whether the token is optional
         * @returns {boolean} `true` when skipped, `false` if not
         * @throws {Error} When a required token is not present
         * @inner
         */


        function skip(expected, optional) {
          var actual = peek(),
              equals = actual === expected;

          if (equals) {
            next();
            return true;
          }

          if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
          return false;
        }
        /**
         * Gets a comment.
         * @param {number} [trailingLine] Line number if looking for a trailing comment
         * @returns {string|null} Comment text
         * @inner
         */


        function cmnt(trailingLine) {
          var ret = null;

          if (trailingLine === undefined) {
            if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
              ret = commentText;
            }
          } else {
            /* istanbul ignore else */
            if (commentLine < trailingLine) {
              peek();
            }

            if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
              ret = commentText;
            }
          }

          return ret;
        }

        return Object.defineProperty({
          next: next,
          peek: peek,
          push: push,
          skip: skip,
          cmnt: cmnt
        }, "line", {
          get: function get() {
            return line;
          }
        });
        /* eslint-enable callback-return */
      }
    }, {}],
    35: [function (require, module, exports) {
      "use strict";

      module.exports = Type; // extends Namespace

      var Namespace = require(23);

      ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

      var Enum = require(15),
          OneOf = require(25),
          Field = require(16),
          MapField = require(20),
          Service = require(33),
          Message = require(21),
          Reader = require(27),
          Writer = require(42),
          util = require(37),
          encoder = require(14),
          decoder = require(13),
          verifier = require(40),
          converter = require(12),
          wrappers = require(41);
      /**
       * Constructs a new reflected message type instance.
       * @classdesc Reflected message type.
       * @extends NamespaceBase
       * @constructor
       * @param {string} name Message name
       * @param {Object.<string,*>} [options] Declared options
       */


      function Type(name, options) {
        Namespace.call(this, name, options);
        /**
         * Message fields.
         * @type {Object.<string,Field>}
         */

        this.fields = {}; // toJSON, marker

        /**
         * Oneofs declared within this namespace, if any.
         * @type {Object.<string,OneOf>}
         */

        this.oneofs = undefined; // toJSON

        /**
         * Extension ranges, if any.
         * @type {number[][]}
         */

        this.extensions = undefined; // toJSON

        /**
         * Reserved ranges, if any.
         * @type {Array.<number[]|string>}
         */

        this.reserved = undefined; // toJSON

        /*?
         * Whether this type is a legacy group.
         * @type {boolean|undefined}
         */

        this.group = undefined; // toJSON

        /**
         * Cached fields by id.
         * @type {Object.<number,Field>|null}
         * @private
         */

        this._fieldsById = null;
        /**
         * Cached fields as an array.
         * @type {Field[]|null}
         * @private
         */

        this._fieldsArray = null;
        /**
         * Cached oneofs as an array.
         * @type {OneOf[]|null}
         * @private
         */

        this._oneofsArray = null;
        /**
         * Cached constructor.
         * @type {Constructor<{}>}
         * @private
         */

        this._ctor = null;
      }

      Object.defineProperties(Type.prototype, {
        /**
         * Message fields by id.
         * @name Type#fieldsById
         * @type {Object.<number,Field>}
         * @readonly
         */
        fieldsById: {
          get: function get() {
            /* istanbul ignore if */
            if (this._fieldsById) return this._fieldsById;
            this._fieldsById = {};

            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
              var field = this.fields[names[i]],
                  id = field.id;
              /* istanbul ignore if */

              if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
              this._fieldsById[id] = field;
            }

            return this._fieldsById;
          }
        },

        /**
         * Fields of this message as an array for iteration.
         * @name Type#fieldsArray
         * @type {Field[]}
         * @readonly
         */
        fieldsArray: {
          get: function get() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
          }
        },

        /**
         * Oneofs of this message as an array for iteration.
         * @name Type#oneofsArray
         * @type {OneOf[]}
         * @readonly
         */
        oneofsArray: {
          get: function get() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
          }
        },

        /**
         * The registered constructor, if any registered, otherwise a generic constructor.
         * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
         * @name Type#ctor
         * @type {Constructor<{}>}
         */
        ctor: {
          get: function get() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
          },
          set: function set(ctor) {
            // Ensure proper prototype
            var prototype = ctor.prototype;

            if (!(prototype instanceof Message)) {
              (ctor.prototype = new Message()).constructor = ctor;
              util.merge(ctor.prototype, prototype);
            } // Classes and messages reference their reflected type


            ctor.$type = ctor.prototype.$type = this; // Mix in static methods

            util.merge(ctor, Message, true);
            this._ctor = ctor; // Messages have non-enumerable default values on their prototype

            var i = 0;

            for (; i <
            /* initializes */
            this.fieldsArray.length; ++i) {
              this._fieldsArray[i].resolve();
            } // ensures a proper value
            // Messages have non-enumerable getters and setters for each virtual oneof field


            var ctorProperties = {};

            for (i = 0; i <
            /* initializes */
            this.oneofsArray.length; ++i) {
              ctorProperties[this._oneofsArray[i].resolve().name] = {
                get: util.oneOfGetter(this._oneofsArray[i].oneof),
                set: util.oneOfSetter(this._oneofsArray[i].oneof)
              };
            }

            if (i) Object.defineProperties(ctor.prototype, ctorProperties);
          }
        }
      });
      /**
       * Generates a constructor function for the specified type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */

      Type.generateConstructor = function generateConstructor(mtype) {
        /* eslint-disable no-unexpected-multiline */
        var gen = util.codegen(["p"], mtype.name); // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype

        for (var i = 0, field; i < mtype.fieldsArray.length; ++i) {
          if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
        }

        return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
        ("this[ks[i]]=p[ks[i]]");
        /* eslint-enable no-unexpected-multiline */
      };

      function clearCache(type) {
        type._fieldsById = type._fieldsArray = type._oneofsArray = null;
        delete type.encode;
        delete type.decode;
        delete type.verify;
        return type;
      }
      /**
       * Message type descriptor.
       * @interface IType
       * @extends INamespace
       * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
       * @property {Object.<string,IField>} fields Field descriptors
       * @property {number[][]} [extensions] Extension ranges
       * @property {number[][]} [reserved] Reserved ranges
       * @property {boolean} [group=false] Whether a legacy group or not
       */

      /**
       * Creates a message type from a message type descriptor.
       * @param {string} name Message name
       * @param {IType} json Message type descriptor
       * @returns {Type} Created message type
       */


      Type.fromJSON = function fromJSON(name, json) {
        var type = new Type(name, json.options);
        type.extensions = json.extensions;
        type.reserved = json.reserved;
        var names = Object.keys(json.fields),
            i = 0;

        for (; i < names.length; ++i) {
          type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
        }

        if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) {
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
        }
        if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add( // most to least likely
          (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
        }
        if (json.extensions && json.extensions.length) type.extensions = json.extensions;
        if (json.reserved && json.reserved.length) type.reserved = json.reserved;
        if (json.group) type.group = true;
        if (json.comment) type.comment = json.comment;
        return type;
      };
      /**
       * Converts this message type to a message type descriptor.
       * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
       * @returns {IType} Message type descriptor
       */


      Type.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject(["options", inherited && inherited.options || undefined, "oneofs", Namespace.arrayToJSON(this.oneofsArray, toJSONOptions), "fields", Namespace.arrayToJSON(this.fieldsArray.filter(function (obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
      };
      /**
       * @override
       */


      Type.prototype.resolveAll = function resolveAll() {
        var fields = this.fieldsArray,
            i = 0;

        while (i < fields.length) {
          fields[i++].resolve();
        }

        var oneofs = this.oneofsArray;
        i = 0;

        while (i < oneofs.length) {
          oneofs[i++].resolve();
        }

        return Namespace.prototype.resolveAll.call(this);
      };
      /**
       * @override
       */


      Type.prototype.get = function get(name) {
        return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
      };
      /**
       * Adds a nested object to this type.
       * @param {ReflectionObject} object Nested object to add
       * @returns {Type} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
       */


      Type.prototype.add = function add(object) {
        if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

        if (object instanceof Field && object.extend === undefined) {
          // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
          // The root object takes care of adding distinct sister-fields to the respective extended
          // type instead.
          // avoids calling the getter if not absolutely necessary because it's called quite frequently
          if (this._fieldsById ?
          /* istanbul ignore next */
          this._fieldsById[object.id] : this.fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
          if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
          if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
          if (object.parent) object.parent.remove(object);
          this.fields[object.name] = object;
          object.message = this;
          object.onAdd(this);
          return clearCache(this);
        }

        if (object instanceof OneOf) {
          if (!this.oneofs) this.oneofs = {};
          this.oneofs[object.name] = object;
          object.onAdd(this);
          return clearCache(this);
        }

        return Namespace.prototype.add.call(this, object);
      };
      /**
       * Removes a nested object from this type.
       * @param {ReflectionObject} object Nested object to remove
       * @returns {Type} `this`
       * @throws {TypeError} If arguments are invalid
       * @throws {Error} If `object` is not a member of this type
       */


      Type.prototype.remove = function remove(object) {
        if (object instanceof Field && object.extend === undefined) {
          // See Type#add for the reason why extension fields are excluded here.

          /* istanbul ignore if */
          if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
          delete this.fields[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }

        if (object instanceof OneOf) {
          /* istanbul ignore if */
          if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
          delete this.oneofs[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }

        return Namespace.prototype.remove.call(this, object);
      };
      /**
       * Tests if the specified id is reserved.
       * @param {number} id Id to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */


      Type.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      /**
       * Tests if the specified name is reserved.
       * @param {string} name Name to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */


      Type.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
      /**
       * Creates a new message of this type using the specified properties.
       * @param {Object.<string,*>} [properties] Properties to set
       * @returns {Message<{}>} Message instance
       */


      Type.prototype.create = function create(properties) {
        return new this.ctor(properties);
      };
      /**
       * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
       * @returns {Type} `this`
       */


      Type.prototype.setup = function setup() {
        // Sets up everything at once so that the prototype chain does not have to be re-evaluated
        // multiple times (V8, soft-deopt prototype-check).
        var fullName = this.fullName,
            types = [];

        for (var i = 0; i <
        /* initializes */
        this.fieldsArray.length; ++i) {
          types.push(this._fieldsArray[i].resolve().resolvedType);
        } // Replace setup methods with type-specific generated functions


        this.encode = encoder(this)({
          Writer: Writer,
          types: types,
          util: util
        });
        this.decode = decoder(this)({
          Reader: Reader,
          types: types,
          util: util
        });
        this.verify = verifier(this)({
          types: types,
          util: util
        });
        this.fromObject = converter.fromObject(this)({
          types: types,
          util: util
        });
        this.toObject = converter.toObject(this)({
          types: types,
          util: util
        }); // Inject custom wrappers for common types

        var wrapper = wrappers[fullName];

        if (wrapper) {
          var originalThis = Object.create(this); // if (wrapper.fromObject) {

          originalThis.fromObject = this.fromObject;
          this.fromObject = wrapper.fromObject.bind(originalThis); // }
          // if (wrapper.toObject) {

          originalThis.toObject = this.toObject;
          this.toObject = wrapper.toObject.bind(originalThis); // }
        }

        return this;
      };
      /**
       * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
       * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
       * @param {Writer} [writer] Writer to encode to
       * @returns {Writer} writer
       */


      Type.prototype.encode = function encode_setup(message, writer) {
        return this.setup().encode(message, writer); // overrides this method
      };
      /**
       * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
       * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
       * @param {Writer} [writer] Writer to encode to
       * @returns {Writer} writer
       */


      Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
      };
      /**
       * Decodes a message of this type.
       * @param {Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Length of the message, if known beforehand
       * @returns {Message<{}>} Decoded message
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {util.ProtocolError<{}>} If required fields are missing
       */


      Type.prototype.decode = function decode_setup(reader, length) {
        return this.setup().decode(reader, length); // overrides this method
      };
      /**
       * Decodes a message of this type preceeded by its byte length as a varint.
       * @param {Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {Message<{}>} Decoded message
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {util.ProtocolError} If required fields are missing
       */


      Type.prototype.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof Reader)) reader = Reader.create(reader);
        return this.decode(reader, reader.uint32());
      };
      /**
       * Verifies that field values are valid and that required fields are present.
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {null|string} `null` if valid, otherwise the reason why it is not
       */


      Type.prototype.verify = function verify_setup(message) {
        return this.setup().verify(message); // overrides this method
      };
      /**
       * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
       * @param {Object.<string,*>} object Plain object to convert
       * @returns {Message<{}>} Message instance
       */


      Type.prototype.fromObject = function fromObject(object) {
        return this.setup().fromObject(object);
      };
      /**
       * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
       * @interface IConversionOptions
       * @property {Function} [longs] Long conversion type.
       * Valid values are `String` and `Number` (the global types).
       * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
       * @property {Function} [enums] Enum value conversion type.
       * Only valid value is `String` (the global type).
       * Defaults to copy the present value, which is the numeric id.
       * @property {Function} [bytes] Bytes value conversion type.
       * Valid values are `Array` and (a base64 encoded) `String` (the global types).
       * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
       * @property {boolean} [defaults=false] Also sets default values on the resulting object
       * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
       * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
       * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
       * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
       */

      /**
       * Creates a plain object from a message of this type. Also converts values to other types if specified.
       * @param {Message<{}>} message Message instance
       * @param {IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */


      Type.prototype.toObject = function toObject(message, options) {
        return this.setup().toObject(message, options);
      };
      /**
       * Decorator function as returned by {@link Type.d} (TypeScript).
       * @typedef TypeDecorator
       * @type {function}
       * @param {Constructor<T>} target Target constructor
       * @returns {undefined}
       * @template T extends Message<T>
       */

      /**
       * Type decorator (TypeScript).
       * @param {string} [typeName] Type name, defaults to the constructor's name
       * @returns {TypeDecorator<T>} Decorator function
       * @template T extends Message<T>
       */


      Type.d = function decorateType(typeName) {
        return function typeDecorator(target) {
          util.decorateType(target, typeName);
        };
      };
    }, {
      "12": 12,
      "13": 13,
      "14": 14,
      "15": 15,
      "16": 16,
      "20": 20,
      "21": 21,
      "23": 23,
      "25": 25,
      "27": 27,
      "33": 33,
      "37": 37,
      "40": 40,
      "41": 41,
      "42": 42
    }],
    36: [function (require, module, exports) {
      "use strict";
      /**
       * Common type constants.
       * @namespace
       */

      var types = exports;

      var util = require(37);

      var s = ["double", // 0
      "float", // 1
      "int32", // 2
      "uint32", // 3
      "sint32", // 4
      "fixed32", // 5
      "sfixed32", // 6
      "int64", // 7
      "uint64", // 8
      "sint64", // 9
      "fixed64", // 10
      "sfixed64", // 11
      "bool", // 12
      "string", // 13
      "bytes" // 14
      ];

      function bake(values, offset) {
        var i = 0,
            o = {};
        offset |= 0;

        while (i < values.length) {
          o[s[i + offset]] = values[i++];
        }

        return o;
      }
      /**
       * Basic type wire types.
       * @type {Object.<string,number>}
       * @const
       * @property {number} double=1 Fixed64 wire type
       * @property {number} float=5 Fixed32 wire type
       * @property {number} int32=0 Varint wire type
       * @property {number} uint32=0 Varint wire type
       * @property {number} sint32=0 Varint wire type
       * @property {number} fixed32=5 Fixed32 wire type
       * @property {number} sfixed32=5 Fixed32 wire type
       * @property {number} int64=0 Varint wire type
       * @property {number} uint64=0 Varint wire type
       * @property {number} sint64=0 Varint wire type
       * @property {number} fixed64=1 Fixed64 wire type
       * @property {number} sfixed64=1 Fixed64 wire type
       * @property {number} bool=0 Varint wire type
       * @property {number} string=2 Ldelim wire type
       * @property {number} bytes=2 Ldelim wire type
       */


      types.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2]);
      /**
       * Basic type defaults.
       * @type {Object.<string,*>}
       * @const
       * @property {number} double=0 Double default
       * @property {number} float=0 Float default
       * @property {number} int32=0 Int32 default
       * @property {number} uint32=0 Uint32 default
       * @property {number} sint32=0 Sint32 default
       * @property {number} fixed32=0 Fixed32 default
       * @property {number} sfixed32=0 Sfixed32 default
       * @property {number} int64=0 Int64 default
       * @property {number} uint64=0 Uint64 default
       * @property {number} sint64=0 Sint32 default
       * @property {number} fixed64=0 Fixed64 default
       * @property {number} sfixed64=0 Sfixed64 default
       * @property {boolean} bool=false Bool default
       * @property {string} string="" String default
       * @property {Array.<number>} bytes=Array(0) Bytes default
       * @property {null} message=null Message default
       */

      types.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util.emptyArray,
      /* message  */
      null]);
      /**
       * Basic long type wire types.
       * @type {Object.<string,number>}
       * @const
       * @property {number} int64=0 Varint wire type
       * @property {number} uint64=0 Varint wire type
       * @property {number} sint64=0 Varint wire type
       * @property {number} fixed64=1 Fixed64 wire type
       * @property {number} sfixed64=1 Fixed64 wire type
       */

      types["long"] = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1], 7);
      /**
       * Allowed types for map keys with their associated wire type.
       * @type {Object.<string,number>}
       * @const
       * @property {number} int32=0 Varint wire type
       * @property {number} uint32=0 Varint wire type
       * @property {number} sint32=0 Varint wire type
       * @property {number} fixed32=5 Fixed32 wire type
       * @property {number} sfixed32=5 Fixed32 wire type
       * @property {number} int64=0 Varint wire type
       * @property {number} uint64=0 Varint wire type
       * @property {number} sint64=0 Varint wire type
       * @property {number} fixed64=1 Fixed64 wire type
       * @property {number} sfixed64=1 Fixed64 wire type
       * @property {number} bool=0 Varint wire type
       * @property {number} string=2 Ldelim wire type
       */

      types.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2], 2);
      /**
       * Allowed types for packed repeated fields with their associated wire type.
       * @type {Object.<string,number>}
       * @const
       * @property {number} double=1 Fixed64 wire type
       * @property {number} float=5 Fixed32 wire type
       * @property {number} int32=0 Varint wire type
       * @property {number} uint32=0 Varint wire type
       * @property {number} sint32=0 Varint wire type
       * @property {number} fixed32=5 Fixed32 wire type
       * @property {number} sfixed32=5 Fixed32 wire type
       * @property {number} int64=0 Varint wire type
       * @property {number} uint64=0 Varint wire type
       * @property {number} sint64=0 Varint wire type
       * @property {number} fixed64=1 Fixed64 wire type
       * @property {number} sfixed64=1 Fixed64 wire type
       * @property {number} bool=0 Varint wire type
       */

      types.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0]);
    }, {
      "37": 37
    }],
    37: [function (require, module, exports) {
      "use strict";
      /**
       * Various utility functions.
       * @namespace
       */

      var util = module.exports = require(39);

      var roots = require(30);

      var Type, // cyclic
      Enum;
      util.codegen = require(3);
      util.fetch = require(5);
      util.path = require(8);
      /**
       * Node's fs module if available.
       * @type {Object.<string,*>}
       */

      util.fs = util.inquire("fs");
      /**
       * Converts an object's values to an array.
       * @param {Object.<string,*>} object Object to convert
       * @returns {Array.<*>} Converted array
       */

      util.toArray = function toArray(object) {
        if (object) {
          var keys = Object.keys(object),
              array = new Array(keys.length),
              index = 0;

          while (index < keys.length) {
            array[index] = object[keys[index++]];
          }

          return array;
        }

        return [];
      };
      /**
       * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
       * @param {Array.<*>} array Array to convert
       * @returns {Object.<string,*>} Converted object
       */


      util.toObject = function toObject(array) {
        var object = {},
            index = 0;

        while (index < array.length) {
          var key = array[index++],
              val = array[index++];
          if (val !== undefined) object[key] = val;
        }

        return object;
      };

      var safePropBackslashRe = /\\/g,
          safePropQuoteRe = /"/g;
      /**
       * Tests whether the specified name is a reserved word in JS.
       * @param {string} name Name to test
       * @returns {boolean} `true` if reserved, otherwise `false`
       */

      util.isReserved = function isReserved(name) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
      };
      /**
       * Returns a safe property accessor for the specified property name.
       * @param {string} prop Property name
       * @returns {string} Safe accessor
       */


      util.safeProp = function safeProp(prop) {
        if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop)) return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
        return "." + prop;
      };
      /**
       * Converts the first character of a string to upper case.
       * @param {string} str String to convert
       * @returns {string} Converted string
       */


      util.ucFirst = function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      };

      var camelCaseRe = /_([a-z])/g;
      /**
       * Converts a string to camel case.
       * @param {string} str String to convert
       * @returns {string} Converted string
       */

      util.camelCase = function camelCase(str) {
        return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function ($0, $1) {
          return $1.toUpperCase();
        });
      };
      /**
       * Compares reflected fields by id.
       * @param {Field} a First field
       * @param {Field} b Second field
       * @returns {number} Comparison value
       */


      util.compareFieldsById = function compareFieldsById(a, b) {
        return a.id - b.id;
      };
      /**
       * Decorator helper for types (TypeScript).
       * @param {Constructor<T>} ctor Constructor function
       * @param {string} [typeName] Type name, defaults to the constructor's name
       * @returns {Type} Reflected type
       * @template T extends Message<T>
       * @property {Root} root Decorators root
       */


      util.decorateType = function decorateType(ctor, typeName) {
        /* istanbul ignore if */
        if (ctor.$type) {
          if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
          }

          return ctor.$type;
        }
        /* istanbul ignore next */


        if (!Type) Type = require(35);
        var type = new Type(typeName || ctor.name);
        util.decorateRoot.add(type);
        type.ctor = ctor; // sets up .encode, .decode etc.

        Object.defineProperty(ctor, "$type", {
          value: type,
          enumerable: false
        });
        Object.defineProperty(ctor.prototype, "$type", {
          value: type,
          enumerable: false
        });
        return type;
      };

      var decorateEnumIndex = 0;
      /**
       * Decorator helper for enums (TypeScript).
       * @param {Object} object Enum object
       * @returns {Enum} Reflected enum
       */

      util.decorateEnum = function decorateEnum(object) {
        /* istanbul ignore if */
        if (object.$type) return object.$type;
        /* istanbul ignore next */

        if (!Enum) Enum = require(15);
        var enm = new Enum("Enum" + decorateEnumIndex++, object);
        util.decorateRoot.add(enm);
        Object.defineProperty(object, "$type", {
          value: enm,
          enumerable: false
        });
        return enm;
      };
      /**
       * Decorator root (TypeScript).
       * @name util.decorateRoot
       * @type {Root}
       * @readonly
       */


      Object.defineProperty(util, "decorateRoot", {
        get: function get() {
          return roots["decorated"] || (roots["decorated"] = new (require(29))());
        }
      });
    }, {
      "15": 15,
      "29": 29,
      "3": 3,
      "30": 30,
      "35": 35,
      "39": 39,
      "5": 5,
      "8": 8
    }],
    38: [function (require, module, exports) {
      "use strict";

      module.exports = LongBits;

      var util = require(39);
      /**
       * Constructs new long bits.
       * @classdesc Helper class for working with the low and high bits of a 64 bit value.
       * @memberof util
       * @constructor
       * @param {number} lo Low 32 bits, unsigned
       * @param {number} hi High 32 bits, unsigned
       */


      function LongBits(lo, hi) {
        // note that the casts below are theoretically unnecessary as of today, but older statically
        // generated converter code might still call the ctor with signed 32bits. kept for compat.

        /**
         * Low bits.
         * @type {number}
         */
        this.lo = lo >>> 0;
        /**
         * High bits.
         * @type {number}
         */

        this.hi = hi >>> 0;
      }
      /**
       * Zero bits.
       * @memberof util.LongBits
       * @type {util.LongBits}
       */


      var zero = LongBits.zero = new LongBits(0, 0);

      zero.toNumber = function () {
        return 0;
      };

      zero.zzEncode = zero.zzDecode = function () {
        return this;
      };

      zero.length = function () {
        return 1;
      };
      /**
       * Zero hash.
       * @memberof util.LongBits
       * @type {string}
       */


      var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
      /**
       * Constructs new long bits from the specified number.
       * @param {number} value Value
       * @returns {util.LongBits} Instance
       */

      LongBits.fromNumber = function fromNumber(value) {
        if (value === 0) return zero;
        var sign = value < 0;
        if (sign) value = -value;
        var lo = value >>> 0,
            hi = (value - lo) / 4294967296 >>> 0;

        if (sign) {
          hi = ~hi >>> 0;
          lo = ~lo >>> 0;

          if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295) hi = 0;
          }
        }

        return new LongBits(lo, hi);
      };
      /**
       * Constructs new long bits from a number, long or string.
       * @param {Long|number|string} value Value
       * @returns {util.LongBits} Instance
       */


      LongBits.from = function from(value) {
        if (typeof value === "number") return LongBits.fromNumber(value);

        if (util.isString(value)) {
          /* istanbul ignore else */
          if (util.Long) value = util.Long.fromString(value);else return LongBits.fromNumber(parseInt(value, 10));
        }

        return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
      };
      /**
       * Converts this long bits to a possibly unsafe JavaScript number.
       * @param {boolean} [unsigned=false] Whether unsigned or not
       * @returns {number} Possibly unsafe number
       */


      LongBits.prototype.toNumber = function toNumber(unsigned) {
        if (!unsigned && this.hi >>> 31) {
          var lo = ~this.lo + 1 >>> 0,
              hi = ~this.hi >>> 0;
          if (!lo) hi = hi + 1 >>> 0;
          return -(lo + hi * 4294967296);
        }

        return this.lo + this.hi * 4294967296;
      };
      /**
       * Converts this long bits to a long.
       * @param {boolean} [unsigned=false] Whether unsigned or not
       * @returns {Long} Long
       */


      LongBits.prototype.toLong = function toLong(unsigned) {
        return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : {
          low: this.lo | 0,
          high: this.hi | 0,
          unsigned: Boolean(unsigned)
        };
      };

      var charCodeAt = String.prototype.charCodeAt;
      /**
       * Constructs new long bits from the specified 8 characters long hash.
       * @param {string} hash Hash
       * @returns {util.LongBits} Bits
       */

      LongBits.fromHash = function fromHash(hash) {
        if (hash === zeroHash) return zero;
        return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
      };
      /**
       * Converts this long bits to a 8 characters long hash.
       * @returns {string} Hash
       */


      LongBits.prototype.toHash = function toHash() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
      };
      /**
       * Zig-zag encodes this long bits.
       * @returns {util.LongBits} `this`
       */


      LongBits.prototype.zzEncode = function zzEncode() {
        var mask = this.hi >> 31;
        this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
        this.lo = (this.lo << 1 ^ mask) >>> 0;
        return this;
      };
      /**
       * Zig-zag decodes this long bits.
       * @returns {util.LongBits} `this`
       */


      LongBits.prototype.zzDecode = function zzDecode() {
        var mask = -(this.lo & 1);
        this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
        this.hi = (this.hi >>> 1 ^ mask) >>> 0;
        return this;
      };
      /**
       * Calculates the length of this longbits when encoded as a varint.
       * @returns {number} Length
       */


      LongBits.prototype.length = function length() {
        var part0 = this.lo,
            part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
            part2 = this.hi >>> 24;
        return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
      };
    }, {
      "39": 39
    }],
    39: [function (require, module, exports) {
      "use strict";

      var util = exports; // used to return a Promise where callback is omitted

      util.asPromise = require(1); // converts to / from base64 encoded strings

      util.base64 = require(2); // base class of rpc.Service

      util.EventEmitter = require(4); // float handling accross browsers

      util["float"] = require(6); // requires modules optionally and hides the call from bundlers

      util.inquire = require(7); // converts to / from utf8 encoded strings

      util.utf8 = require(10); // provides a node-like buffer pool in the browser

      util.pool = require(9); // utility to work with the low and high bits of a 64 bit value

      util.LongBits = require(38); // global object reference

      util.global = typeof window !== "undefined" && window || typeof global !== "undefined" && global || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this

      /**
       * An immuable empty array.
       * @memberof util
       * @type {Array.<*>}
       * @const
       */

      util.emptyArray = Object.freeze ? Object.freeze([]) :
      /* istanbul ignore next */
      []; // used on prototypes

      /**
       * An immutable empty object.
       * @type {Object}
       * @const
       */

      util.emptyObject = Object.freeze ? Object.freeze({}) :
      /* istanbul ignore next */
      {}; // used on prototypes

      /**
       * Whether running within node or not.
       * @memberof util
       * @type {boolean}
       * @const
       */

      util.isNode = Boolean(util.global.process && util.global.process.versions && util.global.process.versions.node);
      /**
       * Tests if the specified value is an integer.
       * @function
       * @param {*} value Value to test
       * @returns {boolean} `true` if the value is an integer
       */

      util.isInteger = Number.isInteger ||
      /* istanbul ignore next */
      function isInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
      /**
       * Tests if the specified value is a string.
       * @param {*} value Value to test
       * @returns {boolean} `true` if the value is a string
       */


      util.isString = function isString(value) {
        return typeof value === "string" || value instanceof String;
      };
      /**
       * Tests if the specified value is a non-null object.
       * @param {*} value Value to test
       * @returns {boolean} `true` if the value is a non-null object
       */


      util.isObject = function isObject(value) {
        return value && _typeof(value) === "object";
      };
      /**
       * Checks if a property on a message is considered to be present.
       * This is an alias of {@link util.isSet}.
       * @function
       * @param {Object} obj Plain object or message instance
       * @param {string} prop Property name
       * @returns {boolean} `true` if considered to be present, otherwise `false`
       */


      util.isset =
      /**
       * Checks if a property on a message is considered to be present.
       * @param {Object} obj Plain object or message instance
       * @param {string} prop Property name
       * @returns {boolean} `true` if considered to be present, otherwise `false`
       */
      util.isSet = function isSet(obj, prop) {
        var value = obj[prop];
        if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
          return _typeof(value) !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
        return false;
      };
      /**
       * Any compatible Buffer instance.
       * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
       * @interface Buffer
       * @extends Uint8Array
       */

      /**
       * Node's Buffer class if available.
       * @type {Constructor<Buffer>}
       */


      util.Buffer = function () {
        try {
          var Buffer = util.inquire("buffer").Buffer; // refuse to use non-node buffers if not explicitly assigned (perf reasons):

          return Buffer.prototype.utf8Write ? Buffer :
          /* istanbul ignore next */
          null;
        } catch (e) {
          /* istanbul ignore next */
          return null;
        }
      }(); // Internal alias of or polyfull for Buffer.from.


      util._Buffer_from = null; // Internal alias of or polyfill for Buffer.allocUnsafe.

      util._Buffer_allocUnsafe = null;
      /**
       * Creates a new buffer of whatever type supported by the environment.
       * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
       * @returns {Uint8Array|Buffer} Buffer
       */

      util.newBuffer = function newBuffer(sizeOrArray) {
        /* istanbul ignore next */
        return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
      };
      /**
       * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
       * @type {Constructor<Uint8Array>}
       */


      util.Array = typeof Uint8Array !== "undefined" ? Uint8Array
      /* istanbul ignore next */
      : Array;
      /**
       * Any compatible Long instance.
       * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
       * @interface Long
       * @property {number} low Low bits
       * @property {number} high High bits
       * @property {boolean} unsigned Whether unsigned or not
       */

      /**
       * Long.js's Long class if available.
       * @type {Constructor<Long>}
       */

      util.Long =
      /* istanbul ignore next */
      util.global.dcodeIO &&
      /* istanbul ignore next */
      util.global.dcodeIO.Long ||
      /* istanbul ignore next */
      util.global.Long || util.inquire("long");
      /**
       * Regular expression used to verify 2 bit (`bool`) map keys.
       * @type {RegExp}
       * @const
       */

      util.key2Re = /^true|false|0|1$/;
      /**
       * Regular expression used to verify 32 bit (`int32` etc.) map keys.
       * @type {RegExp}
       * @const
       */

      util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
      /**
       * Regular expression used to verify 64 bit (`int64` etc.) map keys.
       * @type {RegExp}
       * @const
       */

      util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
      /**
       * Converts a number or long to an 8 characters long hash string.
       * @param {Long|number} value Value to convert
       * @returns {string} Hash
       */

      util.longToHash = function longToHash(value) {
        return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
      };
      /**
       * Converts an 8 characters long hash string to a long or number.
       * @param {string} hash Hash
       * @param {boolean} [unsigned=false] Whether unsigned or not
       * @returns {Long|number} Original value
       */


      util.longFromHash = function longFromHash(hash, unsigned) {
        var bits = util.LongBits.fromHash(hash);
        if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
        return bits.toNumber(Boolean(unsigned));
      };
      /**
       * Merges the properties of the source object into the destination object.
       * @memberof util
       * @param {Object.<string,*>} dst Destination object
       * @param {Object.<string,*>} src Source object
       * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
       * @returns {Object.<string,*>} Destination object
       */


      function merge(dst, src, ifNotSet) {
        // used by converters
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) {
          if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];
        }

        return dst;
      }

      util.merge = merge;
      /**
       * Converts the first character of a string to lower case.
       * @param {string} str String to convert
       * @returns {string} Converted string
       */

      util.lcFirst = function lcFirst(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
      };
      /**
       * Creates a custom error constructor.
       * @memberof util
       * @param {string} name Error name
       * @returns {Constructor<Error>} Custom error constructor
       */


      function newError(name) {
        function CustomError(message, properties) {
          if (!(this instanceof CustomError)) return new CustomError(message, properties); // Error.call(this, message);
          // ^ just returns a new error instance because the ctor can be called as a function

          Object.defineProperty(this, "message", {
            get: function get() {
              return message;
            }
          });
          /* istanbul ignore next */

          if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
            value: new Error().stack || ""
          });
          if (properties) merge(this, properties);
        }

        (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
        Object.defineProperty(CustomError.prototype, "name", {
          get: function get() {
            return name;
          }
        });

        CustomError.prototype.toString = function toString() {
          return this.name + ": " + this.message;
        };

        return CustomError;
      }

      util.newError = newError;
      /**
       * Constructs a new protocol error.
       * @classdesc Error subclass indicating a protocol specifc error.
       * @memberof util
       * @extends Error
       * @template T extends Message<T>
       * @constructor
       * @param {string} message Error message
       * @param {Object.<string,*>} [properties] Additional properties
       * @example
       * try {
       *     MyMessage.decode(someBuffer); // throws if required fields are missing
       * } catch (e) {
       *     if (e instanceof ProtocolError && e.instance)
       *         console.log("decoded so far: " + JSON.stringify(e.instance));
       * }
       */

      util.ProtocolError = newError("ProtocolError");
      /**
       * So far decoded message instance.
       * @name util.ProtocolError#instance
       * @type {Message<T>}
       */

      /**
       * A OneOf getter as returned by {@link util.oneOfGetter}.
       * @typedef OneOfGetter
       * @type {function}
       * @returns {string|undefined} Set field name, if any
       */

      /**
       * Builds a getter for a oneof's present field name.
       * @param {string[]} fieldNames Field names
       * @returns {OneOfGetter} Unbound getter
       */

      util.oneOfGetter = function getOneOf(fieldNames) {
        var fieldMap = {};

        for (var i = 0; i < fieldNames.length; ++i) {
          fieldMap[fieldNames[i]] = 1;
        }
        /**
         * @returns {string|undefined} Set field name, if any
         * @this Object
         * @ignore
         */


        return function () {
          // eslint-disable-line consistent-return
          for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) {
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
          }
        };
      };
      /**
       * A OneOf setter as returned by {@link util.oneOfSetter}.
       * @typedef OneOfSetter
       * @type {function}
       * @param {string|undefined} value Field name
       * @returns {undefined}
       */

      /**
       * Builds a setter for a oneof's present field name.
       * @param {string[]} fieldNames Field names
       * @returns {OneOfSetter} Unbound setter
       */


      util.oneOfSetter = function setOneOf(fieldNames) {
        /**
         * @param {string} name Field name
         * @returns {undefined}
         * @this Object
         * @ignore
         */
        return function (name) {
          for (var i = 0; i < fieldNames.length; ++i) {
            if (fieldNames[i] !== name) delete this[fieldNames[i]];
          }
        };
      };
      /**
       * Default conversion options used for {@link Message#toJSON} implementations.
       *
       * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
       *
       * - Longs become strings
       * - Enums become string keys
       * - Bytes become base64 encoded strings
       * - (Sub-)Messages become plain objects
       * - Maps become plain objects with all string keys
       * - Repeated fields become arrays
       * - NaN and Infinity for float and double fields become strings
       *
       * @type {IConversionOptions}
       * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
       */


      util.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
      }; // Sets up buffer utility according to the environment (called in index-minimal)

      util._configure = function () {
        var Buffer = util.Buffer;
        /* istanbul ignore if */

        if (!Buffer) {
          util._Buffer_from = util._Buffer_allocUnsafe = null;
          return;
        } // because node 4.x buffers are incompatible & immutable
        // see: https://github.com/dcodeIO/protobuf.js/pull/665


        util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
          return new Buffer(value, encoding);
        };

        util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
          return new Buffer(size);
        };
      };
    }, {
      "1": 1,
      "10": 10,
      "2": 2,
      "38": 38,
      "4": 4,
      "6": 6,
      "7": 7,
      "9": 9
    }],
    40: [function (require, module, exports) {
      "use strict";

      module.exports = verifier;

      var Enum = require(15),
          util = require(37);

      function invalid(field, expected) {
        return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
      }
      /**
       * Generates a partial value verifier.
       * @param {Codegen} gen Codegen instance
       * @param {Field} field Reflected field
       * @param {number} fieldIndex Field index
       * @param {string} ref Variable reference
       * @returns {Codegen} Codegen instance
       * @ignore
       */


      function genVerifyValue(gen, field, fieldIndex, ref) {
        /* eslint-disable no-unexpected-multiline */
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));

            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) {
              gen("case %i:", field.resolvedType.values[keys[j]]);
            }

            gen("break")("}");
          } else {
            gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
          }
        } else {
          switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
              break;

            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
              break;

            case "float":
            case "double":
              gen("if(typeof %s!==\"number\")", ref)("return%j", invalid(field, "number"));
              break;

            case "bool":
              gen("if(typeof %s!==\"boolean\")", ref)("return%j", invalid(field, "boolean"));
              break;

            case "string":
              gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
              break;

            case "bytes":
              gen("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)("return%j", invalid(field, "buffer"));
              break;
          }
        }

        return gen;
        /* eslint-enable no-unexpected-multiline */
      }
      /**
       * Generates a partial key verifier.
       * @param {Codegen} gen Codegen instance
       * @param {Field} field Reflected field
       * @param {string} ref Variable reference
       * @returns {Codegen} Codegen instance
       * @ignore
       */


      function genVerifyKey(gen, field, ref) {
        /* eslint-disable no-unexpected-multiline */
        switch (field.keyType) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
            break;

          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
            ("return%j", invalid(field, "integer|Long key"));
            break;

          case "bool":
            gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
            break;
        }

        return gen;
        /* eslint-enable no-unexpected-multiline */
      }
      /**
       * Generates a verifier specific to the specified message type.
       * @param {Type} mtype Message type
       * @returns {Codegen} Codegen instance
       */


      function verifier(mtype) {
        /* eslint-disable no-unexpected-multiline */
        var gen = util.codegen(["m"], mtype.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
        var oneofs = mtype.oneofsArray,
            seenFirstField = {};
        if (oneofs.length) gen("var p={}");

        for (var i = 0; i <
        /* initializes */
        mtype.fieldsArray.length; ++i) {
          var field = mtype._fieldsArray[i].resolve(),
              ref = "m" + util.safeProp(field.name);

          if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null
          // map fields

          if (field.map) {
            gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
            genVerifyKey(gen, field, "k[i]");
            genVerifyValue(gen, field, i, ref + "[k[i]]")("}"); // repeated fields
          } else if (field.repeated) {
            gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
            genVerifyValue(gen, field, i, ref + "[i]")("}"); // required or present fields
          } else {
            if (field.partOf) {
              var oneofProp = util.safeProp(field.partOf.name);
              if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
              seenFirstField[field.partOf.name] = 1;
              gen("p%s=1", oneofProp);
            }

            genVerifyValue(gen, field, i, ref);
          }

          if (field.optional) gen("}");
        }

        return gen("return null");
        /* eslint-enable no-unexpected-multiline */
      }
    }, {
      "15": 15,
      "37": 37
    }],
    41: [function (require, module, exports) {
      "use strict";
      /**
       * Wrappers for common types.
       * @type {Object.<string,IWrapper>}
       * @const
       */

      var wrappers = exports;

      var Message = require(21);
      /**
       * From object converter part of an {@link IWrapper}.
       * @typedef WrapperFromObjectConverter
       * @type {function}
       * @param {Object.<string,*>} object Plain object
       * @returns {Message<{}>} Message instance
       * @this Type
       */

      /**
       * To object converter part of an {@link IWrapper}.
       * @typedef WrapperToObjectConverter
       * @type {function}
       * @param {Message<{}>} message Message instance
       * @param {IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       * @this Type
       */

      /**
       * Common type wrapper part of {@link wrappers}.
       * @interface IWrapper
       * @property {WrapperFromObjectConverter} [fromObject] From object converter
       * @property {WrapperToObjectConverter} [toObject] To object converter
       */
      // Custom wrapper for Any


      wrappers[".google.protobuf.Any"] = {
        fromObject: function fromObject(object) {
          // unwrap value type if mapped
          if (object && object["@type"]) {
            var type = this.lookup(object["@type"]);
            /* istanbul ignore else */

            if (type) {
              // type_url does not accept leading "."
              var type_url = object["@type"].charAt(0) === "." ? object["@type"].substr(1) : object["@type"]; // type_url prefix is optional, but path seperator is required

              return this.create({
                type_url: "/" + type_url,
                value: type.encode(type.fromObject(object)).finish()
              });
            }
          }

          return this.fromObject(object);
        },
        toObject: function toObject(message, options) {
          // decode value if requested and unmapped
          if (options && options.json && message.type_url && message.value) {
            // Only use fully qualified type name after the last '/'
            var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            /* istanbul ignore else */

            if (type) message = type.decode(message.value);
          } // wrap value if unmapped


          if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            object["@type"] = message.$type.fullName;
            return object;
          }

          return this.toObject(message, options);
        }
      };
    }, {
      "21": 21
    }],
    42: [function (require, module, exports) {
      "use strict";

      module.exports = Writer;

      var util = require(39);

      var BufferWriter; // cyclic

      var LongBits = util.LongBits,
          base64 = util.base64,
          utf8 = util.utf8;
      /**
       * Constructs a new writer operation instance.
       * @classdesc Scheduled writer operation.
       * @constructor
       * @param {function(*, Uint8Array, number)} fn Function to call
       * @param {number} len Value byte length
       * @param {*} val Value to write
       * @ignore
       */

      function Op(fn, len, val) {
        /**
         * Function to call.
         * @type {function(Uint8Array, number, *)}
         */
        this.fn = fn;
        /**
         * Value byte length.
         * @type {number}
         */

        this.len = len;
        /**
         * Next operation.
         * @type {Writer.Op|undefined}
         */

        this.next = undefined;
        /**
         * Value to write.
         * @type {*}
         */

        this.val = val; // type varies
      }
      /* istanbul ignore next */


      function noop() {} // eslint-disable-line no-empty-function

      /**
       * Constructs a new writer state instance.
       * @classdesc Copied writer state.
       * @memberof Writer
       * @constructor
       * @param {Writer} writer Writer to copy state from
       * @ignore
       */


      function State(writer) {
        /**
         * Current head.
         * @type {Writer.Op}
         */
        this.head = writer.head;
        /**
         * Current tail.
         * @type {Writer.Op}
         */

        this.tail = writer.tail;
        /**
         * Current buffer length.
         * @type {number}
         */

        this.len = writer.len;
        /**
         * Next state.
         * @type {State|null}
         */

        this.next = writer.states;
      }
      /**
       * Constructs a new writer instance.
       * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
       * @constructor
       */


      function Writer() {
        /**
         * Current length.
         * @type {number}
         */
        this.len = 0;
        /**
         * Operations head.
         * @type {Object}
         */

        this.head = new Op(noop, 0, 0);
        /**
         * Operations tail
         * @type {Object}
         */

        this.tail = this.head;
        /**
         * Linked forked states.
         * @type {Object|null}
         */

        this.states = null; // When a value is written, the writer calculates its byte length and puts it into a linked
        // list of operations to perform when finish() is called. This both allows us to allocate
        // buffers of the exact required size and reduces the amount of work we have to do compared
        // to first calculating over objects and then encoding over objects. In our case, the encoding
        // part is just a linked list walk calling operations with already prepared values.
      }
      /**
       * Creates a new writer.
       * @function
       * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
       */


      Writer.create = util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      }
      /* istanbul ignore next */
      : function create_array() {
        return new Writer();
      };
      /**
       * Allocates a buffer of the specified size.
       * @param {number} size Buffer size
       * @returns {Uint8Array} Buffer
       */

      Writer.alloc = function alloc(size) {
        return new util.Array(size);
      }; // Use Uint8Array buffer pool in the browser, just like node does with buffers

      /* istanbul ignore else */


      if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
      /**
       * Pushes a new operation to the queue.
       * @param {function(Uint8Array, number, *)} fn Function to call
       * @param {number} len Value byte length
       * @param {number} val Value to write
       * @returns {Writer} `this`
       * @private
       */

      Writer.prototype._push = function push(fn, len, val) {
        this.tail = this.tail.next = new Op(fn, len, val);
        this.len += len;
        return this;
      };

      function writeByte(val, buf, pos) {
        buf[pos] = val & 255;
      }

      function writeVarint32(val, buf, pos) {
        while (val > 127) {
          buf[pos++] = val & 127 | 128;
          val >>>= 7;
        }

        buf[pos] = val;
      }
      /**
       * Constructs a new varint writer operation instance.
       * @classdesc Scheduled varint writer operation.
       * @extends Op
       * @constructor
       * @param {number} len Value byte length
       * @param {number} val Value to write
       * @ignore
       */


      function VarintOp(len, val) {
        this.len = len;
        this.next = undefined;
        this.val = val;
      }

      VarintOp.prototype = Object.create(Op.prototype);
      VarintOp.prototype.fn = writeVarint32;
      /**
       * Writes an unsigned 32 bit value as a varint.
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */

      Writer.prototype.uint32 = function write_uint32(value) {
        // here, the call to this.push has been inlined and a varint specific Op subclass is used.
        // uint32 is by far the most frequently used operation and benefits significantly from this.
        this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
        return this;
      };
      /**
       * Writes a signed 32 bit value as a varint.
       * @function
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.int32 = function write_int32(value) {
        return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
      };
      /**
       * Writes a 32 bit value as a varint, zig-zag encoded.
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.sint32 = function write_sint32(value) {
        return this.uint32((value << 1 ^ value >> 31) >>> 0);
      };

      function writeVarint64(val, buf, pos) {
        while (val.hi) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
          val.hi >>>= 7;
        }

        while (val.lo > 127) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = val.lo >>> 7;
        }

        buf[pos++] = val.lo;
      }
      /**
       * Writes an unsigned 64 bit value as a varint.
       * @param {Long|number|string} value Value to write
       * @returns {Writer} `this`
       * @throws {TypeError} If `value` is a string and no long library is present.
       */


      Writer.prototype.uint64 = function write_uint64(value) {
        var bits = LongBits.from(value);
        return this._push(writeVarint64, bits.length(), bits);
      };
      /**
       * Writes a signed 64 bit value as a varint.
       * @function
       * @param {Long|number|string} value Value to write
       * @returns {Writer} `this`
       * @throws {TypeError} If `value` is a string and no long library is present.
       */


      Writer.prototype.int64 = Writer.prototype.uint64;
      /**
       * Writes a signed 64 bit value as a varint, zig-zag encoded.
       * @param {Long|number|string} value Value to write
       * @returns {Writer} `this`
       * @throws {TypeError} If `value` is a string and no long library is present.
       */

      Writer.prototype.sint64 = function write_sint64(value) {
        var bits = LongBits.from(value).zzEncode();
        return this._push(writeVarint64, bits.length(), bits);
      };
      /**
       * Writes a boolish value as a varint.
       * @param {boolean} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.bool = function write_bool(value) {
        return this._push(writeByte, 1, value ? 1 : 0);
      };

      function writeFixed32(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }
      /**
       * Writes an unsigned 32 bit value as fixed 32 bits.
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.fixed32 = function write_fixed32(value) {
        return this._push(writeFixed32, 4, value >>> 0);
      };
      /**
       * Writes a signed 32 bit value as fixed 32 bits.
       * @function
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.sfixed32 = Writer.prototype.fixed32;
      /**
       * Writes an unsigned 64 bit value as fixed 64 bits.
       * @param {Long|number|string} value Value to write
       * @returns {Writer} `this`
       * @throws {TypeError} If `value` is a string and no long library is present.
       */

      Writer.prototype.fixed64 = function write_fixed64(value) {
        var bits = LongBits.from(value);
        return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
      };
      /**
       * Writes a signed 64 bit value as fixed 64 bits.
       * @function
       * @param {Long|number|string} value Value to write
       * @returns {Writer} `this`
       * @throws {TypeError} If `value` is a string and no long library is present.
       */


      Writer.prototype.sfixed64 = Writer.prototype.fixed64;
      /**
       * Writes a float (32 bit).
       * @function
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */

      Writer.prototype["float"] = function write_float(value) {
        return this._push(util["float"].writeFloatLE, 4, value);
      };
      /**
       * Writes a double (64 bit float).
       * @function
       * @param {number} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype["double"] = function write_double(value) {
        return this._push(util["float"].writeDoubleLE, 8, value);
      };

      var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
      }
      /* istanbul ignore next */
      : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i) {
          buf[pos + i] = val[i];
        }
      };
      /**
       * Writes a sequence of bytes.
       * @param {Uint8Array|string} value Buffer or base64 encoded string to write
       * @returns {Writer} `this`
       */

      Writer.prototype.bytes = function write_bytes(value) {
        var len = value.length >>> 0;
        if (!len) return this._push(writeByte, 1, 0);

        if (util.isString(value)) {
          var buf = Writer.alloc(len = base64.length(value));
          base64.decode(value, buf, 0);
          value = buf;
        }

        return this.uint32(len)._push(writeBytes, len, value);
      };
      /**
       * Writes a string.
       * @param {string} value Value to write
       * @returns {Writer} `this`
       */


      Writer.prototype.string = function write_string(value) {
        var len = utf8.length(value);
        return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
      };
      /**
       * Forks this writer's state by pushing it to a stack.
       * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
       * @returns {Writer} `this`
       */


      Writer.prototype.fork = function fork() {
        this.states = new State(this);
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
        return this;
      };
      /**
       * Resets this instance to the last state.
       * @returns {Writer} `this`
       */


      Writer.prototype.reset = function reset() {
        if (this.states) {
          this.head = this.states.head;
          this.tail = this.states.tail;
          this.len = this.states.len;
          this.states = this.states.next;
        } else {
          this.head = this.tail = new Op(noop, 0, 0);
          this.len = 0;
        }

        return this;
      };
      /**
       * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
       * @returns {Writer} `this`
       */


      Writer.prototype.ldelim = function ldelim() {
        var head = this.head,
            tail = this.tail,
            len = this.len;
        this.reset().uint32(len);

        if (len) {
          this.tail.next = head.next; // skip noop

          this.tail = tail;
          this.len += len;
        }

        return this;
      };
      /**
       * Finishes the write operation.
       * @returns {Uint8Array} Finished buffer
       */


      Writer.prototype.finish = function finish() {
        var head = this.head.next,
            // skip noop
        buf = this.constructor.alloc(this.len),
            pos = 0;

        while (head) {
          head.fn(head.val, buf, pos);
          pos += head.len;
          head = head.next;
        } // this.head = this.tail = null;


        return buf;
      };

      Writer._configure = function (BufferWriter_) {
        BufferWriter = BufferWriter_;
      };
    }, {
      "39": 39
    }],
    43: [function (require, module, exports) {
      "use strict";

      module.exports = BufferWriter; // extends Writer

      var Writer = require(42);

      (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

      var util = require(39);

      var Buffer = util.Buffer;
      /**
       * Constructs a new buffer writer instance.
       * @classdesc Wire format writer using node buffers.
       * @extends Writer
       * @constructor
       */

      function BufferWriter() {
        Writer.call(this);
      }
      /**
       * Allocates a buffer of the specified size.
       * @param {number} size Buffer size
       * @returns {Buffer} Buffer
       */


      BufferWriter.alloc = function alloc_buffer(size) {
        return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
      };

      var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
        // also works for plain array values
      }
      /* istanbul ignore next */
      : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
          val.copy(buf, pos, 0, val.length);else for (var i = 0; i < val.length;) {
          // plain array values
          buf[pos++] = val[i++];
        }
      };
      /**
       * @override
       */

      BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
        if (util.isString(value)) value = util._Buffer_from(value, "base64");
        var len = value.length >>> 0;
        this.uint32(len);
        if (len) this._push(writeBytesBuffer, len, value);
        return this;
      };

      function writeStringBuffer(val, buf, pos) {
        if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
          util.utf8.write(val, buf, pos);else buf.utf8Write(val, pos);
      }
      /**
       * @override
       */


      BufferWriter.prototype.string = function write_string_buffer(value) {
        var len = Buffer.byteLength(value);
        this.uint32(len);
        if (len) this._push(writeStringBuffer, len, value);
        return this;
      };
      /**
       * Finishes the write operation.
       * @name BufferWriter#finish
       * @function
       * @returns {Buffer} Finished buffer
       */

    }, {
      "39": 39,
      "42": 42
    }]
  }, {}, [19]);
})(); 

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXFNjcmlwdHNcXFByb3Rvc1xccHJvdG9idWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUEsQ0FBQyxVQUFTLFNBQVQsRUFBbUI7QUFBQzs7QUFBYSxHQUFDLFNBQVMsT0FBVCxDQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQyxPQUFqQyxFQUEwQztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGFBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QjtBQUNwQixVQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBRCxDQUFuQjtBQUNBLFVBQUksQ0FBQyxPQUFMLEVBQ0ksT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFjLENBQWQsRUFBaUIsSUFBakIsQ0FBc0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFELENBQUwsR0FBYztBQUFFLFFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBOUMsRUFBK0QsUUFBL0QsRUFBeUUsT0FBekUsRUFBa0YsT0FBTyxDQUFDLE9BQTFGO0FBQ0osYUFBTyxPQUFPLENBQUMsT0FBZjtBQUNIOztBQUVELFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBRCxDQUFSLENBQXZCLENBZHlFLENBZ0J6RTs7QUFDQSxJQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsTUFBZCxDQUFxQixRQUFyQixHQUFnQyxRQUFoQyxDQWpCeUUsQ0FtQnpFOztBQUNBLFFBQUksT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE1BQU0sQ0FBQyxHQUEzQyxFQUNJLE1BQU0sQ0FBQyxDQUFDLE1BQUQsQ0FBRCxFQUFXLFVBQVMsSUFBVCxFQUFlO0FBQzVCLFVBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFqQixFQUF5QjtBQUNyQixRQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBZCxHQUFxQixJQUFyQjtBQUNBLFFBQUEsUUFBUSxDQUFDLFNBQVQ7QUFDSDs7QUFDRCxh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Q0FBUCxDQUFaO0FBQ0EsWUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFQLENBQVo7QUFDQSxZQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQVAsQ0FBWjtBQUNBLFlBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBUCxDQUFaO0FBQ0EsWUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFQLENBQVo7QUFDQSxtQkFBTyxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0g7O0FBRUQsbUJBQVMsa0JBQVQsQ0FBNEIsR0FBNUIsRUFBaUMsR0FBakMsRUFBc0M7QUFDbEMsWUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsR0FBRyxDQUFDLEdBQUQsQ0FBWjtBQUNBLFlBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBUCxDQUFaO0FBQ0EsWUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFQLENBQVo7QUFDQSxZQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQVAsQ0FBWjtBQUNBLFlBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBUCxDQUFaO0FBQ0EsWUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFQLENBQVo7QUFDQSxZQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQVAsQ0FBWjtBQUNBLFlBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBUCxDQUFaO0FBQ0EsbUJBQU8sR0FBRyxDQUFDLENBQUQsQ0FBVjtBQUNI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LElBQVA7QUFDSCxPQVJEOztBQVVBLGVBQVMsaUJBQVQsQ0FBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEM7QUFDdEMsWUFBSSxHQUFHLENBQUMsTUFBSixHQUFhLEVBQWpCLEVBQXFCO0FBQ2pCLFVBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBREosS0FHSSxHQUFHLENBQUMsU0FBSixDQUFjLEdBQWQsRUFBbUIsR0FBbkI7QUFDUDtBQUVEOzs7OztBQUdBLE1BQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsTUFBdkIsR0FBZ0MsU0FBUyxtQkFBVCxDQUE2QixLQUE3QixFQUFvQztBQUNoRSxZQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBUCxDQUFrQixLQUFsQixDQUFWO0FBQ0EsYUFBSyxNQUFMLENBQVksR0FBWjtBQUNBLFlBQUksR0FBSixFQUNJLEtBQUssS0FBTCxDQUFXLGlCQUFYLEVBQThCLEdBQTlCLEVBQW1DLEtBQW5DO0FBQ0osZUFBTyxJQUFQO0FBQ0gsT0FORDtBQVNBOzs7Ozs7O0FBT0MsS0FuRmUsRUFtRmQ7QUFBQyxZQUFLLEVBQU47QUFBUyxZQUFLO0FBQWQsS0FuRmM7QUF4NVFPLEdBakNXLEVBNGdSWixFQTVnUlksRUE0Z1JULENBQUMsRUFBRCxDQTVnUlM7QUE4Z1JqQyxDQTlnUkQsS0ErZ1JBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==