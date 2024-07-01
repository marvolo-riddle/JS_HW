import {validateSelector} from "./helpers.js";


class Controller {
  inputSelector = null;
  inputElement = null;
  showPostBtnSelector = null;
  showPostBtnElement = null;
  currentPost = null;
  #model = null;
  #view = null;

  constructor(input, show, model, view) {
    this.input = input
    this.showBtn = show
    this.#model = model
    this.#view = view

    this.setEvents()
  };

  setEvents() {
    this.showPostBtnElement.addEventListener('click', this.loadPostById)
  };

  loadPostById = async (e) => {
    e.preventDefault()
    const inputValue = this.inputElement.value;
    if (inputValue > 100) throw new Error('id doesn\'t exist')

    try {
      this.currentPost = await this.#model.getPostById(inputValue)
      await this.#view.renderPost(this.currentPost)
    } catch (error) {
      this.#view.showError(error)
    }

    const btnShow = document.querySelector('[data-comment-btn]');
    if (btnShow) {
      btnShow.addEventListener('click', this.loadCommentPosts)
    }

  };

  loadCommentPosts = async ({target}) => {
    const comments = await this.#model.getCommentById(this.currentPost.id);

    try {
      for (const comment of comments) {
        await this.#view.renderComment(comment)
      }
      this.validateBtn(target)
      this.#view.renderClearBtn()
      this.#view.disableBtn(target)
    } catch (e) {
      this.#view.showError(e)
    }

    const btnClear = document.querySelector('[data-clear-btn]');
    if (btnClear) {
      btnClear.addEventListener('click', this.clearComments)
    }
  };

  clearComments = (e) => {
    e.preventDefault();
    const div = document.querySelector('[data-comment]');
    const btn = document.querySelector('[data-comment-btn]');

    try {
      this.#view.clear(div)
      this.#view.visibleBtn(btn)
      this.#view.deleteClearBtn(e.currentTarget)
    } catch (e) {
      this.#view.showError(e)
    }
  };

  validateBtn(e) {
    const btn = e.nextSibling;
    if (btn) {
      btn.remove()
    }
  };

  set input(val) {
    validateSelector(val)
    this.inputSelector = val;
    this.inputElement = document.querySelector(val);
  };

  set showBtn(val) {
    validateSelector(val)
    this.showPostBtnSelector = val;
    this.showPostBtnElement = document.querySelector(val);
  };

}


export default Controller;