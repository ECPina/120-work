var soundFile;

function preload() {
  soundFormats('mp3, ogg');
  soundFile = loadSound('windchimes.mp3');
}

function setup() {
  createCanvas(500, 500, 0);
  soundFile.setVolume(0.5);
  soundFile.play();
}

function keyTyped() {
  if (key == 'p') {
    soundFile.pause();
    background(255, 0, 0);
  }
  if (key == 's') {
    soundFile.play();
    background(0, 255, 0);
  }
}
