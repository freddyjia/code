
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/JsTool/qrcode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'deee9cBSTVIIYDbxheJKArK', 'qrcode');
// Scripts/JsTool/qrcode.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------
(function () {
  'use strict';

  function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
  }

  QR8bitByte.prototype = {
    getLength: function getLength(buffer) {
      return this.data.length;
    },
    write: function write(buffer) {
      for (var i = 0; i < this.data.length; i++) {
        // not JIS ...
        buffer.put(this.data.charCodeAt(i), 8);
      }
    }
  }; //---------------------------------------------------------------------
  // QRCode
  //---------------------------------------------------------------------

  var QRCode = function QRCode(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = new Array();
  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    module.exports = QRCode;
  }

  QRCode.prototype = {
    addData: function addData(data) {
      var newData = new QR8bitByte(data);
      this.dataList.push(newData);
      this.dataCache = null;
    },
    isDark: function isDark(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
        throw new Error(row + "," + col);
      }

      return this.modules[row][col];
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      // Calculate automatically typeNumber if provided is < 1
      if (this.typeNumber < 1) {
        var typeNumber = 1;

        for (typeNumber = 1; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
          var buffer = new QRBitBuffer();
          var totalDataCount = 0;

          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          for (var i = 0; i < this.dataList.length; i++) {
            var data = this.dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) break;
        }

        this.typeNumber = typeNumber;
      }

      this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);

      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);

        for (var col = 0; col < this.moduleCount; col++) {
          this.modules[row][col] = null; //(col + row) % 3;
        }
      }

      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);

      if (this.typeNumber >= 7) {
        this.setupTypeNumber(test);
      }

      if (this.dataCache == null) {
        this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }

      this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;

          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    getBestMaskPattern: function getBestMaskPattern() {
      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i++) {
        this.makeImpl(true, i);
        var lostPoint = QRUtil.getLostPoint(this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    },
    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      var cs = 1;
      this.make();

      for (var row = 0; row < this.modules.length; row++) {
        var y = row * cs;

        for (var col = 0; col < this.modules[row].length; col++) {
          var x = col * cs;
          var dark = this.modules[row][col];

          if (dark) {
            qr_mc.beginFill(0, 100);
            qr_mc.moveTo(x, y);
            qr_mc.lineTo(x + cs, y);
            qr_mc.lineTo(x + cs, y + cs);
            qr_mc.lineTo(x, y + cs);
            qr_mc.endFill();
          }
        }
      }

      return qr_mc;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }

        this.modules[r][6] = r % 2 == 0;
      }

      for (var c = 8; c < this.moduleCount - 8; c++) {
        if (this.modules[6][c] != null) {
          continue;
        }

        this.modules[6][c] = c % 2 == 0;
      }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);

      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];

          if (this.modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data); // vertical		

      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;

        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
      } // horizontal


      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;

        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      } // fixed module


      this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;

      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;

        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;

              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }

              var mask = QRUtil.getMask(maskPattern, row, col - c);

              if (mask) {
                dark = !dark;
              }

              this.modules[row][col - c] = dark;
              bitIndex--;

              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
  };
  QRCode.PAD0 = 0xEC;
  QRCode.PAD1 = 0x11;

  QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();

    for (var i = 0; i < dataList.length; i++) {
      var data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    } // calc num max data.


    var totalDataCount = 0;

    for (var i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }

    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    } // end code


    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    } // padding


    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    } // padding


    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }

      buffer.put(QRCode.PAD0, 8);

      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }

      buffer.put(QRCode.PAD1, 8);
    }

    return QRCode.createBytes(buffer, rsBlocks);
  };

  QRCode.createBytes = function (buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);

    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r].dataCount;
      var ecCount = rsBlocks[r].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);

      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }

      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);

      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }

    var totalCodeCount = 0;

    for (var i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }

    var data = new Array(totalCodeCount);
    var index = 0;

    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }

    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }

    return data;
  }; //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------


  var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  }; //---------------------------------------------------------------------
  // QRErrorCorrectLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }; //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }; //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;

      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }

      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;

      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }

      return data << 12 | d;
    },
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;

      while (data != 0) {
        digit++;
        data >>>= 1;
      }

      return digit;
    },
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;

        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;

        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;

        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;

        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;

        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;

        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;

        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);

      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }

      return a;
    },
    getLengthInBits: function getLengthInBits(mode, type) {
      if (1 <= type && type < 10) {
        // 1 - 9
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;

          case QRMode.MODE_ALPHA_NUM:
            return 9;

          case QRMode.MODE_8BIT_BYTE:
            return 8;

          case QRMode.MODE_KANJI:
            return 8;

          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 27) {
        // 10 - 26
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;

          case QRMode.MODE_ALPHA_NUM:
            return 11;

          case QRMode.MODE_8BIT_BYTE:
            return 16;

          case QRMode.MODE_KANJI:
            return 10;

          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 41) {
        // 27 - 40
        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;

          case QRMode.MODE_ALPHA_NUM:
            return 13;

          case QRMode.MODE_8BIT_BYTE:
            return 16;

          case QRMode.MODE_KANJI:
            return 12;

          default:
            throw new Error("mode:" + mode);
        }
      } else {
        throw new Error("type:" + type);
      }
    },
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0; // LEVEL1

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);

          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrCode.isDark(row + r, col + c)) {
                sameCount++;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      } // LEVEL2


      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col)) count++;
          if (qrCode.isDark(row + 1, col)) count++;
          if (qrCode.isDark(row, col + 1)) count++;
          if (qrCode.isDark(row + 1, col + 1)) count++;

          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      } // LEVEL3


      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      } // LEVEL4


      var darkCount = 0;

      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    }
  }; //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = {
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }

      return QRMath.LOG_TABLE[n];
    },
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  };

  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }

  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }

  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  } //---------------------------------------------------------------------
  // QRPolynomial
  //---------------------------------------------------------------------


  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }

    var offset = 0;

    while (offset < num.length && num[offset] == 0) {
      offset++;
    }

    this.num = new Array(num.length - offset + shift);

    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }

  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);

      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }

      return new QRPolynomial(num, 0);
    },
    mod: function mod(e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }

      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
      var num = new Array(this.getLength());

      for (var i = 0; i < this.getLength(); i++) {
        num[i] = this.get(i);
      }

      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      } // recursive call


      return new QRPolynomial(num, 0).mod(e);
    }
  }; //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }

  QRRSBlock.RS_BLOCK_TABLE = [// L
  // M
  // Q
  // H
  // 1
  [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
  [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
  [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4		
  [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
  [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
  [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7		
  [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
  [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
  [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10		
  [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
  [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
  [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
  [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
  [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
  [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], // 16
  [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
  [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
  [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
  [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
  [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
  [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
  [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
  [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
  [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
  [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
  [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
  [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
  [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
  [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
  [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
  [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
  [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
  [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
  [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
  [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
  [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
  [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
  [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
  [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
  [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }

    var length = rsBlock.length / 3;
    var list = new Array();

    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var totalCount = rsBlock[i * 3 + 1];
      var dataCount = rsBlock[i * 3 + 2];

      for (var j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }

    return list;
  };

  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

      default:
        return undefined;
    }
  }; //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------


  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }

  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);

      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }

      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }

      this.length++;
    }
  };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcSnNUb29sXFxxcmNvZGUuanMiXSwibmFtZXMiOlsiUVI4Yml0Qnl0ZSIsImRhdGEiLCJtb2RlIiwiUVJNb2RlIiwiTU9ERV84QklUX0JZVEUiLCJwcm90b3R5cGUiLCJnZXRMZW5ndGgiLCJidWZmZXIiLCJsZW5ndGgiLCJ3cml0ZSIsImkiLCJwdXQiLCJjaGFyQ29kZUF0IiwiUVJDb2RlIiwidHlwZU51bWJlciIsImVycm9yQ29ycmVjdExldmVsIiwibW9kdWxlcyIsIm1vZHVsZUNvdW50IiwiZGF0YUNhY2hlIiwiZGF0YUxpc3QiLCJBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhZGREYXRhIiwibmV3RGF0YSIsInB1c2giLCJpc0RhcmsiLCJyb3ciLCJjb2wiLCJFcnJvciIsImdldE1vZHVsZUNvdW50IiwibWFrZSIsInJzQmxvY2tzIiwiUVJSU0Jsb2NrIiwiZ2V0UlNCbG9ja3MiLCJRUkJpdEJ1ZmZlciIsInRvdGFsRGF0YUNvdW50IiwiZGF0YUNvdW50IiwiUVJVdGlsIiwiZ2V0TGVuZ3RoSW5CaXRzIiwibWFrZUltcGwiLCJnZXRCZXN0TWFza1BhdHRlcm4iLCJ0ZXN0IiwibWFza1BhdHRlcm4iLCJzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuIiwic2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4iLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cFR5cGVJbmZvIiwic2V0dXBUeXBlTnVtYmVyIiwiY3JlYXRlRGF0YSIsIm1hcERhdGEiLCJyIiwiYyIsIm1pbkxvc3RQb2ludCIsInBhdHRlcm4iLCJsb3N0UG9pbnQiLCJnZXRMb3N0UG9pbnQiLCJjcmVhdGVNb3ZpZUNsaXAiLCJ0YXJnZXRfbWMiLCJpbnN0YW5jZV9uYW1lIiwiZGVwdGgiLCJxcl9tYyIsImNyZWF0ZUVtcHR5TW92aWVDbGlwIiwiY3MiLCJ5IiwieCIsImRhcmsiLCJiZWdpbkZpbGwiLCJtb3ZlVG8iLCJsaW5lVG8iLCJlbmRGaWxsIiwicG9zIiwiZ2V0UGF0dGVyblBvc2l0aW9uIiwiaiIsImJpdHMiLCJnZXRCQ0hUeXBlTnVtYmVyIiwibW9kIiwiTWF0aCIsImZsb29yIiwiZ2V0QkNIVHlwZUluZm8iLCJpbmMiLCJiaXRJbmRleCIsImJ5dGVJbmRleCIsIm1hc2siLCJnZXRNYXNrIiwiUEFEMCIsIlBBRDEiLCJwdXRCaXQiLCJjcmVhdGVCeXRlcyIsIm9mZnNldCIsIm1heERjQ291bnQiLCJtYXhFY0NvdW50IiwiZGNkYXRhIiwiZWNkYXRhIiwiZGNDb3VudCIsImVjQ291bnQiLCJ0b3RhbENvdW50IiwibWF4IiwicnNQb2x5IiwiZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbCIsInJhd1BvbHkiLCJRUlBvbHlub21pYWwiLCJtb2RQb2x5IiwibW9kSW5kZXgiLCJnZXQiLCJ0b3RhbENvZGVDb3VudCIsImluZGV4IiwiTU9ERV9OVU1CRVIiLCJNT0RFX0FMUEhBX05VTSIsIk1PREVfS0FOSkkiLCJRUkVycm9yQ29ycmVjdExldmVsIiwiTCIsIk0iLCJRIiwiSCIsIlFSTWFza1BhdHRlcm4iLCJQQVRURVJOMDAwIiwiUEFUVEVSTjAwMSIsIlBBVFRFUk4wMTAiLCJQQVRURVJOMDExIiwiUEFUVEVSTjEwMCIsIlBBVFRFUk4xMDEiLCJQQVRURVJOMTEwIiwiUEFUVEVSTjExMSIsIlBBVFRFUk5fUE9TSVRJT05fVEFCTEUiLCJHMTUiLCJHMTgiLCJHMTVfTUFTSyIsImQiLCJnZXRCQ0hEaWdpdCIsImRpZ2l0IiwiZXJyb3JDb3JyZWN0TGVuZ3RoIiwiYSIsIm11bHRpcGx5IiwiUVJNYXRoIiwiZ2V4cCIsInR5cGUiLCJxckNvZGUiLCJzYW1lQ291bnQiLCJjb3VudCIsImRhcmtDb3VudCIsInJhdGlvIiwiYWJzIiwiZ2xvZyIsIm4iLCJMT0dfVEFCTEUiLCJFWFBfVEFCTEUiLCJudW0iLCJzaGlmdCIsInVuZGVmaW5lZCIsImUiLCJSU19CTE9DS19UQUJMRSIsInJzQmxvY2siLCJnZXRSc0Jsb2NrVGFibGUiLCJsaXN0IiwiYnVmSW5kZXgiLCJiaXQi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b250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxyXG4vL1xyXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgS2F6dWhpa28gQXJhc2VcclxuLy9cclxuLy8gVVJMOiBodHRwOi8vd3d3LmQtcHJvamVjdC5jb20vXHJcbi8vXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcclxuLy8gICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4vL1xyXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZiBcclxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcclxuLy8gICBodHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXHJcbi8vXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUjhiaXRCeXRlXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGZ1bmN0aW9uIFFSOGJpdEJ5dGUoZGF0YSkge1xyXG5cdFx0dGhpcy5tb2RlID0gUVJNb2RlLk1PREVfOEJJVF9CWVRFO1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHR9XHJcblxyXG5cdFFSOGJpdEJ5dGUucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdGdldExlbmd0aCA6IGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHdyaXRlIDogZnVuY3Rpb24oYnVmZmVyKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Ly8gbm90IEpJUyAuLi5cclxuXHRcdFx0XHRidWZmZXIucHV0KHRoaXMuZGF0YS5jaGFyQ29kZUF0KGkpLCA4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUVJDb2RlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0bGV0IFFSQ29kZSA9IGZ1bmN0aW9uICh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG5cdFx0dGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuXHRcdHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbDtcclxuXHRcdHRoaXMubW9kdWxlcyA9IG51bGw7XHJcblx0XHR0aGlzLm1vZHVsZUNvdW50ID0gMDtcclxuXHRcdHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHR9XHJcblx0aWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gUVJDb2RlO1x0XHJcblx0fVxyXG5cdFFSQ29kZS5wcm90b3R5cGUgPSB7XHJcblx0XHRcclxuXHRcdGFkZERhdGEgOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdHZhciBuZXdEYXRhID0gbmV3IFFSOGJpdEJ5dGUoZGF0YSk7XHJcblx0XHRcdHRoaXMuZGF0YUxpc3QucHVzaChuZXdEYXRhKTtcclxuXHRcdFx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0aXNEYXJrIDogZnVuY3Rpb24ocm93LCBjb2wpIHtcclxuXHRcdFx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihyb3cgKyBcIixcIiArIGNvbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldE1vZHVsZUNvdW50IDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm1vZHVsZUNvdW50O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bWFrZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBDYWxjdWxhdGUgYXV0b21hdGljYWxseSB0eXBlTnVtYmVyIGlmIHByb3ZpZGVkIGlzIDwgMVxyXG5cdFx0XHRpZiAodGhpcy50eXBlTnVtYmVyIDwgMSApe1xyXG5cdFx0XHRcdHZhciB0eXBlTnVtYmVyID0gMTtcclxuXHRcdFx0XHRmb3IgKHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDwgNDA7IHR5cGVOdW1iZXIrKykge1xyXG5cdFx0XHRcdFx0dmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHRcdFx0XHRcdHZhciB0b3RhbERhdGFDb3VudCA9IDA7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG5cdFx0XHRcdFx0XHRidWZmZXIucHV0KGRhdGEubW9kZSwgNCk7XHJcblx0XHRcdFx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLm1vZGUsIHR5cGVOdW1iZXIpICk7XHJcblx0XHRcdFx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm1ha2VJbXBsKGZhbHNlLCB0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpICk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtYWtlSW1wbCA6IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLm1vZHVsZUNvdW50ID0gdGhpcy50eXBlTnVtYmVyICogNCArIDE3O1xyXG5cdFx0XHR0aGlzLm1vZHVsZXMgPSBuZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLm1vZHVsZUNvdW50OyByb3crKykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRoaXMubW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93XVtjb2xdID0gbnVsbDsvLyhjb2wgKyByb3cpICUgMztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XHJcblx0XHRcdHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50IC0gNywgMCk7XHJcblx0XHRcdHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLm1vZHVsZUNvdW50IC0gNyk7XHJcblx0XHRcdHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuXHRcdFx0dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcclxuXHRcdFx0dGhpcy5zZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0aGlzLnR5cGVOdW1iZXIgPj0gNykge1xyXG5cdFx0XHRcdHRoaXMuc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0aWYgKHRoaXMuZGF0YUNhY2hlID09IG51bGwpIHtcclxuXHRcdFx0XHR0aGlzLmRhdGFDYWNoZSA9IFFSQ29kZS5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCwgdGhpcy5kYXRhTGlzdCk7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHR0aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsIG1hc2tQYXR0ZXJuKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiA6IGZ1bmN0aW9uKHJvdywgY29sKSAge1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yICh2YXIgciA9IC0xOyByIDw9IDc7IHIrKykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyb3cgKyByIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93ICsgcikgY29udGludWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoY29sICsgYyA8PSAtMSB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCArIGMpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoICgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09IDAgfHwgYyA9PSA2KSApXHJcblx0XHRcdFx0XHRcdFx0fHwgKDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT0gMCB8fCByID09IDYpIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdH1cdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRnZXRCZXN0TWFza1BhdHRlcm4gOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgbWluTG9zdFBvaW50ID0gMDtcclxuXHRcdFx0dmFyIHBhdHRlcm4gPSAwO1xyXG5cdFx0XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5tYWtlSW1wbCh0cnVlLCBpKTtcclxuXHRcdFxyXG5cdFx0XHRcdHZhciBsb3N0UG9pbnQgPSBRUlV0aWwuZ2V0TG9zdFBvaW50KHRoaXMpO1xyXG5cdFx0XHJcblx0XHRcdFx0aWYgKGkgPT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiAgbG9zdFBvaW50KSB7XHJcblx0XHRcdFx0XHRtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XHJcblx0XHRcdFx0XHRwYXR0ZXJuID0gaTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRyZXR1cm4gcGF0dGVybjtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGNyZWF0ZU1vdmllQ2xpcCA6IGZ1bmN0aW9uKHRhcmdldF9tYywgaW5zdGFuY2VfbmFtZSwgZGVwdGgpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgcXJfbWMgPSB0YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSwgZGVwdGgpO1xyXG5cdFx0XHR2YXIgY3MgPSAxO1xyXG5cdFx0XHJcblx0XHRcdHRoaXMubWFrZSgpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGhpcy5tb2R1bGVzLmxlbmd0aDsgcm93KyspIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgeSA9IHJvdyAqIGNzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRoaXMubW9kdWxlc1tyb3ddLmxlbmd0aDsgY29sKyspIHtcclxuXHRcdFxyXG5cdFx0XHRcdFx0dmFyIHggPSBjb2wgKiBjcztcclxuXHRcdFx0XHRcdHZhciBkYXJrID0gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChkYXJrKSB7XHJcblx0XHRcdFx0XHRcdHFyX21jLmJlZ2luRmlsbCgwLCAxMDApO1xyXG5cdFx0XHRcdFx0XHRxcl9tYy5tb3ZlVG8oeCwgeSk7XHJcblx0XHRcdFx0XHRcdHFyX21jLmxpbmVUbyh4ICsgY3MsIHkpO1xyXG5cdFx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5ICsgY3MpO1xyXG5cdFx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCwgeSArIGNzKTtcclxuXHRcdFx0XHRcdFx0cXJfbWMuZW5kRmlsbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHFyX21jO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXR1cFRpbWluZ1BhdHRlcm4gOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAodmFyIHIgPSA4OyByIDwgdGhpcy5tb2R1bGVDb3VudCAtIDg7IHIrKykge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1tyXVs2XSA9IChyICUgMiA9PSAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdGZvciAodmFyIGMgPSA4OyBjIDwgdGhpcy5tb2R1bGVDb3VudCAtIDg7IGMrKykge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1s2XVtjXSA9IChjICUgMiA9PSAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4gOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgcG9zID0gUVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciByb3cgPSBwb3NbaV07XHJcblx0XHRcdFx0XHR2YXIgY29sID0gcG9zW2pdO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgcisrKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAociA9PSAtMiB8fCByID09IDIgfHwgYyA9PSAtMiB8fCBjID09IDIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHx8IChyID09IDAgJiYgYyA9PSAwKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c2V0dXBUeXBlTnVtYmVyIDogZnVuY3Rpb24odGVzdCkge1xyXG5cdFx0XHJcblx0XHRcdHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcclxuXHRcdFxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuXHRcdFx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbTWF0aC5mbG9vcihpIC8gMyldW2kgJSAzICsgdGhpcy5tb2R1bGVDb3VudCAtIDggLSAzXSA9IG1vZDtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1tpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM11bTWF0aC5mbG9vcihpIC8gMyldID0gbW9kO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzZXR1cFR5cGVJbmZvIDogZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgZGF0YSA9ICh0aGlzLmVycm9yQ29ycmVjdExldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XHJcblx0XHRcdHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xyXG5cdFx0XHJcblx0XHRcdC8vIHZlcnRpY2FsXHRcdFxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuXHRcdFxyXG5cdFx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG5cdFx0XHJcblx0XHRcdFx0aWYgKGkgPCA2KSB7XHJcblx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbaV1bOF0gPSBtb2Q7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpIDwgOCkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdC8vIGhvcml6b250YWxcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcblx0XHRcclxuXHRcdFx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoaSA8IDgpIHtcclxuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaSA8IDkpIHtcclxuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHQvLyBmaXhlZCBtb2R1bGVcclxuXHRcdFx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XHJcblx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdG1hcERhdGEgOiBmdW5jdGlvbihkYXRhLCBtYXNrUGF0dGVybikge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGluYyA9IC0xO1xyXG5cdFx0XHR2YXIgcm93ID0gdGhpcy5tb2R1bGVDb3VudCAtIDE7XHJcblx0XHRcdHZhciBiaXRJbmRleCA9IDc7XHJcblx0XHRcdHZhciBieXRlSW5kZXggPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yICh2YXIgY29sID0gdGhpcy5tb2R1bGVDb3VudCAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XHJcblx0XHRcclxuXHRcdFx0XHRpZiAoY29sID09IDYpIGNvbC0tO1xyXG5cdFx0XHJcblx0XHRcdFx0d2hpbGUgKHRydWUpIHtcclxuXHRcdFxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgYyA9IDA7IGMgPCAyOyBjKyspIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1vZHVsZXNbcm93XVtjb2wgLSBjXSA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRhcmsgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGFyayA9ICggKCAoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgbWFzayA9IFFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLCByb3csIGNvbCAtIGMpO1xyXG5cdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKG1hc2spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhcmsgPSAhZGFyaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xyXG5cdFx0XHRcdFx0XHRcdGJpdEluZGV4LS07XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGJ5dGVJbmRleCsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Yml0SW5kZXggPSA3O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJvdyArPSBpbmM7XHJcblx0XHRcclxuXHRcdFx0XHRcdGlmIChyb3cgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93KSB7XHJcblx0XHRcdFx0XHRcdHJvdyAtPSBpbmM7XHJcblx0XHRcdFx0XHRcdGluYyA9IC1pbmM7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0UVJDb2RlLlBBRDAgPSAweEVDO1xyXG5cdFFSQ29kZS5QQUQxID0gMHgxMTtcclxuXHJcblx0UVJDb2RlLmNyZWF0ZURhdGEgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCwgZGF0YUxpc3QpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHRcdFxyXG5cdFx0dmFyIGJ1ZmZlciA9IG5ldyBRUkJpdEJ1ZmZlcigpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkYXRhID0gZGF0YUxpc3RbaV07XHJcblx0XHRcdGJ1ZmZlci5wdXQoZGF0YS5tb2RlLCA0KTtcclxuXHRcdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikgKTtcclxuXHRcdFx0ZGF0YS53cml0ZShidWZmZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNhbGMgbnVtIG1heCBkYXRhLlxyXG5cdFx0dmFyIHRvdGFsRGF0YUNvdW50ID0gMDtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY29kZSBsZW5ndGggb3ZlcmZsb3cuIChcIlxyXG5cdFx0XHRcdCsgYnVmZmVyLmdldExlbmd0aEluQml0cygpXHJcblx0XHRcdFx0KyBcIj5cIlxyXG5cdFx0XHRcdCsgIHRvdGFsRGF0YUNvdW50ICogOFxyXG5cdFx0XHRcdCsgXCIpXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVuZCBjb2RlXHJcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0YnVmZmVyLnB1dCgwLCA0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwYWRkaW5nXHJcblx0XHR3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XHJcblx0XHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhZGRpbmdcclxuXHRcdHdoaWxlICh0cnVlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDAsIDgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIucHV0KFFSQ29kZS5QQUQxLCA4KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUVJDb2RlLmNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xyXG5cdH1cclxuXHJcblx0UVJDb2RlLmNyZWF0ZUJ5dGVzID0gZnVuY3Rpb24oYnVmZmVyLCByc0Jsb2Nrcykge1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cdFx0XHJcblx0XHR2YXIgbWF4RGNDb3VudCA9IDA7XHJcblx0XHR2YXIgbWF4RWNDb3VudCA9IDA7XHJcblx0XHRcclxuXHRcdHZhciBkY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuXHRcdHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuXHRcdFxyXG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cclxuXHRcdFx0dmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7XHJcblx0XHRcdHZhciBlY0NvdW50ID0gcnNCbG9ja3Nbcl0udG90YWxDb3VudCAtIGRjQ291bnQ7XHJcblxyXG5cdFx0XHRtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XHJcblx0XHRcdG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuXHRcdFx0XHJcblx0XHRcdGRjZGF0YVtyXSA9IG5ldyBBcnJheShkY0NvdW50KTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0ZGNkYXRhW3JdW2ldID0gMHhmZiAmIGJ1ZmZlci5idWZmZXJbaSArIG9mZnNldF07XHJcblx0XHRcdH1cclxuXHRcdFx0b2Zmc2V0ICs9IGRjQ291bnQ7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcblx0XHRcdHZhciByYXdQb2x5ID0gbmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG5cclxuXHRcdFx0dmFyIG1vZFBvbHkgPSByYXdQb2x5Lm1vZChyc1BvbHkpO1xyXG5cdFx0XHRlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG5cdFx0XHRcdGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKT8gbW9kUG9seS5nZXQobW9kSW5kZXgpIDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHRvdGFsQ29kZUNvdW50ID0gMDtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XHJcblx0XHR2YXIgaW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSsrKSB7XHJcblx0XHRcdGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuXHRcdFx0XHRpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRhdGFbaW5kZXgrK10gPSBkY2RhdGFbcl1baV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXhFY0NvdW50OyBpKyspIHtcclxuXHRcdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cdFx0XHRcdGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGF0YVtpbmRleCsrXSA9IGVjZGF0YVtyXVtpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHJcblx0fVxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSTW9kZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdHZhciBRUk1vZGUgPSB7XHJcblx0XHRNT0RFX05VTUJFUiA6XHRcdDEgPDwgMCxcclxuXHRcdE1PREVfQUxQSEFfTlVNIDogXHQxIDw8IDEsXHJcblx0XHRNT0RFXzhCSVRfQllURSA6IFx0MSA8PCAyLFxyXG5cdFx0TU9ERV9LQU5KSSA6XHRcdDEgPDwgM1xyXG5cdH07XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUVJFcnJvckNvcnJlY3RMZXZlbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0dmFyIFFSRXJyb3JDb3JyZWN0TGV2ZWwgPSB7XHJcblx0XHRMIDogMSxcclxuXHRcdE0gOiAwLFxyXG5cdFx0USA6IDMsXHJcblx0XHRIIDogMlxyXG5cdH07XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUVJNYXNrUGF0dGVyblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdHZhciBRUk1hc2tQYXR0ZXJuID0ge1xyXG5cdFx0UEFUVEVSTjAwMCA6IDAsXHJcblx0XHRQQVRURVJOMDAxIDogMSxcclxuXHRcdFBBVFRFUk4wMTAgOiAyLFxyXG5cdFx0UEFUVEVSTjAxMSA6IDMsXHJcblx0XHRQQVRURVJOMTAwIDogNCxcclxuXHRcdFBBVFRFUk4xMDEgOiA1LFxyXG5cdFx0UEFUVEVSTjExMCA6IDYsXHJcblx0XHRQQVRURVJOMTExIDogN1xyXG5cdH07XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUVJVdGlsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHR2YXIgUVJVdGlsID0ge1xyXG5cclxuXHRcdFBBVFRFUk5fUE9TSVRJT05fVEFCTEUgOiBbXHJcblx0XHRcdFtdLFxyXG5cdFx0XHRbNiwgMThdLFxyXG5cdFx0XHRbNiwgMjJdLFxyXG5cdFx0XHRbNiwgMjZdLFxyXG5cdFx0XHRbNiwgMzBdLFxyXG5cdFx0XHRbNiwgMzRdLFxyXG5cdFx0XHRbNiwgMjIsIDM4XSxcclxuXHRcdFx0WzYsIDI0LCA0Ml0sXHJcblx0XHRcdFs2LCAyNiwgNDZdLFxyXG5cdFx0XHRbNiwgMjgsIDUwXSxcclxuXHRcdFx0WzYsIDMwLCA1NF0sXHRcdFxyXG5cdFx0XHRbNiwgMzIsIDU4XSxcclxuXHRcdFx0WzYsIDM0LCA2Ml0sXHJcblx0XHRcdFs2LCAyNiwgNDYsIDY2XSxcclxuXHRcdFx0WzYsIDI2LCA0OCwgNzBdLFxyXG5cdFx0XHRbNiwgMjYsIDUwLCA3NF0sXHJcblx0XHRcdFs2LCAzMCwgNTQsIDc4XSxcclxuXHRcdFx0WzYsIDMwLCA1NiwgODJdLFxyXG5cdFx0XHRbNiwgMzAsIDU4LCA4Nl0sXHJcblx0XHRcdFs2LCAzNCwgNjIsIDkwXSxcclxuXHRcdFx0WzYsIDI4LCA1MCwgNzIsIDk0XSxcclxuXHRcdFx0WzYsIDI2LCA1MCwgNzQsIDk4XSxcclxuXHRcdFx0WzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcblx0XHRcdFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxyXG5cdFx0XHRbNiwgMzIsIDU4LCA4NCwgMTEwXSxcclxuXHRcdFx0WzYsIDMwLCA1OCwgODYsIDExNF0sXHJcblx0XHRcdFs2LCAzNCwgNjIsIDkwLCAxMThdLFxyXG5cdFx0XHRbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXHJcblx0XHRcdFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcblx0XHRcdFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXHJcblx0XHRcdFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0sXHJcblx0XHRcdFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcblx0XHRcdFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXHJcblx0XHRcdFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXHJcblx0XHRcdFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuXHRcdFx0WzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxyXG5cdFx0XHRbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0sXHJcblx0XHRcdFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuXHRcdFx0WzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxyXG5cdFx0XHRbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF1cclxuXHRcdF0sXHJcblxyXG5cdFx0RzE1IDogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxyXG5cdFx0RzE4IDogKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKSxcclxuXHRcdEcxNV9NQVNLIDogKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApXHR8ICgxIDw8IDQpIHwgKDEgPDwgMSksXHJcblxyXG5cdFx0Z2V0QkNIVHlwZUluZm8gOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdHZhciBkID0gZGF0YSA8PCAxMDtcclxuXHRcdFx0d2hpbGUgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE1KSA+PSAwKSB7XHJcblx0XHRcdFx0ZCBePSAoUVJVdGlsLkcxNSA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpICkgKTsgXHRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gKCAoZGF0YSA8PCAxMCkgfCBkKSBeIFFSVXRpbC5HMTVfTUFTSztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0QkNIVHlwZU51bWJlciA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0dmFyIGQgPSBkYXRhIDw8IDEyO1xyXG5cdFx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpID49IDApIHtcclxuXHRcdFx0XHRkIF49IChRUlV0aWwuRzE4IDw8IChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxOCkgKSApOyBcdFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRCQ0hEaWdpdCA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHJcblx0XHRcdHZhciBkaWdpdCA9IDA7XHJcblxyXG5cdFx0XHR3aGlsZSAoZGF0YSAhPSAwKSB7XHJcblx0XHRcdFx0ZGlnaXQrKztcclxuXHRcdFx0XHRkYXRhID4+Pj0gMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGRpZ2l0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRQYXR0ZXJuUG9zaXRpb24gOiBmdW5jdGlvbih0eXBlTnVtYmVyKSB7XHJcblx0XHRcdHJldHVybiBRUlV0aWwuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldE1hc2sgOiBmdW5jdGlvbihtYXNrUGF0dGVybiwgaSwgaikge1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChtYXNrUGF0dGVybikge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMCA6IHJldHVybiAoaSArIGopICUgMiA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMSA6IHJldHVybiBpICUgMiA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMCA6IHJldHVybiBqICUgMyA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMSA6IHJldHVybiAoaSArIGopICUgMyA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMCA6IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSApICUgMiA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMSA6IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09IDA7XHJcblx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwIDogcmV0dXJuICggKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7XHJcblx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExIDogcmV0dXJuICggKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09IDA7XHJcblxyXG5cdFx0XHRkZWZhdWx0IDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIgKyBtYXNrUGF0dGVybik7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbCA6IGZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCkge1xyXG5cclxuXHRcdFx0dmFyIGEgPSBuZXcgUVJQb2x5bm9taWFsKFsxXSwgMCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0YSA9IGEubXVsdGlwbHkobmV3IFFSUG9seW5vbWlhbChbMSwgUVJNYXRoLmdleHAoaSldLCAwKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0TGVuZ3RoSW5CaXRzIDogZnVuY3Rpb24obW9kZSwgdHlwZSkge1xyXG5cclxuXHRcdFx0aWYgKDEgPD0gdHlwZSAmJiB0eXBlIDwgMTApIHtcclxuXHJcblx0XHRcdFx0Ly8gMSAtIDlcclxuXHJcblx0XHRcdFx0c3dpdGNoKG1vZGUpIHtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiBcdDogcmV0dXJuIDEwO1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNIFx0OiByZXR1cm4gOTtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURVx0OiByZXR1cm4gODtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICBcdDogcmV0dXJuIDg7XHJcblx0XHRcdFx0ZGVmYXVsdCA6XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlIDwgMjcpIHtcclxuXHJcblx0XHRcdFx0Ly8gMTAgLSAyNlxyXG5cclxuXHRcdFx0XHRzd2l0Y2gobW9kZSkge1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSIFx0OiByZXR1cm4gMTI7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU0gXHQ6IHJldHVybiAxMTtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURVx0OiByZXR1cm4gMTY7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSSAgXHQ6IHJldHVybiAxMDtcclxuXHRcdFx0XHRkZWZhdWx0IDpcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1vZGU6XCIgKyBtb2RlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPCA0MSkge1xyXG5cclxuXHRcdFx0XHQvLyAyNyAtIDQwXHJcblxyXG5cdFx0XHRcdHN3aXRjaChtb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgXHQ6IHJldHVybiAxNDtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTVx0OiByZXR1cm4gMTM7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEVcdDogcmV0dXJuIDE2O1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkkgIFx0OiByZXR1cm4gMTI7XHJcblx0XHRcdFx0ZGVmYXVsdCA6XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlOlwiICsgdHlwZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0TG9zdFBvaW50IDogZnVuY3Rpb24ocXJDb2RlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbW9kdWxlQ291bnQgPSBxckNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBsb3N0UG9pbnQgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTEVWRUwxXHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHNhbWVDb3VudCA9IDA7XHJcblx0XHRcdFx0XHR2YXIgZGFyayA9IHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIHIgPSAtMTsgciA8PSAxOyByKyspIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChyb3cgKyByIDwgMCB8fCBtb2R1bGVDb3VudCA8PSByb3cgKyByKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGMgPSAtMTsgYyA8PSAxOyBjKyspIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGNvbCArIGMgPCAwIHx8IG1vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHIgPT0gMCAmJiBjID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhcmsgPT0gcXJDb2RlLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNhbWVDb3VudCsrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChzYW1lQ291bnQgPiA1KSB7XHJcblx0XHRcdFx0XHRcdGxvc3RQb2ludCArPSAoMyArIHNhbWVDb3VudCAtIDUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTEVWRUwyXHJcblxyXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xyXG5cdFx0XHRcdFx0dmFyIGNvdW50ID0gMDtcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgICAgIGNvbCAgICApICkgY291bnQrKztcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCAgICApICkgY291bnQrKztcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgICAgIGNvbCArIDEpICkgY291bnQrKztcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpICkgY291bnQrKztcclxuXHRcdFx0XHRcdGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID09IDQpIHtcclxuXHRcdFx0XHRcdFx0bG9zdFBvaW50ICs9IDM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBMRVZFTDNcclxuXHJcblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcclxuXHRcdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKVxyXG5cdFx0XHRcdFx0XHRcdCYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMSlcclxuXHRcdFx0XHRcdFx0XHQmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDIpXHJcblx0XHRcdFx0XHRcdFx0JiYgIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAzKVxyXG5cdFx0XHRcdFx0XHRcdCYmICBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNClcclxuXHRcdFx0XHRcdFx0XHQmJiAhcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDUpXHJcblx0XHRcdFx0XHRcdFx0JiYgIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA2KSApIHtcclxuXHRcdFx0XHRcdFx0bG9zdFBvaW50ICs9IDQwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3crKykge1xyXG5cdFx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXHJcblx0XHRcdFx0XHRcdFx0JiYgIXFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sKVxyXG5cdFx0XHRcdFx0XHRcdCYmICBxckNvZGUuaXNEYXJrKHJvdyArIDIsIGNvbClcclxuXHRcdFx0XHRcdFx0XHQmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpXHJcblx0XHRcdFx0XHRcdFx0JiYgIHFyQ29kZS5pc0Rhcmsocm93ICsgNCwgY29sKVxyXG5cdFx0XHRcdFx0XHRcdCYmICFxckNvZGUuaXNEYXJrKHJvdyArIDUsIGNvbClcclxuXHRcdFx0XHRcdFx0XHQmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyA2LCBjb2wpICkge1xyXG5cdFx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gNDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBMRVZFTDRcclxuXHRcdFx0XHJcblx0XHRcdHZhciBkYXJrQ291bnQgPSAwO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblx0XHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbCkgKSB7XHJcblx0XHRcdFx0XHRcdGRhcmtDb3VudCsrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHJhdGlvID0gTWF0aC5hYnMoMTAwICogZGFya0NvdW50IC8gbW9kdWxlQ291bnQgLyBtb2R1bGVDb3VudCAtIDUwKSAvIDU7XHJcblx0XHRcdGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG5cclxuXHRcdFx0cmV0dXJuIGxvc3RQb2ludDtcdFx0XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFFSTWF0aFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdHZhciBRUk1hdGggPSB7XHJcblxyXG5cdFx0Z2xvZyA6IGZ1bmN0aW9uKG4pIHtcclxuXHRcdFxyXG5cdFx0XHRpZiAobiA8IDEpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJnbG9nKFwiICsgbiArIFwiKVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIFFSTWF0aC5MT0dfVEFCTEVbbl07XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRnZXhwIDogZnVuY3Rpb24obikge1xyXG5cdFx0XHJcblx0XHRcdHdoaWxlIChuIDwgMCkge1xyXG5cdFx0XHRcdG4gKz0gMjU1O1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0d2hpbGUgKG4gPj0gMjU2KSB7XHJcblx0XHRcdFx0biAtPSAyNTU7XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRyZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdEVYUF9UQUJMRSA6IG5ldyBBcnJheSgyNTYpLFxyXG5cdFx0XHJcblx0XHRMT0dfVEFCTEUgOiBuZXcgQXJyYXkoMjU2KVxyXG5cclxuXHR9O1xyXG5cdFx0XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHRcdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSAxIDw8IGk7XHJcblx0fVxyXG5cdGZvciAodmFyIGkgPSA4OyBpIDwgMjU2OyBpKyspIHtcclxuXHRcdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSBRUk1hdGguRVhQX1RBQkxFW2kgLSA0XVxyXG5cdFx0XHReIFFSTWF0aC5FWFBfVEFCTEVbaSAtIDVdXHJcblx0XHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNl1cclxuXHRcdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA4XTtcclxuXHR9XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG5cdFx0UVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldIF0gPSBpO1xyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUlBvbHlub21pYWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLCBzaGlmdCkge1xyXG5cclxuXHRcdGlmIChudW0ubGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCArIFwiL1wiICsgc2hpZnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHRcdHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09IDApIHtcclxuXHRcdFx0b2Zmc2V0Kys7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aCAtIG9mZnNldDsgaSsrKSB7XHJcblx0XHRcdHRoaXMubnVtW2ldID0gbnVtW2kgKyBvZmZzZXRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0UVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRnZXQgOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5udW1baW5kZXhdO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Z2V0TGVuZ3RoIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtdWx0aXBseSA6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgbnVtID0gbmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMSk7XHJcblx0XHRcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGUuZ2V0TGVuZ3RoKCk7IGorKykge1xyXG5cdFx0XHRcdFx0bnVtW2kgKyBqXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyh0aGlzLmdldChpKSApICsgUVJNYXRoLmdsb2coZS5nZXQoaikgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtb2QgOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcclxuXHRcdFx0aWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0dmFyIHJhdGlvID0gUVJNYXRoLmdsb2codGhpcy5nZXQoMCkgKSAtIFFSTWF0aC5nbG9nKGUuZ2V0KDApICk7XHJcblx0XHRcclxuXHRcdFx0dmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpICk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG5cdFx0XHRcdG51bVtpXSA9IHRoaXMuZ2V0KGkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG5cdFx0XHRcdG51bVtpXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyhlLmdldChpKSApICsgcmF0aW8pO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0Ly8gcmVjdXJzaXZlIGNhbGxcclxuXHRcdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRUlJTQmxvY2tcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSB7XHJcblx0XHR0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG5cdFx0dGhpcy5kYXRhQ291bnQgID0gZGF0YUNvdW50O1xyXG5cdH1cclxuXHJcblx0UVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xyXG5cclxuXHRcdC8vIExcclxuXHRcdC8vIE1cclxuXHRcdC8vIFFcclxuXHRcdC8vIEhcclxuXHJcblx0XHQvLyAxXHJcblx0XHRbMSwgMjYsIDE5XSxcclxuXHRcdFsxLCAyNiwgMTZdLFxyXG5cdFx0WzEsIDI2LCAxM10sXHJcblx0XHRbMSwgMjYsIDldLFxyXG5cdFx0XHJcblx0XHQvLyAyXHJcblx0XHRbMSwgNDQsIDM0XSxcclxuXHRcdFsxLCA0NCwgMjhdLFxyXG5cdFx0WzEsIDQ0LCAyMl0sXHJcblx0XHRbMSwgNDQsIDE2XSxcclxuXHJcblx0XHQvLyAzXHJcblx0XHRbMSwgNzAsIDU1XSxcclxuXHRcdFsxLCA3MCwgNDRdLFxyXG5cdFx0WzIsIDM1LCAxN10sXHJcblx0XHRbMiwgMzUsIDEzXSxcclxuXHJcblx0XHQvLyA0XHRcdFxyXG5cdFx0WzEsIDEwMCwgODBdLFxyXG5cdFx0WzIsIDUwLCAzMl0sXHJcblx0XHRbMiwgNTAsIDI0XSxcclxuXHRcdFs0LCAyNSwgOV0sXHJcblx0XHRcclxuXHRcdC8vIDVcclxuXHRcdFsxLCAxMzQsIDEwOF0sXHJcblx0XHRbMiwgNjcsIDQzXSxcclxuXHRcdFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcblx0XHRbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxyXG5cdFx0XHJcblx0XHQvLyA2XHJcblx0XHRbMiwgODYsIDY4XSxcclxuXHRcdFs0LCA0MywgMjddLFxyXG5cdFx0WzQsIDQzLCAxOV0sXHJcblx0XHRbNCwgNDMsIDE1XSxcclxuXHRcdFxyXG5cdFx0Ly8gN1x0XHRcclxuXHRcdFsyLCA5OCwgNzhdLFxyXG5cdFx0WzQsIDQ5LCAzMV0sXHJcblx0XHRbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxyXG5cdFx0WzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcclxuXHRcdFxyXG5cdFx0Ly8gOFxyXG5cdFx0WzIsIDEyMSwgOTddLFxyXG5cdFx0WzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcclxuXHRcdFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcblx0XHRbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG5cdFx0XHJcblx0XHQvLyA5XHJcblx0XHRbMiwgMTQ2LCAxMTZdLFxyXG5cdFx0WzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuXHRcdFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXHJcblx0XHRbNCwgMzYsIDEyLCA0LCAzNywgMTNdLFxyXG5cdFx0XHJcblx0XHQvLyAxMFx0XHRcclxuXHRcdFsyLCA4NiwgNjgsIDIsIDg3LCA2OV0sXHJcblx0XHRbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxyXG5cdFx0WzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRcdFs2LCA0MywgMTUsIDIsIDQ0LCAxNl0sXHJcblxyXG5cdFx0Ly8gMTFcclxuXHRcdFs0LCAxMDEsIDgxXSxcclxuXHRcdFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXHJcblx0XHRbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxyXG5cdFx0WzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAxMlxyXG5cdFx0WzIsIDExNiwgOTIsIDIsIDExNywgOTNdLFxyXG5cdFx0WzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuXHRcdFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXHJcblx0XHRbNywgNDIsIDE0LCA0LCA0MywgMTVdLFxyXG5cclxuXHRcdC8vIDEzXHJcblx0XHRbNCwgMTMzLCAxMDddLFxyXG5cdFx0WzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcclxuXHRcdFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcblx0XHRbMTIsIDMzLCAxMSwgNCwgMzQsIDEyXSxcclxuXHJcblx0XHQvLyAxNFxyXG5cdFx0WzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcblx0XHRbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxyXG5cdFx0WzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXHJcblx0XHRbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAxNVxyXG5cdFx0WzUsIDEwOSwgODcsIDEsIDExMCwgODhdLFxyXG5cdFx0WzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuXHRcdFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcblx0XHRbMTEsIDM2LCAxMl0sXHJcblxyXG5cdFx0Ly8gMTZcclxuXHRcdFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcclxuXHRcdFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcblx0XHRbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRcdFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDE3XHJcblx0XHRbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuXHRcdFsxMCwgNzQsIDQ2LCAxLCA3NSwgNDddLFxyXG5cdFx0WzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXHJcblx0XHRbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuXHJcblx0XHQvLyAxOFxyXG5cdFx0WzUsIDE1MCwgMTIwLCAxLCAxNTEsIDEyMV0sXHJcblx0XHRbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG5cdFx0WzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXHJcblx0XHRbMiwgNDIsIDE0LCAxOSwgNDMsIDE1XSxcclxuXHJcblx0XHQvLyAxOVxyXG5cdFx0WzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXHJcblx0XHRbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcclxuXHRcdFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG5cdFx0WzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXHJcblxyXG5cdFx0Ly8gMjBcclxuXHRcdFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG5cdFx0WzMsIDY3LCA0MSwgMTMsIDY4LCA0Ml0sXHJcblx0XHRbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcclxuXHRcdFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuXHJcblx0XHQvLyAyMVxyXG5cdFx0WzQsIDE0NCwgMTE2LCA0LCAxNDUsIDExN10sXHJcblx0XHRbMTcsIDY4LCA0Ml0sXHJcblx0XHRbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuXHRcdFsxOSwgNDYsIDE2LCA2LCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDIyXHJcblx0XHRbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcclxuXHRcdFsxNywgNzQsIDQ2XSxcclxuXHRcdFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG5cdFx0WzM0LCAzNywgMTNdLFxyXG5cclxuXHRcdC8vIDIzXHJcblx0XHRbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuXHRcdFs0LCA3NSwgNDcsIDE0LCA3NiwgNDhdLFxyXG5cdFx0WzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG5cdFx0WzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDI0XHJcblx0XHRbNiwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuXHRcdFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG5cdFx0WzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG5cdFx0WzMwLCA0NiwgMTYsIDIsIDQ3LCAxN10sXHJcblxyXG5cdFx0Ly8gMjVcclxuXHRcdFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxyXG5cdFx0WzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXHJcblx0XHRbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuXHRcdFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAyNlxyXG5cdFx0WzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG5cdFx0WzE5LCA3NCwgNDYsIDQsIDc1LCA0N10sXHJcblx0XHRbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuXHRcdFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDI3XHJcblx0XHRbOCwgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuXHRcdFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG5cdFx0WzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXHJcblx0XHRbMTIsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjhcclxuXHRcdFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcclxuXHRcdFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxyXG5cdFx0WzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcblx0XHRbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjlcclxuXHRcdFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG5cdFx0WzIxLCA3MywgNDUsIDcsIDc0LCA0Nl0sXHJcblx0XHRbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcclxuXHRcdFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzMFxyXG5cdFx0WzUsIDE0NSwgMTE1LCAxMCwgMTQ2LCAxMTZdLFxyXG5cdFx0WzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG5cdFx0WzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxyXG5cdFx0WzIzLCA0NSwgMTUsIDI1LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDMxXHJcblx0XHRbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXHJcblx0XHRbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcclxuXHRcdFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG5cdFx0WzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDMyXHJcblx0XHRbMTcsIDE0NSwgMTE1XSxcclxuXHRcdFsxMCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuXHRcdFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcclxuXHRcdFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzM1xyXG5cdFx0WzE3LCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG5cdFx0WzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG5cdFx0WzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxyXG5cdFx0WzExLCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM0XHJcblx0XHRbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXHJcblx0XHRbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcblx0XHRbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuXHRcdFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDM1XHJcblx0XHRbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcblx0XHRbMTIsIDc1LCA0NywgMjYsIDc2LCA0OF0sXHJcblx0XHRbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcblx0XHRbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzZcclxuXHRcdFs2LCAxNTEsIDEyMSwgMTQsIDE1MiwgMTIyXSxcclxuXHRcdFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG5cdFx0WzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG5cdFx0WzIsIDQ1LCAxNSwgNjQsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzdcclxuXHRcdFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuXHRcdFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcclxuXHRcdFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuXHRcdFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzOFxyXG5cdFx0WzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG5cdFx0WzEzLCA3NCwgNDYsIDMyLCA3NSwgNDddLFxyXG5cdFx0WzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG5cdFx0WzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM5XHJcblx0XHRbMjAsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcblx0XHRbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuXHRcdFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuXHRcdFsxMCwgNDUsIDE1LCA2NywgNDYsIDE2XSxcclxuXHJcblx0XHQvLyA0MFxyXG5cdFx0WzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxyXG5cdFx0WzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxyXG5cdFx0WzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG5cdFx0WzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXHJcblx0XTtcclxuXHJcblx0UVJSU0Jsb2NrLmdldFJTQmxvY2tzID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHJzQmxvY2sgPSBRUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHRcdFxyXG5cdFx0aWYgKHJzQmxvY2sgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImJhZCBycyBibG9jayBAIHR5cGVOdW1iZXI6XCIgKyB0eXBlTnVtYmVyICsgXCIvZXJyb3JDb3JyZWN0TGV2ZWw6XCIgKyBlcnJvckNvcnJlY3RMZXZlbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcclxuXHRcdFxyXG5cdFx0dmFyIGxpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdFx0dmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG5cdFx0XHR2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuXHRcdFx0dmFyIGRhdGFDb3VudCAgPSByc0Jsb2NrW2kgKiAzICsgMl07XHJcblxyXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuXHRcdFx0XHRsaXN0LnB1c2gobmV3IFFSUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpICk7XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gbGlzdDtcclxuXHR9XHJcblxyXG5cdFFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG5cclxuXHRcdHN3aXRjaChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG5cdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkwgOlxyXG5cdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcblx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTSA6XHJcblx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuXHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5RIDpcclxuXHRcdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xyXG5cdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkggOlxyXG5cdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcblx0XHRkZWZhdWx0IDpcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUVJCaXRCdWZmZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRmdW5jdGlvbiBRUkJpdEJ1ZmZlcigpIHtcclxuXHRcdHRoaXMuYnVmZmVyID0gbmV3IEFycmF5KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IDA7XHJcblx0fVxyXG5cclxuXHRRUkJpdEJ1ZmZlci5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0dmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xyXG5cdFx0XHRyZXR1cm4gKCAodGhpcy5idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkgKSAmIDEpID09IDE7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRwdXQgOiBmdW5jdGlvbihudW0sIGxlbmd0aCkge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5wdXRCaXQoICggKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSApICYgMSkgPT0gMSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGdldExlbmd0aEluQml0cyA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5sZW5ndGg7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRwdXRCaXQgOiBmdW5jdGlvbihiaXQpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOCk7XHJcblx0XHRcdGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPD0gYnVmSW5kZXgpIHtcclxuXHRcdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKDApO1xyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0aWYgKGJpdCkge1xyXG5cdFx0XHRcdHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdHRoaXMubGVuZ3RoKys7XHJcblx0XHR9XHJcblx0fTtcclxufSkoKTsiXX0=