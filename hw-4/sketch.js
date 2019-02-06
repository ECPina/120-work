/*
Name: sketch.js
Last Modified:02/06/2019
Author: E.C.Pina
*/
function setup () {
  // created canvas to draw on
  createCanvas(700, 900);
}

function draw () {
  // background
  background('#FCF3CF');

  /* ************ */
  /* MAIN SANDBOX */
  /* ************ */

/* **** */
/* body */
/* **** */
  push();
  pop();

  push();

  /* **** */
  /* HEAD */
  /* **** */

  push();

  //  neck
  fill('#85929E');
  noStroke();
  rect(150, 355, 140, 80);

  //skull
  fill('#AEB6BF');
  noStroke();
  rect(30, 20, 375, 350, 0, 0, 190, 190);

  // eyebrows
  fill('#000000');
  ellipse(100, 50, 20);
  ellipse(125, 50, 20);
  ellipse(150, 50, 20);

  // eyes
  fill('#ffffff');
  stroke('#000000');
  strokeWeight(4);
  rect(80, 80, 80, 80, 0, 80, 35, 120);
  rect(250, 80, 80, 80, 120, 0, 80, 35);

  // left
  fill('#A9CCE3');
  noStroke();
  ellipse(130, 120, 65, 65);

  fill('#000000');
  noStroke();
  ellipse(130, 120, 40, 40);

  // right
  fill('#A3E4D7');
  noStroke();
  ellipse(300, 120, 65, 65);

  fill('#000000');
  noStroke();
  ellipse(300, 120, 40, 40);

  // nose
  fill('#FADBD8');
  triangle(160, 180, 215, 240, 265, 180);

  // mouth
  fill('#000000');
  rect(140, 270, 160, 10);


  pop(); // HEAD END

}
