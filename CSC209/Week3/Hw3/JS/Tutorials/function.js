// finds the GCD between two positive integers a and b
const findGCD = function (a, b) {
    let mod = a % b;
    while (mod != 0) {
        a = b;
        b = mod;
        mod = a % b;
    }
    return b;
};
// --- find gcd(24,5) using function ---
console.log("using function:", findGCD(5,24));

// show output to gcd in HTML
function displayGCD(id, a, b) {
    let element = document.getElementById(id);
    element.innerHTML = findGCD(a,b);
}