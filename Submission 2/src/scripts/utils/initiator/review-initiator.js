import RestaurantApi from '../../data/restaurantapi-source';
import LoaderInitiator from './loader-initiator';

const ReviewInitiator = {
  init({
    idRestaurant, btnReview, inputName, inputReview, reviewComponent,
  }) {
    btnReview.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      // console.log('Add Review Button Clicked');

      const value = {
        id: idRestaurant,
        name: inputName.getAttribute('value'),
        review: inputReview.value,
      };

      this.addNewReview(value, reviewComponent);
    });
  },

  async addNewReview(value, reviewComponent) {
    try {
      LoaderInitiator.openLoader();

      if (
        (value.name === '' || value.name === null,
        value.review === '' || value.review === null)
      ) {
        alert('Kamu harus mengisi semua kolom !');
      } else {
        const customerReviews = await RestaurantApi.addReview(value);

        const customerReviewComponent = reviewComponent;

        customerReviewComponent.customerReviews = customerReviews;
      }
    } catch (error) {
      // console.error(error);
      alert('Oops sepertinya ada yang salah !');
    } finally {
      LoaderInitiator.closeLoader();
    }
  },
};

export default ReviewInitiator;
