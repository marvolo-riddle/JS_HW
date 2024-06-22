//Рендер. Создать здесь, отправить в работу к др мод

const View = {
  _formSelector: null,
  _todosContainerSelector: null,
  _formElement: null,
  _todosContainerElement: null,
  offCanvas: null,

  validateSelector(selector) {
    if (typeof selector !== 'string') {
      throw new Error('Selector should be a string');
    }
    if (selector.trim() === ' ') {
      throw new Error('Selector should not be empty');
    }

    const element = document.querySelector(selector);
    if (element === null) throw new Error('Element did not found in DOM')
  },

  set formSelector(selector) {
    this.validateSelector(selector);
    this._formSelector = selector;
    this._formElement = document.querySelector(selector);
  },

  set todosContainerSelector(selector) {
    this.validateSelector(selector);
    this._todosContainerSelector = selector;
    this._todosContainerElement = document.querySelector(selector);
  },

  get formSelector() {
    return this._formSelector;
  },

  get todosContainerSelector() {
    return this._todosContainerSelector;
  },

  get formElement() {
    return this._formElement;
  },

  get todosContainerElement() {
    return this._todosContainerElement;
  },


  init({form, todosContainer}) {
    this.formSelector = form;
    this.todosContainerSelector = todosContainer;
    const infoWindow = document.querySelector('#offcanvasExample');
    this.offCanvas = new bootstrap.Offcanvas(infoWindow);
  },

  renderItem(data) {
    const layout = this.createTemplate(data);
    this.todosContainerElement.prepend(layout);
  },

  createTemplate({title, description, id}) {
    const wrap = document.createElement("div");

    wrap.classList.add('col-4');
    wrap.setAttribute('data-id', id)
    wrap.innerHTML = `<div class="taskWrapper">
            <div class="taskHeading">${title}</div>
            <div class="taskDescription">${description}</div>
            <hr>
            <div>
              <button data-btn="delete" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
              <button data-btn="info" class="btn btn-primary btn-sm"><i class="bi bi-eye"></i></button>
            </div>
        </div>`;

    return wrap;
  },

  resetForm() {
    this.formElement.reset();
  },

  showInfo({id, title, description}) {
    this.offCanvas._element.querySelector('.title').innerHTML = title + ' #' + id
    this.offCanvas._element.querySelector('.description').innerHTML = description
    this.offCanvas.show()
  },

  removeItem(id) {
    this.todosContainerElement.querySelector(`[data-id="${id}"]`).remove()
  }

}

export default View;