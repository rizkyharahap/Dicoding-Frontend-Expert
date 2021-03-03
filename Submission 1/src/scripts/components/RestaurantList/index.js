import '../RestaurantItem';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._restaurants = [];
  }

  /**
   * @param {any[]} value
   */
  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }

  renderError(error) {
    this.innerHTML = `<span>Oops Error, ${error}</span>`;
    // console.error(error);
  }

  render() {
    // console.log(this._restaurant);

    this.innerHTML = `
      <h3>Jelajahi Restoran</h3>

      <div id="restaurant-content" class="restaurant-grid"></div>
    `;

    const restaurantContentElement = document.querySelector(
      '#restaurant-content',
    );

    this._restaurant.forEach((result) => {
      const restauranItemElement = document.createElement('restaurant-item');
      restauranItemElement.restaurant = result;
      restaurantContentElement.appendChild(restauranItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList, {
  extends: 'section',
});
