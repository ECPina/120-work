/*
Name: sketch.js
Last Modified: 02/26/2018
Author: E.C.Pina
*/

let rect_x;
let rect_y;
let rect_width = 100;

let max_rect_mvt = 10;

let col_r = 0;
let col_g = 5;
let col_b = 0;

let circle_min = 25;
let circl_max;

function setup() {

  createCanvas( windowWidth, 900 );
  background(0);

  circle_max = width - 50;

  rect1_x = width * 0.3;
  rect1_y = height * 0.6;

  rect2_x = width * 0.6;
  rect2_y = height * 0.9;

  circle_max = width - 15;
}

function draw() {
  noCursor();

  // create walls
  let leftWall = 200;
  let rightWall = width - 200;

  let xm = mouseX;
  let cm = constrain(mouseX, leftWall, rightWall);

  let circle_size = map(mouseX, 0, width, circle_min, circle_max);

  // walls
  stroke ('yellow');
  line(leftWall, 5, leftWall, height);
  line(rightWall, 5, rightWall, height);

  push();
    // circle that grows and shrinks
    fill('rgba(153, 255, 230, .03)');
    ellipse(width/3, height/5, circle_size);

  pop();


  push();

    // draw the squares
    strokeWeight(3);
    stroke('rgba(97, 101, 176, 1)');
    fill('rgba(141, 141, 230, 0.2)');
    rect(rect1_x, rect1_y, rect_width, rect_width);

    // randomly update postion of squares
    rect1_x += random(-max_rect_mvt, max_rect_mvt);
    rect1_y += random(-max_rect_mvt, max_rect_mvt);

    stroke('rgba(50, 120, 200, 1)');
    fill('rgba(100, 100, 230, 0.7)');
    rect(rect2_x, rect2_y, rect_width, rect_width);

    rect2_x += random(-max_rect_mvt, max_rect_mvt);
    rect2_y += random(-max_rect_mvt, max_rect_mvt);

  pop();

  push();

    // draw circle

    col_r += random(0, 20);
    col_g += random(0, 30);
    col_b += random(0, 10);

    col_r += col_r % 200;
    col_g += col_g % 150;
    col_b += col_b % 255;

    fill('rgba(100, 120, 230, 0.2)');
    ellipse(cm, 100, 100);

  pop();

  push();

    textSize(100);
    fill('black');
    text("'YEEYEE!'", mouseX, mouseY)

  pop();

}
