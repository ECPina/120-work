/*
Name: sketch.js
Last Modified: 04/17/2019
Author: E.C.Pina
Title: WIP
*/

let wake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1; i++) {
    let x = 1 + 1 * i;
    wake[i] = new Wake();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < wake.length; i++) {
    wake[i].move();
    wake[i].display();
  }
}

class Wake {
  constructor(){
    this.x = 100;
    this.y = 100;
  }

  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

  display() {
    fill('red');
    textSize(50);
    text('you wake in the dead of night', this.x, this.y*2);
  }
}
