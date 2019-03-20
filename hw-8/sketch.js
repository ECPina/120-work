let a = 0;
let b = 300;
let box_size = 1000;

function setup(){
  createCanvas (1000, 600);
  background ('white');
  strokeWeight(1);
}

let mouseIsPressed_SIZE = 25;

let pos_x = 5;
let pos_y = 5;
let d = 45;
let r = d/2;

function draw(){

  if (mouseIsPressed) {
      mouseIsPressed_SIZE++;
    }

  if ((mouseX > a) && (mouseX < a + box_size) && (mouseY > b) && (mouseY < b + box_size)) {
        fill(0);
    } else {
        fill(255);
      }

  noStroke();
  rect(a, b, box_size, box_size);

  fill('rgba(102, 255, 204, 0.1)');
  noStroke();

  for (let i = 1; i < 10; i++) {
    pos_x = width * i/10 + r;
    ellipse(pos_x, pos_y, d, mouseIsPressed_SIZE);
  }

  pos_y++;
  if (pos_y > height) {
      pos_y = 5;
  }

  noFill();
  stroke(255);

  let circle_size = random(5, width-5);
  ellipse (width/2, height/2, circle_size);

}

function mousePressed() {
  mousePressedFunction_SIZE++;
  return false;
}
