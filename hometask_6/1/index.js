const date = new Date();
const pathArr = process.argv[1].split('\\');;
const fileName = pathArr[pathArr.length - 1];

console.log(`
  date: ${date}
  file name: ${fileName}
`);
