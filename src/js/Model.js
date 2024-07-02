class BaseModel {
  api = null;
  endPoints = null;
  currentId = localStorage.getItem("currentId");

  constructor(api, endPoints) {
    this.api = api;
    this.endPoints = endPoints;
  }

  async fetchData(endpoint) {
    const url = this.api + '/' + endpoint;
    if (endpoint === 'albums') {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } else if (endpoint === 'photos') {
      const response = await fetch(url + `?albumId=${this.currentId}`);
      localStorage.clear()
      const data = await response.json();
      return data;
    }
  }
}

////////////////////////////////////////////////////////////
class AlbumsModel extends BaseModel {

  constructor(api, endPoints) {
    super(api, endPoints);
  }

  async fetchData() {
    return await super.fetchData(this.endPoints.albums);
  }
}

////////////////////////////////////////////////////////////

class PhotosModel extends BaseModel {

  constructor(api, endPoints) {
    super(api, endPoints);
  }

  async fetchData() {
    return await super.fetchData(this.endPoints.photos);
  }
}


export {AlbumsModel, PhotosModel, BaseModel};