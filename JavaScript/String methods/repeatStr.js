//Utilizing the repeat() Method

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatString( n, str) {
    return str.repeat(n)
}

console.log(repeatString(3, "Lilac"))