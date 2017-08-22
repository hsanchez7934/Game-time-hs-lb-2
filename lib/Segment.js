var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y, data, direction = 'right') {
    super(width, height);
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.color = '#0f0';
  }

  drawHeadLeft(context) {
    let headLeftImg = document.getElementById('snake-head-left');

    context.drawImage(headLeftImg, this.x, this.y, this.width, this.height);
  }

  drawHeadRight(context) {
    let headRightImg = document.getElementById('snake-head-right');

    context.drawImage(headRightImg, this.x, this.y, this.width, this.height);
  }

  drawHeadUp(context) {
    let headUpImg = document.getElementById('snake-head-up');

    context.drawImage(headUpImg, this.x, this.y, this.width, this.height);
  }

  drawHeadDown(context) {
    let headDownImg = document.getElementById('snake-head-down');

    context.drawImage(headDownImg, this.x, this.y, this.width, this.height);
  }

  drawTailLeft(context) {
    let tailLeftImg = document.getElementById('snake-tail-left');

    context.drawImage(tailLeftImg, this.x, this.y, this.width, this.height);
  }

  drawTailRight(context) {
    let tailRightImg = document.getElementById('snake-tail-right');

    context.drawImage(tailRightImg, this.x, this.y, this.width, this.height);
  }

  drawTailUp(context) {
    let tailUpImg = document.getElementById('snake-tail-up');

    context.drawImage(tailUpImg, this.x, this.y, this.width, this.height);
  }

  drawTailDown(context) {
    let tailDownImg = document.getElementById('snake-tail-down');

    context.drawImage(tailDownImg, this.x, this.y, this.width, this.height);
  }

  drawBodyHorizontal(context) {
    let bodyHorizontalImg = document.getElementById('body-horizontal');

    context.drawImage(bodyHorizontalImg, this.x, this.y, this.width, this.height);
  }

  drawBodyVertical(context) {
    let bodyVerticalImg = document.getElementById('body-vertical');

    context.drawImage(bodyVerticalImg, this.x, this.y, this.width, this.height);
  }

}


module.exports = Segment;
