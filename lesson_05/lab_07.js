const readLine = require('readline-sync')
let mystr = readLine.question('Please input your string: ')
let splitStr = mystr.split(" ")
console.log(splitStr);
console.log(countWords(splitStr));

function countWords(splitStr) {
    let result = {}
    for (let index = 0; index < splitStr.length; index++) {
        let splitStrKey = splitStr[index].toLowerCase()
        result[splitStrKey] = result.hasOwnProperty(splitStrKey)? (result[splitStrKey] + 1) : 1
    }
    return result
}
