function removeSmallest(numbers) {
    const min = Math.min(...numbers)
      console.log(min);
      let indexOfMin = numbers.indexOf(min)
     console.log(indexOfMin);
     let res = []
      for(let i = 0; i < numbers.length ; i++){
        if(i !== indexOfMin){
            res.push(numbers[i])
        }
      }
      return res
    }

    //console.log(removeSmallest([2, 2, 1, 2, 1]))


  