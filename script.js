$(document).ready(() => {
  const name = 'Andy';

  const sayHello = (str) => {
    console.log(`hello ${str}`);
  };

  const h1 = document.getElementById('title');
  h1.addEventListener('mousemove', (event) => {
    console.log(event.x, event.y);
  });
  console.log(h1);

  const $h1 = jQuery('#title');
  $h1.on('click', (event) => {
    alert('hello');
  });
  console.log($h1);

});
