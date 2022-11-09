import "./style.css";
import $ from "jquery";

//* model - data

// ////////////////////////
// ////////////////////////
// PAGES
// render show hide for different pages:
// Start Page
// Set Up Page
// Game Page
// End Page

const game = {
  page: "start", //? "start", "score", "game"
};

// hide all pages first
const $hidePages = () => {
  $("#setUpPage").hide();
  $("#gamePage").hide();
  $("#endPage").hide();
};
$hidePages();

const render = () => {
  //$(".page").hide();
  $(`#${game.page}Page`).show();
};

const main = () => {
  $("#startButton").on("click", () => {
    $("#startPage").hide();
    game.page = "setUp";
    render();
  });
  $("#confirmButton").on("click", () => {
    game.page = "game";
    render();
  });
  // $("#scoreButton").on("click", () => {
  //   game.page = "end";
  //   render();
  // });

  render();
};

$(main);

// ////////////////////////
// ////////////////////////
//! DATA REPRESENTATION
// ?? 2D array to represent grid positions

// Take array show as table

// Maybe data to represent state
// Or can be objects with key value pairs
// 0, empty, not hit
// 1, occupied, not hit
// 3, empty, hit
// 4, occupied, hit

// add boolean statement to check if grid has been clicked before. (if so maybe objects in an array)

// const arrEnGrid = [
// [A1 {placement: true, hit: false}, A2 {placement: true, hit: false}, A3 {placement: true, hit: true}…],
// [B1 {placement: false, hit: false}, B2 {placement: false, hit: false}, B3 {placement: true, false: true}…],
// [C1 {placement: false, hit: false}, C2 {placement: true, hit: false}, C3 {placement: true, hit: true}…]…
// ]

// arrEnGrid[0][2].hit = ???
// using variables
// arrEnGrid[x][y][z]

// to check hit

//Ships
const shipArray = [
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

// console.log(shipArray[2].size);

// let userPatrolCount = shipArray[0].size;
// userPatrolCount--;
// console.log(userPatrolCount);
// console.log(shipArray[0].size);
// let userSubmarineCount = 0;
// let userDestoryerCount = 0;
// let userBattleshipCount = 0;
// let userCarrierCount = 0;

// let compPatrolCount = 0;
// let compSubmarineCount = 0;
// let compDestroyerCount = 0;
// let compBattleshipCount = 0;
// let compCarrierCount = 0;

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
//   [0, 1, 1, 1, 1, 1, 0, 0, 0, 0], // J
// ];
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

// ////////////////////////
// ////////////////////////
//!  PLACEMENT LOGIC
// Randomise grid position & (horizontal or vertical)
// Needs to fit into array (whole ship)
// Cannot overlap

// Maybe array with objects inside???

// 10 x 10 grid
// const enGrid = [
//   ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
//   ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
//   ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
// ];
// //   let current = ship.directions[randomDirection];
const getRandomInt = () => Math.floor(Math.random() * 10);

//console.log(getRandomInt());
let row = getRandomInt();
// console.log("ROW: " + row);
let col = getRandomInt();
// console.log("COL: " + col);
// // let randomStart = gameBoard[y][x];
// console.log(`Row: ${rows} & Col: ${col}`);

let randomDirection = Math.floor(Math.random() * 2 + 1);
// console.log("1 is horizontal, 2 is vertical: " + randomDirection);

// Checks to see if the placement of a ship is legal
// Returns boolean
const isLegal = (row, col, direction, ship) => {
  // ship = shipArray[j]
  // ...then check to make sure it doesn't collide with another ship
  if (direction === 1) {
    for (let k = 0; k < ship.size; k++) {
      if (gameBoard[row][col + k] === 0) {
        //! remove return true, it was check the first and if true, breaking out of the loop and returning true
        console.log("Legal true Horizontal");
      } else {
        console.log("Legal false Horizontal");
        return false;
      }
    }
  } else if (direction === 2) {
    for (let l = 0; l < ship.size; l++) {
      if (gameBoard[row + l][col] === 0) {
        console.log("Legal true Vert");
      } else {
        console.log("Legal false Vert");
        return false;
      }
    }
  } else {
    console.log("LEGAL FAIL");
    return false;
  }
};
// Checks to see if the ship is within bounds of the grid
// Returns boolean
const withinBounds = (row, col, direction, ship) => {
  console.log(`COL: ${col} + SHIP SIZE: ${ship.size}`);
  console.log(`ROW: ${row} + SHIP SIZE: ${ship.size}`);
  console.log(direction);
  if (direction === 1 && col + ship.size < 10) {
    console.log("Bounds true Hori");
    return true;
  } else if (direction === 2 && row + ship.size < 10) {
    console.log("Bounds true Vert");
    return true;
  } else {
    console.log("BOUNDS FAIL");
    return false;
  }
};

// // console.log(withinBounds(1, 1, 1, shipArray[4])); // working
// console.log(
//   `${shipArray[4].name} ${isLegal(row, col, randomDirection, shipArray[4])}`
// );
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
      let cellCoord = [row, col + i];

      ship.coordinates.push(cellCoord);
    }
  } else if (direction === 2) {
    //vertical
    for (let i = 0; i < ship.size; i++) {
      let cellCoord = [row + i, col];
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
    console.log(arr[j]);
    ///////////////
    /////////////
    // while not legal, re-generate a row and col
    while (
      withinBounds(row, col, direction, arr[j]) === false || //! changed or || to and &&
      isLegal(row, col, direction, arr[j]) === false
    ) {
      //   while (isLegal(row, col, direction, arr[j]) === false) {

      row = getRandomInt();
      col = getRandomInt();
      direction = Math.floor(Math.random() * 2 + 1);
      console.log(`While loop running FALSE`);
      //   }
    }
    console.log("##UPDATING SHIP GRID");
    updateGrid(row, col, direction, arr[j]);
    console.log("##UPDATING SHIP COORDS");
    updateShipCoord(row, col, direction, arr[j]);
  }
};

