import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../opt/npm-tools/node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && (typeof params.client_max_window_bits === "number" ? opts.clientMaxWindowBits > params.client_max_window_bits : !params.client_max_window_bits)) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxBufferedChunks = options.maxBufferedChunks | 0;
        this._maxFragments = options.maxFragments | 0;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._numFragments = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
          cb(
            this.createError(
              RangeError,
              "Too many buffered chunks",
              false,
              1008,
              "WS_ERR_TOO_MANY_BUFFERED_PARTS"
            )
          );
          return;
        }
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
          const error = this.createError(
            RangeError,
            "Too many message fragments",
            false,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS"
          );
          cb(error);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._numFragments = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var {
      types: { isUint8Array }
    } = __require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse };
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http2 = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes, createHash } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL: URL2 } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxBufferedChunks: options.maxBufferedChunks,
          maxFragments: options.maxFragments,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxBufferedChunks: 256 * 1024,
        maxFragments: 16 * 1024,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http2.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxBufferedChunks: opts.maxBufferedChunks,
          maxFragments: opts.maxFragments,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});

// ../../../opt/npm-tools/node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "../../../opt/npm-tools/node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http2 = __require("http");
    var { Duplex } = __require("stream");
    var { createHash } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxBufferedChunks=262144] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=16384] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxBufferedChunks: 256 * 1024,
          maxFragments: 16 * 1024,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http2.createServer((req, res) => {
            const body = http2.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server2 = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server2.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxBufferedChunks: this.options.maxBufferedChunks,
          maxFragments: this.options.maxFragments,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server2, map) {
      for (const event of Object.keys(map)) server2.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server2.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server2) {
      server2._state = CLOSED;
      server2.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http2.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http2.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server2, req, socket, code, message, headers) {
      if (server2.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server2.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// server/index.js
import http from "node:http";
import fs2 from "node:fs";
import path2 from "node:path";

// ../../../opt/npm-tools/node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// server/store.js
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
var DATA_DIR = process.env.DATA_DIR || path.join(path.dirname(new URL(import.meta.url).pathname), "data");
var FILE = path.join(DATA_DIR, "store.json");
var START_RATING = 1e3;
function tierFor(r) {
  if (r >= 1600) return "Legend";
  if (r >= 1400) return "Diamond";
  if (r >= 1250) return "Gold";
  if (r >= 1100) return "Silver";
  return "Bronze";
}
function weekId(d = /* @__PURE__ */ new Date()) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return `${t.getUTCFullYear()}-W${String(Math.ceil(((t - y0) / 864e5 + 1) / 7)).padStart(2, "0")}`;
}
var Store = class {
  constructor() {
    this.data = { players: {}, h2h: {}, matches: [], version: 1 };
    try {
      if (fs.existsSync(FILE)) this.data = { ...this.data, ...JSON.parse(fs.readFileSync(FILE, "utf8")) };
    } catch (e) {
      console.error("[store] could not read", FILE, e.message);
    }
    this.dirty = false;
    this.timer = setInterval(() => this.flush(), 5e3);
    this.timer.unref?.();
  }
  flush() {
    if (!this.dirty) return;
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
      const tmp = FILE + ".tmp";
      fs.writeFileSync(tmp, JSON.stringify(this.data));
      fs.renameSync(tmp, FILE);
      this.dirty = false;
    } catch (e) {
      console.error("[store] write failed", e.message);
    }
  }
  /** Identify a player by (id, secret). First sight registers the id; afterwards the secret must match. */
  auth(id, secret, name) {
    if (typeof id !== "string" || !/^[a-z0-9]{12,40}$/.test(id) || typeof secret !== "string" || secret.length < 16) return null;
    const hash = crypto.createHash("sha256").update(secret).digest("hex");
    let p = this.data.players[id];
    if (!p) {
      p = this.data.players[id] = { id, hash, name, rating: START_RATING, rw: 0, rl: 0, cw: 0, cl: 0, created: Date.now(), week: {} };
      this.dirty = true;
    } else if (p.hash !== hash) return null;
    if (name && p.name !== name) {
      p.name = name;
      this.dirty = true;
    }
    p.seen = Date.now();
    return p;
  }
  publicProfile(p) {
    return { id: p.id, name: p.name, rating: Math.round(p.rating), tier: tierFor(p.rating), rankedWins: p.rw, rankedLosses: p.rl, casualWins: p.cw, casualLosses: p.cl };
  }
  pairKey(a, b) {
    return a < b ? `${a}|${b}` : `${b}|${a}`;
  }
  h2h(a, b) {
    const k = this.pairKey(a, b);
    const r = this.data.h2h[k];
    if (!r) return { wins: 0, losses: 0, last: null };
    const meFirst = a < b;
    return { wins: meFirst ? r.w1 : r.w2, losses: meFirst ? r.w2 : r.w1, last: r.last ? { won: r.last.winner === a, score: r.last.score, date: r.last.date } : null, recent: r.recent || [] };
  }
  /** Ranked games between the same two players in the last 24 h (anti-farming). */
  recentRanked(a, b) {
    const k = this.pairKey(a, b);
    const r = this.data.h2h[k];
    if (!r || !r.rankedTimes) return 0;
    const cut = Date.now() - 864e5;
    r.rankedTimes = r.rankedTimes.filter((t) => t > cut);
    return r.rankedTimes.length;
  }
  /**
   * Record a finished 1v1 between two registered players. Returns rating deltas for ranked games.
   * `forfeit` = the loser left / disconnected (always a loss for them).
   */
  recordResult({ winner, loser, score, ranked, forfeit, duration }) {
    const W = this.data.players[winner], L = this.data.players[loser];
    if (!W || !L) return null;
    const k = this.pairKey(winner, loser);
    const r = this.data.h2h[k] || (this.data.h2h[k] = { w1: 0, w2: 0, recent: [], rankedTimes: [] });
    if (winner < loser) r.w1++;
    else r.w2++;
    r.last = { winner, score, date: Date.now() };
    r.recent = [{ winner, score, date: Date.now(), ranked: !!ranked }, ...r.recent || []].slice(0, 10);
    const wk = weekId();
    for (const [P, won] of [[W, true], [L, false]]) {
      P.week = P.week && P.week.id === wk ? P.week : { id: wk, wins: 0, games: 0 };
      P.week.games++;
      if (won) P.week.wins++;
    }
    let delta = null;
    if (ranked) {
      const repeats = this.recentRanked(winner, loser);
      r.rankedTimes = [...r.rankedTimes || [], Date.now()];
      const k32 = 32 * (repeats >= 3 ? 0.35 : 1);
      const ew = 1 / (1 + 10 ** ((L.rating - W.rating) / 400));
      let dw = k32 * (1 - ew);
      if (forfeit && duration < 20) dw *= 0.25;
      const dl = -k32 * (1 - ew);
      W.rating += dw;
      L.rating = Math.max(100, L.rating + dl);
      W.rw++;
      L.rl++;
      delta = { [winner]: Math.round(dw), [loser]: Math.round(dl) };
    } else {
      W.cw++;
      L.cl++;
    }
    this.data.matches = [{ winner, loser, score, ranked: !!ranked, forfeit: !!forfeit, date: Date.now() }, ...this.data.matches].slice(0, 500);
    this.dirty = true;
    return delta;
  }
  leaderboard(limit = 25) {
    const ps = Object.values(this.data.players);
    const ranked = ps.filter((p) => p.rw + p.rl > 0).sort((a, b) => b.rating - a.rating).slice(0, limit).map((p) => ({ id: p.id, name: p.name, rating: Math.round(p.rating), tier: tierFor(p.rating), wins: p.rw, losses: p.rl }));
    const wk = weekId();
    const weekly = ps.filter((p) => p.week && p.week.id === wk && p.week.games > 0).sort((a, b) => b.week.wins - a.week.wins || a.week.games - b.week.games).slice(0, limit).map((p) => ({ id: p.id, name: p.name, wins: p.week.wins, games: p.week.games }));
    return { ranked, weekly, week: wk, totalPlayers: ps.length };
  }
  /** The last few opponents of a player with head-to-head records. */
  rivals(id, limit = 8) {
    const out = [];
    for (const [k, r] of Object.entries(this.data.h2h)) {
      const [a, b] = k.split("|");
      if (a !== id && b !== id) continue;
      const other = a === id ? b : a;
      const o = this.data.players[other];
      if (!o) continue;
      const h = this.h2h(id, other);
      out.push({ id: other, name: o.name, wins: h.wins, losses: h.losses, last: r.last ? r.last.date : 0, lastWon: r.last ? r.last.winner === id : null, lastScore: r.last ? r.last.score : null });
    }
    return out.sort((x, y) => y.last - x.last).slice(0, limit);
  }
};

// server/game.js
import { performance } from "node:perf_hooks";

// src/config.js
var PHYS = {
  DT: 1 / 60,
  // fixed simulation step (deterministic, network-friendly)
  MAX_STEPS_PER_FRAME: 5,
  BALL_SUBSTEPS: 4,
  G_PLAYER: 22,
  G_BALL: 12
  // a bit floatier than real gravity: arcs read better on screen
};
var COURT = {
  HALF_L: 13,
  // playable half-length (x)
  HALF_W: 7.5,
  // playable half-width (z)
  WALL_PAD: 0.9,
  // invisible ball walls sit this far outside the lines
  THREE: 6.75
};
var PLAYER = {
  R: 0.42,
  // body radius (collision cylinder)
  H: 1.95,
  // standing height
  REACH: 0.45,
  // hands above head when reaching up
  RUN: 7.2,
  SPRINT: 10.2,
  ACCEL: 55,
  AIR_ACCEL: 18,
  FRICTION: 60,
  JUMP_V: 7.2,
  SHOT_JUMP_V: 5.4,
  LAYUP_JUMP_V: 7.6,
  STAMINA_DRAIN: 0.28,
  // per second while sprinting
  STAMINA_REGEN: 0.2,
  STAMINA_MIN: 0.12,
  // need this much to start sprinting
  REACH_SLOW: 0.45,
  TURN_RATE: 14
};
var BALL = {
  R: 0.13,
  REST_FLOOR: 0.72,
  REST_RIM: 0.5,
  REST_BOARD: 0.68,
  REST_WALL: 0.55,
  ROLL_FRICTION: 0.986
};
var HOOP = {
  RIM_Y: 3.05,
  RIM_R: 0.31,
  // radius to rim tube centre
  TUBE_R: 0.022,
  BOARD_X: 12,
  // |x| of the backboard face
  BOARD_W: 1.8,
  // along z
  BOARD_BOTTOM: 2.9,
  BOARD_TOP: 3.95,
  BOARD_THICK: 0.06,
  RIM_OFFSET: 0.17,
  // gap from board face to the back of the rim tube
  NET_DEPTH: 0.45
};
var SHOT = {
  METER_FILL: 0.52,
  METER_MAX: 1.35,
  SWEET_CENTER: 0.885,
  SWEET_HALF: 0.07,
  FALLOFF: 5,
  DUNK_RANGE: 1.9,
  // horizontal distance to rim centre for a dunk
  LAYUP_RANGE: 3.1,
  BLOCK_WINDOW: 0.32,
  NO_PICKUP_SHOOTER: 0.3,
  STEAL_RANGE: 1.45,
  // bots: consider swiping inside this distance
  STEAL_CD: 0.75,
  STEAL_REACH_T: 0.45,
  STEAL_LUNGE_V: 6,
  STEAL_CHANCE_FRONT: 0.4,
  // reaching at the ball (it is dribbled in front)
  STEAL_CHANCE_SIDE: 0.25,
  STEAL_CHANCE_BEHIND: 0.08,
  STEAL_CHANCE_AIR: 0.25
};
var ITEMS = {
  FIRST_SPAWN: 5,
  RESPAWN: 7,
  PICKUP_R: 1.1,
  // Box drop weights (higher = more common)
  POOL: { grapple: 20, jetpack: 14, punch: 18, freeze: 14, banana: 13, magnet: 10, energy: 13 },
  JETPACK: { T: 1.7, THRUST: 34, MAX_VY: 6.5, CEILING: 3.6 },
  PUNCH: { WINDUP: 0.24, RECOVER: 0.25, RANGE: 2.6, CONE: 0.5, POWER: 13, STUN: 1, LUNGE: 8, ASSIST: 5 },
  FREEZE: { SPEED: 22, RANGE: 20, HIT_R: 0.7, T: 1.4, HOMING: 2 },
  // dash sideways to dodge
  BANANA: { HIT_R: 0.6, LIFE: 25, STUN: 1.2, ARM_T: 0.4 },
  MAGNET: { T: 4.5, RANGE: 10, PULL: 26, YANK_R: 3.6, YANK_CHANCE: 0.55, YANK_EVERY: 0.6 },
  ENERGY: { T: 7, SPEED: 1.28 },
  GRAPPLE: {
    RANGE: 22,
    SPEED: 24,
    MAX_T: 1.3,
    ARRIVE: 1,
    STEAL_CHANCE: 0.75,
    KNOCKBACK: 9
  }
};
var FIRE = {
  STREAK: 3,
  // baskets in a row (without the other team scoring) to catch fire
  SPREAD_MUL: 0.35,
  // shot error multiplier while on fire
  MAX: 4
  // fire burns out after this many more baskets
};
var DEFENSE = {
  SWIPE_WINDUP: 0.11,
  // read + weight shift before the hand goes in
  SWIPE_ACTIVE: 0.1,
  SWIPE_RECOVER: 0.17,
  ARM_REACH: 0.98,
  // shoulder -> fingertips (horizontal), metres
  HAND_R: 0.16,
  LUNGE_REACH: 0.22,
  // extra reach from the lunge when planted
  LUNGE_V: 5.2,
  MISS_RECOVER: 0.55,
  // overreach: slowed and vulnerable to crossovers
  STEAL_CD: 0.75,
  BODY_SHIELD_R: 0.34,
  // ball handler's torso blocks reaches through it
  GRAB_DIST: 0.62,
  // ball this close to the reaching hand = clean pick-off
  STRIP_SPEED: 3.6,
  CHARGE_SPEED: 7.4,
  // sprinting into a set defender at this speed loses the ball
  CHARGE_CD: 1.2,
  STANCE_R: 3.4,
  // defenders this close to the ball handler slide in a stance
  STANCE_SPEED: 0.86,
  STANCE_ACCEL: 1.45,
  CONTEST_STAT: 0.35,
  // contest value that counts as a contested shot
  HANDS_UP: 0.55
  // fingertips above the head when jumping to block
};
var CROSSOVER = {
  TURN: 1.25,
  // radians of turning within the window that counts as a crossover
  WINDOW: 0.25,
  ANKLE_R: 2.2,
  // defender this close + mid-reach = ankle breaker
  ANKLE_STUN: 1
};
var MOVES = {
  DASH_V: 11,
  // burst speed (m/s)
  DASH_BALL_V: 9,
  // a bit less with the ball
  DASH_T: 0.2,
  DASH_CD: 1.3,
  DRIBBLE_V: 8.5,
  // Q / E dribble move: lateral burst + hand switch
  DRIBBLE_T: 0.22,
  DRIBBLE_CD: 0.85,
  SHAKE_R: 2.1,
  // defenders this close in front can get their ankles broken
  SHAKE_CHANCE: 0.3,
  SHAKE_REACH_BONUS: 0.45,
  // ...much likelier if they were reaching
  PASS_MIN_T: 0.28,
  PASS_SPEED: 15,
  CALL_T: 1.6,
  ASSIST_T: 4
};
var ROSTERS = {
  1: [["YOU"], ["BOT"]],
  2: [["YOU", "JAYDEN"], ["BLITZ", "ROOK"]],
  3: [["YOU", "JAYDEN", "MO"], ["BLITZ", "ROOK", "TANK"]]
};
var CHAOS = { FIRST_SPAWN: 1.2, RESPAWN: 2.2, FIRE_STREAK: 2 };
var MATCH = {
  DURATION: 120,
  COUNTDOWN: 2.4,
  RESET_DELAY: 1.8,
  BUZZER_GRACE: 3,
  STUCK_TIME: 0.9
};
var DIFFICULTY = {
  easy: {
    label: "EASY",
    think: 0.32,
    releaseSd: 0.22,
    stealRate: 0.12,
    stealCd: 2,
    contestReact: 0.34,
    contestJump: 0.35,
    guardGap: 1.9,
    patience: 1.6,
    speed: 0.9,
    itemUse: 0.3,
    plan: { three: 0.25, mid: 0.35, drive: 0.4 }
  },
  normal: {
    label: "NORMAL",
    think: 0.2,
    releaseSd: 0.15,
    stealRate: 0.22,
    stealCd: 1.4,
    contestReact: 0.22,
    contestJump: 0.55,
    guardGap: 1.5,
    patience: 1.1,
    speed: 0.97,
    itemUse: 0.6,
    plan: { three: 0.3, mid: 0.35, drive: 0.35 }
  },
  hard: {
    label: "HARD",
    think: 0.12,
    releaseSd: 0.09,
    stealRate: 0.35,
    stealCd: 1,
    contestReact: 0.13,
    contestJump: 0.75,
    guardGap: 1.2,
    patience: 0.8,
    speed: 1,
    itemUse: 0.9,
    plan: { three: 0.35, mid: 0.3, drive: 0.35 }
  }
};

// src/sim/Ball.js
var Ball = class {
  constructor() {
    this.reset(0, 3, 0);
  }
  reset(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.px = x;
    this.py = y;
    this.pz = z;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.spinX = 0;
    this.spinZ = 0;
    this.holder = null;
    this.shot = null;
    this.pass = null;
    this.lastPass = null;
    this.noPickup = /* @__PURE__ */ new Map();
    this.invalidHoop = null;
    this.restTimer = 0;
    this.onFloor = false;
    this.frozen = false;
    this.scoreLocked = false;
  }
  get speed() {
    return Math.hypot(this.vx, this.vy, this.vz);
  }
  step(dt, hoops) {
    const events = [];
    const n = PHYS.BALL_SUBSTEPS;
    const h = dt / n;
    const R = BALL.R;
    const LX = COURT.HALF_L + COURT.WALL_PAD;
    const LZ = COURT.HALF_W + COURT.WALL_PAD;
    this.onFloor = false;
    for (let i = 0; i < n; i++) {
      const prev = { x: this.x, y: this.y, z: this.z };
      this.vy -= PHYS.G_BALL * h;
      this.x += this.vx * h;
      this.y += this.vy * h;
      this.z += this.vz * h;
      if (this.y < R) {
        this.y = R;
        if (this.vy < 0) {
          if (this.vy < -1.2) events.push({ type: "bounce", speed: -this.vy });
          this.vy = -this.vy * BALL.REST_FLOOR;
          if (this.vy < 0.6) this.vy = 0;
        }
        this.onFloor = true;
        const f = Math.pow(BALL.ROLL_FRICTION, 1 / n);
        this.vx *= f;
        this.vz *= f;
      }
      if (Math.abs(this.x) > LX - R) {
        this.x = Math.sign(this.x) * (LX - R);
        if (this.vx * Math.sign(this.x) > 0) {
          this.vx = -this.vx * BALL.REST_WALL;
          events.push({ type: "wall" });
        }
      }
      if (Math.abs(this.z) > LZ - R) {
        this.z = Math.sign(this.z) * (LZ - R);
        if (this.vz * Math.sign(this.z) > 0) {
          this.vz = -this.vz * BALL.REST_WALL;
          events.push({ type: "wall" });
        }
      }
      for (const hoop of hoops) {
        const b = hoop.board;
        const cx = Math.max(b.x0, Math.min(this.x, b.x1));
        const cy = Math.max(b.y0, Math.min(this.y, b.y1));
        const cz = Math.max(b.z0, Math.min(this.z, b.z1));
        let dx = this.x - cx, dy = this.y - cy, dz = this.z - cz;
        let d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < R * R) {
          let d = Math.sqrt(d2);
          let nx, ny, nz;
          if (d < 1e-6) {
            nx = -hoop.dir;
            ny = 0;
            nz = 0;
            d = 0;
          } else {
            nx = dx / d;
            ny = dy / d;
            nz = dz / d;
          }
          this.x += nx * (R - d);
          this.y += ny * (R - d);
          this.z += nz * (R - d);
          const vn = this.vx * nx + this.vy * ny + this.vz * nz;
          if (vn < 0) {
            const k = (1 + BALL.REST_BOARD) * vn;
            this.vx -= k * nx;
            this.vy -= k * ny;
            this.vz -= k * nz;
            if (-vn > 1) events.push({ type: "board", hoop, speed: -vn });
          }
          if (this.shot) this.shot.touchedBoard = true;
        }
        let rx = this.x - hoop.rim.x;
        let rz = this.z - hoop.rim.z;
        let rh = Math.hypot(rx, rz);
        if (rh < 1e-5) {
          rx = 1;
          rz = 0;
          rh = 1;
        }
        const qx = hoop.rim.x + rx / rh * hoop.rimR;
        const qz = hoop.rim.z + rz / rh * hoop.rimR;
        dx = this.x - qx;
        dy = this.y - hoop.rim.y;
        dz = this.z - qz;
        d2 = dx * dx + dy * dy + dz * dz;
        const minD = R + HOOP.TUBE_R;
        if (d2 < minD * minD) {
          const d = Math.sqrt(d2) || 1e-6;
          const nx = dx / d, ny = dy / d, nz = dz / d;
          this.x += nx * (minD - d);
          this.y += ny * (minD - d);
          this.z += nz * (minD - d);
          const vn = this.vx * nx + this.vy * ny + this.vz * nz;
          if (vn < 0) {
            const k = (1 + BALL.REST_RIM) * vn;
            this.vx -= k * nx;
            this.vy -= k * ny;
            this.vz -= k * nz;
            this.vx *= 0.95;
            this.vy *= 0.95;
            this.vz *= 0.95;
            if (-vn > 0.8) {
              events.push({ type: "rim", hoop, speed: -vn });
              hoop.rimShake = Math.min(1, hoop.rimShake - vn / 8);
            }
          }
          if (this.shot) this.shot.touchedRim = true;
        }
        const ry = hoop.rim.y;
        if ((prev.y - ry) * (this.y - ry) <= 0 && prev.y !== this.y) {
          const t = (ry - prev.y) / (this.y - prev.y);
          const xc = prev.x + (this.x - prev.x) * t;
          const zc = prev.z + (this.z - prev.z) * t;
          if (Math.hypot(xc - hoop.rim.x, zc - hoop.rim.z) < hoop.openR - R * 0.35) {
            events.push({ type: "cross", hoop, dir: this.y < prev.y ? "down" : "up" });
          }
        }
        const below = hoop.rim.y - this.y;
        if (below > 0 && below < HOOP.NET_DEPTH && Math.hypot(this.x - hoop.rim.x, this.z - hoop.rim.z) < hoop.openR) {
          const f = Math.pow(0.85, 1 / n);
          this.vx *= f;
          this.vz *= f;
          this.vx += (hoop.rim.x - this.x) * 9 * h;
          this.vz += (hoop.rim.z - this.z) * 9 * h;
          if (this.vy < -3) this.vy *= Math.pow(0.97, 1 / n);
          hoop.netSway.vx += this.vx * 0.05;
          hoop.netSway.vz += this.vz * 0.05;
        }
      }
    }
    this.spinX += this.vz / BALL.R * dt;
    this.spinZ -= this.vx / BALL.R * dt;
    return events;
  }
};

