class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <span>
        Copyright &copy; - Foodterest, Made with
        <i class="footer-icon">&#9829;</i> in Home
      </span>
    `;
  }
}

customElements.define('footer-component', Footer, { extends: 'footer' });
