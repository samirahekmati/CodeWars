// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    //conver str to array
    const newArr = x.split("");
    console.log("new array after split -->", newArr);
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] < 5){
            newArr[i] = 0
        } else{
            newArr[i] = 1
        }
    }
    //convert array to string
    const newString = newArr.join("");
    return newString
}

console.log(fakeBin('45385593107843568'))