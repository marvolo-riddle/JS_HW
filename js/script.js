'use strict';
const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('.btn');
const texts = document.querySelectorAll('.card-title');

const getData = {
  id: null,
  name: null,
  position: null
};

cards.forEach((card, index) => {
  const btn = btns[index];
  const text = texts[index];

  btn.addEventListener('click', () => {

    getData.id = index;
    getData.name = text.textContent;

    const dataToStore = {
      id: getData.id,
      name: getData.name,
      position: getData.position
    };

    if (btn.innerHTML === 'Add') {
      (function add() {
        dataToStore.position = 'Add';
        btn.innerHTML = 'Delete';
        const uniqueId = Date.now();
      })();
    } else {
      (function del() {
        dataToStore.position = 'Delete';
        btn.innerHTML = 'Add'
      })();
    }

    const uniqueId = Date.now();
    localStorage.setItem(`data_${uniqueId}`, JSON.stringify(dataToStore));
  })

})


