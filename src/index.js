let Kommunicate = {};

function isValidObject(object){
    return object && Object.keys(object).length && object.constructor === Object
};

Kommunicate.init = (appId, options) => {
    let environment;
    let scriptSource = "https://widget.kommunicate.io/v2/kommunicate.app";
    if(!appId) {
        console.info('Please provide appId to initialize the widget');
        return;
    };
    if(typeof appId !== 'string'){
        console.info('AppId should be string');
        return;
    };
    let settings = {
        "appId": appId,
        "popupWidget": true,
        "automaticChatOpenOnNavigation": true,
    };

    if(isValidObject(options)){
        if(options && options.environment){
            environment = options.environment;
            delete options.environment;
        }
        settings = {
            ...settings,
            options
        }
    };
    
    switch (environment){
        case "test":
            scriptSource = "https://widget-test.kommunicate.io/v2/kommunicate.app";
            break;
        case "local":
            scriptSource = "http://localhost:3030/v2/kommunicate.app";
            break;
        default:
            scriptSource = "https://widget.kommunicate.io/v2/kommunicate.app";
            break;
    };
    
    (function(d, m){
        var kommunicateSettings = settings;
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = scriptSource;
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
}

export default Kommunicate;
