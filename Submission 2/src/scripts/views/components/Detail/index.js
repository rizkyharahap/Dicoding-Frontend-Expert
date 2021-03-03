import CONFIG from '../../../globals/config';
import './style.scss';

class Detail extends HTMLElement {
  constructor() {
    super();
    this._restaurant = [];
  }

  /**
   * @param {any[]} value
   */
  set restaurant(value) {
    // console.log('Detail Restaurant  : Set Restaurant');

    this._restaurant = value;

    // console.log(this._restaurant);

    this.render();
  }

  getCategories() {
    let categoryElement = '<ul class="category-container">';

    this._restaurant.categories.forEach((result) => {
      categoryElement += `<li>${result.name}</li>`;
    });

    categoryElement += '</ul>';

    return categoryElement;
  }

  getMenus() {
    let menuElement = `
        <div class="card-menu">
          <h4>Makanan</h4>
          <ul class="menu-item">`;

    this._restaurant.menus.foods.forEach((result) => {
      menuElement += `<li>${result.name}</li>`;
    });

    menuElement += `
          </ul>
        </div>
      <div class="card-menu">
        <h4>Minuman</h4>
          <ul class="menu-item">`;

    this._restaurant.menus.drinks.forEach((result) => {
      menuElement += `<li>${result.name}</li>`;
    });

    menuElement += `
          </ul>
        </div>
    `;

    return menuElement;
  }

  renderError(error) {
    // console.error(error);
    this.innerHTML = `<span>Oops sepertinya ada yang salah ! ${error}</span>`;
  }

  render() {
    // console.log('Detail Restaurant : Render');

    this.innerHTML = `
      <banner-element
          name="Gambar Hero Foodterest"
          small="${CONFIG.BASE_IMAGE_URL.SMALL + this._restaurant.pictureId}"
          medium="${CONFIG.BASE_IMAGE_URL.MEDIUM + this._restaurant.pictureId}"
          default="${CONFIG.BASE_IMAGE_URL.LARGE + this._restaurant.pictureId}"
        >
      </banner-element>

      <article class="detail-header">
        <header>
          <h2>${this._restaurant.name}</h2>

          <div class="rating">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -10 511.98685 511"
            >
              <path
                d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                fill="#ffc107"
              />
            </svg>
            <span class="rating-text">${this._restaurant.rating}</span>
          </div>
        </header>

        <address>
          <span class="material-icons-outlined">location_on</span>
          ${this._restaurant.address}, ${this._restaurant.city}
        </address>

        <p class="detail-description">
          ${this._restaurant.description}
        </p>
      </article>

      <section class="detail-category">
        ${this.getCategories()}
      </section>

      <section class="detail-menu">
        <h3>Menu</h3>

        <div class="menu-container">
            ${this.getMenus()}
        </div>
      </section>
    `;
  }
}

customElements.define('detail-element', Detail);
