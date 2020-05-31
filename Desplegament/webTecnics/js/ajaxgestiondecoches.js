
// Enseñar la parte de añadir coche
let abre2 = function(){
    $("#abre2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev().prev();
       $element.css("display", "flex");
       document.getElementById("modif2").style.display = "none";
       document.getElementById("abre2").style.display = "none";
       document.getElementById("elimina").style.display = "none";
    })
}

let cierra2 = function(){
   $("#atras2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("modif2").style.display = "block";
       document.getElementById("abre2").style.display = "block";
       document.getElementById("elimina").style.display = "block";
       document.getElementById("alerta").style.display ="none";
       let inps = document.getElementsByClassName("inpts2");
       for(item of inps){
           if(item == inps[1]){
               item.value="5"
           }
           else{
               item.value ="";
           }
       }
   })
}

$(document).ready(abre2);
$(document).ready(cierra2);

// Enseñar la parte de eliminar coche
let abre3 = function(){
    $("#elimina").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("modif2").style.display = "none";
       document.getElementById("abre2").style.display = "none";
       document.getElementById("elimina").style.display = "none";
    })
}

let cierra3 = function(){
   $("#atras3").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("modif2").style.display = "block";
       document.getElementById("abre2").style.display = "block";
       document.getElementById("elimina").style.display = "block";
       document.getElementById("alerta").style.display ="none";
       let inps = document.getElementById("inpts3");
       inps.value=""
   })
}

$(document).ready(abre3);
$(document).ready(cierra3);

// Traer datos de la API
var info
function traerDatoscoches() {

    let tabla = document.getElementById("contenidocoches");

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://147.83.159.200:35300/api/nodes", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.response);
            tabla.innerHTML = ' ';
            for (item of info){
                if(item.state == 0){
                    tabla.innerHTML+= 
                    `
                    <tr class="nokey">
                        <td>${item.id}</td>
                        <td>
                        <select class="modificacion decorated custom-select"> 
                            <option value="0" selected> No disponible</option>
                            <option value="1"> Disponible</option>
                            <option value="2"> Ocupado</option>
                            <option value="3" > Cargando</option>
                        </select></td>
                        <td> Position X: ${item.location_x} Position Y: ${item.location_y} </td>
                        
                    </tr>` 
                }
                if(item.state == 1){
                    tabla.innerHTML+= 
                    `
                    <tr class="okey">
                        <td>${item.id}</td>
                        <td>
                        <select class ="modificacion decorated custom-select"> 
                            <option value="0"> No disponible</option>
                            <option value="1" selected> Disponible</option>
                            <option value="2"> Ocupado</option>
                            <option value="3" > Cargando</option>
                        </select></td>
                        <td> Position X: ${item.location_x} Position Y: ${item.location_y} </td>
                        
                    </tr>` 
                }
                if(item.state == 2){
                    tabla.innerHTML+= 
                    `
                    <tr class="ocupado">
                        <td>${item.id}</td>
                        <td>
                        <select class="modificacion decorated custom-select"> 
                            <option value="0"> No disponible</option>
                            <option value="1"> Disponible</option>
                            <option value="2" selected> Ocupado</option>
                            <option value="3" > Cargando</option>
                        </select></td>
                        <td> Position X: ${item.location_x} Position Y: ${item.location_y} </td>
                        
                    </tr>` 
                }
                if(item.state == 3){
                    tabla.innerHTML+= 
                    `
                    <tr class="cargando">
                        <td>${item.id}</td>
                        <td>
                        <select class="modificacion decorated custom-select "> 
                            <option value="0"> No disponible</option>
                            <option value="1"> Disponible</option>
                            <option value="2"> Ocupado</option>
                            <option value="3" selected> Cargando</option>
                        </select></td>
                        <td> Position X: ${item.location_x} Position Y: ${item.location_y} </td>
                        
                    </tr>` 
                }
            }
        }
    };
};

$(document).ready(traerDatoscoches);

// Modificar coches
// Tenemos la variable info que guarda los datos de los coches.
function modificar(){
    const row = document.getElementsByClassName("modificacion");
    let cambia = 0;
    let idnodo = [];
    let i = 0;
    for(item of info){
        let x = row[i].selectedIndex
        if(row[i].options[x].value != item.state){
            idnodo.push(item.id);
            cambia = 1;
            let xhttp = new XMLHttpRequest();
            xhttp.open("PUT", "http://147.83.159.200:35300/api/nodes", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify({
                id : item.id,
                state: row[i].options[x].value
            }));
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                }
            }
        }
        i++;
    }
    if(cambia){
        let mensaje
        if(idnodo.length != 1){
            mensaje = confirm("¿Estás seguro de que quieres modificar el estado de estos coches?\n"+ idnodo.join("\n"));
        }
        else{
            mensaje = confirm("¿Estás seguro de que quieres modificar el estado de este coche?\n"+ idnodo.join("\n"));
        }
        if(mensaje){
            $("#coches").load(traerDatoscoches());
        }
    }
};

$(document).ready(function(){
    document.getElementById("modif2").addEventListener("click", modificar);
});

// Añadir coches
function anadir2() {

    var inputs2 = document.getElementsByClassName("inpts2");
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://147.83.159.200:35300/api/nodes", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: inputs2[0].value,
        location_x: inputs2[2].value,
        location_y: inputs2[3].value,
        state: inputs2[1].value,
        destination: inputs2[4].value,
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            inputs2[0].value ="";
            inputs2[2].value="";
            inputs2[3].value="";
            inputs2[1].value="5";
            inputs2[4].value="";
            document.getElementById("alerta").style.display ="none";
            $("#coches").load(traerDatoscoches());
        }
        else if(this.readyState == 4 && this.status != 200){
            document.getElementById("alerta").style.display ="block";
        }
    };
};

$(document).ready(function(){
    var anade = document.getElementById("anade2");
    anade.addEventListener("click", anadir2);
});

// Eliminar coches
function eliminar() {

    var inputs3 = document.getElementById("inpts3");
    
    let xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://147.83.159.200:35300/api/nodes", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: inputs3.value
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
            document.getElementById("alerta").style.display ="none";
            inputs3.value ="";
            $("#coches").load(traerDatoscoches());
        }
        else if(this.readyState == 4 && this.status != 200){
            document.getElementById("alerta").style.display ="block";
        }
    };
};

$(document).ready(function(){
    var elimina = document.getElementById("elimina1");
    elimina.addEventListener("click", function(){
        let mensaje = confirm("¿Estás seguro de que quieres eliminar este coche?")
        if(mensaje){
            eliminar()
        }
    });
});