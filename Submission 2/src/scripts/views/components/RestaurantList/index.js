import '../CardItem';
import './style.scss';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._restaurant = [];
  }

  connectedCallback() {
    // console.log('Restaurant List : ConnectedCallback');
    this.render();
  }

  /**
   * @param {any[]} value
   */
  set restaurant(value) {
    // console.log('Restaurant List : Set Restaurant');

    this._restaurant = value;
    this.render();
  }

  renderError(error) {
    // console.error(error);
    this.innerHTML = `<span>Oops Error, ${error}</span>`;
  }

  async renderEmpty() {
    this.innerHTML = `
      <section class="restaurant-list">
        <h3>Belum ada restoran</h3>
      </section>
    `;
  }

  async renderNotEmpty() {
    this.innerHTML = `
      <section class="restaurant-list">
        <h3>${this.getAttribute('title') || 'Jelajahi Restoran'}</h3>

        <div id="restaurant-content" class="restaurant-grid"></div>
      </section>
    `;

    const restaurantContentElement = document.querySelector(
      '#restaurant-content',
    );

    this._restaurant.forEach((result) => {
      const restauranItemElement = document.createElement('card-items');
      restauranItemElement.restaurant = result;

      restaurantContentElement.appendChild(restauranItemElement);
    });
  }

  async render() {
    // console.log('Restaurant List : Render');

    if (this._restaurant <= 0) {
      this.renderEmpty();
    } else {
      this.renderNotEmpty();
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
