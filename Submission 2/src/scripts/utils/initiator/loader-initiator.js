import '../../views/components/Loader';

const LoaderInitiator = {
  init({ loaderComponent }) {
    this._loaderComponent = loaderComponent;
  },
  openLoader() {
    this._loaderComponent.setAttribute('open', '');
  },
  closeLoader() {
    this._loaderComponent.removeAttribute('open');
  },
};

export default LoaderInitiator;
