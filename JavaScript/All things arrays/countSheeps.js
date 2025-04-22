// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const arrayOfBoolean = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheep(array){
    //retrun sheep.filter(Boolean).length
    let sheepCount = 0;
    for(let i = 0 ; i < array.length; i++){
        if(array[i] === true){
            sheepCount +=1
        }
    }
    return sheepCount
}

console.log("sheep count with for loop-->",countSheep(arrayOfBoolean))


//solution with filter
function countSheepWithFilter(array){
    return array.filter(Boolean).length
}

console.log("sheep count with filter-->", countSheepWithFilter(arrayOfBoolean))
