function solution(str, ending){
    const endingLength = ending.length 
    console.log(endingLength)
    const slicedStr = str.slice(-endingLength)
    console.log(slicedStr)
    return slicedStr === ending
}




console.log(solution("abc", ""))