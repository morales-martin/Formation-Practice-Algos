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

/*

  Campus Bikes

  On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.
  Our goal is to assign a bike to each worker. Among the available bikes and workers, we choose the (worker, bike) pair with the shortest Manhattan distance between each other, and assign the bike to that worker. (If there are multiple (worker, bike) pairs with the same shortest Manhattan distance, we choose the pair with the smallest worker index; if there are multiple ways to do that, we choose the pair with the smallest bike index). We repeat this process until there are no available workers.
  The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.
  Return a vector ans of length N, where ans[i] is the index (0-indexed) of the bike that the i-th worker is assigned to.

  Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
  Output: [1,0]
  Explanation: 
  Worker 1 grabs Bike 0 as they are closest (without ties), and Worker 0 is assigned Bike 1. So the output is [1, 0].


    let workers = [
      [0, 0],
      [2, 1],
    ];
    let bikes = [
      [1, 2],
      [3, 3],
    ];
    console.log(assignBikes(workers, bikes));

*/

function calculateDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

const assignBikes = (workers, bikes) => {
  const result = new Array(workers.length);
  const workersTaken = new Set();
  const bikesTaken = new Set();

  while (workersTaken.size < workers.length) {
    let minBikeIdx = -1;
    let minWorkerIdx = -1;
    let minDistance = Infinity;

    for (let i = 0; i < workers.length; i++) {
      if (workersTaken.has(i)) continue;

      for (let j = 0; j < bikes.length; j++) {
        if (bikesTaken.has(j)) continue;
        let bike = bikes[j];
        let worker = workers[i];

        let md = Math.abs(bike[0] - worker[0]) + Math.abs(bike[1] - worker[1]);

        if (md < minDistance) {
          minDistance = md;
          minWorkerIdx = i;
          minBikeIdx = j;
        }
      }
    }
    workersTaken.add(minWorkerIdx);
    bikesTaken.add(minBikeIdx);
    result[minWorkerIdx] = minBikeIdx;
  }

  return result;
};

/*

Given a square matrix *mat*, return the sum of the matrix diagonals.
Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal *that are not part of the primary diagonal*.

*/

const diagonalSum = (matrix) => {
  let sum = 0;
  let center = Math.floor(matrix.length / 2);

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i]; // diagonal down
    sum += matrix[matrix.length - 1 - i][i]; // diagonal up
  }

  return matrix.length % 2 === 0 ? sum : sum - matrix[center][center];
};
