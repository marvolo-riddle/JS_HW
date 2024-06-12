'use strict';
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
// const arr = ['a', 'b', 'c', 'd']
// console.log(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// const arr = [2, 5, 3, 9]
// let result = [arr[0] * arr[1], arr[2] * arr[3]];
// console.log(result[0] + result[1])

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// const obj = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(obj[1][0])

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
// const obj = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj.js[0])

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
// const arr = [];
// arr[0] = 'x';
// arr[1] = 'xx';
// arr[2] = 'xxx';
// console.log(arr)

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
// const arr = [];
// arr[0] = '1';
// arr[1] = '22';
// arr[2] = '333';
// console.log(arr)

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
// const arrayFill = function (value, count) {
//   const array = [];
//   for (let i = 0; i < count; i++) {
//     array.push(value)
//   }
//   return array
// }
// console.log(arrayFill(3, 7))

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const calculateElements = function (arr) {
//   let sum = 0;
//   let currentIndex = 0;
//   for (let i of arr) {
//     sum += i;
//     currentIndex++
//     if (sum > 10) {
//       break;
//     }
//   }
//   return currentIndex;
// }
// console.log(calculateElements(array))

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reversedArray = function (arr) {
//   const newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }
// console.log(reversedArray(array))

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const array = [[1, 2, 3], [4, 5], [6]];
// const flatArray = function (arr) {
//   const newArray = arr.flat()
//   return newArray.reduce((a, b) => a + b, 0);
// }
// console.log(flatArray(array))

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const flatArray = function (arr) {
  const newArray = arr.flat(4)
  return newArray.reduce((a, b) => a + b, 0);
}
console.log(flatArray(array))









