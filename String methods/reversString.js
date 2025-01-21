function reverseString(str) {
const newArr = str.split("");
console.log("new array -->", newArr);
newArr.reverse();
console.log("reversed array -->", newArr);
const reversedString = newArr.join("");
return reversedString
}

console.log(reverseString("happy"))