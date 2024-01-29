const {selfSortAsc } = require('../utils/lab3Handler')

let myarr = [2,5,6,7,99,11,33]
console.log('before ', myarr);
selfSortAsc(myarr)
console.log('after ', myarr);