// src/sim/Hoop.js
var Hoop = class {
  constructor(dir, attackTeam) {
    this.dir = dir;
    this.attackTeam = attackTeam;
    this.boardX = dir * HOOP.BOARD_X;
    this.board = {
      x0: dir > 0 ? this.boardX : this.boardX - HOOP.BOARD_THICK,
      x1: dir > 0 ? this.boardX + HOOP.BOARD_THICK : this.boardX,
      y0: HOOP.BOARD_BOTTOM,
      y1: HOOP.BOARD_TOP,
      z0: -HOOP.BOARD_W / 2,
      z1: HOOP.BOARD_W / 2
    };
    this.rim = { x: this.boardX - dir * (HOOP.RIM_OFFSET + HOOP.RIM_R), y: HOOP.RIM_Y, z: 0 };
    this.rimR = HOOP.RIM_R;
    this.openR = HOOP.RIM_R - HOOP.TUBE_R;
    this.netSway = { x: 0, z: 0, vx: 0, vz: 0 };
    this.rimShake = 0;
  }
  stepVisual(dt) {
    const s = this.netSway;
    s.vx += -s.x * 180 * dt;
    s.vz += -s.z * 180 * dt;
    const damp = Math.exp(-7 * dt);
    s.vx *= damp;
    s.vz *= damp;
    s.x += s.vx * dt;
    s.z += s.vz * dt;
    this.rimShake *= Math.exp(-10 * dt);
  }
  /** Point on the court floor in front of this hoop at distance d and angle a
   *  (a = 0 straight out toward centre court). Used by the AI for spots. */
  spot(d, a) {
    return { x: this.rim.x - this.dir * Math.cos(a) * d, y: 0, z: Math.sin(a) * d };
  }
};

// src/sim/rng.js
function makeRng(seed = Date.now() >>> 0) {
  let s = seed >>> 0;
  const next = () => {
    s = s + 1831565813 >>> 0;
    let t = s;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  return {
    next,
    range: (a, b) => a + (b - a) * next(),
    chance: (p) => next() < p,
    sign: () => next() < 0.5 ? -1 : 1,
    // Approximate normal distribution (Box-Muller)
    normal: (mean = 0, sd = 1) => {
      const u = Math.max(1e-9, next());
      const v = next();
      return mean + sd * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    },
    pick: (weights) => {
      const total = Object.values(weights).reduce((a, b) => a + b, 0);
      let r = next() * total;
      for (const [k, w] of Object.entries(weights)) {
        if ((r -= w) <= 0) return k;
      }
      return Object.keys(weights)[0];
    }
  };
}
var clamp = (v, a, b) => v < a ? a : v > b ? b : v;

// src/sim/vec.js
var wrapAngle = (a) => {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
};

// src/sim/Player.js
var JET = ITEMS.JETPACK;
var ENERGY_SPEED = ITEMS.ENERGY.SPEED;
function emptyIntent() {
  return {
    mx: 0,
    mz: 0,
    // desired move direction (world x/z), length <= 1
    sprint: false,
    jump: false,
    // pressed this tick
    dash: false,
    move: 0,
    // dribble move: -1 left, +1 right
    pass: false,
    passDir: null,
    // {x, z} preferred pass direction (camera forward)
    call: false,
    // call for the ball
    shootDown: false,
    shootHeld: false,
    steal: false,
    useItem: false,
    aim: null
    // world point the player is aiming at (for the grappling hook)
  };
}
var Player = class {
  constructor(id, team, opts = {}) {
    this.id = id;
    this.team = team;
    this.isHuman = !!opts.isHuman;
    this.name = opts.name || `P${id}`;
    this.speedMul = opts.speedMul || 1;
    this.stats = { pts: 0, fga: 0, fgm: 0, tpa: 0, tpm: 0, stl: 0, blk: 0, reb: 0, dunks: 0, ast: 0, tov: 0, ctst: 0, forced: 0 };
    this.look = opts.look ?? id;
    this.item = null;
    this.streak = 0;
    this.fire = 0;
    this.place(0, 0, team === 0 ? 0 : Math.PI);
  }
  place(x, z, yaw) {
    this.x = x;
    this.y = 0;
    this.z = z;
    this.px = x;
    this.py = 0;
    this.pz = z;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.yaw = yaw;
    this.onGround = true;
    this.state = "free";
    this.stateT = 0;
    this.meter = 0;
    this.stamina = 1;
    this.sprinting = false;
    this.stealCd = 0;
    this.reachT = 0;
    this.swipeT = 0;
    this.landT = 0;
    this.shootLock = 0;
    this.stunT = 0;
    this.runPhase = 0;
    this.dribble = 0;
    this.jetT = 0;
    this.magnetT = 0;
    this.magnetTick = 0;
    this.energyT = 0;
    this.frozenT = 0;
    this.hand = 1;
    this.turnLog = [];
    this.crossT = 0;
    this.dashT = 0;
    this.dashCd = 0;
    this.moveCd = 0;
    this.callT = 0;
    this.passT = 0;
    this.moveT = 0;
    this.moveSide = 1;
    this.anklesT = 0;
    this.slipT = 0;
    this.swipe = null;
    this.strippedT = 0;
    this.stance = false;
    this.faceX = 0;
    this.faceZ = 0;
    this.chargeCd = 0;
    this.stumbleT = 0;
    this.blockT = 0;
  }
  get top() {
    return this.y + PLAYER.H;
  }
  get fx() {
    return Math.cos(this.yaw);
  }
  get fz() {
    return Math.sin(this.yaw);
  }
  faceTowards(x, z) {
    this.yaw = Math.atan2(z - this.z, x - this.x);
  }
  stepMovement(dt, intent) {
    const busy = this.state !== "free";
    let mx = busy ? 0 : intent.mx;
    let mz = busy ? 0 : intent.mz;
    const ml = Math.hypot(mx, mz);
    if (ml > 1) {
      mx /= ml;
      mz /= ml;
    }
    const wantSprint = intent.sprint && ml > 0.1 && this.onGround;
    if (this.energyT > 0) {
      this.sprinting = wantSprint;
      this.stamina = 1;
    } else if (wantSprint && (this.sprinting || this.stamina > PLAYER.STAMINA_MIN) && this.stamina > 0) {
      this.sprinting = true;
      this.stamina = Math.max(0, this.stamina - PLAYER.STAMINA_DRAIN * dt);
    } else {
      this.sprinting = false;
      this.stamina = Math.min(1, this.stamina + PLAYER.STAMINA_REGEN * dt);
    }
    if (this.state === "grapple" || this.state === "dunk") {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.z += this.vz * dt;
    } else if (this.dashT > 0) {
      this.dashT -= dt;
      this.vy -= PHYS.G_PLAYER * dt;
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.z += this.vz * dt;
    } else {
      let maxV = (this.sprinting ? PLAYER.SPRINT : PLAYER.RUN) * this.speedMul;
      if (this.stance) maxV *= DEFENSE.STANCE_SPEED;
      if (this.energyT > 0) maxV *= ENERGY_SPEED;
      if (this.reachT > 0) maxV *= PLAYER.REACH_SLOW;
      if (this.state === "stunned" || this.state === "frozen") maxV = 0;
      const jetting = this.jetT > 0;
      const accel = (this.onGround || jetting ? PLAYER.ACCEL * (this.stance ? DEFENSE.STANCE_ACCEL : 1) : PLAYER.AIR_ACCEL) * dt;
      if (ml > 0.05) {
        const tx = mx * maxV, tz = mz * maxV;
        let dvx = tx - this.vx, dvz = tz - this.vz;
        const dl = Math.hypot(dvx, dvz);
        if (dl > accel) {
          dvx *= accel / dl;
          dvz *= accel / dl;
        }
        this.vx += dvx;
        this.vz += dvz;
        if (!busy && !this.stance) {
          const target = Math.atan2(mz, mx);
          this.yaw += wrapAngle(target - this.yaw) * Math.min(1, PLAYER.TURN_RATE * dt);
        }
      } else if (this.onGround && this.state !== "layup") {
        const sp = Math.hypot(this.vx, this.vz);
        const f = PLAYER.FRICTION * dt;
        if (sp <= f) {
          this.vx = 0;
          this.vz = 0;
        } else {
          this.vx -= this.vx / sp * f;
          this.vz -= this.vz / sp * f;
        }
      }
      if (this.stance && !busy) {
        const target = Math.atan2(this.faceZ - this.z, this.faceX - this.x);
        this.yaw += wrapAngle(target - this.yaw) * Math.min(1, PLAYER.TURN_RATE * 1.2 * dt);
      }
      if (intent.jump && this.onGround && !busy) {
        this.vy = PLAYER.JUMP_V;
        this.onGround = false;
      }
      if (jetting && this.state !== "frozen") {
        this.vy = Math.min(JET.MAX_VY, this.vy + JET.THRUST * dt);
        if (this.y > JET.CEILING) this.vy = Math.min(this.vy, PHYS.G_PLAYER * dt);
        this.onGround = false;
      }
      this.vy -= PHYS.G_PLAYER * dt;
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.z += this.vz * dt;
    }
    if (this.y <= 0) {
      if (!this.onGround && this.vy < -4) this.landT = 0.12;
      this.y = 0;
      this.vy = Math.max(0, this.vy);
      this.onGround = true;
    } else {
      this.onGround = false;
    }
    const LX = COURT.HALF_L - PLAYER.R, LZ = COURT.HALF_W - PLAYER.R;
    if (Math.abs(this.x) > LX) {
      this.x = Math.sign(this.x) * LX;
      this.vx = 0;
    }
    if (Math.abs(this.z) > LZ) {
      this.z = Math.sign(this.z) * LZ;
      this.vz = 0;
    }
    this.stealCd = Math.max(0, this.stealCd - dt);
    this.reachT = Math.max(0, this.reachT - dt);
    this.swipeT = Math.max(0, this.swipeT - dt);
    this.landT = Math.max(0, this.landT - dt);
    this.shootLock = Math.max(0, this.shootLock - dt);
    if (this.state === "stunned") {
      this.stunT -= dt;
      if (this.stunT <= 0) this.state = "free";
    }
    if (this.state === "frozen") {
      this.frozenT -= dt;
      if (this.frozenT <= 0) this.state = "free";
    }
    this.jetT = Math.max(0, this.jetT - dt);
    this.magnetT = Math.max(0, this.magnetT - dt);
    this.energyT = Math.max(0, this.energyT - dt);
    this.crossT = Math.max(0, this.crossT - dt);
    this.anklesT = Math.max(0, this.anklesT - dt);
    this.slipT = Math.max(0, this.slipT - dt);
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.moveCd = Math.max(0, this.moveCd - dt);
    this.callT = Math.max(0, this.callT - dt);
    this.passT = Math.max(0, this.passT - dt);
    this.moveT = Math.max(0, this.moveT - dt);
    this.strippedT = Math.max(0, this.strippedT - dt);
    this.chargeCd = Math.max(0, this.chargeCd - dt);
    this.stumbleT = Math.max(0, this.stumbleT - dt);
    this.blockT = Math.max(0, this.blockT - dt);
    if (this.onGround) this.runPhase += Math.hypot(this.vx, this.vz) * dt * 1.6;
    this.stamina = clamp(this.stamina, 0, 1);
  }
};

// src/sim/ShotSolver.js
function solveArc(s, t, arc) {
  const g = PHYS.G_BALL;
  const apexY = Math.max(s.y, t.y) + arc;
  const vy = Math.sqrt(2 * g * Math.max(0.01, apexY - s.y));
  const disc = vy * vy - 2 * g * (t.y - s.y);
  const time = (vy + Math.sqrt(Math.max(0, disc))) / g;
  const T = Math.max(0.05, time);
  return { vx: (t.x - s.x) / T, vy, vz: (t.z - s.z) / T, t: T };
}
function arcForDistance(d, kind) {
  if (kind === "layup") return 0.55 + d * 0.12;
  return 0.8 + d * 0.3;
}
function meterToQuality(m) {
  const off = Math.max(0, Math.abs(m - SHOT.SWEET_CENTER) - SHOT.SWEET_HALF);
  return clamp(1 - off * SHOT.FALLOFF, 0, 1);
}
function qualityLabel(q, m) {
  if (q >= 0.97) return "PERFECT";
  if (q >= 0.78) return "GOOD";
  return m < SHOT.SWEET_CENTER ? "EARLY" : "LATE";
}
function shotSpread(q, contest, kind) {
  if (kind === "layup") return { base: 6e-3, timing: (1 - q) * 0.08, contest: contest * 0.15, side: 0.01 + contest * 0.03 };
  return { base: 5e-3, timing: (1 - q) * 0.12, contest: contest * 0.03, side: 4e-3 + (1 - q) * 0.02 + contest * 0.02 };
}

// src/sim/Items.js
var ITEM_POOL = Object.keys(ITEMS.POOL);
function rollItem(rng, pool = null) {
  let w = ITEMS.POOL;
  if (pool && pool.length) {
    w = {};
    for (const k of pool) if (ITEMS.POOL[k]) w[k] = ITEMS.POOL[k];
    if (!Object.keys(w).length) w = ITEMS.POOL;
  }
  return rng.pick(w);
}
function useItem(m, p, aim) {
  const item = p.item;
  if (!item) return false;
  switch (item) {
    case "grapple":
      return m.fireGrapple(p, aim);
    // lives on Match (it predates this module)
    case "jetpack":
      p.item = null;
      p.jetT = ITEMS.JETPACK.T;
      if (p.onGround) {
        p.vy = 4;
        p.onGround = false;
      }
      m.emit({ type: "useItem", item, player: p });
      return true;
    case "punch":
      return rocketPunch(m, p, aim);
    case "freeze":
      return freezeRay(m, p, aim);
    case "banana": {
      p.item = null;
      m.traps.push({ kind: "banana", x: p.x - p.fx * 0.9, z: p.z - p.fz * 0.9, owner: p, life: ITEMS.BANANA.LIFE, armT: ITEMS.BANANA.ARM_T, id: m.nextId++ });
      m.emit({ type: "useItem", item, player: p });
      return true;
    }
    case "magnet":
      p.item = null;
      p.magnetT = ITEMS.MAGNET.T;
      p.magnetTick = 0;
      m.emit({ type: "useItem", item, player: p });
      return true;
    case "energy":
      p.item = null;
      p.energyT = ITEMS.ENERGY.T;
      p.stamina = 1;
      m.emit({ type: "useItem", item, player: p });
      return true;
  }
  return false;
}
function faceTarget(m, p, aim, maxD) {
  let best = null, bestScore = Infinity;
  const ax = aim ? aim.x - p.x : p.fx, az = aim ? aim.z - p.z : p.fz;
  const al = Math.hypot(ax, az) || 1;
  for (const o of m.opponents(p)) {
    const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz);
    if (d > maxD) continue;
    const cos = (dx * ax + dz * az) / ((d || 1) * al);
    if (cos < 0.35) continue;
    const score = d * (2 - cos);
    if (score < bestScore) {
      bestScore = score;
      best = o;
    }
  }
  if (best) p.faceTowards(best.x, best.z);
  else if (aim) p.faceTowards(aim.x, aim.z);
  return best;
}
function rocketPunch(m, p, aim) {
  if (p.state !== "free") return false;
  const P = ITEMS.PUNCH;
  p.item = null;
  faceTarget(m, p, aim, P.ASSIST);
  p.state = "punch";
  p.stateT = 0;
  p.punchDone = false;
  m.emit({ type: "useItem", item: "punch", player: p });
  return true;
}
function freezeRay(m, p, aim) {
  const F = ITEMS.FREEZE;
  p.item = null;
  const target = faceTarget(m, p, aim, F.RANGE);
  const sx = p.x + p.fx * 0.6, sy = p.y + 1.4, sz = p.z + p.fz * 0.6;
  let tx, ty, tz;
  if (target) {
    tx = target.x;
    ty = target.y + 1.1;
    tz = target.z;
  } else if (aim) {
    tx = aim.x;
    ty = Math.max(0.6, aim.y);
    tz = aim.z;
  } else {
    tx = sx + p.fx * 10;
    ty = sy;
    tz = sz + p.fz * 10;
  }
  const dx = tx - sx, dy = ty - sy, dz = tz - sz, d = Math.hypot(dx, dy, dz) || 1;
  m.projectiles.push({
    kind: "freeze",
    id: m.nextId++,
    owner: p,
    target,
    x: sx,
    y: sy,
    z: sz,
    px: sx,
    py: sy,
    pz: sz,
    vx: dx / d * F.SPEED,
    vy: dy / d * F.SPEED,
    vz: dz / d * F.SPEED,
    life: F.RANGE / F.SPEED
  });
  m.emit({ type: "useItem", item: "freeze", player: p });
  return true;
}
function updateItems(m, dt) {
  const ball = m.ball;
  for (const p of m.players) {
    if (p.state === "punch") {
      const P = ITEMS.PUNCH;
      p.stateT += dt;
      if (!p.punchDone && p.stateT >= P.WINDUP) {
        p.punchDone = true;
        if (p.onGround) {
          p.vx = p.fx * P.LUNGE;
          p.vz = p.fz * P.LUNGE;
        }
        let hit = null;
        for (const o of m.opponents(p)) {
          const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz);
          if (d > P.RANGE || Math.abs(o.y - p.y) > 1.6) continue;
          if ((dx * p.fx + dz * p.fz) / (d || 1) < P.CONE) continue;
          hit = o;
          m.knock(o, p.fx, p.fz, P.POWER, P.STUN, p);
        }
        m.emit({ type: "punch", player: p, victim: hit });
      }
      if (p.stateT >= P.WINDUP + P.RECOVER) p.state = "free";
    }
    if (p.magnetT > 0) {
      const M = ITEMS.MAGNET;
      if (!ball.holder && !ball.scoreLocked && !ball.frozen) {
        const dx = p.x - ball.x, dy = p.y + 1.1 - ball.y, dz = p.z - ball.z, d = Math.hypot(dx, dy, dz);
        if (d < M.RANGE && d > 0.3) {
          const k = M.PULL * dt / d;
          ball.vx += dx * k;
          ball.vy += dy * k + 12 * dt * 0.6;
          ball.vz += dz * k;
          const damp = Math.exp(-2.5 * dt);
          ball.vx *= damp;
          ball.vz *= damp;
          if (ball.shot && ball.shot.team !== p.team) ball.shot.blocked = true;
        }
      } else if (ball.holder && ball.holder.team !== p.team) {
        p.magnetTick -= dt;
        if (p.magnetTick <= 0) {
          p.magnetTick = M.YANK_EVERY;
          const c = ball.holder;
          if (Math.hypot(c.x - p.x, c.z - p.z) < M.YANK_R && c.state !== "dunk" && c.state !== "shooting" && !m.ballShielded(p.x, p.z, c)) {
            m.popLoose(c, p, "magnet");
            p.stats.stl++;
            p.stats.forced++;
            c.stats.tov++;
            c.strippedT = 0.7;
            m.emit({ type: "steal", player: p, victim: c, magnet: true });
          }
        }
      }
    }
  }
  for (const pr of m.projectiles) {
    const F = ITEMS.FREEZE;
    pr.px = pr.x;
    pr.py = pr.y;
    pr.pz = pr.z;
    if (pr.target && pr.target.state !== "frozen") {
      const tx = pr.target.x - pr.x, ty = pr.target.y + 1.1 - pr.y, tz = pr.target.z - pr.z, td = Math.hypot(tx, ty, tz) || 1;
      const sp = Math.hypot(pr.vx, pr.vy, pr.vz);
      const t = Math.min(1, F.HOMING * dt);
      pr.vx += (tx / td * sp - pr.vx) * t;
      pr.vy += (ty / td * sp - pr.vy) * t;
      pr.vz += (tz / td * sp - pr.vz) * t;
    }
    pr.x += pr.vx * dt;
    pr.y += pr.vy * dt;
    pr.z += pr.vz * dt;
    pr.life -= dt;
    if (pr.y < 0.1) pr.life = 0;
    for (const o of m.players) {
      if (o.team === pr.owner.team || o.state === "frozen") continue;
      if (Math.hypot(o.x - pr.x, o.z - pr.z) < F.HIT_R && pr.y > o.y - 0.2 && pr.y < o.top + 0.3) {
        freezePlayer(m, o, pr.owner);
        pr.life = 0;
        break;
      }
    }
    if (pr.life <= 0) m.emit({ type: "projectileEnd", id: pr.id, x: pr.x, y: pr.y, z: pr.z });
  }
  m.projectiles = m.projectiles.filter((pr) => pr.life > 0);
  for (const t of m.traps) {
    t.life -= dt;
    t.armT -= dt;
    if (t.armT > 0) continue;
    for (const o of m.players) {
      if (o.team === t.owner.team || !o.onGround || o.state === "dunk" || o.state === "grapple") continue;
      if (Math.hypot(o.x - t.x, o.z - t.z) < ITEMS.BANANA.HIT_R + PLAYER.R * 0.5) {
        const sp = Math.hypot(o.vx, o.vz);
        const nx = sp > 0.5 ? o.vx / sp : o.fx, nz = sp > 0.5 ? o.vz / sp : o.fz;
        m.knock(o, nx, nz, 3.5 + sp * 0.4, ITEMS.BANANA.STUN, t.owner);
        o.slipT = 0.8;
        t.life = 0;
        m.emit({ type: "slip", player: o, owner: t.owner, x: t.x, z: t.z, id: t.id });
        break;
      }
    }
  }
  m.traps = m.traps.filter((t) => {
    if (t.life <= 0) {
      m.emit({ type: "trapGone", id: t.id });
      return false;
    }
    return true;
  });
}
function freezePlayer(m, o, by) {
  if (o.state === "dunk") return;
  if (o.state === "grapple") o.state = "free";
  if (m.ball.holder === o) m.popLoose(o, { x: o.x - o.fx, z: o.z - o.fz }, "freeze");
  o.state = "frozen";
  o.frozenT = ITEMS.FREEZE.T;
  o.vx = 0;
  o.vz = 0;
  o.jetT = 0;
  o.meter = 0;
  m.emit({ type: "frozen", player: o, by });
}

