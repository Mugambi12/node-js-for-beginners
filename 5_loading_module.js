// To load a module, use the require() function. This function returns the module.exports object of the target module. (This is the object that we have exported from the module.)

// require() is a function not a keyword. It's a function provided by Node.js. It's not a part of JavaScript. It's a part of Node.js runtime.

// Example

var log = require("./4_creating_module"); // We use the require() function to load the module. We pass the path to the module as an argument. We don't need to specify the .js extension. Node.js will automatically look for the .js file.

console.log(log); // This will print the module.exports object of the target module. In this case, it will print the object that we have exported from the 4_creating_module.js module.

log.log("message"); // This will call the log function from the 4_creating_module.js module.

// In recent versions of JavaScript, we can use Const instead of Var. Const is used to define a constant. It's a signal to other developers that the value of this variable should not change.
// In so doing, we avoid reassigning the value of the variable. This is a good practice because it makes the code easier to understand and maintain.

// Example
// const logger = require("./4_creating_module");
// logger.log("message");

// logger = 1;
// This will throw an error because we are trying to reassign the value of a constant.
