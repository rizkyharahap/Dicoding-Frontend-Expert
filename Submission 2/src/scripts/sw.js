import 'regenerator-runtime';
import CacheHelper from './utils/helper/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(
    CacheHelper.cachingAppShell([...assets, './']),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCahce());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
