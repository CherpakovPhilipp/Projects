const fs = require('file-system');

const folderName = parseInt(Math.random() * 100000000);

fs.writeFile(`${folderName}/date.txt`, `${new Date()}`);