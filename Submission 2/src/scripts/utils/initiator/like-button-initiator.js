import RestaurantIdb from '../../data/restaurant-idb';

const LikeButtonInitiator = {
  async init({ buttonLikeComponent, restaurant }) {
    this._buttonLikeComponent = buttonLikeComponent;
    this._restaurant = restaurant;
    this._buttonLikeComponent = buttonLikeComponent;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderLike() {
    this._buttonLikeComponent.setAttribute('icon', 'favorite_border');

    this._buttonLikeComponent.addEventListener('click', async () => {
      await RestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderLiked() {
    this._buttonLikeComponent.setAttribute('icon', 'favorite');

    this._buttonLikeComponent.addEventListener('click', async () => {
      await RestaurantIdb.deleteMovie(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
