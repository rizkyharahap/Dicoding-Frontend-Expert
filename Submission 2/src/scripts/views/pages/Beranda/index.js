import '../../components/Hero';
import '../../components/Filter';
import '../../components/RestaurantList';
import RestaurantApi from '../../../data/restaurantapi-source';
import FilterInitiator from '../../../utils/initiator/filter-initiator';
import LoaderInitiator from '../../../utils/initiator/loader-initiator';

const Beranda = {
  async render() {
    return `
      <hero-banner></hero-banner>
      <filter-restaurant></filter-restaurant>
      <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    // console.log('Beranda : rendered');

    const restaurantContainer = document.querySelector('restaurant-list');
    const buttonSearchElement = document.querySelector('#btnSearch');
    const searchElement = document.querySelector('#inputSearch');

    FilterInitiator.init({
      searchButton: buttonSearchElement,
      searchInput: searchElement,
      listComponent: restaurantContainer,
    });

    try {
      LoaderInitiator.openLoader();
      const restaurant = await RestaurantApi.getAllRestaurant();
      restaurantContainer.restaurant = restaurant;
    } catch (error) {
      // console.error(error);

      restaurantContainer.innerHTML = '<h2>Loading Data Failed! Please Check Your Connection</h2>';
    } finally {
      LoaderInitiator.closeLoader();
    }
  },
};

export default Beranda;
