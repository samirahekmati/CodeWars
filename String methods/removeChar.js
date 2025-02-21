// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 

function removeChar(str){
    //convert str to arry
    const newArr = str.split("")
    console.log("new array-->", newArr);
    //use pop method to remove the last element
    //use shift method to remove first element
    newArr.pop()
    console.log("array after pop methode -->", newArr)
    newArr.shift()
    console.log("array after shift methode -->", newArr)
    //convert array to string with join method
    const newString = newArr.join("");
    return newString

}
//retrun str.slice(1, -1)

console.log(removeChar("HLilacH"))