// when we declare a variable, it's added to the global object. This affects the scope of the variable. In the browser, it would be added to the window object.

// In real world applications, we don't want to pollute the global scope. We want to keep the scope of variables as local as possible. This is where modules come in.

// A module is a set of functions and variables that we want to keep private inside a file. We want to only expose the functions and variables that are needed by other parts of the application.

// If we want to use a module, we have to require it. This is how we do it:

// In this, we are able to keep the scope of variables and functions as local as possible and if a function or variable is redefine in a different module, it won't affect the original module.

console.log(module); // module object
