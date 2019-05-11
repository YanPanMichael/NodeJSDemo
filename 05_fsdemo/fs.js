var fs = require('fs');

fs.readdir('demo', (err, dir) => {
  if(!err) {
    console.log(dir);
    for (let index = 0; index < dir.length; index++) {
      const element = dir[index];
      console.log('element',element);
      fs.stat(dir[index], (err, stat) => {
        // if(stat.isDirectory) {
          console.log('stat',stat);
        // }
      })
    }
  }
})