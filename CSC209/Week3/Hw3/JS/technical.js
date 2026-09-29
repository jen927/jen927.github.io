// variables
const d = new Date();


function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}
function changeCSS(color) {
    if (color === 1) {
        document.getElementById('theme').href='../CSS/dark.css';
    } else if (color === 2) {
        document.getElementById('theme').href='../CSS/technical.css';
    }
}

function showSchedule() {
    const rows = ['r0', 'r1', 'r2']
    for (const r of rows) {
        if (document.getElementById(r).style.display === "none") {
            document.getElementById(r).style.display = "table-row";
        }
    }
} 

function hideSchedule() {
    const rows = ['r0', 'r1', 'r2']
    for (const r of rows) {
        if (document.getElementById(r).style.display === "table-row") {
            document.getElementById(r).style.display = "none";
        }
    }
} 

function getTodayDate(id) {
    let element = document.getElementById(id);
    element.innerHTML = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
}

function changeNav(id, newId) {
    let element1 = document.getElementById(id);
    element1.style.display = "none";

    console.log(element1.style.display);
    

    let element2 = document.getElementById(newId);
    element2.style.display = "flex";

    console.log(element2.style.display);

    // console.log(element1.style.display);

}