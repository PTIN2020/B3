
// Mostrar añadir tienda
let abretienda = function(){
    $("#abretienda").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev().prev();
       $element.css("display", "flex");
       document.getElementById("abretienda").style.display = "none";
       document.getElementById("eliminatienda").style.display = "none";
    })
}

let cierratienda = function(){
   $("#atrastienda").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("abretienda").style.display = "block";
       document.getElementById("eliminatienda").style.display = "block";
       document.getElementById("alerta5").style.display="none"
       let inps = document.getElementsByClassName("inpstiendas");
       for(item of inps){
           item.value =""
       }
   })
}

$(document).ready(abretienda);
$(document).ready(cierratienda);

//Mostrar eliminar tienda
let deletetienda = function(){
    $("#eliminatienda").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("abretienda").style.display = "none";
       document.getElementById("eliminatienda").style.display = "none";
    })
}

let cierratienda2 = function(){
   $("#atrastienda2").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().parent();
       $element.css("display", "none");
       document.getElementById("abretienda").style.display = "block";
       document.getElementById("eliminatienda").style.display = "block";
       document.getElementById("alerta5").style.display="none"
       let inps = document.getElementById("eliminartienda");
       inps.value=""
   })
}

$(document).ready(deletetienda);
$(document).ready(cierratienda2);

//Mostrar las ofertas de cada tienda
function ensoferta(){
    let table = document.getElementById("tablatiendas")

    table.addEventListener("click", function(){
        let tds = event.path[1];
        if(tds.className == "tienda" ){
            $(tds).next().toggle("fast");
        }
    });
}

$(document).ready(ensoferta)

//Traer las tiendas desde la base de datos
function traerTiendas(){
    let tabla = document.getElementById("tiendas");

    let xhttp = new XMLHttpRequest;
    xhttp.open("GET", "http://147.83.159.200:35300/api/shops");
    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let tiendas = JSON.parse(this.response);
            tabla.innerHTML = ' ';
            let a = 0;
            for (item of tiendas){
                let ar =[]
                for(var i=0; i <item.promotions.length; ++i){
                    ar.push(item.promotions[i].offer);
                }
                tabla.innerHTML+= 
                `
                <tr class ="tienda" >
                    <td>${item.name}</td>
                    <td>${item.type}</td>
                    <td>${item.product_name}</td>
                    <td> Posición X: ${item.location_x}, Posición Y: ${item.location_y}</td>
                </tr>
                <tr class="ofertas">
                    <td>
                        <div id= "offers${a}" ></div>
                        <input class = "inpsoferta" type ="text" placeholder= "Añade una oferta" > 
                        <button class="anadeoferta btn btn-warning" type="button"> Oferta</button>
                    </td>
                </tr>
                `
                //Añadir las ofertas en parrafos para así interactuar con ellas 
                let listaofertas = document.getElementById("offers"+ a);
                listaofertas.innerHTML+= ' '
                for(var j = 0; j < ar.length; ++j){
                    listaofertas.innerHTML+= `<p class="poffers">${ar[j]}</p> <button class="eliminaoferta btn btn-danger" style="display:none;">Eliminar</button>`
                }
                ++a;
            }

            // Añadir un evento a los botones de modificar ofertas
            var divs = document.getElementsByClassName("anadeoferta");
            for (var i=0; i< divs.length; i++) {
                divs[i].addEventListener("click",function() {
                   var oferta = this.previousElementSibling.value;
                   var tipo = $(this).parent().parent().prev().children()[1].innerText;
                   var servicio = $(this).parent().parent().prev().children()[0].innerText;
                   anadeofert(oferta,servicio,tipo)
                })
            }

            // Esto es para enseñar el botón de eliminar oferta
            var poffers = document.getElementsByClassName("poffers");
            for(var i = 0; i <poffers.length; ++i){
                poffers[i].addEventListener("click",function() {
                    var btnoferta = this.nextElementSibling;
                    $(btnoferta).toggle(100);
                })
            }

            //Esto es para eliminar una oferta
            var eofertas = document.getElementsByClassName("eliminaoferta");
            for(var i = 0; i <eofertas.length; ++i){
                eofertas[i].addEventListener("click",function() {
                    var nombretienda = $(this).parent().parent().parent().prev().children()[0].innerText;
                    var ofertaout = $(this).prev().text();
                    let mensaje = confirm("¿Estás seguro de que quieres eliminar esta oferta?\n Se modificará la información a todos los pasajeros.\n" + "Tienda: "+ nombretienda + "\nOferta: "+ ofertaout)
                    if(mensaje){
                        eliminaofert(nombretienda,ofertaout);
                    }
                })
            }
        }
    }
}

