import RestaurantApi from '../../data/restaurantapi-source';
import LoaderInitiator from './loader-initiator';

const FilterInitiator = {
  init({ searchButton, searchInput, listComponent }) {
    searchInput.addEventListener('keyup', (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (event.keyCode === 13) {
        searchButton.click();
      }
    });

    searchButton.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      // console.log('Search Button Clicked');

      const value = searchInput.getAttribute('value');

      this.filterByName(value, listComponent);
    });
  },

  async filterByName(query, listComponent) {
    try {
      LoaderInitiator.openLoader();

      const restaurant = await RestaurantApi.getRestaurantByName(query);
      const restaurantListComponent = listComponent;

      restaurantListComponent.restaurant = restaurant;
    } catch (error) {
      // console.error(error);
      alert('Oops sepertinya ada yang salah !');
    } finally {
      LoaderInitiator.closeLoader();
    }
  },
};

export default FilterInitiator;
