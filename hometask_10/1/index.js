const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  const fileName = req.url.split('/').splice(-1).join();
  const extensArr = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
  const regImg = new RegExp('\\.' + extensArr.join('|') + '$');
  const regScript = new RegExp('\\.js$');

  if ( regImg.test(req.url) ) {
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
  
  if ( regScript.test(req.url)){
    res.setHeader('Content-Type', 'text/javascript');
    fs.readFile('main.js', 'utf-8', (err, data) => {
      
        if (err) {
            res.end();
            throw new Error('Error while reading file:' + err);
        };
        res.end(data);
    });
    return;
  }
  
  fs.readFile('index.html', 'utf-8', (err, data) => {
      if (err) {
          res.end();
          throw new Error('Error while reading file:' + err);
      };

      const date = new Date();
      const farmatDate = {
        year: date.getFullYear(),
        month: (date.getMonth() > 10) ? date.getMonth() : '0' + (date.getMonth() + 1),
        day:  (date.getDay() > 10) ? date.getDay() : '0' + date.getDay()
      }
      
      const substr = "<h1>Content</h1>";
      const dateElem = `<span style="position: fixed; bottom: 15px; right: 15px;">${ [farmatDate.year, farmatDate.month, farmatDate.day].join('.') }</span>`;
      
      res.end(data.split(substr).join(substr + dateElem));
  });
});

server.listen(5000, () => {
  console.log('Listening to server localhost:5000');
});
