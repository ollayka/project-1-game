class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.y = random(100, 200);
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.x -= 3;
    image(obstaclesArr[level], this.x, this.y, this.width, this.height);
  }
}
