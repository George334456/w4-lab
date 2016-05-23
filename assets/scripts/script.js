window.onload = function() {
    
    var c = document.getElementById("main");
    var ctx = c.getContext("2d");
    
    draw();
    
    //animateO;
    
} // window.onload



// Let's create a draw function for the canvas
function draw () {
    
    // Draw here
    
}


// Let's animate!
function animate() {
    
    // Always clear the canvas after drawing each frame
    ctx.clearRect(0, 0, 640, 480);
    
    // Draw here, including conditionals
    
    // This will run animate() every 33 ms
    setTimeout(animate, 33);
}