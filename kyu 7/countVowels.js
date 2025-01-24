// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//solution with for loop
function countVowelsWithForLoop(str){
    let count = 0;
    for(let i = 0; i < str.length ; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++
        }
    }
    return count
}

console.log("count vowels with for loop -->", countVowelsWithForLoop("Vowels Count Tests"))


//another solution with for loop but this time different if statemen

function countVowels(str){
    let count=0;
    for(let i = 0; i < str.length ; i++){
        if("aeiouAEIOU".includes(str[i])){//check the current character in the loop
            count++
        }
    }
    return count
}

console.log("solution with for loop and include -->",countVowels("Vowels Count Tests"));

//solution with filter and includes

function countVowelsWithFilter (str) {
    return str.split("").filter(i => "aeiouAEIOU".includes(i)).length
}

console.log("count vowels with filter and includes-->", countVowelsWithFilter("Vowels Count Tests"))