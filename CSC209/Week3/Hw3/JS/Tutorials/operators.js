function isVoter(age) {
    age ??= -1; // assigns a value if age is undefined or null
    if (age < 0 || age > 150) { // creates a domain of valid ages
        return "Not a valid age."
    } else if (age < 18) { // decides if age is below or above the legal voting age in the U.S.
        return "Too young to vote!"
    } else {
        return "You can vote! Please vote this upcoming election!"
    }
}

function toHTML(id, age) {
    let element = document.getElementById(id);
    element.innerHTML += isVoter(age);
}