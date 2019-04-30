// Rain code inspired by Dan Shaffman on the Coding Train & Modified to creepy crawlers by Erica Pina

let rainAudio;

let drop = [];

// preload audio
function preload() {
  rainAudio = loadSound('../final-project/rainthunder.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // audio
    rainAudio.play();
    rainAudio.loop();
    rainAudio.setVolume(0.5);

  for (let i = 0; i < 300; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(0);

  text('the worms crawl in', 100, 100, 50);
  text('the worms crawl out', 200, 100, 50);
  text('the worms play pinochle on your snout', 300, 100, 50);

  for (let i = 0; i < 300; i++) {
    drop[i].show();
    drop[i].update();
  }
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
    this.y = this.y + 5;

    if (this.y > height) {
      this.y = 0;
    }
  }
}
