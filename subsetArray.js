function printSubsets(arr, subset = [], index = 0) {
  if (index === arr.length) {
    console.log(subset);
    return;
  }

  subset.push(arr[index]);
  printSubsets(arr, subset, index + 1);

  subset.pop();
  printSubsets(arr, subset, index + 1);
}
printSubsets([1, 2, 3]);

// var subsets = function(nums)
//    {
//      let reqArr = [[]]
//      for(let ele of nums){
//         let currLen = reqArr.length
//         for(let i=0; i<currLen; i++){
//             let subArr = [...reqArr[i], ele]
//             console.log(subArr);
//             reqArr.push(subArr)
//         }
//     }
//     //console.log(reqArr);
//     return reqArr
// };
// let nums=[1,2,3];
// subsets(nums);
