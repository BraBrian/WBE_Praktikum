const equal = function (o1, o2) {
    if (o1 === o2) return true
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || o1 === null || o2 === null) return false
    
    const keys1 = Object.keys(o1)
    const keys2 = Object.keys(o2)
    if (keys1.length !== keys2.length) return false
    
    for (let key of keys1) {
        if (!(key in o2) || o1[key] !== o2[key]) return false
    }
    return true
}

console.log("1.", equal(16, 16))
console.log("2.", equal("hi", "hi"))
console.log("3.", equal({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log("4.", equal({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
console.log("5.", equal({}, {}))
console.log("6.", equal({ a: {} }, { a: {} }))
let emptyObj = {}
console.log("7.", equal({ a: emptyObj }, { a: emptyObj }))

module.exports = { equal }