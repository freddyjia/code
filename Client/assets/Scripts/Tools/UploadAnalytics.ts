// 游戏行为分析

export default class UploadAnalytics 
{
    static QMAPPID = 100;
    static UploadUrl = "http://bigf.qhdgcdl.com:15145/log/behavior";
    static analyticsURL = "https://www.google-analytics.com/collect";

    public static GetMillSecondTimestamp()
    {
        return new Date().getTime;
    }

    public static GetPlatform()
    {
        var platform = "Editor";
        if (cc.sys.os == cc.sys.OS_ANDROID)  
            platform = "Android"; 
        else if (cc.sys.os == cc.sys.OS_IOS)  
            platform = "iOS";

        return platform;
    }

    public static GetAppVersion()
    {
        return "";
    }

    public static GetTid()
    {
        var tid = "UA-123753172-1"; 
        if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS)  
            tid = "UA-123747518-1";
        return tid;
    }

    public static UploadAnalyticsEvent(ec, ea, el=null, ev=null)
    {

    }

    public static UploadAnalyticsScreen(screenName)
    {

    }

    public static UploadAnalyticsCustomException(mess)
    {

    }

    public static UploadFirstOpen()
    {

    }

    public static UploadStartGame()
    {

    }

    public static UploadUpdateStart()
    {

    }

    public static UploadUpdateSuccess()
    {

    }

    public static UploadLogin()
    {

    }

    public static UploadEnterHall()
    {

    }

    public static UploadClickEvent()
    {

    }

    public static UploadTransaction()
    {
        
    }
}
