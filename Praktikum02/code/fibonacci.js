function fibonacci(n) {

  const G = (1 + Math.sqrt(5)) / 2; // Goldener Schnitt (φ)
  const H = (1 - Math.sqrt(5)) / 2;
  
  const result = Math.round(((G ** n) - (H ** n)) / Math.sqrt(5));
  
  return result;
}

const ergebnis = fibonacci(18);
console.log(`Die 18. Fibonacci-Zahl ist: ${ergebnis}`);

