// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.




// The .repeat() method is used to create a new string by repeating a given string a specified number of times.
function accum(s) {
	const newAr = s.split("")
    console.log(newAr)
    
   return newAr.map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index)
    }).join("-")

}

console.log(accum("abcd"))