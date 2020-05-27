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
       let inps = document.getElementById("eliminartienda");
       inps.value=""
   })
}

$(document).ready(deletetienda);
$(document).ready(cierratienda2);

//Mostrar las ofertas de cada tienda
$(document).ready(function(){
    let table = document.getElementById("tablatiendas")

    table.addEventListener("click", function(){
        let tds = event.path[1]
        if(tds.className == "tienda" ){
            tds.nextElementSibling.style.display = "block";
            console.log(tds)
        }
    });
})



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
                        <p>${ar.join("<br/>")}</p>
                        <input class = "inpsoferta" type ="text" placeholder= "Añade una oferta" > 
                        <button class="anadeoferta" type="button"> Oferta</button>
                    </td>
                </tr>
                `
            }
            // Añadir un evento a los botones de modificar ofertas
            var divs = document.getElementsByClassName("anadeoferta");
            for (var i=0; i< divs.length; i++) {
                divs[i].addEventListener("click",function() {
                   var oferta = this.previousElementSibling.value;
                   var servicio = $(this).parent().parent().prev().children()[0].innerText;
                   anadeofert(oferta,servicio)
                })
            }
        }
    }
}

$(document).ready(traerTiendas);

//Añadir tienda
function anadetienda(){
    let inpstiendas = document.getElementsByClassName("inpstiendas");

    let xhttp = new XMLHttpRequest;
    xhttp.open("POST", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: inpstiendas[0].value,
        name: inpstiendas[1].value,
        type: inpstiendas[2].value,
        product_name: inpstiendas[3].value,
        location_x: inpstiendas[4].value,
        location_y: inpstiendas[5].value
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let inps = document.getElementsByClassName("inpstiendas");
            for(item of inps){
                item.value =""
            }
            $("#tablatiendas").load(traerTiendas());
        }
    }
}

$(document).ready(function(){
    let atienda = document.getElementById("anadetienda");
    atienda.addEventListener("click", anadetienda);
})

//Eliminar tienda
function deltienda(){
    let inpstiendas = document.getElementById("eliminartienda");
    let xhttp = new XMLHttpRequest;
    xhttp.open("DELETE", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inpstiendas.value
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementsByClassName("inpstiendas").value=""
            $("#tablatiendas").load(traerTiendas());
        }
        else if(this.status !=200){
            console.log(this.response)
        }
    }
}

$(document).ready(function(){
    let dtienda = document.getElementById("eliminatienda2");
    dtienda.addEventListener("click", deltienda);
})

//Añadir oferta
function anadeofert(oferta, servicio){
    let xhttp = new XMLHttpRequest;
    xhttp.open("PUT", "http://147.83.159.200:35300/api/shops");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: servicio,
        promotion: {
            offer: oferta
        }
    }));
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementsByClassName("inpstiendas").value=""
            $("#tablatiendas").load(traerTiendas());
        }
        else if(this.status !=200){
            console.log(this.response)
        }
    }
}
