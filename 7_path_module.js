const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);

// Output:
// {
//   root: '/',
//   dir: '/Users/username/Desktop/NodeJS/NodeJS-Practice/NodeJS-Practice',
//   base: '7_path_module.js',
//   ext: '.js',
//   name: '7_path_module'
// }
