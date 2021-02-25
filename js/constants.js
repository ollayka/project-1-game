const HEIGHT = 300;
const WIDTH = 500;
const GRAVITY = 0.2;
const score = document.querySelector(".score-counter");
const time = document.querySelector(".time-counter");
const life = document.querySelector(".life-counter");
const levelDisplay = document.querySelector(".level");

//audio
const introAudio = document.querySelector(".intro-audio");

let berliner;
//obstacles
let burocracy;
let ghost;
let german;
let bouncer;
//prizes
let paperwork;
let friends;
let bubble;
let beer;
//bonus
let anmeldung;
let heart;
let star;
let berghain;
//backgrounds
let lvlOneImage;
let lvlTwoImage;
let lvlThreeImage;
let lvlFourImage;
//arrays
let backgroundsArr;
let obstaclesArr;
let prizesArr;
let bonusesArr;

//end game
let playAgainButton;

//audio
