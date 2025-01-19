//const { default: test } = require("node:test")

const { default: test } = require("node:test")

function addUp(num){
    return num+5
}

console.log(addUp(5))

test('add 5 to number', () => {
    expect(addUp(5)).toBe(10)
})