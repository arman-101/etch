const container = document.querySelector(".container");
const resetBtn = document.getElementById("resetBtn");

const containerSize = 960; // total size in pixels

function createGrid(squaresPerSide) {
  // Clear existing squares
  container.innerHTML = "";

  // Set the new square size
  const squareSize = containerSize / squaresPerSide;

  // Create the grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = "white";
    square.style.border = "1px solid #ccc";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    container.appendChild(square);
  }

  // Update container width and styling
  container.style.width = `${containerSize}px`;
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
}
 
// Initial 16x16 grid
createGrid(16);

// Button click to reset grid
resetBtn.addEventListener("click", () => {
  let input = prompt("Enter number of squares per side (1–100):");
  let size = parseInt(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    createGrid(size);
  }
});
