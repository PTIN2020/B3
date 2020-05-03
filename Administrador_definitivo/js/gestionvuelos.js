
// Enseñar la parte de añadir
 let abre = function(){
     $("#abre").click(function(ev){
        ev.preventDefault();
        let $element= $(this).parent().prev();
        $element.css("display", "flex");
        document.getElementById("modif").style.display = "none";
        document.getElementById("abre").style.display = "none";
     })
 }

 let cierra = function(){
    $("#atras").click(function(ev){
        ev.preventDefault();
        let $element= $(this).parent().parent();
        $element.css("display", "none");
        document.getElementById("modif").style.display = "block";
        document.getElementById("abre").style.display = "block";
        let inps = document.getElementsByClassName("inpts");
        for(item of inps){
            item.value ="";
        }
    })
 }
 
 $(document).ready(abre);
 $(document).ready(cierra);

// Rellenar la tabla desde la bbdd
function traerDatos() {

    var tabla = document.getElementById("contenido");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response)
            tabla.innerHTML = ' ';
            for (item of datos){
                tabla.innerHTML+= `
                <tr class="okey">
                    <td>${item.name}</td>
                    <td>${item.seat}</td>
                    <td>${item.departure_time}</td>
                    <td>${item.arrival_time}</td>
                <tr>
                `
            }
        }
    };
};

$(document).ready(traerDatos);

// Añadir vuelos a la base de datos
function anadir() {

    var inputs = document.getElementsByClassName("inpts");
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/flights", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs[0].value,
        from: inputs[3].value,
        to: inputs[3].value,
        boarding_time: inputs[6].value,
        departure_time: inputs[4].value,
        arrival_time: inputs[5].value,
        seat: inputs[1].value,
        date: inputs[7].value,
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
            location.reload();
        }
        else{
            console.log(this.response);
        }
    };
};

$(document).ready(function(){
    var anade = document.getElementById("anade");
    anade.addEventListener("click", anadir);
});

// Modificar estado e información de los vuelos.
/*function modificar() {
    let okey = document.getElementsByClassName("okey");

    okey.className = "nokey";
    location.reload();
};

$(document).ready(function(){
    var mod = document.getElementById("modif");
    mod.addEventListener("click", modificar);
});*/