// finds the GCD between two positive integers a and b
function gcd(a, b) {
    let mod = a % b;
    while (mod != 0) {
        a = b;
        b = mod;
        mod = a % b;
    }
    return b;
}

// --- find gcd(5, 24) by hand ---
// 5 = 24 * 0 + 5
// 24 = 5 * 4 + 4
// 5 = 4 * 1 + 1
// 4 = 1 * 4 + 0
// gcd(5, 24) = 1

// --- find gcd(24,5) using function ---
console.log("using function:", gcd(5,24));

// -- other examples --
console.log("gcd(12,18): ", gcd(12,18));

// show output to gcd in HTML
function solveGCD(id, a, b) {
    let element = document.getElementById(id);
    element.innerHTML = gcd(a,b);
}