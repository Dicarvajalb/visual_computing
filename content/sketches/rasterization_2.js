var p,
  x,
  y,
  r,
  space,
  decrease,
  move = 0,
  showCircle = true,
  fillCircle = false,
  randomizeColors = true;
let circleX = [];
let circleY = [];
let existingCombinations = [];
function setup() {
  createCanvas(621, 621);
  frameRate(5);
  move = 0;
  r = 15;
  space = 20;
  decrease = true;

}

function drawGrid() {
  for (let i = 0; i < width - 1 / space; i++) {
    stroke(0, 200, 0);
    strokeWeight(1);
    line(i * space, 0, i * space, height - 1);
    line(0, i * space, width - 1, i * space);
  }
}

function draw() {
  background(0, 0, 40);
  fill("red");
  triangle(500, 420, 258, 420, 486, 275);
  //let middle = floor((width - 1) / space / 2) * space;
  drawGrid();

  push();
}




