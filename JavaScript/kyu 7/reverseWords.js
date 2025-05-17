function reverseWords(str){
    const words = str.split(" ");
    console.log(words)
    for(let i = 0 ; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("")
    }

    return words.join(" ")
}

console.log(reverseWords("Lilac is watching me!"))