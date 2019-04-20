class Rain {
  constructor(){
    this.x = 200;
    this.y = 200;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  display() {
    fill('red');
    textSize(50);
    text('the rain is pouring outside', this.x, this.y*2);
  }
}
