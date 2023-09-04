export interface Window {
  kommunicate?: any;
}
export interface Options {
  [key: string]: any;
}

/**
 * Provide the options like this -> { "popupWidget": true, "automaticChatOpenOnNavigation": true,}
 * visit the doc for more details -> https://docs.kommunicate.io/docs/web-installation.html#step-2-add-the-customized-kommunicate-plugin-to-your-website
 */

export interface KommunicateType {
  init(appId: string, options?: Options): void;
}

// eslint-disable-next-line no-undef
export const appWindow: Window & typeof globalThis = window;

const Kommunicate: KommunicateType = {
  init: (appId, options) => {
    let environment: string;
    let scriptSource = 'https://widget.kommunicate.io/v2/kommunicate.app';
    if (!appId) {
      console.info('Please provide appId to initialize the widget');
      return;
    }
    if (typeof appId !== 'string') {
      console.info('AppId should be string');
      return;
    }
    const settings = {
      appId: appId,
      popupWidget: true,
      automaticChatOpenOnNavigation: true
    };

    if (isValidObject(options)) {
      // removing the environment variable
      const { environment, ...option } = options;
      Object.assign(settings, option);
    }

    switch (environment) {
      case 'test':
        scriptSource = 'https://widget-test.kommunicate.io/v2/kommunicate.app';
        break;
      case 'local':
        scriptSource = 'http://localhost:3030/v2/kommunicate.app';
        break;
      default:
        scriptSource = 'https://widget.kommunicate.io/v2/kommunicate.app';
        break;
    }
    (function (d, m: any) {
      const kommunicateSettings = settings;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = scriptSource;
      const h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      appWindow.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, appWindow.kommunicate || {});
  }
};

export default Kommunicate;

function isValidObject(object: any): boolean {
  return object && Object.keys(object).length && object.constructor === Object;
}
