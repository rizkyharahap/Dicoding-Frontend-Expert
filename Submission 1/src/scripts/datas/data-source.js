import data from './DATA.json';

class DataSource {
  static getAllRestaurants() {
    return new Promise((resolve, reject) => {
      try {
        resolve(data.restaurants);
      } catch (error) {
        reject(new Error('Error, cannot parse data json'));
      }
    });
  }

  static getFilteredRestaurants(keyword) {
    const keywordLowecase = keyword.toLowerCase();

    return new Promise((resolve, reject) => {
      try {
        resolve(
          data.restaurants.filter(
            (el) => el.name.toLowerCase().includes(keywordLowecase)
              || el.description.toLowerCase().includes(keywordLowecase)
              || el.city.toLowerCase().includes(keywordLowecase),
          ),
        );
      } catch (error) {
        reject(new Error('Error, cannot parse data json'));
      }
    });
  }
}

export default DataSource;
