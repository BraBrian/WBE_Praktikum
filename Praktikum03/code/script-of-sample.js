/* Aufgabe 3 */
const SCRIPTS = require("./scripts")

const oldAndLiving = function (SCRIPTS) {
    return SCRIPTS.filter(script => script.year < 0 && script.living === true)
}

const oldAndLivingFor = function (SCRIPTS) {
    let result = []
    for (let i = 0; i < SCRIPTS.length; i++) {
        let script = SCRIPTS[i]
        if (script.year < 0 && script.living === true) {
            result.push(script)
        }
    }
    return result
}

const oldAndLivingForModern = function (SCRIPTS) {
    let result = []
    for (let item of SCRIPTS) {
        if (item.year < 0 && item.living === true) {
            result.push(item)
        }
    }
    return result
}

const numberOfCodes = function (SCRIPTS) {
    let total = 0
    for (let range of SCRIPTS.ranges) {
        let count = range[1] - range[0]
        total += count
    }
    return total
}

const numberOfCodesReduce = function (SCRIPTS) {
    return SCRIPTS.ranges.reduce((summe, range) => {
        return summe + (range[1] - range[0])
    }, 0)
}

const scriptOfSample = function (zeichen, SCRIPTS) {
    let zeichencode = zeichen.charCodeAt(0)
    for (let script of SCRIPTS)
        for (let range of script.ranges) {
            if (zeichencode >= range[0] && zeichencode < range[1])
                return script.name
        }
    return "unknown"

}

const scriptOfSampleFind = function (zeichen, SCRIPTS) {
    let code = zeichen.charCodeAt(0)

    // Suche das erste Script, das passt
    let foundScript = SCRIPTS.find(script => {
        // Prüfe ob irgendein range passt
        return script.ranges.some(range =>
            code >= range[0] && code < range[1]
        )
    })

    return foundScript ? foundScript.name : "unknown"
}

const scriptsInString = function (text, SCRIPTS) {
    let counts = {}

    for (let zeichen of text) {
        let scriptName = scriptOfSample(zeichen, SCRIPTS)

        if (counts[scriptName] === undefined) {
            counts[scriptName] = 1
        }
        else {
            counts[scriptName]++
        }
    }

    return counts
}

const coinCombinations = function (value, coins) {
    if (value === 0) return [[]]
    if (value < 0) return []
    if (coins.length === 0) return []

    let ersteMünze = coins[0]
    let mitMünze = coinCombinations(value - ersteMünze, coins)
    let ohneMünze = coinCombinations(value, coins.slice(1))

    let mitMünzeErweitert = mitMünze.map(lösung => {
        return [ersteMünze, ...lösung] 
    })
    
    return [...mitMünzeErweitert, ...ohneMünze]
}

console.log(coinCombinations(35, [500, 200, 100, 50, 20, 10, 5]))

module.exports = { scriptOfSample, scriptsInString }