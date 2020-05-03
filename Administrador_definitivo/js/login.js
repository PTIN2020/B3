document.addEventListener('keydown', function( event ) {
    var mayus = event.getModifierState && event.getModifierState( 'CapsLock' );
    console.log( mayus ); //que será verdadero cuando presiones Bloq Mayus
    if(mayus){
        $("#mayus").css("visibility", "visible")
    }
    else{
        $("#mayus").css("visibility", "hidden")
    }
});

/* Mostrar contraseña*/

function mostrarContrasena(){
    var tipo = document.getElementById("pass");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

/* POST*/

function entra(){
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("pass").value;
    var xhttp = new XMLHttpRequest;
    xhttp.open('POST', 'http://localhost:3000/api/login', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({
        id: user,
        password: password
    }));

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          location.href = "./indexAdministrador.html";
        }
        else if (this.readyState == 4 && this.stauts !=200){
            console.log(this.response);
            alert("Usuario o contraseña no válidos. Revise los campos.");
        }
    };
}