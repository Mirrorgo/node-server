const express = require("express");
const app = express();
app
  .get("/", (req, res) => {
    res.send("hello");
  })
  .get("/", (req, res) => {
    res.send("您好，中国");
  })
  .get("/login", (req, res) => {
    res.send("<h1>登录</h1>");
  })
  .get("/register", (req, res) => {
    res.send("<h1>注册</h1>");
  })
  .listen(3000, () => {
    console.log("listen http://localhost:3000");
  });
