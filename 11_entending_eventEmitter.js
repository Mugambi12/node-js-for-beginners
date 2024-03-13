// In the real world, we will not use the EventEmitter class directly. Instead, we will create a class that extends the EventEmitter class. This is because we want to add some custom methods to the class. We can do this by extending the EventEmitter class.

// 11_extending_eventEmitter.js

const Logger = require("./11_logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
