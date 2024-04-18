// Task 1
const getFactorial = function(x) {
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * getFactorial(x - 1);
}
console.log(getFactorial(3));
//
//
//
// Task 2
const pow = function (num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}
console.log(pow(5, 2));
//
//
//
// Task 3
const sum = function (a, b) {
  if (b === 0) {
    return a
  }
  {
    return sum(++a, --b)
  }
}
console.log(sum(3,4))
