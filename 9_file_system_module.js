// File System Module
// The File System module provides a way of working with the file system. It is used to perform some operations on files like creating, reading, updating, deleting, renaming files.

// Synchronous method

const fs = require("fs");

const files = fs.readdirSync("./"); // Synchronous method. This method is blocking. It will block the execution of the code until the file system is read. It is not recommended to use this method. It is better to use the asynchronous method.

console.log(files);
// Output: [ '1_hello_world.js', '2_global_object.js', '3_modules.js', '4_events_module.js', '5_http_module.js', '6_file_system_module.js', '7_node_package_manager.js', '8_os_module.js', '9_file_system_module.js' ]

// Asynchronous method
// Asynchronous method take a function as a parameter. This function is called a callback function. This function is called when the file system is read.

const fs2 = require("fs");

const files2 = fs2.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

console.log(files2);
// Output: undefined
// Result [ '1_hello_world.js', '2_global_object.js', '3_modules.js', '4_events_module.js', '5_http_module.js', '6_file_system_module.js', '7_node_package_manager.js', '8_os_module.js', '9_file_system_module.js' ]

// In summery, in order to work with files in node, first you need to require fs module. Then you can use the methods of the fs module to work with files. There are two types of methods: synchronous and asynchronous. It is better to use the asynchronous method. The asynchronous method takes a function as a parameter. This function is called a callback function. This function is called when the file system is read. The first parameter of the callback function is an error object. If there is no error, the second parameter is the result. If there is an error, the second parameter is undefined. The error object contains the error message. The result contains the files. The asynchronous method is non-blocking. It does not block the execution of the code. It is recommended to use the asynchronous method. The synchronous method is blocking. It blocks the execution of the code. It is not recommended to use the synchronous method. It is better to use the asynchronous method.

// Usage of the File System Module
// Read a file
// Create a file
// Update a file
// Delete a file
// Rename a file
// Read a directory
// Create a directory
// Update a directory
// Delete a directory
// Rename a directory
// Watch a file or directory
