//We need a function that can transform a string into a number.

function stringToNumber(str){
    //Number() is a function not a methode, you need to pass the valu to the function
    return Number(str)
    
}

console.log(typeof stringToNumber("123"))