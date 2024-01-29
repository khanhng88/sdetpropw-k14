const {sortNumAsc } = require('../utils/lab3Handler')
let arr1= [1, 12, 16, 28, 34]
let arr2 =[1, 13, 16, 27, 99]


// let mergeArr = [...arr1, ...arr2]
let mergeArr2 = arr1.concat(arr2)
console.log(mergeArr2.sort(sortNumAsc))


