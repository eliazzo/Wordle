// Create grid container

const container = document.getElementById('grid-container');

for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= 5; col++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
    container.appendChild(cell);
  }
}


// Correct word 
const pinky = ['p', 'i', 'n', 'k', 'y']


// Get all grid cells in the first column
const firstColumnCells = container.querySelectorAll('[data-col*="1"]');

firstColumnCells.forEach(cell => { 
    cell.style.border = "2px solid red";
})

const gridFirstRow = container.querySelectorAll('[data-row*="1');

gridFirstRow.forEach(cell => { 
  cell.style.border = "2px solid blue";
})

// select all alphabet tiles
const letterTiles = document.querySelectorAll(".btn");



letterTiles.forEach(tile => {
  tile.addEventListener("click", () =>{
    gridFirstRow.forEach(cell => {
      if (cell.children.length === 0) {
      cell.appendChild(tile);
      }
      else
      console.log('failed');
    })
  })
})
