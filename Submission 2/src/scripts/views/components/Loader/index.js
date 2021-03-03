class Loader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.setAttribute('open', '');
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;

    if (this[name] === null) {
      this.style.display = 'none';
    } else {
      this.style.display = 'flex';
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this.shadowDOM.innerHTML = `
      <style>
      .lds-ring {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100%;
        background-color : rgba(0,0,0,0.5);
        z-index: 30;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #801313;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #801313 transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      </style>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `;
  }
}

customElements.define('spinner-loader', Loader);
