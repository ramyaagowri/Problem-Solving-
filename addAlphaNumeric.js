let str = "45678dfghjk465789vbhnj45gh76hj87";
let num = str.match(/\d+/g);
let d = num.reduce((e, ele) => {
  return e + +ele;
}, 0);
console.log(d);
