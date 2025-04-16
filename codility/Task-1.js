function solution(S) {
    // for each direction give an initial value of 0
    const counts = {'^': 0 , 'v': 0, '<': 0, '>': 0};

    // count occurance of each direction in the string
    for(let i = 0; i < S.length; i++){
        counts[S[i]]++
        }
    //console.log("counts-->",counts)


    // based on occurance find the maximum count of any direction
    // why find max? because the optimal strategy is to rotate all the arrows to match the direction that appeares the most frequently
    const maxCount = Math.max(counts['^'], counts['v'], counts['<'], counts['>']);
    //console.log("max count-->", maxCount)

    //return the minimum number of rotation that needed
    return S.length - maxCount


}
