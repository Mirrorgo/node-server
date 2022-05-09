const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

let server = app.listen(8081, "localhost", function () {
  const { address, port } = server.address();
  console.log(server.address());
  console.log("应用实例，访问地址为 http://%s:%s", address, port);
});
