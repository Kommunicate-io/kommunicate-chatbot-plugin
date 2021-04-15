import React from 'react'

const Kommunicate = (appId) => {
          let d = window.top.document;
          let m = window.top.kommunicate;
          let kommunicateSettings = 
              {"appId":`${appId}`,"popupWidget":true,"automaticChatOpenOnNavigation":true};
          let s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          let h = document.getElementsByTagName("head")[0]; h.appendChild(s);
          window.kommunicate = m; m._globals = kommunicateSettings;

}
export default Kommunicate;
