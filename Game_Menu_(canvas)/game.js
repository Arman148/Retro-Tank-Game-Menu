function one_player () {
    
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 30, 20);
context.fillStyle = "#FF0000";
context.fillRect(xPos, yPos, 30, 20);
context.stroke();



function move (e) {
    
    if(e.keyCode == 87) {
        yPos -= 5;
    }
    if(e.keyCode == 65) {
        xPos -= 5;
    }
    if(e.keyCode == 83) {
        yPos += 5;
    }
    if(e.keyCode == 68) {
        xPos += 5;
    }

    canvas.width = canvas.width;
    context.rect(xPos, yPos, 30, 20);
    context.fillStyle = "#FF0000";
    context.fillRect(xPos, yPos, 30, 20);
    context.stroke();
}

document.onkeydown = move;
}


function two_player () {
       
var canvas = document.getElementById("myCanvas");
var ctx1 = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");


var xPos1 = 0;
var yPos1 = 0;


var xPos2 = 60;
var yPos2 = 60;

ctx1.rect(xPos1, yPos1, 30, 20);
ctx1.fillStyle = "#FF0000";
ctx1.fillRect(xPos1, yPos1, 30, 20);
ctx1.stroke();


ctx2.rect(xPos2, yPos2, 30, 20);
ctx2.fillStyle = "#7CFC00";
ctx2.fillRect(xPos2, yPos2, 30, 20);
ctx2.stroke();

function move (e) {    
    if(e.keyCode == 87) {
        yPos1 -= 5;
    }
    if(e.keyCode == 65) {
        xPos1 -= 5;
    }
    if(e.keyCode == 83) {
        yPos1 += 5;
    }
    if(e.keyCode == 68) {
        xPos1 += 5;
    }

    
    if(e.keyCode == 73) {
        yPos2 -= 5;
    }
    if(e.keyCode == 74) {
        xPos2 -= 5;
    }
    if(e.keyCode == 75) {
        yPos2 += 5;
    }
    if(e.keyCode == 76) {
        xPos2 += 5;
    }
    

    canvas.width = canvas.width;
    ctx1.rect(xPos1, yPos1, 30, 20);
    ctx1.fillStyle = "#FF0000";
    ctx1.fillRect(xPos1, yPos1, 30, 20);
    ctx2.rect(xPos2, yPos2, 30, 20);
    ctx2.fillStyle = "#7CFC00";
    ctx2.fillRect(xPos2, yPos2, 30, 20);
    ctx1.stroke(); 
    ctx2.stroke();
    
}

document.onkeydown = move;
} 

