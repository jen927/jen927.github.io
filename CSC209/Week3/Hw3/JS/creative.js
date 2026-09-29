 // ------- variables -------
let canvas = document.getElementById("canvasCup");
let graphics = canvas.getContext("2d");
const backgroundColor = "rgba(255, 153, 153, 255)";
const tableColor = "rgba(204, 229, 255, 255)";
const cupColor = "rgba(224, 224, 224, 255)";
const drinkColor = "rgba(102, 50, 0, 255)"

function Rectangle(x,y,h,w,color,s) {
    this.x = x; // x coord
    this.y = y; // y coord
    this.h = h; // height
    this.w = w; // width
    this.s = s; // scale factor
    this.color = color; // fill color
    
    // renders rectangle
    this.draw = function draw(graphics) { 
        graphics.fillStyle = this.color;
        graphics.fillRect(this.x,this.y,this.w,this.h);
    }
}

 function Cup(x,y,h,w,color) {
    this.x = x; // x coord
    this.y = y; // y coord
    this.h = h; // height
    this.w = w; // width
    this.color = color; // color of cup
    this.draw = function draw(graphics) { // draws cup and colors it
        graphics.strokeStyle = "black";
        graphics.beginPath();
        graphics.moveTo(this.x, this.y);
        graphics.lineTo(this.x+(this.w/2), this.y);
        graphics.lineTo(this.x+(3*this.w/4), this.y - this.h);
        graphics.lineTo(this.x-(this.w/4), this.y - this.h);
        graphics.lineTo(this.x, this.y);
        graphics.fillStyle = this.color;
        graphics.fill();
        graphics.stroke();
    }
}

// background
const background = new Rectangle(0,0,250, 450, backgroundColor, 1);
        
// table
const table = new Rectangle(0,250,100, 450, tableColor, 1);

const coffeeCup = new Cup(190, 250, 114, 150, cupColor);

background.draw(graphics);
table.draw(graphics);
coffeeCup.draw(graphics);