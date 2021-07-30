# kommunicate-widget

> A npm plugin for kommunicates' chat widget.

[![NPM](https://img.shields.io/npm/v/kommunicate-widget.svg)](https://www.npmjs.com/package/kommunicate-widget)
## Install

```bash
npm install --save kommunicate-widget
```

## Usage

In your index.js file,

1. Import the widget as Kommunicate.
2. Replace YOUR_APP_ID with app Id provided to you by kommunicate.


```jsx
import Kommunicate from 'kommunicate-widget';

Kommunicate.init("YOUR_APP_ID" , {...optionalSettings})

ReactDOM.render(
  ...
    <App />
  ...
  document.getElementById('root')
);
```

## License

MIT © [Prochnost55](https://github.com/Prochnost55)
