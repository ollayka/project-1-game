class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.prizes = [];
    this.score = 0;
    this.time = 60;
    this.life = 3;
  }

  draw() {
    this.background.draw();
    this.player.draw();

    //obstacles
    if (frameCount % 150 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        console.log("COLLISION!");
        this.obstacles.splice(index, 1);
        this.life--;
        life.innerText = this.life;
      }
    });

    //prizes
    if (frameCount % 120 === 0) {
      this.prizes.push(new Prize());
    }

    this.prizes.forEach((prize, index) => {
      prize.draw();
      if (this.collisionCheck(this.player, prize)) {
        this.prizes.splice(index, 1);
        this.score += 10;
        score.innerText = this.score;
      }
    });

    //super bonus
  }

  keyPressed() {
    this.player.keyPressed();
  }

  //general collisionCheck function
  collisionCheck(element1, element2) {
    const element1TopArea = element1.y;
    const element1LeftArea = element1.x;
    const element1RightArea = element1.x + element1.width;
    const element1BottomArea = element1.y + element1.height;

    const element2TopArea = element2.y;
    const element2LeftArea = element2.x;
    const element2RightArea = element2.x + element2.width;
    const element2BottomArea = element2.y + element2.height;

    const isTouchingOnLeft = element2RightArea > element1LeftArea;
    const isTouchingOnBottom = element2TopArea < element1BottomArea;
    const isTouchingOnRight = element2LeftArea < element1RightArea;
    const isTouchingOnTop = element2BottomArea > element1TopArea;

    return (
      isTouchingOnLeft &&
      isTouchingOnBottom &&
      isTouchingOnRight &&
      isTouchingOnTop
    );
  }
}
