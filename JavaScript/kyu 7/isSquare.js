// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true

function isSquare(n){
    if( (n < 0) || typeof n !== "number" ){
        return false
    }

    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt)
}

console.log("is 25 squre-->", isSquare(25))
console.log("is 99 squre-->", isSquare(99))