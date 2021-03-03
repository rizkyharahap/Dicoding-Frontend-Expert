import CONFIG from '../../../globals/config';

class CardItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.maxLength = 60;
  }

  /**
   * @param {any} value
   */
  set restaurant(value) {
    this._restaurant = value;
    // console.log(this._restaurant);

    this.render();
  }

  getTruncateDescription() {
    // console.log(this._restaurant.description.length);
    let description = '';
    for (
      let index = 0;
      index <= this._restaurant.description.length;
      index += 1
    ) {
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

  render() {
    this.shadowDOM.innerHTML = `

    <style>
      article {
        background-color: white;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 4px;
        transition: 0.3s;
        overflow: hidden;
        width: 100%;
      }

      article:hover {
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.15);
      }


      img {
        width: 100%;
        height: 200px;
        object-fit : cover;
      }

      .card-content {
        position: relative;
        padding: 16px 12px 12px 12px;
      }

      h4 {
        font-size : 1.2rem;
        margin: 0;
      }

      address {
        font-style : normal;
        font-size : .85rem;
        margin-top: 8px;
        color:gray;
      }

      p {
        margin-top: 8px;
      }

      .card-actions, .rating {
        display: flex;
        align-items: center;
      }

      .card-actions {
        margin-top: 24px;
        justify-content: flex-end;
      }

      .rating {
        position: absolute;
        top: 16px;
        right: 12px;
      }

      .rating span {
        font-size: 1.1rem;
        font-weight: 500;
        margin-left: 8px;
      }

      a {
        background-color: #cd0a0a;
        color: white;
        border-radius: 4px;
        text-decoration: none;
        padding: 14px 16px ;
        transition: all .2s ease-in-out;
      }

      a:hover {
        transform: scale(1.05);
      }

      @media (min-width : 540px) {
        article {
          display: grid;
          grid-template-columns: 35% 65%;
          grid-template-rows: 1fr;
        }

        .card-image {
          height: 100%;
        }

        img {
          height: 100%;
        }
      }

    </style>

    <article id="card-article">

        <picture>
          <source srcset="${
  CONFIG.BASE_IMAGE_URL.SMALL + this._restaurant.pictureId
}" media="(max-width: 450px)"
          >
          <source srcset= ${
  CONFIG.BASE_IMAGE_URL.MEDIUM + this._restaurant.pictureId
} >
          <img
            src="${CONFIG.BASE_IMAGE_URL.MEDIUM + this._restaurant.pictureId}"
            alt="${this._restaurant.name}"
            title="${this._restaurant.name}"
        />
        </picture>

      <div class="card-content">
        <h4>${this._restaurant.name}</h4>
        <address>${this._restaurant.city}</address>

        <div class="rating">
          <svg
          width="20"
          height="20"
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

        <p>${this.getTruncateDescription()}</p>

        <div class="card-actions">
          <a href="#/detail/${
  this._restaurant.id
}" class="btn-read-more">Lihat Detail</a>
        </div>
      </div>

    </article>
    `;
  }
}

customElements.define('card-items', CardItem);
