class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 250);
    this.width = 60;
    this.height = 60;
  }

  draw() {
    this.x -= 3;
    image(officer, this.x, this.y, this.width, this.height);
  }
}
