function openOrSenior(data) {
    let res = [];
    for(let i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            res.push('Senior')
        } else {
            res.push('Open')
        }
    }

    return res
}

console.log(openOrSenior([[44,3],[56, 8]]))

// second solution with map

function openOrSenior2(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior2([[44,3],[56, 8]]))