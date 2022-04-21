
import { useEffect } from 'react';

export default function Browseverads() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return < div>
        {/* <ins className="adsbygoogle" style={{ display: 'inline-block', width: '992px', height: '90px' }} data-ad-client="ca-pub-3502028008615885" data-ad-slot={7654128118} /> */}

        <ins className="adsbygoogle" style={{display: 'inline-block', width: '240px', height: '480px'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={4626657442} />
    </div>
}
