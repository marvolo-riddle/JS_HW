const user = {
  name: 'Inna',
  lastName: 'Ovcharenko',
  age: 24,
}

const call = function (func, ctx, arr) {
  ctx.func = func
  ctx.func()
  delete ctx.func
}

const bind = function (func, ctx, arr) {
  return function () {
    return call(func, ctx, arr)
  }
}

const getFoolName = function () {
  console.log(this.name + ' ' + this.lastName);
}

const newFunc = bind(getFoolName, user)
newFunc()