// src/sim/Match.js
var Match = class {
  constructor(opts = {}) {
    this.difficulty = opts.difficulty || "normal";
    this.duration = opts.duration ?? MATCH.DURATION;
    this.rng = makeRng(opts.seed ?? Math.random() * 2 ** 32 >>> 0);
    this.hoops = [new Hoop(1, 0), new Hoop(-1, 1)];
    const diff = DIFFICULTY[this.difficulty] || DIFFICULTY.normal;
    this.practice = !!opts.practice;
    this.chaos = !!opts.chaos;
    this.teamSize = this.practice ? 1 : [1, 2, 3].includes(opts.teamSize) ? opts.teamSize : 1;
    const roster = this.practice ? [["YOU"], []] : ROSTERS[this.teamSize];
    this.itemPools = opts.itemPools || {};
    this.boxRespawn = this.chaos ? CHAOS.RESPAWN : ITEMS.RESPAWN;
    this.fireStreak = this.chaos ? CHAOS.FIRE_STREAK : FIRE.STREAK;
    this.players = opts.players || [];
    if (!opts.players) {
      let id = 0;
      for (const team of [0, 1]) {
        roster[team].forEach((name, i) => {
          this.players.push(new Player(id, team, {
            isHuman: team === 0 && i === 0,
            name,
            speedMul: team === 1 ? diff.speed : 1,
            look: (opts.lookSeed ?? 0) + id * 7 + (team ? 3 : 0)
          }));
          id++;
        });
      }
    }
    this.ball = new Ball();
    this.box = { active: false, x: 0, z: 0, t: this.chaos ? CHAOS.FIRST_SPAWN : ITEMS.FIRST_SPAWN, spin: 0 };
    this.itemsEnabled = opts.items ?? true;
    this.projectiles = [];
    this.traps = [];
    this.nextId = 1;
    this.score = [0, 0];
    this.clock = this.duration;
    this.time = 0;
    this.overtime = false;
    this.winner = null;
    this.stops = [0, 0];
    this.possTeam = null;
    this.events = [];
    this.setupTipoff();
  }
  // ---- helpers ---------------------------------------------------------------
  attackHoop(team) {
    return this.hoops.find((h) => h.attackTeam === team);
  }
  defendHoop(team) {
    return this.hoops.find((h) => h.attackTeam !== team);
  }
  teamPlayers(team) {
    return this.players.filter((p) => p.team === team);
  }
  opponents(p) {
    return this.players.filter((o) => o.team !== p.team);
  }
  emit(e) {
    this.events.push(e);
  }
  drainEvents() {
    const e = this.events;
    this.events = [];
    return e;
  }
  get controlsLive() {
    return this.state === "live";
  }
  get movementAllowed() {
    return ["live", "scored", "buzzer", "final"].includes(this.state);
  }
  setupTipoff() {
    this.possTeam = null;
    this.players.forEach((p) => {
      const idx = this.teamPlayers(p.team).indexOf(p);
      const side = p.team === 0 ? -1 : 1;
      const spots = [[2.4, 0], [5.2, -3.8], [5.2, 3.8]];
      const [ax, az] = spots[idx] || [6, 0];
      p.place(side * ax, az, p.team === 0 ? 0 : Math.PI);
    });
    this.ball.reset(0, 2.6, 0);
    this.ball.frozen = true;
    this.state = "countdown";
    this.stateT = MATCH.COUNTDOWN;
  }
  // ---- main step -----------------------------------------------------------------
  update(dt, intents) {
    this.time += dt;
    const ball = this.ball;
    for (const p of this.players) {
      p.px = p.x;
      p.py = p.y;
      p.pz = p.z;
    }
    ball.px = ball.x;
    ball.py = ball.y;
    ball.pz = ball.z;
    for (const h of this.hoops) h.stepVisual(dt);
    this.box.spin += dt;
    if (this.state === "ended") return;
    if (this.state === "countdown") {
      this.stateT -= dt;
      if (this.stateT <= 0) {
        this.state = "live";
        ball.frozen = false;
        ball.vy = 7.6;
        ball.vx = this.rng.range(-0.3, 0.3);
        ball.vz = this.rng.range(-0.3, 0.3);
        this.emit({ type: "tipoff" });
      }
      return;
    }
    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      const intent = this.movementAllowed ? intents[i] || emptyIntent() : emptyIntent();
      if (this.controlsLive) this.handleActions(p, intent, dt);
      this.updateSpecial(p, dt);
      this.updateStance(p, intent);
      p.stepMovement(dt, intent);
      if (p.swipe) this.updateSwipe(p, dt);
    }
    this.separatePlayers();
    updateItems(this, dt);
    if (this.itemsEnabled && this.state === "live") this.updateItemBox(dt);
    if (ball.holder) {
      this.positionHeldBall(ball.holder, dt);
    } else if (!ball.frozen) {
      for (const ev of ball.step(dt, this.hoops)) this.handleBallEvent(ev);
      this.checkBlocks();
      this.checkPickups();
      this.checkStuck(dt);
    }
    if (!Number.isFinite(ball.x + ball.y + ball.z)) {
      ball.reset(0, 3, 0);
      this.emit({ type: "nudge" });
    }
    if (ball.invalidHoop) {
      const h = ball.invalidHoop;
      if (ball.y < h.rim.y - 0.8 || Math.hypot(ball.x - h.rim.x, ball.z - h.rim.z) > 1) ball.invalidHoop = null;
    }
    switch (this.state) {
      case "live":
        if (!this.overtime && !this.practice) {
          this.clock -= dt;
          if (this.clock <= 0) this.onClockExpired();
        }
        break;
      case "scored":
        this.stateT -= dt;
        if (this.stateT <= 0) this.resetAfterScore();
        break;
      case "buzzer":
        this.stateT -= dt;
        if (ball.onFloor || ball.holder || this.stateT <= 0 || ball.shot && ball.shot.blocked) this.endRegulation();
        break;
      case "final":
        this.stateT -= dt;
        if (this.stateT <= 0) this.finish();
        break;
    }
  }
  // ---- actions -------------------------------------------------------------------
  handleActions(p, intent, dt) {
    const ball = this.ball;
    const holding = ball.holder === p;
    if (p.state === "shooting") {
      p.stateT += dt;
      p.meter = p.stateT / SHOT.METER_FILL;
      if (!intent.shootHeld || p.meter >= SHOT.METER_MAX) {
        const q = meterToQuality(p.meter);
        this.releaseShot(p, q, "jump", qualityLabel(q, p.meter), p.meter);
      }
      return;
    }
    if (p.state === "layup") {
      p.stateT += dt;
      if (p.stateT >= 0.26) this.releaseShot(p, p.isHuman ? 0.94 : p.layupQ ?? 0.9, "layup", "LAYUP");
      return;
    }
    if (p.state !== "free") return;
    if (intent.useItem && p.item) useItem(this, p, intent.aim);
    if (p.state !== "free") return;
    if (intent.call) this.callForBall(p);
    if (intent.dash) this.dash(p, intent);
    if (intent.move && holding) this.dribbleMove(p, intent.move);
    if (intent.pass && holding) {
      if (this.pass(p, intent.passDir)) return;
    }
    if (intent.shootDown && p.shootLock <= 0) {
      if (holding) {
        const hoop = this.attackHoop(p.team);
        const d = Math.hypot(hoop.rim.x - p.x, hoop.rim.z - p.z);
        const highUp = !p.onGround && p.top + PLAYER.REACH > hoop.rim.y - 0.5;
        if (highUp && d < SHOT.DUNK_RANGE + 1 || d < SHOT.DUNK_RANGE && (this.contestOn(p) < 0.5 || p.fire > 0)) this.startDunk(p, hoop, false);
        else if (d < SHOT.LAYUP_RANGE) this.startLayup(p, hoop);
        else this.startJumpShot(p);
        return;
      }
      this.attemptSteal(p);
    }
    if (intent.steal) this.attemptSteal(p);
  }
  /** Grapple / dunk motion, driven here instead of by player input. */
  updateSpecial(p, dt) {
    if (p.state === "grapple") {
      const g = p.grapple;
      g.t += dt;
      if (g.ref && g.kind !== "player") {
        g.target = { x: g.ref.x, y: g.ref.y || 0, z: g.ref.z };
      }
      const cx = p.x, cy = p.y + 1.1, cz = p.z;
      const dx = g.target.x - cx, dy = g.target.y - cy, dz = g.target.z - cz;
      const d = Math.hypot(dx, dy, dz) || 1e-6;
      const sp = ITEMS.GRAPPLE.SPEED;
      p.vx = dx / d * sp;
      p.vy = dy / d * sp;
      p.vz = dz / d * sp;
      p.yaw = Math.atan2(dz, dx);
      if (d < ITEMS.GRAPPLE.ARRIVE || g.t > ITEMS.GRAPPLE.MAX_T) {
        let arrived = d < ITEMS.GRAPPLE.ARRIVE + 0.3;
        if (g.kind === "player" && g.ref) arrived = arrived && Math.hypot(g.ref.x - p.x, g.ref.z - p.z) < ITEMS.GRAPPLE.ARRIVE + 0.7;
        if (g.kind === "player" && !arrived) this.emit({ type: "dodge", player: g.ref, by: p });
        this.endGrapple(p, arrived);
      }
      return;
    }
    if (p.state === "dunk") {
      const k = p.dunk;
      k.t += dt;
      const e = Math.min(1, k.t / k.T);
      const ease = 1 - (1 - e) * (1 - e);
      const nx = k.sx + (k.tx - k.sx) * ease;
      const nz = k.sz + (k.tz - k.sz) * ease;
      const ny = k.sy + (k.ty - k.sy) * ease + Math.sin(Math.PI * e) * k.lift;
      p.vx = (nx - p.x) / dt;
      p.vy = (ny - p.y) / dt;
      p.vz = (nz - p.z) / dt;
      if (e >= 1 && !k.slammed) this.slam(p);
      if (k.slammed) {
        p.vx = 0;
        p.vz = 0;
        p.vy = 0;
        k.hang -= dt;
        if (k.hang <= 0) {
          p.state = "free";
          p.vy = -1;
          p.onGround = false;
        }
      }
    }
  }
  startJumpShot(p) {
    const hoop = this.attackHoop(p.team);
    p.state = "shooting";
    p.stateT = 0;
    p.meter = 0;
    p.faceTowards(hoop.rim.x, hoop.rim.z);
    if (p.onGround) {
      p.vy = PLAYER.SHOT_JUMP_V;
      p.onGround = false;
    }
    p.vx *= 0.3;
    p.vz *= 0.3;
    this.emit({ type: "gather", player: p });
  }
  startLayup(p, hoop) {
    p.state = "layup";
    p.stateT = 0;
    p.faceTowards(hoop.rim.x, hoop.rim.z);
    if (p.onGround) {
      p.vy = PLAYER.LAYUP_JUMP_V;
      p.onGround = false;
    }
    const dx = hoop.rim.x - p.x, dz = hoop.rim.z - p.z, d = Math.hypot(dx, dz);
    const carry = Math.min(4.5, d * 2);
    p.vx = dx / d * carry;
    p.vz = dz / d * carry;
    this.emit({ type: "gather", player: p, layup: true });
  }
  /** Fly up to the rim and throw it down. `fromGrapple` = instant, flashier. */
  startDunk(p, hoop, fromGrapple) {
    const dx = hoop.rim.x - p.x, dz = hoop.rim.z - p.z, d = Math.hypot(dx, dz) || 1;
    const tx = hoop.rim.x - dx / d * 0.42, tz = hoop.rim.z - dz / d * 0.42;
    const ty = hoop.rim.y + 0.3 - PLAYER.H - PLAYER.REACH;
    p.state = "dunk";
    p.dunk = {
      sx: p.x,
      sy: p.y,
      sz: p.z,
      tx,
      ty: Math.max(ty, 0.2),
      tz,
      t: 0,
      T: fromGrapple ? 0.16 : 0.42,
      lift: fromGrapple ? 0 : 0.5,
      hang: 0.28,
      slammed: false,
      hoop,
      fromGrapple
    };
    p.faceTowards(hoop.rim.x, hoop.rim.z);
    this.emit({ type: "gather", player: p, dunk: true });
  }
  slam(p) {
    const k = p.dunk;
    const hoop = k.hoop;
    const ball = this.ball;
    k.slammed = true;
    if (ball.holder !== p) return;
    for (const o of p.fire > 0 ? [] : this.opponents(p)) {
      if (o.state === "stunned" || o.state === "frozen") continue;
      const near = Math.hypot(o.x - hoop.rim.x, o.z - hoop.rim.z) < 1.15;
      const high = !o.onGround && o.top + DEFENSE.HANDS_UP > hoop.rim.y + 0.1;
      if (near && high) {
        ball.holder = null;
        ball.x = hoop.rim.x - hoop.dir * 0.5;
        ball.y = hoop.rim.y + 0.4;
        ball.z = hoop.rim.z;
        ball.vx = -hoop.dir * 6;
        ball.vy = 2;
        ball.vz = clamp((hoop.rim.z - o.z) * 3, -2.5, 2.5);
        o.stats.forced++;
        o.blockT = 0.4;
        ball.shot = { shooter: p, team: p.team, hoop, kind: "dunk", blocked: true, releaseT: this.time, resolved: true };
        o.stats.blk++;
        p.stats.fga++;
        this.emit({ type: "block", player: o, victim: p, dunk: true });
        return;
      }
    }
    ball.holder = null;
    ball.x = hoop.rim.x;
    ball.y = hoop.rim.y + 0.25;
    ball.z = hoop.rim.z;
    ball.px = ball.x;
    ball.py = ball.y;
    ball.pz = ball.z;
    ball.vx = 0;
    ball.vy = -7;
    ball.vz = 0;
    ball.shot = {
      shooter: p,
      team: p.team,
      hoop,
      kind: "dunk",
      isThree: false,
      label: "DUNK",
      releaseT: this.time,
      touchedRim: true,
      touchedBoard: false,
      blocked: false,
      resolved: false,
      grapple: k.fromGrapple
    };
    ball.noPickup.set(p, this.time + 0.6);
    p.stats.fga++;
    hoop.rimShake = 1;
    for (const o of this.opponents(p)) {
      const ox = o.x - hoop.rim.x, oz = o.z - hoop.rim.z, od = Math.hypot(ox, oz) || 1;
      if (od < 2.6) this.knock(o, ox / od, oz / od, 5, 0.35);
    }
    this.emit({ type: "dunk", player: p, hoop, grapple: k.fromGrapple });
  }
  // ---- team play: passing, calling for the ball, dash, dribble moves -------------
  /**
   * Best teammate to pass to: the one closest to the preferred direction
   * (camera forward for humans), with a penalty for distance and for a
   * defender sitting in the passing lane.
   */
  choosePassTarget(p, dir) {
    const mates = this.teamPlayers(p.team).filter((t) => t !== p && t.state !== "frozen");
    if (!mates.length) return null;
    const dl = dir ? Math.hypot(dir.x, dir.z) || 1 : 1;
    let best = null, bestScore = -Infinity;
    for (const t of mates) {
      const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz) || 1;
      let score = -d * 0.08;
      if (dir) score += (dx * dir.x + dz * dir.z) / (d * dl) * 2.2;
      if (t.callT > 0) score += 1.5;
      for (const o of this.opponents(p)) {
        const ox = o.x - p.x, oz = o.z - p.z;
        const t01 = Math.max(0, Math.min(1, (ox * dx + oz * dz) / (d * d)));
        const lx = p.x + dx * t01 - o.x, lz = p.z + dz * t01 - o.z;
        if (Math.hypot(lx, lz) < 1) score -= 1.2;
      }
      if (score > bestScore) {
        bestScore = score;
        best = t;
      }
    }
    return best;
  }
  pass(p, dir, to = null) {
    const r = to || this.choosePassTarget(p, dir);
    if (!r) return false;
    const ball = this.ball;
    const s = { x: p.x + p.fx * 0.45, y: p.y + 1.25, z: p.z + p.fz * 0.45 };
    const dist0 = Math.hypot(r.x - s.x, r.z - s.z);
    const T = Math.max(MOVES.PASS_MIN_T, Math.min(1, dist0 / MOVES.PASS_SPEED));
    const tx = r.x + r.vx * T * 0.8, tz = r.z + r.vz * T * 0.8, ty = r.y + 1.25;
    const g = PHYS.G_BALL;
    ball.holder = null;
    ball.x = s.x;
    ball.y = s.y;
    ball.z = s.z;
    ball.px = s.x;
    ball.py = s.y;
    ball.pz = s.z;
    ball.vx = (tx - s.x) / T;
    ball.vz = (tz - s.z) / T;
    ball.vy = (ty - s.y + 0.5 * g * T * T) / T;
    ball.shot = null;
    ball.pass = { from: p, to: r, team: p.team, t: this.time, target: { x: tx, z: tz }, T };
    ball.noPickup.set(p, this.time + 0.35);
    p.faceTowards(r.x, r.z);
    p.passT = 0.25;
    this.emit({ type: "pass", player: p, to: r });
    return true;
  }
  callForBall(p) {
    const h = this.ball.holder;
    if (!h || h.team !== p.team || h === p) return;
    p.callT = MOVES.CALL_T;
    this.emit({ type: "call", player: p });
  }
  dash(p, intent) {
    if (p.dashCd > 0 || !p.onGround) return;
    let dx = intent.mx, dz = intent.mz;
    let l = Math.hypot(dx, dz);
    if (l < 0.2) {
      dx = p.fx;
      dz = p.fz;
      l = 1;
    }
    const v = this.ball.holder === p ? MOVES.DASH_BALL_V : MOVES.DASH_V;
    p.vx = dx / l * v;
    p.vz = dz / l * v;
    p.dashT = MOVES.DASH_T;
    p.dashCd = MOVES.DASH_CD;
    p.yaw = Math.atan2(dz, dx);
    this.emit({ type: "dash", player: p });
  }
  /** Q / E: hard lateral dribble move. Can shake a defender who is in front of you. */
  dribbleMove(p, side) {
    if (p.moveCd > 0 || !p.onGround) return;
    const rx = -p.fz * side, rz = p.fx * side;
    p.vx = rx * MOVES.DRIBBLE_V + p.fx * 2.5;
    p.vz = rz * MOVES.DRIBBLE_V + p.fz * 2.5;
    p.dashT = MOVES.DRIBBLE_T;
    p.moveCd = MOVES.DRIBBLE_CD;
    p.hand = side;
    p.crossT = 0.3;
    p.moveSide = side;
    p.moveT = 0.35;
    this.emit({ type: "dribbleMove", player: p, side });
    for (const o of this.opponents(p)) {
      const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz);
      if (d > MOVES.SHAKE_R || o.state !== "free" || !o.onGround) continue;
      if ((dx * p.fx + dz * p.fz) / (d || 1) < 0.3) continue;
      const chance = MOVES.SHAKE_CHANCE + (o.reachT > 0 ? MOVES.SHAKE_REACH_BONUS : 0);
      if (this.rng.chance(chance)) {
        this.knock(o, o.fx * 0.2 - rx * 0.6, o.fz * 0.2 - rz * 0.6, 1.5, CROSSOVER.ANKLE_STUN, p);
        o.anklesT = 1;
        this.emit({ type: "ankles", player: p, victim: o });
      }
    }
  }
  contestOn(shooter) {
    const hoop = this.attackHoop(shooter.team);
    const hx = hoop.rim.x - shooter.x, hz = hoop.rim.z - shooter.z, hd = Math.hypot(hx, hz) || 1;
    let best = 0;
    this.contester = null;
    for (const o of this.opponents(shooter)) {
      const dx = o.x - shooter.x, dz = o.z - shooter.z, d = Math.hypot(dx, dz);
      if (d > 2.4) continue;
      let f = 1 - d / 2.4;
      const between = (dx * hx + dz * hz) / ((d || 1) * hd);
      f *= between > 0.4 ? 1 : 0.45;
      if (!o.onGround && o.top > shooter.top - 0.4) f *= 1.25;
      if (o.state === "stunned") f = 0;
      f = clamp(f, 0, 1);
      if (f > best) {
        best = f;
        this.contester = o;
      }
    }
    return best;
  }
  releaseShot(p, q, kind, label, meter = null) {
    const ball = this.ball;
    const hoop = this.attackHoop(p.team);
    const s = { x: p.x + p.fx * 0.22, y: p.top + 0.2, z: p.z + p.fz * 0.22 };
    const dist2 = Math.hypot(hoop.rim.x - s.x, hoop.rim.z - s.z);
    const toCourt = { x: -hoop.dir, z: 0 };
    if ((s.x - hoop.rim.x) * hoop.dir > -(hoop.rimR + 0.3) && Math.abs(s.z - hoop.rim.z) < hoop.rimR + 0.3) {
      s.x = hoop.rim.x + toCourt.x * (hoop.rimR + 0.35);
      if (s.y > hoop.rim.y - 0.4) s.y = Math.min(s.y, hoop.rim.y - 0.4);
    }
    const contest = this.contestOn(p);
    if (contest >= DEFENSE.CONTEST_STAT && this.contester) this.contester.stats.ctst++;
    const parts = shotSpread(q, contest, kind);
    if (p.fire > 0) for (const k2 of Object.keys(parts)) parts[k2] *= FIRE.SPREAD_MUL;
    const r = () => this.rng.range(0.55, 1);
    const timingDir = meter == null ? this.rng.sign() : meter < SHOT.SWEET_CENTER ? -1 : 1;
    let k = 1 + this.rng.sign() * parts.base * r() + timingDir * parts.timing * r() + this.rng.sign() * parts.contest * r();
    k = clamp(k, 0.88, 1.12);
    let side = this.rng.sign() * parts.side * r();
    const t = { x: hoop.rim.x, y: hoop.rim.y - 0.02, z: hoop.rim.z };
    if (kind === "layup") {
      const chance = p.fire > 0 ? 0.97 : clamp(0.97 - (1 - q) * 0.8 - contest * 0.6, 0.12, 0.97);
      k = 1;
      side = 0;
      if (!this.rng.chance(chance)) {
        const dx = hoop.rim.x - s.x, dz = hoop.rim.z - s.z, dd = Math.hypot(dx, dz) || 1;
        const off = this.rng.range(0.34, 0.42);
        t.x -= dx / dd * off;
        t.z -= dz / dd * off;
        t.z += this.rng.range(-0.08, 0.08);
      }
    }
    const sol = solveArc(s, t, arcForDistance(Math.hypot(t.x - s.x, t.z - s.z), kind));
    let vx = sol.vx, vz = sol.vz;
    if (side) {
      const c = Math.cos(side), sn = Math.sin(side);
      [vx, vz] = [vx * c - vz * sn, vx * sn + vz * c];
    }
    ball.holder = null;
    ball.x = s.x;
    ball.y = s.y;
    ball.z = s.z;
    ball.px = s.x;
    ball.py = s.y;
    ball.pz = s.z;
    ball.vx = vx * k;
    ball.vy = sol.vy * k;
    ball.vz = vz * k;
    const isThree = kind === "jump" && Math.hypot(hoop.rim.x - p.x, hoop.rim.z - p.z) > COURT.THREE;
    ball.shot = {
      shooter: p,
      team: p.team,
      hoop,
      kind,
      isThree,
      label,
      quality: q,
      contest,
      releaseT: this.time,
      touchedRim: false,
      touchedBoard: false,
      blocked: false,
      resolved: false
    };
    ball.noPickup.set(p, this.time + SHOT.NO_PICKUP_SHOOTER);
    p.stats.fga++;
    if (isThree) p.stats.tpa++;
    p.state = "free";
    p.meter = 0;
    p.shootLock = 0.25;
    this.emit({ type: "shot", player: p, kind, label, q, isThree, contest, dist: dist2 });
  }
  // ---- defense -------------------------------------------------------------------
  /**
   * Defenders near the ball handler drop into a stance automatically: they
   * slide (a bit slower, much quicker to change direction) while staying square
   * to the ball. Sprinting breaks the stance for a recovery run.
   */
  updateStance(p, intent) {
    const c = this.ball.holder;
    p.stance = false;
    if (!c || c.team === p.team || p.state !== "free" || !p.onGround || intent.sprint || p.reachT > 0) return;
    if (Math.hypot(c.x - p.x, c.z - p.z) > DEFENSE.STANCE_R) return;
    p.stance = true;
    p.faceX = c.x;
    p.faceZ = c.z;
  }
  /** Is c's body between point (x,z) and the ball they are dribbling? */
  ballShielded(x, z, c) {
    const ball = this.ball;
    const bx = ball.x - x, bz = ball.z - z, d2 = bx * bx + bz * bz || 1;
    const hx = c.x - x, hz = c.z - z;
    const t = (hx * bx + hz * bz) / d2;
    if (t <= 0.05 || t >= 0.95) return false;
    const px = x + bx * t - c.x, pz = z + bz * t - c.z;
    return Math.hypot(px, pz) < DEFENSE.BODY_SHIELD_R && Math.hypot(ball.x - c.x, ball.z - c.z) < 0.75;
  }
  /** Start a steal attempt. The outcome is decided a moment later, when the hand arrives. */
  attemptSteal(s) {
    if (s.stealCd > 0 || s.state !== "free" || s.swipe) return;
    s.stealCd = DEFENSE.STEAL_CD;
    const c = this.ball.holder;
    let side = 1;
    if (c && c.team !== s.team) {
      const rx = -s.fz, rz = s.fx;
      side = (this.ball.x - s.x) * rx + (this.ball.z - s.z) * rz >= 0 ? 1 : -1;
      if (Math.hypot(c.x - s.x, c.z - s.z) < 3) s.faceTowards(this.ball.x, this.ball.z);
    }
    s.swipe = { t: 0, side, resolved: false, hit: false, kind: null, tx: 0, ty: 1, tz: 0 };
    s.swipeT = DEFENSE.SWIPE_WINDUP + DEFENSE.SWIPE_ACTIVE + DEFENSE.SWIPE_RECOVER;
    this.emit({ type: "swipeStart", player: s, side });
  }
  /**
   * Geometry of a reach right now: can `s`'s hand get to the ball? Used to resolve
   * swipes and by bots to read the ball handler. Returns { ok, why, d, shoulder }.
   */
  stealRead(s, lunge = true) {
    const ball = this.ball;
    const c = ball.holder;
    if (!c || c.team === s.team) return { ok: false, why: "noball" };
    if (c.state === "dunk" || c.state === "grapple") return { ok: false, why: "air" };
    if (c.state === "shooting" && c.stateT > 0.12) return { ok: false, why: "overhead" };
    const rx = -s.fz, rz = s.fx;
    const side = (ball.x - s.x) * rx + (ball.z - s.z) * rz >= 0 ? 1 : -1;
    const sx = s.x + rx * side * 0.2, sz = s.z + rz * side * 0.2;
    const bx = ball.x - sx, bz = ball.z - sz, d = Math.hypot(bx, bz);
    const reach = DEFENSE.ARM_REACH + DEFENSE.HAND_R + (lunge && s.onGround ? DEFENSE.LUNGE_REACH : 0);
    if (ball.y < s.y + 0.04 || ball.y > s.y + 2.3) return { ok: false, why: "height", d };
    if (d > reach) return { ok: false, why: "short", d };
    if ((bx * s.fx + bz * s.fz) / (d || 1) < 0.1) return { ok: false, why: "angle", d };
    const hx = c.x - sx, hz = c.z - sz;
    const t = Math.max(0, Math.min(1, (hx * bx + hz * bz) / (d * d || 1)));
    const px = sx + bx * t - c.x, pz = sz + bz * t - c.z;
    const ballOff = Math.hypot(ball.x - c.x, ball.z - c.z);
    if (t > 0.05 && t < 0.95 && Math.hypot(px, pz) < DEFENSE.BODY_SHIELD_R && ballOff < 0.75) return { ok: false, why: "shielded", d };
    return { ok: true, why: "clean", d, side };
  }
  updateSwipe(s, dt) {
    const sw = s.swipe;
    sw.t += dt;
    const D = DEFENSE;
    if (!sw.resolved && sw.t >= D.SWIPE_WINDUP) {
      sw.resolved = true;
      const ball = this.ball;
      const c = ball.holder;
      const read = this.stealRead(s, true);
      if (s.onGround && s.state === "free") {
        const dx = ball.x - s.x, dz = ball.z - s.z, dd = Math.hypot(dx, dz) || 1;
        s.vx += dx / dd * D.LUNGE_V * 0.6 + s.fx * D.LUNGE_V * 0.4;
        s.vz += dz / dd * D.LUNGE_V * 0.6 + s.fz * D.LUNGE_V * 0.4;
      }
      sw.tx = ball.x;
      sw.ty = ball.y;
      sw.tz = ball.z;
      if (read.ok && c && s.state === "free") {
        sw.hit = true;
        const rx = -s.fz, rz = s.fx;
        const sweepX = -rx * sw.side * 0.75 + s.fx * 0.35 + (ball.x - s.x) * 0.15;
        const sweepZ = -rz * sw.side * 0.75 + s.fz * 0.35 + (ball.z - s.z) * 0.15;
        const n = Math.hypot(sweepX, sweepZ) || 1;
        const grab = read.d < D.GRAB_DIST + 0.35 && c.state === "free" && ball.y > 0.45 && ball.y < 1.5;
        c.strippedT = 0.7;
        c.stats.tov++;
        s.stats.stl++;
        s.stats.forced++;
        if (c.state === "shooting" || c.state === "layup") {
          c.state = "free";
          c.meter = 0;
        }
        if (grab) {
          sw.kind = "grab";
          this.giveBall(s, { steal: true });
        } else {
          sw.kind = ball.y < 0.6 ? "poke" : "strip";
          ball.holder = null;
          ball.vx = sweepX / n * D.STRIP_SPEED + s.vx * 0.3;
          ball.vz = sweepZ / n * D.STRIP_SPEED + s.vz * 0.3;
          ball.vy = sw.kind === "poke" ? 2.2 : 2.9;
          ball.shot = null;
          ball.noPickup.set(c, this.time + 0.5);
          this.possLost = c.team;
        }
        this.emit({ type: "steal", player: s, victim: c, kind: sw.kind });
      } else {
        if (c && c.team !== s.team) {
          s.reachT = read.why === "short" && read.d > 2.2 ? 0.25 : D.MISS_RECOVER;
          this.emit({ type: "reach", player: s, victim: c, why: read.why });
        } else {
          s.reachT = 0.2;
          this.emit({ type: "swipe", player: s });
        }
        sw.tx = s.x + s.fx * 1.2;
        sw.tz = s.z + s.fz * 1.2;
        sw.ty = Math.max(0.6, Math.min(1.4, ball.y));
      }
    }
    if (sw.t >= D.SWIPE_WINDUP + D.SWIPE_ACTIVE + D.SWIPE_RECOVER || s.state !== "free" && sw.resolved) s.swipe = null;
  }
  /** Knock the ball out of `from`'s hands toward `to`. */
  popLoose(from, to, why) {
    const ball = this.ball;
    if (ball.holder !== from) return;
    const dx = to.x - from.x, dz = to.z - from.z, d = Math.hypot(dx, dz) || 1;
    ball.holder = null;
    ball.vx = dx / d * this.rng.range(2, 3.2);
    ball.vz = dz / d * this.rng.range(2, 3.2);
    ball.vy = this.rng.range(3.2, 4.4);
    ball.shot = null;
    ball.noPickup.set(from, this.time + 0.45);
    this.possLost = from.team;
    if (from.state === "shooting" || from.state === "layup") {
      from.state = "free";
      from.meter = 0;
    }
  }
  knock(o, nx, nz, power, stun, by = null) {
    o.vx = nx * power;
    o.vz = nz * power;
    o.vy = Math.max(o.vy, power * 0.45);
    o.onGround = false;
    if (o.state === "grapple" || o.state === "dunk") return;
    if (this.ball.holder === o) {
      this.popLoose(o, { x: o.x + nx, z: o.z + nz }, "knock");
      o.stats.tov++;
      if (by) by.stats.forced++;
    }
    o.state = "stunned";
    o.stunT = stun;
    o.meter = 0;
  }
  // ---- items ---------------------------------------------------------------------
  updateItemBox(dt) {
    const box = this.box;
    if (!box.active) {
      box.t -= dt;
      if (box.t <= 0) {
        box.active = true;
        box.x = this.rng.range(-8.5, 8.5);
        box.z = this.rng.range(-5.5, 5.5);
        this.emit({ type: "boxSpawn", x: box.x, z: box.z });
      }
      return;
    }
    for (const p of this.players) {
      if (p.item || p.state === "dunk") continue;
      if (Math.hypot(p.x - box.x, p.z - box.z) < ITEMS.PICKUP_R && p.y < 1.6) {
        p.item = this.forceItem || rollItem(this.rng, this.itemPools[p.id]);
        box.active = false;
        box.t = this.boxRespawn;
        this.emit({ type: "item", player: p, item: p.item, x: box.x, z: box.z });
        return;
      }
    }
  }
  useItem(p, aim) {
    if (p.item === "grapple") this.fireGrapple(p, aim);
  }
  /**
   * Grappling hook. The aim point snaps to the nearest "anchor" (either rim,
   * an opponent, the loose ball) within 2.2 m; otherwise it hooks the point
   * itself. The player is reeled in fast, ignoring gravity.
   *  - Rim you attack + ball in hand = GRAPPLE SLAM dunk.
   *  - Opponent = you crash into them (knockback, likely steal).
   */
  fireGrapple(p, aim) {
    if (!aim) return false;
    const G = ITEMS.GRAPPLE;
    const ball = this.ball;
    const anchors = [];
    for (const h of this.hoops) anchors.push({ kind: "rim", hoop: h, pos: h.rim });
    for (const o of this.opponents(p)) anchors.push({ kind: "player", ref: o, pos: { x: o.x, y: o.y + 1.1, z: o.z } });
    if (!ball.holder) anchors.push({ kind: "ball", ref: ball, pos: ball });
    let best = null, bestD = 2.2;
    for (const a of anchors) {
      const d2 = Math.hypot(a.pos.x - aim.x, a.pos.y - aim.y, a.pos.z - aim.z);
      if (d2 < bestD) {
        bestD = d2;
        best = a;
      }
    }
    let target = best ? { x: best.pos.x, y: best.pos.y, z: best.pos.z } : { x: aim.x, y: Math.max(0.4, aim.y), z: aim.z };
    if (best && best.kind === "rim") {
      const dx2 = best.hoop.rim.x - p.x, dz2 = best.hoop.rim.z - p.z, d2 = Math.hypot(dx2, dz2) || 1;
      target = { x: best.hoop.rim.x - dx2 / d2 * 0.45, y: best.hoop.rim.y - 0.6, z: best.hoop.rim.z - dz2 / d2 * 0.45 };
    }
    const dx = target.x - p.x, dy = target.y - (p.y + 1.1), dz = target.z - p.z;
    const d = Math.hypot(dx, dy, dz);
    if (d < 1.5) return false;
    if (d > G.RANGE) {
      const s = G.RANGE / d;
      target = { x: p.x + dx * s, y: p.y + 1.1 + dy * s, z: p.z + dz * s };
    }
    p.item = null;
    if (p.state === "shooting" || p.state === "layup") p.meter = 0;
    p.state = "grapple";
    p.onGround = false;
    p.grapple = { kind: best ? best.kind : "point", hoop: best?.hoop, ref: best?.ref ?? null, target, t: 0 };
    this.emit({ type: "grapple", player: p, kind: p.grapple.kind, target });
    return true;
  }
  endGrapple(p, arrived) {
    const g = p.grapple;
    const ball = this.ball;
    p.state = "free";
    p.vx *= 0.35;
    p.vy = Math.max(1.5, p.vy * 0.2);
    p.vz *= 0.35;
    if (!arrived) return;
    if (g.kind === "rim" && ball.holder === p && g.hoop === this.attackHoop(p.team)) {
      this.startDunk(p, g.hoop, true);
      return;
    }
    if (g.kind === "player") {
      const o = g.ref;
      const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz) || 1;
      const hadBall = ball.holder === o;
      if (hadBall) {
        this.popLoose(o, p, "grapple");
        o.stats.tov++;
        p.stats.stl++;
        p.stats.forced++;
        o.strippedT = 0.7;
        this.emit({ type: "steal", player: p, victim: o, grapple: true });
      }
      this.knock(o, dx / d, dz / d, ITEMS.GRAPPLE.KNOCKBACK, 0.7);
      this.emit({ type: "grappleHit", player: p, victim: o });
    }
  }
  // ---- ball handling ----------------------------------------------------------------
  positionHeldBall(p, dt) {
    const ball = this.ball;
    const fx = p.fx, fz = p.fz, rx = -fz, rz = fx;
    let x, y, z;
    if (p.state === "shooting" || p.state === "layup" || p.state === "dunk") {
      x = p.x + fx * 0.25;
      y = p.top + 0.25;
      z = p.z + fz * 0.25;
    } else if (!p.onGround || p.state === "grapple") {
      x = p.x + fx * 0.45;
      y = p.y + 1.25;
      z = p.z + fz * 0.45;
    } else {
      this.trackCrossover(p);
      const prev = Math.sin(p.dribble);
      const speed = Math.hypot(p.vx, p.vz);
      p.dribble += dt * (7 + speed * 0.9);
      const s = Math.sin(p.dribble);
      if (Math.sign(prev) !== Math.sign(s)) this.emit({ type: "dribble", player: p });
      const u = Math.abs(s);
      const pressured = !p.sprinting && this.opponents(p).some((o) => Math.hypot(o.x - p.x, o.z - p.z) < 2.6);
      const fwd = p.sprinting ? 0.85 : pressured ? 0.1 : 0.55;
      let side = p.hand * (pressured ? 0.4 : 0.24);
      if (p.crossT > 0) {
        const k = 1 - p.crossT / 0.3;
        side = p.hand * 0.24 * (k * 2 - 1);
        y = BALL.R + 0.25 * Math.sin(Math.PI * Math.max(0, Math.min(1, k)));
      } else {
        y = BALL.R + (1 - BALL.R) * u;
      }
      x = p.x + fx * fwd + rx * side;
      z = p.z + fz * fwd + rz * side;
    }
    ball.x = x;
    ball.y = y;
    ball.z = z;
    ball.vx = p.vx;
    ball.vy = 0;
    ball.vz = p.vz;
    ball.spinX += p.vz / BALL.R * dt;
    ball.spinZ -= p.vx / BALL.R * dt;
  }
  /**
   * A sharp change of direction while dribbling = crossover (ball switches
   * hands). Do it while a defender is mid-reach for a steal and they go down:
   * ANKLE BREAKER.
   */
  trackCrossover(p) {
    const log = p.turnLog;
    log.push({ t: this.time, yaw: p.yaw });
    while (log.length && this.time - log[0].t > CROSSOVER.WINDOW) log.shift();
    if (p.crossT > 0 || log.length < 3) return;
    let turned = 0;
    for (let i = 1; i < log.length; i++) turned += Math.abs(wrapAngle(log[i].yaw - log[i - 1].yaw));
    if (turned < CROSSOVER.TURN) return;
    p.hand = -p.hand;
    p.crossT = 0.3;
    log.length = 0;
    this.emit({ type: "crossover", player: p });
    for (const o of this.opponents(p)) {
      const d = Math.hypot(o.x - p.x, o.z - p.z);
      if (d < CROSSOVER.ANKLE_R && o.reachT > 0 && o.onGround && o.state === "free") {
        this.knock(o, o.fx, o.fz, 1.5, CROSSOVER.ANKLE_STUN, p);
        o.anklesT = 1;
        this.emit({ type: "ankles", player: p, victim: o });
      }
    }
  }
  giveBall(p, opts = {}) {
    const ball = this.ball;
    const pass = ball.pass;
    ball.pass = null;
    if (pass && pass.to === p) {
      ball.lastPass = { from: pass.from, to: p, t: this.time };
      this.emit({ type: "catch", player: p, from: pass.from });
    } else {
      ball.lastPass = null;
      if (pass && p.team !== pass.team) {
        p.stats.stl++;
        p.stats.forced++;
        pass.from.stats.tov++;
        this.emit({ type: "intercept", player: p, from: pass.from });
      }
    }
    if (!opts.inbound && this.possTeam !== null && this.possTeam !== p.team) {
      this.stops[p.team]++;
      this.emit({ type: "stop", team: p.team, player: p });
    }
    this.possTeam = p.team;
    if (ball.shot && !ball.shot.resolved) {
      if (ball.shot.touchedRim || ball.shot.touchedBoard || this.time - ball.shot.releaseT > 0.5) {
        p.stats.reb++;
        this.emit({ type: "rebound", player: p, offensive: p.team === ball.shot.team });
      }
      ball.shot.resolved = true;
    }
    ball.shot = null;
    ball.holder = p;
    ball.invalidHoop = null;
    p.dribble = 0;
    this.emit({ type: "pickup", player: p });
  }
  checkPickups() {
    const ball = this.ball;
    if (ball.holder || this.state !== "live" || ball.scoreLocked) return;
    if (ball.pass && this.time - ball.pass.t > ball.pass.T + 1.2) ball.pass = null;
    let best = null, bestD = Infinity;
    for (const p of this.players) {
      if (p.state !== "free" && p.state !== "grapple") continue;
      const until = ball.noPickup.get(p);
      if (until && until > this.time) continue;
      const shot = ball.shot;
      if (shot && !shot.blocked && p.team !== shot.team && this.time - shot.releaseT < SHOT.BLOCK_WINDOW) continue;
      const hd = Math.hypot(ball.x - p.x, ball.z - p.z);
      const reachTop = p.top + (p.onGround ? 0.3 : 0.6);
      const reach = ball.pass && ball.pass.to === p ? 0.55 : 0.28;
      if (hd < PLAYER.R + BALL.R + reach && ball.y > p.y - 0.1 && ball.y < reachTop) {
        const pri = ball.pass && ball.pass.to === p ? -1 : 0;
        if (hd + pri < bestD) {
          bestD = hd + pri;
          best = p;
        }
      }
    }
    if (best) this.giveBall(best);
  }
  checkBlocks() {
    const ball = this.ball;
    const shot = ball.shot;
    if (!shot || shot.blocked || shot.kind === "dunk" || this.time - shot.releaseT > SHOT.BLOCK_WINDOW) return;
    for (const o of this.players) {
      if (o.team === shot.team || o.state === "stunned" || o.state === "frozen") continue;
      const dx = ball.x - o.x, dz = ball.z - o.z, hd = Math.hypot(dx, dz);
      const air = !o.onGround;
      const handsTop = o.top + (air ? DEFENSE.HANDS_UP : 0.2);
      if (hd > PLAYER.R + BALL.R + (air ? 0.12 : 0.02) || ball.y < o.top - 0.25 || ball.y > handsTop) continue;
      shot.touched = shot.touched || /* @__PURE__ */ new Set();
      if (shot.touched.has(o)) continue;
      shot.touched.add(o);
      const nx = hd > 1e-3 ? dx / hd : -shot.hoop.dir, nz = hd > 1e-3 ? dz / hd : 0;
      if (!air) {
        const sp = Math.hypot(ball.vx, ball.vz) * 0.85;
        const vx = ball.vx / (Math.hypot(ball.vx, ball.vz) || 1), vz = ball.vz / (Math.hypot(ball.vx, ball.vz) || 1);
        const bx = vx + nx * 0.18, bz = vz + nz * 0.18, bn = Math.hypot(bx, bz) || 1;
        ball.vx = bx / bn * sp;
        ball.vz = bz / bn * sp;
        ball.vy *= 0.9;
        shot.tipped = true;
        this.emit({ type: "tip", player: o });
        continue;
      }
      shot.blocked = true;
      const away = -shot.hoop.dir;
      const power = 3.2 + Math.max(0, o.vy) * 0.25;
      const ax = nx * 0.6 + away * 0.4, az = nz * 0.6, an = Math.hypot(ax, az) || 1;
      ball.vx = ax / an * power + o.vx * 0.3;
      ball.vz = az / an * power + o.vz * 0.3;
      ball.vy = Math.min(ball.vy, 0) * 0.3 - 1;
      ball.noPickup.set(shot.shooter, this.time + 0.3);
      o.stats.blk++;
      o.stats.forced++;
      o.blockT = 0.4;
      this.emit({ type: "block", player: o, victim: shot.shooter, x: ball.x, y: ball.y, z: ball.z });
      return;
    }
  }
  checkStuck(dt) {
    const ball = this.ball;
    if (!ball.onFloor && ball.speed < 0.5 && ball.y > BALL.R + 0.05) {
      ball.restTimer += dt;
      if (ball.restTimer > MATCH.STUCK_TIME) {
        ball.vx = -Math.sign(ball.x || 1) * 2.5;
        ball.vy = 2;
        ball.vz = this.rng.range(-1, 1);
        ball.restTimer = 0;
        this.emit({ type: "nudge" });
      }
    } else ball.restTimer = 0;
  }
  handleBallEvent(ev) {
    const ball = this.ball;
    if (ev.type === "cross") {
      if (ev.dir === "up") ball.invalidHoop = ev.hoop;
      else if (ball.invalidHoop === ev.hoop) ball.invalidHoop = null;
      else if (!ball.scoreLocked && (this.state === "live" || this.state === "buzzer")) this.onScore(ev.hoop);
      return;
    }
    this.emit(ev);
  }
  onScore(hoop) {
    const ball = this.ball;
    const team = hoop.attackTeam;
    const shot = ball.shot;
    const own = shot && shot.team === team && shot.hoop === hoop && !shot.blocked;
    const pts = own && shot.isThree ? 3 : 2;
    this.score[team] += pts;
    this.possTeam = null;
    let assist = null;
    const lp = ball.lastPass;
    if (own && lp && lp.to === shot.shooter && this.time - lp.t < MOVES.ASSIST_T) {
      assist = lp.from;
      assist.stats.ast++;
    }
    ball.lastPass = null;
    if (own) {
      shot.shooter.stats.pts += pts;
      shot.shooter.stats.fgm++;
      if (pts === 3) shot.shooter.stats.tpm++;
      if (shot.kind === "dunk") shot.shooter.stats.dunks++;
    }
    const swish = !!(shot && shot.kind !== "dunk" && !shot.touchedRim && !shot.touchedBoard);
    this.updateStreaks(team, own ? shot.shooter : null);
    if (shot) shot.resolved = true;
    ball.scoreLocked = true;
    hoop.netSway.vy = 0;
    hoop.netSway.vx += -hoop.dir * 1.5;
    const buzzer = this.state === "buzzer";
    this.emit({
      type: "score",
      team,
      pts,
      hoop,
      swish,
      scorer: own ? shot.shooter : null,
      assist,
      kind: shot ? shot.kind : "tip",
      grapple: !!(shot && shot.grapple),
      buzzer,
      overtime: this.overtime
    });
    if (this.overtime || buzzer) {
      this.state = "final";
      this.stateT = 1.8;
    } else {
      this.state = "scored";
      this.stateT = MATCH.RESET_DELAY;
      this.lastScoredHoop = hoop;
    }
  }
  /** Baskets in a row light you up; the other team scoring puts the fire out. */
  updateStreaks(team, scorer) {
    for (const p of this.players) {
      if (p.team !== team) {
        if (p.fire > 0) this.emit({ type: "fireOut", player: p });
        p.streak = 0;
        p.fire = 0;
      }
    }
    if (!scorer) return;
    scorer.streak++;
    if (scorer.fire > 0) {
      scorer.fire--;
      if (scorer.fire === 0) {
        scorer.streak = 0;
        this.emit({ type: "fireOut", player: scorer });
      }
    } else if (scorer.streak >= this.fireStreak) {
      scorer.fire = FIRE.MAX;
      this.emit({ type: "onFire", player: scorer });
    }
  }
  resetAfterScore() {
    const hoop = this.lastScoredHoop;
    if (this.practice) {
      const me = this.players[0];
      const s = this.attackHoop(me.team).spot(6.6, 0);
      me.place(s.x, s.z, me.team === 0 ? 0 : Math.PI);
      this.ball.reset(this.ball.x, this.ball.y, this.ball.z);
      this.projectiles = [];
      this.giveBall(me, { inbound: true });
      this.state = "live";
      this.emit({ type: "inbound", team: me.team });
      return;
    }
    const conceding = 1 - hoop.attackTeam;
    const inbound = [[4.2, 0], [7.5, -0.9], [7.5, 0.9]];
    this.teamPlayers(conceding).forEach((p, i) => {
      const s = hoop.spot(...inbound[i] || [8, 0]);
      p.place(s.x, s.z, hoop.dir > 0 ? Math.PI : 0);
    });
    const back = [[-1, 0], [2, -3.5], [2, 3.5]];
    this.teamPlayers(hoop.attackTeam).forEach((p, i) => {
      const [bx, bz] = back[i] || [3, 0];
      p.place(-hoop.dir * bx, bz, hoop.dir > 0 ? 0 : Math.PI);
    });
    const ball = this.ball;
    ball.reset(ball.x, ball.y, ball.z);
    for (const pr of this.projectiles) this.emit({ type: "projectileEnd", id: pr.id, x: pr.x, y: pr.y, z: pr.z });
    this.projectiles = [];
    this.giveBall(this.teamPlayers(conceding)[0], { inbound: true });
    this.state = "live";
    this.emit({ type: "inbound", team: conceding });
  }
  onClockExpired() {
    this.clock = 0;
    const ball = this.ball;
    this.emit({ type: "buzzer" });
    if (!ball.holder && ball.shot && !ball.shot.resolved && !ball.shot.blocked) {
      this.state = "buzzer";
      this.stateT = MATCH.BUZZER_GRACE;
    } else this.endRegulation();
  }
  endRegulation() {
    if (this.score[0] === this.score[1]) {
      this.overtime = true;
      this.setupTipoff();
      this.stateT = MATCH.COUNTDOWN + 0.8;
      this.emit({ type: "overtime" });
    } else this.finish();
  }
  finish() {
    this.state = "ended";
    this.winner = this.score[0] > this.score[1] ? 0 : 1;
    for (const p of this.players) if (p.state !== "free") {
      p.state = "free";
      p.vy = Math.min(p.vy, 0);
    }
    this.emit({ type: "end", winner: this.winner });
  }
  /**
   * Ball handler sprinting head-first into a set defender loses control of the
   * ball (the defender "takes the charge"). n = unit vector from h to d.
   */
  checkCharge(h, d, nx, nz) {
    if (this.ball.holder !== h || h.chargeCd > 0 || !h.onGround || h.state !== "free" || h.dashT > 0) return false;
    if (d.state !== "free" || !d.onGround) return false;
    const facing = -(d.fx * nx + d.fz * nz);
    if (facing < 0.5 || Math.hypot(d.vx, d.vz) > 2.8) return false;
    const along = h.vx * nx + h.vz * nz;
    if (!h.sprinting || along < DEFENSE.CHARGE_SPEED) return false;
    h.chargeCd = DEFENSE.CHARGE_CD;
    this.popLoose(h, { x: h.x + nx * 0.3 - nz * 0.8, z: h.z + nz * 0.3 + nx * 0.8 }, "charge");
    h.stats.tov++;
    d.stats.forced++;
    h.vx *= -0.3;
    h.vz *= -0.3;
    h.state = "stunned";
    h.stunT = 0.4;
    h.stumbleT = 0.45;
    this.emit({ type: "charge", player: h, by: d });
    return true;
  }
  separatePlayers() {
    const ps = this.players;
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const a = ps[i], b = ps[j];
        if (a.state === "grapple" || b.state === "grapple" || a.state === "dunk" || b.state === "dunk") continue;
        const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
        const min = PLAYER.R * 2;
        if (d < min && Math.abs(a.y - b.y) < 1.2) {
          const nx = d > 1e-4 ? dx / d : 1, nz = d > 1e-4 ? dz / d : 0;
          if (a.team !== b.team) this.checkCharge(a, b, nx, nz) || this.checkCharge(b, a, -nx, -nz);
          const push = (min - d) * 0.5;
          a.x -= nx * push;
          a.z -= nz * push;
          b.x += nx * push;
          b.z += nz * push;
        }
      }
    }
  }
};

