function show(id) {
    document.getElementById(id).style.display = "block";
}
function changeCSS(color) {
    if (color === 1) {
        document.getElementById('theme').href='../CSS/dark.css';
    } else if (color === 2) {
        document.getElementById('theme').href='../CSS/tech.css';
    }
        
}