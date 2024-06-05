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
