import DrawerInitiator from '../../../utils/initiator/drawer-initiator';
import './styles.scss';

class AppDrawer extends HTMLElement {
  constructor() {
    super();

    this.render();
    this._bgDrawer = document.querySelector('#bgDrawer');
    this._appDrawer = document.querySelector('app-drawer');
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;

    if (this[name] !== null) {
      this.isOpen();
    } else {
      this.isClose();
    }
  }

  connectedCallback() {
    DrawerInitiator.init({
      trigger: this._bgDrawer,
      appDrawer: this._appDrawer,
    });
  }

  async render() {
    this.innerHTML = `
      <div class="app-drawer">
        <nav class="nav-link">
          <ul>
            <li>
              <a href="#/beranda" class="link" title="Beranda">Beranda</a>
            </li>
            <li>
              <a href="#/favorit" class="link" title="Favorit">Favorit</a>
            </li>
            <li>
              <a
                href="https://happinest.xyz"
                class="link"
                target="_blank"
                rel="noopener"
                title="Tentang Kami"
              >Tentang Kami</a>
            </li>
          </ul>
        </nav>
        <div id="bgDrawer" class="bg-drawer"></div>
      </div>
  `;
  }

  async isOpen() {
    // console.log('AppDrawer : Open');
    this.classList.add('app-drawer__open');
    this._bgDrawer.classList.replace('bg-drawer', 'bg-drawer__open');
  }

  async isClose() {
    // console.log('AppDrawer : Close');
    this.classList.remove('app-drawer__open');
    this._bgDrawer.classList.replace('bg-drawer__open', 'bg-drawer');
  }
}

customElements.define('app-drawer', AppDrawer);
