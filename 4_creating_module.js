// Logger.js

var url = "http://mylogger.io/log"; // This is an implementation detail. It's not part of the interface of this module. It's not something that we want to expose to the outside. We want to keep it private.

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports.log = log; // Exporting the log function. We are making it accessible from outside of this module.
