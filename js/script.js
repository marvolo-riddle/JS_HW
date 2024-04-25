const incrementer = function (n) {
  return function (x) {
    n += x;
    return console.log(n)
  }
}
const sum = incrementer(0);
sum(3)
sum(5)
sum(20)