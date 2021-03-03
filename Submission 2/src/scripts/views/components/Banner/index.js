class Banner extends HTMLElement {
  constructor() {
    super();

    this._name = this.getAttribute('name');
    this._picture = {
      small: this.getAttribute('small'),
      medium: this.getAttribute('medium'),
      default: this.getAttribute('default'),
    };
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.shadowDOM.innerHTML = `
      <style>
        .banner {
          position: relative;
          width: 100%;
          height: 240px;
        }

        @media (min-width: 450px) {
          .banner {
            height: 300px;
          }
        }


        @media (min-width: 768px) {
            .banner {
              height: 350px;
            }
        }

        img {
          position:absolute;
          top:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index : -1;
        }

      </style>
      <section class="banner">
          <slot></slot>
          <picture>
            <source media="(max-width: 600px)" srcset= "${
  this._picture.small
    ? this._picture.small
    : './assets/images/image-placeholder.jpg'
}" >
            <source media="(max-width: 1024px)" srcset= "${
  this._picture.medium
    ? this._picture.medium
    : './assets/images/image-placeholder.jpg'
}" >
            <img src="${
  this._picture.default
    ? this._picture.default
    : './assets/images/image-placeholder.jpg'
}"
              alt="${this._name}"
              title="${this._name}"
            >
          </picture>
        </section>
      `;
  }
}

customElements.define('banner-element', Banner);
