const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  },
  BASE_IMAGE_URL_NOTIFICATION: 'https://image.tmdb.org/t/p/w500/',
  CAHCHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'foodterest-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
