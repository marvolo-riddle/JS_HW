'use strict';
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {};

      for (const element of form.elements) {
        if (element.name) {
          if (element.type === 'checkbox') {
            data[element.name] = element.checked;
          } else if (element.type === 'file') {
            data[element.name] = element.files.length ? element.files[0].name : '';
          } else {
            data[element.name] = element.value;
          }
        }
      }
      // попробовать потом с клоном
      const jsonData = JSON.stringify(data);
      localStorage.setItem('formData', jsonData);
    });
  });
})()

