
var field = document.querySelector('#field');
var ball = document.querySelector('#ball');

function move() {
  let posX =  event.clientX;
  let posY = event.clientY;
  ball.style.left = Math.max(20, Math.min(posX-20, 200-20)) + 'px';
  ball.style.top = Math.max(20, Math.min(posY-20, 150-20)) + 'px';
}

field.addEventListener('click', move);