// src/ai/BotController.js
var dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
var BotController = class {
  constructor(match, player, difficulty = "normal") {
    this.m = match;
    this.p = player;
    this.d = DIFFICULTY[difficulty] || DIFFICULTY.normal;
    this.rng = match.rng;
    this.thinkT = this.rng.range(0, 0.2);
    this.target = { x: player.x, z: player.z };
    this.sprint = false;
    this.plan = null;
    this.spot = null;
    this.holdT = 0;
    this.possT = 0;
    this.wantShoot = false;
    this.wantSteal = false;
    this.wantItem = null;
    this.wantPass = null;
    this.wantMove = 0;
    this.wantDash = false;
    this.releaseAt = SHOT.SWEET_CENTER;
    this.contestT = -1;
    this.lastContested = null;
    this.jumpReadyT = 0;
    this.stealCd = 0;
    this.cutT = 0;
  }
  get idx() {
    return this.m.teamPlayers(this.p.team).indexOf(this.p);
  }
  get mates() {
    return this.m.teamPlayers(this.p.team).filter((t) => t !== this.p);
  }
  get foes() {
    return this.m.opponents(this.p);
  }
  /** The opponent I guard (same roster slot). */
  get man() {
    const f = this.foes;
    return f[Math.min(this.idx, f.length - 1)];
  }
  update(dt) {
    const it = emptyIntent();
    const { m, p } = this;
    const ball = m.ball;
    this.stealCd = Math.max(0, this.stealCd - dt);
    this.possT = ball.holder === p ? this.possT + dt : 0;
    this.cutT = Math.max(0, this.cutT - dt);
    if (p.state === "shooting") {
      it.shootHeld = p.meter < this.releaseAt;
      return it;
    }
    if (p.state !== "free") return it;
    if (m.state !== "live") {
      const h = m.defendHoop(p.team);
      this.target = h.spot(6 + this.idx * 1.5, (this.idx - 1) * 0.7);
      this.steer(it, false);
      return it;
    }
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = this.d.think * this.rng.range(0.75, 1.25);
      this.decide(this.d.think);
    }
    if (this.contestT >= 0) {
      this.contestT -= dt;
      if (this.contestT < 0 && p.onGround) it.jump = true;
    }
    if (!ball.holder && p.onGround && dist(ball, p) < 0.9 && ball.y > p.top - 0.1 && ball.y < p.top + 1.6 && ball.vy < 2) {
      this.jumpReadyT += dt;
      if (this.jumpReadyT > this.d.think * 0.6) {
        it.jump = true;
        this.jumpReadyT = 0;
      }
    } else this.jumpReadyT = 0;
    this.steer(it, this.sprint);
    if (this.wantItem && p.item) {
      it.useItem = true;
      it.aim = this.wantItem;
    }
    this.wantItem = null;
    if (ball.holder === p) {
      if (this.wantPass) {
        it.pass = true;
        it.passDir = { x: this.wantPass.x - p.x, z: this.wantPass.z - p.z };
        this.wantPass = null;
        this.plan = null;
        return it;
      }
      if (this.wantMove) {
        it.move = this.wantMove;
        this.wantMove = 0;
      }
      if (this.wantShoot) {
        it.shootDown = true;
        it.shootHeld = true;
        this.wantShoot = false;
        this.plan = null;
      }
    }
    if (this.wantDash) {
      it.dash = true;
      this.wantDash = false;
    }
    if (this.wantSteal) {
      it.steal = true;
      this.wantSteal = false;
    }
    return it;
  }
  /** Move toward target, sliding around players in the way. */
  steer(it, sprint) {
    const p = this.p;
    let dx = this.target.x - p.x, dz = this.target.z - p.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.18) {
      it.mx = 0;
      it.mz = 0;
      return;
    }
    dx /= d;
    dz /= d;
    for (const o of this.m.players) {
      if (o === p) continue;
      const ox = o.x - p.x, oz = o.z - p.z, od = Math.hypot(ox, oz);
      if (od < 1.3 && od > 0.01 && (ox * dx + oz * dz) / od > 0.6 && d > od) {
        const side = ox * dz - oz * dx > 0 ? -1 : 1;
        const ndx = dx - dz * side * 0.9, ndz = dz + dx * side * 0.9;
        const n = Math.hypot(ndx, ndz);
        dx = ndx / n;
        dz = ndz / n;
      }
    }
    const s = clamp(d / 0.8, 0, 1);
    it.mx = dx * s;
    it.mz = dz * s;
    it.sprint = sprint && p.stamina > 0.25;
  }
  decide(interval) {
    const { m, p, d, rng } = this;
    const ball = m.ball;
    const hA = m.attackHoop(p.team);
    const hD = m.defendHoop(p.team);
    const box = m.box;
    if (p.item && rng.chance(m.chaos ? 1 : d.itemUse * 0.35) && this.considerItem(hA, hD)) return;
    if (ball.holder === p) return this.offenseWithBall(hA, interval);
    this.plan = null;
    this.holdT = 0;
    if (ball.pass && ball.pass.to === p) {
      this.target = { x: ball.pass.target.x, z: ball.pass.target.z };
      this.sprint = true;
      return;
    }
    if (ball.holder && ball.holder.team === p.team) return this.offenseOffBall(hA);
    if (ball.holder) return this.defend(hD);
    const myTeam = m.teamPlayers(p.team);
    const nearest = myTeam.reduce((a, b) => dist(a, ball) < dist(b, ball) ? a : b);
    const bd = dist(ball, p);
    if (!p.item && box.active && dist(box, p) < (m.chaos ? 14 : 6) && (nearest !== p || bd > 4)) {
      this.target = { x: box.x, z: box.z };
      this.sprint = true;
      return;
    }
    if (nearest === p || bd < 2.5 || m.teamSize === 1) {
      if (ball.shot && !ball.shot.resolved && m.time - ball.shot.releaseT < 1) {
        this.target = ball.shot.hoop.spot(1.6, rng.range(-0.6, 0.6));
      } else {
        this.target = {
          x: clamp(ball.x + ball.vx * 0.25, -COURT.HALF_L + PLAYER.R, COURT.HALF_L - PLAYER.R),
          z: clamp(ball.z + ball.vz * 0.25, -COURT.HALF_W + PLAYER.R, COURT.HALF_W - PLAYER.R)
        };
      }
      this.sprint = true;
    } else {
      const s = hD.spot(5 + this.idx, (this.idx - 1) * 0.8);
      this.target = { x: (s.x + ball.x) / 2, z: (s.z + ball.z) / 2 };
      this.sprint = false;
    }
  }
  // ---------------- OFFENSE: I have the ball ----------------
  offenseWithBall(hA, interval) {
    const { m, p, d, rng } = this;
    const distRim = Math.hypot(hA.rim.x - p.x, hA.rim.z - p.z);
    if (!this.plan) this.choosePlan(hA, distRim);
    const defender = this.closestFoe();
    const od = defender ? dist(defender, p) : 99;
    const between = defender && (() => {
      const hx = hA.rim.x - p.x, hz = hA.rim.z - p.z;
      const ox = defender.x - p.x, oz = defender.z - p.z;
      return (ox * hx + oz * hz) / ((od || 1) * (distRim || 1)) > 0.4;
    })();
    const open = !defender || !between || od > 2.6 || defender.state !== "free";
    if (!p.onGround && p.top + PLAYER.REACH > hA.rim.y - 0.5 && distRim < SHOT.DUNK_RANGE + 0.8) {
      this.queueShot();
      return;
    }
    const mate = this.bestOpenMate(hA);
    if (mate) {
      const called = mate.callT > 0;
      const stuck = !open && this.holdT > 0.4 || this.possT > 3.2;
      const cutter = Math.hypot(hA.rim.x - mate.x, hA.rim.z - mate.z) < 3 && this.mateOpenness(mate) > 2.2;
      const swing = this.mateOpenness(mate) > od + 1.2 && this.holdT + this.possT > 0.6 && rng.chance(0.22);
      if (called && rng.chance(0.85) || stuck && rng.chance(0.6) || cutter && rng.chance(0.5) || swing) {
        this.wantPass = { x: mate.x, z: mate.z };
        return;
      }
    }
    if (defender && od < 2.4 && p.moveCd <= 0 && defender.state === "free") {
      const rx = -p.fz, rz = p.fx;
      const defSide = (defender.x - p.x) * rx + (defender.z - p.z) * rz >= 0 ? 1 : -1;
      if (defSide === p.hand && rng.chance(0.15 + d.stealRate)) {
        this.wantMove = -defSide;
        return;
      }
    }
    if (defender && between && od < 1.8 && p.moveCd <= 0 && rng.chance(defender.reachT > 0 ? 0.6 : 0.12 + d.stealRate * 0.3)) {
      this.wantMove = rng.sign();
      return;
    }
    if (this.plan === "drive") {
      this.target = hA.spot(0.9, this.spotAngle);
      this.sprint = true;
      if (p.dashCd <= 0 && distRim > 4 && distRim < 9 && open && rng.chance(0.15)) this.wantDash = true;
      if (distRim < SHOT.DUNK_RANGE - 0.15 || distRim < SHOT.LAYUP_RANGE - 0.3 && (!open || rng.chance(0.4))) this.queueShot();
    } else {
      this.target = this.spot;
      const toSpot = dist(p, this.spot);
      this.sprint = toSpot > 4;
      if (toSpot < 0.6) {
        this.holdT += interval;
        if (open && this.holdT > 0.12) this.queueShot();
        else if (this.holdT > d.patience) {
          if (rng.chance(0.5)) this.queueShot();
          else this.plan = "drive";
        }
      }
    }
    if (this.possT > 6) this.queueShot();
    if (this.sprint && defender && between && od < 2.6 && defender.stance && rng.chance(0.5 + d.stealRate)) this.sprint = false;
  }
  // ---------------- OFFENSE: a teammate has the ball ----------------
  offenseOffBall(hA) {
    const { m, p, rng } = this;
    const handler = m.ball.holder;
    const slots = [hA.spot(6.9, -1.05), hA.spot(6.9, 1.05), hA.spot(5.6, 0), hA.spot(2.2, -1.2), hA.spot(2.2, 1.2)];
    let mySlot = slots[(this.idx * 2 + (handler.z > 0 ? 0 : 1)) % slots.length];
    if (dist(mySlot, handler) < 2.5) mySlot = slots[(this.idx + 2) % slots.length];
    const myDef = this.closestFoe();
    if (this.cutT <= 0 && myDef && dist(myDef, p) > 2.8 && rng.chance(0.08)) this.cutT = 1.4;
    if (this.cutT > 0) {
      this.target = hA.spot(1.2, p.z > 0 ? 0.6 : -0.6);
      this.sprint = true;
      if (dist(this.target, p) < 2) this.cutT = Math.min(this.cutT, 0.5);
    } else {
      this.target = mySlot;
      this.sprint = dist(mySlot, p) > 5;
    }
  }
  // ---------------- DEFENSE ----------------
  defend(hD) {
    const { m, p, d, rng } = this;
    const c = m.ball.holder;
    let man = this.man;
    const cRim = Math.hypot(hD.rim.x - c.x, hD.rim.z - c.z);
    if (man !== c && cRim < 4) {
      const helpers = m.teamPlayers(p.team).filter((t) => t !== p);
      const guardOfC = helpers.find((t) => dist(t, c) < 1.6);
      if (!guardOfC) man = c;
    }
    const gx = hD.rim.x - man.x, gz = hD.rim.z - man.z, gd = Math.hypot(gx, gz) || 1;
    const gap = dist(man, p);
    if (man === c) {
      this.target = { x: c.x + gx / gd * d.guardGap, z: c.z + gz / gd * d.guardGap };
      this.sprint = dist(this.target, p) > 2.5;
      if (p.dashCd <= 0 && dist(this.target, p) > 4 && rng.chance(0.2)) this.wantDash = true;
      if ((c.state === "shooting" || c.state === "layup") && gap < 3 && c !== this.lastContested) {
        this.lastContested = c;
        if (rng.chance(d.contestJump)) this.contestT = d.contestReact;
        this.target = { x: c.x + gx / gd * 0.7, z: c.z + gz / gd * 0.7 };
      }
      if (c.state === "free") this.lastContested = null;
      if (this.stealCd <= 0 && p.stealCd <= 0 && gap < 2.2) {
        const read = m.stealRead(p);
        const go = read.ok ? rng.chance(d.stealRate * 0.55) : rng.chance(d.stealRate * 0.1);
        if (go) {
          this.wantSteal = true;
          this.stealCd = d.stealCd;
        } else if (read.ok === false) this.stealCd = 0.12;
      }
    } else {
      const k = 0.35;
      this.target = {
        x: man.x + gx / gd * 1.4 + (c.x - man.x) * k * 0.3,
        z: man.z + gz / gd * 1.4 + (c.z - man.z) * k * 0.3
      };
      this.sprint = dist(this.target, p) > 3;
      const pass = m.ball.pass;
      if (pass && pass.team !== p.team && dist(m.ball, p) < 3) this.target = { x: m.ball.x, z: m.ball.z };
    }
  }
  closestFoe() {
    let best = null, bd = Infinity;
    for (const o of this.foes) {
      const dd = dist(o, this.p);
      if (dd < bd) {
        bd = dd;
        best = o;
      }
    }
    return best;
  }
  mateOpenness(t) {
    let near = Infinity;
    for (const o of this.foes) near = Math.min(near, dist(o, t));
    return near;
  }
  bestOpenMate(hA) {
    let best = null, bestScore = -Infinity;
    for (const t of this.mates) {
      if (t.state !== "free") continue;
      const open = this.mateOpenness(t);
      if (open < 1.8 && t.callT <= 0) continue;
      const rim = Math.hypot(hA.rim.x - t.x, hA.rim.z - t.z);
      const score = open - rim * 0.15 + (t.callT > 0 ? 3 : 0);
      if (score > bestScore) {
        bestScore = score;
        best = t;
      }
    }
    return best;
  }
  /** Is now a good moment for my item? Returns true if queued. */
  considerItem(hA, hD) {
    const { m, p } = this;
    const ball = m.ball;
    const opp = ball.holder && ball.holder.team !== p.team ? ball.holder : this.closestFoe();
    if (!opp) return false;
    const me = { x: p.x, y: p.y + 1.1, z: p.z };
    const oppAt = { x: opp.x, y: opp.y + 1.1, z: opp.z };
    const holding = ball.holder === p;
    const theyHold = ball.holder && ball.holder.team !== p.team;
    const distRim = Math.hypot(hA.rim.x - p.x, hA.rim.z - p.z);
    const gap = dist(opp, p);
    const ballD = dist(ball, p);
    const oppBallD = dist(ball, opp);
    const oppBusy = opp.state === "frozen" || opp.state === "stunned";
    let aim = null;
    switch (p.item) {
      case "grapple":
        if (holding && distRim > 7) aim = { ...hA.rim };
        else if (theyHold && gap > 7) aim = oppAt;
        else if (!ball.holder && ballD > 9 && ball.y < 2.5) aim = { x: ball.x, y: ball.y, z: ball.z };
        break;
      case "jetpack":
        if (holding && distRim > 2 && distRim < 5.5) {
          aim = me;
          this.plan = "drive";
        } else if (theyHold && (opp.state === "shooting" || opp.state === "layup") && gap < 3) aim = me;
        break;
      case "punch":
        if (gap < 2.3 && !oppBusy && (theyHold || !ball.holder && oppBallD < 2)) aim = oppAt;
        break;
      case "freeze":
        if (!oppBusy && (theyHold || !ball.holder && oppBallD < ballD) && gap > 2.5 && gap < 15) aim = oppAt;
        break;
      case "banana": {
        const behind = (opp.x - p.x) * p.fx + (opp.z - p.z) * p.fz < 0;
        if (holding && behind && gap < 5) aim = me;
        else if (theyHold && gap < 6 && gap > 2) aim = me;
        break;
      }
      case "magnet":
        if (!ball.holder && ballD > 3 && ballD < 10 && oppBallD < ballD) aim = me;
        else if (theyHold && gap < 3.4) aim = me;
        break;
      case "energy":
        if (holding && distRim > 9 || !ball.holder && ballD > 7 || theyHold && gap > 7) aim = me;
        break;
    }
    if (!aim) return false;
    this.wantItem = aim;
    return true;
  }
  choosePlan(hA, distRim) {
    const { rng, d } = this;
    this.holdT = 0;
    this.spotAngle = rng.range(-0.5, 0.5);
    if (distRim < SHOT.LAYUP_RANGE && rng.chance(0.6)) {
      this.plan = "drive";
      return;
    }
    this.plan = rng.pick(d.plan);
    const a = rng.range(-1.1, 1.1);
    if (this.plan === "three") this.spot = hA.spot(COURT.THREE + rng.range(0.4, 1), a);
    else if (this.plan === "mid") this.spot = hA.spot(rng.range(3.6, 5.6), a);
    if (this.spot) {
      this.spot.x = clamp(this.spot.x, -COURT.HALF_L + 1, COURT.HALF_L - 1);
      this.spot.z = clamp(this.spot.z, -COURT.HALF_W + 0.8, COURT.HALF_W - 0.8);
    }
  }
  queueShot() {
    const { rng, d, p } = this;
    this.wantShoot = true;
    this.releaseAt = clamp(rng.normal(SHOT.SWEET_CENTER, d.releaseSd), 0.3, 1.3);
    p.layupQ = clamp(rng.normal(0.92, d.releaseSd * 0.9), 0.55, 1);
    this.holdT = 0;
  }
};

