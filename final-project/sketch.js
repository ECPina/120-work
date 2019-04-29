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

let rainAudio;

let wake = [];
let wakeX = 5;
let wakeY = 5;

// preload audio
function preload() {
  rainAudio = loadSound('../final-project/rainthunder.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

// audio
  rainAudio.play();
  rainAudio.setVolume(0.5);

// text
  for (let i = 0; i < 1; i++) {
   let x = 1 + 2 * i;
   wake[i] = new Wake();
  }
}

function draw() {
  background('#0C0A2A');
  fill('#000000');
  textSize(25);

    if (mouseIsPressed) {
      text('maybe it was the rain', 100, 100)
    } else {
      rect(100, 100, 50, 50);
    }

    print(mouseIsPressed);

// text
  wakeX %= width;
  wakeY %= height;

  for (let i = 0; i < wake.length; i++) {
    wake[i].move();
    wake[i].display();
  }
}
