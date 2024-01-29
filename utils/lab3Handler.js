function isEven(value) {
    return value%2 == 0
}

function sortNumAsc (num1, num2) {
    return num1-num2
}

function selfSortAsc(myarr) {
    for (let i = 0; i < myarr.length; i++) {
        for(let j = i + 1 ; j < myarr.length; j++) {
            if(myarr[j] < myarr[i]) {
                let temp = myarr[j]
                myarr[j] = myarr[i]
                myarr[i] =temp
    
            }
        }
        
    }
    return myarr
}

module.exports = {
    isEven: isEven,
    sortNumAsc: sortNumAsc,
    selfSortAsc: selfSortAsc
}