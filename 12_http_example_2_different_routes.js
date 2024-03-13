// If we are building a backend service, we need to handle different routes. For example, we can create a simple web server that listens for incoming HTTP requests on port 3000 and responds with "Hello World" for the root route and "Welcome to the API" for the /api route.

const http = require("http");

const server = http.createServer((req, res) => {
  // If the request URL is "/", respond with "Hello World".
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  // If the request URL is "/api", respond with "Welcome to the API".
  if (req.url === "/api") {
    res.write("Welcome to the API");
    res.end();
  }

  // If the request URL is "/api/courses", respond with a JSON array of courses.
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }

  // All routes are added in linear way and the server will respond with the first route that matches the request URL. If we want to handle different routes, we can use the if statement to check the request URL and respond accordingly.
});

server.listen(3000);

console.log("Listening on port 3000...");

// Now, when we run the code, the server will listen for incoming HTTP requests on port 3000. When a request is received, the server will respond with "Hello World" for the root route, "Welcome to the API" for the /api route, and a JSON array of courses for the /api/courses route. We can test the server by opening a web browser and navigating to http://localhost:3000, http://localhost:3000/api, and http://localhost:3000/api/courses. We should see "Hello World", "Welcome to the API", and a JSON array of courses displayed in the browser, respectively.

// In the real world applications, we will use a web framework like Express to handle different routes. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed for building web applications and APIs.
