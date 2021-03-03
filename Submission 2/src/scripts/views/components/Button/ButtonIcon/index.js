import './styles.scss';

class ButtonIcon extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'icon'];
  }

  attributeChangedCallback() {
    // console.log('Icon Button : attributeChangeCallback');
    this.render();
  }

  connectedCallback() {
    this.render();
    // console.log('Icon Button : connectedCallback');
  }

  async render() {
    this.innerHTML = `
        <button
          id="${this.getAttribute('id')}"
          title="${this.getAttribute('name')}"
          class="btn-icon"
        >
          <span class="material-icons icon">${this.getAttribute('icon')}</span>
          ${
  this.getAttribute('value')
    ? `<span class="label">${this.getAttribute('value')}</span>`
    : ''
}
        </button>

      `;
  }
}

customElements.define('button-icon', ButtonIcon);
