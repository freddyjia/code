
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFuYWdlclxcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELG9DQUErQjtBQUMvQix5Q0FBeUM7QUFFekM7SUFBQTtRQUVZLGNBQVMsR0FBVSxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBVSxDQUFDLENBQUM7SUFpSm5DLENBQUM7SUE3SWlCLHdCQUFXLEdBQXpCO1FBRUksSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFDMUI7WUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFFSSxJQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMseUJBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQzFEO1lBQ0ksWUFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBZSxDQUFDLFNBQVMsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFDNUQ7WUFDSSxZQUFZLENBQUMsT0FBTyxDQUFDLHlCQUFlLENBQUMsV0FBVyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFakYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMs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Q0FBQyxDQUFDO2FBQ3BEO1FBR0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sOEJBQU8sR0FBZDtRQUVJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQTdJYyx1QkFBVSxHQUFnQixJQUFJLENBQUM7SUE4SWxELG1CQUFDO0NBcEpELEFBb0pDLElBQUE7a0JBcEpvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2FsU3RvcmFnZUtleSBmcm9tIFwiLi4vR2xvYmFsL0xvY2FsU3RvcmFnZUtleVwiO1xuaW1wb3J0IGNjQyBmcm9tIFwiLi4vVG9vbHMvY2NDXCI7XG4vLyBpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9HbG9iYWwvR2xvYmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlclxue1xuICAgIHByaXZhdGUgYmdtVm9sdW1lOm51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBhdWRpb1ZvbHVtZTpudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgcGxheWluZ0JHTTpzdHJpbmc7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBtX0luc3RhbmNlOkF1ZGlvTWFuYWdlciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBHZXRJbnN0YW5jZSgpOkF1ZGlvTWFuYWdlclxuICAgIHtcbiAgICAgICAgaWYodGhpcy5tX0luc3RhbmNlID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubV9JbnN0YW5jZSA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tX0luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBJbml0KClcbiAgICB7XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleS5CZ21Wb2x1bWUpID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExvY2FsU3RvcmFnZUtleS5CZ21Wb2x1bWUsXCIxXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleS5BdWRpb1ZvbHVtZSkgPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTG9jYWxTdG9yYWdlS2V5LkF1ZGlvVm9sdW1lLFwiMVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IHBhcnNlRmxvYXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oTG9jYWxTdG9yYWdlS2V5LkJnbVZvbHVtZSkpO1xuICAgICAgICB0aGlzLmF1ZGlvVm9sdW1lID0gcGFyc2VGbG9hdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JhZ2VLZXkuQXVkaW9Wb2x1bWUpKTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNYXhBdWRpb0luc3RhbmNlKDEwKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5iZ21Wb2x1bWUpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHRoaXMuYXVkaW9Wb2x1bWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRCZ21Wb2x1bWUoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmJnbVZvbHVtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXVkaW9Wb2x1bWUoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvVm9sdW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRCZ21Wb2x1bWUodmFsdWU6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5iZ21Wb2x1bWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMb2NhbFN0b3JhZ2VLZXkuQmdtVm9sdW1lLHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRBdWRpb1ZvbHVtZSh2YWx1ZTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLmF1ZGlvVm9sdW1lID0gdmFsdWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5hdWRpb1ZvbHVtZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExvY2FsU3RvcmFnZUtleS5BdWRpb1ZvbHVtZSx2YWx1ZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU291bmRQbGF5KHBhdGg6c3RyaW5nLGlzTG9vcDpib29sZWFuPWZhbHNlLGNhbGxiYWNrOihhdWRpb0lEOm51bWJlcik9PnZvaWQ9bnVsbClcbiAgICB7XG4gICAgICAgIC8vY2MuZXJyb3IocGF0aCtcIiMjIyMjIyMjIyMjIyNcIik7XG4gICAgICAgIGNjQy5sb2FkUmVzKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcDpjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcImVyciAgXCIgKyBlcnIubWVzc2FnZSB8fCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAvLyBjYy5lcnJvcihjbGlwKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5lcnJvcihcImNsaXAgaXMgaGVyZS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzTG9vcCk7XG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2sgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGF1ZGlvSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKHBhdGgrXCLpn7PmlYjmnInkuIDngrnngrnplJnor68tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBTb3VuZFBsYXlXaXRoVm9sdW1lKHBhdGg6c3RyaW5nLGlzTG9vcDpib29sZWFuPWZhbHNlLHZvbHVtZTpudW1iZXI9MSxjYWxsYmFjazooYXVkaW9JRDpudW1iZXIpPT52b2lkPW51bGwpe1xuICAgICAgICBjY0MubG9hZFJlcyhwYXRoLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXA6Y2MuQXVkaW9DbGlwKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJlcnIgIFwiICsgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgaXNMb29wKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELHZvbHVtZSlcbiAgICAgICAgICAgIGlmKGNhbGxiYWNrICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXVkaW9JRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBTb3VuZFBhdXNlKGF1ZGlvSUQpXG4gICAge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUVmZmVjdChhdWRpb0lEKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU291bmRBbGxQYXVzZSgpXG4gICAge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUFsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTb3VuZFN0b3AoYXVkaW9JRClcbiAgICB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG4gICAgfVxuXG4gICAgcHVibGljIEJHTVBsYXkocGF0aDpzdHJpbmcsY2FsbGJhY2s6KGF1ZGlvSUQ6bnVtYmVyKT0+dm9pZD1udWxsKVxuICAgIHtcblxuICAgICAgICAvL2NjLmVycm9yKHBhdGgrXCIjIyMjIyMjIyMjIyMj6IOM5pmv6Z+z5LmQXCIpO1xuICAgICAgICBpZih0aGlzLnBsYXlpbmdCR00gPT0gcGF0aClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5wbGF5aW5nQkdNID0gcGF0aDtcbiAgICAgICAgY2NDLmxvYWRSZXMocGF0aCwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwOmNjLkF1ZGlvQ2xpcCkge1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJlcnIgIFwiICsgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2sgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGF1ZGlvSUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKHBhdGgrXCLog4zmma/pn7PkuZDmnInkuIDngrnngrnplJnor6/kuZ8tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgQkdNU3RvcCgpXG4gICAge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG59XG4iXX0=