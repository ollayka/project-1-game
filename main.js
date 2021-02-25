let level = 0;
const game = new Game();
// const club = new Berghain();
let startGame = false;

function preload() {
  //player - done
  berliner = loadImage("./images/player.png");

  //backgrounds - done
  lvlOneImage = loadImage("./images/office.png");
  lvlTwoImage = loadImage("./images/park.png");
  lvlThreeImage = loadImage("./images/school.png");
  lvlFourImage = loadImage("./images/club_alt.png");

  //obstacles
  burocracy = loadImage("./images/burocracy.png");
  ghost = loadImage("./images/ghost.png");
  german = loadImage("./images/german.png");
  bouncer = loadImage("./images/sven.png");

  //things to collect
  paperwork = loadImage("./images/document.png");
  friends = loadImage("./images/friends.png");
  bubble = loadImage("./images/bubble.png");
  beer = loadImage("./images/beer.png");

  //special bonus
  anmeldung = loadImage("./images/anmeldung.png");
  heart = loadImage("./images/heart.png");
  star = loadImage("./images/star.png");
  berghain = loadImage("./images/berghain.png");
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
