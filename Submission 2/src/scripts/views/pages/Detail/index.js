import RestaurantApi from '../../../data/restaurantapi-source';
import UrlParser from '../../../routes/url-parser';
import LoaderInitiator from '../../../utils/initiator/loader-initiator';
import ReviewInitiator from '../../../utils/initiator/review-initiator';
import '../../components/Detail';
import '../../components/Review';
import '../../components/Button/LikeButton';
import LikeButtonInitiator from '../../../utils/initiator/like-button-initiator';

const Detail = {
  async render() {
    return `
     <div id="restaurant">
        <like-button></like-button>
        <detail-element></detail-element>
        <review-element></review-element>
     </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const detailRestaurantContainer = document.querySelector('detail-element');
    const customerReviewContainer = document.querySelector('review-element');
    const buttonLike = document.querySelector('#btnLike');

    try {
      LoaderInitiator.openLoader();
      const restaurant = await RestaurantApi.detailRestaurant(url.id);

      detailRestaurantContainer.restaurant = restaurant;
      customerReviewContainer.customerReviews = restaurant.customerReviews;

      LikeButtonInitiator.init({
        buttonLikeComponent: buttonLike,
        restaurant,
      });

      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const btnReview = document.querySelector('#btnReview');

      ReviewInitiator.init({
        idRestaurant: restaurant.id,
        inputName,
        inputReview,
        btnReview,
        reviewComponent: customerReviewContainer,
      });
    } catch (error) {
      // console.error(error);

      restaurantContainer.innerHTML = '<h2>Loading Data Failed! Please Check Your Connection</h2>';
    } finally {
      LoaderInitiator.closeLoader();
    }
  },
};

export default Detail;
