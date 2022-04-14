import {useEffect} from 'react';

export default function BannerAds() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return <>
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3502028008615885"
            data-ad-slot={5378452591}
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    </>
}