// src/net/protocol.js
var PROTOCOL_VERSION = 3;
var TICK_HZ = 60;
var SNAP_HZ = 30;
var ROOM_CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
var STATES = ["free", "shooting", "layup", "dunk", "grapple", "punch", "stunned", "frozen"];
var MSTATES = ["countdown", "live", "scored", "buzzer", "final", "ended"];
var ITEMS2 = [null, "grapple", "jetpack", "punch", "freeze", "banana", "magnet", "energy"];
var r2 = (v) => Math.round(v * 100) / 100;
var r3 = (v) => Math.round(v * 1e3) / 1e3;
function encodeSnapshot(m) {
  const slot = (p) => p ? m.players.indexOf(p) : -1;
  const players = m.players.map((p) => {
    const flags = (p.onGround ? 1 : 0) | (p.sprinting ? 2 : 0) | (p.stance ? 4 : 0) | (p.isHuman ? 8 : 0);
    const sw = p.swipe ? [r3(p.swipe.t), p.swipe.side, p.swipe.resolved ? 1 : 0, p.swipe.hit ? 1 : 0, r2(p.swipe.tx), r2(p.swipe.ty), r2(p.swipe.tz)] : 0;
    const g = p.state === "grapple" && p.grapple ? [r2(p.grapple.target.x), r2(p.grapple.target.y), r2(p.grapple.target.z), p.grapple.kind === "rim" ? 1 : 0] : 0;
    const dk = p.state === "dunk" && p.dunk ? [m.hoops.indexOf(p.dunk.hoop), p.dunk.slammed ? 1 : 0] : 0;
    return [
      r3(p.x),
      r3(p.y),
      r3(p.z),
      r2(p.vx),
      r2(p.vy),
      r2(p.vz),
      r3(p.yaw),
      STATES.indexOf(p.state),
      r3(p.stateT),
      flags,
      ITEMS2.indexOf(p.item),
      p.fire,
      r2(p.jetT),
      r2(p.magnetT),
      r2(p.energyT),
      r2(p.dashT),
      r2(p.dashCd),
      r2(p.moveCd),
      r2(p.moveT),
      p.moveSide,
      p.hand,
      sw,
      r2(p.passT),
      r2(p.shootLock),
      r3(p.meter),
      r2(p.landT),
      r2(p.stamina),
      r2(p.reachT),
      r2(p.strippedT),
      r2(p.anklesT),
      r2(p.slipT),
      r2(p.stumbleT),
      r2(p.blockT),
      r2(p.crossT),
      r2(p.callT),
      r2(p.stealCd),
      g,
      dk
    ];
  });
  const b = m.ball;
  const shot = b.shot ? [slot(b.shot.shooter), b.shot.resolved ? 1 : 0, b.shot.blocked ? 1 : 0] : 0;
  const ball = [r3(b.x), r3(b.y), r3(b.z), r2(b.vx), r2(b.vy), r2(b.vz), r2(b.spinX % 100), r2(b.spinZ % 100), slot(b.holder), shot, b.pass ? slot(b.pass.to) : -1];
  return {
    p: players,
    b: ball,
    sc: m.score.slice(),
    ck: r2(m.clock),
    st: MSTATES.indexOf(m.state),
    stt: r2(m.stateT || 0),
    ot: m.overtime ? 1 : 0,
    w: m.winner ?? -1,
    bx: [m.box.active ? 1 : 0, r2(m.box.x), r2(m.box.z)],
    h: m.hoops.map((h) => [r2(h.rimShake || 0), r2(h.netSway.x), r2(h.netSway.z)]),
    pr: m.projectiles.map((q) => [q.id, r2(q.x), r2(q.y), r2(q.z)]),
    tr: m.traps.map((t) => [t.id, t.kind, r2(t.x), r2(t.z), r2(t.armT || 0)]),
    ds: m.stops.slice()
  };
}
function encodeStats(m) {
  return m.players.map((p) => ({ ...p.stats }));
}
function encodeEvents(m, events) {
  const out = [];
  for (const e of events) {
    if (e.type === "dribble" && !e.player) continue;
    const o = {};
    for (const [k, v] of Object.entries(e)) {
      if (v && typeof v === "object") {
        const pi = m.players.indexOf(v);
        if (pi >= 0) {
          o[k] = { $p: pi };
          continue;
        }
        const hi = m.hoops.indexOf(v);
        if (hi >= 0) {
          o[k] = { $h: hi };
          continue;
        }
        if ("x" in v && "z" in v) {
          o[k] = { x: r2(v.x), y: r2(v.y || 0), z: r2(v.z) };
          continue;
        }
        continue;
      }
      o[k] = typeof v === "number" ? r3(v) : v;
    }
    out.push(o);
  }
  return out;
}
function sanitizeInput(raw) {
  const num = (v, lo, hi) => typeof v === "number" && Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : 0;
  const e = raw && typeof raw.e === "object" && raw.e ? raw.e : {};
  return {
    seq: num(raw.seq, 0, 1e9),
    mx: num(raw.mx, -1, 1),
    mz: num(raw.mz, -1, 1),
    sprint: !!raw.sp,
    shootHeld: !!raw.sh,
    passDir: Array.isArray(raw.pd) ? { x: num(raw.pd[0], -1, 1), z: num(raw.pd[1], -1, 1) } : null,
    aim: Array.isArray(raw.aim) ? { x: num(raw.aim[0], -40, 40), y: num(raw.aim[1], -5, 20), z: num(raw.aim[2], -40, 40) } : null,
    edges: {
      jump: !!e.jump,
      dash: !!e.dash,
      move: e.move === 1 ? 1 : e.move === -1 ? -1 : 0,
      pass: !!e.pass,
      call: !!e.call,
      shootDown: !!e.shootDown,
      steal: !!e.steal,
      useItem: !!e.useItem
    },
    hold: typeof raw.hold === "number" ? num(raw.hold, 0, 5e3) : null
  };
}
function newRoomCode(rand = Math.random) {
  let s = "";
  for (let i = 0; i < 5; i++) s += ROOM_CODE_ALPHABET[Math.floor(rand() * ROOM_CODE_ALPHABET.length)];
  return s;
}
function cleanName(n) {
  const s = String(n || "").toUpperCase().replace(/[^A-Z0-9 ]/g, "").trim().slice(0, 12);
  const banned = ["FUCK", "SHIT", "BITCH", "NIGG", "FAG", "CUNT", "DICK", "PUSSY", "RAPE", "NAZI", "HITLER", "SLUT", "WHORE", "KYS"];
  if (!s || banned.some((w) => s.replace(/ /g, "").includes(w))) return "PLAYER";
  return s;
}

