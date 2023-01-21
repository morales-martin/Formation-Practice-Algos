function row_major(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j]);
    }
  }

  return result;
}

function row_major_reverse(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      result.push(matrix[i][j]);
    }
  }

  return result;
}

function col_major(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[j][i]);
    }
  }

  return result;
}

function col_major_reverse(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[0].length; j >= 0; j--) {
      result.push(matrix[j][i]);
    }
  }

  return result;
}

function averageColumnMinimum(matrix) {
  let minAvg = Infinity;

  for (let i = 0; i < matrix[0].length; i++) {
    let currAvg = 0;
    for (let j = 0; j < matrix.length; j++) {
      currAvg += matrix[j][i];
    }
    currAvg = currAvg / matrix.length;
    minAvg = Math.min(minAvg, currAvg);
  }

  return Math.floor(minAvg);
}
function averageRowMinimum(matrix) {
  let minAvg = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    let currAvg = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      currAvg += matrix[i][j];
    }
    currAvg = currAvg / matrix[i].length;
    minAvg = Math.min(minAvg, currAvg);
  }

  return Math.floor(minAvg);
}

function linearizeZigZag(matrix) {
  /*

  output = []
  for(columns) {
    if(i%2 === 0){
     for(rows) {
      add target to output
    }
    }else{
      for(rows){
        add target to output (backwards)
      }
    }

  }

  */

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}

/*
grid = [
  [1,1,1,1,1,1,1,0],
  [1,1,1,0,0,0,0,1],
  [1,1,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0]
]

function countIslands
  main function
    loop through rows and columns
      if cell is a one
        set cell to 0
        call helper function
      increment island count
    
  helper function(row, column, grid)
    start at index
    create array of vertices

    if vertice is within boundary of grid && equals 1
      change to 0 and call helper
*/

function countIslands(grid) {
  let islandCount = 0;

  function helper(row, column) {
    // list of vertices that will later be checked against grid boundaries
    let vertices = [
      [row + 1, column], // down
      [row - 1, column], // up
      [row, column + 1], // right
      [row, column - 1], // left
    ];

    for (let vertex of vertices) {
      if (
        vertex[0] < grid.length &&
        vertex[0] >= 0 &&
        vertex[1] < grid[0].length &&
        vertex[1] >= 0
      ) {
        if (grid[vertex[0]][vertex[1]] === 1) {
          grid[vertex[0]][vertex[1]] = 0;
          helper(vertex[0], vertex[1]);
        }
      }
    }
  }

  // traverse through grid
  // when we run into "land" (AKA 1), run helper function to convert all land in 4 directions to 0 and count 1 island
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        grid[r][c] = 0;
        helper(r, c);
        islandCount++;
      }
    }
  }

  return islandCount;
}

let grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
];

console.log(countIslands(grid));
