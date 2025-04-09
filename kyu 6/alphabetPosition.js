// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


function alphabetPosition(str){
    const inputArray = str.toUpperCase().split("")

    const alphabet =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let result = ""
    inputArray.forEach(element => {
        if(alphabet.indexOf(element) >= 0){
            result += alphabet.indexOf(element) + 1 + " "
        }
    });
    return result.trim()
}

console.log(alphabetPosition("The sunset"))