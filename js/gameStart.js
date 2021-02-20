function gameStart() {
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document.querySelector(".game-intro").style.display = "none";
      startGame = true;
    });
}
