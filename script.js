const body = document.querySelector("body");
const container = document.querySelector(".container");
const resizeButton = document.createElement("button");
let totalSquares = 256;

function createSquares() {
for (let i = 1; i <= totalSquares; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    const firstColor = Math.floor(Math.random() * 256);
    const secondColor = Math.floor(Math.random() * 256);
    const thirdColor = Math.floor(Math.random() * 256);
    let opacity = 0;
    cell.addEventListener("mouseenter", event => event.target.style.backgroundColor = `rgba(${firstColor}, ${secondColor}, ${thirdColor}, ${opacity += 0.1})`);
    const squareSize = 100 / (Math.sqrt(totalSquares)); 
    cell.style.width = `${squareSize}vw`;
    cell.style.height = `${squareSize}vw`;
}}

function resizeSketchPad() {
    const squaresPerSide = Number(prompt("How many squares per side?"));
    totalSquares = squaresPerSide * squaresPerSide;
    if (squaresPerSide <= 100)  {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createSquares();
    }
}

resizeButton.textContent = "resize";
body.insertBefore(resizeButton, container);
resizeButton.addEventListener("click", resizeSketchPad)

createSquares();
