class Wake {
  constructor(){
    this.x = 200;
    this.y = 200;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  display() {
    fill('#A7A7A7');
    noStroke();
    textSize(50);
    text('you wake in the dead of night', this.x, this.y*2);
  }
}
