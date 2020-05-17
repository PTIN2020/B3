// Mostrar admins
$(document).ready(function(){
    let tabla = document.getElementById("admins");
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/administrators", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response);
            tabla.innerHTML = ' ';
            for (item of datos){
                tabla.innerHTML+= 
                `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.job}</td>
                </tr>` 
            }
        }
    };
})

// Panel de elección de lo que hacer

// Mostrar formulario para añadir trabajador
let abre = function(){
    $("#abre").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("anadir").style.display = "flex";
       document.getElementById("eleccion").style.display = "none";
    })
}

let cierra = function(){
   $("#atras").click(function(ev){
       ev.preventDefault();
       document.getElementById("alerta").style.display ="none";
       document.getElementById("anadir").style.display = "none";
       document.getElementById("eleccion").style.display = "block";
       let inps = document.getElementsByClassName("inpts");
       for(item of inps){
           item.value ="";
       }
   })
}

$(document).ready(abre);
$(document).ready(cierra);

//Mostrar apartado para eliminar un trabajador

let elimina = function(){
    $("#elimina").click(function(ev){
       ev.preventDefault();
       let $element= $(this).parent().prev();
       $element.css("display", "flex");
       document.getElementById("eliminar").style.display = "flex";
       document.getElementById("eleccion").style.display = "none";
    })
}

let cierra2 = function(){
   $("#atras2").click(function(ev){
       ev.preventDefault();
       document.getElementById("alerta").style.display ="none";
       document.getElementById("eliminar").style.display = "none";
       document.getElementById("eleccion").style.display = "block";
       let inps = document.getElementsByClassName("inpts2");
       for(item of inps){
           item.value ="";
       }
   })
}

$(document).ready(elimina);
$(document).ready(cierra2);

// Añadir un trabajador.

function anadirTrabajador() {

    var inputs = document.getElementsByClassName("inpts");

    if(inputs[3].value == inputs[4].value){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3000/api/administrators", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify({
            name: inputs[0].value,
            id: inputs[1].value,
            email: inputs[2].value,
            password: inputs[3].value,
            job: inputs[5].value,
        }));
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.response));
                location.reload();
            }
            else if (this.status !=200){
                document.getElementById("alerta").style.display ="block";
            }
        };
    }
    else{
        alert("Las contraseñas introducidas no coinciden")
    }
};

$(document).ready(function(){
    var anade = document.getElementById("anade");
    anade.addEventListener("click", anadirTrabajador);
});

//Eliminar un trabajador.

function eliminaTrabajador() {

    var inputs = document.getElementsByClassName("inpts2");
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:3000/api/administrators/eliminar", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        name: inputs[0].value,
        id: inputs[1].value,
        job: inputs[2].value
    }))
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("alerta").style.display ="none";
            location.reload();
        }
        else if (this.status !=200){
            console.log(this.response);
            document.getElementById("alerta").style.display ="block";
        }
    };
};

$(document).ready(function(){
    var elimina = document.getElementById("elimina2");
    elimina.addEventListener("click", function(){
        let mensaje = confirm("¿Estás seguro de que quieres eliminar a este trabajador?")
        if(mensaje){
            eliminaTrabajador()
        }
    });
});