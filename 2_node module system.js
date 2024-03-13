console.log(); // global object (In the browser, it's the window object)

setTimeout(); // global object(setTimeout is a method of the global object)
clearInterval(); // global object(clearInterval is a method of the global object)

setInterval(); // global object(setInterval is a method of the global object)
clearInterval(); // global object(clearInterval is a method of the global object)

// In the browser, these functions would be methods of the window object. i.e. window.setTimeout(), window.clearInterval(), window.setInterval(), window.clearInterval()

var message = ""; // global object
console.log(global.message); // undefined (In the browser, it would be window.message)
