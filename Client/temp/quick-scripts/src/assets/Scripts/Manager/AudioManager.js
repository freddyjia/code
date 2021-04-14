"use strict";
cc._RF.push(module, '4d23cGpbJFH47FUymXcbXi8', 'AudioManager');
// Scripts/Manager/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageKey_1 = require("../Global/LocalStorageKey");
var ccC_1 = require("../Tools/ccC");
// import Global from "../Global/Global";
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.bgmVolume = 1;
        this.audioVolume = 1;
    }
    AudioManager.GetInstance = function () {
        if (this.m_Instance == null) {
            this.m_Instance = new AudioManager();
        }
        return this.m_Instance;
    };
    AudioManager.prototype.Init = function () {
        if (localStorage.getItem(LocalStorageKey_1.default.BgmVolume) == null) {
            localStorage.setItem(LocalStorageKey_1.default.BgmVolume, "1");
        }
        if (localStorage.getItem(LocalStorageKey_1.default.AudioVolume) == null) {
            localStorage.setItem(LocalStorageKey_1.default.AudioVolume, "1");
        }
        this.bgmVolume = parseFloat(localStorage.getItem(LocalStorageKey_1.default.BgmVolume));
        this.audioVolume = parseFloat(localStorage.getItem(LocalStorageKey_1.default.AudioVolume));
        cc.audioEngine.setMaxAudioInstance(10);
        cc.audioEngine.setMusicVolume(this.bgmVolume);
        cc.audioEngine.setEffectsVolume(this.audioVolume);
    };
    AudioManager.prototype.GetBgmVolume = function () {
        return this.bgmVolume;
    };
    AudioManager.prototype.GetAudioVolume = function () {
        return this.audioVolume;
    };
    AudioManager.prototype.SetBgmVolume = function (value) {
        this.bgmVolume = value;
        cc.audioEngine.setMusicVolume(this.bgmVolume);
        localStorage.setItem(LocalStorageKey_1.default.BgmVolume, value.toString());
    };
    AudioManager.prototype.SetAudioVolume = function (value) {
        this.audioVolume = value;
        cc.audioEngine.setEffectsVolume(this.audioVolume);
        localStorage.setItem(LocalStorageKey_1.default.AudioVolume, value.toString());
    };
    AudioManager.prototype.SoundPlay = function (path, isLoop, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (callback === void 0) { callback = null; }
        //cc.error(path+"#############");
        ccC_1.default.loadRes(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            try {
                // cc.error(clip);
                // cc.error("clip is here-------------------");
                var audioID = cc.audioEngine.playEffect(clip, isLoop);
                if (callback != null) {
                    callback(audioID);
                }
            }
            catch (err) {
                cc.error(err);
                cc.error(path + "音效有一点点错误--------------------");
            }
        });
    };
    AudioManager.prototype.SoundPlayWithVolume = function (path, isLoop, volume, callback) {
        if (isLoop === void 0) { isLoop = false; }
        if (volume === void 0) { volume = 1; }
        if (callback === void 0) { callback = null; }
        ccC_1.default.loadRes(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            var audioID = cc.audioEngine.playEffect(clip, isLoop);
            cc.audioEngine.setVolume(audioID, volume);
            if (callback != null) {
                callback(audioID);
            }
        });
    };
    AudioManager.prototype.SoundPause = function (audioID) {
        cc.audioEngine.pauseEffect(audioID);
    };
    AudioManager.prototype.SoundAllPause = function () {
        cc.audioEngine.pauseAll();
    };
    AudioManager.prototype.SoundStop = function (audioID) {
        cc.audioEngine.stop(audioID);
    };
    AudioManager.prototype.BGMPlay = function (path, callback) {
        if (callback === void 0) { callback = null; }
        //cc.error(path+"#############背景音乐");
        if (this.playingBGM == path)
            return;
        this.playingBGM = path;
        ccC_1.default.loadRes(path, cc.AudioClip, function (err, clip) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            try {
                var audioID = cc.audioEngine.playMusic(clip, true);
                if (callback != null) {
                    callback(audioID);
                }
            }
            catch (err) {
                cc.error(err);
                cc.error(path + "背景音乐有一点点错误也--------------------");
            }
        });
    };
    AudioManager.prototype.BGMStop = function () {
        cc.audioEngine.stopMusic();
    };
    AudioManager.m_Instance = null;
    return AudioManager;
}());
exports.default = AudioManager;

cc._RF.pop();