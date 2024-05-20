'use strict';
(function () {
  const ul = document.querySelector('ul');
  const box2 = document.querySelector('.box2');
  const box3 = document.querySelector('.box3');

  ul.addEventListener('click', function (event) {

    if (event.target.tagName === 'LI' && event.target.querySelector('ul')) {
      const cloneList = event.target.querySelector('ul').cloneNode(true);
      box2.innerHTML = '';
      box2.append(cloneList)

      cloneList.querySelectorAll('li').forEach(function (li) {
        li.addEventListener('click', function (event) {
          const divInLi = li.querySelector('.card');
          if (divInLi) {
            const card = divInLi.cloneNode(true);
            card.style.display = 'block';
            box3.innerHTML = '';
            box3.append(card);

            if (box3.querySelector('.card__button')) {
              const button = box3.querySelector('.card__button');
              button.addEventListener('click', function (event) {
                alert('Товар куплен, боец!');
                location.reload()
              })
            }
          }
        });
      });
    }
  })
})()

