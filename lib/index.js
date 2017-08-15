var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Snake = require('./Snake.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var restart = document.getElementById('restart-btn');

restart.addEventListener('click', instantiateGame);
function instantiateGame() {
  context.clearRect(0, 0, 700, 700);
  var x = Math.random() * 675;
  var y = Math.random() * 675;
  var food = new Food(x, y, 20, 20, '#f00');
  food.draw(context);
  var snake = new Snake(50, 50, 20, 20, '#0f0');
  snake.draw(context);
}
