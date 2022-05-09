const express = require("express");
const { readFile } = require("fs");
const { resolve, join } = require("path");
//
const port = 3000;
const app = express();
app
  .get("/", (req, res) => {
    res.sendFile(join(__dirname, "./public/index.html"), (err) => {
      if (err) {
        res.send("404");
      }
    });
  })
  .use("/assets", express.static(join(__dirname, "./public/assets/")))
  .listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
