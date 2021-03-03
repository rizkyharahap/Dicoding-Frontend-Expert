import '../../components/RestaurantList';
import LoaderInitiator from '../../../utils/initiator/loader-initiator';
import RestaurantIdb from '../../../data/restaurant-idb';

const Favorite = {
  async render() {
    return `
        <restaurant-list title="Daftar Restoran Favorit"></restaurant-list>
    `;
  },

  async afterRender() {
    // console.log('Favorit : rendered');

    const restaurantContainer = document.querySelector('restaurant-list');

    try {
      LoaderInitiator.openLoader();
      const restaurant = await RestaurantIdb.getAllRestaurant();
      restaurantContainer.restaurant = restaurant;
    } catch (error) {
      // console.error(error);

      restaurantContainer.innerHTML = '<h2>Loading Data Failed !</h2>';
    } finally {
      LoaderInitiator.closeLoader();
    }
  },
};

export default Favorite;
