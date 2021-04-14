import LocalStorageKey from "../Global/LocalStorageKey";
import ccC from "../Tools/ccC";
// import Global from "../Global/Global";

export default class AudioManager
{
    private bgmVolume:number = 1;
    private audioVolume:number = 1;
    private playingBGM:string;

    private static m_Instance:AudioManager = null;
    public static GetInstance():AudioManager
    {
        if(this.m_Instance == null)
        {
            this.m_Instance = new AudioManager();
        }
        return this.m_Instance;
    }

    public Init()
    {
        if(localStorage.getItem(LocalStorageKey.BgmVolume) == null)
        {
            localStorage.setItem(LocalStorageKey.BgmVolume,"1");
        }
        if(localStorage.getItem(LocalStorageKey.AudioVolume) == null)
        {
            localStorage.setItem(LocalStorageKey.AudioVolume,"1");
        }
        this.bgmVolume = parseFloat(localStorage.getItem(LocalStorageKey.BgmVolume));
        this.audioVolume = parseFloat(localStorage.getItem(LocalStorageKey.AudioVolume));

        cc.audioEngine.setMaxAudioInstance(10);
        cc.audioEngine.setMusicVolume(this.bgmVolume);
        cc.audioEngine.setEffectsVolume(this.audioVolume);
    }

    public GetBgmVolume():number
    {
        return this.bgmVolume;
    }

    public GetAudioVolume():number
    {
        return this.audioVolume;
    }

    public SetBgmVolume(value:number)
    {
        this.bgmVolume = value;
        cc.audioEngine.setMusicVolume(this.bgmVolume);
        localStorage.setItem(LocalStorageKey.BgmVolume,value.toString());
    }

    public SetAudioVolume(value:number)
    {
        this.audioVolume = value;
        cc.audioEngine.setEffectsVolume(this.audioVolume);
        localStorage.setItem(LocalStorageKey.AudioVolume,value.toString());
    }

    public SoundPlay(path:string,isLoop:boolean=false,callback:(audioID:number)=>void=null)
    {
        //cc.error(path+"#############");
        ccC.loadRes(path, cc.AudioClip, function (err, clip:cc.AudioClip) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            try{
                // cc.error(clip);
                // cc.error("clip is here-------------------");
                var audioID = cc.audioEngine.playEffect(clip, isLoop);
                if(callback != null)
                {
                    callback(audioID);
                }
            }
            catch(err)
            {
                cc.error(err);
                cc.error(path+"音效有一点点错误--------------------");
            }
           
        });
    }

    public SoundPlayWithVolume(path:string,isLoop:boolean=false,volume:number=1,callback:(audioID:number)=>void=null){
        ccC.loadRes(path, cc.AudioClip, function (err, clip:cc.AudioClip) {
            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            var audioID = cc.audioEngine.playEffect(clip, isLoop);
            cc.audioEngine.setVolume(audioID,volume)
            if(callback != null)
            {
                callback(audioID);
            }
        });
    }

    public SoundPause(audioID)
    {
        cc.audioEngine.pauseEffect(audioID);
    }

    public SoundAllPause()
    {
        cc.audioEngine.pauseAll();
    }

    public SoundStop(audioID)
    {
        cc.audioEngine.stop(audioID);
    }

    public BGMPlay(path:string,callback:(audioID:number)=>void=null)
    {

        //cc.error(path+"#############背景音乐");
        if(this.playingBGM == path)
            return;
        this.playingBGM = path;
        ccC.loadRes(path, cc.AudioClip, function (err, clip:cc.AudioClip) {

            if (err) {
                cc.error("err  " + err.message || err);
                return;
            }
            try{
                var audioID = cc.audioEngine.playMusic(clip, true);
                if(callback != null)
                {
                    callback(audioID);
                }
            }
            catch(err)
            {
                cc.error(err);
                cc.error(path+"背景音乐有一点点错误也--------------------");
            }

            
        });
    }
    
    public BGMStop()
    {
        cc.audioEngine.stopMusic();
    }
}
