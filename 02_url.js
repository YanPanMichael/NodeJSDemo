var http = require("http");

var url = require("url");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

    if (req.url != "/favicon.ico") {
      var result = url.parse(req.url, true); //第一个参数是地址    第二个参数是true的话表示把get传值转换成对象
      console.log("aid=" + result.query.aid); /*获取url的get传值*/
      console.log("cid=" + result.query.cid);
    }

    res.write("你好 nodejs");

    res.end(); /*结束响应*/
  })
  .listen(8001);
