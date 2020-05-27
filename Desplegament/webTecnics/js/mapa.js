/*var ctx = document.getElementById("canvas").getContext("2d");
var pointSize = 5;

function mapa(){
    setInterval(function() { // this code is executed every 3000 milliseconds:
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://147.83.159.200:35300/api/nodes", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.response);
            for(item of datos){
                drawCoordinates(item.location_x, item.location_y, item.state);
            }
        }
    }
    }, 3000);
}

function drawCoordinates(x,y,state){

    if(state == 0){
        ctx.fillStyle = "#ff2626"; // Red color
    }
    else if(state == 1){
        ctx.fillStyle = "#00FF33";
    }
    else if(state == 2){
        ctx.fillStyle = "#fd9800";
    }
    else{
        ctx.fillStyle = "#E0D90D";
    }
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

$( document ).ready(mapa);*/
