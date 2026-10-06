class Point {
    constructor(x , y) {
        this.x = x;
        this.y = y;
        this.isLabeled = true;
    }

    draw(ctx, number) {
        ctx.strokeStyle = PTCOLOR;
        ctx.fillStyle = LABELCOLOR;
        ctx.font = TEXTFONT;
        ctx.beginPath();
        ctx.arc(this.x, this.y, RADIUS, 0, 2 * Math.PI);
        if (this.isLabeled){
            ctx.fillText(number, this.x-3, this.y+3);
        }
        ctx.stroke();
    }
}

class Points extends Array {
    
    constructor(numPoints) { //constructor for points array
        super(numPoints); // length of array
        this.isLabeled = true;
        this.isDrawn = false;
        this.isRandomized = false;
        this.isScattered = false;
    }

    generatePoints() {

       const pointCoords = generateCoordinates(this.length, this.isScattered);

       for (let i = 0; i < this.length; i++) {
        this[i] = new Point(pointCoords[i][0], pointCoords[i][1]);
       }

    }

    draw(ctx, ptsLabels) { // draws points on canvas
        
        this.isDrawn = true;

        // randomizes the order of the labels
        if (this.isRandomized) {

            for (let i = 0; i < this.length; i++){
                this[i].isLabeled = this.isLabeled;
                this[i].draw(ctx, ptsLabels[i]);
            }
        } else {
            for (let i = 0; i < this.length; i++){
                this[i].isLabeled = this.isLabeled;
                this[i].draw(ctx, i+1);
            }
        }
        
    }
}

class Edge {
    constructor(pointA, pointB) {
        this.pA = pointA;
        this.pB = pointB;
        this.isLabeled = true;
    }

    draw(ctx, number) {

        ctx.strokeStyle = EDGECOLOR;
        ctx.beginPath();
        ctx.moveTo(this.pA.x, this.pA.y);
        ctx.lineTo(this.pB.x, this.pB.y);
        ctx.closePath();
        
        if (this.isLabeled){ // decides if edge should be labeled
            ctx.fillText(number, findMidpoint(this.pA, this.pB)[0], findMidpoint(this.pA, this.pB)[1]);
        }

        ctx.stroke();
    }
}

class Edges extends Array {
    constructor(points) {
        super(Math.trunc(points.length / 2));
        this.points = points;
        this.isDrawn = false;
        this.isLabeled = true;
    }

    addEdges() {
        
        let j = 0; // index for points array

        for (let i = 0; i < this.length; i++) {
            this[i] = new Edge(this.points[j], this.points[j+1]);
            j += 2;
        }
    }

    draw(ctx) {
        this.isDrawn = true;
        
        console.log("edges labeled: " + this.isLabeled);
        
        for (let i = 0; i < this.length; i++) {
            this[i].isLabeled = this.isLabeled;
            this[i].draw(ctx, i+1);
        }
    }
}
