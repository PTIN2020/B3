

// Mostrar boton de añadir
let botonescondido = document.getElementById("botoneshead");
let opciones = document.getElementById("opciones");
let token = JSON.parse(sessionStorage.getItem("token"));

let xhttp = new XMLHttpRequest;
xhttp.open('GET', 'http://147.83.159.200:35300/api/privateAn', true);
xhttp.setRequestHeader("miclavesecreta", token.token);
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        opciones.innerHTML+= `
        <li class="nav-item c3">
            <a class="nav-link btn3"  data-toggle="tab" id="navegador" href="#coches" > GESTIÓN DE COCHES</a>
        </li>
        <li class="nav-item c1">
            <a class="nav-link btn1" data-toggle="tab" id="navegador" href="#vuelos"> GESTIÓN DE VUELOS</a>
        </li>
        `
        botonescondido.innerHTML+= `<a id ="afeg" href="./anadirTrabajadores.html" style="text-decoration: underline;"> Añadir trabajadores </a>`
    }
    else if(this.readyState == 4 && this.status == 404){
        let datos = JSON.parse(this.response);
        if (datos.job == "Controlador vuelos"){
            opciones.innerHTML+= `<li class="nav-item c1">
            <a class="nav-link btn1" data-toggle="tab" id="navegador" href="#vuelos"> GESTIÓN DE VUELOS</a>
            </li>`
        }
        else{
            opciones.innerHTML+= `<li class="nav-item c3">
            <a class="nav-link btn3"  data-toggle="tab" id="navegador" href="#coches" > GESTIÓN DE COCHES</a>
            </li>`
        }
    }
    else if (this.readyState == 4 && this.status == 500){
        location.href = "./index.html"
    }
};

$(".tipofiltro").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(p){
    p.stopPropagation();
})
