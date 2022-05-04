const http = require("http");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end("Hello World");
  })
  .listen(10033);

console.log("server running at http://localhost:10033");
