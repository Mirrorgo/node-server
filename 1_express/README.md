# why express?
利用express框架可以减少我们的代码量，比起之前使用node核心模块http构建服务器代码排版更直观。express底层使用的就是http核心模块的API。如果要处理客户端不同请求路径，我们可以往下罗列多个app.get()方法，无需再使用if...else...来判断。
express也不用我们设置响应头的Content-Type和中文编码格式，会底层自动识别添加
# how to use express
```javascript
const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('您好，中国')
})
app.get('/login', (req, res) => {
  res.send('<h1>登录</h1>')
})
app.get('/register', (req, res) => {
  res.send('<h1>注册</h1>')
})
app.listen('3000', () => {
  console.log('running...')
})
```
暴露静态文件
```javascript
app.use(express.static('public'))//public为你想要暴露的文件路径
app.use('/static', express.static('public')) //static为暴露在外部的路径
```
如果希望使用绝对路径使得你在任何路径下运行express app都能生效, 请使用
```javascript
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
//只能用join的方式补充__dirname, 直接用resolve自动补充的依然是node运行的dirname
```
渲染html而不是下载html得使用sendFile
```javascript
app
  .get("/", (req, res) => {
    res.sendFile(join(__dirname, "./public/index.html"), (err) => {
      if (err) {
        res.send("404");
      }
    });
  })
  .use("/assets", express.static(join(__dirname, "./public/assets/")))
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
```
---
DONE:
渲染vite普通页面

TODO:
- 处理get,post请求
- 代理服务器解决跨域请求
- cookie
https://segmentfault.com/a/1190000018234763
- 渲染next.js

