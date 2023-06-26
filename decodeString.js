let str = "MY NAME IS KHAN";
let rows = 3;
let s = str.replaceAll(" ", "*");
let col = Math.round(s.length / rows);
console.log(col);
let string = "";
let a = "";
for (let i = 0; i < rows; i++) {
  for (let j = i; j < s.length; j += rows) {
    string += s[j];
  }
  s += "     ";
  if (i < rows - 2) {
    a += "* ";
    string += a;
  }
}
console.log(string);
let arr = string.trim().split(" ");
console.log(arr);
arr.forEach((ele, i, array) => {
  if (ele == "") {
    array.splice(i, 1);
  } else {
    console.log(ele.trim());
  }
});
