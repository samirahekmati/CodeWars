// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str){
    const loweredStr = str.toLowerCase()
    console.log(loweredStr)
    //convert to array
    const newArr = loweredStr.split("")
    console.log("new array-->", newArr)
    //filter based on x
    const filterX = newArr.filter((element) => element === "x");
    console.log(filterX)
    //filter based on o
    const filterO = newArr.filter((element) => element === "o");
    console.log(filterO)

    //compare two filtered arrays

    if(filterO.length === filterX.length){
        return true
    }

    return false

}

console.log(XO("ooxXm"));
console.log(XO("zzoo"))