const {isEven, sortNumAsc } = require('../utils/lab3Handler')
let myarr = [2,5,6,7,99,11,33]
let sortedArr = myarr.sort(sortNumAsc)
console.log(sortedArr);

console.log('Max is ', sortedArr[sortedArr.length - 1]);
console.log('Min is ', sortedArr[0]);