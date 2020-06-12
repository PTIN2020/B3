



window.onbeforeunload = function(){
  this.localStorage.setItem("origen","")
  this.localStorage.setItem("destino","")
  this.localStorage.setItem("fechaVuelo","")
};


function filtros() {
  var origen=this.localStorage.getItem("origen")
  var destino=this.localStorage.getItem("destino")
  var fechaVuelo=this.localStorage.getItem("fechaVuelo")
  if(origen != "" || destino != "" || fechaVuelo != "") {
      traerDatos2();

  } else {
      traerDatos();
  } 
}

$(document).ready(filtros());


function traerDatos2() {

  var title_text = document.getElementById("title-text");
  var title_div = document.getElementById("title-div");
  var title_default = document.getElementById("title-default");
  title_div.style.display = "block";
  title_default.style.display = "none";
  
  
  var num = 0;
  var num2 = 30;
  var origen=this.localStorage.getItem("origen")
  var destino=this.localStorage.getItem("destino")


  if(origen != "") {
    var origen1 = origen;
  } else {
    var origen1 = "cualquier origen"
  }

  if(destino != "") {
    var destino1 = destino;
  } else {
    var destino1 = "cualquier destino"
  }

  title_text.textContent = "Vuelos desde " + origen1 + " a " + destino1;

  var fechaVuelo=this.localStorage.getItem("fechaVuelo")
  var tabla = document.getElementById("contenidovuelos");
  var list = document.getElementById("lista-vuelos");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://147.83.159.200:35300/api/flights", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let datos = JSON.parse(this.response)
          datos.sort(function(a, b) {
              return a.date > b.date;
          });
          
          var groupBy = function(xs, key) {
              return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
              }, {});
            };
            var groubedByDate=groupBy(datos, 'date')
            
          

          Object.keys(groubedByDate)
          Object.keys(groubedByDate).forEach(function(category){
              var añadido = false;
              list.innerHTML+=
              `
              <li id ="${num2}">
                <div class="row d-flex justify-content-start "> 
                  <a class="ml-5 mr-1"> Fecha ${category} </a>
                </div>

                <div class="mt-2"> 
                  <table class="table table-hover" id="myTable">
                    <thead class="thead-dark">
                    <tr>
                      <th>Vuelo</th>										
                      <th>Hora</th>
                      <th>Terminal</th>
                      <th>Puerta</th>
                      <th>Aerolinea<th>
                      <th>Vuelo de<th>
                      
                      </tr>
                    </thead>
                    <tbody id="${num}">
                                          
                  </tbody>
                  </table>
                </div>									
              </li>

              `

              
              
              //console.log(`Team ${category} has ${groubedByDate[category].length} members : `);
               groubedByDate[category].forEach(function(memb,i){                       
                     var tabla2 = document.getElementById(num)                                          
                      if(memb.boarding_time > $("#horaMin option:selected").text() && memb.boarding_time < $("#horaMax option:selected").text() ) {
                        //if(filtered(memb) == true) {   
                          if(origen != "" && destino != "") { 
                            if(memb.from == origen && memb.to == destino) {  
                              console.log("1");                 
                            tabla2.innerHTML+= 
                              `<tr data-href="Vuelos_localizador.html" data-vuelo="${memb.name}">                    
                                  <th>${memb.name}</th>
                                  <th>${memb.boarding_time}</th>
                                  <th>T2</th>
                                  <th>${memb.gate.name}</th>
                                  <th>${memb.airline}<th>
                                  <th>${memb.from}                                                         
                              </tr>`  
                              añadido = true; 
                            }
                          } else if(origen != ""){
                            if(memb.from == origen) {
                              console.log("2");
                              tabla2.innerHTML+= 
                              `<tr data-href="Vuelos_localizador.html" data-vuelo="${memb.name}">                    
                                  <th>${memb.name}</th>
                                  <th>${memb.boarding_time}</th>
                                  <th>T2</th>
                                  <th>${memb.gate.name}</th>
                                  <th>${memb.airline}<th>
                                  <th>${memb.from}                                                         
                              </tr>`    
                            añadido = true; 
                            }
                          }
                        } else if(destino != "") {
                          if(memb.to == destino) {
                            console.log("3"); 
                          `<tr data-href="Vuelos_localizador.html" data-vuelo="${memb.name}">                    
                              <th>${memb.name}</th>
                              <th>${memb.boarding_time}</th>
                              <th>T2</th>
                              <th>${memb.gate.name}</th>
                              <th>${memb.airline}<th>
                              <th>${memb.from}                                                         
                            </tr>`  
                            añadido = true; 
                          }
                        }
                   //  }   
                             
              })

              if(añadido == false) {
                var tabla3 = document.getElementById(num2);
                tabla3.style.display = "none";
              }
              num2++;
              num++;
         });
       
      
      }
  };
};


