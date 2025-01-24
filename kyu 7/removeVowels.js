//write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function removeVowels(str){
    const newArr = str.split("");
    console.log("new array-->",newArr);
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === "a" || newArr[i] === "e" || newArr[i] === "i" || newArr[i] === "o" || newArr[i] === "u" || newArr[i] === "A" || newArr[i] === "E" || newArr[i] === "I" || newArr[i] === "O" || newArr[i] === "U"){
            delete newArr[i]
        }
    }
    return newArr.join("")
}

console.log(removeVowels("This website is for losers LOL!"))


