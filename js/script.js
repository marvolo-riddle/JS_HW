'use strict';

// preventExtensions - запрет на расширение (изменять/удалять можно)
// seal - удалять нельзя, менять можно
// freeze - ничего нельзя


(function () {

  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        }
      },
    }
  }

  const deepFreeze = function (obj) {

    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.freeze(obj[key])
      }
    })

    return Object.freeze(obj)
  }

  deepFreeze(user)
  console.log(Object.isFrozen(user.data))      // true
  console.log(Object.isFrozen(user.data.a))    // true
  console.log(Object.isFrozen(user.data.d.a1)) // true
})()
