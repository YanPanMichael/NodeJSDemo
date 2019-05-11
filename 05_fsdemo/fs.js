var fs = require('fs');

fs.readdir('demo', (err, dir) => {
  if(!err) {
    console.log(dir);
    var resArr = [];
    //不用高级方法表达式，使用回调函数
    (function loop(index){
      if(index === dir.length) {
        console.log(resArr, resArr);
        return false;
      }
      const element = dir[index];
      console.log('element',element);
      fs.stat('demo/'+dir[index], function(err, stat) {
        if(stat.isDirectory()) {
          console.log('stat', dir[index]);
          resArr.push(dir[index]);
        }
        loop(index+1);
      })
    })(0)
  }
})