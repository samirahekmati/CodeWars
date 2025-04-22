const numbers = [2,4,6,8]

function findAveragewithForLoop(array) {
    let average = 0
    let sum = 0

    if(array.length === 0){
        return average
    }
    for (let i = 0 ; i < array.length; i++){
      sum += array[i]
    }
    average = sum/array.length
    return average
  }

  console.log("solution with for loop -->", findAveragewithForLoop(numbers))




  
//solution with map method

function findAverageWithReduce (array){
  if(array.length === 0){
    return 0
  }

  const sum = array.reduce((result,element) => result+element , 0)
  return sum/array.length
}

console.log("solution with reduce -->", findAverageWithReduce(numbers))