/*
Name: sketch.js
Last Modified: 04/29/2019
Author: E.C.Pina
Title: Final Project
*/

// Rain code inspired by Dan Shaffman on the Coding Train & Modified to creepy crawlers by Erica Pina

// Lyrics from The Hearse Song by Unknown
// Made popular by Alvin Schwartz

// Sound Credits
// Rain and Thudner in Stero by Toddcircle

let rainAudio;

let drop = [];

// preload audio; credit to Toddcircle
function preload() {
  rainAudio = loadSound('../final-project/rainthunder.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // audio
    rainAudio.play();
    rainAudio.loop();
    rainAudio.setVolume(0.5);

  // loop creepy crawlers; credit to Shaffman
  for (let i = 0; i < 350; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(0);

  // draw Lyrics; credit to Alvin Schwartz
  push();
  fill(255);
  textStyle(ITALIC);
  textSize(50);
  text('the worms crawl in', 200, 200);
  text('the worms crawl out', 300, 300);
  text('the worms play pinochle', 400, 400);
  text('on your snout', 700, 500);
  pop();

  // draw random cicles
  push();
  noFill();
  strokeWeight(5);
  stroke('blue');

  let circle_size = random(1, width-1);
  ellipse (width/30, height/30, circle_size);

  // draw creepy crawlers
  for (let i = 0; i < 350; i++) {
    drop[i].show();
    drop[i].update();
  }
  pop();
}

function Drop () {
  this.x = random(0, width);
  this.y = random(0, height);

  this.show = function() {
    translate(width, height);
    rotate(10, 10);
    noStroke();
    fill(255);
    rect(this.x, this.y, 5, 50);
  }

  this.update = function() {
    this.y = this.y + 2;

    if (this.y > height) {
      this.y = 0;
    }
  }
}
