class Prize {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 250);
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.x -= 3;
    image(paperwork, this.x, this.y, this.width, this.height);
  }
}
