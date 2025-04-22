// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
    const newArr = string.split(" ") //.reverse().join("")
    //console.log(newArr)
    for(let i = 0; i < newArr.length; i++){
        if (newArr[i].length >= 5){
            newArr[i].reverse()
        }
    }
    return newArr
   
  }

  console.log(spinWords("hello"))