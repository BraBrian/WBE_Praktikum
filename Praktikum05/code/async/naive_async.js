//
//  Corrected asynchronous code. Now it works!
//
let fs = require('fs')
let timestamp = new Date().toString()

// Zuerst die Datei schreiben
fs.writeFile('date.txt', timestamp, (err) => {
	if (err) throw err
	
	// Dann die Datei lesen (nach dem Schreiben)
	fs.readFile('date.txt', 'utf8', (err, contents) => { 
		if (err) throw err
		
		// Erst jetzt können wir vergleichen
		console.log('Comparing the contents')
		console.assert(timestamp == contents, 'Contents should match!')
		console.log('Success! Timestamp and contents match.')
	})
})