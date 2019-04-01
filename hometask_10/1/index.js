const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  

  const fileName = req.url.split('/').splice(-1).join();
  const fileExt = '.' + fileName.split('.').splice(-1).join();
  const extensArr = ['.png', '.jpg', '.jpeg', '.bmp', '.gif'];

  if (extensArr.includes(fileExt)) {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.end();
        throw new Error('Error while reading file:' + err);
      } else {
        res.end(data);
      }
    })
    return;
  }
  
  if (req.url === '/main.js'){
    res.setHeader('Content-Type', 'text/javascript');

    fs.readFile('main.js', 'utf-8', (err, data) => {
      
        if (err) {
            res.end('<strong>Error!</strong>');
            throw new Error('Error while reading index.html');
        };
        res.end(data);
    });
    return;
  }
  
  fs.readFile('index.html', 'utf-8', (err, data) => {
      if (err) {
          res.end('<strong>Error!</strong>');
          throw new Error('Error while reading index.html');
      };
      res.end(data);
  });

});

server.listen(5000, () => {
  console.log('Listening to server localhost:5000');
});
