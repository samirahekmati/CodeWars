// Convert number to reversed array of digits

function digitize(n) {
 
    return n.toString().split("").map(element=> Number(element)).reverse()
  }