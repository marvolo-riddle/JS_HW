'use strict';
const body = document.body;
const bodyChild = body.childNodes;
const ul = bodyChild[1];
const ulName = [];
const ulValue = [];
for (const attr of ul.attributes) {
  ulName.push(attr.name);
  ulValue.push(attr.value);
}
console.log(ulName); //массив с именами
console.log(ulValue); //массив со значениями


// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя.
const lastLi = ul.lastElementChild.textContent = 'Hello, my name is Inna :)';


// Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя.
const firstLi = ul.firstElementChild.setAttribute('data-my-name', 'Inna');


// Удалить у тега ul атрибут ‘data-dog-tail‘/.
const removedAttr = ul.removeAttribute('data-dog-tail');

