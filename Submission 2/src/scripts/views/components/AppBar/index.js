import '../Button/ButtonIcon';
import '../Brand';
import '../AppDrawer';
import './style.scss';
import DrawerInitiator from '../../../utils/initiator/drawer-initiator';

class AppBar extends HTMLElement {
  constructor() {
    super();

    this.render();
    this._toogleButton = document.querySelector('#toogleButton');
    this._appDrawer = document.querySelector('app-drawer');
  }

  connectedCallback() {
    // console.log('Navbar : connectedCallback');

    DrawerInitiator.init({
      trigger: this._toogleButton,
      appDrawer: this._appDrawer,
    });
  }

  render() {
    this.innerHTML = `
    <header title="Foodterest Navigation" class="app-bar">
      <div class="app-bar__container">
        <brand-element></brand-element>

        <button-icon id="toogleButton" name="Tombol Navigasi" icon="more_vert"></button-icon>
        <app-drawer></app-drawer>
      </div>
    </header>`;
  }
}

customElements.define('app-bar', AppBar);
