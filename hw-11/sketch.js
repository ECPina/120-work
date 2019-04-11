/*
Name: sketch.js
Last Modified: 04/10/2019
Author: E.C.Pina
Title: Truly Greg
*/

let gregs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 40; i++) {
    let x = 10 + 10 * i;
    gregs[i] = new Greg();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < gregs.length; i++) {
    gregs[i].move();
    gregs[i].display();

    push();
    fill(255);
    textSize(50);
    text('THE FASTEST GROWING ARMY', 100, 100);
    text('ON THE INTERNET', 100, 900);
    pop();
  }
}

class Greg {
  constructor(){
    this.x = 5;
    this.y = 10;
  }

  move() {
    this.x = this.x + random(-4, 8);
    this.y = this.y + random(-4, 8);
  }

  display() {
    fill(255);
    textSize(50);
    text('GREG', this.x, this.y);
  }
}
