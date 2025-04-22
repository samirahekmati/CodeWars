//create a function that removes all the space between character
//e.g. "Hello there" => "Hellothere"

function removeSpace(str) {
    //create an array, replace space with comma 
    str = str.split(" ")
    console.log(str)
    //
    str=str.join("")
    console.log(str)
    return str
}

//test cases with assertion

//test 1
console.assert( removeSpace("Hello there") === "Hellothere", "test 1 failed")

