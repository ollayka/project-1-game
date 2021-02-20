const game = new Game();
let startGame = false;

function preload() {
  //player
  berliner = loadImage("./images/TEMP_hipster.png");

  //backgrounds
  lvlOneImage = loadImage("./images/TEMP_brick_background.jpg");
  //   lvlTwoImage = loadImage("");
  //   lvlThreeImage = loadImage("");
  //   lvlFourImage = loadImage("");

  //obstacles
  officer = loadImage("./images/TEMP_officer.png");
  // ghost = loadImage("");

  //things to collect
  paperwork = loadImage("./images/TEMP_document.png");

  //special bonuses
  //   anmeldung = loadImage("");
  // love = loadImage("");
  // trophy = loadImage("");
}

function draw() {
  if (startGame) {
    game.draw();
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

gameStart();

function keyPressed() {
  game.keyPressed();
}
