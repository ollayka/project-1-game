class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.prizes = [];
    this.bonuses = [];
    this.score = 0;
    this.time = 20;
    this.life = 100;
    this.bonusTime = Math.floor(Math.random() * 1000);
    this.gameOver = new GameOver();
    this.gameWon = new GameWon();
    this.gameEnd = new GameEnd();
    this.nextLevel = null;
  }

  setup() {
    prizesArr = [paperwork, friends, bubble, beer];
    obstaclesArr = [burocracy, ghost, german, bouncer];
    bonusesArr = [anmeldung, heart, star, berghain];
  }

  draw() {
    //
    if (this.nextLevel) {
      return this.nextLevel.draw();
    }

    //backround
    this.background.draw();

    //player
    this.player.draw();

    //obstacles
    if (frameCount % 150 === 0) {
      this.obstacles.push(new Obstacle());
    }

    //obstacles collisions
    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      //player lose life
      if (this.collisionCheck(this.player, obstacle)) {
        this.obstacles.splice(index, 1);
        this.life--;
        life.innerText = this.life;
      }

      //obstacle-prize collision
      if (this.collisionCheck(this.obstacles, this.prizes)) {
        this.obstacles.splice(index, 1);
      }
    });

    //prizes
    if (frameCount % 120 === 0) {
      this.prizes.push(new Prize());
    }

    //prizes collisions
    this.prizes.forEach((prize, index) => {
      prize.draw();
      //get points
      if (this.collisionCheck(this.player, prize)) {
        this.prizes.splice(index, 1);
        this.score += 10;
        score.innerText = this.score;
      }
    });

    //super bonus
    if (frameCount % this.bonusTime === 0) {
      this.bonuses.push(new Bonus());
    }

    this.bonuses.forEach((bonus, index) => {
      bonus.draw();
      if (this.collisionCheck(this.player, bonus)) {
        this.bonuses.splice(index, 1);
        this.score += 50;
        score.innerText = this.score;
        this.life += 1;
        life.innerText = this.life;
      }

      // game win scenario
      if (level === 3 && this.collisionCheck(this.player, bonus)) {
        clear();
        this.gameWon.draw();
        this.obsctacles = [];
        this.prizes = [];
        noLoop();
      }
    });

    //level up
    if (level < 3 && this.time === 0) {
      level++;
      levelDisplay.innerText = level;
      this.nextLevel = new LevelUp(this.player, this.score, this.life);
      this.nextLevel.startCounting();
      this.nextLevel.draw();
    }

    //game end scenario
    // if (level === 3 && this.time === 0) {
    //   clear();
    //   this.gameEnd.draw();
    //   this.obstacles = [];
    //   this.prizes = [];
    //   noLoop();
    // }

    //game over scenario
    if (this.life === 0) {
      clear();
      this.gameOver.draw();
      this.obstacles = [];
      this.prizes = [];
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
}

class LevelUp extends Game {
  constructor(player, score, life) {
    super();
    this.player = player;
    this.score = score;
    this.life = life;
    this.level = level;
  }
}
