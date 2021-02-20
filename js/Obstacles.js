class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 200);
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.x -= 3;
    image(officer, this.x, this.y, this.width, this.height);
  }
}
