const fs = require('fs');

function main() {
    const inputFile = process.argv[2]
    const outputFile = process.argv[3]

    if (inputFile !== null && typeof inputFile !== 'undefined'
        && outputFile !== null && typeof outputFile !== 'undefined'
    ) {
        const stats = fs.statSync(inputFile)
        if (!fs.existsSync(inputFile)) {
            console.error(`Fehler: Datei '${inputFile}' nicht gefunden!`);
            process.exit(1);
        }
        console.log("Size:", stats.size)
        console.log("Änderungsdatum:", stats.ctime)
        console.time()
        const data = fs.readFileSync(inputFile, 'utf8',)
        console.timeEnd()
        let lines = data.split('\n')
        console.log("Zeilen:", lines.length)
        console.time("Verarbeiten")
        const jsonData = csvToJson(data)
        console.timeEnd("Verarbeiten")
        console.time("Schreiben")
        fs.writeFileSync(outputFile, jsonData)
        console.timeEnd("Schreiben")
    }
}

function csvToJson(csvContent) {
    const lines = csvContent.split("\n")
    const header = lines[0].split(',')
    const dataLines = lines.slice(1).filter(line => line.trim() !== '')

    const jsonArray = dataLines.map(line => {
        const values = line.split(',')
        const obj = {}
        header.forEach((key, index) => {
            obj[key] = values[index]
        })
        return obj
    })
    return JSON.stringify(jsonArray, null, 2)
}

main();