import './style.scss';
import '../Banner';
import '../Button/Button';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <banner-element
        name="Gambar Hero Foodterest"
        small="./assets/images/hero-image-small.jpg"
        medium="./assets/images/hero-image-medium.jpg"
        default="./assets/images/hero-image.jpg"
        >
          <slot>
          <div class="hero-content">
            <h2>Foodterest</h2>
            <p>Bagikan pengalaman makanan terbaik bersama temanmu !</p>
          </div>
        </slot>
      </banner-element>
    `;
  }
}

customElements.define('hero-banner', Hero);
