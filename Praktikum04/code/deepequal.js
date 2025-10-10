const deepEqual = function (o1, o2) {
    if (o1 === o2) return true
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || o1 === null || o2 === null) return false

    const keys1 = Object.keys(o1)
    const keys2 = Object.keys(o2)

    if (keys1.length !== keys2.length) return false

    for (let key of keys1) {
        if (!(key in o2) || !deepEqual(o1[key], o2[key])) return false
    }
    return true
}

console.log("1.", deepEqual(16, 16))
console.log("2.", deepEqual("hi", "hi"))
console.log("3.", deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log("4.", deepEqual({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
console.log("5.", deepEqual({}, {}))
console.log("6.", deepEqual({ a: {} }, { a: {} }))
let emptyObj = {}
console.log("7.", deepEqual({ a: emptyObj }, { a: emptyObj }))

console.log("8.", deepEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } }))
console.log("9.", deepEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }))

module.exports = { deepEqual }