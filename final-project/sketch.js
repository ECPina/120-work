/*
Name: sketch.js
Last Modified: 04/17/2019
Author: E.C.Pina
Title: WIP
*/

// sound credits:
// rain and thunder in stero by toddcircle
// dull metal windchimes by splicesound
// freesound.org

let wake = [];
let wakeX = 5;
let wakeY = 5;

let rainAudio;

function preload() {
  rainAudio = loadSound('../final-project/rainthunder.mp3');
}

function setup() {
  createCanvas(900, 900);

  rainAudio.play();
  rainAudio.setVolume(0.5);

  for (let i = 0; i < 1; i++) {
   let x = 1 + 2 * i;
   wake[i] = new Wake();
  }
}

function draw() {
  background('#0C0A2A');

  wakeX %= width;
  wakeY %= height;

  fill('#313A50');
  strokeWeight(50);
  stroke('#000000');
  rect(100, 100, 550, 600);

  stroke(1);
  line(375, 700, 375, 125);

  for (let i = 0; i < wake.length; i++) {
    wake[i].move();
    wake[i].display();
  ß}
}
