const parseToProto = require("./parse-to-proto");

describe('parseToProto', function() {

    it('function works correct', function() {
        let proto = { category: "animal" }
        let json = '{"type":"cat","name":"Mimi","age":3}'

        let result = parseToProto(json, proto)

        expect(result.age).toBe(3)
        expect(result.category).toBe("animal")

    })
})