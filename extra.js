//? https://medium.com/@kristinethejohnson/node-battleship-creating-multi-directional-ships-in-javascript-ac8df808c23d

const generateRandomLocation = (board, max, ship) => {
  // foo takes 3 params, 1 board (what is board), 2 max size of grid, 3 ship length/size
  let didPlace = false; // if ship has been placed
  let directionString;
  let valid;

  let getRandomInt = (max) => Math.floor(Math.random() * max);

  while (!didPlace) {
    let x = getRandomInt(max); // removed this.
    let y = getRandomInt(max);
    [valid, directionString] = generateRandomDirection(x, y, ship); // removed this. from generateRandomDirection
    if (valid) {
      placeShip(x, y, ship.name, board, directionString, ship);
      didPlace = true;
    }
  }
  const generateRandomDirection = (column, row, ship) => {
    // will get x, y values
    let direction = Math.floor(Math.random() * 2) + 1; // 1 or 2 horizontal or vertical
    let directionString = "";
    let valid = false;

    if (direction === 1) {
      // horizontal
      for (let i = 0; i < ship.size; i++);
      {
        // need object for ship.size
        if (
          column + i >= 10 || // gameBoard.length should be also "max" | removed this.gameBoard.length
          gameBoard[row][column + i] === "S" || // once ship is placed, needs to change array gameBoard[x][y] to "S"
          gameBoard[row][column + i] === undefined // false if no array
        ) {
          return [valid, directionString]; // neccessary ??
        }
      }
      valid = true;
      directionString = "horizontal";
    } else if (direction === 2) {
      // vertical
      for (let i = 0; i < ship.size; i++);
      {
        // need object for ship.size
        if (
          row + i >= 10 || // gameBoard.length should be also "max" | removed this.gameBoard.length
          gameBoard[row + i][column] === "S" ||
          gameBoard[row + i][column] === undefined
        ) {
          return [valid, directionString];
        }
      }
      valid = true;
      directionString = "vertical";
    }

    placeShip(x, y, c, board, direction, ship); // needs to be inside generateRandomLocation because of x, y
    {
      if (directionString === "horizontal") {
        for (let i = 0; i < ship.size; i++) {
          board[y][x + i] = c; // c is ship name

          ship.coordinates.push(`${x + i}-${y}`); // might have to loop to try and get the grids into an array
        } // ship object to have coordinates key
      } else if (directionString === "vertical") {
        for (let i = 0; i < ship.size; i++) {
          board[y + i][x] = c;

          ship.coordinates.push(`${x}-${y + i}`);
        }
      }
    }
  };

  generateRandomLocation(10, 10, shipArray[2]); // loop through shipArry[]
};
