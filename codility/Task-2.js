// My function does not ensure that no more lowercase of the letter apperas after the uppercase; got not enough time to cover that! but I know the logic!
function solution(letters) {
    
    //array to track which lowercase letter is already seen
    const seenLowercase = [];
    const validLetters = []; //array to store valid ones

    for(let i = 0; i < letters.length; i++){
        const char = letters[i]; //for easy access to each letter in each iteration

        if(char >= "a" && char <= "z"){
        //track lowercase letters
        if(!seenLowercase.includes(char)) {
            seenLowercase.push(char);
        }
        }
        //console.log("lowercase-->", lowercase)

        if(char >="A" && char <= "Z"){
            const lower = char.toLowerCase();
            
            if(
                seenLowercase.includes(lower) && 
                !validLetters.includes(lower)
            ) {
                validLetters.push(lower);
            }
        }
        
    }

        
    return validLetters.length
}