
function traerDatos() {
    var num = 0;
    var tabla = document.getElementById("contenidovuelos");
    var list = document.getElementById("lista-vuelos");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/api/flights", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.response)
            datos.sort(function(a, b) {
                return a.date > b.date;
            });
            console.log(datos)
            var groupBy = function(xs, key) {
                return xs.reduce(function(rv, x) {
                  (rv[x[key]] = rv[x[key]] || []).push(x);
                  return rv;
                }, {});
              };
              var groubedByDate=groupBy(datos, 'date')
              console.log(groubedByDate);
            

            Object.keys(groubedByDate)
            Object.keys(groubedByDate).forEach(function(category){
                list.innerHTML+=
                `
                        <li>
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
										<th>Estado</th>
									  </tr>
								  </thead>
                  <tbody id="${num}">
                                        
								</tbody>
								</table>
							</div>									
						</li>

                `
                console.log(`Team ${category} has ${groubedByDate[category].length} members : `);
                 groubedByDate[category].forEach(function(memb,i){
                       var tabla2 = document.getElementById(num)
                       tabla2.innerHTML+= 
                        `<tr data-href="Vuelos_localizador.html" data-vuelo="${memb.name}">                    
                            <th>${memb.name}</th>
                            <th>${memb.departure_time}</th>
                            <th>T2</th>
                            <th>${memb.gate.name}</th>
                            <th>${memb.state}</th>
                                               
                        </tr>`                  
                })
                num++;
           });
         
            
        }
    };
};




$(document).ready(traerDatos);

$(document).ready(function(){
    console.log("click")    
    $(document.body).on("click", "tr[data-href]", function() {         
       window.location.href = this.dataset.href;
  })
})

$(document).ready(function(){
    console.log("click")    
    $(document.body).on("click", "tr[data-vuelo]", function() {         
       
       localStorage.setItem("localizadorvuelo",this.dataset.vuelo);
  })
})


