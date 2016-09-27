window.onload = function(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    drawRectangle(context);
    drawCircle(context);
    drawTriangle(context);
}

function getRandomColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    return cssColor = 'rgb(' + r +', ' + g + ',' + b +')';
}

function drawRectangle(ctx){
    ctx.fillStyle = getRandomColor();
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillRect(10, 10, 100, 100);
}
function drawTriangle(ctx){
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 10;
    ctx.fillStyle= getRandomColor();
    ctx.beginPath();
    ctx.moveTo(400,50);
    ctx.lineTo(500,75);
    ctx.lineTo(500,25);
    ctx.fill();
}
function drawCircle(ctx){
    ctx.fillStyle = getRandomColor();
    ctx.strokeStyle = getRandomColor();
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(400,450,120,0,Math.PI*2,true);
    ctx.stroke();
    ctx.fill();
}
