let Kommunicate = {};

Kommunicate.init = (settings, env) => {
    let scriptSource = "https://widget.kommunicate.io/v2/kommunicate.app";
    
        switch (env){
            case "test":
                scriptSource = "https://widget-test.kommunicate.io/v2/kommunicate.app";
                break;
            case "localhost":
                scriptSource = "http://localhost:3030/v2/kommunicate.app";
                break;
            default:
                scriptSource = "https://widget.kommunicate.io/v2/kommunicate.app";
                break;
        }
    
    (function(d, m){
        var kommunicateSettings = settings;
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = scriptSource;
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}

export default Kommunicate;
