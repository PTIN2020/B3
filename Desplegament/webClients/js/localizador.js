window.onload = function() {
  var numero=this.localStorage.getItem("localizadorvuelo")
  this.traerDatos(numero)
}


  
function traerDatos(numero) {

    var tabla = document.getElementById("contenidovuelos");
    var localizador = document.getElementById("nidentificador");
    var origen = document.getElementById("aeropuerto_origen");
    var destino = document.getElementById("aeropuerto_destino");
    var origen2 = document.getElementById("aeropuerto_origen2");
    var destino2 = document.getElementById("aeropuerto_destino2");
    var id = $("#inputlocalizador").val();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response)
            tabla.innerHTML = ' ';
            for (item of datos){
                if(numero==item.name){
                    tabla.innerHTML+= 
                    ` <tr>
                        <th>${item.name}</th>
                        <th>${item.seat}</th>
                        <th>${item.date}</th>
                        <th>${item.boarding_time}</th>
                        <th>${item.departure_time}</th>
                        <th>${item.arrival_time}</th>
                        <th>${item.gate.name}</th>
                    </tr>`
                    localizador.innerHTML=item.name;
                    aeropuerto_origen.innerHTML=item.from;
                    aeropuerto_destino.innerHTML=item.to;
                    aeropuerto_origen2.innerHTML=item.from;
                    aeropuerto_destino2.innerHTML=item.to;
                    
                }   
            }
        }
    };
};


function traerDatos2() {

    var tabla = document.getElementById("contenidovuelos");
    var localizador = document.getElementById("nidentificador");
    var origen = document.getElementById("aeropuerto_origen");
    var destino = document.getElementById("aeropuerto_destino");
    var origen2 = document.getElementById("aeropuerto_origen2");
    var destino2 = document.getElementById("aeropuerto_destino2");
    var id = $("#inputlocalizador").val();
    this.localStorage.setItem("localizadorvuelo",id)
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response)
            tabla.innerHTML = ' ';
            for (item of datos){
                if(id==item.name){
                    tabla.innerHTML+= 
                    ` <tr>
                        <th>${item.name}</th>
                        <th>${item.date}</th>
                        <th>${item.boarding_time}</th>
                        <th>${item.departure_time}</th>
                        <th>${item.arrival_time}</th>
                        <th>${item.gate[0].id}</th>
                    </tr>`
                    localizador.innerHTML=item.name;
                    aeropuerto_origen.innerHTML=item.from;
                    aeropuerto_destino.innerHTML=item.to;
                    aeropuerto_origen2.innerHTML=item.from;
                    aeropuerto_destino2.innerHTML=item.to;
                    
                }   
            }
        }
        location.reload();
    };
};




