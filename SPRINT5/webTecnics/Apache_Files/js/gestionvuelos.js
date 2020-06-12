
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
        document.getElementById("alerta2").style.display ="none";
        document.getElementById("alerta3").style.display ="none";
        document.getElementById("alerta4").style.display ="none";
        let inputs = document.getElementsByClassName("inpts");
        let fecha = document.getElementsByClassName("fecha");
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
        inputs[10].value="5";
        fecha[0].value ="13";
        fecha[1].value = "13";
        fecha[2].value = "31";
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
       document.getElementById("alerta2").style.display ="none";
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
    xhttp.open("GET", "http://147.83.159.200:35300/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            infovuelos = JSON.parse(this.response);
            tabla.innerHTML = ' ';
            for (item of infovuelos){
                if(item.state == "En hora"){
                    tabla.innerHTML+= `
                    <tr class="enhora">
                        <td>${item.name}</td>
                        <td>${item.airline}</td>
                        <td>
                            <select class="modificacionavi decorated custom-select"> 
                                <option value="1" selected>En hora</option>
                                <option value="2">Cancelado</option>
                                <option value="3">Con retraso</option>
                            </select>
                        </td>
			            <td>${item.type}</td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
                if(item.state == "Cancelado"){
                    tabla.innerHTML+= `
                    <tr class="cancelado">
                        <td>${item.name}</td>
                        <td>${item.airline}</td>
                        <td>
                            <select class="modificacionavi decorated custom-select"> 
                                <option value="1">En hora</option>
                                <option value="2" selected>Cancelado</option>
                                <option value="3">Con retraso</option>
                            </select>
                        </td>
			            <td>${item.type}</td>
                        <td>${item.boarding_time}</td>
                        <td>${item.departure_time}</td>
                        <td>${item.arrival_time}</td>
                        <td>${item.gate.name}</td>
                    <tr>
                    `
                }
                if(item.state == "Con retraso"){
                    tabla.innerHTML+= `
                    <tr class="conretraso">
                        <td>${item.name}</td>
                        <td>${item.airline}</td>
                        <td>
                            <select class="modificacionavi decorated custom-select"> 
                                <option value="1">En hora</option>
                                <option value="2">Cancelado</option>
                                <option value="3" selected>Con retraso</option>
                            </select>
                        </td>
			            <td>${item.type}</td>
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

$(document).ready(traerDatos);

// Modificar vuelos
function modificavuelo(vola){
    for(var i= 0; i<vola.length; ++i){
        console.log(vola[i].name)
        let xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "http://147.83.159.200:35300/api/flights", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify({
            name : vola[i].name,
            state: vola[i].state
        }));
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $("#tablavuelos").load(traerDatos());
            }
        }
    }
}

$(document).ready(function(){
    document.getElementById("modif").addEventListener("click", function(){
        const vola = document.getElementsByClassName("modificacionavi");
        let cambia = 0;
        let idvuelo = [];
        let nombresvuelos = []
        let i = 0;
        for(item of infovuelos){
            let x = vola[i].selectedIndex
            if(vola[i].options[x].text != item.state){
                let envia = {
                    name: item.name,
                    state: vola[i].options[x].text
                }
                idvuelo.push(envia);
                nombresvuelos.push(item.name)
                cambia = 1;
            }
            ++i;
        }
        if(cambia){
            if(nombresvuelos.length ==1){
                swal({
                    title: "¿Estás seguro de que quieres modificar el estado de este vuelo?"+ " "+ nombresvuelos[0],
                    icon: "warning",
                    buttons: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        modificavuelo(idvuelo);
                        swal("El estado del vuelo se ha modificado correctamente", {
                            icon: "success",
                        });
                    }
                    else{
                        $("#tablavuelos").load(traerDatos());
                    }
                  });
            }
            else{
                swal({
                    title: "¿Estás seguro de que quieres modificar el estado de estos vuelos?"+ " "+ nombresvuelos.join("\n"),
                    icon: "warning",
                    buttons: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        modificavuelo(idvuelo);
                        swal("El estado de los respectivos vuelos se han modificado correctamente", {
                            icon: "success",
                        });
                    }
                    else{
                        $("#tablavuelos").load(traerDatos());
                    }
                  });
            }
        }
    });
});

