function add(num){
    return num + num
}

console.log(add(75))

Test('add', ()=>{
    expect(add(75)).toBe(150)
})