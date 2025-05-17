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


    function removeSmallest2(numbers) {
        numbers = numbers.slice(0); //	Makes a copy to avoid mutating the input array
        console.log("numbers: ", numbers) 
        const min = Math.min(...numbers); //	Finds the smallest number
        numbers.splice(numbers.indexOf(min), 1); //	Removes the first occurrence of the smallest
        return numbers;
      }

      console.log(removeSmallest2([2, 2, 1, 2, 1]))