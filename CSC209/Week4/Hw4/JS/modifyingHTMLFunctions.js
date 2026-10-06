function isPointLabeled() {
                
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
   
    if (POINTSARR.isLabeled) {
        POINTSARR.isLabeled = false;
        drawPointsAndEdges();
        document.getElementById('ptsLabeled').innerHTML = "LABEL";
    } else {
        POINTSARR.isLabeled = true;
        drawPointsAndEdges();
        document.getElementById('ptsLabeled').innerHTML = "UNLABEL";
    }
}

function isEdgeLabeled() {
                
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

    if (EDGESARR.isLabeled) {
        EDGESARR.isLabeled = false;
        drawPointsAndEdges();
        document.getElementById('edgesLabeled').innerHTML = "LABEL";
    } else {
        EDGESARR.isLabeled = true;
        drawPointsAndEdges();
        document.getElementById('edgesLabeled').innerHTML = "UNLABEL";
    } 
   
}

function hasEdges() {
                
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
    
    if (EDGESARR.isDrawn){
        EDGESARR.isDrawn = false;
        drawPointsAndEdges();
        document.getElementById('edges').innerHTML = "ADD EDGES";
    } else {
        EDGESARR.isDrawn = true;
        drawPointsAndEdges();
        document.getElementById('edges').innerHTML = "REMOVE EDGES";
    }
}

function changePointLabels() {
    
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
   
    if (POINTSARR.isRandomized) {
        POINTSARR.isRandomized = false;
        document.getElementById("ptsOrder").innerHTML = "RANDOM ORDER";
    } else {
        POINTSARR.isRandomized = true;
        document.getElementById("ptsOrder").innerHTML = "DEFAULT ORDER";
    }
    
    PTSLABEL = generateLabels(POINTSARR.length, POINTSARR.isRandomized);
    drawPointsAndEdges();
   
}

function scatterPoints() {
    ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);

    if (POINTSARR.isScattered) {
        POINTSARR.isScattered = false;
        document.getElementById("ptsPosition").innerHTML = "SCATTER POINTS";
    } else {
        POINTSARR.isScattered = true;
        document.getElementById("ptsPosition").innerHTML = "DEFAULT POSITION";
    }
    
    POINTSARR.generatePoints();
    EDGESARR.addEdges();
    drawPointsAndEdges();

}

function getCoords() {

    let coords = "";

    for (let i = 0; i < POINTSARR.length; i++) {
        coords += "(" + POINTSARR[i].x + ", " + POINTSARR[i].y + ")";
        if (i < POINTSARR.length-1){
            coords += ", ";
        }     
    }

    return coords;
}

function getPairs() {
    let pairList = new Array(EDGESARR.length);
    let labelIndex = 0;
    for (let i = 0; i < EDGESARR.length; i++){
        let p1 = PTSLABEL[labelIndex];
        let p2 = PTSLABEL[labelIndex+1];
        labelIndex += 2;
        pairList[i] = "(" + p1 + ", " + p2 + ")";
    }

    return pairList;
}

function isCoordsVisible() {
    
    const coords = document.getElementById("ptCoords");
    const pairs = document.getElementById("ptPairs");
    const button = document.getElementById("coordButton");

    if (coords.style.display === "none") {
        coords.style.display = "block";
        pairs.style.display = "block";
        button.innerHTML = "Hide Coordinates and Pairs";
        coords.innerHTML = getCoords();
        pairs.innerHTML = getPairs().toString();
    } else {
        coords.style.display = "none";
        pairs.style.display = "none";
        button.innerHTML = "Show Coordinates and Pairs";
    }

}

document.getElementById('ptCounter').innerHTML += NRPTS;

document.getElementById('edgeCounter').innerHTML += NREDGES;

document.getElementById('ptCoords').style.display = "none";

document.getElementById('ptPairs').style.display = "none";