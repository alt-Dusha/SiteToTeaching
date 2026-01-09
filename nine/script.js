const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const widght = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function Ball(x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill();
}

let ball1 = new Ball(50, 100, 4, 4, 'blue', 10);
console.log(ball1.x, ball1.y, ball1.velX, ball1.velY, ball1.size, ball1.color);
ball1.draw();

