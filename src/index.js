require('onsenui/css/onsenui.css');
require('onsenui/css/onsen-css-components.css');

require('onsenui');

require('./mm-app');

document.addEventListener('DOMContentLoaded', (event) => {
  riot.mount('body', 'mm-app');
});
