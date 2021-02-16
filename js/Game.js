class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.prizes = [];
  }

  draw() {
    this.background.draw();
    this.player.draw();

    if (frameCount % 150 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        console.log("COLLISION!");
      }
      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }
    });

    if (frameCount % 120 === 0) {
      this.prizes.push(new Prize());
    }

    this.prizes.forEach((prize, index) => {
      prize.draw();
      if (prize.x + prize.width <= 0) {
        this.prizes.splice(index, 1);
      }
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }

  collisionCheck(player, element) {
    const isTouchingOnLeft = element.x + element.width > player.x;
    const isTouchingOnBottom = element.y < player.y + player.hight;
    const isTouchingOnRight = element.x < player.x + player.width;
    const isTouchingOnTop = element.y + element.hight > player.y;
    return (
      isTouchingOnLeft &&
      isTouchingOnBottom &&
      isTouchingOnRight &&
      isTouchingOnTop
    );
  }
}