// server/game.js
var RECONNECT_GRACE = 20;
var LOBBY_GRACE = 30;
var COUNTDOWN = 3;
var DURATIONS = [90, 120, 180];
var ITEM_KEYS = Object.keys(ITEMS.POOL);
var GameServer = class {
  constructor(store2, log = console.log) {
    this.store = store2;
    this.log = log;
    this.sessions = /* @__PURE__ */ new Map();
    this.rooms = /* @__PURE__ */ new Map();
    this.queues = { casual: [], ranked: [] };
    this.mmTimer = setInterval(() => this.matchmake(), 500);
  }
  stop() {
    clearInterval(this.mmTimer);
    for (const r of this.rooms.values()) r.destroy();
  }
  get online() {
    let n = 0;
    for (const s of this.sessions.values()) if (s.connected) n++;
    return n;
  }
  // ---------------------------------------------------------------- connections
  onConnection(ws, ip) {
    const conn = { ws, session: null, ip, msgs: 0, windowT: Date.now() };
    ws.on("message", (data) => {
      const now = Date.now();
      if (now - conn.windowT > 1e3) {
        conn.windowT = now;
        conn.msgs = 0;
      }
      if (++conn.msgs > 150) return;
      if (data.length > 4096) return;
      let msg;
      try {
        msg = JSON.parse(data.toString());
      } catch (e) {
        return;
      }
      if (!msg || typeof msg.t !== "string") return;
      try {
        this.onMessage(conn, msg);
      } catch (e) {
        this.log("[server] message error", e.stack);
      }
    });
    ws.on("close", (code) => {
      if (process.env.NET_DEBUG) this.log("[server] close", code, conn.session && conn.session.name);
      if (conn.session && conn.session.ws === ws) this.onDisconnect(conn.session);
    });
    ws.on("error", () => {
    });
  }
  onMessage(conn, msg) {
    if (msg.t === "hello") return this.hello(conn, msg);
    const s = conn.session;
    if (!s) return send(conn.ws, { t: "error", code: "nohello", msg: "Say hello first" });
    switch (msg.t) {
      case "ping":
        send(s.ws, { t: "pong", c: msg.c, s: Date.now() });
        break;
      case "queue":
        this.enqueue(s, msg.mode === "ranked" ? "ranked" : "casual");
        break;
      case "cancelQueue":
        this.dequeue(s, true);
        break;
      case "createRoom":
        this.createRoom(s, msg);
        break;
      case "joinRoom":
        this.joinRoom(s, String(msg.code || "").toUpperCase().slice(0, 6));
        break;
      case "leaveRoom":
        this.leaveRoom(s, true);
        break;
      case "ready":
        s.room?.setReady(s, !!msg.ready);
        break;
      case "roomSettings":
        s.room?.setSettings(s, msg);
        break;
      case "start":
        s.room?.hostStart(s);
        break;
      case "input":
        s.room?.match?.input(s, msg.i);
        break;
      case "rematch":
        s.room?.voteRematch(s);
        break;
      case "toLobby":
        s.room?.toLobby(s);
        break;
      case "emote":
        s.room?.emote(s, msg.e);
        break;
      case "look":
        s.look = cleanLook(msg.look);
        s.loadout = cleanLoadout(msg.loadout);
        s.room?.broadcastRoom();
        break;
      case "leaderboard":
        send(s.ws, { t: "leaderboard", ...this.store.leaderboard(), online: this.online });
        break;
      case "rivals":
        send(s.ws, { t: "rivals", list: this.store.rivals(s.id) });
        break;
      case "challenge":
        this.challenge(s, String(msg.id || "").slice(0, 40));
        break;
      default:
        break;
    }
  }
  hello(conn, msg) {
    if (msg.v !== PROTOCOL_VERSION) return send(conn.ws, { t: "error", code: "version", msg: "Your game is out of date. Reload the page." });
    const name = cleanName(msg.name);
    const rec = this.store.auth(msg.id, msg.secret, name);
    if (!rec) return send(conn.ws, { t: "error", code: "auth", msg: "Player identity rejected. A new one will be created." });
    let s = this.sessions.get(rec.id);
    if (s && s.connected && s.ws !== conn.ws) {
      send(s.ws, { t: "error", code: "replaced", msg: "You connected from another tab." });
      try {
        s.ws.close();
      } catch (e) {
      }
    }
    if (!s) {
      s = new Session(rec.id);
      this.sessions.set(rec.id, s);
    }
    s.ws = conn.ws;
    s.connected = true;
    s.name = name;
    s.look = cleanLook(msg.look);
    s.loadout = cleanLoadout(msg.loadout);
    conn.session = s;
    send(s.ws, { t: "welcome", you: this.store.publicProfile(rec), online: this.online, serverTime: Date.now() });
    if (s.room) s.room.onReconnect(s);
  }
  onDisconnect(s) {
    s.connected = false;
    this.dequeue(s, false);
    if (s.room) s.room.onDisconnect(s);
    setTimeout(() => {
      if (!s.connected && !s.room) this.sessions.delete(s.id);
    }, 12e4).unref?.();
  }
  // ---------------------------------------------------------------- matchmaking
  enqueue(s, mode) {
    if (s.room) this.leaveRoom(s, true);
    this.dequeue(s, false);
    s.queue = { mode, since: Date.now(), rating: this.store.data.players[s.id]?.rating ?? 1e3 };
    this.queues[mode].push(s);
    this.sendQueueStatus(s);
  }
  dequeue(s, notify) {
    if (!s.queue) return;
    const q = this.queues[s.queue.mode];
    const i = q.indexOf(s);
    if (i >= 0) q.splice(i, 1);
    s.queue = null;
    if (notify) send(s.ws, { t: "queue", searching: false });
  }
  sendQueueStatus(s) {
    if (!s.queue) return;
    send(s.ws, { t: "queue", searching: true, mode: s.queue.mode, waited: Math.round((Date.now() - s.queue.since) / 1e3), inQueue: this.queues[s.queue.mode].length, online: this.online });
  }
  matchmake() {
    for (const mode of ["casual", "ranked"]) {
      const q = this.queues[mode].filter((s) => s.connected);
      this.queues[mode] = q;
      const used = /* @__PURE__ */ new Set();
      for (let i = 0; i < q.length; i++) {
        if (used.has(q[i])) continue;
        const a = q[i];
        const waitA = (Date.now() - a.queue.since) / 1e3;
        let best = null, bestGap = Infinity;
        for (let j = i + 1; j < q.length; j++) {
          const b = q[j];
          if (used.has(b)) continue;
          const gap = Math.abs(a.queue.rating - b.queue.rating);
          if (mode === "ranked") {
            const waitB = (Date.now() - b.queue.since) / 1e3;
            const window = 120 + 30 * Math.min(waitA, waitB);
            if (gap > window) continue;
          }
          if (gap < bestGap) {
            bestGap = gap;
            best = b;
          }
        }
        if (best) {
          used.add(a);
          used.add(best);
          this.dequeue(a, false);
          this.dequeue(best, false);
          const room = this.newRoom({ mode: "1v1", kind: mode, host: a });
          room.addPlayer(a);
          room.addPlayer(best);
          room.startCountdown();
        }
      }
      for (const s of this.queues[mode]) this.sendQueueStatus(s);
    }
  }
  // ---------------------------------------------------------------- rooms
  newRoom(opts) {
    let code;
    do {
      code = newRoomCode();
    } while (this.rooms.has(code));
    const room = new Room(this, code, opts);
    this.rooms.set(code, room);
    return room;
  }
  createRoom(s, msg) {
    this.dequeue(s, false);
    if (s.room) this.leaveRoom(s, true);
    const room = this.newRoom({ mode: msg.mode === "2v2" ? "2v2" : "1v1", kind: "private", host: s });
    room.addPlayer(s);
  }
  /** Invite a past opponent: opens a private room and pings them if they're online right now. */
  challenge(s, targetId) {
    const now = Date.now();
    if (s.lastChallenge && now - s.lastChallenge < 4e3) return;
    s.lastChallenge = now;
    const t = this.sessions.get(targetId);
    const known = this.store.data.players[targetId];
    if (!known || targetId === s.id) return;
    const h = this.store.h2h(s.id, targetId);
    if (!h.wins && !h.losses) return;
    if (!s.room || s.room.kind !== "private" || s.room.state !== "lobby" || s.room.mode !== "1v1") this.createRoom(s, { mode: "1v1" });
    const room = s.room;
    const online = !!(t && t.connected);
    if (online) send(t.ws, { t: "invite", from: s.name, fromId: s.id, code: room.code });
    send(s.ws, { t: "challengeSent", name: known.name, online, code: room.code });
  }
  joinRoom(s, code) {
    const room = this.rooms.get(code);
    if (!room || room.kind !== "private") return send(s.ws, { t: "error", code: "noroom", msg: `No room with code ${code}. Check the code with your friend.` });
    if (s.room === room) return room.broadcastRoom();
    if (room.state !== "lobby") return send(s.ws, { t: "error", code: "started", msg: "That match has already started. Ask your friend to go back to the lobby." });
    if (room.seats.length >= room.maxHumans) return send(s.ws, { t: "error", code: "full", msg: "That room is full." });
    this.dequeue(s, false);
    if (s.room) this.leaveRoom(s, true);
    room.addPlayer(s);
  }
  leaveRoom(s, voluntary) {
    const room = s.room;
    if (!room) return;
    room.removePlayer(s, voluntary);
    s.room = null;
    send(s.ws, { t: "left" });
    if (!room.seats.length) {
      room.destroy();
      this.rooms.delete(room.code);
    }
  }
};
var Session = class {
  constructor(id) {
    this.id = id;
    this.ws = null;
    this.connected = false;
    this.name = "PLAYER";
    this.look = {};
    this.loadout = ITEM_KEYS.slice(0, 4);
    this.room = null;
    this.queue = null;
  }
};
function send(ws, msg) {
  if (ws && ws.readyState === 1) ws.send(JSON.stringify(msg));
}
function cleanLook(l) {
  if (!l || typeof l !== "object") return {};
  const str = (v, n = 16) => typeof v === "string" ? v.replace(/[^a-z0-9_-]/gi, "").slice(0, n) : void 0;
  const num = Number.isFinite(+l.number) ? Math.max(0, Math.min(99, Math.round(+l.number))) : 23;
  return { skin: str(l.skin), hair: str(l.hair), shoes: str(l.shoes), gear: str(l.gear), ball: str(l.ball), fx: str(l.fx), body: str(l.body), face: str(l.face), number: num };
}
function cleanLoadout(lo) {
  if (!Array.isArray(lo)) return ITEM_KEYS.slice(0, 4);
  const out = [...new Set(lo.filter((k) => ITEM_KEYS.includes(k)))].slice(0, 4);
  return out.length >= 2 ? out : ITEM_KEYS.slice(0, 4);
}
var Room = class {
  constructor(server2, code, { mode, kind, host }) {
    this.server = server2;
    this.code = code;
    this.mode = mode;
    this.kind = kind;
    this.hostId = host.id;
    this.seats = [];
    this.state = "lobby";
    this.settings = { duration: 120, items: true };
    this.match = null;
    this.timers = [];
    this.matchNo = 0;
  }
  get maxHumans() {
    return this.mode === "2v2" ? 4 : 2;
  }
  get ranked() {
    return this.kind === "ranked";
  }
  destroy() {
    this.match?.stop();
    for (const t of this.timers) clearTimeout(t);
    this.timers = [];
  }
  later(fn, ms) {
    const t = setTimeout(fn, ms);
    this.timers.push(t);
    return t;
  }
  seatOf(s) {
    return this.seats.find((x) => x.s === s);
  }
  addPlayer(s) {
    const teamCounts = [0, 1].map((t) => this.seats.filter((x) => x.team === t).length);
    const team = teamCounts[0] <= teamCounts[1] ? 0 : 1;
    this.seats.push({ s, ready: this.kind !== "private", team, rematch: false, leftT: 0 });
    s.room = this;
    this.broadcastEvent({ kind: "join", name: s.name });
    this.broadcastRoom();
  }
  removePlayer(s, voluntary) {
    const seat = this.seatOf(s);
    if (!seat) return;
    this.seats.splice(this.seats.indexOf(seat), 1);
    if (this.match && this.state === "playing") this.match.playerLeft(seat, voluntary);
    if (this.hostId === s.id && this.seats.length) this.hostId = this.seats[0].s.id;
    this.broadcastEvent({ kind: "leave", name: s.name });
    if (this.state === "countdown" && this.kind === "private") {
      this.state = "lobby";
      this.broadcastRoom();
    }
    if (this.state === "countdown" && this.kind !== "private") this.cancelQueuedStart();
    if (this.state === "results") this.checkRematch();
    this.broadcastRoom();
  }
  cancelQueuedStart() {
    for (const t of this.timers) clearTimeout(t);
    this.timers = [];
    for (const seat of this.seats.slice()) {
      send(seat.s.ws, { t: "error", code: "opponentLeft", msg: "Your opponent left before the match started. Searching again\u2026" });
      this.server.leaveRoom(seat.s, false);
      if (seat.s.connected) this.server.enqueue(seat.s, this.kind);
    }
  }
  onDisconnect(s) {
    const seat = this.seatOf(s);
    if (!seat) return;
    seat.leftT = Date.now();
    this.broadcastEvent({ kind: "disconnect", name: s.name });
    if (this.state === "playing" && this.match) this.match.pauseFor(seat);
    else {
      this.later(() => {
        if (!s.connected && this.seatOf(s)) this.server.leaveRoom(s, false);
        if (!this.seats.length) {
          this.destroy();
          this.server.rooms.delete(this.code);
        }
      }, LOBBY_GRACE * 1e3);
      if (this.state === "countdown") {
        this.state = this.kind === "private" ? "lobby" : this.state;
        if (this.kind !== "private") this.cancelQueuedStart();
      }
    }
    this.broadcastRoom();
  }
  onReconnect(s) {
    const seat = this.seatOf(s);
    if (!seat) {
      s.room = null;
      return;
    }
    this.broadcastEvent({ kind: "reconnect", name: s.name });
    this.broadcastRoom();
    if (this.match && (this.state === "playing" || this.state === "results")) this.match.resync(s);
    if (this.state === "playing" && this.match) this.match.resumeIfReady();
  }
  setReady(s, ready) {
    const seat = this.seatOf(s);
    if (!seat || this.state !== "lobby") return;
    seat.ready = ready;
    this.broadcastRoom();
  }
  setSettings(s, msg) {
    if (s.id !== this.hostId || this.state !== "lobby" || this.kind !== "private") return;
    if (DURATIONS.includes(msg.duration)) this.settings.duration = msg.duration;
    if (typeof msg.items === "boolean") this.settings.items = msg.items;
    if ((msg.mode === "1v1" || msg.mode === "2v2") && msg.mode !== this.mode) {
      if (msg.mode === "1v1" && this.seats.length > 2) return send(s.ws, { t: "error", code: "toomany", msg: "Too many players for 1v1." });
      this.mode = msg.mode;
      this.rebalance();
    }
    if (Number.isInteger(msg.swapTeam)) {
      const seat = this.seats.find((x) => x.s.id === msg.swapId) || this.seatOf(s);
      if (seat && this.mode === "2v2") {
        const other = 1 - seat.team;
        if (this.seats.filter((x) => x.team === other).length < 2) seat.team = other;
      }
    }
    for (const seat of this.seats) seat.ready = seat.s.id === this.hostId ? seat.ready : false;
    this.broadcastRoom();
  }
  rebalance() {
    this.seats.forEach((seat, i) => {
      seat.team = this.mode === "1v1" ? i % 2 : seat.team;
    });
  }
  canStart() {
    const humans = this.seats.filter((x) => x.s.connected);
    if (humans.length < 2) return "Need at least 2 players";
    if (this.mode === "1v1" && this.seats.filter((x) => x.team === 0).length !== 1) return "Teams are uneven";
    if (humans.some((x) => !x.ready && x.s.id !== this.hostId)) return "Waiting for everyone to be ready";
    return null;
  }
  hostStart(s) {
    if (s.id !== this.hostId || this.state !== "lobby") return;
    const why = this.canStart();
    if (why) return send(s.ws, { t: "error", code: "notready", msg: why });
    this.startCountdown();
  }
  startCountdown() {
    this.state = "countdown";
    this.countdownEnd = Date.now() + COUNTDOWN * 1e3;
    for (const seat of this.seats) seat.rematch = false;
    this.broadcastRoom();
    this.later(() => {
      if (this.state !== "countdown") return;
      if (this.seats.filter((x) => x.s.connected).length < 2) {
        this.state = "lobby";
        this.broadcastRoom();
        return;
      }
      this.startMatch();
    }, COUNTDOWN * 1e3);
  }
  startMatch() {
    this.state = "playing";
    this.matchNo++;
    this.match = new NetMatch(this);
    this.broadcastRoom();
  }
  onMatchEnd() {
    this.state = "results";
    this.broadcastRoom();
  }
  voteRematch(s) {
    const seat = this.seatOf(s);
    if (!seat || this.state !== "results") return;
    seat.rematch = true;
    this.broadcastRoom();
    this.checkRematch();
  }
  checkRematch() {
    if (this.state !== "results") return;
    const humans = this.seats.filter((x) => x.s.connected);
    if (humans.length >= 2 && humans.every((x) => x.rematch)) this.startCountdown();
  }
  toLobby(s) {
    if (this.kind !== "private") return this.server.leaveRoom(s, true);
    if (this.state !== "results") return;
    this.state = "lobby";
    this.match?.stop();
    this.match = null;
    for (const seat of this.seats) {
      seat.ready = false;
      seat.rematch = false;
    }
    this.broadcastRoom();
  }
  emote(s, id) {
    const EMOTES = ["gg", "nice", "runit", "oops", "wow", "ez"];
    if (!EMOTES.includes(id)) return;
    const now = Date.now();
    if (s.lastEmote && now - s.lastEmote < 1500) return;
    s.lastEmote = now;
    const slot = this.match ? this.match.slotOf(s) : -1;
    for (const seat of this.seats) send(seat.s.ws, { t: "emote", from: s.name, slot, e: id });
  }
  roomPayload(forS) {
    const h2h = this.mode === "1v1" && this.seats.length === 2 ? this.server.store.h2h(forS.id, this.seats.find((x) => x.s !== forS).s.id) : null;
    return {
      t: "room",
      code: this.code,
      mode: this.mode,
      kind: this.kind,
      hostId: this.hostId,
      state: this.state,
      settings: this.settings,
      countdown: this.state === "countdown" ? Math.max(0, (this.countdownEnd - Date.now()) / 1e3) : 0,
      maxPlayers: this.maxHumans,
      you: forS.id,
      h2h,
      matchNo: this.matchNo,
      players: this.seats.map((x) => {
        const rec = this.server.store.data.players[x.s.id];
        return { id: x.s.id, name: x.s.name, look: x.s.look, ready: x.ready, team: x.team, connected: x.s.connected, rematch: x.rematch, rating: rec ? Math.round(rec.rating) : 1e3, tier: tierFor(rec ? rec.rating : 1e3) };
      })
    };
  }
  broadcastRoom() {
    for (const seat of this.seats) send(seat.s.ws, this.roomPayload(seat.s));
  }
  broadcastEvent(ev) {
    for (const seat of this.seats) send(seat.s.ws, { t: "roomEvent", ...ev });
  }
  broadcast(msg) {
    const json = JSON.stringify(msg);
    for (const seat of this.seats) if (seat.s.connected && seat.s.ws?.readyState === 1) seat.s.ws.send(json);
  }
};
var NetMatch = class {
  constructor(room) {
    this.room = room;
    const teamSize = room.mode === "2v2" ? 2 : 1;
    const seed = Math.random() * 2 ** 32 >>> 0;
    this.seed = seed;
    const byTeam = [0, 1].map((t) => room.seats.filter((x) => x.team === t));
    const itemPools = {};
    this.m = new Match({ seed, teamSize, difficulty: "normal", duration: process.env.DEV_DURATION ? +process.env.DEV_DURATION : room.ranked ? 120 : room.settings.duration, items: room.ranked ? true : room.settings.items, itemPools });
    const m = this.m;
    this.slots = m.players.map((p) => {
      const list = byTeam[p.team];
      const idx = m.teamPlayers(p.team).indexOf(p);
      const seat = list[idx] || null;
      p.isHuman = !!seat;
      p.speedMul = 1;
      if (seat) {
        p.name = seat.s.name;
        itemPools[p.id] = seat.s.loadout;
      } else p.name = ["ROOK", "BLITZ", "TANK", "MO"][p.id % 4];
      return { seat, s: seat ? seat.s : null, intent: emptyIntent(), edges: {}, lastSeq: -1, holdMs: null, bot: seat ? null : new BotController(m, p, "normal") };
    });
    this.tick = 0;
    this.pendingEvents = [];
    this.lastStats = "";
    this.paused = null;
    this.startedAt = Date.now();
    this.ended = false;
    for (const seat of room.seats) this.sendStart(seat.s);
    this.last = performance.now();
    this.acc = 0;
    this.timer = setInterval(() => this.loop(), 1e3 / TICK_HZ);
  }
  stop() {
    clearInterval(this.timer);
  }
  slotOf(s) {
    return this.slots.findIndex((x) => x.s === s);
  }
  sendStart(s) {
    const m = this.m;
    send(s.ws, {
      t: "matchStart",
      seed: this.seed,
      teamSize: m.teamSize,
      ranked: this.room.ranked,
      kind: this.room.kind,
      mode: this.room.mode,
      you: this.slotOf(s),
      duration: m.duration,
      items: m.itemsEnabled,
      matchNo: this.room.matchNo,
      roster: m.players.map((p, i) => ({ slot: i, team: p.team, name: p.name, human: p.isHuman, look: this.slots[i].s ? this.slots[i].s.look : null, id: this.slots[i].s ? this.slots[i].s.id : null }))
    });
  }
  resync(s) {
    this.sendStart(s);
    send(s.ws, { t: "snap", st: Date.now(), tick: this.tick, s: encodeSnapshot(this.m), stats: encodeStats(this.m) });
    if (this.result) send(s.ws, { t: "matchEnd", ...this.resultFor(s) });
  }
  /** Inputs: continuous fields replace, presses accumulate until the next sim tick uses them. */
  input(s, raw) {
    const i = this.slotOf(s);
    if (i < 0 || !raw || typeof raw !== "object") return;
    const slot = this.slots[i];
    const it = sanitizeInput(raw);
    if (it.seq <= slot.lastSeq) return;
    slot.lastSeq = it.seq;
    const t = slot.intent;
    t.mx = it.mx;
    t.mz = it.mz;
    t.sprint = it.sprint;
    t.shootHeld = it.shootHeld;
    t.passDir = it.passDir;
    t.aim = it.aim;
    for (const [k, v] of Object.entries(it.edges)) if (v) slot.edges[k] = v;
    if (!it.shootHeld && it.hold != null) slot.holdMs = it.hold;
  }
  pauseFor(seat) {
    if (this.ended) return;
    const until = Date.now() + RECONNECT_GRACE * 1e3;
    this.paused = { name: seat.s.name, until, id: seat.s.id };
    this.room.broadcast({ t: "paused", name: seat.s.name, until: RECONNECT_GRACE });
    clearTimeout(this.pauseT);
    this.pauseT = setTimeout(() => {
      if (!this.paused || seat.s.connected) return;
      this.playerLeft(seat, false);
    }, RECONNECT_GRACE * 1e3);
  }
  resumeIfReady() {
    if (!this.paused) return;
    if (this.slots.some((x) => x.s && !x.s.connected)) return;
    this.paused = null;
    clearTimeout(this.pauseT);
    this.resumeAt = Date.now() + 2e3;
    this.room.broadcast({ t: "resumed", in: 2 });
  }
  playerLeft(seat, voluntary) {
    if (this.ended) return;
    const i = this.slots.findIndex((x) => x.seat === seat);
    if (i < 0) return;
    const p = this.m.players[i];
    const teammatesLeft = this.slots.some((x, j) => j !== i && x.s && x.s.connected && this.m.players[j].team === p.team);
    const opponentsLeft = this.slots.some((x, j) => x.s && x.s.connected && this.m.players[j].team !== p.team);
    if (!opponentsLeft) {
      this.end({ abandoned: true });
      return;
    }
    if (this.m.teamSize === 1 || !teammatesLeft) {
      this.end({ forfeitTeam: p.team, leaver: seat.s.id, voluntary });
      return;
    }
    this.slots[i] = { seat: null, s: null, intent: emptyIntent(), edges: {}, lastSeq: -1, holdMs: null, bot: new BotController(this.m, p, "normal") };
    p.isHuman = false;
    p.name = `${p.name} (BOT)`;
    if (this.paused) {
      this.paused = null;
      clearTimeout(this.pauseT);
      this.room.broadcast({ t: "resumed", in: 0 });
    }
    this.room.broadcast({ t: "botTakeover", slot: i });
  }
  loop() {
    const now = performance.now();
    let dt = (now - this.last) / 1e3;
    this.last = now;
    if (dt > 0.25) dt = 0.25;
    if (this.ended) return;
    if (this.paused) {
      if (this.tick % 30 === 0) this.room.broadcast({ t: "paused", name: this.paused.name, until: Math.max(0, Math.ceil((this.paused.until - Date.now()) / 1e3)) });
      this.tick++;
      return;
    }
    if (this.resumeAt && Date.now() < this.resumeAt) return;
    this.acc += dt;
    const m = this.m;
    while (this.acc >= PHYS.DT) {
      this.acc -= PHYS.DT;
      const intents = this.slots.map((slot, i) => {
        if (slot.bot) return slot.bot.update(PHYS.DT);
        const t = slot.intent;
        const e = slot.edges;
        const p = m.players[i];
        if (p.state === "shooting" && !t.shootHeld && slot.holdMs != null) {
          const client = slot.holdMs / 1e3;
          p.stateT = Math.max(p.stateT - 0.12, Math.min(p.stateT + 0.06, client));
          slot.holdMs = null;
        }
        const it = { ...t, jump: !!e.jump, dash: !!e.dash, move: e.move || 0, pass: !!e.pass, call: !!e.call, shootDown: !!e.shootDown, steal: !!e.steal, useItem: !!e.useItem };
        slot.edges = {};
        return it;
      });
      m.update(PHYS.DT, intents);
      const ev = m.drainEvents();
      if (ev.length) this.pendingEvents.push(...encodeEvents(m, ev.filter((x) => x.type !== "wall")));
      this.tick++;
      if (m.state === "ended") {
        this.end({});
        return;
      }
    }
    if (this.tick % Math.round(TICK_HZ / SNAP_HZ) === 0 || this.pendingEvents.length) {
      const msg = { t: "snap", st: Date.now(), tick: this.tick, s: encodeSnapshot(m) };
      if (this.pendingEvents.length) {
        msg.ev = this.pendingEvents;
        this.pendingEvents = [];
      }
      const stats = encodeStats(m);
      const sj = JSON.stringify(stats);
      if (sj !== this.lastStats || this.tick % 60 === 0) {
        msg.stats = stats;
        this.lastStats = sj;
      }
      this.room.broadcast(msg);
    }
  }
  end(opts) {
    if (this.ended) return;
    this.ended = true;
    clearInterval(this.timer);
    clearTimeout(this.pauseT);
    const m = this.m;
    let winner = m.winner;
    if (opts.forfeitTeam != null) winner = 1 - opts.forfeitTeam;
    const duration = (Date.now() - this.startedAt) / 1e3;
    const humans = this.slots.map((x, i) => ({ s: x.s, team: m.players[i].team, slot: i })).filter((x) => x.s);
    let delta = null;
    if (m.teamSize === 1 && winner != null && !opts.abandoned) {
      const w = this.slots.find((x, i) => x.s && m.players[i].team === winner);
      const l = this.slots.find((x, i) => m.players[i].team !== winner && (x.s || opts.leaver));
      const loserId = l?.s?.id || opts.leaver;
      if (w?.s && loserId) {
        delta = this.room.server.store.recordResult({ winner: w.s.id, loser: loserId, score: m.score.slice(), ranked: this.room.ranked, forfeit: opts.forfeitTeam != null, duration });
      }
    }
    this.result = {
      winner,
      score: m.score.slice(),
      forfeit: opts.forfeitTeam != null,
      abandoned: !!opts.abandoned,
      ranked: this.room.ranked,
      duration: m.time,
      stops: m.stops.slice(),
      stats: encodeStats(m),
      delta,
      players: m.players.map((p, i) => ({ slot: i, name: p.name, team: p.team, human: p.isHuman, id: this.slots[i].s ? this.slots[i].s.id : null }))
    };
    for (const h of humans) send(h.s.ws, { t: "matchEnd", ...this.resultFor(h.s) });
    this.room.onMatchEnd();
  }
  resultFor(s) {
    const r = this.result;
    const rec = this.room.server.store.data.players[s.id];
    let h2h = null;
    if (this.m.teamSize === 1) {
      const other = r.players.find((p) => p.id && p.id !== s.id);
      if (other) h2h = this.room.server.store.h2h(s.id, other.id);
    }
    return { ...r, you: this.slotOf(s), rating: rec ? Math.round(rec.rating) : null, tier: rec ? tierFor(rec.rating) : null, h2h };
  }
};

