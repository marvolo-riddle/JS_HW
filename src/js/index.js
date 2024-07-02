import {api} from './constants.js'
import {endPoints} from './constants.js';
import {AlbumsModel, PhotosModel} from './Model.js';
import {AlbumsView, PhotosView} from './View.js';
import {AlbumsController, PhotosController} from "./Controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const albumPage = document.querySelector('[data-albums]');
  const photosPage = document.querySelector('[data-photos]');

  if (albumPage) {
    const albumView = new AlbumsView('[data-albums]');
    const albumModel = new AlbumsModel(api, endPoints);
    const albumController = new AlbumsController(albumModel, albumView);


  } else if (photosPage) {
    const photosView = new PhotosView('[data-photos]');
    const photosModel = new PhotosModel(api, endPoints);
    const photosController = new PhotosController(photosModel, photosView);
  }
});