import './style.scss';
import '../Button/Button';
import '../TextField';

class Review extends HTMLElement {
  constructor() {
    super();
    this._customerReviews = [];
  }

  set customerReviews(value) {
    this._customerReviews = value;

    this.render();
  }

  getReviews() {
    let menuElement = '<div class="card-review">';

    this._customerReviews.forEach((result) => {
      menuElement += `
      <article>
        <header>
          <h4>${result.name}</h4>, <span>${result.date}</span>
        </header>
        <p>${result.review}</p>
      </article>`;
    });

    menuElement += '</div>';

    return menuElement;
  }

  async render() {
    this.innerHTML = `
      <section class="detail-review">
        <div class="review-container">
          <h3>Tanggapan</h3>

          <div class="form-review">
            <text-field
              id="inputName"
              name="nama"
              placeholder="Masukan Namamu..."
            >
              <span class="review-label" slot='label'>Name</span>
            </text-field>
            <textarea
              id="inputReview"
              title="Kolom Tanggapan"
              rows="6"
              placeholder="Bagikan pengalamanmu disini"></textarea>

            <button-element
              id="btnReview"
              name="Review"
              value="Kirim Review"
            ></button-element>
          </div>
          ${this.getReviews()}
        </div>
      </section>
    `;
  }
}

customElements.define('review-element', Review);
