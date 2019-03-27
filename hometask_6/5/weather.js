const getAsync = require('../3/get-async');
const fs = require('file-system');
let html;

const data = getAsync('http://wttr.in/~kharkov');
data.then((data) => {
  html = data;
  fs.writeFile('weather.html', html);
});
