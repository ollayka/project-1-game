class Prize {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 250);
    this.width = 60;
    this.height = 60;
  }

  draw() {
    this.x -= 3;
    image(prizesArr[level], this.x, this.y, this.width, this.height);
  }
}

class Bonus {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 250);
    this.width = 70;
    this.height = 70;
  }

  draw() {
    this.x -= 3;
    image(bonusesArr[level], this.x, this.y, this.width, this.height);
  }
}
