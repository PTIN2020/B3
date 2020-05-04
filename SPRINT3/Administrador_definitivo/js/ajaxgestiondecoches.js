
// Enseñar la parte de añadir coche
let abre2 = function(){
    $("#abre2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("modif2").style.display = "none";
       document.getElementById("abre2").style.display = "none";
    })
}

let cierra2 = function(){
   $("#atras2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("modif2").style.display = "block";
       document.getElementById("abre2").style.display = "block";
       let inps = document.getElementsByClassName("inpts2");
       for(item of inps){
           item.value ="";
       }
   })
}

$(document).ready(abre2);
$(document).ready(cierra2);

// Traer datos de la API
function traerDatoscoches() {

    var tabla = document.getElementById("contenidocoches");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/nodes", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response);
            tabla.innerHTML = ' ';
            for (item of datos){
                tabla.innerHTML+= 
                `
                <tr class="okey">
                    <td>${item.id}</td>
                    <td>${item.state}</td>
                    <td>${item.location}</td>
                    
                </tr>` 
            }
        }
    };
};

$(document).ready(traerDatoscoches);

// Añadir coches
function anadir2() {

    var inputs2 = document.getElementsByClassName("inpts2");
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/nodes", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: inputs2[0].value,
        location: inputs2[2].value,
        state: inputs2[1].value
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
    var anade = document.getElementById("anade2");
    anade.addEventListener("click", anadir2);
});