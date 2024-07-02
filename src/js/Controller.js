class BaseController {
  links = [];
}

////////////////////////////////////////////////////////////

class AlbumsController extends BaseController {
  #albumsModel = null;
  #albumsView = null;

  constructor(alModel, alView) {
    super();
    this.#albumsModel = alModel;
    this.#albumsView = alView;

    this.setEvents()
  }

  async setEvents() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.loadedAlbums);
    } else {
      this.loadedAlbums();
    }

  }

  loadedAlbums = async () => {
    const data = await this.#albumsModel.fetchData();
    await this.#albumsView.renderAlbums(data);

    this.links = document.querySelectorAll('[data-link-id]');
    this.links.forEach(link => {
      link.addEventListener('click', this.redirectTo.bind(this));
    });
  };

  redirectTo = async (event) => {
    const id = parseInt(event.target.getAttribute('data-link-id'));
    localStorage.setItem('currentId', id);
  }
}

////////////////////////////////////////////////////////////

class PhotosController extends BaseController {
  #photosModel = null;
  #photosView = null;

  constructor(model, view) {
    super()
    this.#photosModel = model;
    this.#photosView = view;

    this.setEvents()
  }

  async setEvents() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.loadedPhotos);
    } else {
      this.loadedPhotos();
    }
  }

  async loadedPhotos() {
    const data = await this.#photosModel.fetchData();
    await this.#photosView.renderPhotos(data);
  }
}


export {AlbumsController, PhotosController};