let http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
  let url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    // 配置相应头的content-type为text/html（含中文，必须加上编码格式utf-8）
    res.end("<p>首页</p>"); // 响应内容
  }
  console.log("接到请求");
});
server.listen(3000, () => {
  console.log("server is running>>> http://localhost:3000/");
});