placeShips2(shipArray);
// console.log(gameBoard);
console.log(shipArray[0].coordinates);
console.log(shipArray[1].coordinates);
console.log(shipArray[2].coordinates);
console.log(shipArray[3].coordinates);
console.log(shipArray[4].coordinates);

// ////////////////////////
// ////////////////////////
//! TURN LOGIC
// turn 0 game start
// turn 1 (odd and not 0, user)
// turn 2 (even and not 0, comp)
// *can who starts randomise if there’s time
// display turn
// ////////////////////////
// ////////////////////////
//! CLICK LOGIC

//

//? https://stackoverflow.com/questions/9140101/creating-a-clickable-grid-in-a-web-browser
//? http://jsfiddle.net/6qkdP/2/

let lastClicked; // to check if button was last clicked

// const clickableGrid = (rows, cols, callback) => {
//   let i = 0;
//   let grid = $("<table>").addClass("targetGrid").attr("id", "compGrid");
//   for (let r = 0; r < rows; ++r) {
//     const tr = grid.append($("<tr>"));
//     for (let c = 0; c < cols; ++c) {
//       let cell = tr.append($("<td>"));
//       $(cell).text(`${gameBoard[r][c]}`).addClass("cellHide");
//       // cell.addEventListener(
//       //   "click",
//       //   (function (el, r, c, i) {
//       //     // element, r, c, i
//       //     return function () {
//       //       callback(el, r, c, i);
//       //     };
//       //   })(cell, r, c, i),
//       //   false
//       // );
//     }
//   }
//   return grid;
// };
let turnCounter = 1;

const targetGrid = clickableGrid(10, 10, function (el, row, col, num) {
  infoDisplay.innerHTML = ``;
  turnCounter++;
  turnCount.innerHTML = turnCounter;
  console.log("You clicked on element:", el);
  console.log("You clicked on row:", row);
  console.log("You clicked on col:", col);
  console.log("You clicked on item #:", num);
  const checkShip = (y, x) => {
    if (gameBoard[y][x] === 1);
    {
      for (let i = 0; i < shipArray.length; i++) {
        // loop thru the ships in shipArr
        for (let j = 0; j < shipArray[i].size; j++)
          if (
            y === shipArray[i].coordinates[0 + j][0] &&
            x === shipArray[i].coordinates[0 + j][1]
          ) {
            console.log(shipArray[i].name);
            shipArray[i].life -= 1;
            console.log(shipArray[i].life);
            infoDisplay.innerHTML = "It's a hit!";
            el.className = "hit";
            function checkForWins() {
              if (shipArray[i].life === 0) {
                infoDisplay.innerHTML = `You sunk the enemy's ${shipArray[i].name}!`;
              }

              if (
                shipArray[0].life +
                  shipArray[1].life +
                  shipArray[2].life +
                  shipArray[3].life +
                  shipArray[4].life ===
                0
              ) {
                infoDisplay.innerHTML = "YOU WIN!";
              }
            }
            checkForWins();
            return;
          } else {
            infoDisplay.innerHTML = "You missed.";
            el.className = "missed";
          }
      }
    }

    //if (gameBoard[row][col] !== "S");
  };
  checkShip(row, col);

  // if (lastClicked) lastClicked.className = "";
  // lastClicked = el;
});

