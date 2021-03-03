import './style.scss';
import '../Button/ButtonIcon';
import '../TextField';

class Filter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="filter">
        <div class="filter-content">
          <text-field
            id="inputSearch"
            name="Cari Restoran"
            placeholder="Cari disini"
          >
            <button-icon slot='icon' id="btnSearch" icon="search"></button-icon>
          </text-field>
        </div>
      </section>
    `;
  }
}

customElements.define('filter-restaurant', Filter);
