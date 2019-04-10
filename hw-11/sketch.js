let sad = [];

function setup() {
  createcanvas(windowWidth, 900);
  let s = new Sad(width/2, height/2, 40);
  sad.push(s);
}

function mouseClicked(){
  let r = random(20, 40);
  let s = newSad(mouseX, mouseY, r);
  sad.push(s);
}

function draw(){
  background(0);
  for (let i = 0; i < sad.lenght; i++) {
    sad[i].move();
    sad[i].show();
  }
}

class Sad {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    textColor('white');
    text('SAD');
  }
}
