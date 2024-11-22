//const { default: test } = require("node:test")

function multiply(num1,num2){
    return num1*num2
}

test('multiplies two numbers', () => {
    expect(multiply(2,2)).toBe(4)
})
