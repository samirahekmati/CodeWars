const numbers = [1,2,3,4,5,6,7,8,9,10];


const evens = numbers.filter((number) => number %2 === 0) //if the condition is true it is going to put the lement back in the array if it is false it wont;
console.log("filterde even numbers", evens)

//comparing filter() methode to for loop
function evenNums (array){
    let evenNumbers = [];
    for(let i = 0; i<array.length; i++){
    if (array[i] % 2 === 0){
        evenNumbers.push(array[i])
    }
    
}
return evenNumbers
}

console.log("even numbers with for loop",evenNums([1,2,3,4,5,6,7,8,9,10]))