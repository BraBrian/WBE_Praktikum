const power = (base, exponent) => {
    const isBigInt = typeof base === 'bigint' && typeof exponent === 'bigint';
    const ZERO = isBigInt ? 0n : 0;
    const ONE = isBigInt ? 1n : 1;
    const TWO = isBigInt ? 2n : 2;
    
    assert(exponent >= ZERO, "Exponent must be greater than 0");
    assert(typeof base === 'number' || typeof base === 'bigint', "Base must be a number or bigint");

    if (!isBigInt) {
        assert(exponent % 1 === 0, "Exponent must be an integer");
    }
    
    if (exponent === ZERO) {
        return ONE;
    }
    
    if (exponent % TWO === ZERO) {
        const half = power(base, isBigInt ? exponent / TWO : Math.floor(exponent / TWO));
        return half * half;
    } else {
        return base * power(base, exponent - ONE);
    }
}

function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed")
    }

module.exports = { power }

