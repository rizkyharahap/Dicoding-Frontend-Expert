class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="drawer-background" id="bgDrawer"></div>
      <aside id="mySidenav" class="sidenav">
        <ul class="nav-link">
          <li><a href="/" class="link">Home</a></li>
          <li><a href="#" class="link">Favorit</a></li>
          <li><a href="https://happinest.xyz" class="link">Tentang Kami</a></li>
        </ul>
      </aside>
`;
  }
}

customElements.define('app-drawer', Drawer);
