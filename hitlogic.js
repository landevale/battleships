///////////////////
///////////////////
//! HIT LOGIC
///////////////////
///////////////////
/*

A. If first shot, or last turn miss (possibly after sinking):
1. Randomise row & col for shot.
2. Run check if cell has been shot before.
3. If already been shot, go back to 1. If not, continue.
4. If miss, regsiter miss on grid, do not pick cell again. End Turn.
5. If hit, register hit on grid, find ship, minus ship life. End Turn.

B. If last turn hit (not sunk):
1. Randomise adjacent 4 (top, right, bot, left) row & col.
2. Check for legality (within grid), if not legal go back to 1.
3. Run check if cell has been shot before.
4. Run check if cell has been shot before.
5. If already been shot, go back to 1. If not, continue.
6. If miss, regsiter miss on grid, do not pick cell again. End Turn.
7. If hit, register hit on grid, find ship, minus ship life. End Turn.

C. If last 2 turns hit (not sunk):
1. Continue in the same direction.
2. Run check if cell has been shot before.
3. Check for legality (within grid).
4. If not legal or shot before, choose the opposite cell in the line. End Turn.
    - If horizontal, add or minus the number of last hits to row value to get "opposite" cell.
    - If horizontal, add or minus the number of last hits to row value to get "opposite" cell.
5. If all fails, A
*/

//Ships
const userShipArray = [
  {
    name: "patrol boat",
    size: 2,
    coordinates: [
      [0, 0],
      [0, 1],
    ],
    life: 2,
  },
  {
    name: "submarine",
    size: 3,
    coordinates: [
      [4, 0],
      [4, 1],
      [4, 2],
    ],
    life: 3,
  },
  {
    name: "destroyer",
    size: 3,
    coordinates: [
      [0, 9],
      [1, 9],
      [2, 9],
    ],
    life: 3,
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
    life: 4,
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

const compCheckShip = (y, x) => {
  if (userBoard[y][x] === 1) {
    for (let i = 0; i < userShipArray.length; i++) {
      // loop thru the ships in shipArr
      for (let j = 0; j < userShipArray[i].size; j++)
        if (
          y === userShipArray[i].coordinates[0 + j][0] &&
          x === userShipArray[i].coordinates[0 + j][1]
        ) {
          console.log(userShipArray[i].name);
          userShipArray[i].life -= 1;
          console.log(userShipArray[i].life);
          console.log("Computer hit!");
          //compDisplay.innerHTML = "Computer hit!";
          // el.className = "hit"; //! How to change cell class maybe use yx to target.
          function compCheckForWins() {
            if (userShipArray[i].life === 0) {
              console.log(`Computer sunk your ${userShipArray[i].name}!`);
              //compDisplay.innerHTML = `Computer sunk your ${userShipArray[i].name}!`;
              if (
                userShipArray[0].life +
                  userShipArray[1].life +
                  userShipArray[2].life +
                  userShipArray[3].life +
                  userShipArray[4].life ===
                0
              ) {
                console.log("COMPUTER WINS");
                //  compDisplay.innerHTML = "COMPUTER WINS!";
              }
            }
          }
          compCheckForWins();
          return;
        }
    }
  } else {
    console.log("Computer missed.");
    return;
    //compDisplay.innerHTML = "Computer missed.";
    // el.className = "missed";
  }
};

const getRandomInt = () => Math.floor(Math.random() * 10);

const compTurn = () => {
  let hitRow = getRandomInt();
  console.log(hitRow);
  let hitCol = getRandomInt();
  console.log(hitCol);
  compCheckShip(hitRow, hitCol);
};
compTurn();
