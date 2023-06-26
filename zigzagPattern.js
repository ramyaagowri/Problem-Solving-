let str = "PAYPALISHIRING";
let rows = 3;
let res = [];
let count = 0;
let up = true;
for (let i = 0; i < str.length; i++) {
  if (!res[count]) {
    res[count] = [];
  }
  res[count].push(str[i]);
  count = up ? count + 1 : count - 1;
  if (count + 1 == rows) {
    up = false;
  }
  if (count == 0) {
    up = true;
  }
}

let result = "";
for (let i of res) {
  result += i.join("");
}
console.log(result);
