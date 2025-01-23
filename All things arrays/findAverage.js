function findAverage(array) {
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

//const sum = array.reduce((a,b) => a+b, 0) 0 means when there is zero give me zero
//return sum/ array.length