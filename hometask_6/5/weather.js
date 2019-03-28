const getAsync = require('../3/get-async');
const fs = require('file-system');

const data = getAsync('http://wttr.in/~kharkov');
data.then((data) => {
  fs.writeFile('weather.html', data);
});
