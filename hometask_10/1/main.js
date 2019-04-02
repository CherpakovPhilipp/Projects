const img = document.querySelector('img');

img.addEventListener('load', (event) => {
  console.log('Width: ', img.width);
  console.log('Height: ', img.height);
});
 