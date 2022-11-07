const shipArray = [
  {
    name: "patrol boat",
    size: 2,
    coordinates: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    name: "submarine",
    size: 3,
    coordinates: [
      [4, 0],
      [4, 1],
      [4, 2],
    ],
  },
  {
    name: "destroyer",
    size: 3,
    coordinates: [
      [0, 9],
      [1, 9],
      [2, 9],
    ],
  },
  {
    name: "battleship",
    size: 4,
    coordinates: [
      [0, 7],
      [1, 7],
      [2, 7],
      [3, 7],
    ],
  },
  {
    name: "carrier",
    size: 5,
    coordinates: [
      [9, 1],
      [9, 2],
      [9, 3],
      [9, 4],
      [9, 5],
    ],
  },
];

// HORIZONTAL
// first rc arr
// console.log(shipArray[1].coordinates[0][0]); // [goes thru row][thru col]
// console.log(shipArray[1].coordinates[0][1]); //
// // second rc arr
// console.log(shipArray[1].coordinates[1][0]); //
// console.log(shipArray[1].coordinates[1][1]); //
// // third rc arr
// console.log(shipArray[1].coordinates[2][0]); //
// console.log(shipArray[1].coordinates[2][1]); //

// console.log(shipArray[1].coordinates[`${shipArray[1].size}` - 1]);

// const gameBoard = [
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
// Placed
const gameBoard = [
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

console.log("TESTING: " + shipArray[0].coordinates[0][0]);

const checkShip = (row, col) => {
  if (gameBoard[row][col] === 1);
  {
    for (let i = 0; i < 5; i++) {
      // loop thru the ships in shipArr
      for (let j = 0; j < shipArray[i].size; j++)
        if (
          row === shipArray[i].coordinates[0 + j][0] &&
          col === shipArray[i].coordinates[0 + j][1]
        )
          console.log(shipArray[i].name);
    }
  }

  //if (gameBoard[row][col] !== "S");
};
// checkShip(9, 1);

// console.log(gameBoard[0][0]);

// function makeTableHTML(gameBoard) {
//   var result = "<table border=1>";
//   for (var i = 0; i < gameBoard.length; i++) {
//     result += "<tr>";
//     for (var j = 0; j < gameBoard[i].length; j++) {
//       result += "<td>" + gameBoard[i][j] + "</td>";
//     }
//     result += "</tr>";
//   }
//   result += "</table>";

//   return result;
// }

// Updating ship coordinates
// const getAllShipCells = (ship) => {
//   let position = [];
//   let direction = true;
//   for (var i = 0; i < ship.size; i++) {
//     if (direction === true) {
//       position[i] = { x: 0 + i, y: 0 }; // zero to be starting place
//     } else {
//       position[i] = { x: 0, y: 0 + i };
//     }
//   }
//   ship.coordinates = position; // Updates ship coordinates with an array (x, y)
//   return position;
// };

// const getAllShipCells = (ship) => {
//   let position = [];
//   for (let i = 0; i < ship.size; i++) {
//     if (direction === true) {
//       // doesn't make sense
//       position[i] = [0 + i, 0]; // rows, zero to be starting place
//     } else {
//       position[i] = [0, 0 + i]; // cols, changed coordinates from object to array
//     }
//   }
//   ship.coordinates = position; // Updates ship coordinates with an array (r, c)
//   return position;
// };

// console.log(getAllShipCells(shipArray[4]));
// console.log(shipArray[4].coordinates);
// console.log(shipArray[4].coordinates[0].x);
// console.log(shipArray[4].coordinates[`${shipArray[4].size}` - 1].x);

// Checks to see if the placement of a ship is legal
// Returns boolean
const isLegal = (row, col, direction, ship) => {
  // first, check if the ship is within the grid...
  if (withinBounds(row, col, direction, ship)) {
    // ...then check to make sure it doesn't collide with another ship
    for (let i = 0; i < ship.size; i++) {
      if (direction === 1) {
        if (
          gameBoard[row][col + i] === undefined ||
          gameBoard[row][col + i] !== 0
        ) {
          return false;
        }
      } else {
        if (
          gameBoard[row + i][col] === undefined ||
          gameBoard[row + i][col] !== 0
        ) {
          return false;
        }
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
  if (direction === 1) {
    // 1 or 2 horizontal or vertical
    return col + ship.size < 10;
  } else if (direction === 2) {
    return row + ship.size < 10;
  } else {
    return false;
  }
};

//   let current = ship.directions[randomDirection];
let getRandomInt = () => Math.floor(Math.random() * 10);
let rows = getRandomInt();
//   console.log(x);
let col = getRandomInt();
// let randomStart = gameBoard[y][x];
console.log(`Row: ${rows} & Col: ${col}`);

let randomDirection = Math.floor(Math.random() * 2 + 1);
console.log("1 is horizontal, 2 is vertical: " + randomDirection);

// console.log(withinBounds(1, 1, 1, shipArray[4])); // working
console.log(
  `${shipArray[4].name} ${isLegal(rows, col, randomDirection, shipArray[4])}`
); // working with random start && horizontally and vertically

// Need to push into ship coordinates array
// start from start point

// console.log(gameBoard[5][10]);
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
// const targetGrid = clickableGrid(10, 10, function (el, row, col, i) {
//   // need to check direction
//   //
//   console.log("You clicked on element:", el);
//   console.log("You clicked on row:", row);
//   console.log("You clicked on col:", col);
//   console.log("You clicked on item #:", i);

//   el.className = "clicked";
// });

// // need to check these start end coords
// console.log(shipArray[4].coordinates[0].x);
// console.log(shipArray[4].coordinates[`${shipArray[4].size}` - 1].x);
