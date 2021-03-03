import './style.scss';

class Brand extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <a class="brand" href="index.html" aria-label="Halaman Utama Foodterest">
        <img
          src="./assets/icons/logo.png"
          alt="Foodterest Icon"
          title="Foodterest Icon"
          width="40"
          height="40"
        />
        <h1 class="link">Foodterest</h1>
      </a>
    `;
  }
}

customElements.define('brand-element', Brand);
