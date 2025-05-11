// Abbreviate a Two Word Name

function abbrevName(name){
    const upper = name.toUpperCase()
  const space = upper.indexOf(" ")
    return `${upper[0]}.${upper[space+1]}`
  
  }