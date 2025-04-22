function countOccurance(arr, letter){
    let count = 0
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == letter){
            count ++
        }
    }
    return count
}

console.log(countOccurance(["m", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"], "n"
))