/*
Name: sketch.js
Last Modified: 04/10/2019
Author: E.C.Pina
Title: Truly Greg
*/

let gregs = [];

function setup() {
  createCanvas(900, 900);
  for (let i = 0; i < 3; i++) {
    gregs[i] = new Greg(10);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 3; i++) {
    gregs[i].move();
    gregs[i].display();
  }
}

class Greg {
  constructor(){
    this.x = 10;
    this.y = 10;
  }

  move() {
    this.x = this.x + 2;
    this.y = this.y + 3;
  }

  display() {
    fill(255);
    textSize(50);
    text('GREG', this.x, this.y);
  }

}
