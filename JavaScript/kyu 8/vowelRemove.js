function removeAllVowels(text){
    return text.replace(/[aioue]/gi, "")
}

console.log(removeAllVowels("Hello World"))