const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// Template string
// ES6 / ES2015 : ECMAScript 6 / ECMAScript 2015
// ECMAScript is a standard for scripting languages, like JavaScript

// Output:
// Total Memory: 17179869184
// Free Memory: 1026749952

// In JavaScript, we could not get os information since it runs on the browser. However, with Node.js, we can get os information.
