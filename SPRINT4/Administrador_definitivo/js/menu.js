
// Mostrar boton de añadir
let botonescondido = document.getElementById("botoneshead");
let token = JSON.parse(sessionStorage.getItem("token"));

let xhttp = new XMLHttpRequest;
xhttp.open('GET', 'http://localhost:3000/api/privateAn', true);
xhttp.setRequestHeader("miclavesecreta", token.token);
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        botonescondido.innerHTML+= `<a id ="afeg" href="./anadirTrabajadores.html" style="text-decoration: underline;"> Añadir trabajadores </a>`
    }
    else if (this.status == 500){
        location.href = "./index.html"
    }
};

$(".tipofiltro").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(p){
    p.stopPropagation();
})
