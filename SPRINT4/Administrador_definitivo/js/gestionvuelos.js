
// Enseñar la parte de añadir vuelo
 let abre = function(){
     $("#abre").click(function(ev){
        ev.preventDefault();
        let $element= $(this).parent().prev().prev();
        $element.css("display", "flex");
        document.getElementById("modif").style.display = "none";
        document.getElementById("abre").style.display = "none";
        document.getElementById("elimina2").style.display = "none";
     })
 }

 let cierra = function(){
    $("#atras").click(function(ev){
        ev.preventDefault();
        let $element= $(this).parent().parent();
        $element.css("display", "none");
        document.getElementById("modif").style.display = "block";
        document.getElementById("abre").style.display = "block";
        document.getElementById("elimina2").style.display = "block";
        let inps = document.getElementsByClassName("inpts");
        for(item of inps){
            item.value ="";
        }
    })
 }
 
 $(document).ready(abre);
 $(document).ready(cierra);

// Enseñar la parte de eliminar vuelo
let abre4 = function(){
    $("#elimina2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("modif").style.display = "none";
       document.getElementById("abre").style.display = "none";
       document.getElementById("elimina2").style.display = "none";
    })
}

let cierra4 = function(){
   $("#atras4").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("modif").style.display = "block";
       document.getElementById("abre").style.display = "block";
       document.getElementById("elimina2").style.display = "block";
       let inps = document.getElementById("inpts3");
       inps.value=""
   })
}

$(document).ready(abre4);
$(document).ready(cierra4);

// Rellenar la tabla desde la bbdd
var infovuelos
function traerDatos() {

    var tabla = document.getElementById("contenido");

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            infovuelos = JSON.parse(this.response)
            tabla.innerHTML = ' ';
            for (item of infovuelos){
                if(item.state == "Repostando"){
                    tabla.innerHTML+= `
                    <tr class="cargando">
                        <td>${item.name}</td>
                        <td>${item.seat}</td>
                        <td>
                            <select class="modificacionavi decorated" style="color:black;"> 
                                <option value="0" selected> Repostando</option>
                                <option value="1"> Disponible</option>
                                <option value="2"> Averiado</option>
                                <option value="3"> Volando</option>
                            </select>
                        </td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
                if(item.state == "Disponible"){
                    tabla.innerHTML+= `
                    <tr class="okey">
                        <td>${item.name}</td>
                        <td>${item.seat}</td>
                        <td>
                            <select class="modificacionavi decorated"> 
                                <option value="0"> Repostando</option>
                                <option value="1" selected> Disponible</option>
                                <option value="2"> Averiado</option>
                                <option value="3"> Volando</option>
                            </select>
                        </td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
                if(item.state == "Averiado"){
                    tabla.innerHTML+= `
                    <tr class="nokey">
                        <td>${item.name}</td>
                        <td>${item.seat}</td>
                        <td>
                            <select class="modificacionavi decorated"> 
                                <option value="0"> Repostando</option>
                                <option value="1"> Disponible</option>
                                <option value="2" selected> Averiado</option>
                                <option value="3"> Volando</option>
                            </select>
                        </td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
                if(item.state == "Volando"){
                    tabla.innerHTML+= `
                    <tr class="ocupado">
                        <td>${item.name}</td>
                        <td>${item.seat}</td>
                        <td>
                            <select class="modificacionavi decorated"> 
                                <option value="0"> Repostando</option>
                                <option value="1"> Disponible</option>
                                <option value="2"> Averiado</option>
                                <option value="3" selected> Volando</option>
                            </select>
                        </td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
            }
        }
    };
};

// Modificar vuelos
function modificavuelo(){
    const vola = document.getElementsByClassName("modificacionavi");
    let cambia = 0;
    let idvuelo = [];
    let i = 0;
    for(item of infovuelos){
        let x = vola[i].selectedIndex
        console.log(vola[i].options[x].text)
        if(vola[i].options[x].text != item.state){
            idvuelo.push(item.name);
            cambia = 1;
            let xhttp = new XMLHttpRequest();
            xhttp.open("PUT", "http://localhost:3000/api/flights", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
           /* if(vola[i].options[x].text == "Repostando"){
                xhttp.send(JSON.stringify({
                    name : item.name,
                    state: vola[i].options[x].text,
                    gate:{
                        name: "-",
                        location_x: "-",
                        location_y: "-"
                    }
                }));
            }*/
            //else{
                xhttp.send(JSON.stringify({
                    name : item.name,
                    state: vola[i].options[x].text
                }));
            //}
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
        if(idvuelo.length != 1){
            mensaje = confirm("¿Estás seguro de que quieres modificar el estado de estos vuelos?\n"+ idvuelo.join("\n"));
        }
        else{
            mensaje = confirm("¿Estás seguro de que quieres modificar el estado de este vuelo?\n"+ idvuelo.join("\n"));
        }
        if(mensaje){
            $("#tablavuelos").load(traerDatos());
        }
    }
}

$(document).ready(function(){
    document.getElementById("modif").addEventListener("click", modificavuelo);
});

$(document).ready(traerDatos);

// Añadir vuelos a la base de datos
function anadir() {

    var inputs = document.getElementsByClassName("inpts");
    let x = inputs[11].selectedIndex
    let slect = inputs[11].options[x].text
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/api/flights", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs[0].value,
        seat: inputs[1].value,
        from: inputs[2].value,
        to: inputs[3].value,
        departure_time: inputs[4].value,
        arrival_time: inputs[5].value,
        boarding_time: inputs[6].value,
        date: inputs[7].value,
        gate:{
            name: inputs[8].value,
            location_x: inputs[9].value,
            location_y:inputs[10].value
        },
        state: slect
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            inputs[0].value ="";
            inputs[1].value="";
            inputs[2].value="";
            inputs[3].value="";
            inputs[4].value="";
            inputs[5].value ="";
            inputs[6].value="";
            inputs[7].value="";
            inputs[8].value="";
            inputs[9].value="";
            inputs[10].value="";
            inputs[11].value="5";
            $("#tablavuelos").load(traerDatos());
        }
        else if(this.status != 200){
            document.getElementById("alerta2").style.display ="block";
        }
    };
};

$(document).ready(function(){
    var anade = document.getElementById("anade");
    anade.addEventListener("click", anadir);
});

// Eliminar vuelos
function eliminarvuelos() {

    var inputs4 = document.getElementById("inpts4");
    
    let xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/flights", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs4.value
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
            inputs4.value =""
            $("#tablavuelos").load(traerDatos());
        }
        else if(this.status != 200){
            document.getElementById("alerta2").style.display ="block";
        }
    };
};

$(document).ready(function(){
    var elimina2 = document.getElementById("elimina3");
    elimina2.addEventListener("click", function(){
        let mensaje = confirm("¿Estás seguro de que quieres eliminar este vuelo?")
        if(mensaje){
            eliminarvuelos()
        }
    });
});