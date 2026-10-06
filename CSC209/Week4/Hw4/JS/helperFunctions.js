// creates a random coord from 1 to max
function generateRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

// creates a 2D array of (x,y) coords for points
function generateCoordinates(numPts, isRand) {
    
    const pointsCoords = new Array(numPts)

    if (isRand) {
        for (let i = 0; i < pointsCoords.length; i++) {
            let x = generateRandomInt(WIDTH-25);
            let y = generateRandomInt(HEIGHT-25);
            pointsCoords[i] = new Array(x,y);
        }   
    } else {
         // number of rows of points
        let numRows = pointsCoords.length / 4;

        // max x-coord and max y-corrd
        let maxY = HEIGHT - 100;
        let maxX = WIDTH - 100;

        // the change between x-coord and y-coords
        let dy = (maxY - 100)/numRows + RADIUS;
        let dx = (maxX -100)/4 + RADIUS;

        // position of first point
        let yPostiton = 100;
        let xPosition = 100;

        // points array index
        let pointIndex = 0;

        for (let i = 0; i < numRows; i++){ // for each row
            for (let j = 0; j < 4; j++){ // create 4 evenly placed points in row
                if (pointIndex < pointsCoords.length) { // create point as long as there's space in array
                    pointsCoords[pointIndex] = new Array(Math.trunc(xPosition), Math.trunc(yPostiton)); // creates [x,y]
                    xPosition += dx; // updates x position
                    pointIndex += 1; // updates pts array index
                } else { // when array is filled, break
                    break
                }
            }
            xPosition = 100; // reset x positon
            yPostiton += dy; // updates y position for new row
        }
    }

    return pointsCoords;
}

// finds the midpoint between two points
function findMidpoint(p1, p2) {
    let x = (p1.x + p2.x) / 2;
    let y = (p1.y + p2.y) / 2;
    
    return new Array(x, y);
}

// returns an array with ints 1 to numPts ordered
function generateLabels(numPts, isRandom) {
    const pointsLabel = new Array(numPts);
    let label;

    for (let i = 0; i < numPts; i++){

        if (isRandom) {
            label = generateRandomInt(numPts);

            while (pointsLabel.includes(label)) {
                label = generateRandomInt(numPts);
            }
        } else {
            label = i+1;
        }

        pointsLabel[i] = label;
    }

    return pointsLabel;
}