function myApply(func, context, argsArray) {
  if (!context) {
    context = window;
  }
  const functionName = '__myApply_func__' + Math.floor(Math.random() * 1000000);
  context[functionName] = func;
  let result;
  const functionCall = 'context["' + functionName + '"](' + argsArray.map((arg, index) => 'argsArray[' + index + ']').join(',') + ')';
  result = new Function('context', 'argsArray', 'return ' + functionCall)(context, argsArray);
  delete context[functionName];
  return result;
}

function greet(name) {
  return `Hello, ${name}!`;
}

const result = myApply(greet, null, ['John']);
console.log(result);
