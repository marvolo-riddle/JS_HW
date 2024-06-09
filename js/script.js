'use strict';
(function () {
  const iterator = function (itrObject) {

    const myArray = Array.from(itrObject);
    let currentIndex = 0;


    return {
      next() {
        let done = false;
        if (currentIndex + 1 > myArray.length) {
          done = true;
        }
        const result = {
          value: myArray[currentIndex],
          done
        }
        currentIndex += 1;
        return result;

      }
    }
  }

  const arr = ['1', '2', '3', '4'];

  const firstObj = iterator(arr);
  const secondObj = iterator(arr);

  console.log(firstObj.next())
  console.log(firstObj.next())

  console.log('------------------')

  console.log(secondObj.next())
  console.log(secondObj.next())
  console.log(secondObj.next())
  console.log(secondObj.next())
  console.log(secondObj.next())

  console.log('------------------')

  console.log(firstObj.next())
  console.log(firstObj.next())
  console.log(firstObj.next())
  
})();