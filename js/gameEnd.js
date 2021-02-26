class GameWon {
  constructor() {}
  draw() {
    background(0);
    fill(255);
    textSize(38);
    textFont("VT323");
    textAlign(CENTER);
    text("Congrats, du bist ein Berliner!", WIDTH / 2, 60);
    image(congrats, 100, 80, 300, 200);
  }
}

class GameOver {
  constructor() {}
  setup() {}
  draw() {
    background(0);
    fill(255);
    textSize(72);
    textFont("VT323");
    textAlign(CENTER);
    text("Game over!", WIDTH / 2, HEIGHT / 3);
    textSize(32);
    text("Wanna play again?", WIDTH / 2, HEIGHT / 3 + 50);
    image(dog, WIDTH / 2 - 40, (HEIGHT * 2) / 3 - 25, 80, 80);
    textSize(16);
    text("Just restart the page, human.", WIDTH / 2, HEIGHT - 30);
  }
}

class GameEnd {
  constructor() {}
  draw() {
    background(0);
    fill(255);
    textSize(38);
    textFont("VT323");
    textAlign(CENTER);
    text("Heute leider nicht...", WIDTH / 2, 60);
    image(heute, 150, 80, 200, 200);
  }
}
