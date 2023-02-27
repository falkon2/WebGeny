import React, { Component  } from 'react'

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

   render () {
    return(
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8035401165804944"
     data-ad-slot="7736929723"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>)
    }
}

export default GoogleAds