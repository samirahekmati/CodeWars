// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:



const haystack =["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
//solution with for loop
function findNeedle(array){
    for(let i = 0; i< array.length; i++){
        if(array[i] === "needle"){
            return `found the needle at position ${i}`
        }
    }
}

console.log("with for loop-->",findNeedle(haystack))


//with map
function findNeedleWithMap(array) {
    let result ="";
    array.map((element,index) => {
        if(element === "needle"){
            result = `found the needle at position ${index}`
        }
    })
    return result;
}

console.log("with map-->",findNeedleWithMap(haystack))





// function findNeedle(array) {
//     let result = "";
//     array.map((item, index) => {
//         if (item === "needle") {
//             result = `found the needle at position ${index}`;
//         }
//     });
//     return result;
// }