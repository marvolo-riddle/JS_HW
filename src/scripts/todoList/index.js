'use strict';

import Model from "./model.js";
import Controller from "./controller.js";
import View from "./view.js";

const selectors = {
  form: '#todoForm',
  todosContainer: '#todoItems'
}

View.init(selectors);
Model.init();
Controller.init(selectors);