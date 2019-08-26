function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); //Draw the background
  noStroke();
  
  //Set a new color, draw the circlez
  fill(0, 204, 0);
  ellipse(200, 200, 50);
  
  //Set the new color, draw the rectangles
  fill(240, 0, 0);
  rect(10, 10, 20, 20);
  rect(370, 370, 20, 20);
}