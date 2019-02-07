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
  push();
  translate(200, 100);
  scale(0.5);

  /* **** */
  /* legs */
  /* **** */
  push();

  fill('#85929E');
  noStroke();
  rect(130, 950, 50, 500);
  rect(260, 950, 50, 500);

  pop(); // LEGS END


  /* **** */
  /* body */
  /* **** */
  push();

  // belly
  fill('#AEB6BF')
  noStroke()
  ellipse(220, 700, 350, 600);

  // spots
  fill('#FDEDEC');
  ellipse (250, 550, 50, 50);
  ellipse (170, 500, 50, 50);
  ellipse (200, 900, 50, 50);
  ellipse (250, 800, 50, 50);
  ellipse (290, 700, 50, 50);

  pop(); // BODY END

  /* **** */
  /* HEAD */
  /* **** */

  push();

  //  neck
  fill('#85929E');
  noStroke();
  rect(160, 360, 120, 70);

  // head
  fill('#AEB6BF');
  noStroke();
  rect(30, 20, 375, 350, 0, 0, 190, 190);

  // cheeks
  fill('#FDEDEC');
  arc(100, 200, 80, 80, 0, PI + QUARTER_PI);
  arc(350, 200, 80, 80, 0, PI + QUARTER_PI);

  // eyebrow
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
  ellipse(298, 120, 65, 65);

  fill('#000000');
  noStroke();
  ellipse(300, 120, 40, 40);

  // nose
  fill('#512E5F');
  triangle(170, 180, 216, 230, 260, 180);

  // mouth
  fill('#000000');
  rect(140, 270, 160, 10);

  pop(); // HEAD END

}
