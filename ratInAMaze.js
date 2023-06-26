let arr = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];
function way(n, i, j, s) {
  if (i == n - 1 && j == n - 1) {
    console.log(s.slice(0, s.length));
    return;
  }
  if (arr[i][j] == 1) {
    if (i + 1 < n) {
      way(n, i + 1, j, s + "d");
    }
    if (j + 1 < n) {
      way(n, i, j + 1, s + "r");
    }
  }
}

let n = arr.length;
s = "";
way(n, 0, 0, s);
