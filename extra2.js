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