// Añadir vuelos a la base de datos
function anadir() {

    let inputs = document.getElementsByClassName("inpts");
    let fecha = document.getElementsByClassName("fecha");
    let x1 = fecha[0].selectedIndex;
    let x2 = fecha[1].selectedIndex;
    let x3 = fecha[2].selectedIndex;
    let fecha_final = `${fecha[0].options[x1].text}-${fecha[1].options[x2].text}-${fecha[2].options[x3].text}`
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://147.83.159.200:35300/api/flights", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs[0].value,
        airline: inputs[1].value,
        from: inputs[2].value,
        to: inputs[3].value,
        departure_time: inputs[4].value,
        arrival_time: inputs[5].value,
        boarding_time: inputs[6].value,
        date: fecha_final,
        gate:{
            name: inputs[7].value,
            location_x: inputs[8].value,
            location_y:inputs[9].value
        },
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
            fecha[0].value ="13";
            fecha[1].value = "13";
            fecha[2].value = "31"
            document.getElementById("alerta2").style.display ="none";
            document.getElementById("alerta3").style.display ="none";
            document.getElementById("alerta4").style.display ="none";
            document.getElementById("filtrovuelos").value="0";
            $("#tablavuelos").load(traerDatos());
        }
        else if(this.readyState == 4 && this.status == 500){
            document.getElementById("alerta2").style.display ="block";
        }
        else if(this.readyState == 4 && this.status == 404){
            document.getElementById("alerta3").style.display ="block";
        }
        else if(this.readyState == 4 && this.status == 403){
            document.getElementById("alerta4").style.display ="block";
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
    xhttp.open("DELETE", "http://147.83.159.200:35300/api/flights", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs4.value
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            inputs4.value =""
            document.getElementById("alerta2").style.display ="none";
            $("#tablavuelos").load(traerDatos());
        }
        else if(this.readyState == 4 && this.status != 200){
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

// Filtro vuelos
function cambia_vuelos(){
    let enhora= document.getElementsByClassName("enhora");
    let cancelado = document.getElementsByClassName("cancelado");
    let conretraso = document.getElementsByClassName("conretraso");
    let select= document.getElementById("filtrovuelos");
    let x = select.selectedIndex;
    if(select.options[x].text== "Cancelado"){
        for(var i =0 ; i<cancelado.length; ++i){
            cancelado[i].style.display =""
        }
        for(var i =0 ; i<enhora.length; ++i){
            enhora[i].style.display ="none"
        }
        for(var i =0 ; i<conretraso.length; ++i){
            conretraso[i].style.display ="none"
        }
    }
    else if(select.options[x].text== "En hora"){
        for(var i =0 ; i<cancelado.length; ++i){
            cancelado[i].style.display ="none"
        }
        for(var i =0 ; i<enhora.length; ++i){
            enhora[i].style.display =""
        }
        for(var i =0 ; i<conretraso.length; ++i){
            conretraso[i].style.display ="none"
        }
    }
    else if(select.options[x].text== "Con retraso"){
        for(var i =0 ; i<cancelado.length; ++i){
            cancelado[i].style.display ="none"
        }
        for(var i =0 ; i<enhora.length; ++i){
            enhora[i].style.display ="none"
        }
        for(var i =0 ; i<conretraso.length; ++i){
            conretraso[i].style.display =""
        }
    }
    else if(select.options[x].text== "Todos"){
        for(var i =0 ; i<cancelado.length; ++i){
            cancelado[i].style.display =""
        }
        for(var i =0 ; i<enhora.length; ++i){
            enhora[i].style.display =""
        }
        for(var i =0 ; i<conretraso.length; ++i){
            conretraso[i].style.display =""
        }
    }
}

$(document).ready(function(){
    let botonfiltro = document.getElementById("cambiavuelos");
    botonfiltro.addEventListener("click", cambia_vuelos);
})