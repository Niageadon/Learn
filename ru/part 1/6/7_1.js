/*
Если вы вдруг захотите копнуть поглубже – аналог bind для IE8- и старых версий других браузеров будет выглядеть следующим образом:

function bind(func, context ) {
  var bindArgs = [].slice.call(arguments, 2); // (1)
  function wrapper() {                        // (2)
    var args = [].slice.call(arguments);
    var unshiftArgs = bindArgs.concat(args);  // (3)
    return func.apply(context, unshiftArgs);  // (4)
  }
  return wrapper;
}
Использование – вместо mul.bind(null, 2) вызывать bind(mul, null, 2).

  Не факт, что он вам понадобится, но в качестве упражнения попробуйте разобраться, как это работает.
*/

function bind(func, context /*, args*/) {
  var bindArgs = [].slice.call(arguments, 2); // (1)
  console.log('bindArgs', bindArgs);
  function wrapper() {                        // (2)
    var args = [].slice.call(arguments);
    console.log('args', args);
    var unshiftArgs = bindArgs.concat(args);  // (3)
    console.log('unshiftArgs', unshiftArgs);
    return func.apply(context, unshiftArgs);  // (4)
  }
  return wrapper;
}

function mul(a, b) {
  console.log(a,b)
  return a * b
}

console.log(bind(mul, null, 2)())
