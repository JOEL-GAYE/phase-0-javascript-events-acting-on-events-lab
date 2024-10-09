// 
// Get the DODGER element
const dodger = document.getElementById("dodger");

// Move Dodger Left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

// Move Dodger Right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the game container width is 400px
    dodger.style.left = `${left + 10}px`;
  }
}

// Event listeners to move the Dodger with arrow keys
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
