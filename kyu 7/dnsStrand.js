// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dnaStrand(dna){
    let newString =""
    for(let i = 0; i < dna.length; i++){
        if(dna[i]==="A"){
            newString += "T"
        }
        if(dna[i]==="G"){
            newString += "C"
        }
        if(dna[i]==="T"){
            newString += "A"
        }
        if(dna[i]==="C"){
            newString += "G"
        }
    }
    return newString
}

console.log(dnaStrand("ATTGC"))