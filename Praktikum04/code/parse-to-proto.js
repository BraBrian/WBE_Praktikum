const parseToProto = function (json, proto) {
    let protoObj = Object.create(proto)
    let parsedJson = JSON.parse(json)
    return Object.assign(protoObj, parsedJson)
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parseToProto };
}


/* const parseToProto = require("./parse-to-proto");

describe('parseToProto', function() {

    it('function works correct', function() {
        let proto = { category: "animal" }
        let json = '{"type":"cat","name":"Mimi","age":3}'

        let result = parseToProto(json, proto)

        expect(result.age).toBe(3)
        expect(result.category).toBe("animal")

    })
})
*/