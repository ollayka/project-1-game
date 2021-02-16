const game = new Game();

function preload() {
  // introImage = loadImage("")
  berliner = loadImage("/images/TEMP hipster.png");
  officer = loadImage("/images/TEMP officer.png");
  paperwork = loadImage("/images/TEMP document.png");
  lvlOneImage = loadImage("/images/TEMP brick background.jpg");
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function keyPressed() {
  game.keyPressed();
}
