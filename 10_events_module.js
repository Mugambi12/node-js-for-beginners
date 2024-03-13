// Events is a module that allows you to create and handle custom events in Node.js
// An event is a signal that indicates something has happened in our application. For example, in a typical web application, we might have a form that allows a user to subscribe to a newsletter. We might want to perform some action when the user subscribes. We can use events to achieve this.

// Example: In Node.js, we have a class HTTP that we can use to create a web server. We can listen on the server for a "connection" event, and when that event occurs, we can run a callback function.

// Example: In Node.js, we have a class called EventEmitter that we can use to create and handle custom events.

const EventEmitter = require("events"); // EventEmitter is a class(capital letter) not a function(lowercase letter)

const customEmitter = new EventEmitter(); // customEmitter is an object

// Class is like a human being. Object is like a person. A human being is a blueprint. A person is an instance of the blueprint. So, a class is a blueprint. An object is an instance of the blueprint.

// Register a listener
customEmitter.on("messageLogged", function () {
  console.log("Listener called");
});

// Raise an event
customEmitter.emit("messageLogged"); // Emit means to make something happen. In this case, we are making an event happen. We are emitting an event called 'messageLogged'.

// When raising an event, we can also pass some data about the event. For example, we can pass an object with some data about the event. This data can be used by the listener to perform some action.

// Example 1:
// customEmitter.emit("messageLogged", { id: 1, url: "http://" }); // We can pass an object with some data about the event.

// Example:
// customEmitter.on("messageLogged", function (arg) {
//   console.log("Listener called", arg);
// });

// NOTE: Order of operations is important. If we emit an event before we register a listener, the listener will not be called. The listener must be registered before the event is emitted.
