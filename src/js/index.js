import Controller from "./Controller.js";
import View from "./View.js";
import Model from "./Model.js";

6
import {apiUrl} from "./constants.js";
import {apiRoutes} from "./constants.js";
import {validateSelector} from "./helpers.js";

const model = new Model(apiUrl, apiRoutes);
const view = new View('[data-post]', '[data-comment]');

const controller = new Controller('[data-input-number]', '[data-show-btn]', model, view);

