let arr = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];
let maxArea = 0;
let rows = arr.length;
let cols = arr[0].length;
let heights = Array(rows)
  .fill(0)
  .map(() => Array(cols).fill(0));
console.log(heights);

heights[0] = arr[0];
for (let i = 1; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    heights[i][j] = arr[i][j] == 1 ? heights[i - 1][j] + 1 : 0;
  }
}
console.log(heights);
let max = 0;
for (let i of heights) {
  max = Math.max(max, LargestHistogramArea(i));
}
console.log(max);

function LargestHistogramArea(heights) {
  for (let i = 0; i < heights.length; i++) {
    let base = heights[i];
    let width = 1;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < base) {
        break;
      }
      width++;
    }
    for (let j = i - 1; j > heights.length; j--) {
      if (heights[j] < base) {
        break;
      }
      width++;
    }
    let area = base * width;
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}
