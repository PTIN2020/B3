

 function guardarValor(){
     var localizadorvuelo=$("#input_localizador_index").val();
      localStorage.setItem("localizadorvuelo",localizadorvuelo);
     
 }
 function valores_vuelos() {
    var origen=$("#inputOrigen").val();
    var destino=$("#inputDestino").val();
    var fecha=$("#inputFecha").val();
    localStorage.setItem("origen",origen);
    localStorage.setItem("destino",destino);
    localStorage.setItem("fechaVuelo",fecha);
}

