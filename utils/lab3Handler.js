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

/**
 * Return index of smallest value
 */
function findIndexOfSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let index = 1; index < arr.length; index++) {
        if(smallest > arr[index]) {
            smallest = arr[index]
            smallestIndex = index
        }
        
    }
    return smallestIndex
}

/**
 * Pick the smallest value from original array and push to new array
 */
function secondSort(arr) {
    const sortArr = []
    while(arr.length) {
        let smallestIndex = findIndexOfSmallest(arr)
        sortArr.push(...arr.splice(smallestIndex,1))
       
        console.log('original array after splice', arr)
        console.log('sort array after push', sortArr)
        console.log('\n');
    }
    return sortArr
}

module.exports = {
    isEven: isEven,
    sortNumAsc: sortNumAsc,
    selfSortAsc: selfSortAsc,
    secondSort
}