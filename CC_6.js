// U22978120

// HTML canvas setup
const canvas = document.getElementById("myCanvas"); // HTML canvas setup
const ctx = canvas.getContext("2d"); // webgl or webgpu for 3d

// Ball constructor with correct properties
class Ball {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

// Creating draw method for Ball class
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

//updated the draw method with collision detection
 update() {
    this.x += this.dx;
    this.y += this.dy;

    // Collision detection 
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx; // Reverse direction when its on x-axis collision
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy; // Reverse the direction when its on the y-axis collision
    }
  }
}

// Implement animation using setInterval.
const ball = new Ball(200, 160, 20, 2, 2, "red"); //test data

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for each frame
  ball.update();
  ball.draw();
  window.requestAnimationFrame(animate); // request animation frame
}

window.requestAnimationFrame(animate);
