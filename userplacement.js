/*
Aim: To drag and drop for user placement of ships

List of ship names with event listeners on click
- Rotate button (change the direction value? 1 or 2?)
- Click to drag, click to drop 
- Needs to have ship name, length values

Create grid with event listeners for each cell
- Execute checks withinGrid, overlap based on r/c of target (top left cell)
    - Needs to take the r/c cell value, direction, ship length
- If all true, place on grid
    - update usergrid value
    - update usership coords
    - ship name or img fix on grid? or cells change colour
    - needs to avoid from adding ships twice etc







Confirm fleet should only work if all ships are correctly placed.
*/
//Ships
const userShipArray = [
  {
    name: "patrol boat",
    size: 2,
    coordinates: [
      // [0, 0],
      // [0, 1],
    ],
    life: 2,
  },
  {
    name: "submarine",
    size: 3,
    coordinates: [
      // [4, 0],
      // [4, 1],
      // [4, 2],
    ],
    life: 3,
  },
  {
    name: "destroyer",
    size: 3,
    coordinates: [
      // [0, 9],
      // [1, 9],
      // [2, 9],
    ],
    life: 3,
  },
  {
    name: "battleship",
    size: 4,
    coordinates: [
      // [0, 7],
      // [1, 7],
      // [2, 7],
      // [3, 7],
    ],
    life: 4,
  },
  {
    name: "carrier",
    size: 5,
    coordinates: [
      // [9, 1],
      // [9, 2],
      // [9, 3],
      // [9, 4],
      // [9, 5],
    ],
    life: 5,
  },
];

const userBoard = [
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
];

// const userBoard = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

let userDirection = 2;
let userShip = userShipArray[4];

const userCheckOverlap = (row, col, userDirection, userShip) => {
  // ship = shipArray[j]
  // ...then check to make sure it doesn't collide with another ship
  if (userDirection === 1) {
    for (let k = 0; k < userShip.size; k++) {
      if (userBoard[row][col + k] === 0) {
        //! remove return true, it was check the first and if true, breaking out of the loop and returning true
        console.log("Legal true Horizontal" + k);
      } else {
        console.log("Legal false Horizontal");
        return false;
      }
      return true;
    }
  } else if (userDirection === 2) {
    for (let l = 0; l < userShip.size; l++) {
      if (userBoard[row + l][col] === 0) {
        console.log("Legal true Vert" + l);
      } else {
        console.log("Legal false Vert");
        return false;
      }
    }
    return true;
  } else {
    console.log("LEGAL FAIL");
    return false;
  }
};
// Checks to see if the ship is within bounds of the grid
// Returns boolean

//? CAN USE SAME WITHINBOUNDS FOR USER

const userWithinBounds = (row, col, userDirection, userShip) => {
  console.log(`COL: ${col} + SHIP SIZE: ${userShip.size}`);
  console.log(`ROW: ${row} + SHIP SIZE: ${userShip.size}`);
  console.log(userDirection);
  if (userDirection === 1 && col + userShip.size - 1 < 10) {
    console.log("Bounds true Hori");
    return true;
  } else if (userDirection === 2 && row + userShip.size - 1 < 10) {
    console.log("Bounds true Vert");
    return true;
  } else {
    console.log("BOUNDS FAIL");
    return false;
  }
};

// can updateGrid after checkLegal
const userUpdateGrid = (row, col, userDirection, userShip) => {
  for (let i = 0; i < userShip.size; i++) {
    if (userDirection === 1) {
      // horizontal
      userBoard[row][col + i] = 1;
    } else if (userDirection === 2) {
      //vertical
      userBoard[row + i][col] = 1;
    } else {
      return false;
    }
  }
};

// updateGrid(0, 4, 2, shipArray[4]);
// console.log(gameBoard);

const userUpdateShipCoord = (row, col, userDirection, userShip) => {
  if (userDirection === 1) {
    // horizontal
    for (let i = 0; i < userShip.size; i++) {
      let cellCoord = [row, col + i];

      userShip.coordinates.push(cellCoord);
    }
  } else if (userDirection === 2) {
    //vertical
    for (let i = 0; i < userShip.size; i++) {
      let cellCoord = [row + i, col];
      userShip.coordinates.push(cellCoord);
    }
  }
};

function userClickableGrid(rows, cols, callback) {
  // var i = 0;
  var grid = document.createElement("table"); // $("<table>");
  grid.className = "setUpGrid";
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement("tr"));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement("td"));
      cell.innerHTML = userBoard[r][c]; //++i
      let i = userBoard[r][c];
      cell.addEventListener(
        "click",
        (function (el, r, c, i, userDirection, userShip) {
          // element, r, c, i
          return function () {
            callback(el, r, c, i, userDirection, userShip);
          };
        })(cell, r, c, i),
        { once: false } // number of times you can click on the cell
      );
    }
  }
  return grid;
}

const userPlacementGrid = userClickableGrid(
  10,
  10,
  function (el, row, col, num) {
    infoDisplay.innerHTML = ``;
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", num);
    if (
      userWithinBounds(row, col, userDirection, userShip) === true &&
      userCheckOverlap(row, col, userDirection, userShip) === true
    ) {
      console.log("##UPDATING SHIP GRID");
      userUpdateGrid(row, col, userDirection, userShip);
      console.log("##UPDATING SHIP COORDS");
      userUpdateShipCoord(row, col, userDirection, userShip);
      console.log(userBoard);
      console.log(userShip.coordinates);
      //! Update HTML table here
    } else {
      console.log("CB FALSE");
      return false;
    }
  }
);

$("#setUpGridDiv").append(userPlacementGrid);
