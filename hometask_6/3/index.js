const getAsync = require('./get-async');

const data = getAsync('https://jsonplaceholder.typicode.com/users');
data.then((data) => console.log(data));