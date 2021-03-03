import 'regenerator-runtime'; /* for async await transpile */
import './views/components/AppBar';
import './views/components/Footer';

import App from './views/App';
import swRegister from './utils/service/sw-register';
import WebSocketInitiator from './utils/initiator/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  content: document.querySelector('#mainContent'),
  loader: document.querySelector('spinner-loader'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
