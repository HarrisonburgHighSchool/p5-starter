//var knobs = [];





var data = 200;
var direction = 'right';
function setup() {
  createCanvas(400, 400);

}
function draw() {
  background(255);
  if(direction == 'left') {
    data--;
  }
  if(direction == 'right') {
    data++;
  }
  if(data > 300) {
    direction = 'left';
  }
  if(data < 100) {
    direction = 'right';
  }
  ellipse(data, 200, 50);
}









//function draw() {
  background(220); //Draw the background
  noStroke();
  
  //Set a new color, draw the circlez
  fill(0, 204, 0);
  ellipse(200, 200, 30);
  
  //Set the new color, draw the rectangles
  fill(240, 0, 0);
  rect(10, 10, 20, 20);
  rect(370, 370, 20, 20);

  knobs[0].draw();
//}

function mousePressed() {
  for(i = 0; i < knobs.length; i++) {
    if(dist(mouseX, mouseY, knobs[i].x, knobs[i].y) > knobs[i].r) {
      knobs[i].selected = true;
    }
  }
}

function mouseReleased() {
  for(i = 0; i < knobs.length; i++) {
    knobs[i].selected = false;
  }
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
} 

class Knob {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.selected = false;
  }

  draw() {
    ellipse(this.x, this.y, this.r);
  }
}

class Rotator {
  constructor(x, y) {
    this.r = 10; //fix
    this.x = x;
    this.y = y;
    this.d = 1; //or -1
    this.a = 1;
  }
  update() {
    //rotate
    this.a = this.a + 0.01;
  }
  draw() {
    ellipse(this.x, this.y, this.r);
  }
}