import '../../../components/RestaurantList';
import DataSource from '../../../datas/data-source';

function Home() {
  const restaurantElement = document.querySelector('#restaurant-list');

  const renderResult = (result) => {
    // console.log(result);
    restaurantElement.restaurant = result;
  };

  const fallbackResult = (error) => {
    // console.log(error);
    restaurantElement.renderError(error);
  };

  const getRestaurant = async () => {
    try {
      const restaurant = await DataSource.getAllRestaurants();
      renderResult(restaurant);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const searchRestaurant = async ($keyword) => {
    try {
      const restaurant = await DataSource.getFilteredRestaurants($keyword);
      renderResult(restaurant);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const buttonSearchElement = document.querySelector('#btnSearch');
  const searchElement = document.querySelector('#inputSearch');

  buttonSearchElement.addEventListener('click', () => {
    const { value } = searchElement;
    searchRestaurant(value);
  });

  searchElement.addEventListener('keyup', () => {
    const { value } = searchElement;
    searchRestaurant(value);
  });

  getRestaurant();
}

export default Home;
