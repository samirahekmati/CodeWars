function countPositivesSumNegatives(input) {
  let result = [];
  let positiveCounter ;
  let sumOfNegatives ;

  if(input.length === 0 || !Array.isArray(input)){
    return result
}
  for (let i = 0; i < input.length; i++) {
    
    if (input[i] > 0) {
      positiveCounter++;
    } else if (input[i] < 0) {
      sumOfNegatives += input[i];
    }
  }

  result.push(positiveCounter, sumOfNegatives);

  return result;
}

console.log(countPositivesSumNegatives([]));
