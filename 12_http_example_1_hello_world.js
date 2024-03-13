// Example: Create a simple web server that listens for incoming HTTP requests on port 3000 and responds with "Hello World".

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");

// Now, when we run the code, the server will listen for incoming HTTP requests on port 3000. When a request is received, the server will respond with "Hello World". We can test the server by opening a web browser and navigating to http://localhost:3000. We should see "Hello World" displayed in the browser.
