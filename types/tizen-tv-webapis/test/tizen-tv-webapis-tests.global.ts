const { adinfo, appcommon, avplay, avinfo, billing, network, preview, productinfo, sso, tvinfo, widgetdata } = webapis;
adinfo.getVersion(); // $ExpectType string
appcommon.getVersion(); // $ExpectType string
avplay.getVersion(); // $ExpectType string
avinfo.getVersion(); // $ExpectType string
billing.getVersion(); // $ExpectType string
network.getVersion(); // $ExpectType string
preview.getVersion(); // $ExpectType string
productinfo.getVersion(); // $ExpectType string
sso.getVersion(); // $ExpectType string
tvinfo.getVersion(); // $ExpectType string
widgetdata.getVersion(); // $ExpectType string

avplay.setListener({
    onsubtitlechange: (duration, subtitles, type, attributes) => {
        duration; // $ExpectType string
        subtitles; // $ExpectType string
        type; // $ExpectType string
        attributes; // $ExpectType AVPlaySubtitleAttribute[]
    },
});
