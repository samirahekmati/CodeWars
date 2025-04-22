// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


     function toJadenCase(quote) {
       return quote.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
       
     }
 console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) 