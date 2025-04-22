function toCamelCase(str){
    const array = str.split(/[_-]/)
    console.log(array)
      const newArr = []
      for(let i = 1; i<array.length; i++){
        newArr.push(array[i].charAt(0).toUpperCase()+array[i].slice(1))
      }
      return newArr
    }