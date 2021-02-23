class GameWon {
  constructor() {}

  draw() {
    background("orange");
    text(`Congrats! Your score is ${score}`, 100, 100);
  }
}

class GameOver {
  constructor() {}

  //   setup() {
  //     playAgain = createButton("Play again");
  //     playAgain.position(150, 150);
  //   }

  draw() {
    background("black");
    textSize(20);
    fill(255, 255, 255);
    text("Game over! Wanna try again?", 100, 100);
  }
}
