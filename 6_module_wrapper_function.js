console.log(__filename);
console.log(__dirname);
var url = "http://www.google.com";

function log(message) {
  console.log(message);
}

module.exports.log = log;

// Node wraps the module code with a function wrapper. This is what it looks like:

// (function (exports, require, module, __filename, __dirname) {
//   // Module code actually lives in here
// });

// This is why we can use the module.exports, require, __filename, and __dirname variables in our module code. They are actually parameters of the wrapper function.

// require appears to be a global variable, but it's not. It's actually a parameter of the wrapper function. This is why we can't use require in the global scope. We can only use it inside a module. It is a local variable available in every module function.
