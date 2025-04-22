const votes = ["Jake", "Jake", "Laurie", "Laurie", "Laurie", "Jake", "Jake", "Jake", "Laurie", "Cassie", "Cassie", "Jake", "Jake", "Cassie", "Laurie", "Cassie", "Jake", "Jake", "Cassie", "Laurie"]

function count2(arr, name){
    let count = 0
    for( let i = 0; i < arr.length; i++){
        if(name == arr[i]){
            count++
        }
    }
    return count
}
const jakeVotes = count2(votes, "Jake")
console.log(jakeVotes)