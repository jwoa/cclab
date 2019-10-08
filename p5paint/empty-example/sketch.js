let value = 0;

function setup() {
  createCanvas(640, 480);
  button = createButton('save');
  button.mousePressed(savePicture);
}

function savePicture() {
  save();
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function draw() {
  if (mouseIsPressed) {
    fill(value);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 80, 80);
}