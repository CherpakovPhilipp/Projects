const https = require('https');
const http = require('http');

getAsync = (url) => new Promise((resolve,reject) => {
  const cb = (res) => {
    if (res.statusCode !== 200) reject(res.statusMessage);
    res.setEncoding('utf-8');
    let response = '';

    res.on('data', data => response += data);
    res.on('end', () => { 
      try {                              // проверка на то, какие данные приходят:
        resolve(JSON.parse(response))   // если приходит валидный JSON - парсим его
      } catch{                          // если это не JSON - выводим как есть
        resolve(response)
      }
    });
  }

  if (url.indexOf('https') == 0) {      // проверка протокола
    https.get(url, cb);                 // проверяется первое вхождение 'https'
  } else {
    http.get(url, cb);
  }
})

module.exports = getAsync;
