import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST, {
      method: 'GET',
    });
    const responseJSON = await response.json();

    return responseJSON.restaurants;
  }

  static async getRestaurantByName(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query), {
      method: 'GET',
    });

    const responseJSON = await response.json();

    return responseJSON.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      method: 'GET',
    });

    const responseJSON = await response.json();

    return responseJSON.restaurant;
  }

  static async addReview(body) {
    const response = await fetch(API_ENDPOINT.NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
      body: JSON.stringify(body),
    });

    const responseJSON = await response.json();

    return responseJSON.customerReviews;
  }
}

export default RestaurantApi;
