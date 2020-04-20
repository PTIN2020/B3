 let desplega = function(){
     $(".desplegable").click(function(ev){
        ev.preventDefault();
        let $parentfirst= $(this).parent().parent().next();
        let $parentsecond= $(this).parent().parent().next().next();

        ensena($parentfirst);
        ensena($parentsecond);
     })
 }

 let ensena= function($element){
    if($element && $element.hasClass("desplegado")){
        if($element.css("display")== "none"){
            $element.fadeIn("slow");
        }
        else{
            $element.hide();
        }
    }
 }

 $(document).ready(desplega);