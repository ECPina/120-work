/*
Name: sketch.js
Last Modified: 02/15/2018
Author: E.C.Pina
*/

let angle = 0;
let x = 0;
let y = 0;

function setup() {
  createCanvas (800, 800);
  angleMode (DEGREES);
  rectMode (CENTER);

}

function draw() {
  background ('#FADBD8');
  noCursor();

// *************** //
// Scenery Sandbox //
// ************** //
  push();

  // text
  textSize (25);
  textFont ("Courier New");
  fill ('white');
  text ("time: " + floor(mouseX), 10, 40);
  text ("space: " + floor(mouseY), 10, 80);

  pop();


  push();

  // sun circle
  translate (width/3, height/3);
  stroke('#F1C40F');
  fill ('#F7DC6F');
  ellipse (0, 0, 100);

  // sun square
  noStroke();
  translate (0, 0);
  rotate (angle);
  fill ('#FCF3CF');
  rect (0, 0, 80, 80);

  pop();


  push();

  // mountains
  fill('#76D7C4');
  noStroke();
  triangle(0, 800, 300, 800, 0, 600);
  triangle(200, 800, 700, 800, 400, 600);
  triangle(500, 800, 800, 800, 800, 400);

  pop(); // <- END SCENERY

  push();
// ************ //
// UFO Sandbox //
// ********** //

  //  UFO
  noStroke();
  fill('#AEB6BF');
  ellipse(mouseX, mouseY, 200, 40);
  ellipse(mouseX, mouseY, 80, 80);
  fill('#e6ffff');
  triangle( mouseX, mouseY, 300, 800, 100, 800);

  pop(); // <- END UFO


  angle = angle + 4;
  x = x+2;
}