function traerDatos() {
    var num = 0;
    var num2 = 30;
    var tabla = document.getElementById("contenidovuelos");
    var list = document.getElementById("lista-vuelos");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://147.83.159.200:35300/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response)
            datos.sort(function(a, b) {
                return a.date > b.date;
            });
            
            var groupBy = function(xs, key) {
                return xs.reduce(function(rv, x) {
                  (rv[x[key]] = rv[x[key]] || []).push(x);
                  return rv;
                }, {});
              };
              var groubedByDate=groupBy(datos, 'date')
              
            

            Object.keys(groubedByDate)
            Object.keys(groubedByDate).forEach(function(category){
                var añadido = false;
                list.innerHTML+=
                `
                <li id ="${num2}">
                  <div class="row d-flex justify-content-start "> 
                    <a class="ml-5 mr-1"> Fecha ${category} </a>
                  </div>

                  <div class="mt-2"> 
                    <table class="table table-hover" id="myTable">
                      <thead class="thead-dark">
                      <tr>
                        <th>Vuelo</th>										
                        <th>Hora</th>
                        <th>Terminal</th>
                        <th>Puerta</th>
                        <th>Aerolinea<th>
                        <th>Vuelo de<th>
                        
                        </tr>
                      </thead>
                      <tbody id="${num}">
                                            
                    </tbody>
                    </table>
                  </div>									
                </li>

                `
                
                
                //console.log(`Team ${category} has ${groubedByDate[category].length} members : `);
                 groubedByDate[category].forEach(function(memb,i){                       
                       var tabla2 = document.getElementById(num) 
                                            
                       if(memb.boarding_time > $("#horaMin option:selected").text() && memb.boarding_time < $("#horaMax option:selected").text() ) {
                       // if(filtered(memb) == true) {                          
                            tabla2.innerHTML+= 
                              `<tr data-href="Vuelos_localizador.html" data-vuelo="${memb.name}">                    
                                  <th>${memb.name}</th>
                                  <th>${memb.boarding_time}</th>
                                  <th>T2</th>
                                  <th>${memb.gate.name}</th>
                                  <th>${memb.airline}<th>
                                  <th>${memb.from}                                                         
                              </tr>`  
                              añadido = true; 
                    //    } 
                      }              
                })

                if(añadido == false) {
                  var tabla3 = document.getElementById(num2);
                  tabla3.style.display = "none";
                }
                num2++;
                num++;
           });
         
            
        }
    };
};







$(document).ready(function(){
      
    $(document.body).on("click", "tr[data-href]", function() {         
       window.location.href = this.dataset.href;
  })
})

$(document).ready(function(){
       
    $(document.body).on("click", "tr[data-vuelo]", function() {         
       
       localStorage.setItem("localizadorvuelo",this.dataset.vuelo);
  })
})


  

  


function filtered(memb) {
  var iberia= document.getElementById("aerolineaCheckbox1");
  var vueling = document.getElementById("aerolineaCheckbox2");
  var aireuropa = document.getElementById("aerolineaCheckbox3"); 
  var barcelona = document.getElementById("origenCheckbox1");
  var madrid = document.getElementById("origenCheckbox2");
  var valencia =document.getElementById("origenCheckbox3");
  var bool = false;
  if(iberia.checked) {
    if(memb.airline == "IBERIA") {
      bool = true;
    }
  }
  if(vueling.checked) {
    if(memb.airline == "Vueling") {
      bool = true; 
    }
  }
  if(aireuropa.checked) {
    if(memb.airline == "AirEuropa" ) {
      bool = true;
    }
  }
  if(barcelona.checked) {
    if(memb.from == "Barcelona"){
      bool = true;
    }
  }
  if(madrid.checked) {
    if(memb.from == "Madrid"){
      bool = true;
    }
  }
  if(valencia.checked) {
    if(memb.from == "Valencia"){
      bool = true;
    }
  } 

  return bool;
}

let actualiza = function() {
  $("#actualizar-button").click(function(ev){
    ev.preventDefault()
    var container = document.getElementById("lista-vuelos");
    var content = container.innerHTML ="";
    container.innerHTML= content;  
    var title_text = document.getElementById("title-text");
    var title_div = document.getElementById("title-div");
    var title_default = document.getElementById("title-default"); 
    title_div.style.display ="none" ;
    title_default.style.display ="inline";
    traerDatos();   
  })  
}

$(document).ready(actualiza);


