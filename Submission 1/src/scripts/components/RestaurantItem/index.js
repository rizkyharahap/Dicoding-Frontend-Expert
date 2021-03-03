class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });

    this.maxLength = 100;
  }

  /**
   * @param {any} value
   */
  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }

  truncate() {
    // console.log(this._restaurant.description.length);
    let description = '';
    for (let index = 1; index <= this._restaurant.description.length; index += 1) {
      description += this._restaurant.description[index];

      if (index === this.maxLength) {
        description
          += ' <span id="truncate">...</span> <span id="readMore" hidden>';
      }

      if (index === this._restaurant.description.length) {
        description += '</span>';
      }
    }

    return description;
  }

  readMore() {
    const truncate = this.shadowRoot.getElementById('truncate');
    const textReadMore = this.shadowRoot.getElementById('readMore');
    const btnReadMore = this.shadowRoot.getElementById('btnReadMore');

    if (truncate.hidden === false) {
      console.log('Read More');
      truncate.hidden = true;
      textReadMore.hidden = false;
      btnReadMore.textContent = 'Baca Lebih Sedikit';
    } else {
      console.log('Read Less');
      truncate.hidden = false;
      textReadMore.hidden = true;
      btnReadMore.textContent = 'Baca Selengkapnya';
    }
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>
      article {
        position: relative;
        border-radius: 16px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: 0.3s;
      }

      article:hover {
        background-color: #f1f1f1;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      }

      img {
        width: 100%;
        height : 250px;
        object-fit : cover;
        border-radius: 16px;
      }

      .restaurant-content {
        padding: 8px 16px;
      }


      address {
        font-size: 0.85rem;
      }

      .rating-restaurant {
        display: flex;
        align-items: center;
        position: absolute;
        top: 16px;
        right: 0;
        padding: 8px 16px;
        background-color: rgba(0, 0, 0, 0.65);
        border-bottom-left-radius: 16px;
        border-top-left-radius: 16px;
      }

      .rating-text {
        color: #fbf9fa;
        margin-left: 8px;
      }

      .btn-read-more {
        background-color : #cd0a0a;
        border : none;
        color : #fbf9fa;
        padding: 12px 16px;
        font-family: 'Raleway', sans-serif;
        border-radius : 8px;
        margin-bottom : 8px;
        transition: 0.3s;
        cursor: pointer;
        font-size : 1.05rem;
      }

      .btn-read-more:hover {
        background-color : #801313;
        font-size : 1.15rem;

      }
    </style>

    <article id="restaurant-article">

      <img
        class="rental-img-s"
        src="${this._restaurant.pictureId}"
        alt="${this._restaurant.name}"
      />

      <section class="restaurant-content">
        <h3>${this._restaurant.name}</h3>
        <address class="restaurant-address">${this._restaurant.city}</address>
        <p id="description-restaurant">
        ${this.truncate()}
        </p>
      </section>

      <div class="rating-restaurant">
        <svg
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -10 511.98685 511"
        >
          <path
            d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
            fill="#ffc107"
          />
        </svg>
        <span class="rating-text">${this._restaurant.rating}</span>
      </div>

    </article>
    `;

    const contentElement = this.shadowRoot.querySelector('.restaurant-content');

    if (this._restaurant.description.length > this.maxLength) {
      const buttonReadMore = document.createElement('button');
      buttonReadMore.textContent = 'Baca Selengkapnya';
      buttonReadMore.id = 'btnReadMore';
      buttonReadMore.title = 'Baca Selengkapnya';
      buttonReadMore.className = 'btn-read-more';

      buttonReadMore.addEventListener('click', () => this.readMore());

      contentElement.appendChild(buttonReadMore);
    }
  }
}

customElements.define('restaurant-item', RestaurantItem);
