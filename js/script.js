'use strict';
(function () {


  const sum = function (a, b) {
    return a + b;
  }

  const memoize = function (func) {
    const cache = new Map();

    return function (...arg) {
      let key = JSON.stringify(arg);
      e
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        if (cache.size === 10) throw new Error('Cache is fulled!')
        const result = func(...arg);
        cache.set(key, result);
        return result;
      }
    }

  }

  const foo = memoize(sum);

  console.log(foo(3, 5))
  console.log(foo(4, 5))
  console.log(foo(3, 2))
  console.log(foo(6, 5))
  console.log(foo(7, 5))
  console.log(foo(8, 5))
  console.log(foo(9, 5))
  console.log(foo(0, 5))
  console.log(foo(3, 3))
  console.log(foo(3, 8))
  console.log(foo(3, 11)) // error


})()




