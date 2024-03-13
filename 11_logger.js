// 11_logger.js

const EventEmitter = require("events");

// In the real world, we will not use the EventEmitter class directly. Instead, we will create a class that extends the EventEmitter class. This is because we want to add some custom methods to the class. We can do this by extending the EventEmitter class.

class Logger extends EventEmitter {
  // When a function is part of a class, we call it a method.
  // All methods defined in EventEmitter class are available in Logger class. We can use them to raise events in our application. We can also use them to handle events raised in our application.
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
