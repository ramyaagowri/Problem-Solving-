let Arr = [5, 1, 2, 6, 3, 4];
let num = [1, 1, 1, 1, 1, 1];
for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] < Arr[i + 1] || (Arr[i] < Arr[i + 1] && Arr[i - 1] > Arr[i])) {
    if (Arr[i] < Arr[i + 1]) {
      if (num[i] == num[i + 1]) {
        num[i] += 1;
      }
    }
    if (Arr[i - 1] > Arr[i] && Arr[i] < Arr[i + 1]) {
      if (num[i] == num[i + 1] && num[i] == num[i - 1]) {
        num[i] += 2;
      }
    } else if (Arr[i] < Arr[i - 1] > Arr[i]) {
      if (num[i] == num[i - 1]) {
        num[i] += 1;
      }
    }
  }
}
for (let j = Arr.length - 1; j >= 0; j--) {
  if (Arr[j] < Arr[j + 1] || (Arr[j] < Arr[j + 1] && Arr[j - 1] > Arr[j])) {
    if (Arr[j] < Arr[j + 1]) {
      if (num[j] == num[j + 1]) {
        num[j] += 1;
      }
    }
    if (Arr[j - 1] > Arr[j] && Arr[j] < Arr[j + 1]) {
      if (num[j] == num[j + 1] && num[j] == num[j - 1]) {
        num[j] += 2;
      }
    } else if (Arr[j] < Arr[j - 1] > Arr[j]) {
      if (num[j] == num[j - 1]) {
        num[j] += 1;
      }
    }
  }
}
console.log(num);
arr = [1, 2, 3, 4, 5];
arr.forEach((elements) => console.log(elements));
// arr.entries():
