let x = 0.01;
let y = 0;
let z = 0;

function setup() {
  let canvas = createCanvas(windowWidth, 350);
  canvas.parent("hero-animation");

  background(0);
}

function draw() {

  let a = 10;
  let b = 28;
  let c = 8 / 3;

  let dt = 0.02;

  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;

  x += dx;
  y += dy;
  z += dz;

  translate(width / 2 - 150, height / 2);

  stroke(
    100 + sin(frameCount * 0.05) * 155,
    50,
    50
  );

  strokeWeight(2);

  point(x * 15, y * 15);
}

function windowResized() {
  resizeCanvas(windowWidth, 350);
}