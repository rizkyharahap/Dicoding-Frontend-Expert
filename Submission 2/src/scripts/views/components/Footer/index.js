import './style.scss';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
    // console.log('Drawer : connectedCallback');
  }

  render() {
    this.innerHTML = `
      <footer>
        <span>
          Copyright &copy; - Foodterest, Made with
          <i class="footer-icon">&#9829;</i> in Home
        </span>
      </footer>
    `;
  }
}

customElements.define('footer-element', Footer);
