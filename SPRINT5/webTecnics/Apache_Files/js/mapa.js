var ctx = document.getElementById("canvas").getContext("2d");
var filtro = document.getElementsByClassName("filtro");
var imgpass = new Image;
var imgdisp = new Image;
var imgocup = new Image;
var imgparada = new Image;
imgpass.src = "./img/pngwing.com.png";
imgdisp.src = "./img/cochedisponible.png";
imgocup.src = "./img/cocheocupado.png";
imgparada.src = "./img/cocheenparada.png";
var coches = []
var pasajeros = []

nodes_mapa(filtro[0].checked);
passengers_mapa(filtro[0].checked);

function nodes_mapa(booleano){
    if(booleano){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://147.83.159.200:35300/api/nodes", true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.response);
                for(item of datos){
                    coches.push({
                        name: item.id,
                        x: item.location_x,
                        y: item.location_y
                    });
                    drawCoordinates(item.location_x, item.location_y, item.state);
                }
            }
        }
    }// this code is executed every 3000 milliseconds:
}

function passengers_mapa(booleano){
    if(booleano){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://147.83.159.200:35300/api/passengers", true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.response);
                for(item of datos){
                    pasajeros.push({
                        name: item.id,
                        x: item.location_x,
                        y: item.location_y
                    });
                    drawCoordinatesPass(item.location_x, item.location_y);
                }
            }
        }
    }
}

function drawCoordinates(x,y,state){

    if(state == 1){
        ctx.drawImage(imgdisp , x ,y , 30,30);
    }
    else if(state == 2){
        ctx.drawImage(imgocup,x ,y, 30,30);
    }
    else if(state == 4){
        ctx.drawImage(imgparada,x ,y, 30,30);
    }
}

function drawCoordinatesPass(x,y){
    ctx.drawImage(imgpass,x ,y, 25,25)
}

$( document ).ready(function(){
        let bool1 = new Boolean (false);
        let bool2 = new Boolean (false);
        for(var i=0; i<filtro.length; ++i){
            filtro[i].addEventListener("click", function(){ 
                if(filtro[0].checked == true){
                    bool1 = true;
                    bool2 = true;
                    nodes_mapa(bool1);
                    passengers_mapa(bool2);
                }
                else if(filtro[1].checked==true){
                    bool1= true;
                    bool2 = false;
                    nodes_mapa(bool1);
                    passengers_mapa(bool2);
                }
                else if(filtro[2].checked==true){
                    bool1 = false;
                    bool2 = true;
                    nodes_mapa(bool1);
                    passengers_mapa(bool2);
                }
            }) 
        }
        setInterval(function() {
            nodes_mapa(bool1);
            passengers_mapa(bool2);
        }, 5000);
});

document.getElementById("canvas").addEventListener("click", function(evt){
        let mouse = oMousePos(this,evt);
        let info = document.getElementById("informacion")
        info.style.visibility = "visible"
        info.innerHTML = `${coches[0].name}`
        let menor= {
            x:1000,
            y:1000
        }
        let elemento = ""
        for(var i= 0; i<pasajeros.length; ++i){
            let comprobacion = distancia_entre_puntos(mouse, pasajeros[i]);
            if(menor.x> comprobacion.restax && menor.y> comprobacion.restay){
                menor.x = comprobacion.restax;
                menor.y = comprobacion.restay;
                elemento = pasajeros[i].name
            }
        }
        for(var i= 0; i<coches.length; ++i){
            let comprobacion = distancia_entre_puntos(mouse, coches[i]);
            if(menor.x> comprobacion.restax && menor.y> comprobacion.restay){
                menor.x = comprobacion.restax;
                menor.y = comprobacion.restay;
                elemento = coches[i].name
            }
        }
        info.innerHTML = `Elemento seleccionado: ${elemento}`
})

function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
      return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
}

function distancia_entre_puntos(click, coche){
    let distanciaX = click.x - coche.x;
    let distanciaY = click.y - coche.y;
    return{
        restax: Math.abs(distanciaX),
        restay: Math.abs(distanciaY)
    }
}
