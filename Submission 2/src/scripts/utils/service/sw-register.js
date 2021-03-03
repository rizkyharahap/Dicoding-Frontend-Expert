/* eslint-disable no-console */
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    console.log('Service worker successfully');
    return;
  }
  console.log('Service worker not supported in this browser');
};

export default swRegister;
