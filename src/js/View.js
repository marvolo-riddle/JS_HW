import {validateSelector} from "./helpers.js";

class View {
  postSelector = null;
  postElement = null;
  commentSelector = null;
  commentElement = null;

  constructor(postContainer, commentContainer) {
    this.postContainer = postContainer
    this.commentContainer = commentContainer
  };

  createTemplatePost({title, body, id}) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mb-3')
    wrapper.innerHTML = `<h1>${title}</h1>
                          <p>${body}</p>
                          <p>${id}</p> <div data-btn-wrapper class="d-flex gap-3">
                          <button type="button" data-comment-btn class="btn btn-success">View comments</button>
</div>
                          `
    return wrapper
  };

  createTemplateComment({email, body, name, id}) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('mb-3')
    wrapper.innerHTML = `<h1>${name}</h1>
                          <p>${body}</p>
                          <p>${email}</p>
                          <p>${id}</p>
                       `
    return wrapper
  };

  async renderPost(post) {
    this.postElement.innerHTML = ''
    this.postElement.append(this.createTemplatePost(post))
  };

  async renderComment(post) {
    this.commentElement.append(this.createTemplateComment(post))
  };

  createClearBtn() {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-secondary')
    btn.setAttribute('data-clear-btn', '')
    btn.innerHTML = 'Clear'
    return btn
  };

  renderClearBtn() {
    const div = document.querySelector('[data-btn-wrapper]');
    div.append(this.createClearBtn())
  };

  deleteClearBtn(event) {
    const btn = event;
    btn.remove()
  };

  disableBtn(el) {
    el.setAttribute('disabled', 'disabled')
  };

  visibleBtn(el) {
    el.removeAttribute('disabled')
  };

  clear(el) {
    el.innerHTML = '';
  }

  showError(error) {
    alert(error)
  };

  set postContainer(selector) {
    validateSelector(selector)
    this.postSelector = selector
    this.postElement = document.querySelector(selector)
  };

  set commentContainer(selector) {
    validateSelector(selector)
    this.commentSelector = selector
    this.commentElement = document.querySelector(selector)
  };

}

export default View;