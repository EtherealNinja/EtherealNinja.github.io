let x = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(0);

  fill(0, 255, 0);
  rect(x, 0, 30, 400);

  x += speed;

  if (x >= width - 30 || x <= 0) {
    speed = speed * -1;
  }
  
}