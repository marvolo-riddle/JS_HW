'use strict';
(function () {
  const generateList = array => {
    const newList = document.createElement("ul");
    for (let i = 0; i < array.length; i += 1) {
      const newItem = document.createElement("li");
      if (!Array.isArray(array[i])) {
        newItem.innerHTML = array[i];
      } else {
        const nestedArray = array[i];
        const nestedList = document.createElement("ul");
        for (let j = 0; j < nestedArray.length; j += 1) {
          const nestedItem = document.createElement("li");
          nestedItem.innerHTML = nestedArray[j];
          nestedList.append(nestedItem);
        }
        newItem.append(nestedList);
      }
      newList.append(newItem);
    }
    document.body.append(newList);
  }
  generateList([1, 2, [1.1, 1.2, 1.3], 3]);
})();
