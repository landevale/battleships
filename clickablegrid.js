const clickableGrid = (rows, cols, callback) => {
  var i = 0;
  var grid = $("<table>").addClass("targetGrid").attr("id", "compGrid");
  for (let r = 0; r < rows; ++r) {
    const tr = grid.append($("<tr>"));
    for (let c = 0; c < cols; ++c) {
      const cell = tr.append($("<td>"));
      cell.text(`${gameBoard[r][c]}`).addClass("grid-hide");
      cell.addEventListener(
        "click",
        (function (el, r, c, i) {
          // element, r, c, i
          return function () {
            callback(el, r, c, i);
          };
        })(cell, r, c, i),
        false
      );
    }
  }
  return grid;
};
