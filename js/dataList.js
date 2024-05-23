'use strict';
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.querySelector('.dataList');
    const data = localStorage.getItem('formData');
    const formData = JSON.parse(data);

    if (formData) {
      for (let key in formData) {
        if (formData[key] !== '') {
          let li = document.createElement('li');
          li.textContent = `${key}: ${formData[key]}`;
          dataList.append(li);

        } else {
          let li = document.createElement('li');
          li.textContent = `${key}: Empty `;
          dataList.append(li);
        }
      }
    }
  })
})()

