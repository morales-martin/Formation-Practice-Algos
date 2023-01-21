/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
Return the modified image after performing the flood fill.

*/

function floodFill(image, sr, sc, color) {
  let targetColor = image[sr][sc];

  function helper(row, col) {
    const vectors = [
      [row - 1, col], //UP
      [row, col + 1], //RIGHT
      [row + 1, col], //DOWN
      [row, col - 1], //LEFT
    ];

    for (let vector of vectors) {
        
      if (
        vector[0] >= 0 &&
        vector[0] <= image.length - 1 &&
        vector[1] >= 0 &&
        vector[1] <= image[0].length - 1
      ) {
        if (image[vector[0]][vector[1]] === targetColor && image[vector[0]][vector[1]] !== color) {
          image[vector[0]][vector[1]] = color;
          helper(vector[0], vector[1]);
        }
      }
    }
  }

  helper(sr, sc);
  return image;
}

// Tests
const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

const expectedImage = [
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1],
];

console.log(floodFill(image, 1, 1, 2), expectedImage);

const image2 = [
  [0, 0, 0],
  [0, 0, 0],
];

const expectedImage2 = [
  [0, 0, 0],
  [0, 0, 0],
];

console.log(floodFill(image2, 0, 0, 0), expectedImage2);
