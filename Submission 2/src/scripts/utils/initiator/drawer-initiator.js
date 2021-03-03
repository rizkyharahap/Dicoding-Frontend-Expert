const DrawerInitiator = {
  init({ trigger, appDrawer }) {
    this._trigger = trigger;
    this._appDrawer = appDrawer;

    this._trigger.addEventListener('click', (event) => {
      // console.log('Triger Button Clicked');

      this._setOpen(event);
    });
  },

  _setOpen(event) {
    event.stopPropagation();

    const hasAtributOpen = this._appDrawer.hasAttribute('open');

    if (!hasAtributOpen) {
      this._trigger.setAttribute('icon', 'close');
      this._appDrawer.setAttribute('open', '');

      document.body.style.overflow = 'hidden';
    } else {
      this._trigger.setAttribute('icon', 'more_vert');
      this._appDrawer.removeAttribute('open');

      document.body.style.overflow = 'auto';
    }
  },
};

export default DrawerInitiator;
