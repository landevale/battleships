//Draw the computers ships in random locations
const computerSquares = [];
const width = 10;
let direction = 0;

const shipArray = [
  {
    name: "destroyer",
    directions: [
      [0, 1],
      [0, width],
    ],
  },
  {
    name: "submarine",
    directions: [
      [0, 1, 2],
      [0, width, width * 2],
    ],
  },
  {
    name: "cruiser",
    directions: [
      [0, 1, 2],
      [0, width, width * 2],
    ],
  },
  {
    name: "battleship",
    directions: [
      [0, 1, 2, 3],
      [0, width, width * 2, width * 3],
    ],
  },
  {
    name: "carrier",
    directions: [
      [0, 1, 2, 3, 4],
      [0, width, width * 2, width * 3, width * 4],
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

//   let current = ship.directions[randomDirection];
let getRandomInt = () => Math.floor(Math.random() * 10);
let x = getRandomInt();
//   console.log(x);
let y = getRandomInt();
let randomStart = gameBoard[y][x];
console.log(`${x} + ${y}`);

// let randomDirection = Math.floor(Math.random() * 2 + 1);
// console.log(randomDirection);
// if (randomDirection === 1) {
//     for (let i = 0; i < shipArray)
// }

// const isTaken =

//   const isTaken = current.some((index) =>
//     computerSquares[randomStart + index].classList.contains("taken")
//   );
//   const isAtRightEdge = current.some(
//     (index) => (randomStart + index) % width === width - 1
//   );
//   const isAtLeftEdge = current.some(
//     (index) => (randomStart + index) % width === 0
//   );

//   if (!isTaken && !isAtRightEdge && !isAtLeftEdge)
//     current.forEach((index) =>
//       computerSquares[randomStart + index].classList.add("taken", ship.name)
//     );
//   else generate(ship);
// const generate = (ship) => {};

// console.log(generate(shipArray[0]));

//!

// // horizontal
// // start point
// shipArray[i].coordinates[0][0]; // row (r)
// shipArray[i].coordinates[0][1]; // column (c)
// // end point (j is ship size)
// shipArray[i].coordinates[shipArray[i].size - 1][0]; // row (r)
// shipArray[i].coordinates[shipArray[i].size - 1][1]; // column (c + shipArray[i].size - 1)

// // vertical
// // start point
// shipArray[i].coordinates[0][0 + shipArray[i].size - 1]; // row
// shipArray[i].coordinates[0][0]; // column
// // end point (j is ship size)
// shipArray[i].coordinates[shipArray[i].size - 1][0 + shipArray[i].size - 1]; // row
// shipArray[i].coordinates[shipArray[i].size - 1][0]; // column

// horizontal
// for (a = rowStart; r < ship.size; r++) {
//   const individualArr = [r, c];
//   shipArray[i].coordinates = shipArray[i].coordinates.push();
// }

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

// const checkShip = (row, col) => {
//   if (gameBoard[row][col] === 1);
//   {
//     for (let i = 0; i < 5; i++) {
//       // loop thru the ships in shipArr
//       for (let j = 0; j < shipArray[i].size; j++)
//         if (
//           row === shipArray[i].coordinates[0 + j][0] &&
//           col === shipArray[i].coordinates[0 + j][1]
//         )
//           console.log(shipArray[i].name);
//     }
//   }

//   //if (gameBoard[row][col] !== "S");
// };
// // checkShip(9, 1);

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
