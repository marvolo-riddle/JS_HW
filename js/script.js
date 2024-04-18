function recurseFlat(arr) {
  if (arguments.length !== 1) {
    console.error("Функція приймає лише 1 аргумент - масив.");
    return;
  }
  if (!Array.isArray(arr)) {
    console.error("Переданий аргумент не є масивом.");
    return;
  }
  const isMultidimensional = arr.some(Array.isArray);
  if (!isMultidimensional) {
    return arr.slice();
  }
  const flattenedArray = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattenedArray.push(...recurseFlat(element));
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
}

console.log(recurseFlat([1, [2, 3], [4, [5, 6]]]));
console.log(recurseFlat([1, 2, 3]));
console.log(recurseFlat(123));
console.log(recurseFlat([1, [2, 3], "test"]));
