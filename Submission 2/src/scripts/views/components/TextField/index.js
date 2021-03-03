class TextField extends HTMLElement {
  constructor() {
    super();
    this._id = this.getAttribute('id');
    this._name = this.getAttribute('name');
    this._placeholder = this.getAttribute('placeholder');
    this._type = this.getAttribute('type') || 'text';
    this.setAttribute('value', '');
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  setValue(event) {
    this.setAttribute('value', event.target.value);
  }

  connectedCallback() {
    this.render();

    const inputElement = this.shadowDOM.querySelector('.input-field');
    inputElement.addEventListener('keyup', (event) => this.setValue(event));
  }

  async render() {
    this.shadowDOM.innerHTML = `
    <style>
      :host{
          width: 100%;
      }

      @media (min-width: 540px) {
        :host{
          width: auto;
        }
      }

      .input-container {
        min-width: 250px;
        display:flex;
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 4px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 4px;
      }

      .input-field {
        width: -webkit-fill-available;
        width: -moz-available;
        width: fill-available;
        border: none;
        padding: 12px 4px;
        font-size: 1.05rem;
        font-family: "Work Sans", sans-serif;
      }

      ::slotted(span) {
        width: 40px;
      }
    </style>

    <label for="${this._name}">
      <slot name='label'></slot>
    </label>
    <div class="input-container">
      <input
        id="${this._id}"
        class="input-field"
        placeholder="${this._placeholder}"
        type="${this._type}"
        title="${this._name}"
      />
      <slot name='icon' class="input-icon"></slot>
    </div>`;
  }
}

customElements.define('text-field', TextField);