$("#compGridDiv").append(targetGrid);

// const makeTableHTML = (arr) => {
//   let result = "<table border=1>";
//   for (let i = 0; i < arr.length; i++) {
//     result += "<tr>";
//     for (let j = 0; j < arr[i].length; j++) {
//       result += "<td>" + arr[i][j] + "</td>";
//     }
//     result += "</tr>";
//   }
//   result += "</table>";

//   return result;
// };

// $("#compGridDiv").append(makeTableHTML(gameBoard));

// const $nonClickableGrid = (rows, cols) => {
//   // var i = 0;
//   var grid = $("<table>").addClass("targetGrid").attr("id", "userGrid");
//   for (let r = 0; r < rows; ++r) {
//     const tr = grid.append($("<tr>"));
//     for (let c = 0; c < cols; ++c) {
//       const cell = tr.append($("<td>"));
//       $("td").text(`${gameBoard[r][c]}`);
//       //cell.innerHTML = ++i;
//     }
//   }
//   return grid;
// };
// $("#setUpGridDiv").append($nonClickableGrid(10, 10));
// $("#userGridDiv").append($nonClickableGrid(10, 10));

function clickableGrid(rows, cols, callback) {
  // var i = 0;
  var grid = document.createElement("table"); // $("<table>");
  grid.className = "targetGrid";
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement("tr"));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement("td"));
      cell.innerHTML = gameBoard[r][c]; //++i
      let i = gameBoard[r][c];
      cell.addEventListener(
        "click",
        (function (el, r, c, i) {
          // element, r, c, i
          return function () {
            callback(el, r, c, i);
          };
        })(cell, r, c, i),
        { once: true }
      );
    }
  }
  return grid;
}

// ////////////////////////
// ////////////////////////
//! HIT LOGIC

// If computer hits,
// should try 4 boxes (if array allows) around the hit box 0-3 (top, right, bottom, left)
// **best if try the boxes nearer the middle**

// if hit again, try in the same direction or opposite in the line
// if not, call next random (0-3) minus previous call
// try until sink (how to define sink?)
// or 3 misses in a row??? (means maybe an array of previous shots, to check last 3 elements???)

// Questions to ask, what if side by side ships messes up hit logic.

// ////////////////////////
// ////////////////////////
//! SINK LOGIC

// after choosing placement

// depending on horizontal or vertical

// copy grid values into a ship array???

// fleet -> ships -> individual grids

// ////////////////////////
// ////////////////////////
//! WIN LOGIC

// function checkForWins() {
//   if (userPatrolCount === 0) {
//     infoDisplay.innerHTML = `You sunk the enemy's patrol boat`;
//   }
//   if (userSubmarineCount === 0) {
//     infoDisplay.innerHTML = `You sunk the enemy's submarine`;
//   }
//   if (userDestoryerCount === 0) {
//     infoDisplay.innerHTML = `You sunk the enemy's destroyer`;
//   }
//   if (userBattleshipCount === 0) {
//     infoDisplay.innerHTML = `You sunk the enemy's battleship`;
//   }
//   if (userCarrierCount === 0) {
//     infoDisplay.innerHTML = `You sunk the enemy's carrier`;
//   }
//   if (compPatrolCount === 0) {
//     infoDisplay.innerHTML = `Enemy sunk your patrol boat`;
//   }
//   if (compSubmarineCount === 0) {
//     infoDisplay.innerHTML = `Enemy sunk your submarine`;
//   }
//   if (compDestroyerCount === 0) {
//     infoDisplay.innerHTML = `Enemy sunk your destroyer`;
//   }
//   if (compBattleshipCount === 0) {
//     infoDisplay.innerHTML = `Enemy sunk your battleship`;
//   }
//   if (compCarrierCount === 0) {
//     infoDisplay.innerHTML = `Enemy sunk your carrier`;
//   }

//   if (
//     userPatrolCount +
//       userSubmarineCount +
//       userDestoryerCount +
//       userBattleshipCount +
//       userCarrierCount ===
//     0
//   ) {
//     infoDisplay.innerHTML = "YOU WIN";
//     gameOver();
//   }
//   if (
//     compPatrolCount +
//       compSubmarineCount +
//       compDestroyerCount +
//       compBattleshipCount +
//       compCarrierCount ===
//     0
//   ) {
//     infoDisplay.innerHTML = `ENEMY WINS`;
//     gameOver();
//   }
// }

// const gameOver = () => {}
