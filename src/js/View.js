class BaseView {
  albumsContainerSelector = null;
  albumsContainerElement = null;
  photosContainerSelector = null;
  photosContainerElement = null;

  setContainerSelector(selector, type) {
    this.validateSelector(selector)
    if (type === 'albums') {
      this.albumsContainerSelector = selector;
      this.albumsContainerElement = document.querySelector(selector);

    } else if (type === 'photos') {
      this.photosContainerSelector = selector;
      this.photosContainerElement = document.querySelector(selector);

    } else {
      throw new Error('Invalid container type specified.');
    }
  }

  validateSelector(selector) {
    if (typeof selector !== 'string') {
      throw new Error('Selector should be a string')
    }

    if (selector.trim() === '') {
      throw new Error('Selector should not be empty')
    }

    const element = document.querySelector(selector);
    if (element === null) throw new Error('Element did not found in DOM')
  }
}

////////////////////////////////////////////////////////////

class AlbumsView extends BaseView {

  constructor(selector) {
    super();
    this.setContainerSelector(selector, 'albums')
  }

  createTemplateAlbums({title, id}) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('item')
    wrapper.classList.add('d-flex')
    wrapper.classList.add('flex-column')
    wrapper.classList.add('justify-content-center')
    wrapper.classList.add('border')
    wrapper.classList.add('border-dark')
    wrapper.classList.add('align-items-center')
    wrapper.innerHTML = `<p class="title mt-5">${title}</p>
                  <a  target="_blank" href="photos-page.html" data-link-id="${id}" class="mb-3 text-decoration-none text-black" >VIEW</a>`
    return wrapper;
  }

  async renderAlbums(albums) {
    const div = document.querySelector('[data-albums]');
    albums.forEach(album => {
      const albumElement = this.createTemplateAlbums(album);
      div.appendChild(albumElement);
    });

  }
}

////////////////////////////////////////////////////////////

class PhotosView extends BaseView {

  constructor(selector) {
    super();
    this.setContainerSelector(selector, 'photos')
  }

  createTemplatePhotos({title, url}) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('photo')
    wrapper.classList.add('d-flex')
    wrapper.classList.add('flex-column')
    wrapper.classList.add('justify-content-center')
    wrapper.classList.add('align-items-center')
    wrapper.innerHTML = ` <img src="${url}" alt="photo" />
                      <p class="photo-text">${title}</p>
    `
    return wrapper;
  }

  async renderPhotos(data) {
    const div = document.querySelector('[data-photos]');
    data.forEach(photo => {
      const photoElement = this.createTemplatePhotos(photo);
      div.appendChild(photoElement);
    });
  }
}

export {AlbumsView, PhotosView};