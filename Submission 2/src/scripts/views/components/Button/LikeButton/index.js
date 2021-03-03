import './style.scss';
import '../ButtonIcon';

class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <button-icon
        class="btn-like"
        id="btnLike"
        name="Tombol Favorit"
        icon="favorite"
        value="Tambah ke Favorit"
      >
  `;
  }
}

customElements.define('like-button', LikeButton);
