const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
}