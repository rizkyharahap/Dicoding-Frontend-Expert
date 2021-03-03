import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import './App.scss';
import LoaderInitiator from '../utils/initiator/loader-initiator';

class App {
  constructor({ content, loader }) {
    this._content = content;
    this._loader = loader;

    this._initialAppShell();
  }

  _initialAppShell() {
    LoaderInitiator.init({
      loaderComponent: this._loader,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
