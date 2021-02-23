let level = 0;
const game = new Game();
let startGame = false;

function preload() {
  //player
  berliner = loadImage("./images/TEMP_hipster.png");

  //backgrounds
  lvlOneImage = loadImage("./images/office.png");
  lvlTwoImage = loadImage("./images/school.png");
  lvlThreeImage = loadImage("./images/park.png");
  lvlFourImage = loadImage("./images/club.png");

  //obstacles
  officer = loadImage("./images/TEMP_officer.png");
  ghost = loadImage("./images/TEMP_ghost.png");
  german = loadImage("./images/TEMP_ghost.png");
  // bouncer

  //things to collect
  paperwork = loadImage("./images/TEMP_document.png");
  friend = loadImage("./images/TEMP_coolperson.png");
  language = loadImage("./images/TEMP_speaking.png");

  //special bonuses
  anmeldung = loadImage("./images/TEMP_anmeldung.png");
  love = loadImage("./images/TEMP_love.png");
  // trophy = loadImage("./images/");
}

function draw() {
  if (startGame) {
    game.background.setup();
    game.draw();
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

gameStart();

function keyPressed() {
  game.keyPressed();
}
