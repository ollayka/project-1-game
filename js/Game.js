class Game {
  constructor() {
    this.level = 1;
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.prizes = [];
    this.score = 0;
    this.time = 10;
    this.life = 3;
    this.gameover = new GameOver();
    this.gamewon = new GameWon();
  }

  setup() {
    levels = [];
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

    //game over scenario
    if (this.life === 0) {
      clear();
      this.gameover.draw();
      this.obstacles = [];
      this.prizes = [];
      noLoop();
    }

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

    //time's up
    if (this.time === 0) {
      clear();
      this.gamewon.draw();
      noLoop();
    }
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

  //timer
  startCounting() {
    let levelTime = setInterval(() => {
      this.time--;
      time.innerText = this.time;
      if (this.time === 0) {
        clearInterval(levelTime);
      }
    }, 1000);
  }

  //next level
  // newLevel();
}
