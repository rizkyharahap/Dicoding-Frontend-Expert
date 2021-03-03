import Favorite from '../views/pages/Favorite';
import Detail from '../views/pages/Detail';
import Home from '../views/pages/Beranda';

const routes = {
  '/': Home,
  '/beranda': Home,
  '/favorit': Favorite,
  '/detail/:id': Detail,
};

export default routes;
