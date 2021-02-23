const HEIGHT = 300;
const WIDTH = 500;
const GRAVITY = 0.2;
const score = document.querySelector(".score-counter");
const time = document.querySelector(".time-counter");
const life = document.querySelector(".life-counter");

let berliner;
//obstacles
let officer;
let ghost;
let german;
//prizes
let paperwork;
let friend;
let language;
//bonuses
let anmeldung;
let love;
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
