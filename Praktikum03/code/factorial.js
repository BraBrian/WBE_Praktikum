const factorial = function (n) {
    const isBigInt = typeof n === 'bigint'
    let result = isBigInt ? 1n : 1
    let i = isBigInt ? 1n : 1

    for (i; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(3)) 
console.log(factorial(10)) 
console.log(factorial(50n))

module.exports = { factorial }