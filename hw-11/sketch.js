/*
Name: sketch.js
Last Modified: 04/10/2019
Author: E.C.Pina
Title: Truly Greg
*/

let greg = [];

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0);

  greg.display();
  greg.move();
}

class Greg {
  constructor(x, y, color);
  this.posX = x;
  this.posY = y;
  this.color = color;
}

display() {
  fill(this.color);
  text('GREG', posX, posY);
}

move() {
  posX = posX + 1;
  posY = posY +1;
  }
}
