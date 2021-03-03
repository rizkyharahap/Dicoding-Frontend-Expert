class Navbar extends HTMLElement {
  constructor() {
    super();
    this._isOpen = false;
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} value
   */
  set isOpen(value) {
    this._isOpen = value;

    if (value) {
      document.querySelector('#openDrawer').classList.add('hidden');
      document.querySelector('#closeDrawer').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.querySelector('#mySidenav').style.cssText = 'width: 150px; padding-left: 16px; padding-right: 16px;';
      document.querySelector('#bgDrawer').style.display = 'block';
    } else {
      document.querySelector('#closeDrawer').classList.add('hidden');
      document.querySelector('#openDrawer').classList.remove('hidden');
      document.body.style.overflow = 'auto';
      document.querySelector('#mySidenav').style.cssText = 'width: 0; padding-left: 0; padding-right: 0;';
      document.querySelector('#bgDrawer').style.display = 'none';
    }
  }

  render() {
    this.innerHTML = `
    <div class="container d-flex navbar">
      <a class="d-flex brand" href="/" aria-label="Halaman Utama Foodterest">
        <img
          src="./assets/icons/logo.png"
          alt="Foodterest Icon"
          title="Foodterest Icon"
          width="40"
          height="40"
        />
        <h1 class="link">Foodterest</h1>
      </a>

      <div id="navRestaurant" class="nav-restaurant">
        <nav class="nav-link">
          <li>
            <a href="/" class="link">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="link">
              Favorit
            </a>
          </li>
          <li>
            <a href="https://happinest.xyz" class="link">
              Tentang Kami
            </a>
          </li>
        </nav>
      </div>

      <button
        title="Buka Navigasi"
        id="openDrawer"
        class="toogle-restaurant d-flex"
      >
        <svg
          width="20"
          height="35"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="ellipsis-v"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
        >
          <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
        </svg>
      </button>

      <button
        title="Tutup Navigasi"
        id="closeDrawer"
        class="toogle-restaurant d-flex hidden"
      >
        <svg
          width="35"
          height="35"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-11"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
        </svg>
      </button>

    </div>`;

    const openNavElement = document.querySelector('#openDrawer');
    const closeNavElement = document.querySelector('#closeDrawer');

    openNavElement.addEventListener('click', () => {
      this.isOpen = true;
    });

    closeNavElement.addEventListener('click', () => {
      this.isOpen = false;
    });
  }
}

customElements.define('navigation-component', Navbar, { extends: 'header' });
