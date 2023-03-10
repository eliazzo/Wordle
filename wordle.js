// Create grid container

const container = document.getElementById('grid-container');

for (let row = 1; row <= 6; row++) {
  for (let col = 1; col <= 5; col++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
    container.appendChild(cell);
  }
}


// const firstColumnCells = container.querySelectorAll('[data-col*="1"]'); // first col nodeList

const letterTiles = document.querySelectorAll(".btn"); // letter tiles NodeList


letterTiles.forEach(tile => { // iterate through keyboard tiles
  tile.addEventListener("click", () => {
    const selectLetter = tile.innerHTML;
    const gridFirstRow = container.querySelectorAll('[data-row*="1'); // gridFirstRow nodeList 
    const firstRowArr = Array.from(gridFirstRow); // convert to arr
    const emptyCellIndex = firstRowArr.findIndex(cell => cell.innerHTML === '');
    if (emptyCellIndex >= 0) {
      firstRowArr[emptyCellIndex].innerHTML = selectLetter;
    }
})
})

function backspace() {
  const backspaceButton = document.getElementById("backspace");

}