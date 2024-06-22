//посредник. Навешать события, связать функции из др мод при триггере

import Model from './model.js';
import View from './view.js';

const Controller = {
  _formSelector: null,
  _todosContainerSelector: null,
  _formElement: null,
  _todosContainerElement: null,

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
    this.formHandler = this.formHandler.bind(this);
    this.loadedHandler = this.loadedHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.viewHandler = this.viewHandler.bind(this);

    this.setEvents()
  },

  setEvents() {
    this.formElement.addEventListener('submit', this.formHandler);
    document.addEventListener('DOMContentLoaded', this.loadedHandler);
    this.todosContainerElement.addEventListener('click', this.removeHandler);
    this._todosContainerElement.addEventListener('click', this.viewHandler);
  },


  formHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    let data = Array.from(event.target.querySelectorAll('input, textarea'))
        .reduce((acc, el) => {
          acc[el.name] = el.value;
          return acc;
        }, {})

    try {
      data = Model.setData(data);
      View.renderItem(data);
      View.resetForm()
    } catch (error) {
      alert('Cannot save data - DB is full!')
    }
  },

  loadedHandler() {
    const data = Model.getData();
    data.forEach((item) => {
      View.renderItem(item)
    })
  },

  removeHandler(event) {
    event.stopPropagation();
    const {target} = event;
    const btn = target.closest(`[data-btn="delete"]`);
    if (!btn) return;

    const toDoItemId = Number(btn.closest('[data-id]').getAttribute('data-id'));
    const isRemoved = Model.removeData(toDoItemId);

    if (isRemoved) {
      View.removeItem(toDoItemId);
    } else {
      alert('Item cannot be removed!');
    }
  },

  viewHandler(event) {
    event.stopPropagation();
    const {target} = event;

    const btn = target.closest('[data-btn="info"]')
    if (!btn) return;

    const todoItemId = Number(btn.closest('[data-id]').getAttribute('data-id'))
    const todoItemData = Model.getById(todoItemId);
    View.showInfo(todoItemData)
  },

}

export default Controller