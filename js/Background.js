class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = WIDTH;
    this.height = HEIGHT;
  }

  draw() {
    this.x -= 3;
    image(lvlOneImage, this.x, this.y, this.width, this.height);
    image(lvlOneImage, this.x + this.width, this.y, this.width, this.height);
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}
