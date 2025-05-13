function isBetter(classPoints , yourScore){
    return yourScore > classPoints.reduce((acc,cur)=> acc + cur , 0) / classPoints.length
}

console.log(isBetter([100, 40, 34, 57, 29, 72, 57, 88], 75))