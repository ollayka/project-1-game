function gameStart() {
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document.querySelector(".game-intro").style.display = "none";
      game.startCounting();
      startGame = true;
    });
}