$(document).ready(traerTiendas);

//Añadir tienda
function anadetienda(){
    let inpstiendas = document.getElementsByClassName("inpstiendas");
    let x = inpstiendas[2].selectedIndex
    let xhttp = new XMLHttpRequest;
    xhttp.open("POST", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: inpstiendas[0].value,
        name: inpstiendas[1].value,
        type: inpstiendas[2].options[x].text,
        product_name: inpstiendas[3].value,
        url_image:inpstiendas[4].value,
        location_x: inpstiendas[5].value,
        location_y: inpstiendas[6].value
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let inps = document.getElementsByClassName("inpstiendas");
            for(item of inps){
                if(item.classList.contains("tienda")) item.value ="0";
                else{
                    item.value =""
                }
            }
            $("#tablatiendas").load(traerTiendas());
        }
        else if(this.readyState == 4 && this.status !=200){
            document.getElementById("alerta5").style.display="block"
        }
    }
}

$(document).ready(function(){
    let atienda = document.getElementById("anadetienda");
    atienda.addEventListener("click", function(){
        let mensaje = confirm("¿Seguro que quieres añadir una tienda? Esto significa que un nuevo negocio ha sido instalado en el aeropuerto.")
        if(mensaje) anadetienda();
    });
})

//Eliminar tienda
function deltienda(inpstiendas){
    let xhttp = new XMLHttpRequest;
    xhttp.open("DELETE", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inpstiendas
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            inpstiendas.value=""
            $("#tablatiendas").load(traerTiendas());
        }
        else if(this.readyState == 4 && this.status !=200){
            document.getElementById("alerta5").style.display="block"
        }
    }
}

$(document).ready(function(){
    let dtienda = document.getElementById("eliminatienda2");
    dtienda.addEventListener("click", function(){
        let inpstiendas = document.getElementById("eliminartienda");
        var nombreaeliminar = inpstiendas.value
        swal({
            title: "¿Estás seguro de que quieres eliminar esta tienda?"+ " "+ nombreaeliminar,
            text: "Esto significa que este servicio ha dejado de estar en el aeropuerto",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deltienda(inpstiendas.value);
                inpstiendas.value = ""
                swal("El servicio ha sido eliminado correctamente", {
                    icon: "success",
                });
            }
          });
    });
})

//Añadir oferta
function anadeofert(oferta, servicio,tipo){
    let xhttp = new XMLHttpRequest;
    xhttp.open("PUT", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: servicio,
        promotion: {
            offer: oferta
        },
        type: tipo
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementsByClassName("inpstiendas").value=""
            $("#tablatiendas").load(traerTiendas());
        }
    }
}

//Eliminar oferta
function eliminaofert(nombre,promocion){
    let xhttp2 = new XMLHttpRequest;
    xhttp2.open("DELETE", "http://147.83.159.200:35300/api/shopsElimina");
    xhttp2.setRequestHeader("Content-Type", "application/json");
    xhttp2.send(JSON.stringify({
        name: nombre,
        promotion: promocion
    }));
    xhttp2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            $("#tablatiendas").load(traerTiendas());
        }
    } 
}