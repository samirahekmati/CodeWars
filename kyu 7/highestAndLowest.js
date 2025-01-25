// you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbersStr){
    // Convert the string into an array of numbers
    const newArray = numbersStr.split(" ").map(Number);
    console.log("new array:",newArray)
    let highest = newArray[0];
    let lowest = newArray[0];

    for(let i = 1; i<newArray.length; i++){
        if(newArray[i] > highest){
            highest = newArray[i]
        }
         if(newArray[i] < lowest) {
            lowest = newArray[i]
        }
    }
    highest.toString();
    lowest.toString();
    
    
    console.log( typeof `${highest}`)
    return `${highest} ${lowest}`
}

console.log("first solution-->",highAndLow("1 2 3 4 5"))


//second solution

function highAndLow2(numbersStr){
const numbersArray = numbersStr.split(" ")
return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
}

console.log("second solution-->",highAndLow2("1 2 3 4 5"))