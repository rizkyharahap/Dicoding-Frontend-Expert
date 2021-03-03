import './style.scss';

class Button extends HTMLElement {
  constructor() {
    super();
    this._id = this.getAttribute('id');
    this._name = this.getAttribute('name');
    this._value = this.getAttribute('value');
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <button
      id="${this._name}"
      name="${this._title}"
      title="Tombol ${this._title}"
      class="button"
    >
      ${this._value}
    </button>`;
  }
}

customElements.define('button-element', Button);
