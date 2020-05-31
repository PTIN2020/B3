window.onload = function() {
  let tgl = document.getElementById("tgl");
  let body = document.body;
 if (this.localStorage.getItem("modo")==0){
  tgl.className = "fas fa-sun";
  body.style.backgroundColor = "#FFF";
  tgl.style.color = "#CC5D03";
  $('.titulo').removeClass('nocturno');
  $('.btn1').removeClass('nocturno');
  $('.btn2').removeClass('nocturno');
  $('.btn3').removeClass('nocturno');
  $('.titulotabla').removeClass('nocturno');
  $('.tipofiltro').removeClass('nocturno');
  $('.titulofiltrado').removeClass('nocturno');
  $('.inps').removeClass('nocturno');

 
 }
 else{
  tgl.className = "fas fa-moon";
  body.style.backgroundColor = "#2C3545";
  tgl.style.color = "#FFF";
  $('.titulo').addClass('nocturno');
  $('.btn1').addClass('nocturno');
  $('.btn2').addClass('nocturno');
  $('.btn3').addClass('nocturno');
  $('.titulotabla').addClass('nocturno');
  $('.tip').addClass('nocturno');
  $('.tipofiltro').addClass('nocturno');
  $('.titulofiltrado').addClass('nocturno');
  $('.inps').addClass('nocturno');
 }
}


function change(){ 
  let tgl = document.getElementById("tgl");
  let body = document.body;
  if (tgl.className == "fas fa-moon"){
    tgl.className = "fas fa-sun";
    body.style.backgroundColor = "#FFF";
    tgl.style.color = "#CC5D03";
    $('.titulo').removeClass('nocturno');
    $('.btn1').removeClass('nocturno');
    $('.btn2').removeClass('nocturno');
    $('.btn3').removeClass('nocturno');
    $('.titulotabla').removeClass('nocturno');
    $('.tipofiltro').removeClass('nocturno');
    $('.titulofiltrado').removeClass('nocturno');
    $('.inps').removeClass('nocturno');
    var modo=0;
    localStorage.setItem("modo",modo);
  }
  else{
     tgl.className = "fas fa-moon";
     body.style.backgroundColor = "#2C3545";
     tgl.style.color = "#FFF";
     $('.titulo').addClass('nocturno');
     $('.btn1').addClass('nocturno');
     $('.btn2').addClass('nocturno');
     $('.btn3').addClass('nocturno');
     $('.titulotabla').addClass('nocturno');
     $('.tip').addClass('nocturno');
     $('.tipofiltro').addClass('nocturno');
     $('.titulofiltrado').addClass('nocturno');
     $('.inps').addClass('nocturno');
     var modo=1;
     localStorage.setItem("modo",modo);
  }
}