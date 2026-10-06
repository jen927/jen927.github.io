function drawPointsAndEdges() {
    
    ctx.fillStyle = BACKGROUNDCOLOR;
    ctx.fillRect(0,0, WIDTH+100,HEIGHT+100);

    if (POINTSARR.isDrawn){
        POINTSARR.draw(ctx, PTSLABEL);
    }
    if (EDGESARR.isDrawn){
        EDGESARR.draw(ctx);
    }
}