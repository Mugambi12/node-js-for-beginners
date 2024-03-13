// HTTP Module is a built-in module in Node.js. It is used to create a web server that listens for incoming HTTP requests. We can use this module to build a web server that can serve web pages or respond with data from a database. We can also use it to build a RESTful API.

// For example, we can use the HTTP module to build a simple web server that listens for incoming HTTP requests on a given port. When a request is received, the server will respond with "Hello World".

// With this, we can easily create a web server that listens for incoming HTTP requests and responds with data from a database. We can also use it to build a RESTful API. Like web applications built with React, Angular, or Vue, we can use the HTTP module to build a web server that serves web pages or responds with data from a database.

// HTTP Module has different classes. Each class has different methods and properties used to perform different tasks.  The most important classes are:
// 1. http.Server: This class is used to create a web server that listens for incoming HTTP requests.
// 2. http.IncomingMessage: This class is used to represent the incoming HTTP request message.
// 3. http.ServerResponse: This class is used to represent the outgoing HTTP response message.
// 4. http.Agent: This class is used to manage the connection persistence and reuse for HTTP clients.
// 5. http.ClientRequest: This class is used to represent an outgoing HTTP request message.
// 6. http.ClientResponse: This class is used to represent the incoming HTTP response message.
// 7. http.ServerRequest: This class is used to represent the incoming HTTP request message.
// 8. http.ServerResponse: This class is used to represent the outgoing HTTP response message.
// 9. http.STATUS_CODES: This class is used to represent the HTTP status codes.
// 10. http.METHODS: This class is used to represent the HTTP methods.
// 11. http.globalAgent: This class is used to represent the global instance of Agent.
// 12. http.createServer([options][, requestListener]): This method is used to create a new web server object. It returns a new instance of http.Server.
// 13. http.request(options[, callback]): This method is used to make an HTTP request to the server. It returns an instance of http.ClientRequest.
// 14. http.get(options[, callback]): This method is used to make an HTTP GET request to the server. It returns an instance of http.ClientRequest.

// Example: Create a simple web server that listens for incoming HTTP requests on port 3000 and responds with "Hello World".

const http = require("http");

// Server is an event emitter, so we can listen for events on the server object.
const server = http.createServer();
// NOTE: Each time a request is received, the server object emits a request event. We can listen for this event and respond to the request using on() method.

server.on("connection", (socket) => {
  console.log("New connection...");
});

server.listen(3000);

console.log("Listening on port 3000...");

// The server object emits an event each time a request is received. We can listen for this event and respond to the request.
