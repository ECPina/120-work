/*
Name: sketch.js
Last Modified: 04/17/2019
Author: E.C.Pina
Title: WIP
*/

let wake = [];
let wakeX = 5;
let wakeY = 5;

let rain = [];
let rainX = 5;
let rainY = 5;

function setup() {
createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1; i++) {
    let x = 1 + 2 * i;
    wake[i] = new Wake();
  }

  for (let i = 0; i < 1; i++) {
    let x = 1 + 2 * i;
    rain[i] = new Rain();
  }
}

function draw() {
  background('#0C0A2A');

  wakeX %= width;
  wakeY %= height;

  rainX %= width;
  rainY %= height;


  fill('#313A50');
  strokeWeight(65);
  stroke('#000000');
  rect(100, 100, 550, 600);

  stroke(1);
  line(375, 700, 375, 125);

  for (let i = 0; i < wake.length; i++) {
    wake[i].move();
    wake[i].display();
  }

  for (let i =0; i < rain.height; i++) {
    rain[i].move();
    rain[i].display();
  }
}
