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

// Get all grid cells in the first column
const firstColumnCells = container.querySelectorAll('[data-col*="1"]');

firstColumnCells.forEach(cell => { 
    cell.style.border = "2px solid red";
})

// GridFirstRow NodeList (5)
const gridFirstRow = container.querySelectorAll('[data-row*="1');

gridFirstRow.forEach(cell => { 
  cell.style.border = "2px solid blue";
})

// Letter tiles NodeList (29)
const letterTiles = document.querySelectorAll(".btn");
console.log(letterTiles);

// for (i=0; i<letterTiles; i++){
//   letterTiles[i].addEventListener("click", () => {

//     console.log(letterTiles[i]);

//     for(let i=0; i<gridFirstRow.length; i++){
//     if (gridFirstRow[i].childElementCount === 0){
//       gridFirstRow[i].appendChild(letterTiles[i]);
//       }
//     }

// //   })
// }

letterTiles.forEach(tile => { // iterate through keyboard tiles
  tile.addEventListener("click", () => {
    console.log(tile.innerHTML);
    const selectLetter = tile.innerHTML;
      gridFirstRow.forEach(function (cell, index) {
        if (cell.innerHTML === '' && index === 0){
          cell.innerHTML = selectLetter;
        }
        if (cell.innerHTML === '' && index !== 0 && index === 1){
          cell.innerHTML = selectLetter;
        }
        
      })

  //   if (gridFirstRow[0].innerHTML === ''){
  
  //   gridFirstRow[0].innerHTML = selectLetter;
  //   }
  //   else gridFirstRow[1].innerHTML = selectLetter;
  //   if (gridFirstRow[1].innerHTML !== ''){
  //     gridFirstRow[2].innerHTML = selectLetter;
  //   }
    
  // })
})
})

  // tile.addEventListener("click", (tile) => { // add event listener to each letter tile
  //   for(let i=0; i<gridFirstRow.length; i++){ // iterate through first row
  //     if (gridFirstRow[i].childElementCount === 0){ // if first row cell is empty
  //       console.log(tile);
  //       // const selectTile = tile[i];
  //       // const selectTileCopy = document.createElement("div");
  //       // selectTileCopy.innerHTML = selectTile.innerHTML


  //     gridFirstRow[i].appendChild(tile);
  //     }
  //   }
  //   })
  // })

