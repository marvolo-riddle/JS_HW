'use strict'
const body = document.body;
const bodyChild = body.childNodes;
const ul = bodyChild[1];
const arr = [];
for (const element of ul.childNodes) {
  if (element instanceof HTMLElement) {
    arr.push(element);
  }
}
console.log(arr)
const liArr = [];
for (const element of arr) {
  if (element.textContent) {
    liArr.push(element.textContent);
  }
}
console.log(liArr)