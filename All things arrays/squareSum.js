// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1*2 + 2*2 + 2*2 = 9

function squareSum(numbers) {

    // return numbers.map(n => n*n).reduce((n,b),)
    let totalSum = 0;
    
    for(let i = 0 ; i<numbers.length; i++){
        square = numbers[i] * numbers[i]
        console.log("square in every itiration -->", square)
        totalSum +=square
    }
    return totalSum
}

console.log(squareSum([1, 2, 2]))