window.onload = function() {
    
    var c = document.getElementById("main");
    window.ctx = c.getContext("2d"); // Dealing with a global context is easier
    
    //draw();
    
    animate();
    
} // window.onload



// Let's create a draw function for the canvas
function draw() {
    window.ctx.Style = "#000000";
    var grd = window.ctx.createRadialGradient(130,130,50,130,130,70.7);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    window.ctx.fillStyle=grd;
    window.ctx.fillRect(80,80,100,100);
    window.ctx.beginPath();
    window.ctx.arc(130,80,50,Math.PI,2*Math.PI,false);
    window.ctx.stroke();
    window.ctx.beginPath();
    window.ctx.moveTo(80,180);
    window.ctx.lineTo(130,266.6);
    window.ctx.lineTo(180,180);
    window.ctx.stroke();
    // Draw here

}
var x = 130;
var y = 130;
var right = true;
// Let's animate!
function animate() {
    
    // Always clear the canvas after drawing each frame
    window.ctx.clearRect(0, 0, 640, 480);

    // Draw here, including conditionals
        window.ctx.Style = "#000000";
        var grd = window.ctx.createRadialGradient(x,y,50,x,y,70.7);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        window.ctx.fillStyle=grd;
        window.ctx.fillRect(x-50,y-50,100,100);
        window.ctx.beginPath();
        window.ctx.arc(x,y-50,50,Math.PI,2*Math.PI,false);
        window.ctx.stroke();
        window.ctx.beginPath();
        window.ctx.moveTo(x-50,y+50);
        window.ctx.lineTo(x,y+136.6);
        window.ctx.lineTo(x+50,y+50);
        window.ctx.stroke();

    if(x + 50 >= 480){
        right = false;
    }
    else if (x - 50 <= 0){
        right = true;
    }

    if (right) {
        x = x + 2;
    }
    else {
        x = x - 2;
    }

    // This will run animate() every 33 ms
    setTimeout(animate, 33);
}