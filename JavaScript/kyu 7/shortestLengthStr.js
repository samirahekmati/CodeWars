//given a string of words, return the length of the shortest word(s).

function shortestLength(str){
    const newArray = str.split(" ")
    console.log(newArray)
    let shortestWord = newArray[0]
    for(let i = 1 ; i < newArray.length; i++){
        if(newArray[i].length < shortestWord.length){
            shortestWord = newArray[i]
        }
    }
    return shortestWord.length
}

console.log(shortestLength("bitcoin take over the world maybe who knows perhaps"))