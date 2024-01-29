const {isEven } = require('../utils/lab3Handler')

let myarr = [2,5,6,7,9,11,33]

let countEven = 0
for (const value of myarr) {
    if(isEven(value)) {
        countEven ++;
    }
}
console.log('Number of even numbers is: ', countEven);
console.log('Number of odd numbers is: ', myarr.length - countEven);