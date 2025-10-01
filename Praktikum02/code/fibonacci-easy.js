function fibonacci(number) {
    let n1 = 0, n2 = 1, nextTerm;
    const series = [];
    
    for (let i = 1; i <= number; i++) {
        series.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    
    return series;
}

// Beispielausführung mit 10 Termen
const number = 10; // Sie können diese Zahl ändern
console.log('Fibonacci Reihe:');
console.log(fibonacci(number));

module.exports = { fibonacci }
