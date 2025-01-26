// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//SYNTAX
//string.substring(start, end)
//The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

const string ="Hello Lilac"
console.log(string.substring(6,11))
console.log(string.substring(6))


function getMiddle(str){
    let position
    let length
    if(str.length % 2 == 1 ){
        position = str.length / 2
        length = 1;
    }else {
        position = str.length / 2-1
        length = 2
    }

    return str.substring(position, position+length)
}

getMiddle("Lilac")