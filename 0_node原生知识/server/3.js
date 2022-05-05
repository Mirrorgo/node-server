const { readFile } = require("fs");
const { createServer } = require("http");
const { URL } = require("url");

const server = createServer();
const port = 3000;
const baseURL = `http://localhost:${port}`;
/*  */
server
  .on("request", (req, res) => {
    const url = new URL(req.url, baseURL);
    const { pathname } = url;

    if (pathname === "/") {
      readFile("./public/1.html", (error, data) => {
        if (error) {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end("你要的资源不存在，请稍后再试！");
        } else {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(data);
        }
      });
    } else if (pathname.indexOf("/assets/") === 0) {
      //NOTE: 用一堆if会比switch更灵活, 尤其是在👆这样的复杂条件的情况
      const fileName = "./public" + pathname;
      readFile(fileName, (err, data) => {
        if (err) {
          return res.end("404 NOT FOUND");
        }
        res.end(data);
      });
    } else if (pathname.indexOf("/test") === 0) {
      //测试区域
      res.setHeader("Content-Type", "text/html");
      res.setHeader("X-Foo", "bar");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("ok");
    } else {
      readFile("./public/views/404.html", (err, data) => {
        if (err) {
          return res.end("404 NOT FOUND");
        }
        res.end(data);
      });
    }
  })
  .listen(port, () => {
    console.log("server: ", baseURL);
  });
