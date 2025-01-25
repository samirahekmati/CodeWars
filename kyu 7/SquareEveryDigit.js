// square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits (num) {
    const toString = num.toString() //convert number to string
    console.log("converted number to string-->",toString)

    const array = toString.split("") //convert string to array
    console.log("converted string to array-->",array)
    
    const squaredArray= array.map(element => element * element);//iterate through array and square ech element
    console.log("squared array with map-->", squaredArray)

    const concatenated = squaredArray.join("") //concatenate the squared digits
    console.log("concatenated to string-->", concatenated);

    return parseInt(concatenated)

   
}

console.log(squareDigits(765))