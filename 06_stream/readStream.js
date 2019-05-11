const fs = require('fs');

//流的方式读取文件
var readStream=fs.createReadStream('input.txt');

var str='';/*保存数据*/
var count=0;  /*次数*/
readStream.on('data',function(chunk){
    str+=chunk;
    count++;
})

//读取完成
readStream.on('end',function(chunk){
    console.log(count);
    // console.log(str);
})

//读取失败
readStream.on('error',function(err){
    console.log(err);
})