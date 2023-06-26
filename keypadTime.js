let password = "14459";
let adj = new Map();
let n = 3;
let m = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    let temp = [];
    if (i - 1 >= 0) {
      temp.push(matrix[i - 1][j]);
    }
    if (i + 1 < matrix.length) {
      temp.push(matrix[i + 1][j]);
    }
    if (j - 1 >= 0) {
      temp.push(matrix[i][j - 1]);
    }
    if (j + 1 < matrix.length) {
      temp.push(matrix[i][j + 1]);
    }
    adj.set(matrix[i][j], temp);
  }
}
console.log(adj);
let time = 1;
let pass = Object.assign([], password).map(Number);
console.log(pass);
for (let i = 1; i < pass.length; i++) {
  if (pass[i] == pass[i - 1]) {
    continue;
  }
  let val = adj.get(pass[i]);
  console.log("val" + val);
  if (val.includes(pass[i - 1])) {
    time += 1;
  } else {
    time += 2;
  }
}
console.log(time);
