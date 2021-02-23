class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = WIDTH;
    this.height = HEIGHT;
  }

  setup() {
    backgroundsArr = [lvlOneImage, lvlTwoImage, lvlThreeImage, lvlFourImage];
  }

  draw() {
    this.x -= 3;
    image(backgroundsArr[level], this.x, this.y, this.width, this.height);
    image(
      backgroundsArr[level],
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}
