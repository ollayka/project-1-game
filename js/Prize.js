class Prize {
  constructor() {
    this.x = WIDTH;
    this.y = random(0, 250);
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.x -= 3;
    image(prizesArr[level], this.x, this.y, this.width, this.height);
  }
}

// class Bonus extends Prize {
//   constructor() {}
//   draw() {
//     this.x -= 4;
//     image(anmeldung, this.x, this.y, this.width, this.height);
//   }
// }