// server/index.js
var PORT = +process.env.PORT || 8787;
var here = path2.dirname(new URL(import.meta.url).pathname);
var STATIC_DIR = process.env.STATIC_DIR || [path2.join(here, "..", "dist"), path2.join(here, "dist"), here].find((d) => fs2.existsSync(path2.join(d, "index.html"))) || path2.join(here, "..", "dist");
var ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
var TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff": "font/woff", ".jpeg": "image/jpeg", ".woff2": "font/woff2", ".ico": "image/x-icon" };
var store = new Store();
var game = new GameServer(store);
var server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/health") {
    res.writeHead(200, { "content-type": "application/json", "access-control-allow-origin": "*" });
    res.end(JSON.stringify({ ok: true, online: game.online, rooms: game.rooms.size }));
    return;
  }
  if (fs2.existsSync(STATIC_DIR)) {
    let file = path2.normalize(path2.join(STATIC_DIR, decodeURIComponent(url.pathname)));
    if (!file.startsWith(STATIC_DIR)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (fs2.existsSync(file) && fs2.statSync(file).isDirectory()) file = path2.join(file, "index.html");
    if (!TYPES[path2.extname(file)] || path2.extname(file) === ".json" || path2.basename(file) === "server.js" || file.includes(`${path2.sep}data${path2.sep}`)) {
      res.writeHead(404);
      res.end();
      return;
    }
    if (fs2.existsSync(file)) {
      res.writeHead(200, { "content-type": TYPES[path2.extname(file)] || "application/octet-stream", "cache-control": file.endsWith(".html") ? "no-cache" : "public, max-age=3600" });
      fs2.createReadStream(file).pipe(res);
      return;
    }
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Illegal Basketball game server. Connect the game to ws(s)://<this host>/ws");
});
var wss = new import_websocket_server.default({ noServer: true, maxPayload: 8 * 1024 });
server.on("upgrade", (req, socket, head) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname !== "/ws") {
    socket.destroy();
    return;
  }
  const origin = req.headers.origin || "";
  if (ORIGINS.length && !ORIGINS.includes(origin)) {
    socket.destroy();
    return;
  }
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit("connection", ws, req);
    game.onConnection(ws, req.socket.remoteAddress);
  });
});
var hb = setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.missed >= 2) {
      ws.terminate();
      continue;
    }
    ws.missed = (ws.missed || 0) + 1;
    try {
      ws.ping();
    } catch (e) {
    }
  }
}, 15e3);
wss.on("connection", (ws) => {
  ws.missed = 0;
  ws.on("pong", () => {
    ws.missed = 0;
  });
});
server.listen(PORT, () => console.log(`[server] Illegal Basketball listening on :${PORT} (ws path /ws)`));
var shutdown = () => {
  clearInterval(hb);
  store.flush();
  game.stop();
  process.exit(0);
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
