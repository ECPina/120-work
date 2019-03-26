/*
Name: sketch.js
Last Modified: 03/20/2018
Title: Sleep is for Squares
Author: E.C.Pina
*/


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background('#211830');

  // diagonal line of colored boxes
  noStroke();
  drawBox(15, 15, 20, 20);

  let padding = 25;
  let size = 75;
  let number_of_boxes = 9;
  let x_spacing = (width-padding*4)/(number_of_boxes-2);
  let y_spacing = (height-padding*4)/(number_of_boxes-2);

  rectMode(CENTER);
  for (let i=0; i < number_of_boxes; i++) {
  drawBox(i*x_spacing+padding, i*y_spacing+padding, size, size);
}

  // random squares
  noFill();
  stroke('#e60efe');

  let rect_size = random(10, width-10);
  rect(height/2, width/2, rect_size, rect_size);

  // quote
  textSize(50);
  textFont("Impact");
  fill(100, 250, random(255));
  text("SLEEP IS FOR", 700, 50);
}

function drawBox(x1, y1, x2, y2) {
  fill(250, 250, random(255));
  rect(x1, y1, x2, y2);

  fill('#433874');
  rect(x1+20, y1+20, x2, y2);

  fill('#22eae0');
  rect(x1+40, y1+40, x2, y2);
}
