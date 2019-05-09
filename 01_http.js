var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

    res.write("你好 nodejs");

    res.write("我是第一个nodejs程序");

    res.end(); /*结束响应*/
  })
  .listen(8001);
