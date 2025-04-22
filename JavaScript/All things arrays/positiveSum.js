// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1+7+12=20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
let totalSum = 0;
for(let i = 0; i< arr.length; i++){
    if(arr[i] > 0) {
         totalSum +=arr[i]
    }//else (totalSum) 
}
return totalSum
};

console.log(positiveSum([2,2,3,-4]))


//Premature return:

// The return statement inside the loop causes the function to stop and return the value immediately upon encountering the first number, whether it’s positive or negative.
// The purpose of the loop is to iterate through the entire array and accumulate the positive numbers into totalSum. However, your code exits the loop after checking the first element.
// Unnecessary else Block:

// The else block is not needed because if the condition (arr[i] > 0) is false, you can simply skip adding the number without explicitly returning totalSum.