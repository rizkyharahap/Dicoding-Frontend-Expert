import 'regenerator-runtime'; /* for async await transpile */
import '../styles/app.scss';
import './components/NavBar';
import './components/Drawer';
import './components/Hero';
import './components/Filter';
import './components/Footer';

import Home from './views/pages/Home';

document.addEventListener('DOMContentLoaded', Home);
