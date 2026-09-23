// display function
function readMe() {
    document.getElementById("spoiler").innerHTML = "Character A dies.";
}

// canvas
var canvas;
var ctx;

function circle() {
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
}


function test() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    circle();
}