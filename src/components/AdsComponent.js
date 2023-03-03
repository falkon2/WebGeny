import React, { useEffect  } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;  



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8035401165804944"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-adtest='on'
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

export default AdsComponent;