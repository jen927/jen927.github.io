
// Student Constructor
function Student(firstName, lastName, age, major, gradYr) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.major = major,
    this.gradYr = gradYr,
    this.getName = function() {
        return this.firstName + " " + lastName;
    }
}

// Student objects
const studentA = new Student('Tohru', 'Honda', 21, "PHY", 2026);
const studentB = new Student('Lucy', "Heartfillia", 22, "ENG", 2021);

// shows student's name in HTML
function studentName(id, student) {
    let element = document.getElementById(id);
    element.innerHTML += student.getName();
}