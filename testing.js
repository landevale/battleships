const shipArray = [
  {
    name: "patrol boat",
    size: 2,
    coordinates: [
      // horizontal
      //   [0, 0],
      //   [0, 1],
    ],
  },
  {
    name: "submarine",
    size: 3,
    coordinates: [
      // horizontal
      //   [4, 0],
      //   [4, 1],
      //   [4, 2],
    ],
  },
  {
    name: "destroyer",
    size: 3,
    coordinates: [
      // vertical
      //   [0, 9],
      //   [1, 9],
      //   [2, 9],
    ],
  },
  {
    name: "battleship",
    size: 4,
    coordinates: [
      // vertical
      //   [0, 7],
      //   [1, 7],
      //   [2, 7],
      //   [3, 7],
    ],
  },
  {
    name: "carrier",
    size: 5,
    coordinates: [
      // horizontal
      //   [9, 1],
      //   [9, 2],
      //   [9, 3],
      //   [9, 4],
      //   [9, 5], // index 0, 1
    ],
  },
];

const gameBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// Placed
// const gameBoard = [
//   [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
// ];

// //   let current = ship.directions[randomDirection];
let getRandomInt = () => Math.floor(Math.random() * 10);

//console.log(getRandomInt());
let row = getRandomInt();
console.log("ROW: " + row);
let col = getRandomInt();
console.log("COL: " + col);
// // let randomStart = gameBoard[y][x];
// console.log(`Row: ${rows} & Col: ${col}`);

let randomDirection = Math.floor(Math.random() * 2 + 1);
console.log("1 is horizontal, 2 is vertical: " + randomDirection);

// Checks to see if the placement of a ship is legal
// Returns boolean
const checkOverlap = (row, col, direction, ship) => {
  // first, check if the ship is within the grid...
  if (withinBounds(row, col, direction, ship) === true) {
    // ...then check to make sure it doesn't collide with another ship
    for (let i = 0; i < ship.size; i++) {
      if (direction === 1) {
        if (
          gameBoard[row][col + i] === undefined ||
          gameBoard[row][col + i] !== 0
        ) {
          return false;
        } else if (direction === 2) {
          if (
            gameBoard[row + i][col] === undefined ||
            gameBoard[row + i][col] !== 0
          )
            return false;
        } else {
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
// Checks to see if the ship is within bounds of the grid
// Returns boolean
const withinBounds = (row, col, direction, ship) => {
  if (direction === 1 && col + ship.size < 10) {
    return true;
  } else if (direction === 2 && row + ship.size < 10) {
    return true;
  } else {
    return false;
  }
};

// // console.log(withinBounds(1, 1, 1, shipArray[4])); // working
console.log(
  `${shipArray[4].name} ${checkOverlap(
    row,
    col,
    randomDirection,
    shipArray[4]
  )}`
);
// working with random start && horizontally and vertically

// can updateGrid after checkLegal
const updateGrid = (row, col, direction, ship) => {
  for (let i = 0; i < ship.size; i++) {
    if (direction === 1) {
      // horizontal
      gameBoard[row][col + i] = 1;
    } else if (direction === 2) {
      //vertical
      gameBoard[row + i][col] = 1;
    } else {
      return false;
    }
  }
};

// updateGrid(0, 4, 2, shipArray[4]);
// console.log(gameBoard);

const updateShipCoord = (row, col, direction, ship) => {
  if (direction === 1) {
    // horizontal
    for (let i = 0; i < ship.size; i++) {
      let cellCoord = [row + i, col];

      ship.coordinates.push(cellCoord);
    }
  } else if (direction === 2) {
    //vertical
    for (let i = 0; i < ship.size; i++) {
      let cellCoord = [row, col + i];
      ship.coordinates.push(cellCoord);
    }
  }
};

// updateShipCoord(0, 4, 2, shipArray[4]);
// console.log(shipArray[4].coordinates);
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
// Possible values for the parameter `type` (string)
// CONST.CSS_TYPE_EMPTY = "empty";
// CONST.CSS_TYPE_SHIP = "ship";
// CONST.CSS_TYPE_MISS = "miss";
// CONST.CSS_TYPE_HIT = "hit";
// CONST.CSS_TYPE_SUNK = "sunk";
// Grid code:
// CONST.TYPE_EMPTY = 0; // 0 = water (empty)
// CONST.TYPE_SHIP = 1; // 1 = undamaged ship
// CONST.TYPE_MISS = 2; // 2 = water with a cannonball in it (missed shot)
// CONST.TYPE_HIT = 3; // 3 = damaged ship (hit shot)
// CONST.TYPE_SUNK = 4; // 4 = sunk ship

// // need to check these start end coords
// console.log(shipArray[4].coordinates[0].x);
// console.log(shipArray[4].coordinates[`${shipArray[4].size}` - 1].x);

// const placeShips = (arr) => {
//   for (let i = 0; i < arr.size; i++) {
//     ///////////////
//     let rows = getRandomInt();
//     //   console.log(x);
//     let col = getRandomInt();
//     ///////////////
//   }
// };

// placeShips(shipArray);
// initialise random rc and direction
// check legal, within bounds then overlap
// if legal start from starting point -> direction
// change gameBoard to 1
// create and push coordinates into ship coordinates

const placeShips2 = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    let getRandomInt = () => Math.floor(Math.random() * 10);
    //   console.log(getRandomInt());
    let row = getRandomInt();
    console.log("Row: " + row);
    let col = getRandomInt();
    console.log("Col: " + col);
    let direction = Math.floor(Math.random() * 2 + 1);
    console.log("Direction: " + direction);
    ///////////////
    /////////////
    // while not legal, re-generate a row and col
    while (checkOverlap(row, col, direction, arr[j]) === false) {
      row = getRandomInt();
      col = getRandomInt();
      direction = Math.floor(Math.random() * 2 + 1);
      console.log(`While loop running FALSE`);
    }
    updateGrid(row, col, direction, arr[j]);
    updateShipCoord(row, col, direction, arr[j]);
  }
};

placeShips2(shipArray);
// console.log(gameBoard);
console.log(gameBoard);
console.log(shipArray[0].coordinates);
console.log(shipArray[1].coordinates);
console.log(shipArray[2].coordinates);
console.log(shipArray[3].coordinates);
console.log(shipArray[4].coordinates);
