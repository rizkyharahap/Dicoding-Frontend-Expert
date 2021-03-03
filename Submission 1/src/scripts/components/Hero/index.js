class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-fluid d-flex hero-content">
      <h2>Foodterest</h2>

      <p>Bagikan pengalaman makanan terbaik bersama temanmu !</p>

      <a href="#mainContent" class="btn-to-restaurant">Cari Restoranmu</a>
    </div>
    `;
  }
}

customElements.define('hero-banner', Hero, { extends: 'section' });
