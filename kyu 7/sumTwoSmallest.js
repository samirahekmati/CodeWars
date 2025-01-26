// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
    let smallestSum = Infinity;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if( i === j){
                continue
            }
           const currentSmallest=  numbers[i] + numbers[j]
           if(currentSmallest < smallestSum){
            smallestSum = currentSmallest
           }
        }
    }
    return smallestSum
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))


//second solution
function sumTwoSmallestNumbers2 (numbers){
    const sortedArray = numbers.sort((a,b) => a-b)
    console.log(sortedArray);
    return sortedArray[0] + sortedArray[1]
}

console.log(sumTwoSmallestNumbers2([19, 5, 42, 2, 77]))